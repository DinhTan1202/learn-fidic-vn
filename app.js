import {
  I18N,
  CLAUSES_2017,
  SUBCLAUSES as BASE_SUBCLAUSES,
  LEARN_ITEMS,
  TIME_CHEATSHEET,
  QUIZ,
  CONTRACT_MODELS,
  PROJECT_CASE
} from './data/fidic-data.js';

import { EXTENDED_SUBCLAUSES, VN_LAW_NOTES } from './data/clauses-extended.js';
import { RED17_PART1 } from './data/red17-part1.js';
import { RED17_PART2 } from './data/red17-part2.js';
import { RED17_PART3 } from './data/red17-part3.js';

import {
  SUBCLAUSE_META,
  FLOWCHARTS,
  CHECKLISTS,
  GLOSSARY,
  CROSS_REFS,
  BOOK_COMPARISON_ROWS
} from './data/extra-data.js';

const SUBCLAUSES = [
  ...BASE_SUBCLAUSES,
  ...EXTENDED_SUBCLAUSES,
  ...RED17_PART1,
  ...RED17_PART2,
  ...RED17_PART3
].sort((a, b) => {
  if (a.clause !== b.clause) return a.clause - b.clause;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
});

function loadProjects() {
  const raw = localStorage.getItem('fidic_projects');
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    } catch {}
  }
  const legacyTracker = JSON.parse(localStorage.getItem('fidic_tracker') || '[]');
  const legacyChecks = JSON.parse(localStorage.getItem('fidic_checks') || '{}');
  const legacyMeta = JSON.parse(
    localStorage.getItem('fidic_proj_meta') || '{"name":"Dự án Cầu vượt Quốc lộ","contract":"HĐ-FIDIC-2017/01"}'
  );
  return [{ id: 'p1', name: legacyMeta.name, contract: legacyMeta.contract, tracker: legacyTracker, checks: legacyChecks }];
}

const initialProjects = loadProjects();
const initialActiveId = localStorage.getItem('fidic_active_project') || initialProjects[0].id;
const initialActiveProj = initialProjects.find((p) => p.id === initialActiveId) || initialProjects[0];

const state = {
  lang: localStorage.getItem('fidic_lang') || 'bi',
  theme: localStorage.getItem('fidic_theme') || 'auto',
  saved: JSON.parse(localStorage.getItem('fidic_saved') || '[]'),
  notes: JSON.parse(localStorage.getItem('fidic_notes') || '{}'),
  projects: initialProjects,
  activeProjectId: initialActiveProj.id,
  checks: initialActiveProj.checks || {},
  tracker: initialActiveProj.tracker || [],
  projectMeta: { name: initialActiveProj.name, contract: initialActiveProj.contract },
  openNotes: new Set(),
  search: '',
  allBooksFilter: false,
  timelimitsOnly: false,
  notesOnly: false,
  roleFilter: 'all',
  typeFilter: 'all',
  compareMode: false,
  tocOpen: false,
  aiOpen: false,
  aiMode: 'chat',
  aiSettingsOpen: false,
  aiLoading: false,
  geminiKey: localStorage.getItem('fidic_gemini_key') || '',
  geminiModel: (() => {
    const savedModel = localStorage.getItem('fidic_gemini_model');
    if (
      !savedModel ||
      savedModel === 'gemini-2.5-pro' ||
      savedModel === 'gemini-2.0-flash' ||
      savedModel === 'gemini-2.5-flash' ||
      /(tts|image|audio|video|robotics|computer-use|embedding|aqa)/i.test(savedModel)
    ) {
      return 'gemini-3.8-flash';
    }
    return savedModel;
  })(),
  availableModels: [],
  aiMsgs: [],
  presList: [],
  presIdx: -1
};

const $view = document.getElementById('view');
const $modalRoot = document.getElementById('modalRoot');
const $toast = document.getElementById('toast');
let toastTimer = null;

function t(key, ...args) {
  const dict = state.lang === 'en' ? I18N.en : I18N.vi;
  const val = dict[key];
  return typeof val === 'function' ? val(...args) : val;
}

function biText(vi, en, sep = ' · ') {
  if (state.lang === 'vi') return vi;
  if (state.lang === 'en') return en;
  return `${vi}${sep}${en}`;
}

function showToast(msg) {
  $toast.textContent = msg;
  $toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $toast.classList.remove('show'), 2200);
}

function applyTheme() {
  const root = document.documentElement;
  if (state.theme === 'auto') {
    root.removeAttribute('data-theme');
    document.getElementById('themeIcon').textContent = '◐';
  } else if (state.theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    document.getElementById('themeIcon').textContent = '☾';
  } else {
    root.setAttribute('data-theme', 'light');
    document.getElementById('themeIcon').textContent = '☀';
  }
}

function applyHeaderI18n() {
  document.documentElement.lang = state.lang === 'en' ? 'en' : 'vi';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    el.textContent = t(k);
  });
  document.querySelectorAll('#langSeg button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });
}

function parseHash() {
  const raw = (location.hash || '#').slice(1);
  if (!raw) return { route: 'home' };
  if (['learn', 'models', 'project', 'saved'].includes(raw)) {
    return { route: raw };
  }
  const m = raw.match(/^(red|yel|sil)-(17|99)(?:-(.+))?$/);
  if (m) {
    const subId = m[3] ? m[3].replace(/-/g, '.') : null;
    return { route: 'books', book: m[1], ed: m[2], subId };
  }
  return { route: 'home' };
}

function updateActiveTab(route) {
  document.querySelectorAll('#mainTabs .tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.route === route);
  });
}

function keyOf(item) {
  return `${item.book}-${item.ed}-${item.id}`;
}

function isSaved(item) {
  return state.saved.includes(keyOf(item));
}

