import {
  I18N,
  CLAUSES_2017,
  SUBCLAUSES as BASE_SUBCLAUSES,
  LEARN_ITEMS,
  TIME_CHEATSHEET,
  QUIZ as BASE_QUIZ,
  CONTRACT_MODELS as BASE_MODELS,
  PROJECT_CASE
} from './data/fidic-data.js';

import { EXTENDED_SUBCLAUSES, VN_LAW_NOTES } from './data/clauses-extended.js';
import { RED17_PART1 } from './data/red17-part1.js';
import { RED17_PART2 } from './data/red17-part2.js';
import { RED17_PART3 } from './data/red17-part3.js';
import { OTHER_BOOKS_SUBCLAUSES } from './data/other-books.js';
import { OTHER_BOOKS_EXT } from './data/other-books-ext.js';
import {
  GOLDEN_PRINCIPLES,
  CASE_LAW,
  MAPPING_99_17,
  SOURCE_DOCS,
  EXTRA_TEMPLATES,
  EXTENDED_QUIZ
} from './data/source-library.js';
import {
  GUIDE_NOTES,
  CONTRACT_DATA_ITEMS,
  SAMPLE_PARTICULAR_CONDITIONS,
  PROCUREMENT_STEPS,
  MASTER_LIFECYCLE
} from './data/fidic-guides.js';
import {
  ADVISORY_BOOKS,
  BOOK_CHAPTERS,
  COMMENTARY_NOTES,
  COMMON_CIVIL_LAW_MATRIX,
  CONTRACT_PITFALLS,
  CONTEMPORARY_RECORDS_GUIDE,
  EOT_METHODS
} from './data/commentary-books.js';
import { encryptJson, decryptJson, hashPassphrase } from './security.js';

