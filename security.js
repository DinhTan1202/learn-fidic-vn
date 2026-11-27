// Client-side AES-GCM + PBKDF2 security helpers (Web Crypto API)
const enc = new TextEncoder();
const dec = new TextDecoder();

async function deriveKey(passphrase, salt) {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(passphrase),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 120000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

function toB64(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}

function fromB64(str) {
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export async function encryptJson(obj, passphrase) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const cipher = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(JSON.stringify(obj))
  );
  return JSON.stringify({
    encrypted: true,
    alg: 'AES-256-GCM',
    kdf: 'PBKDF2-SHA256',
    salt: toB64(salt),
    iv: toB64(iv),
    data: toB64(cipher)
  }, null, 2);
}

export async function decryptJson(payloadStr, passphrase) {
  const parsed = JSON.parse(payloadStr);
  if (!parsed.encrypted) return parsed;
  const salt = fromB64(parsed.salt);
  const iv = fromB64(parsed.iv);
  const cipher = fromB64(parsed.data);
  const key = await deriveKey(passphrase, salt);
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, cipher);
  return JSON.parse(dec.decode(plain));
}

export async function hashPassphrase(passphrase) {
  const digest = await crypto.subtle.digest('SHA-256', enc.encode('fidic-lock:' + passphrase));
  return toB64(digest);
}