function toggleSave(item) {
  const k = keyOf(item);
  if (state.saved.includes(k)) {
    state.saved = state.saved.filter((x) => x !== k);
    showToast(t('removedToast'));
  } else {
    state.saved.push(k);
    showToast(t('savedToast'));
  }
  localStorage.setItem('fidic_saved', JSON.stringify(state.saved));
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightText(str, q = state.search) {
  const safe = escapeHtml(str);
  const needle = (q || '').trim();
  if (!needle) return safe;
  const escRe = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return safe.replace(new RegExp(`(${escRe})`, 'gi'), '<mark class="hl-match">$1</mark>');
}

function syncActiveProject() {
  const idx = state.projects.findIndex((p) => p.id === state.activeProjectId);
  if (idx >= 0) {
    state.projects[idx] = {
      ...state.projects[idx],
      name: state.projectMeta.name,
      contract: state.projectMeta.contract,
      tracker: state.tracker,
      checks: state.checks
    };
  }
  localStorage.setItem('fidic_projects', JSON.stringify(state.projects));
  localStorage.setItem('fidic_active_project', state.activeProjectId);
  localStorage.setItem('fidic_tracker', JSON.stringify(state.tracker));
  localStorage.setItem('fidic_checks', JSON.stringify(state.checks));
  localStorage.setItem('fidic_proj_meta', JSON.stringify(state.projectMeta));
}

function renderAiMarkdown(str) {
  let s = escapeHtml(str);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  const validIds = new Set(SUBCLAUSES.filter((x) => x.book === 'red' && x.ed === '17').map((x) => x.id));
  s = s.replace(/\b(\d{1,2}\.\d{1,2})\b/g, (m, id) =>
    validIds.has(id)
      ? `<a href="#red-17-${id.replace(/\./g, '-')}" class="ai-clause-link">${id}</a>`
      : m
  );
  return s;
}

function printBannerHtml() {
  const today = new Date().toLocaleDateString(state.lang === 'en' ? 'en-GB' : 'vi-VN');
  return `<div class="print-banner"><strong>${escapeHtml(state.projectMeta.name)}</strong> · ${escapeHtml(
    state.projectMeta.contract
  )} · ${today}</div>`;
}

function renderCard(item, highlightId = null) {
  const k = keyOf(item);
  const isHl = highlightId && item.id === highlightId;
  const saved = isSaved(item);
  const userNote = state.notes[k] || '';
  const isNoteOpen = state.openNotes.has(k);
  const tlCount = item.timelimits?.length || 0;
  const bookCls = `bk-${item.book}`;

  const titleMain = state.lang === 'en' ? item.enTitle : item.viTitle;
  const titleAlt = state.lang === 'bi' ? `<span class="alt">${highlightText(item.enTitle)}</span>` : '';

  let bodyHtml = '';
  if (state.compareMode && item.ed === '17') {
    const eqItems = (item.eq99 || [])
      .map((eqId) => SUBCLAUSES.find((s) => s.book === item.book && s.ed === '99' && s.id === eqId))
      .filter(Boolean);
    const eqText = eqItems.length
      ? eqItems
          .map(
            (e) =>
              `<p><strong>${e.id} ${escapeHtml(state.lang === 'en' ? e.enTitle : e.viTitle)}</strong><br>${escapeHtml(
                state.lang === 'en' ? e.enBody : e.viBody
              )}</p>`
          )
          .join('')
      : `<p style="color:var(--mute)">${
          state.lang === 'en' ? 'No direct 1999 summary loaded.' : 'Chưa có dữ liệu tóm tắt 1999 tương ứng.'
        }</p>`;

    bodyHtml = `
      <div class="cmp2">
        <div class="cmp-col"><div class="cmphead">2017 Edition</div><p>${escapeHtml(state.lang === 'en' ? item.enBody : item.viBody)}</p></div>
        <div class="cmp-col"><div class="cmphead">1999 Edition</div>${eqText}</div>
      </div>
    `;
  } else if (state.lang === 'bi') {
    bodyHtml = `
      <div class="txt two">
        <div class="col-vi"><span class="col-label">Tiếng Việt</span><div>${highlightText(item.viBody)}</div></div>
        <div class="col-en"><span class="col-label">English</span><div>${highlightText(item.enBody)}</div></div>
      </div>
    `;
  } else if (state.lang === 'vi') {
    bodyHtml = `<div class="txt single"><div class="col-vi">${highlightText(item.viBody)}</div></div>`;
  } else {
    bodyHtml = `<div class="txt single"><div class="col-en">${highlightText(item.enBody)}</div></div>`;
  }

  const tlsHtml = tlCount
    ? `<div class="tls">${item.timelimits
        .map((tl) => {
          const badge = state.lang === 'en' ? tl.badgeEn : tl.badge;
          const desc =
            state.lang === 'bi'
              ? `${escapeHtml(tl.vi)}<span class="tl-en">${escapeHtml(tl.en)}</span>`
              : state.lang === 'en'
              ? escapeHtml(tl.en)
              : escapeHtml(tl.vi);
          return `<div class="tl"><span class="d ${tl.dashed ? 'nd' : ''}">${escapeHtml(badge)}</span><div class="tl-desc">${desc}</div></div>`;
        })
        .join('')}</div>`
    : '';

  const vnLaw = item.ed === '17' ? VN_LAW_NOTES[item.id] : null;
  const vnLawHtml = vnLaw
    ? `<div class="vn-law-box"><strong>🇻🇳 ${biText('Đối chiếu Pháp luật VN', 'Vietnam Law Note')}:</strong> ${escapeHtml(
        state.lang === 'en' ? vnLaw.en : vnLaw.vi
      )}${state.lang === 'bi' ? `<div style="color:var(--mute);margin-top:4px;font-size:12.5px">${escapeHtml(vnLaw.en)}</div>` : ''}</div>`
    : '';

  const notePreviewHtml =
    userNote && !isNoteOpen ? `<div class="note-preview"><strong>📝 ${t('note')}:</strong> ${escapeHtml(userNote)}</div>` : '';

  const noteEditorHtml = isNoteOpen
    ? `
      <div class="note-box">
        <textarea placeholder="${t('notePlaceholder')}" data-note-input>${escapeHtml(userNote)}</textarea>
        <div class="note-actions">
          <button type="button" class="act-btn saved" data-act="save-note">✓ ${t('saveNote')}</button>
          ${userNote ? `<button type="button" class="act-btn" data-act="del-note">🗑 ${t('deleteNote')}</button>` : ''}
        </div>
      </div>
    `
    : '';

  const eqHtml =
    item.eq99 && item.eq99.length
      ? `<div class="eq"><span>${t('eq1999')}</span>${item.eq99
          .map((e) => `<a href="#${item.book}-99-${e.replace(/\./g, '-')}">${escapeHtml(e)}</a>`)
          .join('')}</div>`
      : '<div></div>';

  const cardId = `c-${item.book}-${item.ed}-${item.id.replace(/\./g, '-')}`;

  return `
    <article class="page ${bookCls} ${isHl ? 'hl' : ''}" id="${cardId}" data-key="${k}">
      <div class="page-head">
        <div class="page-head-left">
          <span class="num">${escapeHtml(item.id)}</span>
          <div class="page-title"><h3>${highlightText(titleMain)}</h3>${titleAlt}</div>
        </div>
        ${tlCount ? `<span class="tl-pill">${t('timeLimitsTag', tlCount)}</span>` : ''}
      </div>
      ${bodyHtml}
      ${tlsHtml}
      ${vnLawHtml}
      ${notePreviewHtml}
      ${noteEditorHtml}
      <div class="foot">
        ${eqHtml}
        <div class="actions">
          <button type="button" class="act-btn" data-act="copy">📋 ${t('copy')}</button>
          <button type="button" class="act-btn" data-act="pdf">🖨 ${t('pdf')}</button>
          <button type="button" class="act-btn ${saved ? 'saved' : ''}" data-act="save">★ ${saved ? t('savedBtn') : t('save')}</button>
          <button type="button" class="act-btn ${userNote ? 'has-note' : ''}" data-act="note">📝 ${t('note')}</button>
          <button type="button" class="act-btn" data-act="link">🔗 ${t('copyLink')}</button>
          <button type="button" class="act-btn" data-act="present">⛶ ${t('present')}</button>
          <button type="button" class="act-btn" data-act="cmp3">⇄ ${t('compare3')}</button>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  document.title =
    state.lang === 'en'
      ? 'Learn FIDIC · Bilingual Contract Notebook'
      : 'Học FIDIC · Sổ tay Hợp đồng Song ngữ Anh - Việt';
  const books = ['red', 'yel', 'sil'];
  const dict = state.lang === 'en' ? I18N.en.books : I18N.vi.books;
  const noteCount = Object.keys(state.notes).length;

  $view.innerHTML = `
    <section class="hero">
      <h1>${biText('Sổ tay Hợp đồng FIDIC Song ngữ Anh - Việt', 'Bilingual FIDIC Contract Notebook (EN - VI)')}</h1>
      <p>${biText(
        'Tra cứu nhanh 21 Điều khoản Sách Đỏ, Sách Vàng, Sách Bạc (1999 & 2017) kèm sơ đồ luồng, công cụ theo dõi thời hạn dự án, checklist, ghi chú cá nhân và trợ lý hỏi đáp.',
        'Explore the 21 Clauses of Red, Yellow, and Silver Books (1999 & 2017) with flowcharts, project deadline tracker, checklists, personal notes, and FIDIC assistant.'
      )}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px">
        <span class="tl-pill">📚 ${SUBCLAUSES.length} ${biText('điều khoản tóm tắt', 'sub-clauses')}</span>
        <span class="tl-pill">★ ${state.saved.length} ${biText('đã lưu', 'saved')}</span>
        <span class="tl-pill">📝 ${noteCount} ${biText('ghi chú cá nhân', 'personal notes')}</span>
        <span class="tl-pill">📅 ${state.tracker.length} ${biText('sự việc theo dõi', 'tracked events')}</span>
      </div>
    </section>
    <section class="shelf">
      ${books
        .map(
          (b) => `
        <div class="book-card bk-${b}">
          <div class="book-badge"><small>FIDIC</small>2017</div>
          <h2>${escapeHtml(dict[b].name)}</h2>
          <p>${escapeHtml(dict[b].desc)}</p>
          <div class="book-links">
            <a href="#${b}-17" class="btn-primary">${biText('Mở bản 2017', 'Open 2017')}</a>
            <a href="#${b}-17-20-2" class="btn-ghost">${biText('Điều khoản 20.2', 'Sub-Clause 20.2')}</a>
          </div>
        </div>
      `
        )
        .join('')}
    </section>
    <section class="wrap" style="padding-top:0">
      <div class="card-box">
        <h3 style="margin-top:0">${biText('Truy cập nhanh các Điều khoản trọng tâm (Red Book 2017)', 'Quick Jump to Key Sub-Clauses (Red Book 2017)')}</h3>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          <a href="#red-17-3-7" class="act-btn">3.7 ${biText('Thỏa thuận / Quyết định', 'Agreement / Determination')}</a>
          <a href="#red-17-8-5" class="act-btn">8.5 ${biText('Gia hạn thời gian (EOT)', 'Extension of Time')}</a>
          <a href="#red-17-13-3" class="act-btn">13.3 ${biText('Thay đổi (Variations)', 'Variations')}</a>
          <a href="#red-17-14-6" class="act-btn">14.6 ${biText('Thanh toán IPC', 'Issue of IPC')}</a>
          <a href="#red-17-20-2" class="act-btn">20.2 ${biText('Khiếu nại (Claims)', 'Claims for Payment/EOT')}</a>
          <a href="#red-17-21-4" class="act-btn">21.4 ${biText('Tranh chấp DAAB', 'DAAB Decision')}</a>
        </div>
      </div>
    </section>
  `;
}

function renderBooks({ book, ed, subId }, preserveScroll = false) {
  const dict = state.lang === 'en' ? I18N.en.books : I18N.vi.books;
  const bookInfo = dict[book];
  document.title = `${subId ? subId + ' · ' : ''}${bookInfo.short} 20${ed} · ${t('brand')}`;

  const filtered = SUBCLAUSES.filter((item) => {
    if (!state.allBooksFilter && (item.book !== book || item.ed !== ed)) return false;
    if (state.timelimitsOnly && (!item.timelimits || item.timelimits.length === 0)) return false;
    if (state.notesOnly && !state.notes[keyOf(item)]) return false;

    const meta = SUBCLAUSE_META[item.id] || {
      roles: ['all'],
      types: item.timelimits?.length ? ['time'] : ['general']
    };
    if (state.roleFilter !== 'all' && !meta.roles.includes('all') && !meta.roles.includes(state.roleFilter)) return false;
    if (state.typeFilter !== 'all' && !meta.types.includes(state.typeFilter)) return false;

    if (state.search.trim()) {
      const q = state.search.trim().toLowerCase();
      const noteTxt = (state.notes[keyOf(item)] || '').toLowerCase();
      const hay = `${item.id} ${item.viTitle} ${item.enTitle} ${item.viBody} ${item.enBody} ${noteTxt}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  state.presList = filtered;

  const grouped = new Map();
  for (const item of filtered) {
    if (!grouped.has(item.clause)) grouped.set(item.clause, []);
    grouped.get(item.clause).push(item);
  }

  const tocHtml = CLAUSES_2017.map((c) => {
    const first = SUBCLAUSES.find((s) => s.book === book && s.ed === ed && s.clause === c.num);
    const targetHash = first ? `#${book}-${ed}-${first.id.replace(/\./g, '-')}` : `#${book}-${ed}`;
    const label = state.lang === 'en' ? c.en : c.vi;
    const isActive = subId && Number(subId.split('.')[0]) === c.num;
    return `<a href="${targetHash}" class="${isActive ? 'active' : ''}"><span class="cnum">${c.num}</span><span>${escapeHtml(label)}</span></a>`;
  }).join('');

  let mainCardsHtml = '';
  if (filtered.length === 0) {
    mainCardsHtml = `
      <div class="card-box">
        <p>${t('noResults')}</p>
        <button type="button" class="act-btn" id="resetFiltersBtn">↺ ${biText('Xóa bộ lọc', 'Reset filters')}</button>
      </div>
    `;
  } else {
    for (const [clauseNum, items] of grouped.entries()) {
      const meta = CLAUSES_2017.find((c) => c.num === clauseNum) || { vi: '', en: '' };
      mainCardsHtml += `
        <div class="clh">
          <div class="clh-num">${clauseNum}</div>
          <div class="clh-titles">
            <h2>${escapeHtml(state.lang === 'en' ? meta.en : meta.vi)}</h2>
            ${state.lang === 'bi' ? `<div class="clh-sub">${escapeHtml(meta.en)}</div>` : ''}
          </div>
        </div>
        ${items.map((it) => renderCard(it, subId)).join('')}
      `;
    }
  }

  $view.innerHTML = `
    <section class="band bk-${book}">
      <div class="band-inner">
        <div class="band-info">
          <div class="book-badge"><small>FIDIC</small>20${ed}</div>
          <div class="band-title">
            <h1>${escapeHtml(bookInfo.name)} · 20${ed}</h1>
            <div class="sub">${escapeHtml(bookInfo.desc)}</div>
          </div>
        </div>
        <div class="band-controls">
          <div class="bookpick" role="group" aria-label="Book Picker">
            <button type="button" data-book="red" class="${book === 'red' ? 'active' : ''}">${escapeHtml(dict.red.short)}</button>
            <button type="button" data-book="yel" class="${book === 'yel' ? 'active' : ''}">${escapeHtml(dict.yel.short)}</button>
            <button type="button" data-book="sil" class="${book === 'sil' ? 'active' : ''}">${escapeHtml(dict.sil.short)}</button>
          </div>
          <div class="seg" role="group" aria-label="Edition Picker">
            <button type="button" data-ed="99" class="${ed === '99' && !state.compareMode ? 'active' : ''}">1999</button>
            <button type="button" data-ed="17" class="${ed === '17' && !state.compareMode ? 'active' : ''}">2017</button>
            <button type="button" data-ed="cmp" class="${state.compareMode ? 'active' : ''}">${t('compareMode')}</button>
          </div>
        </div>
      </div>
    </section>

    <div class="tools">
      <div class="tools-inner">
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="search" id="searchInput" value="${escapeHtml(state.search)}" placeholder="${t('searchPh')}" />
          <button type="button" id="clearSearch" class="clear-search ${state.search ? 'visible' : ''}" aria-label="Clear search">✕</button>
        </div>
        <select class="filter-select" id="roleFilter" aria-label="Filter by Party">
          <option value="all" ${state.roleFilter === 'all' ? 'selected' : ''}>${biText('Mọi bên', 'All Parties')}</option>
          <option value="employer" ${state.roleFilter === 'employer' ? 'selected' : ''}>${biText('Chủ đầu tư', 'Employer')}</option>
          <option value="contractor" ${state.roleFilter === 'contractor' ? 'selected' : ''}>${biText('Nhà thầu', 'Contractor')}</option>
          <option value="engineer" ${state.roleFilter === 'engineer' ? 'selected' : ''}>${biText('Nhà tư vấn', 'Engineer')}</option>
        </select>
        <select class="filter-select" id="typeFilter" aria-label="Filter by Obligation">
          <option value="all" ${state.typeFilter === 'all' ? 'selected' : ''}>${biText('Mọi loại', 'All Types')}</option>
          <option value="notice" ${state.typeFilter === 'notice' ? 'selected' : ''}>${biText('Thông báo', 'Notice')}</option>
          <option value="time" ${state.typeFilter === 'time' ? 'selected' : ''}>${biText('Thời gian / EOT', 'Time / EOT')}</option>
          <option value="payment" ${state.typeFilter === 'payment' ? 'selected' : ''}>${biText('Thanh toán', 'Payment')}</option>
          <option value="security" ${state.typeFilter === 'security' ? 'selected' : ''}>${biText('Bảo lãnh / BH', 'Security / Ins.')}</option>
        </select>
        <button type="button" class="chip ${state.allBooksFilter ? 'active' : ''}" id="chipAllBooks">${t('allBooks')}</button>
        <button type="button" class="chip ${state.timelimitsOnly ? 'active' : ''}" id="chipTimelimits">${t('hasTimelimits')}</button>
        <button type="button" class="chip ${state.notesOnly ? 'active' : ''}" id="chipNotesOnly">📝 ${t('note')}</button>
        <span class="res-count">${t('results', filtered.length)}</span>
      </div>
    </div>

    <div class="wrap layout bk-${book}">
      ${printBannerHtml()}
      <div>
        <button type="button" class="toc-toggle" id="tocToggleBtn">☰ ${t('tocTitle')}</button>
        <nav class="index ${state.tocOpen ? 'open' : ''}" aria-label="Clause Index">
          <div class="index-title">${t('tocTitle')}</div>
          ${tocHtml}
        </nav>
      </div>
      <div>${mainCardsHtml}</div>
    </div>
  `;

  document.getElementById('tocToggleBtn')?.addEventListener('click', () => {
    state.tocOpen = !state.tocOpen;
    $view.querySelector('.index')?.classList.toggle('open', state.tocOpen);
  });

  document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
    state.search = '';
    state.allBooksFilter = false;
    state.timelimitsOnly = false;
    state.notesOnly = false;
    state.roleFilter = 'all';
    state.typeFilter = 'all';
    render();
  });

  $view.querySelectorAll('.bookpick button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.compareMode = false;
      location.hash = `#${btn.dataset.book}-${ed}`;
    });
  });

  $view.querySelectorAll('.seg button').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.ed === 'cmp') {
        state.compareMode = !state.compareMode;
        if (ed !== '17') location.hash = `#${book}-17`;
        else render();
      } else {
        state.compareMode = false;
        location.hash = `#${book}-${btn.dataset.ed}`;
      }
    });
  });

  const $search = document.getElementById('searchInput');
  $search.addEventListener('input', (e) => {
    state.search = e.target.value;
    const pos = e.target.selectionStart;
    render();
    const nextInput = document.getElementById('searchInput');
    if (nextInput) {
      nextInput.focus();
      nextInput.setSelectionRange(pos, pos);
    }
  });

  document.getElementById('clearSearch').addEventListener('click', () => {
    state.search = '';
    render();
  });
  document.getElementById('roleFilter').addEventListener('change', (e) => {
    state.roleFilter = e.target.value;
    render();
  });
  document.getElementById('typeFilter').addEventListener('change', (e) => {
    state.typeFilter = e.target.value;
    render();
  });
  document.getElementById('chipAllBooks').addEventListener('click', () => {
    state.allBooksFilter = !state.allBooksFilter;
    render();
  });
  document.getElementById('chipTimelimits').addEventListener('click', () => {
    state.timelimitsOnly = !state.timelimitsOnly;
    render();
  });
  document.getElementById('chipNotesOnly').addEventListener('click', () => {
    state.notesOnly = !state.notesOnly;
    render();
  });

  if (subId && !preserveScroll) {
    const target = document.getElementById(`c-${book}-${ed}-${subId.replace(/\./g, '-')}`);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  const tocLinks = Array.from($view.querySelectorAll('.index a'));
  const clHeaders = Array.from($view.querySelectorAll('.clh'));
  if (clHeaders.length && tocLinks.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const ent of entries) {
          if (ent.isIntersecting) {
            const cNum = ent.target.querySelector('.clh-num')?.textContent?.trim();
            if (cNum) {
              tocLinks.forEach((a) => a.classList.toggle('active', a.querySelector('.cnum')?.textContent?.trim() === cNum));
            }
          }
        }
      },
      { rootMargin: '-140px 0px -70% 0px', threshold: 0 }
    );
    clHeaders.forEach((h) => obs.observe(h));
  }
}