const CONTRACT_MODELS = [...BASE_MODELS, ...EXTRA_TEMPLATES];
const QUIZ = [...BASE_QUIZ, ...EXTENDED_QUIZ];

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
  ...RED17_PART3,
  ...OTHER_BOOKS_SUBCLAUSES,
  ...OTHER_BOOKS_EXT
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
  contractData: JSON.parse(localStorage.getItem('fidic_contract_data') || '{}'),
  openNotes: new Set(),
  search: '',
  allBooksFilter: false,
  timelimitsOnly: false,
  notesOnly: false,
  roleFilter: 'all',
  typeFilter: 'all',
  compareMode: false,
  learnTab: 'tools',
  libBook: 'godwin',
  libPage: 21,
  libQuery: '',
  libTocCollapsed: false,
  libSplit: Math.min(78, Math.max(22, Number(localStorage.getItem('fidic_lib_split') || 50))),
  libNotes: JSON.parse(localStorage.getItem('fidic_lib_notes') || '{}'),
  libHighlights: JSON.parse(localStorage.getItem('fidic_lib_highlights') || '{}'),
  libNoteOpen: false,
  libTrans: JSON.parse(localStorage.getItem('fidic_lib_trans') || '{}'),
  bookCache: {},
  tocOpen: false,
  aiOpen: false,
  aiMode: 'chat',
  aiSettingsOpen: false,
  aiLoading: false,
  aiImage: null,
  gistToken: localStorage.getItem('fidic_gist_token') || '',
  gistId: localStorage.getItem('fidic_gist_id') || '',
  lockHash: localStorage.getItem('fidic_lock_hash') || '',
  unlocked: !localStorage.getItem('fidic_lock_hash'),
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
  if (['learn', 'models', 'project', 'library', 'saved'].includes(raw)) {
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

  const guideNote = item.ed === '17' ? GUIDE_NOTES[item.id] : null;
  const guideHtml = guideNote
    ? `<div class="guide-box"><strong>📘 ${escapeHtml(guideNote.src)}:</strong> ${escapeHtml(
        state.lang === 'en' ? guideNote.en : guideNote.vi
      )}${state.lang === 'bi' ? `<div style="color:var(--mute);margin-top:4px;font-size:12.5px">${escapeHtml(guideNote.en)}</div>` : ''}</div>`
    : '';

  const commNote = item.ed === '17' ? COMMENTARY_NOTES[item.id] : null;
  const commHtml = commNote
    ? `<div class="commentary-box"><strong>📖 ${escapeHtml(commNote.src)}:</strong> ${escapeHtml(
        state.lang === 'en' ? commNote.en : commNote.vi
      )}${state.lang === 'bi' ? `<div style="color:var(--mute);margin-top:4px;font-size:12.5px">${escapeHtml(commNote.en)}</div>` : ''}</div>`
    : '';

  const relCases = CASE_LAW.filter((c) => c.clauses.includes(item.id));
  const relCasesHtml = relCases.length
    ? `<div class="case-box"><strong>⚖️ ${biText('Án lệ & Bản án liên quan (Source)', 'Related Case Law')}:</strong> ${relCases
        .map((c) => `<a href="#learn" class="case-pill" title="${escapeHtml(c.parties)}">${escapeHtml(c.ref)}</a>`)
        .join(' ')}</div>`
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
      ${guideHtml}
      ${commHtml}
      ${vnLawHtml}
      ${relCasesHtml}
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
      const eqTxt = (item.eq99 || []).join(' ').toLowerCase();
      const hay = `${item.id} ${eqTxt} ${item.viTitle} ${item.enTitle} ${item.viBody} ${item.enBody} ${noteTxt}`.toLowerCase();
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
      <h1 style="margin-top:0">${biText('Trung tâm Học & Tra cứu FIDIC', 'FIDIC Learning & Reference Hub')}</h1>
      <div class="learn-tabs" id="learnTabs" role="tablist">
        <button type="button" class="learn-tab ${state.learnTab === 'tools' ? 'active' : ''}" data-ltab="tools">🎯 ${biText('Công cụ & Quy trình', 'Tools & Workflows')}</button>
        <button type="button" class="learn-tab ${state.learnTab === 'legal' ? 'active' : ''}" data-ltab="legal">⚖️ ${biText('Pháp lý & Án lệ', 'Legal & Case Law')}</button>
        <button type="button" class="learn-tab ${state.learnTab === 'ref' ? 'active' : ''}" data-ltab="ref">📖 ${biText('Tra cứu & EOT', 'Reference & EOT')}</button>
        <button type="button" class="learn-tab ${state.learnTab === 'books' ? 'active' : ''}" data-ltab="books">📚 ${biText('Sách Chuyên khảo', '3 Reference Books')}</button>
        <button type="button" class="learn-tab ${state.learnTab === 'quiz' ? 'active' : ''}" data-ltab="quiz">🎓 ${biText('Trắc nghiệm (Quiz)', 'Quiz')}</button>
      </div>
      <div class="section-grid" data-lgroup="tools">
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

      <h2 style="margin-top:32px">${biText('7. Kiểm tra nhanh (Quiz)', '7. Quick Knowledge Check')} <span class="tl-pill" id="quizScorePill">0/${QUIZ.length}</span></h2>
      <div class="section-grid">
        ${QUIZ.map(
          (q, idx) => `
          <div class="card-box" data-quiz="${idx}">
            <h3>${escapeHtml(state.lang === 'en' ? q.qEn : q.qVi)}</h3>
            ${state.lang === 'bi' ? `<p style="color:var(--mute);font-size:13.5px">${escapeHtml(q.qEn)}</p>` : ''}
            ${q.options.map((opt, oi) => `<button type="button" class="quiz-opt" data-opt="${oi}">${escapeHtml(opt)}</button>`).join('')}
            ${q.exp ? `<div class="quiz-exp" data-exp>${escapeHtml(q.exp)}</div>` : ''}
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('8. 5 Nguyên tắc Vàng FIDIC 2019 & Kiểm tra Điều kiện Riêng', '8. FIDIC Golden Principles (2019) & PC Compliance Check')} <span class="tl-pill" id="gpScorePill">5/5 GP</span></h2>
      <div class="section-grid">
        ${GOLDEN_PRINCIPLES.map(
          (g) => `
          <div class="card-box">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <span class="num">${g.gp}</span>
              <label style="font-size:12.5px;display:flex;align-items:center;gap:6px;cursor:pointer">
                <input type="checkbox" class="gp-chk" checked style="accent-color:var(--teal)" />
                <span>${biText('HĐ tuân thủ', 'Compliant')}</span>
              </label>
            </div>
            <h3>${escapeHtml(state.lang === 'en' ? g.enTitle : g.viTitle)}</h3>
            <p style="font-size:14px">${escapeHtml(state.lang === 'en' ? g.en : g.vi)}</p>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('9. Thư viện 12 Bản án & Án lệ Thực tế (từ Source)', '9. Case Law & Judgments Library (12 Cases)')}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px" id="caseFilterBar">
        <button type="button" class="chip active" data-case-book="all">${biText('Tất cả (12)', 'All (12)')}</button>
        <button type="button" class="chip" data-case-book="red">📕 ${biText('Sách Đỏ', 'Red Book')}</button>
        <button type="button" class="chip" data-case-book="sil">📓 ${biText('Sách Bạc / Trắng', 'Silver / White')}</button>
        <button type="button" class="chip" data-case-book="yel">📒 ${biText('Sách Vàng', 'Yellow Book')}</button>
      </div>
      <div class="section-grid" id="caseLawGrid">
        ${CASE_LAW.map(
          (c) => `
          <div class="card-box bk-${c.book}" data-case-item="${c.book}" style="border-top:4px solid var(--accent)">
            <div style="font-size:12px;font-weight:700;color:var(--accent)">${escapeHtml(c.ref)}</div>
            <h3 style="margin-top:4px">${escapeHtml(c.parties)}</h3>
            <p style="font-size:14px">${escapeHtml(state.lang === 'en' ? c.en : c.vi)}</p>
            <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-top:10px">
              <div style="display:flex;flex-wrap:wrap;gap:6px">
                ${c.clauses.map((cl) => `<a href="#${c.book === 'yel' || c.book === 'sil' ? 'red' : c.book}-17-${cl.replace(/\./g, '-')}" class="ai-clause-link">${cl}</a>`).join('')}
              </div>
              <button type="button" class="act-btn" data-ask-case="${c.id}">🤖 ${biText('Phân tích AI', 'Ask AI')}</button>
            </div>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('10. Bảng Quy đổi & Thay đổi Lớn 1999 ↔ 2017 (Contract Guide 2022)', '10. Major 1999 ↔ 2017 Changes (Contract Guide 2022)')}</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>1999</th><th>2017</th><th>${biText('Thay đổi cốt lõi', 'Key Structural Change')}</th></tr>
          </thead>
          <tbody>
            ${MAPPING_99_17.map(
              (m) => `<tr><td><strong>${escapeHtml(m.c99)}</strong></td><td><span class="tl-pill">${escapeHtml(m.c17)}</span></td><td>${escapeHtml(state.lang === 'en' ? m.en : m.vi)}</td></tr>`
            ).join('')}
          </tbody>
        </table>
      </div>

      <h2 style="margin-top:32px">${biText('11. Danh mục Tài liệu Tham khảo (Source/)', '11. Reference Library Index (Source/)')}</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>${biText('Nhóm', 'Category')}</th><th>${biText('Tên tài liệu', 'Document')}</th><th>${biText('Dung lượng', 'Size')}</th><th>${biText('Mô tả', 'Description')}</th></tr>
          </thead>
          <tbody>
            ${SOURCE_DOCS.map(
              (d) => `<tr><td><span class="tl-pill">${escapeHtml(d.cat)}</span></td><td><strong>${escapeHtml(d.name)}</strong></td><td>${escapeHtml(d.size)}</td><td>${escapeHtml(d.desc)}</td></tr>`
            ).join('')}
          </tbody>
        </table>
      </div>

      <h2 style="margin-top:32px">${biText('12. Trình Chọn Bộ Sách FIDIC Phù hợp (Contract Guide 2022)', '12. FIDIC Book Selector Wizard')}</h2>
      <div class="card-box">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:14px">
          <div>
            <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px">${biText('Ai lập Thiết kế?', 'Who does the Design?')}</label>
            <select id="wizDesign" class="filter-select" style="width:100%;border-radius:8px">
              <option value="employer">${biText('Chủ đầu tư thiết kế', 'Employer designs')}</option>
              <option value="contractor">${biText('Nhà thầu thiết kế (D&B / EPC)', 'Contractor designs')}</option>
            </select>
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px">${biText('Cơ chế Thanh toán?', 'Payment Mechanism?')}</label>
            <select id="wizPay" class="filter-select" style="width:100%;border-radius:8px">
              <option value="boq">${biText('Đo lường thực tế (BOQ)', 'Remeasurement (BOQ)')}</option>
              <option value="lump">${biText('Trọn gói (Lump Sum)', 'Lump Sum')}</option>
            </select>
          </div>
          <div>
            <label style="font-size:13px;font-weight:600;display:block;margin-bottom:4px">${biText('Rủi ro Địa chất / Giá cố định?', 'Subsurface Risk / Price Certainty?')}</label>
            <select id="wizRisk" class="filter-select" style="width:100%;border-radius:8px">
              <option value="balanced">${biText('Cân bằng (CĐT chịu bất khả kháng)', 'Balanced (Employer bears 4.12)')}</option>
              <option value="contractor">${biText('Nhà thầu EPC chịu tối đa để chốt giá', 'Max Contractor risk for fixed price')}</option>
            </select>
          </div>
        </div>
        <div id="wizResult" class="guide-box" style="margin-top:0"></div>
      </div>

      <h2 style="margin-top:32px">${biText('13. Sơ đồ Toàn cảnh Vòng đời Hợp đồng (Ultimate Diagram)', '13. Master Contract Lifecycle Map')}</h2>
      <div class="card-box">
        <div class="flow">
          ${MASTER_LIFECYCLE.map(
            (m, i) => `
            ${i > 0 ? '<span class="flow-arrow">→</span>' : ''}
            <a href="${m.hash}" class="flow-step">
              <span class="flow-badge">${escapeHtml(m.day)}</span>
              <span class="flow-title">${escapeHtml(state.lang === 'en' ? m.titleEn : m.titleVi)}</span>
            </a>
          `
          ).join('')}
        </div>
      </div>

      <h2 style="margin-top:32px">${biText('14. Quy trình Đấu thầu FIDIC (Procurement Guide 2011)', '14. FIDIC Procurement Workflow (2011 Guide)')}</h2>
      <div class="section-grid">
        ${PROCUREMENT_STEPS.map(
          (p) => `
          <div class="card-box">
            <span class="num" style="margin-bottom:8px">${p.step} · ${escapeHtml(p.badge)}</span>
            <h3>${escapeHtml(state.lang === 'en' ? p.enTitle : p.viTitle)}</h3>
            <p style="font-size:14px">${escapeHtml(state.lang === 'en' ? p.en : p.vi)}</p>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('15. Nguồn Tư vấn & Bình luận Chuyên khảo (3 Sách Quốc tế)', '15. Advisory Commentary Books (Source/3)')}</h2>
      <div class="section-grid">
        ${ADVISORY_BOOKS.map(
          (b) => `
          <div class="card-box">
            <span class="tl-pill" style="margin-bottom:8px;display:inline-block">${escapeHtml(b.badge)}</span>
            <h3>${escapeHtml(b.title)}</h3>
            <p style="font-size:14px">${escapeHtml(state.lang === 'en' ? b.en : b.vi)}</p>
            <button type="button" class="act-btn" data-ask-book="${b.id}">🤖 ${biText('Tư vấn theo sách này', 'Consult via AI')}</button>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('16. Ma trận Xung đột Common Law ↔ Civil Law / Việt Nam (Seppälä 2023)', '16. Common Law vs Civil Law Matrix (Seppälä 2023)')}</h2>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>${biText('Chủ đề Pháp lý', 'Legal Topic')}</th>
              <th>⚖️ Common Law (FIDIC gốc)</th>
              <th>🇻🇳 Civil Law / Thực tiễn Việt Nam</th>
            </tr>
          </thead>
          <tbody>
            ${COMMON_CIVIL_LAW_MATRIX.map(
              (r) => `
              <tr>
                <td><strong>${escapeHtml(state.lang === 'en' ? r.topicEn : r.topicVi)}</strong></td>
                <td>${escapeHtml(r.common)}</td>
                <td>${escapeHtml(r.civil)}</td>
              </tr>
            `
            ).join('')}
          </tbody>
        </table>
      </div>

      <h2 style="margin-top:32px">${biText('17. Thư viện Bẫy Hợp đồng Cần Tránh (Red Flags · Godwin 2020)', '17. Contract Pitfalls & Red Flags (Godwin 2020)')}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px" id="pitFilterBar">
        <button type="button" class="chip active" data-pit-side="all">${biText('Tất cả (8)', 'All (8)')}</button>
        <button type="button" class="chip" data-pit-side="contractor">👷 ${biText('Rủi ro cho Nhà thầu', 'Contractor Risks')}</button>
        <button type="button" class="chip" data-pit-side="employer">🏛 ${biText('Rủi ro cho Chủ đầu tư / NTV', 'Employer / Engineer Risks')}</button>
      </div>
      <div class="section-grid">
        ${CONTRACT_PITFALLS.map(
          (p) => `
          <div class="card-box" data-pit-item="${p.side}">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
              <span class="pit-badge ${p.side}">${p.side === 'contractor' ? biText('Cho Nhà thầu', 'Contractor') : biText('Cho Chủ đầu tư', 'Employer')}</span>
              <a href="#red-17-${p.clause.replace(/\./g, '-')}" class="ai-clause-link">${p.clause}</a>
            </div>
            <h3>${escapeHtml(state.lang === 'en' ? p.enTitle : p.viTitle)}</h3>
            <p style="font-size:14px;margin-bottom:0">${escapeHtml(state.lang === 'en' ? p.en : p.vi)}</p>
          </div>
        `
        ).join('')}
      </div>

      <h2 style="margin-top:32px">${biText('18. Cẩm nang Công trường: Hồ sơ Đồng thời & Phân tích EOT (ICE Guide)', '18. Site Guide: Contemporary Records & EOT Methods')}</h2>
      <div class="section-grid">
        <div class="card-box">
          <h3 style="margin-top:0">📂 ${biText('6 Nhóm Hồ sơ Đồng thời Bắt buộc (20.2.3)', '6 Mandatory Contemporary Records (20.2.3)')}</h3>
          <div class="tls" style="margin-top:8px">
            ${CONTEMPORARY_RECORDS_GUIDE.map(
              (rc, idx) => `
              <div class="tl">
                <span class="d">#${idx + 1}</span>
                <div class="tl-desc">${escapeHtml(state.lang === 'en' ? rc.en : rc.vi)}</div>
              </div>
            `
            ).join('')}
          </div>
        </div>
        <div class="card-box">
          <h3 style="margin-top:0">⏱ ${biText('4 Phương pháp Phân tích Chậm trễ EOT', '4 EOT Delay Analysis Methods')}</h3>
          <div class="tls" style="margin-top:8px">
            ${EOT_METHODS.map(
              (em) => `
              <div class="tl" style="align-items:flex-start">
                <span class="d" style="min-width:96px;font-size:11.5px">${escapeHtml(em.type)}</span>
                <div class="tl-desc"><strong>${escapeHtml(em.name)}</strong><br>${escapeHtml(state.lang === 'en' ? em.en : em.vi)}</div>
              </div>
            `
            ).join('')}
          </div>
        </div>
      </div>

      <h2 style="margin-top:32px">${biText('19. Mục lục Chi tiết 3 Sách Chuyên khảo (Source/3)', '19. Chapter Index of the 3 Reference Books')}</h2>
      <div class="card-box">
        <p style="margin-top:0;font-size:13.5px;color:var(--mute)">${biText(
          'Tra cứu nhanh từng chương và số trang trong 3 cuốn sách gốc tại thư mục Source\\3- Cac sach ve Hop dong FIDIC (file PDF gốc lưu cục bộ trên máy để bảo vệ bản quyền & giới hạn 100MB của GitHub).',
          'Search chapters and exact page numbers across the 3 reference books in Source\\3- Cac sach ve Hop dong FIDIC.'
        )}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px" id="bookChapFilter">
          <button type="button" class="chip active" data-bchap="all">${biText('Cả 3 Sách', 'All 3 Books')} (${BOOK_CHAPTERS.length})</button>
          <button type="button" class="chip" data-bchap="godwin-2020">Godwin (2020)</button>
          <button type="button" class="chip" data-bchap="commentary-2023">Seppälä (2023)</button>
          <button type="button" class="chip" data-bchap="ice-grutters-2014">ICE Grutters (2014)</button>
          <input type="search" id="bookChapSearch" placeholder="${biText('Lọc theo chương, điều khoản, từ khóa...', 'Filter chapters, clauses...')}" style="flex:1 1 200px;padding:6px 12px;border-radius:999px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);font-size:13px" />
        </div>
        <div class="section-grid" id="bookChapGrid"></div>
      </div>
    </div>
  `;

  // Sub-tab filtering for clean Learning Hub
  const tabMap = {
    '1.': 'tools', '2.': 'tools', '12.': 'tools', '13.': 'tools', '14.': 'tools',
    '8.': 'legal', '9.': 'legal', '15.': 'legal', '16.': 'legal', '17.': 'legal',
    '3.': 'ref', '4.': 'ref', '5.': 'ref', '6.': 'ref', '10.': 'ref', '11.': 'ref', '18.': 'ref',
    '19.': 'books',
    '7.': 'quiz'
  };
  const wrapEl = $view.querySelector('.wrap');
  if (wrapEl) {
    let curTab = 'tools';
    Array.from(wrapEl.children).forEach((el) => {
      if (el.tagName === 'H1' || el.id === 'learnTabs') return;
      if (el.tagName === 'H2') {
        const prefix = (el.textContent || '').trim().match(/^(\d+\.)/)?.[1];
        if (prefix && tabMap[prefix]) curTab = tabMap[prefix];
      }
      el.dataset.lgroup = curTab;
    });
  }
  const applyLearnTab = (tab) => {
    state.learnTab = tab;
    $view.querySelectorAll('#learnTabs .learn-tab').forEach((b) => b.classList.toggle('active', b.dataset.ltab === tab));
    $view.querySelectorAll('[data-lgroup]').forEach((el) => {
      el.style.display = el.dataset.lgroup === tab ? '' : 'none';
    });
  };
  $view.querySelectorAll('#learnTabs .learn-tab').forEach((btn) => {
    btn.addEventListener('click', () => applyLearnTab(btn.dataset.ltab));
  });
  applyLearnTab(state.learnTab);

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
  const quizAnswers = new Map();
  $view.querySelectorAll('.quiz-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const box = btn.closest('[data-quiz]');
      const qIdx = Number(box.dataset.quiz);
      const picked = Number(btn.dataset.opt);
      const correct = QUIZ[qIdx].answer;
      quizAnswers.set(qIdx, picked === correct);
      box.querySelectorAll('.quiz-opt').forEach((b, i) => {
        b.classList.remove('correct', 'wrong');
        if (i === correct) b.classList.add('correct');
        else if (i === picked) b.classList.add('wrong');
      });
      box.querySelector('[data-exp]')?.classList.add('show');
      const score = Array.from(quizAnswers.values()).filter(Boolean).length;
      const pill = document.getElementById('quizScorePill');
      if (pill) pill.textContent = `${score}/${QUIZ.length}`;
    });
  });

  // Golden Principles compliance score
  $view.querySelectorAll('.gp-chk').forEach((cb) => {
    cb.addEventListener('change', () => {
      const checked = Array.from($view.querySelectorAll('.gp-chk')).filter((x) => x.checked).length;
      const gpPill = document.getElementById('gpScorePill');
      if (gpPill) gpPill.textContent = `${checked}/5 GP`;
    });
  });

  // Case Law filter & Ask AI
  $view.querySelectorAll('[data-case-book]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bk = btn.dataset.caseBook;
      $view.querySelectorAll('[data-case-book]').forEach((b) => b.classList.toggle('active', b === btn));
      $view.querySelectorAll('[data-case-item]').forEach((card) => {
        card.style.display = bk === 'all' || card.dataset.caseItem === bk ? '' : 'none';
      });
    });
  });

  $view.querySelectorAll('[data-ask-case]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const c = CASE_LAW.find((x) => x.id === btn.dataset.askCase);
      if (!c) return;
      state.aiOpen = true;
      state.aiMode = 'chat';
      renderAiDrawer();
      const inp = document.getElementById('aiInput');
      if (inp) {
        inp.value = `Phân tích bài học thực tiễn từ bản án ${c.ref} (${c.parties}) liên quan đến điều khoản ${c.clauses.join(', ')}: ${c.vi}`;
        document.getElementById('aiForm')?.requestSubmit();
      }
    });
  });

  // Book Selector Wizard
  const updateWiz = () => {
    const d = document.getElementById('wizDesign')?.value;
    const p = document.getElementById('wizPay')?.value;
    const r = document.getElementById('wizRisk')?.value;
    const out = document.getElementById('wizResult');
    if (!out) return;
    let rec = 'red', title = '📕 Sách Đỏ (Red Book 2017)', reason = 'Chủ đầu tư thiết kế, thanh toán theo đo lường khối lượng thực tế (BOQ) và phân bổ rủi ro cân bằng.';
    if (d === 'contractor' && r === 'contractor') {
      rec = 'sil';
      title = '📓 Sách Bạc (Silver Book 2017 - EPC/Turnkey)';
      reason = 'Nhà thầu thiết kế & thi công trọn gói, chịu phần lớn rủi ro địa chất (4.12) để đổi lấy tính chắc chắn về giá và tiến độ; dùng Đại diện Chủ đầu tư (3.5).';
    } else if (d === 'contractor' || p === 'lump') {
      rec = 'yel';
      title = '📒 Sách Vàng (Yellow Book 2017 - Design & Build)';
      reason = 'Nhà thầu thiết kế & lắp đặt thiết bị theo Yêu cầu của Chủ đầu tư, thanh toán trọn gói theo mốc nhưng vẫn giữ Nhà tư vấn độc lập (3.7) và phân bổ rủi ro cân bằng.';
    }
    out.innerHTML = `<strong>${biText('Khuyến nghị:', 'Recommended:')} ${title}</strong><p style="margin:6px 0 10px">${reason}</p><a href="#${rec}-17" class="btn-primary bk-${rec}">${t('openBook')}</a>`;
  };
  ['wizDesign', 'wizPay', 'wizRisk'].forEach((id) => document.getElementById(id)?.addEventListener('change', updateWiz));
  updateWiz();

  $view.querySelectorAll('[data-ask-book]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const b = ADVISORY_BOOKS.find((x) => x.id === btn.dataset.askBook);
      if (!b) return;
      state.aiOpen = true;
      state.aiMode = 'chat';
      renderAiDrawer();
      const inp = document.getElementById('aiInput');
      if (inp) {
        inp.value = `Dựa trên cuốn "${b.title}", hãy tóm tắt những lưu ý tư vấn quan trọng nhất cho kỹ sư hợp đồng tại Việt Nam.`;
        document.getElementById('aiForm')?.requestSubmit();
      }
    });
  });

  // Contract Pitfalls filter
  $view.querySelectorAll('[data-pit-side]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const side = btn.dataset.pitSide;
      $view.querySelectorAll('[data-pit-side]').forEach((b) => b.classList.toggle('active', b === btn));
      $view.querySelectorAll('[data-pit-item]').forEach((card) => {
        card.style.display = side === 'all' || card.dataset.pitItem === side ? '' : 'none';
      });
    });
  });

  // Reference Book Chapter Explorer (19)
  let curBookFilter = 'all';
  const renderBookChapters = () => {
    const grid = document.getElementById('bookChapGrid');
    const q = (document.getElementById('bookChapSearch')?.value || '').trim().toLowerCase();
    if (!grid) return;
    const rows = BOOK_CHAPTERS.filter((ch) => {
      if (curBookFilter !== 'all' && ch.book !== curBookFilter) return false;
      if (q && !`${ch.title} ${ch.vi} ${ch.clauses.join(' ')} ${ch.pg}`.toLowerCase().includes(q)) return false;
      return true;
    });
    grid.innerHTML = rows
      .map(
        (ch) => `
      <div class="card-box" style="padding:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <span class="tl-pill">${escapeHtml(ch.book)}</span>
          <strong style="font-size:12px;color:var(--teal)">${escapeHtml(ch.pg)}</strong>
        </div>
        <h4 style="margin:0 0 6px;font-size:14.5px">${escapeHtml(ch.title)}</h4>
        <p style="margin:0 0 10px;font-size:13px;color:var(--ink2)">${escapeHtml(ch.vi)}</p>
        <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center;justify-content:space-between">
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${ch.clauses.map((cl) => `<a href="#red-17-${cl.replace(/\./g, '-')}" class="ai-clause-link">${cl}</a>`).join('')}
          </div>
          <button type="button" class="act-btn" data-ask-chap="${escapeHtml(ch.title)} (${ch.pg})">🤖 ${biText('Hỏi AI', 'Ask AI')}</button>
        </div>
      </div>
    `
      )
      .join('') || `<div style="color:var(--mute)">${t('noResults')}</div>`;

    grid.querySelectorAll('[data-ask-chap]').forEach((b) => {
      b.addEventListener('click', () => {
        state.aiOpen = true;
        state.aiMode = 'chat';
        renderAiDrawer();
        const inp = document.getElementById('aiInput');
        if (inp) {
          inp.value = `Tóm tắt các điểm trọng yếu nhất trong "${b.dataset.askChap}" và lưu ý áp dụng tại Việt Nam.`;
          document.getElementById('aiForm')?.requestSubmit();
        }
      });
    });
  };
  $view.querySelectorAll('[data-bchap]').forEach((btn) => {
    btn.addEventListener('click', () => {
      curBookFilter = btn.dataset.bchap;
      $view.querySelectorAll('[data-bchap]').forEach((b) => b.classList.toggle('active', b === btn));
      renderBookChapters();
    });
  });
  document.getElementById('bookChapSearch')?.addEventListener('input', renderBookChapters);
  renderBookChapters();
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

      <h2 style="margin-top:32px">${biText('Bảng Điền Nhanh Dữ liệu Hợp đồng (Contract Data - Part A)', 'Contract Data Builder (Part A · Guide 2022)')}</h2>
      <div class="card-box">
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>${biText('Điều khoản', 'Sub-Clause')}</th><th>${biText('Thông số Dữ liệu Hợp đồng', 'Contract Data Item')}</th><th>${biText('Giá trị áp dụng cho Dự án', 'Project Value')}</th></tr>
            </thead>
            <tbody>
              ${CONTRACT_DATA_ITEMS.map(
                (it) => `
                <tr>
                  <td><a href="#red-17-${it.key.replace(/\./g, '-')}" class="ai-clause-link">${it.key}</a></td>
                  <td><strong>${escapeHtml(state.lang === 'en' ? it.labelEn : it.labelVi)}</strong></td>
                  <td><input type="text" data-cd-key="${it.key}" value="${escapeHtml(state.contractData[it.key] ?? it.def)}" style="width:100%;padding:6px 10px;border-radius:7px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);font-size:13px" /></td>
                </tr>
              `
              ).join('')}
            </tbody>
          </table>
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button type="button" class="act-btn saved" id="saveCdBtn">✓ ${biText('Lưu Dữ liệu Hợp đồng', 'Save Contract Data')}</button>
          <button type="button" class="act-btn" onclick="window.print()">🖨 ${t('pdf')}</button>
        </div>
      </div>

      <h2 style="margin-top:32px">${biText('Mẫu Điều kiện Riêng Chuẩn (Sample Particular Conditions - Part B)', 'Sample Particular Conditions (Guide 2022)')}</h2>
      <div class="section-grid">
        ${SAMPLE_PARTICULAR_CONDITIONS.map(
          (pc) => `
          <div class="paper">
            <h4>${escapeHtml(state.lang === 'en' ? pc.enTitle : pc.viTitle)}</h4>
            <p style="margin:0">${escapeHtml(state.lang === 'en' ? pc.enBody : pc.viBody)}</p>
            ${state.lang === 'bi' ? `<hr style="margin:12px 0;border:0;border-top:1px solid #cbd5e1"><p style="margin:0;color:#475569">${escapeHtml(pc.enBody)}</p>` : ''}
            <div class="paper-actions">
              <button type="button" class="btn-ghost" data-copy-pc="${pc.id}">📋 ${t('copy')}</button>
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

  $view.querySelectorAll('[data-copy-pc]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const pc = SAMPLE_PARTICULAR_CONDITIONS.find((x) => x.id === btn.dataset.copyPc);
      if (!pc) return;
      await navigator.clipboard?.writeText(`${pc.viTitle}\n\n${pc.viBody}\n\n${pc.enBody}`).catch(() => {});
      showToast(t('copiedTpl'));
    });
  });

  document.getElementById('saveCdBtn')?.addEventListener('click', () => {
    $view.querySelectorAll('[data-cd-key]').forEach((inp) => {
      state.contractData[inp.dataset.cdKey] = inp.value;
    });
    localStorage.setItem('fidic_contract_data', JSON.stringify(state.contractData));
    showToast(biText('Đã lưu Dữ liệu Hợp đồng Part A', 'Contract Data saved'));
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
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <button type="button" class="act-btn" id="weeklyReportBtn">📊 ${biText('Báo cáo Tuần', 'Weekly Report')}</button>
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

  document.getElementById('weeklyReportBtn')?.addEventListener('click', () => {
    const today = new Date().toLocaleDateString('vi-VN');
    const totalChk = CHECKLISTS.reduce((a, c) => a + c.items.length, 0);
    const doneChk = Object.values(state.checks).filter(Boolean).length;
    const rows = state.tracker
      .map((ev) => {
        const s28 = calcStatus(ev.date, 28);
        const s84 = calcStatus(ev.date, 84);
        return `<tr><td>${escapeHtml(ev.title)}</td><td>${ev.date}</td><td>${s28.dateFmt} (${s28.lbl})</td><td>${s84.dateFmt} (${s84.lbl})</td></tr>`;
      })
      .join('');
    const w = window.open('', '_blank', 'width=900,height=720');
    if (!w) return;
    w.document.write(`<!doctype html><html><head><title>Weekly Contract Report - ${escapeHtml(state.projectMeta.name)}</title><style>body{font-family:Segoe UI,sans-serif;padding:32px;color:#111}table{width:100%;border-collapse:collapse;margin-top:14px}th,td{border:1px solid #ccc;padding:8px;text-align:left;font-size:13px}th{background:#f3f4f6}</style></head><body><h1>BÁO CÁO HỢP ĐỒNG TUẦN / WEEKLY CONTRACT REPORT</h1><p><strong>Dự án:</strong> ${escapeHtml(state.projectMeta.name)} | <strong>Số HĐ:</strong> ${escapeHtml(state.projectMeta.contract)} | <strong>Ngày:</strong> ${today}</p><p><strong>Checklist hoàn thành:</strong> ${doneChk}/${totalChk} | <strong>Ghi chú cá nhân:</strong> ${Object.keys(state.notes).length}</p><table><thead><tr><th>Sự việc</th><th>Ngày biết</th><th>Hạn 28d (Notice)</th><th>Hạn 84d (Claim)</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Không có sự việc phát sinh</td></tr>'}</tbody></table></body></html>`);
    w.document.close();
    w.focus();
    w.print();
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

async function renderLibrary() {
  document.title = `${t('navLibrary')} · ${t('brand')}`;
  const isIce = state.libBook === 'ice';

  $view.innerHTML = `
    <div class="band bk-red">
      <div class="band-inner">
        <div class="band-info">
          <div class="book-badge"><small>SOURCE</small>3 Books</div>
          <div class="band-title">
            <h1>📚 ${biText('Thư viện Sách Chuyên khảo FIDIC (Toàn văn)', 'FIDIC Reference Books (Full-Text Reader)')}</h1>
            <div class="sub">${biText('Đọc toàn văn, tra cứu mục lục và tìm kiếm toàn văn trên 1.710 trang sách chuyên khảo', 'Full-text search and chapter reader across 1,710 pages of reference books')}</div>
          </div>
        </div>
        <div class="band-controls">
          <div class="bookpick">
            <button type="button" data-lib-book="godwin" class="${state.libBook === 'godwin' ? 'active' : ''}">Godwin 2020 (244 tr.)</button>
            <button type="button" data-lib-book="seppala" class="${state.libBook === 'seppala' ? 'active' : ''}">Seppälä 2023 (1.466 tr.)</button>
            <button type="button" data-lib-book="ice" class="${state.libBook === 'ice' ? 'active' : ''}">ICE Grutters 2014</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap wrap-wide" id="libContent">
      <div class="card-box">${biText('⏳ Đang tải dữ liệu sách...', '⏳ Loading book content...')}</div>
    </div>
  `;

  $view.querySelectorAll('[data-lib-book]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.libBook = btn.dataset.libBook;
      state.libPage = state.libBook === 'godwin' ? 21 : 52;
      state.libQuery = '';
      renderLibrary();
    });
  });

  const $lib = document.getElementById('libContent');
  if (isIce) {
    $lib.innerHTML = `
      <div class="card-box">
        <h2 style="margin-top:0">ICE FIDIC Users' Guide (3rd Ed., Leo Grutters, 2014 · 318 trang)</h2>
        <p>${biText(
          'Tệp PDF gốc trong Source (170 MB) là bản scan dạng ảnh (0 trang text nhúng), nên chưa thể hiển thị toàn văn trực tiếp dưới dạng text nếu chưa chạy OCR. Dưới đây là 4 phần chính của sách:',
          'The source PDF (170 MB) is an image-only scan with no embedded text layer. Below is its 4-part structure:'
        )}</p>
        <div class="section-grid">
          ${BOOK_CHAPTERS.filter((c) => c.book === 'ice-grutters-2014')
            .map(
              (c) => `
            <div class="card-box">
              <span class="tl-pill">${escapeHtml(c.pg)}</span>
              <h3>${escapeHtml(c.title)}</h3>
              <p style="font-size:14px">${escapeHtml(c.vi)}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
    return;
  }

  const fileUrl = state.libBook === 'godwin' ? './data/books/godwin.json?v=33' : './data/books/seppala.json?v=33';
  let bookData = state.bookCache[state.libBook];
  if (!bookData) {
    try {
      const res = await fetch(fileUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      bookData = await res.json();
      state.bookCache[state.libBook] = bookData;
    } catch (err) {
      $lib.innerHTML = `<div class="card-box">⚠️ ${biText('Không tải được dữ liệu sách:', 'Failed to load book:')} ${escapeHtml(err.message)}</div>`;
      return;
    }
  }

  const total = bookData.totalPages || bookData.pages.length;
  const clampPage = (p) => Math.max(1, Math.min(total, Number(p) || 1));
  state.libPage = clampPage(state.libPage);

  const renderLibText = (text, query, hls) => {
    let html = highlightText(text, query);
    if (!hls || !hls.length) return html;
    for (const hl of hls) {
      const needle = escapeHtml(hl.text || '').trim();
      if (!needle || needle.length < 2) continue;
      const escNeedle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`(<[^>]+>)|(${escNeedle})`, 'g');
      const titleAttr = hl.comment ? ` title="${escapeHtml(hl.comment)}"` : '';
      html = html.replace(re, (m, tag, match) => {
        if (tag) return tag;
        return `<mark class="user-hl" data-hl-color="${escapeHtml(hl.color || 'yellow')}"${titleAttr}>${match}</mark>`;
      });
    }
    return html;
  };

  const renderReader = () => {
    const pIdx = state.libPage - 1;
    const rawText = bookData.pages[pIdx] || '(Trang trống / Blank page)';
    const transKey = `${state.libBook}-${state.libPage}`;
    const viText = bookData.pages_vi?.[pIdx] || state.libTrans[transKey] || '';
    const pageHls = state.libHighlights[transKey] || [];
    const pageNote = state.libNotes[transKey] || '';
    const q = state.libQuery.trim().toLowerCase();

    let hitsHtml = '';
    if (q.length >= 2) {
      const hits = [];
      for (let i = 0; i < bookData.pages.length && hits.length < 40; i++) {
        const txtEn = bookData.pages[i] || '';
        const txtVi = bookData.pages_vi?.[i] || '';
        const posEn = txtEn.toLowerCase().indexOf(q);
        const posVi = txtVi.toLowerCase().indexOf(q);
        if (posEn >= 0 || posVi >= 0) {
          const src = posVi >= 0 ? txtVi : txtEn;
          const pos = posVi >= 0 ? posVi : posEn;
          const snippet = src.slice(Math.max(0, pos - 40), Math.min(src.length, pos + 110)).replace(/\s+/g, ' ');
          hits.push({ page: i + 1, snippet });
        }
      }
      hitsHtml = `
        <div class="lib-hits">
          <div style="font-size:12.5px;color:var(--mute);font-weight:600">${biText(`Tìm thấy ${hits.length}${hits.length === 40 ? '+' : ''} trang khớp:`, `Found ${hits.length}${hits.length === 40 ? '+' : ''} matching pages:`)}</div>
          ${hits
            .map(
              (h) =>
                `<button type="button" class="lib-hit" data-jump-page="${h.page}"><strong>Tr. ${h.page}:</strong> ...${highlightText(h.snippet, state.libQuery)}...</button>`
            )
            .join('')}
        </div>
      `;
    }

    let activeTocIdx = -1;
    bookData.toc.forEach((tItem, idx) => {
      if (tItem.page <= state.libPage) activeTocIdx = idx;
    });

    const tocHtml = bookData.toc
      .map(
        (tItem, idx) =>
          `<button type="button" class="lib-toc-item lvl${tItem.level} ${idx === activeTocIdx ? 'active' : ''}" data-jump-page="${tItem.page}">${escapeHtml(
            tItem.title
          )} <span style="color:var(--teal);font-size:11px">(${tItem.page})</span></button>`
      )
      .join('');

    const showAnnPanel = state.libNoteOpen || Boolean(pageNote) || pageHls.length > 0;

    $lib.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:14px">
        <button type="button" class="act-btn" id="libDesktopTocBtn">☰ ${state.libTocCollapsed ? biText('Hiện Mục lục', 'Show TOC') : biText('Ẩn Mục lục', 'Hide TOC')}</button>
        <input type="search" id="libSearchInp" value="${escapeHtml(state.libQuery)}" placeholder="${biText('Tìm toàn văn trong sách (VD: time-bar, 20.2, good faith, concurrent delay)...', 'Full-text search in book...')}" style="flex:1 1 260px;padding:9px 14px;border-radius:10px;border:1px solid var(--rule2);background:var(--bg2);color:var(--ink);font-size:14px" />
        <div style="display:flex;align-items:center;gap:6px">
          <button type="button" class="act-btn" id="libPrevBtn" ${state.libPage <= 1 ? 'disabled' : ''}>${t('prev')}</button>
          <span style="font-size:13px">Tr.</span>
          <input type="number" id="libPageInp" min="1" max="${total}" value="${state.libPage}" style="width:72px;padding:6px 8px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg2);color:var(--ink);text-align:center" />
          <span style="font-size:13px;color:var(--mute)">/ ${total}</span>
          <button type="button" class="act-btn" id="libNextBtn" ${state.libPage >= total ? 'disabled' : ''}>${t('next')}</button>
        </div>
      </div>
      ${hitsHtml}
      <div class="lib-layout ${state.libTocCollapsed ? 'lib-collapsed' : ''}">
        <div class="lib-toc-col">
          <button type="button" class="toc-toggle" id="libTocToggle">☰ ${biText('Mục lục Sách', 'Book TOC')} (${bookData.toc.length})</button>
          <nav class="index ${state.tocOpen ? 'open' : ''}" aria-label="Book TOC">
            <div class="index-title">${biText('Mục lục Sách', 'Book TOC')}</div>
            ${tocHtml}
          </nav>
        </div>
        <div style="min-width:0">
          <div class="lib-toolbar">
            <div class="lib-toolbar-group">
              <span class="lib-page-badge">${biText('Trang', 'Page')} ${state.libPage} / ${total}</span>
              <strong style="color:var(--ink);font-size:14px">${escapeHtml(bookData.title)}</strong>
              ${viText ? `<span style="font-size:12px;color:var(--teal);font-weight:600">✅ ${biText('Song ngữ', 'Bilingual')}</span>` : ''}
            </div>
            <div class="lib-toolbar-group">
              <button type="button" class="act-btn" id="libHighlightBtn" title="${biText('Bôi đen đoạn văn bản rồi bấm để Highlight & Comment', 'Select text first, then click to Highlight & Comment')}">🖍 ${biText('Highlight chọn', 'Highlight')}${pageHls.length ? ` (${pageHls.length})` : ''}</button>
              <button type="button" class="act-btn ${pageNote ? 'has-note' : ''}" id="libNoteBtn">📝 ${biText('Ghi chú', 'Note')}${pageNote ? ' ●' : ''}</button>
              <button type="button" class="act-btn" id="libCopyPage">📋 ${t('copy')}</button>
              <button type="button" class="act-btn saved" id="libTranslatePage">🤖 ${viText ? biText('Dịch lại (AI)', 'Re-translate (AI)') : biText('Dịch & Lưu (AI)', 'Translate & Cache (AI)')}</button>
            </div>
          </div>
          <div id="libHlBarSlot"></div>
          ${
            (() => {
              if (!viText) return `<div class="lib-page-card">${renderLibText(rawText, state.libQuery, pageHls)}</div>`;
              if (state.lang === 'vi') return `<div class="lib-page-card">${renderLibText(viText, state.libQuery, pageHls)}</div>`;
              if (state.lang === 'en') return `<div class="lib-page-card">${renderLibText(rawText, state.libQuery, pageHls)}</div>`;
              const viParas = viText.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
              const enParas = rawText.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
              const resizerTitle = biText('Kéo để điều chỉnh độ rộng khung Việt / Anh', 'Drag to resize VI / EN panes');
              if (viParas.length > 0 && viParas.length === enParas.length) {
                const rows = viParas
                  .map(
                    (vp, idx) =>
                      `<div class="lib-bi-cell">${renderLibText(vp, state.libQuery, pageHls)}</div><div class="lib-bi-cell">${renderLibText(enParas[idx], state.libQuery, pageHls)}</div>`
                  )
                  .join('');
                return `<div class="lib-split lib-bi-aligned" id="libSplitPane" style="--lib-split:${state.libSplit}%"><div class="lib-bi-head"><span class="col-label" style="margin-bottom:0">Tiếng Việt</span></div><div class="lib-resizer" id="libResizer" style="grid-row:1 / span ${viParas.length + 1}" title="${resizerTitle}"></div><div class="lib-bi-head"><span class="col-label" style="margin-bottom:0">English</span></div>${rows}</div>`;
              }
              return `<div class="lib-split" id="libSplitPane" style="--lib-split:${state.libSplit}%"><div class="lib-page-card"><span class="col-label">Tiếng Việt</span><div>${renderLibText(viText, state.libQuery, pageHls)}</div></div><div class="lib-resizer" id="libResizer" title="${resizerTitle}"></div><div class="lib-page-card"><span class="col-label">English</span><div>${renderLibText(rawText, state.libQuery, pageHls)}</div></div></div>`;
            })()
          }
          ${
            showAnnPanel
              ? `<div class="lib-ann-panel">
                  <div class="lib-ann-head">
                    <strong style="font-size:13.5px;color:var(--ink)">📌 ${biText('Ghi chú & Highlight cá nhân — Trang', 'Personal Notes & Highlights — Page')} ${state.libPage}</strong>
                    <span class="lib-local-badge">🔒 ${biText('Chỉ lưu cục bộ trên máy này (không đẩy lên web)', 'Saved locally on this device only')}</span>
                  </div>
                  ${
                    state.libNoteOpen || pageNote
                      ? `<div class="note-box" style="margin-top:6px">
                          <textarea id="libPageNoteInput" placeholder="${biText('Viết ghi chú cá nhân cho trang này...', 'Write personal notes for this page...')}">${escapeHtml(pageNote)}</textarea>
                          <div class="note-actions">
                            <button type="button" class="act-btn saved" id="libSaveNoteBtn">💾 ${biText('Lưu ghi chú', 'Save note')}</button>
                            ${pageNote ? `<button type="button" class="act-btn" id="libDelNoteBtn">🗑 ${biText('Xóa ghi chú', 'Delete note')}</button>` : ''}
                          </div>
                        </div>`
                      : ''
                  }
                  ${
                    pageHls.length
                      ? `<div class="lib-hl-list">
                          ${pageHls
                            .map(
                              (hl, idx) => `
                            <div class="lib-hl-item" data-hl-color="${escapeHtml(hl.color || 'yellow')}">
                              <div class="lib-hl-item-top">
                                <div style="flex:1">
                                  <div style="font-style:italic;color:var(--ink)">“${escapeHtml(hl.text)}”</div>
                                  ${hl.comment ? `<div style="margin-top:4px;color:var(--teal);font-weight:500">💬 ${escapeHtml(hl.comment)}</div>` : ''}
                                </div>
                                <div style="display:flex;gap:4px;flex-shrink:0">
                                  <button type="button" class="act-btn" data-edit-hl="${idx}" title="${biText('Sửa bình luận', 'Edit comment')}">✏️</button>
                                  <button type="button" class="act-btn" data-del-hl="${idx}" title="${biText('Xóa highlight', 'Delete highlight')}">✕</button>
                                </div>
                              </div>
                            </div>`
                            )
                            .join('')}
                        </div>`
                      : ''
                  }
                </div>`
              : ''
          }
        </div>
      </div>
    `;

    // Draggable split resizer between VI and EN panes
    const $split = document.getElementById('libSplitPane');
    const $resizer = document.getElementById('libResizer');
    if ($split && $resizer) {
      $resizer.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        $resizer.classList.add('dragging');
        const rect = $split.getBoundingClientRect();
        const onMove = (ev) => {
          const pct = Math.min(78, Math.max(22, ((ev.clientX - rect.left) / rect.width) * 100));
          state.libSplit = Math.round(pct);
          $split.style.setProperty('--lib-split', `${state.libSplit}%`);
        };
        const onUp = () => {
          $resizer.classList.remove('dragging');
          localStorage.setItem('fidic_lib_split', String(state.libSplit));
          window.removeEventListener('pointermove', onMove);
          window.removeEventListener('pointerup', onUp);
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
      });
    }

    // Highlight & Comment bar
    document.getElementById('libHighlightBtn')?.addEventListener('click', () => {
      const sel = window.getSelection()?.toString().trim() || '';
      if (sel.length < 2) {
        showToast(biText('Hãy bôi đen một đoạn văn bản rồi bấm Highlight', 'Select a text passage first, then click Highlight'));
        return;
      }
      const $slot = document.getElementById('libHlBarSlot');
      if (!$slot) return;
      let chosenColor = 'yellow';
      $slot.innerHTML = `
        <div class="lib-hl-bar">
          <span class="lib-hl-quote">“${escapeHtml(sel)}”</span>
          <button type="button" class="lib-color-dot active" data-color="yellow" title="Vàng"></button>
          <button type="button" class="lib-color-dot" data-color="teal" title="Xanh ngọc"></button>
          <button type="button" class="lib-color-dot" data-color="pink" title="Hồng"></button>
          <input type="text" id="libHlCommentInp" placeholder="${biText('Thêm bình luận / comment (tùy chọn)...', 'Add optional comment...')}" style="flex:1 1 200px;padding:6px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);font-size:13px" />
          <button type="button" class="act-btn saved" id="libHlSaveBtn">✓ ${biText('Lưu', 'Save')}</button>
          <button type="button" class="act-btn" id="libHlCancelBtn">✕</button>
        </div>
      `;
      $slot.querySelectorAll('.lib-color-dot').forEach((dot) => {
        dot.addEventListener('click', () => {
          chosenColor = dot.dataset.color;
          $slot.querySelectorAll('.lib-color-dot').forEach((d) => d.classList.toggle('active', d === dot));
        });
      });
      document.getElementById('libHlCancelBtn')?.addEventListener('click', () => {
        $slot.innerHTML = '';
      });
      document.getElementById('libHlSaveBtn')?.addEventListener('click', () => {
        const comment = document.getElementById('libHlCommentInp')?.value.trim() || '';
        const list = state.libHighlights[transKey] ? [...state.libHighlights[transKey]] : [];
        list.push({ text: sel.slice(0, 600), color: chosenColor, comment, createdAt: Date.now() });
        state.libHighlights[transKey] = list;
        localStorage.setItem('fidic_lib_highlights', JSON.stringify(state.libHighlights));
        window.getSelection()?.removeAllRanges();
        showToast(biText('Đã lưu Highlight & Comment cục bộ', 'Saved Highlight & Comment locally'));
        renderReader();
      });
    });

    // Note toggle & save
    document.getElementById('libNoteBtn')?.addEventListener('click', () => {
      state.libNoteOpen = !state.libNoteOpen;
      renderReader();
    });
    document.getElementById('libSaveNoteBtn')?.addEventListener('click', () => {
      const val = document.getElementById('libPageNoteInput')?.value || '';
      if (val.trim()) {
        state.libNotes[transKey] = val;
      } else {
        delete state.libNotes[transKey];
      }
      localStorage.setItem('fidic_lib_notes', JSON.stringify(state.libNotes));
      showToast(biText('Đã lưu ghi chú trang (cục bộ)', 'Saved page note (locally)'));
      renderReader();
    });
    document.getElementById('libDelNoteBtn')?.addEventListener('click', () => {
      delete state.libNotes[transKey];
      state.libNoteOpen = false;
      localStorage.setItem('fidic_lib_notes', JSON.stringify(state.libNotes));
      showToast(biText('Đã xóa ghi chú trang', 'Deleted page note'));
      renderReader();
    });

    // Edit / Delete Highlight
    $lib.querySelectorAll('[data-edit-hl]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.editHl);
        const list = state.libHighlights[transKey] || [];
        if (!list[idx]) return;
        const next = window.prompt(biText('Chỉnh sửa bình luận:', 'Edit comment:'), list[idx].comment || '');
        if (next === null) return;
        list[idx].comment = next.trim();
        localStorage.setItem('fidic_lib_highlights', JSON.stringify(state.libHighlights));
        renderReader();
      });
    });
    $lib.querySelectorAll('[data-del-hl]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.delHl);
        const list = state.libHighlights[transKey] || [];
        list.splice(idx, 1);
        if (list.length) state.libHighlights[transKey] = list;
        else delete state.libHighlights[transKey];
        localStorage.setItem('fidic_lib_highlights', JSON.stringify(state.libHighlights));
        renderReader();
      });
    });

    document.getElementById('libDesktopTocBtn')?.addEventListener('click', () => {
      state.libTocCollapsed = !state.libTocCollapsed;
      renderReader();
    });

    document.getElementById('libTocToggle')?.addEventListener('click', () => {
      state.tocOpen = !state.tocOpen;
      $lib.querySelector('.index')?.classList.toggle('open', state.tocOpen);
    });

    const $ls = document.getElementById('libSearchInp');
    $ls?.addEventListener('input', (e) => {
      state.libQuery = e.target.value;
      const pos = e.target.selectionStart;
      renderReader();
      const next = document.getElementById('libSearchInp');
      if (next) {
        next.focus();
        next.setSelectionRange(pos, pos);
      }
    });

    document.getElementById('libPrevBtn')?.addEventListener('click', () => {
      state.libPage = clampPage(state.libPage - 1);
      renderReader();
    });
    document.getElementById('libNextBtn')?.addEventListener('click', () => {
      state.libPage = clampPage(state.libPage + 1);
      renderReader();
    });
    document.getElementById('libPageInp')?.addEventListener('change', (e) => {
      state.libPage = clampPage(e.target.value);
      renderReader();
    });

    $lib.querySelectorAll('[data-jump-page]').forEach((b) => {
      b.addEventListener('click', () => {
        state.libPage = clampPage(b.dataset.jumpPage);
        renderReader();
      });
    });

    document.getElementById('libCopyPage')?.addEventListener('click', async () => {
      const txt = viText ? `${viText}\n\n---\n\n${rawText}` : rawText;
      await navigator.clipboard?.writeText(txt).catch(() => {});
      showToast(t('copiedText'));
    });

    document.getElementById('libTranslatePage')?.addEventListener('click', async () => {
      if (!state.geminiKey) {
        state.aiOpen = true;
        state.aiSettingsOpen = true;
        renderAiDrawer();
        showToast(biText('Nhập Gemini API Key để dịch trang này', 'Enter Gemini API Key to translate'));
        return;
      }
      const btn = document.getElementById('libTranslatePage');
      if (btn) {
        btn.disabled = true;
        btn.textContent = '⏳ Đang dịch...';
      }
      try {
        const lockPrompt = `Translate this FIDIC textbook page accurately into standard Vietnamese using strict FIDIC terminology: Employer=Chủ đầu tư, Engineer=Nhà tư vấn, Contractor=Nhà thầu, Variation=Thay đổi, Time for Completion=Thời gian Hoàn thành, Taking-Over Certificate=Chứng chỉ Bàn giao, DNP=Thời hạn Thông báo Sai sót, Delay Damages=Tiền bồi thường chậm trễ, Notice of Claim=Thông báo Khiếu nại, NOD=Thông báo Không hài lòng, DAAB=Ban Phòng ngừa và Xử lý Tranh chấp. Output ONLY the clean Vietnamese translation:\n\n${rawText}`;
        const translated = await askGemini(lockPrompt);
        state.libTrans[transKey] = translated;
        localStorage.setItem('fidic_lib_trans', JSON.stringify(state.libTrans));
        showToast(biText('Đã dịch & lưu bản dịch vào bộ nhớ trình duyệt', 'Translated & cached locally'));
        renderReader();
      } catch (err) {
        showToast(`⚠️ ${err.message}`);
        if (btn) {
          btn.disabled = false;
          btn.textContent = `🤖 ${biText('Dịch & Lưu (AI)', 'Translate & Cache (AI)')}`;
        }
      }
    });
  };

  renderReader();
}

function renderSaved() {
  document.title = `${t('navSaved')} · ${t('brand')}`;
  const items = SUBCLAUSES.filter((s) => state.saved.includes(keyOf(s)) || Boolean(state.notes[keyOf(s)]));
  state.presList = items;

  $view.innerHTML = `
    <div class="wrap">
      <div class="card-box" style="margin-bottom:18px">
        <h3 style="margin-top:0">🔐 ${biText('Bảo mật Dữ liệu & Đồng bộ Đám mây', 'Data Security & Cloud Sync')}</h3>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px">
          <input type="text" id="metaProj" value="${escapeHtml(state.projectMeta.name)}" placeholder="Project Name" style="flex:1 1 200px;padding:7px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink)" />
          <input type="text" id="metaContract" value="${escapeHtml(state.projectMeta.contract)}" placeholder="Contract No." style="flex:1 1 160px;padding:7px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink)" />
          <button type="button" class="act-btn saved" id="saveMetaBtn">✓ ${biText('Lưu tiêu đề in', 'Save Print Header')}</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
          <button type="button" class="act-btn" id="exportNotesBtn">⬇ ${biText('Xuất JSON', 'Export JSON')}</button>
          <button type="button" class="act-btn saved" id="exportEncBtn">🔒 ${biText('Xuất Sao lưu Mã hóa (AES-256)', 'Export Encrypted')}</button>
          <button type="button" class="act-btn" id="saveOneDriveBtn">☁ ${biText('Lưu ra OneDrive / Đĩa', 'Save to OneDrive')}</button>
          <label class="act-btn" style="cursor:pointer">
            ⬆ ${biText('Nhập Sao lưu (JSON / Mã hóa)', 'Import Backup')}
            <input type="file" id="importNotesInput" accept="application/json" hidden />
          </label>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding-top:10px;border-top:1px solid var(--rule);margin-bottom:10px">
          <input type="password" id="gistTokenInp" value="${escapeHtml(state.gistToken)}" placeholder="GitHub PAT (scope: gist)" style="flex:1 1 190px;padding:6px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);font-size:13px" />
          <input type="text" id="gistIdInp" value="${escapeHtml(state.gistId)}" placeholder="Gist ID (tự tạo nếu trống)" style="flex:1 1 160px;padding:6px 10px;border-radius:8px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);font-size:13px" />
          <button type="button" class="act-btn" id="gistPushBtn">☁⬆ ${biText('Đẩy lên Gist', 'Push Gist')}</button>
          <button type="button" class="act-btn" id="gistPullBtn">☁⬇ ${biText('Tải từ Gist', 'Pull Gist')}</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
          <button type="button" class="act-btn" id="setLockBtn">🔑 ${state.lockHash ? biText('Đổi / Tắt Khóa App', 'Change / Remove Lock') : biText('Bật Khóa Ứng dụng (PIN)', 'Enable App Lock')}</button>
          <button type="button" class="act-btn" id="wipeAllBtn" style="color:#ef4444;border-color:rgba(239,68,68,0.4)">🧹 ${biText('Xóa sạch Key & Dữ liệu nhạy cảm', 'Wipe Sensitive Data')}</button>
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

  const buildBackupObj = () => ({
    saved: state.saved,
    notes: state.notes,
    projects: state.projects,
    activeProjectId: state.activeProjectId,
    checks: state.checks,
    tracker: state.tracker,
    projectMeta: state.projectMeta
  });
  const buildBackupJson = () => JSON.stringify(buildBackupObj(), null, 2);

  const applyImportedObj = (parsed) => {
    if (Array.isArray(parsed.saved)) {
      state.saved = Array.from(new Set([...state.saved, ...parsed.saved]));
      localStorage.setItem('fidic_saved', JSON.stringify(state.saved));
    }
    if (parsed.notes && typeof parsed.notes === 'object') {
      state.notes = { ...state.notes, ...parsed.notes };
      localStorage.setItem('fidic_notes', JSON.stringify(state.notes));
    }
    if (Array.isArray(parsed.projects) && parsed.projects.length) {
      state.projects = parsed.projects;
      state.activeProjectId = parsed.activeProjectId || parsed.projects[0].id;
      const act = state.projects.find((p) => p.id === state.activeProjectId) || state.projects[0];
      state.tracker = act.tracker || [];
      state.checks = act.checks || {};
      state.projectMeta = { name: act.name, contract: act.contract };
      syncActiveProject();
    } else {
      if (parsed.checks) state.checks = { ...state.checks, ...parsed.checks };
      if (Array.isArray(parsed.tracker)) state.tracker = parsed.tracker;
      syncActiveProject();
    }
  };

  document.getElementById('exportNotesBtn').addEventListener('click', () => {
    const blob = new Blob([buildBackupJson()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'fidic-notebook-backup.json';
    a.click();
  });

  document.getElementById('exportEncBtn').addEventListener('click', async () => {
    const pass = prompt(biText('Nhập mật khẩu mã hóa AES-256 (tối thiểu 4 ký tự):', 'Enter AES-256 encryption passphrase:'));
    if (!pass || pass.length < 4) return;
    const encStr = await encryptJson(buildBackupObj(), pass);
    const blob = new Blob([encStr], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'fidic-notebook-encrypted.json';
    a.click();
    showToast(biText('Đã xuất bản sao lưu mã hóa AES-256', 'Encrypted backup exported'));
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
      const text = await file.text();
      const rawObj = JSON.parse(text);
      let parsed = rawObj;
      if (rawObj.encrypted) {
        const pass = prompt(biText('File đã mã hóa AES-256. Nhập mật khẩu giải mã:', 'Encrypted file. Enter passphrase:'));
        if (!pass) return;
        parsed = await decryptJson(text, pass);
      }
      applyImportedObj(parsed);
      showToast(biText('Đã nhập dữ liệu sổ tay thành công', 'Notebook backup imported'));
      render();
    } catch {
      showToast(biText('Sai mật khẩu hoặc tệp JSON không hợp lệ', 'Invalid passphrase or JSON file'));
    }
  });

  document.getElementById('gistPushBtn').addEventListener('click', async () => {
    const token = document.getElementById('gistTokenInp').value.trim();
    let gid = document.getElementById('gistIdInp').value.trim();
    if (!token) return showToast(biText('Cần nhập GitHub PAT (scope: gist)', 'GitHub PAT required'));
    localStorage.setItem('fidic_gist_token', token);
    state.gistToken = token;
    const pass = prompt(biText('Nhập mật khẩu mã hóa dữ liệu trước khi đẩy lên Gist (bỏ trống nếu không mã hóa):', 'Optional AES-256 passphrase before pushing to Gist:'));
    const content = pass ? await encryptJson(buildBackupObj(), pass) : buildBackupJson();
    try {
      const url = gid ? `https://api.github.com/gists/${encodeURIComponent(gid)}` : 'https://api.github.com/gists';
      const res = await fetch(url, {
        method: gid ? 'PATCH' : 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: 'Learn FIDIC Notebook Sync',
          public: false,
          files: { 'fidic-notebook-sync.json': { content } }
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
      state.gistId = data.id;
      localStorage.setItem('fidic_gist_id', data.id);
      showToast(biText(`Đã đồng bộ lên Gist (${data.id.slice(0, 7)})`, `Pushed to Gist (${data.id.slice(0, 7)})`));
      render();
    } catch (err) {
      showToast(`⚠️ Gist: ${err.message}`);
    }
  });

  document.getElementById('gistPullBtn').addEventListener('click', async () => {
    const token = document.getElementById('gistTokenInp').value.trim();
    const gid = document.getElementById('gistIdInp').value.trim();
    if (!token || !gid) return showToast(biText('Cần nhập GitHub PAT và Gist ID', 'GitHub PAT and Gist ID required'));
    localStorage.setItem('fidic_gist_token', token);
    localStorage.setItem('fidic_gist_id', gid);
    try {
      const res = await fetch(`https://api.github.com/gists/${encodeURIComponent(gid)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`);
      const content = data?.files?.['fidic-notebook-sync.json']?.content;
      if (!content) throw new Error('Sync file not found in Gist');
      const rawObj = JSON.parse(content);
      let parsed = rawObj;
      if (rawObj.encrypted) {
        const pass = prompt(biText('Dữ liệu Gist đã mã hóa. Nhập mật khẩu giải mã:', 'Encrypted Gist. Enter passphrase:'));
        if (!pass) return;
        parsed = await decryptJson(content, pass);
      }
      applyImportedObj(parsed);
      showToast(biText('Đã tải dữ liệu từ Gist thành công', 'Pulled from Gist'));
      render();
    } catch (err) {
      showToast(`⚠️ Gist: ${err.message}`);
    }
  });

  document.getElementById('setLockBtn').addEventListener('click', async () => {
    if (state.lockHash) {
      const cur = prompt(biText('Nhập mật khẩu hiện tại để tắt khóa (hoặc Cancel):', 'Enter current passphrase to remove lock:'));
      if (!cur) return;
      if ((await hashPassphrase(cur)) !== state.lockHash) return showToast(biText('Sai mật khẩu!', 'Wrong passphrase!'));
      state.lockHash = '';
      localStorage.removeItem('fidic_lock_hash');
      showToast(biText('Đã tắt Khóa Ứng dụng', 'App Lock disabled'));
      render();
    } else {
      const pin = prompt(biText('Đặt mật khẩu/PIN khóa ứng dụng:', 'Set App Lock passphrase/PIN:'));
      if (!pin || pin.length < 4) return showToast(biText('Tối thiểu 4 ký tự', 'Minimum 4 characters'));
      state.lockHash = await hashPassphrase(pin);
      localStorage.setItem('fidic_lock_hash', state.lockHash);
      showToast(biText('Đã bật Khóa Ứng dụng', 'App Lock enabled'));
      render();
    }
  });

  document.getElementById('wipeAllBtn').addEventListener('click', () => {
    if (!confirm(biText('Xóa toàn bộ API Key, GitHub Token, Ghi chú và Dự án trên trình duyệt này?', 'Wipe all API keys, tokens, notes, and projects from this browser?'))) return;
    localStorage.clear();
    location.reload();
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
      ({ s }) => {
        const g = GUIDE_NOTES[s.id] ? ` [Guide: ${GUIDE_NOTES[s.id].vi}]` : '';
        const c = COMMENTARY_NOTES[s.id] ? ` [Commentary (${COMMENTARY_NOTES[s.id].src}): ${COMMENTARY_NOTES[s.id].vi}]` : '';
        return `[${s.book.toUpperCase()} 20${s.ed} - ${s.id} ${s.viTitle} / ${s.enTitle}]: ${s.viBody} | ${s.enBody}${g}${c}`;
      }
    );
  return scored.join('\n');
}

async function askGemini(q, imageObj = null) {
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
  const userParts = [{ text: fullPrompt }];
  if (imageObj?.base64) {
    userParts.push({ inlineData: { mimeType: imageObj.mimeType, data: imageObj.base64 } });
  }

  const callModel = async (modelName) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
      modelName
    )}:generateContent?key=${encodeURIComponent(state.geminiKey)}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: userParts }],
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
      <button type="button" data-ai-mode="draft" class="${state.aiMode === 'draft' ? 'active' : ''}">✍ ${biText('Soạn Thư', 'Draft')}</button>
      <button type="button" data-ai-mode="pc" class="${state.aiMode === 'pc' ? 'active' : ''}">⚖ ${biText('Soi ĐKR', 'Review PC')}</button>
      <button type="button" data-ai-mode="dispute" class="${state.aiMode === 'dispute' ? 'active' : ''}">🎓 ${biText('Tranh chấp', 'Dispute')}</button>
    </div>
  `;

  const toolFormHtml =
    state.aiMode === 'draft'
      ? `
        <form class="ai-tool-form" id="aiDraftForm">
          <select id="draftType">
            <option value="20.2 Notice of Claim">${biText('Thông báo Khiếu nại (20.2)', 'Notice of Claim (20.2)')}</option>
            <option value="20.2 84-Day Fully Detailed Claim Builder">${biText('Dàn ý Hồ sơ Khiếu nại 84 ngày (20.2.4)', '84-Day Fully Detailed Claim Builder')}</option>
            <option value="8.5 EOT Request">${biText('Đề nghị Gia hạn Thời gian (8.5 / 20.2)', 'Extension of Time Notice (8.5 / 20.2)')}</option>
            <option value="3.7.5 Notice of Dissatisfaction">${biText('Thông báo Không hài lòng NOD (3.7.5)', 'Notice of Dissatisfaction (3.7.5)')}</option>
            <option value="13.3 Variation Proposal">${biText('Đề xuất Thay đổi (13.3)', 'Variation Proposal (13.3)')}</option>
            <option value="16.1 Notice of Suspension">${biText('Thông báo Tạm ngừng (16.1)', 'Notice of Suspension (16.1)')}</option>
          </select>
          <textarea id="draftFacts" placeholder="${biText('Nhập tóm tắt sự việc, ngày phát sinh, ảnh hưởng...', 'Enter event summary, date, impact...')}" required></textarea>
          <button type="submit" class="btn-primary bk-red" ${state.aiLoading ? 'disabled' : ''}>✍ ${biText('Tạo Thư tín Song ngữ', 'Generate Bilingual Letter')}</button>
        </form>
      `
      : state.aiMode === 'pc'
      ? `
        <form class="ai-tool-form" id="aiPcForm">
          <textarea id="pcInput" placeholder="${biText('Dán nội dung Điều kiện Riêng (Particular Conditions) cần đối chiếu với FIDIC 2017...', 'Paste Particular Conditions clause to compare against FIDIC 2017...')}" required></textarea>
          <button type="submit" class="btn-primary bk-red" ${state.aiLoading ? 'disabled' : ''}>⚖ ${biText('Phân tích Rủi ro vs Điều kiện Chung', 'Analyze Risk vs GC 2017')}</button>
        </form>
      `
      : state.aiMode === 'dispute'
      ? `
        <form class="ai-tool-form" id="aiDisputeForm">
          <select id="disputeRole">
            <option value="Contractor">${biText('Góc nhìn bảo vệ Nhà thầu', 'Contractor Perspective')}</option>
            <option value="Employer">${biText('Góc nhìn bảo vệ Chủ đầu tư', 'Employer Perspective')}</option>
            <option value="DAAB / Neutral">${biText('Góc nhìn trung lập (Nhà tư vấn / DAAB)', 'Neutral (Engineer / DAAB)')}</option>
          </select>
          <textarea id="disputeFacts" placeholder="${biText('Mô tả tình huống tranh chấp (VD: CĐT giữ lại IPC, trễ Notice 28 ngày, chấm dứt 15.2, phạt LDs)...', 'Describe dispute facts (e.g. withheld IPC, late 28d Notice, 15.2 termination, LDs)...')}" required></textarea>
          <button type="submit" class="btn-primary bk-red" ${state.aiLoading ? 'disabled' : ''}>🎓 ${biText('Phân tích theo Seppälä 2023 & Godwin 2020', 'Analyze via Seppälä & Godwin')}</button>
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
        ${state.aiMsgs
          .map(
            (m, i) => `
          <div class="ai-msg ${m.role}" style="white-space:pre-wrap">${renderAiMarkdown(m.text)}${
              m.role === 'bot' && i > 0
                ? `<div class="ai-msg-actions">
                    <button type="button" class="act-btn" data-ai-copy="${i}">📋 ${t('copy')}</button>
                    <button type="button" class="act-btn" data-ai-print="${i}">🖨 ${t('pdf')}</button>
                  </div>`
                : ''
            }</div>`
          )
          .join('')}
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
      ${
        state.aiImage
          ? `<div class="ai-img-preview">
              <img src="${state.aiImage.dataUrl}" alt="Attached" />
              <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(state.aiImage.name)}</span>
              <button type="button" class="act-btn" id="removeAiImg">✕</button>
            </div>`
          : ''
      }
      <form class="ai-form" id="aiForm">
        <label class="act-btn" title="${biText('Đính kèm ảnh công văn / hợp đồng', 'Attach image')}" style="cursor:pointer;padding:0 10px;display:inline-flex;align-items:center">
          📷
          <input type="file" id="aiImgInput" accept="image/*" hidden />
        </label>
        <input type="text" id="aiInput" placeholder="${biText('Nhập câu hỏi FIDIC hoặc đính kèm ảnh...', 'Ask a FIDIC question or attach image...')}" ${state.aiLoading ? 'disabled' : ''} required />
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
    const prompt = `Compare this Particular Conditions (Điều kiện Riêng) text against FIDIC 2017 General Conditions and the 5 FIDIC Golden Principles. Identify: (1) Which Sub-Clauses are amended, (2) Risk shift (Employer vs Contractor), (3) Key deadlines or financial impacts, in concise bilingual Vietnamese-English:\n\n${pcText}`;
    const offline = `⚖️ **Phân tích sơ bộ (Offline):**\n${answerFidicQuestion(pcText)}\n\n*(Nhập Gemini API Key tại ⚙ Key để AI phân tích chi tiết sự dịch chuyển rủi ro so với Điều kiện Chung 2017).*`;
    await runAiPrompt(`⚖ Đối chiếu PC`, prompt, offline);
  });

  document.getElementById('aiDisputeForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const role = document.getElementById('disputeRole').value;
    const facts = document.getElementById('disputeFacts').value.trim();
    if (!facts || state.aiLoading) return;
    const prompt = `Analyze this FIDIC contract dispute from the ${role} perspective, grounded in Christopher Seppälä (2023 Commentary), William Godwin (2020), and Vietnamese construction law practice:\n"${facts}"\nStructure clearly in 4 steps:\n1. Căn cứ Điều khoản (Sub-Clauses & time limits)\n2. Góc nhìn Common Law vs Civil Law / Việt Nam\n3. Rủi ro & Hồ sơ chứng minh cần thiết\n4. Khuyến nghị hành động cụ thể.`;
    const offline = `🎓 **Phân tích sơ bộ (${role} - Offline):**\n${answerFidicQuestion(facts)}\n\n*(Nhập Gemini API Key tại ⚙ Key để AI phân tích 4 bước chuyên sâu theo Seppälä 2023 & Godwin 2020).*`;
    await runAiPrompt(`🎓 Tranh chấp (${role}): ${facts}`, prompt, offline);
  });

  document.querySelectorAll('[data-ai-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const msg = state.aiMsgs[Number(btn.dataset.aiCopy)];
      if (!msg) return;
      await navigator.clipboard?.writeText(msg.text).catch(() => {});
      showToast(t('copiedText'));
    });
  });

  document.querySelectorAll('[data-ai-print]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const msg = state.aiMsgs[Number(btn.dataset.aiPrint)];
      if (!msg) return;
      const w = window.open('', '_blank', 'width=820,height=700');
      if (!w) return;
      w.document.write(`<!doctype html><html><head><title>${escapeHtml(state.projectMeta.name)}</title><style>body{font-family:Segoe UI,sans-serif;padding:36px;line-height:1.6;color:#111}pre{white-space:pre-wrap;font-family:inherit}</style></head><body><div style="border-bottom:2px solid #000;padding-bottom:8px;margin-bottom:20px"><strong>${escapeHtml(state.projectMeta.name)}</strong> · ${escapeHtml(state.projectMeta.contract)}</div><pre>${escapeHtml(msg.text)}</pre></body></html>`);
      w.document.close();
      w.focus();
      w.print();
    });
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

  document.getElementById('aiImgInput')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result || '');
      const base64 = dataUrl.split(',')[1] || '';
      state.aiImage = { mimeType: file.type || 'image/jpeg', dataUrl, base64, name: file.name };
      renderAiDrawer();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('removeAiImg')?.addEventListener('click', () => {
    state.aiImage = null;
    renderAiDrawer();
  });

  document.getElementById('aiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inp = document.getElementById('aiInput');
    const q = inp.value.trim();
    if (!q || state.aiLoading) return;
    const attached = state.aiImage;
    state.aiImage = null;
    state.aiMsgs.push({ role: 'user', text: attached ? `📷 [${attached.name}] ${q}` : q });

    if (state.geminiKey) {
      state.aiLoading = true;
      renderAiDrawer();
      try {
        const reply = await askGemini(q, attached);
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
      state.aiMsgs.push({
        role: 'bot',
        text: attached
          ? biText('⚠️ Cần nhập Gemini API Key (⚙ Key) để AI đọc ảnh công văn.', '⚠️ Gemini API Key required for image analysis.')
          : answerFidicQuestion(q)
      });
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

function openCommandPalette() {
  const html = `
    <div class="cmdk-backdrop" id="cmdkBackdrop" role="dialog" aria-modal="true" aria-label="Quick Jump">
      <div class="cmdk-box">
        <input type="search" class="cmdk-input" id="cmdkInput" placeholder="${biText('Tìm nhanh điều khoản (VD: 20.2, 3.7, DAAB, #learn)... (Esc để đóng)', 'Quick jump to clause, glossary, or page... (Esc to close)')}" autofocus />
        <div class="cmdk-list" id="cmdkList"></div>
      </div>
    </div>
  `;
  $modalRoot.innerHTML = html;
  const $inp = document.getElementById('cmdkInput');
  const $list = document.getElementById('cmdkList');

  const quickPages = [
    { label: '🏠 Trang chủ / Home', hash: '#' },
    { label: '📕 Sách Đỏ 2017 · Red Book', hash: '#red-17' },
    { label: '📒 Sách Vàng 2017 · Yellow Book', hash: '#yel-17' },
    { label: '📓 Sách Bạc 2017 · Silver Book', hash: '#sil-17' },
    { label: '🎓 Học FIDIC · Flowcharts · Án lệ', hash: '#learn' },
    { label: '📄 Biểu mẫu Hợp đồng', hash: '#models' },
    { label: '📅 Dự án & Deadline Tracker', hash: '#project' },
    { label: '📚 Thư viện Sách (Toàn văn 1.710 tr.)', hash: '#library' },
    { label: '🔐 Đã lưu · Mã hóa · Gist Sync', hash: '#saved' }
  ];

  const renderList = (q = '') => {
    const low = q.trim().toLowerCase();
    const pages = quickPages.filter((p) => p.label.toLowerCase().includes(low));
    const clauses = SUBCLAUSES.filter((s) =>
      `${s.id} ${s.viTitle} ${s.enTitle} ${(s.eq99 || []).join(' ')}`.toLowerCase().includes(low)
    ).slice(0, 12);

    $list.innerHTML = [
      ...pages.map((p) => `<a href="${p.hash}" class="cmdk-item" data-cmdk-jump><span>${escapeHtml(p.label)}</span><span style="color:var(--mute);font-size:12px">${p.hash}</span></a>`),
      ...clauses.map((c) => `<a href="#${c.book}-${c.ed}-${c.id.replace(/\./g, '-')}" class="cmdk-item" data-cmdk-jump><span><strong>${c.id}</strong> ${escapeHtml(state.lang === 'en' ? c.enTitle : c.viTitle)}</span><span class="tl-pill">${c.book.toUpperCase()} ${c.ed === '99' ? '1999' : '2017'}</span></a>`)
    ].join('') || `<div style="padding:12px;color:var(--mute)">${t('noResults')}</div>`;

    $list.querySelectorAll('[data-cmdk-jump]').forEach((a) => a.addEventListener('click', closeModal));
  };

  $inp.addEventListener('input', (e) => renderList(e.target.value));
  document.getElementById('cmdkBackdrop').addEventListener('click', (e) => {
    if (e.target.id === 'cmdkBackdrop') closeModal();
  });
  renderList();
  $inp.focus();
}

function renderLockScreen() {
  const el = document.createElement('div');
  el.className = 'lock-screen';
  el.id = 'lockScreen';
  el.innerHTML = `
    <div class="lock-card">
      <div style="font-size:32px;margin-bottom:8px">🔐</div>
      <h2 style="margin:0 0 8px">${biText('Sổ tay FIDIC đang khóa', 'FIDIC Notebook Locked')}</h2>
      <p style="color:var(--mute);font-size:13.5px;margin:0 0 16px">${biText('Nhập mật khẩu/PIN để mở khóa dữ liệu dự án và API Key.', 'Enter your passphrase/PIN to unlock.')}</p>
      <form id="unlockForm" style="display:flex;flex-direction:column;gap:10px">
        <input type="password" id="unlockPin" placeholder="PIN / Passphrase" style="padding:10px 12px;border-radius:9px;border:1px solid var(--rule2);background:var(--bg);color:var(--ink);text-align:center" autofocus required />
        <button type="submit" class="btn-primary bk-red" style="justify-content:center">${biText('Mở khóa', 'Unlock')}</button>
      </form>
    </div>
  `;
  document.body.appendChild(el);
  document.getElementById('unlockForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const val = document.getElementById('unlockPin').value;
    if ((await hashPassphrase(val)) === state.lockHash) {
      state.unlocked = true;
      el.remove();
      render(false);
    } else {
      showToast(biText('Sai mật khẩu!', 'Wrong passphrase!'));
    }
  });
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openCommandPalette();
    return;
  }
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
  navigator.serviceWorker
    .register('./sw.js')
    .then((reg) => {
      const showUpdateBanner = (sw) => {
        if (document.getElementById('pwaUpdateBanner')) return;
        const bar = document.createElement('div');
        bar.id = 'pwaUpdateBanner';
        bar.className = 'update-banner';
        bar.innerHTML = `<span>✨ ${biText('Có bản cập nhật mới', 'New update available')}</span><button type="button" id="pwaReloadBtn">↻ ${biText('Cập nhật ngay', 'Reload')}</button>`;
        document.body.appendChild(bar);
        document.getElementById('pwaReloadBtn').addEventListener('click', () => {
          sw.postMessage('SKIP_WAITING');
          location.reload();
        });
      };
      if (reg.waiting) showUpdateBanner(reg.waiting);
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(nw);
          }
        });
      });
    })
    .catch(() => {});
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
  else if (parsed.route === 'library') renderLibrary();
  else if (parsed.route === 'saved') renderSaved();
}

window.addEventListener('hashchange', () => render(false));

applyTheme();
applyHeaderI18n();
if (!state.unlocked) {
  renderLockScreen();
} else {
  render(false);
}