function renderLearn() {
  document.title = `${t('navLearn')} · ${t('brand')}`;
  $view.innerHTML = `
    <div class="wrap">
      <h1 style="margin-top:0">${biText('Lộ trình Học FIDIC', 'FIDIC Learning Path')}</h1>
      <div class="section-grid">
        ${LEARN_ITEMS.map(
          (it) => `
          <div class="card-box">
            <span class="num" style="margin-bottom:10px">Step ${it.step}</span>
            <h3>${escapeHtml(state.lang === 'en' ? it.enTitle : it.viTitle)}</h3>
            <p>${escapeHtml(state.lang === 'en' ? it.enDesc : it.viDesc)}</p>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('1. Sơ đồ Luồng Quy trình (Interactive Flowcharts)', '1. Interactive Process Flowcharts')}</h2>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${FLOWCHARTS.map(
          (fc) => `
          <div class="card-box">
            <h3 style="margin-top:0">${escapeHtml(state.lang === 'en' ? fc.enTitle : fc.viTitle)}</h3>
            <div class="flow">
              ${fc.steps
                .map(
                  (st, i) => `
                ${i > 0 ? '<span class="flow-arrow">→</span>' : ''}
                <a href="${st.hash}" class="flow-step">
                  <span class="flow-badge">${escapeHtml(st.badge)}</span>
                  <span class="flow-title">${escapeHtml(state.lang === 'en' ? st.en : st.vi)}</span>
                </a>
              `
                )
                .join('')}
            </div>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('2. Công cụ Tính Thời hạn Khiếu nại (20.2 & 3.7)', '2. Claim Deadline Calculator (20.2 & 3.7)')}</h2>
      <div class="card-box">
        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:14px">
          <label for="calcDate" style="font-weight:600">${biText('Ngày biết sự việc (Awareness Date):', 'Event Awareness Date:')}</label>
          <input type="date" id="calcDate" value="${new Date().toISOString().slice(0, 10)}" style="padding:7px 12px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);font-family:inherit" />
        </div>
        <div id="calcOutput" class="tls" style="margin-top:0"></div>
      </div>

      <h2 style="margin-top:32px">${biText('3. Bảng So sánh 3 Sách (Đỏ · Vàng · Bạc 2017)', '3. Comprehensive 3-Book Comparison Matrix')}</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>${biText('Điều khoản', 'Clause')}</th>
              <th>${biText('Chủ đề', 'Topic')}</th>
              <th>📕 ${biText('Sách Đỏ', 'Red Book')}</th>
              <th>📒 ${biText('Sách Vàng', 'Yellow Book')}</th>
              <th>📓 ${biText('Sách Bạc', 'Silver Book')}</th>
            </tr>
          </thead>
          <tbody>
            ${BOOK_COMPARISON_ROWS.map(
              (r) => `
              <tr>
                <td><strong>${escapeHtml(r.clause)}</strong></td>
                <td>${escapeHtml(state.lang === 'en' ? r.topicEn : r.topicVi)}</td>
                <td>${escapeHtml(r.red)}</td>
                <td>${escapeHtml(r.yel)}</td>
                <td>${escapeHtml(r.sil)}</td>
              </tr>
            `
            ).join('')}
          </tbody>
        </table>
      </div>

      <h2 style="margin-top:32px">${biText('4. Ma trận Liên hệ Điều khoản (Cross-References)', '4. Sub-Clause Cross-Reference Matrix')}</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>${biText('Từ Điều khoản', 'From')}</th>
              <th>${biText('Liên kết tới', 'To')}</th>
              <th>${biText('Ý nghĩa', 'Relationship')}</th>
            </tr>
          </thead>
          <tbody>
            ${CROSS_REFS.map(
              (cr) => `
              <tr>
                <td><a href="#red-17-${cr.from.replace(/\./g, '-')}" class="act-btn">${cr.from}</a></td>
                <td><a href="#red-17-${cr.to.replace(/\./g, '-')}" class="act-btn">${cr.to}</a></td>
                <td>${escapeHtml(state.lang === 'en' ? cr.en : cr.vi)}</td>
              </tr>
            `
            ).join('')}
          </tbody>
        </table>
      </div>

      <h2 style="margin-top:32px">${biText('5. Từ điển Thuật ngữ FIDIC (Glossary)', '5. FIDIC Bilingual Glossary')}</h2>
      <div class="card-box">
        <input type="search" id="glossarySearch" placeholder="${biText('Lọc thuật ngữ (VD: DAAB, EOT, IPC)...', 'Filter terms (e.g. DAAB, EOT, IPC)...')}" style="width:100%;max-width:360px;padding:8px 12px;border-radius:9px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);margin-bottom:12px" />
        <div id="glossaryList" class="section-grid"></div>
      </div>

      <h2 style="margin-top:32px">${biText('6. Bảng Tra nhanh Các Mốc Thời hạn (2017)', '6. Time-Limits Cheat Sheet (2017)')}</h2>
      <div class="card-box">
        <div class="tls" style="margin-top:0">
          ${TIME_CHEATSHEET.map(
            (row) => `
            <a href="${row.hash}" class="tl" style="text-decoration:none">
              <span class="d">${escapeHtml(row.days)}</span>
              <div class="tl-desc">
                ${escapeHtml(state.lang === 'en' ? row.en : row.vi)}
                ${state.lang === 'bi' ? `<span class="tl-en">${escapeHtml(row.en)}</span>` : ''}
              </div>
            </a>
          `
          ).join('')}
        </div>
      </div>

      <h2 style="margin-top:32px">${biText('7. Kiểm tra nhanh (Quiz)', '7. Quick Knowledge Check')}</h2>
      <div class="section-grid">
        ${QUIZ.map(
          (q, idx) => `
          <div class="card-box" data-quiz="${idx}">
            <h3>${escapeHtml(state.lang === 'en' ? q.qEn : q.qVi)}</h3>
            ${state.lang === 'bi' ? `<p style="color:var(--mute);font-size:13.5px">${escapeHtml(q.qEn)}</p>` : ''}
            ${q.options.map((opt, oi) => `<button type="button" class="quiz-opt" data-opt="${oi}">${escapeHtml(opt)}</button>`).join('')}
          </div>
        `
        ).join('')}
      </div>
    </div>
  `;

  // Deadline Calculator
  const $calcDate = document.getElementById('calcDate');
  const $calcOut = document.getElementById('calcOutput');
  const renderCalc = () => {
    const base = new Date($calcDate.value + 'T00:00:00');
    if (Number.isNaN(base.getTime())) return;
    const addDays = (d) => {
      const dt = new Date(base);
      dt.setDate(dt.getDate() + d);
      return dt.toLocaleDateString(state.lang === 'en' ? 'en-GB' : 'vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' });
    };
    const milestones = [
      { d: 28, vi: 'Hạn chót gửi Thông báo Khiếu nại (20.2)', en: 'Deadline for Notice of Claim (20.2)' },
      { d: 42, vi: 'Hạn Nhà tư vấn phản hồi nếu coi Thông báo trễ (+14 ngày)', en: 'Engineer late-Notice check (+14 days)' },
      { d: 84, vi: 'Hạn chót nộp Hồ sơ Khiếu nại Chi tiết Đầy đủ (20.2)', en: 'Deadline for Fully Detailed Claim (20.2)' },
      { d: 126, vi: 'Kết thúc 42 ngày Tham vấn thỏa thuận (3.7.1)', en: 'End of 42-day Consultation period (3.7.1)' },
      { d: 168, vi: 'Hạn Nhà tư vấn ra Quyết định (3.7.2)', en: 'Engineer Determination deadline (3.7.2)' },
      { d: 196, vi: 'Hạn gửi Thông báo Không hài lòng NOD (3.7.5)', en: 'Deadline for Notice of Dissatisfaction NOD (3.7.5)' }
    ];
    $calcOut.innerHTML = milestones
      .map(
        (m) => `
      <div class="tl">
        <span class="d">+${m.d} ${state.lang === 'en' ? 'd' : 'ng'}</span>
        <div class="tl-desc"><strong>${addDays(m.d)}</strong> — ${escapeHtml(state.lang === 'en' ? m.en : m.vi)}${
          state.lang === 'bi' ? `<span class="tl-en">${escapeHtml(m.en)}</span>` : ''
        }</div>
      </div>
    `
      )
      .join('');
  };
  $calcDate.addEventListener('input', renderCalc);
  renderCalc();

  // Glossary filter
  const $gSearch = document.getElementById('glossarySearch');
  const $gList = document.getElementById('glossaryList');
  const renderGlossary = (q = '') => {
    const items = GLOSSARY.filter((g) => `${g.term} ${g.full} ${g.vi} ${g.en}`.toLowerCase().includes(q.toLowerCase()));
    $gList.innerHTML = items
      .map(
        (g) => `
      <a href="${g.hash}" class="tl" style="text-decoration:none">
        <span class="d">${escapeHtml(g.term)}</span>
        <div class="tl-desc"><strong>${escapeHtml(g.full)}</strong><span class="tl-en">${escapeHtml(
          state.lang === 'en' ? g.en : g.vi
        )}</span></div>
      </a>
    `
      )
      .join('');
  };
  $gSearch.addEventListener('input', (e) => renderGlossary(e.target.value));
  renderGlossary();

  // Quiz
  $view.querySelectorAll('.quiz-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const box = btn.closest('[data-quiz]');
      const qIdx = Number(box.dataset.quiz);
      const picked = Number(btn.dataset.opt);
      const correct = QUIZ[qIdx].answer;
      box.querySelectorAll('.quiz-opt').forEach((b, i) => {
        b.classList.remove('correct', 'wrong');
        if (i === correct) b.classList.add('correct');
        else if (i === picked) b.classList.add('wrong');
      });
    });
  });
}

function renderModels() {
  document.title = `${t('navModels')} · ${t('brand')}`;
  $view.innerHTML = `
    <div class="wrap">
      ${printBannerHtml()}
      <h1 style="margin-top:0">${biText('Biểu mẫu Thư tín Hợp đồng', 'Contract Notice Templates')}</h1>
      <div class="section-grid">
        ${CONTRACT_MODELS.map(
          (m) => `
          <div class="paper" data-tpl="${m.id}">
            <h4>${escapeHtml(state.lang === 'en' ? m.enTitle : m.viTitle)}</h4>
            <pre style="white-space:pre-wrap;font-family:inherit;margin:0">${escapeHtml(state.lang === 'en' ? m.enBody : m.viBody)}</pre>
            ${
              state.lang === 'bi'
                ? `<hr style="margin:14px 0;border:0;border-top:1px solid #cbd5e1"><pre style="white-space:pre-wrap;font-family:inherit;margin:0;color:#475569">${escapeHtml(
                    m.enBody
                  )}</pre>`
                : ''
            }
            <div class="paper-actions">
              <button type="button" class="btn-ghost" data-copy-tpl="${m.id}">📋 ${t('copy')}</button>
              <button type="button" class="btn-ghost" onclick="window.print()">🖨 ${t('pdf')}</button>
            </div>
          </div>
        `
        ).join('')}
      </div>
    </div>
  `;

  $view.querySelectorAll('[data-copy-tpl]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const m = CONTRACT_MODELS.find((x) => x.id === btn.dataset.copyTpl);
      if (!m) return;
      const txt = `${m.viTitle}\n\n${m.viBody}\n\n---\n\n${m.enTitle}\n\n${m.enBody}`;
      await navigator.clipboard?.writeText(txt).catch(() => {});
      showToast(t('copiedTpl'));
    });
  });
}

function renderProject() {
  document.title = `${t('navProject')} · ${t('brand')}`;
  const todayStr = new Date().toISOString().slice(0, 10);

  const calcStatus = (awareStr, days) => {
    const dt = new Date(awareStr + 'T00:00:00');
    dt.setDate(dt.getDate() + days);
    const diff = Math.ceil((dt - new Date()) / 86400000);
    const dateFmt = dt.toLocaleDateString(state.lang === 'en' ? 'en-GB' : 'vi-VN');
    if (diff < 0) return { dateFmt, cls: 'badge-late', lbl: `${biText('Quá hạn', 'Overdue')} (${Math.abs(diff)}d)` };
    if (diff <= 7) return { dateFmt, cls: 'badge-warn', lbl: `${biText('Sắp hạn', 'Due soon')} (${diff}d)` };
    return { dateFmt, cls: 'badge-ok', lbl: `${biText('Còn hạn', 'Upcoming')} (${diff}d)` };
  };

  $view.innerHTML = `
    <div class="wrap">
      ${printBannerHtml()}
      <div class="proj-bar">
        <label for="projSelect"><strong>📁 ${biText('Dự án:', 'Project:')}</strong></label>
        <select id="projSelect">
          ${state.projects
            .map(
              (p) =>
                `<option value="${escapeHtml(p.id)}" ${p.id === state.activeProjectId ? 'selected' : ''}>${escapeHtml(
                  p.name
                )} (${escapeHtml(p.contract)})</option>`
            )
            .join('')}
        </select>
        <button type="button" class="act-btn" id="newProjBtn">+ ${biText('Dự án mới', 'New Project')}</button>
        ${
          state.projects.length > 1
            ? `<button type="button" class="act-btn" id="delProjBtn">🗑 ${biText('Xóa dự án', 'Delete')}</button>`
            : ''
        }
      </div>

      <div class="card-box" style="margin-bottom:20px">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px">
          <h1 style="margin:0;font-size:22px">📅 ${biText('Bảng Theo dõi Thời hạn Dự án (Deadline Tracker)', 'Project Deadline Tracker')}</h1>
          <div style="display:flex;gap:8px">
            <button type="button" class="act-btn" id="exportIcsBtn">📆 ${biText('Xuất Lịch (.ics)', 'Export .ics')}</button>
            <button type="button" class="act-btn" id="exportCsvBtn">⬇ CSV</button>
            <button type="button" class="act-btn" onclick="window.print()">🖨 ${t('pdf')}</button>
          </div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:14px">
          <input type="text" id="trkTitle" placeholder="${biText('Tên sự việc (VD: Vướng mặt bằng trụ P4)', 'Event title...')}" style="flex:1 1 220px;padding:8px 12px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink)" />
          <input type="date" id="trkDate" value="${todayStr}" style="padding:8px 12px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink)" />
          <button type="button" class="btn-primary bk-red" id="trkAddBtn">+ ${biText('Thêm sự việc', 'Add Event')}</button>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>${biText('Sự việc', 'Event')}</th>
                <th>${biText('Ngày biết', 'Awareness')}</th>
                <th>+28d (Notice 20.2)</th>
                <th>+84d (Claim 20.2)</th>
                <th>+168d (Det. 3.7)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${
                state.tracker.length
                  ? state.tracker
                      .map((ev, idx) => {
                        const s28 = calcStatus(ev.date, 28);
                        const s84 = calcStatus(ev.date, 84);
                        const s168 = calcStatus(ev.date, 168);
                        return `
                        <tr>
                          <td><strong>${escapeHtml(ev.title)}</strong></td>
                          <td>${escapeHtml(ev.date)}</td>
                          <td>${s28.dateFmt}<br><span class="${s28.cls}">${s28.lbl}</span></td>
                          <td>${s84.dateFmt}<br><span class="${s84.cls}">${s84.lbl}</span></td>
                          <td>${s168.dateFmt}<br><span class="${s168.cls}">${s168.lbl}</span></td>
                          <td><button type="button" class="act-btn" data-del-trk="${idx}">🗑</button></td>
                        </tr>
                      `;
                      })
                      .join('')
                  : `<tr><td colspan="6" style="color:var(--mute)">${biText(
                      'Chưa có sự việc nào. Thêm sự việc phát sinh để theo dõi tự động mốc 28 / 84 / 168 ngày.',
                      'No events yet. Add an event to track 28 / 84 / 168-day FIDIC deadlines automatically.'
                    )}</td></tr>`
              }
            </tbody>
          </table>
        </div>
      </div>

      <h2 style="margin-top:28px">📋 ${biText('Checklist Kiểm soát Hợp đồng theo Giai đoạn', 'Phase-Based Contract Checklists')}</h2>
      <div class="section-grid" style="margin-bottom:24px">
        ${CHECKLISTS.map(
          (grp) => `
          <div class="card-box">
            <h3 style="margin-top:0">${escapeHtml(state.lang === 'en' ? grp.enTitle : grp.viTitle)}</h3>
            ${grp.items
              .map((it) => {
                const done = Boolean(state.checks[it.id]);
                return `
                  <label class="chk-item ${done ? 'done' : ''}">
                    <input type="checkbox" data-chk="${it.id}" ${done ? 'checked' : ''} />
                    <span>${escapeHtml(state.lang === 'en' ? it.en : it.vi)}</span>
                  </label>
                `;
              })
              .join('')}
          </div>
        `
        ).join('')}
      </div>

      <div class="card-box">
        <h2 style="margin-top:0">${escapeHtml(state.lang === 'en' ? PROJECT_CASE.enTitle : PROJECT_CASE.viTitle)}</h2>
        <p>${escapeHtml(state.lang === 'en' ? PROJECT_CASE.enSummary : PROJECT_CASE.viSummary)}</p>
        <div class="tls">
          ${PROJECT_CASE.steps
            .map(
              (s) => `
            <div class="tl">
              <span class="d">${escapeHtml(state.lang === 'en' ? s.dayEn : s.day)}</span>
              <div class="tl-desc">${escapeHtml(state.lang === 'en' ? s.en : s.vi)}${
                state.lang === 'bi' ? `<span class="tl-en">${escapeHtml(s.en)}</span>` : ''
              }</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('projSelect').addEventListener('change', (e) => {
    const p = state.projects.find((x) => x.id === e.target.value);
    if (!p) return;
    state.activeProjectId = p.id;
    state.tracker = p.tracker || [];
    state.checks = p.checks || {};
    state.projectMeta = { name: p.name, contract: p.contract };
    syncActiveProject();
    render();
  });

  document.getElementById('newProjBtn').addEventListener('click', () => {
    const name = prompt(biText('Nhập tên dự án mới:', 'Enter new project name:'));
    if (!name || !name.trim()) return;
    const contract = prompt(biText('Số hợp đồng:', 'Contract No.:'), 'HĐ-FIDIC-2017') || 'FIDIC-2017';
    const newProj = { id: 'p' + Date.now(), name: name.trim(), contract: contract.trim(), tracker: [], checks: {} };
    state.projects.push(newProj);
    state.activeProjectId = newProj.id;
    state.tracker = [];
    state.checks = {};
    state.projectMeta = { name: newProj.name, contract: newProj.contract };
    syncActiveProject();
    render();
  });

  document.getElementById('delProjBtn')?.addEventListener('click', () => {
    if (state.projects.length <= 1) return;
    state.projects = state.projects.filter((p) => p.id !== state.activeProjectId);
    const next = state.projects[0];
    state.activeProjectId = next.id;
    state.tracker = next.tracker || [];
    state.checks = next.checks || {};
    state.projectMeta = { name: next.name, contract: next.contract };
    syncActiveProject();
    render();
  });

  document.getElementById('trkAddBtn').addEventListener('click', () => {
    const title = document.getElementById('trkTitle').value.trim();
    const date = document.getElementById('trkDate').value;
    if (!title || !date) return;
    state.tracker.push({ title, date });
    syncActiveProject();
    render();
  });

  $view.querySelectorAll('[data-del-trk]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.tracker.splice(Number(btn.dataset.delTrk), 1);
      syncActiveProject();
      render();
    });
  });

  document.getElementById('exportIcsBtn').addEventListener('click', () => {
    if (!state.tracker.length) {
      showToast(biText('Chưa có sự việc để xuất lịch', 'No events to export'));
      return;
    }
    const fmtIcs = (dateStr, addDays) => {
      const dt = new Date(dateStr + 'T00:00:00');
      dt.setDate(dt.getDate() + addDays);
      return dt.toISOString().slice(0, 10).replace(/-/g, '');
    };
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Learn FIDIC//Notebook//VI'];
    state.tracker.forEach((ev, i) => {
      [
        { d: 28, lbl: '[FIDIC 20.2] Notice of Claim (28d)' },
        { d: 84, lbl: '[FIDIC 20.2] Fully Detailed Claim (84d)' },
        { d: 168, lbl: '[FIDIC 3.7] Engineer Determination (168d)' }
      ].forEach((m, j) => {
        const day = fmtIcs(ev.date, m.d);
        lines.push(
          'BEGIN:VEVENT',
          `UID:fidic-${i}-${j}-${day}@learnfidic`,
          `DTSTART;VALUE=DATE:${day}`,
          `SUMMARY:${m.lbl} - ${ev.title.replace(/[\r\n]/g, ' ')}`,
          `DESCRIPTION:Project: ${state.projectMeta.name} (${state.projectMeta.contract})`,
          'BEGIN:VALARM',
          'TRIGGER:-P3D',
          'ACTION:DISPLAY',
          'DESCRIPTION:FIDIC Deadline in 3 days',
          'END:VALARM',
          'END:VEVENT'
        );
      });
    });
    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'fidic-deadlines.ics';
    a.click();
    showToast(biText('Đã xuất file lịch .ics', 'Exported .ics calendar'));
  });

  document.getElementById('exportCsvBtn').addEventListener('click', () => {
    const rows = [['Event', 'AwarenessDate', 'Notice28d', 'Claim84d', 'Determination168d']];
    state.tracker.forEach((ev) => {
      const add = (d) => {
        const dt = new Date(ev.date + 'T00:00:00');
        dt.setDate(dt.getDate() + d);
        return dt.toISOString().slice(0, 10);
      };
      rows.push([`"${ev.title.replace(/"/g, '""')}"`, ev.date, add(28), add(84), add(168)]);
    });
    const blob = new Blob(['\ufeff' + rows.map((r) => r.join(',')).join('\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'fidic-deadlines.csv';
    a.click();
  });

  $view.querySelectorAll('[data-chk]').forEach((cb) => {
    cb.addEventListener('change', () => {
      state.checks[cb.dataset.chk] = cb.checked;
      syncActiveProject();
      cb.closest('.chk-item').classList.toggle('done', cb.checked);
    });
  });
}

function renderSaved() {
  document.title = `${t('navSaved')} · ${t('brand')}`;
  const items = SUBCLAUSES.filter((s) => state.saved.includes(keyOf(s)) || Boolean(state.notes[keyOf(s)]));
  state.presList = items;

  $view.innerHTML = `
    <div class="wrap">
      <div class="card-box" style="margin-bottom:18px">
        <h3 style="margin-top:0">🖨 ${biText('Thông tin Tiêu đề In / Đồng bộ Dữ liệu', 'Print Header & Cloud/File Sync')}</h3>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px">
          <input type="text" id="metaProj" value="${escapeHtml(state.projectMeta.name)}" placeholder="Project Name" style="flex:1 1 200px;padding:7px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink)" />
          <input type="text" id="metaContract" value="${escapeHtml(state.projectMeta.contract)}" placeholder="Contract No." style="flex:1 1 160px;padding:7px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink)" />
          <button type="button" class="act-btn saved" id="saveMetaBtn">✓ ${biText('Lưu tiêu đề in', 'Save Print Header')}</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px">
          <button type="button" class="act-btn" id="exportNotesBtn">⬇ ${biText('Xuất Sao lưu (JSON)', 'Export Backup (JSON)')}</button>
          <button type="button" class="act-btn" id="saveOneDriveBtn">☁ ${biText('Lưu vào Thư mục OneDrive / Đĩa', 'Save to OneDrive / Disk')}</button>
          <label class="act-btn" style="cursor:pointer">
            ⬆ ${biText('Nhập Sao lưu', 'Import Backup')}
            <input type="file" id="importNotesInput" accept="application/json" hidden />
          </label>
        </div>
      </div>

      <h1 style="margin:0 0 16px">${t('navSaved')} (${items.length})</h1>
      ${
        items.length
          ? items.map((it) => renderCard(it)).join('')
          : `<div class="card-box">${biText(
              'Bạn chưa lưu điều khoản hoặc ghi chú nào. Nhấn ★ Lưu hoặc 📝 Ghi chú trên thẻ điều khoản.',
              'No saved sub-clauses or notes yet. Click ★ Save or 📝 Note on any sub-clause card.'
            )}</div>`
      }
    </div>
  `;

  document.getElementById('saveMetaBtn').addEventListener('click', () => {
    state.projectMeta = {
      name: document.getElementById('metaProj').value.trim() || 'FIDIC Project',
      contract: document.getElementById('metaContract').value.trim() || 'Contract'
    };
    localStorage.setItem('fidic_proj_meta', JSON.stringify(state.projectMeta));
    showToast(biText('Đã lưu thông tin tiêu đề in', 'Print header saved'));
  });

  const buildBackupJson = () =>
    JSON.stringify(
      { saved: state.saved, notes: state.notes, checks: state.checks, tracker: state.tracker, projectMeta: state.projectMeta },
      null,
      2
    );

  document.getElementById('exportNotesBtn').addEventListener('click', () => {
    const blob = new Blob([buildBackupJson()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'fidic-notebook-backup.json';
    a.click();
  });

  document.getElementById('saveOneDriveBtn').addEventListener('click', async () => {
    if ('showSaveFilePicker' in window) {
      try {
        const handle = await window.showSaveFilePicker({
          suggestedName: 'fidic-notebook-backup.json',
          types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }]
        });
        const w = await handle.createWritable();
        await w.write(buildBackupJson());
        await w.close();
        showToast(biText('Đã đồng bộ tệp thành công', 'Synced to selected file'));
        return;
      } catch {
        return;
      }
    }
    document.getElementById('exportNotesBtn').click();
  });

  document.getElementById('importNotesInput').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (Array.isArray(parsed.saved)) {
        state.saved = Array.from(new Set([...state.saved, ...parsed.saved]));
        localStorage.setItem('fidic_saved', JSON.stringify(state.saved));
      }
      if (parsed.notes && typeof parsed.notes === 'object') {
        state.notes = { ...state.notes, ...parsed.notes };
        localStorage.setItem('fidic_notes', JSON.stringify(state.notes));
      }
      if (parsed.checks) {
        state.checks = { ...state.checks, ...parsed.checks };
        localStorage.setItem('fidic_checks', JSON.stringify(state.checks));
      }
      if (Array.isArray(parsed.tracker)) {
        state.tracker = parsed.tracker;
        localStorage.setItem('fidic_tracker', JSON.stringify(state.tracker));
      }
      showToast(biText('Đã nhập dữ liệu sổ tay thành công', 'Notebook backup imported'));
      render();
    } catch {
      showToast(biText('Tệp JSON không hợp lệ', 'Invalid JSON file'));
    }
  });
}

// Smart FIDIC Assistant (Gemini API + Offline fallback)
function findRelevantContext(q) {
  const words = q
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length >= 2);
  const scored = SUBCLAUSES.map((s) => {
    const hay = `${s.id} ${s.viTitle} ${s.enTitle} ${s.viBody} ${s.enBody}`.toLowerCase();
    let score = 0;
    for (const w of words) if (hay.includes(w)) score += 1;
    if (q.includes(s.id)) score += 5;
    return { s, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(
      ({ s }) =>
        `[${s.book.toUpperCase()} 20${s.ed} - ${s.id} ${s.viTitle} / ${s.enTitle}]: ${s.viBody} | ${s.enBody}`
    );
  return scored.join('\n');
}

async function askGemini(q) {
  const todayStr = new Date().toLocaleDateString('vi-VN');
  const context = findRelevantContext(q);
  const systemText = [
    `You are a bilingual Vietnamese-English FIDIC Contract Expert (Red, Yellow, Silver Books 1999 & 2017).`,
    `Today's date is ${todayStr}.`,
    `Answer concisely in the user's language (Vietnamese if asked in Vietnamese, English if asked in English, or bilingual if helpful). Always cite exact Sub-Clause numbers and time limits.`,
    context ? `Relevant contract notes from the user's notebook:\n${context}` : ''
  ]
    .filter(Boolean)
    .join('\n\n');

  const recentTurns = state.aiMsgs
    .filter((m) => !m.text.startsWith('⚠️'))
    .slice(-6, -1)
    .map((m) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
    .join('\n');

  const promptText = recentTurns
    ? `Recent conversation:\n${recentTurns}\n\nCurrent question: ${q}`
    : q;

  const fullPrompt = `${systemText}\n\n---\n\n${promptText}`;

  const callModel = async (modelName) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
      modelName
    )}:generateContent?key=${encodeURIComponent(state.geminiKey)}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: fullPrompt }] }],
        generationConfig: { maxOutputTokens: 2048 }
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      const msg = err?.error?.message || `HTTP ${res.status}`;
      const e = new Error(`[${modelName}] ${msg}`);
      e.status = res.status;
      throw e;
    }
    const data = await res.json();
    const parts = data?.candidates?.[0]?.content?.parts || [];
    let reply = parts
      .filter((p) => !p.thought && typeof p.text === 'string' && p.text.trim())
      .map((p) => p.text)
      .join('\n')
      .trim();
    if (!reply) {
      reply = parts
        .filter((p) => typeof p.text === 'string' && p.text.trim())
        .map((p) => p.text)
        .join('\n')
        .trim();
    }
    if (!reply) {
      const reason =
        data?.candidates?.[0]?.finishReason ||
        data?.promptFeedback?.blockReason ||
        'NO_TEXT';
      throw new Error(`[${modelName}] Empty response (${reason})`);
    }
    return reply;
  };

  const candidates = Array.from(
    new Set([
      state.geminiModel,
      'gemini-3.8-flash',
      'gemini-3-flash-preview',
      'gemini-3.1-pro-preview',
      ...state.availableModels
    ])
  ).filter(Boolean);

  let lastErr = null;
  for (const m of candidates) {
    try {
      return await callModel(m);
    } catch (err) {
      lastErr = err;
      const transient = err.status === 429 || err.status === 503 || /high demand|overloaded/i.test(err.message);
      if (!transient) throw err;
    }
  }
  throw lastErr;
}

function answerFidicQuestion(q) {
  const low = q.toLowerCase();
  const dateMatch = q.match(/(\d{1,2})[\/\-](\d{1,2})(?:[\/\-](\d{2,4}))?/);
  if (dateMatch && (low.includes('kịp') || low.includes('20.2') || low.includes('khiếu nại') || low.includes('claim'))) {
    const d = Number(dateMatch[1]);
    const m = Number(dateMatch[2]) - 1;
    const y = dateMatch[3] ? Number(dateMatch[3].length === 2 ? '20' + dateMatch[3] : dateMatch[3]) : new Date().getFullYear();
    const evDate = new Date(y, m, d);
    const diff = Math.floor((new Date() - evDate) / 86400000);
    const remain = 28 - diff;
    return remain >= 0
      ? `Theo Điều khoản 20.2, hạn chót gửi Thông báo Khiếu nại là 28 ngày kể từ ngày biết sự việc (${evDate.toLocaleDateString('vi-VN')}). Đã trôi qua ${diff} ngày — bạn còn ${remain} ngày để gửi Thông báo hợp lệ!`
      : `Đã quá ${Math.abs(remain)} ngày so với mốc 28 ngày của Điều khoản 20.2 (đã trôi qua ${diff} ngày). Tuy nhiên hãy nộp ngay và kiểm tra xem Nhà tư vấn có phản hồi trễ trong 14 ngày hay không!`;
  }

  const hits = SUBCLAUSES.filter((s) =>
    `${s.id} ${s.viTitle} ${s.enTitle} ${s.viBody} ${s.enBody}`.toLowerCase().includes(low)
  ).slice(0, 3);

  if (hits.length) {
    return hits
      .map((h) => `• ${h.id} ${h.viTitle} (${h.book.toUpperCase()} ${h.ed === '99' ? '1999' : '2017'}): ${h.viBody.slice(0, 180)}...`)
      .join('\n\n');
  }
  return 'Chế độ ngoại tuyến: Bạn có thể hỏi theo số điều khoản (VD: 20.2, 3.7, 14.6), từ khóa (DAAB, EOT), hoặc nhấn ⚙ để nhập Gemini API Key cho hỏi đáp AI đầy đủ.';
}

function renderAiDrawer() {
  const existing = document.getElementById('aiDrawer');
  if (!state.aiOpen) {
    existing?.remove();
    return;
  }
  if (!state.aiMsgs.length) {
    state.aiMsgs.push({
      role: 'bot',
      text: state.geminiKey
        ? biText('Xin chào! Đang kết nối Gemini AI. Hãy đặt câu hỏi về Hợp đồng FIDIC.', 'Hello! Gemini AI is active. Ask any FIDIC contract question.')
        : biText(
            'Xin chào! Hiện đang ở chế độ Ngoại tuyến. Nhấn ⚙ để nhập Gemini API Key nếu muốn dùng AI đầy đủ.',
            'Hello! Running in Offline Mode. Click ⚙ to enter your Gemini API Key for full AI answers.'
          )
    });
  }

  const baseModels = [
    { id: 'gemini-3.8-flash', label: 'gemini-3.8-flash (Khuyên dùng / Recommended)' },
    { id: 'gemini-3.1-pro-preview', label: 'gemini-3.1-pro-preview (Pro)' },
    { id: 'gemini-3-flash-preview', label: 'gemini-3-flash-preview' }
  ];
  const modelList = state.availableModels.length
    ? state.availableModels.map((id) => ({ id, label: id }))
    : baseModels;
  if (!modelList.some((m) => m.id === state.geminiModel)) {
    modelList.unshift({ id: state.geminiModel, label: state.geminiModel });
  }

  const hasKey = Boolean(state.geminiKey);
  const settingsHtml = state.aiSettingsOpen
    ? `
      <div class="ai-settings">
        <label><strong>Gemini API Key</strong> <small style="color:var(--mute)">(lưu cục bộ trên trình duyệt / stored locally)</small></label>
        <input type="password" id="geminiKeyInput" value="${escapeHtml(state.geminiKey)}" placeholder="AIza..." autocomplete="off" />
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <label><strong>Model</strong></label>
          <button type="button" class="act-btn" id="fetchModelsBtn" style="padding:3px 8px;font-size:11.5px">🔄 ${biText('Lấy DS Model từ Key', 'Fetch Models')}</button>
        </div>
        <select id="geminiModelSelect">
          ${modelList
            .map(
              (m) =>
                `<option value="${escapeHtml(m.id)}" ${state.geminiModel === m.id ? 'selected' : ''}>${escapeHtml(m.label)}</option>`
            )
            .join('')}
        </select>
        <div style="display:flex;gap:8px;margin-top:4px">
          <button type="button" class="act-btn saved" id="saveGeminiKey">✓ ${biText('Lưu Key', 'Save Key')}</button>
          ${hasKey ? `<button type="button" class="act-btn" id="clearGeminiKey">🗑 ${biText('Xóa Key', 'Clear Key')}</button>` : ''}
        </div>
        <small style="color:var(--mute)">${biText('Lấy API Key miễn phí tại', 'Get a free API Key at')} <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" style="color:var(--teal);text-decoration:underline">aistudio.google.com/apikey</a></small>
      </div>
    `
    : '';

  const modeTabsHtml = `
    <div class="ai-mode-tabs">
      <button type="button" data-ai-mode="chat" class="${state.aiMode === 'chat' ? 'active' : ''}">💬 ${biText('Hỏi đáp', 'Chat')}</button>
      <button type="button" data-ai-mode="draft" class="${state.aiMode === 'draft' ? 'active' : ''}">✍ ${biText('Soạn Thư tín', 'Draft Notice')}</button>
      <button type="button" data-ai-mode="pc" class="${state.aiMode === 'pc' ? 'active' : ''}">⚖ ${biText('Đối chiếu PC', 'Review PC')}</button>
    </div>
  `;

  const toolFormHtml =
    state.aiMode === 'draft'
      ? `
        <form class="ai-tool-form" id="aiDraftForm">
          <select id="draftType">
            <option value="20.2 Notice of Claim">${biText('Thông báo Khiếu nại (20.2)', 'Notice of Claim (20.2)')}</option>
            <option value="8.5 EOT Request">${biText('Đề nghị Gia hạn Thời gian (8.5 / 20.2)', 'Extension of Time Notice (8.5 / 20.2)')}</option>
            <option value="3.7.5 Notice of Dissatisfaction">${biText('Thông báo Không hài lòng NOD (3.7.5)', 'Notice of Dissatisfaction (3.7.5)')}</option>
            <option value="13.3 Variation Proposal">${biText('Đề xuất Thay đổi (13.3)', 'Variation Proposal (13.3)')}</option>
          </select>
          <textarea id="draftFacts" placeholder="${biText('Nhập tóm tắt sự việc, ngày phát sinh, ảnh hưởng...', 'Enter event summary, date, impact...')}" required></textarea>
          <button type="submit" class="btn-primary bk-red" ${state.aiLoading ? 'disabled' : ''}>✍ ${biText('Tạo Thư tín Song ngữ', 'Generate Bilingual Letter')}</button>
        </form>
      `
      : state.aiMode === 'pc'
      ? `
        <form class="ai-tool-form" id="aiPcForm">
          <textarea id="pcInput" placeholder="${biText('Dán nội dung Điều kiện Riêng (Particular Conditions) cần đối chiếu với FIDIC 2017...', 'Paste Particular Conditions clause to compare against FIDIC 2017 General Conditions...')}" required></textarea>
          <button type="submit" class="btn-primary bk-red" ${state.aiLoading ? 'disabled' : ''}>⚖ ${biText('Phân tích Rủi ro vs Điều kiện Chung', 'Analyze Risk vs GC 2017')}</button>
        </form>
      `
      : '';

  const html = `
    <div class="ai-drawer" id="aiDrawer" role="dialog" aria-label="FIDIC Assistant">
      <div class="ai-head">
        <div style="display:flex;align-items:center;gap:8px">
          <span>🤖 ${biText('Trợ lý FIDIC', 'FIDIC Assistant')}</span>
          <span class="ai-badge">${hasKey ? '⚡ Gemini' : '📴 Offline'}</span>
        </div>
        <div style="display:flex;gap:6px">
          <button type="button" class="act-btn" id="toggleAiSettings" title="API Key Settings">⚙ Key</button>
          <button type="button" class="act-btn" id="clearAiChat" title="Clear Chat">🗑</button>
          <button type="button" class="act-btn" id="closeAi">✕</button>
        </div>
      </div>
      ${settingsHtml}
      ${modeTabsHtml}
      ${toolFormHtml}
      <div class="ai-msgs" id="aiMsgs">
        ${state.aiMsgs.map((m) => `<div class="ai-msg ${m.role}" style="white-space:pre-wrap">${renderAiMarkdown(m.text)}</div>`).join('')}
        ${state.aiLoading ? `<div class="ai-msg bot" style="color:var(--mute)">⏳ ${biText('Đang suy nghĩ...', 'Thinking...')}</div>` : ''}
      </div>
      ${
        state.aiMsgs.length <= 1 && !state.aiLoading
          ? `<div class="ai-chips">
              <button type="button" class="ai-chip" data-ai-q="${biText('So sánh 20.2 (2017) và 20.1 (1999)', 'Compare 20.2 (2017) vs 20.1 (1999)')}">⚖️ ${biText('So sánh 20.2 & 20.1', 'Compare 20.2 & 20.1')}</button>
              <button type="button" class="ai-chip" data-ai-q="${biText('Quy trình 3.7 gồm những mốc nào?', 'What are the Sub-Clause 3.7 timelines?')}">⏱ ${biText('Mốc thời hạn 3.7', '3.7 Timelines')}</button>
              <button type="button" class="ai-chip" data-ai-q="${biText('Khác biệt rủi ro địa chất 4.12 giữa Sách Đỏ và Sách Bạc?', '4.12 risk difference: Red vs Silver Book?')}">📕 ${biText('Rủi ro 4.12 Đỏ vs Bạc', '4.12 Red vs Silver')}</button>
            </div>`
          : ''
      }
      <form class="ai-form" id="aiForm">
        <input type="text" id="aiInput" placeholder="${biText('Nhập câu hỏi FIDIC...', 'Ask a FIDIC question...')}" ${state.aiLoading ? 'disabled' : ''} required />
        <button type="submit" class="btn-primary bk-red" ${state.aiLoading ? 'disabled' : ''}>${biText('Gửi', 'Send')}</button>
      </form>
    </div>
  `;
  if (existing) existing.outerHTML = html;
  else document.body.insertAdjacentHTML('beforeend', html);

  const msgBox = document.getElementById('aiMsgs');
  if (msgBox) msgBox.scrollTop = msgBox.scrollHeight;

  document.getElementById('closeAi').addEventListener('click', () => {
    state.aiOpen = false;
    renderAiDrawer();
  });
  document.getElementById('toggleAiSettings').addEventListener('click', () => {
    state.aiSettingsOpen = !state.aiSettingsOpen;
    renderAiDrawer();
  });
  document.getElementById('clearAiChat').addEventListener('click', () => {
    state.aiMsgs = [];
    renderAiDrawer();
  });

  document.querySelectorAll('[data-ai-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.aiMode = btn.dataset.aiMode;
      renderAiDrawer();
    });
  });

  const runAiPrompt = async (userLabel, fullPrompt, offlineFallback) => {
    state.aiMsgs.push({ role: 'user', text: userLabel });
    if (state.geminiKey) {
      state.aiLoading = true;
      renderAiDrawer();
      try {
        const reply = await askGemini(fullPrompt);
        state.aiMsgs.push({ role: 'bot', text: reply });
      } catch (err) {
        state.aiMsgs.push({ role: 'bot', text: `⚠️ Lỗi Gemini API: ${err.message}\n\n${offlineFallback}` });
      } finally {
        state.aiLoading = false;
        renderAiDrawer();
      }
    } else {
      state.aiMsgs.push({ role: 'bot', text: offlineFallback });
      renderAiDrawer();
    }
  };

  document.getElementById('aiDraftForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dtype = document.getElementById('draftType').value;
    const facts = document.getElementById('draftFacts').value.trim();
    if (!facts || state.aiLoading) return;
    const prompt = `Draft a formal bilingual (Vietnamese + English) FIDIC 2017 contractual letter for "${dtype}" based on these facts:\n${facts}\nInclude proper Subject line, Sub-Clause citations, contemporary records reservation, and placeholders for signature.`;
    const offline = `📄 **[Bản nháp mẫu - ${dtype}]**\n\n**Tiêu đề / Subject:** ${dtype.toUpperCase()}\n**Kính gửi / To:** Nhà tư vấn & Chủ đầu tư / The Engineer & The Employer\n\nCăn cứ Hợp đồng FIDIC 2017, chúng tôi xin thông báo sự việc: ${facts}. Hồ sơ hiện trường đồng thời đang được lưu giữ đầy đủ.\n\n*(Nhập Gemini API Key tại ⚙ Key để AI soạn thảo chi tiết theo văn phong pháp lý đầy đủ).*`;
    await runAiPrompt(`✍ Soạn ${dtype}: ${facts}`, prompt, offline);
  });

  document.getElementById('aiPcForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pcText = document.getElementById('pcInput').value.trim();
    if (!pcText || state.aiLoading) return;
    const prompt = `Compare this Particular Conditions (Điều kiện Riêng) text against FIDIC 2017 General Conditions. Identify: (1) Which Sub-Clauses are amended, (2) Risk shift (Employer vs Contractor), (3) Key deadlines or financial impacts, in concise bilingual Vietnamese-English:\n\n${pcText}`;
    const offline = `⚖️ **Phân tích sơ bộ (Offline):**\n${answerFidicQuestion(pcText)}\n\n*(Nhập Gemini API Key tại ⚙ Key để AI phân tích chi tiết sự dịch chuyển rủi ro so với Điều kiện Chung 2017).*`;
    await runAiPrompt(`⚖ Đối chiếu PC`, prompt, offline);
  });

  document.querySelectorAll('.ai-chip[data-ai-q]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const inp = document.getElementById('aiInput');
      if (inp) {
        inp.value = chip.dataset.aiQ;
        document.getElementById('aiForm').requestSubmit();
      }
    });
  });

  document.getElementById('fetchModelsBtn')?.addEventListener('click', async () => {
    const key = document.getElementById('geminiKeyInput').value.trim() || state.geminiKey;
    if (!key) {
      showToast(biText('Vui lòng nhập API Key trước', 'Please enter API Key first'));
      return;
    }
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || `HTTP ${res.status}`);
      const blocked = /(tts|image|audio|video|robotics|computer-use|embedding|aqa)/i;
      const list = (data.models || [])
        .filter((m) => (m.supportedGenerationMethods || []).includes('generateContent'))
        .map((m) => m.name.replace(/^models\//, ''))
        .filter((n) => n.startsWith('gemini-') && !blocked.test(n))
        .sort((a, b) => {
          const score = (x) => (x.includes('flash') ? 2 : x.includes('pro') ? 1 : 0);
          return score(b) - score(a);
        });
      if (list.length) {
        state.availableModels = list;
        state.geminiKey = key;
        if (!list.includes(state.geminiModel)) state.geminiModel = list[0];
        showToast(biText(`Đã tải ${list.length} model khả dụng`, `Loaded ${list.length} available models`));
        renderAiDrawer();
      }
    } catch (err) {
      showToast(`⚠️ ${err.message}`);
    }
  });

  document.getElementById('saveGeminiKey')?.addEventListener('click', () => {
    state.geminiKey = document.getElementById('geminiKeyInput').value.trim();
    state.geminiModel = document.getElementById('geminiModelSelect').value;
    localStorage.setItem('fidic_gemini_key', state.geminiKey);
    localStorage.setItem('fidic_gemini_model', state.geminiModel);
    state.aiSettingsOpen = false;
    showToast(state.geminiKey ? biText('Đã lưu Gemini API Key', 'Gemini API Key saved') : biText('Đã chuyển về chế độ Ngoại tuyến', 'Switched to Offline mode'));
    renderAiDrawer();
  });

  document.getElementById('clearGeminiKey')?.addEventListener('click', () => {
    state.geminiKey = '';
    localStorage.removeItem('fidic_gemini_key');
    state.aiSettingsOpen = false;
    showToast(biText('Đã xóa Gemini API Key', 'Gemini API Key cleared'));
    renderAiDrawer();
  });

  document.getElementById('aiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inp = document.getElementById('aiInput');
    const q = inp.value.trim();
    if (!q || state.aiLoading) return;
    state.aiMsgs.push({ role: 'user', text: q });

    if (state.geminiKey) {
      state.aiLoading = true;
      renderAiDrawer();
      try {
        const reply = await askGemini(q);
        state.aiMsgs.push({ role: 'bot', text: reply });
      } catch (err) {
        state.aiMsgs.push({
          role: 'bot',
          text: `⚠️ Lỗi Gemini API: ${err.message}\n\n${answerFidicQuestion(q)}`
        });
      } finally {
        state.aiLoading = false;
        renderAiDrawer();
      }
    } else {
      state.aiMsgs.push({ role: 'bot', text: answerFidicQuestion(q) });
      renderAiDrawer();
    }
  });
}

function openPresentation(item) {
  const list = state.presList.length ? state.presList : [item];
  let idx = list.findIndex((x) => keyOf(x) === keyOf(item));
  if (idx < 0) idx = 0;
  state.presIdx = idx;
  renderPresSlide(list, idx);
}

function renderPresSlide(list, idx) {
  const item = list[idx];
  const title = state.lang === 'en' ? item.enTitle : item.viTitle;
  $modalRoot.innerHTML = `
    <div class="pres-overlay bk-${item.book}" role="dialog" aria-modal="true">
      <div class="pres-bar">
        <span class="num">${escapeHtml(item.id)} · 20${item.ed} (${idx + 1}/${list.length})</span>
        <div style="display:flex;gap:8px">
          <button type="button" class="act-btn" id="prevPres" ${idx === 0 ? 'disabled' : ''}>${t('prev')}</button>
          <button type="button" class="act-btn" id="nextPres" ${idx === list.length - 1 ? 'disabled' : ''}>${t('next')}</button>
          <button type="button" class="act-btn" id="closePres">✕ ${t('close')} (Esc)</button>
        </div>
      </div>
      <div class="pres-body">
        <h1 style="font-size:28px;margin:0 0 18px">${escapeHtml(title)}</h1>
        ${
          state.lang === 'bi'
            ? `<div class="txt two"><div class="col-vi">${escapeHtml(item.viBody)}</div><div class="col-en">${escapeHtml(item.enBody)}</div></div>`
            : `<div class="txt single">${escapeHtml(state.lang === 'en' ? item.enBody : item.viBody)}</div>`
        }
        ${
          item.timelimits?.length
            ? `<div class="tls" style="margin-top:24px">${item.timelimits
                .map(
                  (tl) => `
                <div class="tl">
                  <span class="d ${tl.dashed ? 'nd' : ''}">${escapeHtml(state.lang === 'en' ? tl.badgeEn : tl.badge)}</span>
                  <div class="tl-desc">${escapeHtml(state.lang === 'en' ? tl.en : tl.vi)}</div>
                </div>
              `
                )
                .join('')}</div>`
            : ''
        }
      </div>
    </div>
  `;
  document.getElementById('closePres').addEventListener('click', closeModal);
  document.getElementById('prevPres').addEventListener('click', () => {
    if (idx > 0) {
      state.presIdx = idx - 1;
      renderPresSlide(list, idx - 1);
    }
  });
  document.getElementById('nextPres').addEventListener('click', () => {
    if (idx < list.length - 1) {
      state.presIdx = idx + 1;
      renderPresSlide(list, idx + 1);
    }
  });
}

function openCompare3(item) {
  const books = ['red', 'yel', 'sil'];
  const dict = state.lang === 'en' ? I18N.en.books : I18N.vi.books;

  $modalRoot.innerHTML = `
    <div class="modal-backdrop" id="cmpBackdrop" role="dialog" aria-modal="true" aria-label="${escapeHtml(t('compareModalTitle', item.id))}">
      <div class="modal-box">
        <div class="modal-head">
          <h2 style="margin:0;font-size:19px">${t('compareModalTitle', item.id)}</h2>
          <button type="button" class="act-btn" id="closeCmp">✕ ${t('close')}</button>
        </div>
        <div class="cmp3">
          ${books
            .map((b) => {
              const found = SUBCLAUSES.find((s) => s.book === b && s.ed === '17' && s.id === item.id);
              const body = found
                ? escapeHtml(state.lang === 'en' ? found.enBody : found.viBody)
                : `<span style="color:var(--mute)">${biText('Chưa có dữ liệu chi tiết cho điều khoản này.', 'Detailed summary not yet added.')}</span>`;
              return `
                <div class="cmp-col bk-${b}">
                  <div class="cmphead">${escapeHtml(dict[b].name)}</div>
                  <p style="font-size:14px;line-height:1.6">${body}</p>
                  <a href="#${b}-17-${item.id.replace(/\./g, '-')}" class="act-btn" data-jump>${t('openBook')}</a>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    </div>
  `;
  document.getElementById('closeCmp').addEventListener('click', closeModal);
  document.getElementById('cmpBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'cmpBackdrop') closeModal();
  });
  $modalRoot.querySelectorAll('[data-jump]').forEach((a) => a.addEventListener('click', closeModal));
}

function closeModal() {
  $modalRoot.innerHTML = '';
  state.presIdx = -1;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
  if (state.presIdx >= 0 && state.presList.length) {
    if (e.key === 'ArrowRight' && state.presIdx < state.presList.length - 1) {
      state.presIdx += 1;
      renderPresSlide(state.presList, state.presIdx);
    } else if (e.key === 'ArrowLeft' && state.presIdx > 0) {
      state.presIdx -= 1;
      renderPresSlide(state.presList, state.presIdx);
    }
  }
});

$view.addEventListener('click', async (e) => {
  const btn = e.target.closest('[data-act]');
  if (!btn) return;
  const card = btn.closest('[data-key]');
  if (!card) return;
  const k = card.dataset.key;
  const item = SUBCLAUSES.find((s) => keyOf(s) === k);
  if (!item) return;

  const act = btn.dataset.act;
  if (act === 'copy') {
    const txt = `${item.id} ${item.viTitle} / ${item.enTitle}\n\n${item.viBody}\n\n${item.enBody}`;
    await navigator.clipboard?.writeText(txt).catch(() => {});
    showToast(t('copiedText'));
  } else if (act === 'pdf') {
    window.print();
  } else if (act === 'save') {
    toggleSave(item);
    render(true);
  } else if (act === 'note') {
    if (state.openNotes.has(k)) state.openNotes.delete(k);
    else state.openNotes.add(k);
    render(true);
  } else if (act === 'save-note') {
    const val = card.querySelector('[data-note-input]')?.value?.trim() || '';
    if (val) state.notes[k] = val;
    else delete state.notes[k];
    localStorage.setItem('fidic_notes', JSON.stringify(state.notes));
    state.openNotes.delete(k);
    showToast(t('noteSavedToast'));
    render(true);
  } else if (act === 'del-note') {
    delete state.notes[k];
    localStorage.setItem('fidic_notes', JSON.stringify(state.notes));
    state.openNotes.delete(k);
    render(true);
  } else if (act === 'link') {
    const url = `${location.origin}${location.pathname}#${item.book}-${item.ed}-${item.id.replace(/\./g, '-')}`;
    await navigator.clipboard?.writeText(url).catch(() => {});
    showToast(t('copiedLink'));
  } else if (act === 'present') {
    openPresentation(item);
  } else if (act === 'cmp3') {
    openCompare3(item);
  }
});

function getTopVisibleCardKey() {
  const cards = $view.querySelectorAll('.page[data-key]');
  for (const c of cards) {
    const rect = c.getBoundingClientRect();
    if (rect.bottom > 140) return c.dataset.key;
  }
  return null;
}

document.getElementById('langSeg').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-lang]');
  if (!btn) return;
  const anchorKey = getTopVisibleCardKey();
  state.lang = btn.dataset.lang;
  localStorage.setItem('fidic_lang', state.lang);
  applyHeaderI18n();
  render(true);
  if (anchorKey) {
    const el = $view.querySelector(`.page[data-key="${anchorKey}"]`);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  }
});

document.getElementById('themeBtn').addEventListener('click', () => {
  const order = ['auto', 'dark', 'light'];
  state.theme = order[(order.indexOf(state.theme) + 1) % order.length];
  localStorage.setItem('fidic_theme', state.theme);
  applyTheme();
});

document.getElementById('aiBtn').addEventListener('click', () => {
  state.aiOpen = !state.aiOpen;
  if (state.aiOpen && !state.geminiKey) state.aiSettingsOpen = true;
  renderAiDrawer();
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// Scroll-to-Top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.type = 'button';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.title = 'Lên đầu trang / Back to top';
scrollTopBtn.setAttribute('aria-label', 'Back to top');
scrollTopBtn.textContent = '↑';
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(scrollTopBtn);
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 420 && !state.aiOpen);
});

function render(preserveScroll = false) {
  const parsed = parseHash();
  updateActiveTab(parsed.route);
  if (parsed.route === 'home') renderHome();
  else if (parsed.route === 'books') renderBooks(parsed, preserveScroll);
  else if (parsed.route === 'learn') renderLearn();
  else if (parsed.route === 'models') renderModels();
  else if (parsed.route === 'project') renderProject();
  else if (parsed.route === 'saved') renderSaved();
}

window.addEventListener('hashchange', () => render(false));

applyTheme();
applyHeaderI18n();
render(false);
