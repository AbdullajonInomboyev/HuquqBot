// // ──────────────────────────────────────────────
// // app.js — HuquqBot (Backend API versiyasi)
// // ──────────────────────────────────────────────

// // Backend API manzili — o'zingizning serveringizga o'zgartiring
// const API_URL = "http://localhost:5000";  // Production: https://sizning-server.com

// const tg = window.Telegram?.WebApp;
// if (tg) {
//   tg.ready();
//   tg.expand();
//   tg.setHeaderColor('#0f1f16');
//   tg.setBackgroundColor('#0f1f16');
// }

// let history = JSON.parse(localStorage.getItem('hb_history') || '[]');
// let isBusy = false;

// window.addEventListener('DOMContentLoaded', () => {
//   renderHistory();
//   loadStats();
//   setTimeout(() => {
//     const splash = document.getElementById('splash');
//     splash.classList.add('fade-out');
//     setTimeout(() => {
//       splash.style.display = 'none';
//       document.getElementById('app').classList.remove('hidden');
//     }, 500);
//   }, 1800);

//   document.getElementById('searchTrigger').addEventListener('click', openSearch);
//   document.getElementById('searchInput').addEventListener('input', filterSuggestions);
//   document.getElementById('searchInput').addEventListener('keydown', e => {
//     if (e.key === 'Enter') { const val = e.target.value.trim(); if (val) startQuestion(val); }
//   });
// });

// // ── DB statistikasini yuklash ────────────────────────────────────────────────
// async function loadStats() {
//   try {
//     const res = await fetch(`${API_URL}/api/stats`);
//     if (res.ok) {
//       const data = await res.json();
//       const el = document.getElementById('dbStats');
//       if (el && data.total_laws) {
//         el.textContent = `${data.total_laws.toLocaleString()} ta qonun · lex.uz`;
//       }
//     }
//   } catch (_) { /* statistika bo'lmasa ham bo'ladi */ }
// }

// // ── View boshqarish ──────────────────────────────────────────────────────────
// function showView(id) {
//   document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
//   document.getElementById(id).classList.add('active');
// }
// function goHome() { showView('view-home'); renderHistory(); }
// function newChat() {
//   document.getElementById('chatMessages').innerHTML = '';
//   document.getElementById('chatInput').value = '';
//   document.getElementById('chatInput').style.height = 'auto';
// }
// function openSearch() {
//   document.getElementById('searchModal').classList.remove('hidden');
//   setTimeout(() => document.getElementById('searchInput').focus(), 100);
// }
// function closeSearch() {
//   document.getElementById('searchModal').classList.add('hidden');
//   document.getElementById('searchInput').value = '';
//   resetSuggestions();
// }
// function filterSuggestions(e) {
//   const val = e.target.value.trim();
//   if (!val) { resetSuggestions(); return; }
//   document.querySelectorAll('.suggest-item').forEach(item => {
//     item.style.display = item.textContent.toLowerCase().includes(val.toLowerCase()) ? '' : 'none';
//   });
// }
// function resetSuggestions() { document.querySelectorAll('.suggest-item').forEach(i => i.style.display = ''); }
// function startQuestion(question) {
//   closeSearch(); newChat(); showView('view-chat');
//   setTimeout(() => processQuestion(question), 200);
// }
// function autoResize(el) {
//   el.style.height = 'auto';
//   el.style.height = Math.min(el.scrollHeight, 100) + 'px';
// }
// function handleKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }
// function sendMessage() {
//   if (isBusy) return;
//   const input = document.getElementById('chatInput');
//   const text = input.value.trim();
//   if (!text) return;
//   input.value = ''; input.style.height = 'auto';
//   processQuestion(text);
// }

// // ── Asosiy jarayon ───────────────────────────────────────────────────────────
// async function processQuestion(question) {
//   if (isBusy) return;
//   isBusy = true; setBtnDisabled(true);
//   appendBubble(question, 'user'); scrollChat();

//   const typingId = appendTyping();
//   await sleep(300);
//   removeEl(typingId);

//   // Jarayon qadamlari
//   const procId = appendProcessSteps([
//     "Savol tahlil qilinmoqda...",
//     "Ma'lumotlar bazasidan qidirilmoqda...",
//     "Qonun matnlari o'rganilmoqda...",
//     "AI javob tayyorlamoqda..."
//   ]);
//   scrollChat();

//   try {
//     // 1-qadam boshlandi
//     updateProcStep(procId, 0, 'active');
//     await sleep(400);
//     updateProcStep(procId, 0, 'done');

//     // 2-qadam: backend API ga so'rov
//     updateProcStep(procId, 1, 'active');
//     const response = await fetch(`${API_URL}/api/ask`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question })
//     });

//     if (!response.ok) {
//       throw new Error(`Server xato: ${response.status}`);
//     }

//     const result = await response.json();
//     updateProcStep(procId, 1, 'done');
//     await sleep(400);

//     // 3-qadam
//     updateProcStep(procId, 2, 'active');
//     await sleep(500);
//     updateProcStep(procId, 2, 'done');

//     // 4-qadam
//     updateProcStep(procId, 3, 'active');
//     await sleep(400);
//     updateProcStep(procId, 3, 'done');
//     await sleep(300);

//     removeEl(procId);

//     // Natijani ko'rsatish
//     appendFinalAnswer(result.answer, result.sources || [], result.found);
//     saveHistory(question, result.answer?.category || 'Yuridik savol', result.answer?.icon || '⚖️');

//   } catch (err) {
//     console.error(err);
//     removeEl(procId);
//     appendErrorBubble(err.message);
//   }

//   scrollChat();
//   isBusy = false;
//   setBtnDisabled(false);
//   if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
// }

// // ── Javobni ko'rsatish ───────────────────────────────────────────────────────
// function appendFinalAnswer(ai, sources, found) {
//   const el = document.createElement('div');
//   el.className = 'bubble bot';

//   const stepsHtml = (ai.steps || []).map((s, i) => `
//     <div style="display:flex;align-items:flex-start;gap:8px;font-size:13px;margin-bottom:6px;">
//       <span style="background:#1e4d30;color:#6fcf97;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;font-weight:500;">${i+1}</span>
//       <span style="color:var(--text-primary);line-height:1.4;">${s}</span>
//     </div>`).join('');

//   const srcHtml = (sources || []).slice(0, 3).map(s => `
//     <div class="answer-source-link" onclick="openUrl('${s.url}')">
//       <div class="src-icon">
//         <svg viewBox="0 0 24 24" fill="none" stroke="#6fcf97" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
//           <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
//           <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
//         </svg>
//       </div>
//       <span style="font-size:12px">${s.title}</span>
//     </div>`).join('');

//   // Ishonch darajasi belgisi
//   const confidenceColor = ai.confidence === 'high' ? '#6fcf97' : ai.confidence === 'medium' ? '#f2c94c' : '#eb5757';
//   const confidenceText = ai.confidence === 'high' ? 'Yuqori aniqlik' : ai.confidence === 'medium' ? "O'rtacha aniqlik" : 'Qo\'shimcha tekshiring';

//   el.innerHTML = `
//     <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
//       <div style="display:flex;align-items:center;gap:6px;">
//         <span style="font-size:18px">${ai.icon || '⚖️'}</span>
//         <span style="font-size:11px;font-weight:500;color:var(--green-light);letter-spacing:0.04em;text-transform:uppercase">${ai.category || 'Yuridik masala'}</span>
//       </div>
//       <span style="font-size:10px;color:${confidenceColor};background:${confidenceColor}18;padding:2px 7px;border-radius:10px;">${confidenceText}</span>
//     </div>

//     ${ai.legalBasis ? `<div style="font-size:11px;color:var(--text-muted);margin-bottom:8px;padding:4px 8px;background:rgba(109,207,151,0.07);border-radius:6px;">📌 ${ai.legalBasis}</div>` : ''}

//     <div class="answer-text" style="margin-bottom:${(ai.steps||[]).length?'10px':'0'}">${(ai.simpleAnswer || '').replace(/\n/g,'<br>')}</div>

//     ${stepsHtml ? `<div style="margin-bottom:10px">${stepsHtml}</div>` : ''}

//     ${srcHtml ? `
//       <div class="answer-sources">
//         <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.04em">📚 Rasmiy manbalar (lex.uz)</div>
//         ${srcHtml}
//       </div>` : ''}

//     ${ai.warning ? `
//       <div class="answer-warn">
//         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//           <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
//         </svg>
//         ${ai.warning}
//       </div>` : ''}`;

//   document.getElementById('chatMessages').appendChild(el);
// }

// function appendErrorBubble(msg) {
//   const el = document.createElement('div');
//   el.className = 'bubble bot';
//   el.innerHTML = `
//     <div style="color:var(--text-secondary);font-size:13px;margin-bottom:8px;">
//       ⚠️ Vaqtincha xatolik yuz berdi.
//     </div>
//     <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">${msg || 'Server bilan aloqa yo\'q'}</div>
//     <div class="answer-sources">
//       <div class="answer-source-link" onclick="openUrl('https://lex.uz')">
//         <div class="src-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#6fcf97" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
//         lex.uz da qidiring
//       </div>
//     </div>`;
//   document.getElementById('chatMessages').appendChild(el);
// }

// // ── Yordamchi funksiyalar ────────────────────────────────────────────────────
// function appendBubble(content, type) {
//   const el = document.createElement('div');
//   el.className = `bubble ${type}`; el.textContent = content;
//   document.getElementById('chatMessages').appendChild(el);
// }
// function appendTyping() {
//   const id = 'typing' + Date.now();
//   const el = document.createElement('div');
//   el.className = 'bubble bot typing'; el.id = id;
//   el.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
//   document.getElementById('chatMessages').appendChild(el);
//   return id;
// }
// function appendProcessSteps(steps) {
//   const id = 'proc' + Date.now();
//   const el = document.createElement('div');
//   el.className = 'bubble bot'; el.id = id;
//   el.innerHTML = `<div class="process-steps">${steps.map((s, i) => `
//     <div class="process-step">
//       <div class="step-dot" id="${id}_d${i}"></div>
//       <span id="${id}_t${i}" style="color:var(--text-muted)">${s}</span>
//     </div>`).join('')}</div>`;
//   document.getElementById('chatMessages').appendChild(el);
//   return id;
// }
// function updateProcStep(bubbleId, idx, state) {
//   const dot = document.getElementById(`${bubbleId}_d${idx}`);
//   const txt = document.getElementById(`${bubbleId}_t${idx}`);
//   if (dot) dot.className = `step-dot ${state}`;
//   if (txt) txt.style.color = state === 'done' ? 'var(--green-light)' : state === 'active' ? 'var(--text-primary)' : 'var(--text-muted)';
// }
// function saveHistory(question, category, icon) {
//   const now = new Date();
//   history.unshift({ question, category, icon, time: now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0') });
//   if (history.length > 10) history = history.slice(0, 10);
//   localStorage.setItem('hb_history', JSON.stringify(history));
// }
// function renderHistory() {
//   const list = document.getElementById('historyList');
//   const section = document.getElementById('historySection');
//   if (!history.length) { section.style.display = 'none'; return; }
//   section.style.display = '';
//   list.innerHTML = history.slice(0, 5).map(h => `
//     <div class="history-item" onclick="startQuestion('${h.question.replace(/'/g,"\\'")}')">
//       <div class="history-icon">${h.icon || '📋'}</div>
//       <div class="history-q">${h.question}</div>
//       <div class="history-time">${h.time}</div>
//     </div>`).join('');
// }
// function openUrl(url) { if (tg?.openLink) tg.openLink(url); else window.open(url,'_blank'); }
// function setBtnDisabled(val) { const b = document.getElementById('sendBtn'); if(b) b.disabled = val; }
// function removeEl(id) { document.getElementById(id)?.remove(); }
// function scrollChat() { const m = document.getElementById('chatMessages'); if(m) m.scrollTop = m.scrollHeight; }
// function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }


// ──────────────────────────────────────────────
// app.js — HuquqBot (Backend API versiyasi)
// ──────────────────────────────────────────────

// Frontend va backend bitta serverda — relative URL ishlatamiz
const API_URL = "";

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  tg.setHeaderColor('#0f1f16');
  tg.setBackgroundColor('#0f1f16');
}

let history = JSON.parse(localStorage.getItem('hb_history') || '[]');
let isBusy = false;

window.addEventListener('DOMContentLoaded', () => {
  renderHistory();
  loadStats();
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
    }, 500);
  }, 1800);

  document.getElementById('searchTrigger').addEventListener('click', openSearch);
  document.getElementById('searchInput').addEventListener('input', filterSuggestions);
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') { const val = e.target.value.trim(); if (val) startQuestion(val); }
  });
});

// ── DB statistikasini yuklash ────────────────────────────────────────────────
async function loadStats() {
  try {
    const res = await fetch(`${API_URL}/api/stats`);
    if (res.ok) {
      const data = await res.json();
      const el = document.getElementById('dbStats');
      if (el && data.total_laws) {
        el.textContent = `${data.total_laws.toLocaleString()} ta qonun · lex.uz`;
      }
    }
  } catch (_) { /* statistika bo'lmasa ham bo'ladi */ }
}

// ── View boshqarish ──────────────────────────────────────────────────────────
function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function goHome() { showView('view-home'); renderHistory(); }
function newChat() {
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatInput').value = '';
  document.getElementById('chatInput').style.height = 'auto';
}
function openSearch() {
  document.getElementById('searchModal').classList.remove('hidden');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
}
function closeSearch() {
  document.getElementById('searchModal').classList.add('hidden');
  document.getElementById('searchInput').value = '';
  resetSuggestions();
}
function filterSuggestions(e) {
  const val = e.target.value.trim();
  if (!val) { resetSuggestions(); return; }
  document.querySelectorAll('.suggest-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(val.toLowerCase()) ? '' : 'none';
  });
}
function resetSuggestions() { document.querySelectorAll('.suggest-item').forEach(i => i.style.display = ''); }
function startQuestion(question) {
  closeSearch(); newChat(); showView('view-chat');
  setTimeout(() => processQuestion(question), 200);
}
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}
function handleKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }
function sendMessage() {
  if (isBusy) return;
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = ''; input.style.height = 'auto';
  processQuestion(text);
}

// ── Asosiy jarayon ───────────────────────────────────────────────────────────
async function processQuestion(question) {
  if (isBusy) return;
  isBusy = true; setBtnDisabled(true);
  appendBubble(question, 'user'); scrollChat();

  const typingId = appendTyping();
  await sleep(300);
  removeEl(typingId);

  // Jarayon qadamlari
  const procId = appendProcessSteps([
    "Savol tahlil qilinmoqda...",
    "Ma'lumotlar bazasidan qidirilmoqda...",
    "Qonun matnlari o'rganilmoqda...",
    "AI javob tayyorlamoqda..."
  ]);
  scrollChat();

  try {
    // 1-qadam boshlandi
    updateProcStep(procId, 0, 'active');
    await sleep(400);
    updateProcStep(procId, 0, 'done');

    // 2-qadam: backend API ga so'rov
    updateProcStep(procId, 1, 'active');
    const response = await fetch(`${API_URL}/api/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error(`Server xato: ${response.status}`);
    }

    const result = await response.json();
    updateProcStep(procId, 1, 'done');
    await sleep(400);

    // 3-qadam
    updateProcStep(procId, 2, 'active');
    await sleep(500);
    updateProcStep(procId, 2, 'done');

    // 4-qadam
    updateProcStep(procId, 3, 'active');
    await sleep(400);
    updateProcStep(procId, 3, 'done');
    await sleep(300);

    removeEl(procId);

    // Natijani ko'rsatish
    appendFinalAnswer(result.answer, result.sources || [], result.found);
    saveHistory(question, result.answer?.category || 'Yuridik savol', result.answer?.icon || '⚖️');

  } catch (err) {
    console.error(err);
    removeEl(procId);
    appendErrorBubble(err.message);
  }

  scrollChat();
  isBusy = false;
  setBtnDisabled(false);
  if (tg?.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
}

// ── Javobni ko'rsatish ───────────────────────────────────────────────────────
function appendFinalAnswer(ai, sources, found) {
  const el = document.createElement('div');
  el.className = 'bubble bot';

  const stepsHtml = (ai.steps || []).map((s, i) => `
    <div style="display:flex;align-items:flex-start;gap:8px;font-size:13px;margin-bottom:6px;">
      <span style="background:#1e4d30;color:#6fcf97;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:11px;font-weight:500;">${i+1}</span>
      <span style="color:var(--text-primary);line-height:1.4;">${s}</span>
    </div>`).join('');

  const srcHtml = (sources || []).slice(0, 3).map(s => `
    <div class="answer-source-link" onclick="openUrl('${s.url}')">
      <div class="src-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="#6fcf97" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
      <span style="font-size:12px">${s.title}</span>
    </div>`).join('');

  // Ishonch darajasi belgisi
  const confidenceColor = ai.confidence === 'high' ? '#6fcf97' : ai.confidence === 'medium' ? '#f2c94c' : '#eb5757';
  const confidenceText = ai.confidence === 'high' ? 'Yuqori aniqlik' : ai.confidence === 'medium' ? "O'rtacha aniqlik" : 'Qo\'shimcha tekshiring';

  el.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="font-size:18px">${ai.icon || '⚖️'}</span>
        <span style="font-size:11px;font-weight:500;color:var(--green-light);letter-spacing:0.04em;text-transform:uppercase">${ai.category || 'Yuridik masala'}</span>
      </div>
      <span style="font-size:10px;color:${confidenceColor};background:${confidenceColor}18;padding:2px 7px;border-radius:10px;">${confidenceText}</span>
    </div>

    ${ai.legalBasis ? `<div style="font-size:11px;color:var(--text-muted);margin-bottom:8px;padding:4px 8px;background:rgba(109,207,151,0.07);border-radius:6px;">📌 ${ai.legalBasis}</div>` : ''}

    <div class="answer-text" style="margin-bottom:${(ai.steps||[]).length?'10px':'0'}">${(ai.simpleAnswer || '').replace(/\n/g,'<br>')}</div>

    ${stepsHtml ? `<div style="margin-bottom:10px">${stepsHtml}</div>` : ''}

    ${srcHtml ? `
      <div class="answer-sources">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.04em">📚 Rasmiy manbalar (lex.uz)</div>
        ${srcHtml}
      </div>` : ''}

    ${ai.warning ? `
      <div class="answer-warn">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        ${ai.warning}
      </div>` : ''}`;

  document.getElementById('chatMessages').appendChild(el);
}

function appendErrorBubble(msg) {
  const el = document.createElement('div');
  el.className = 'bubble bot';
  el.innerHTML = `
    <div style="color:var(--text-secondary);font-size:13px;margin-bottom:8px;">
      ⚠️ Vaqtincha xatolik yuz berdi.
    </div>
    <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;">${msg || 'Server bilan aloqa yo\'q'}</div>
    <div class="answer-sources">
      <div class="answer-source-link" onclick="openUrl('https://lex.uz')">
        <div class="src-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#6fcf97" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
        lex.uz da qidiring
      </div>
    </div>`;
  document.getElementById('chatMessages').appendChild(el);
}

// ── Yordamchi funksiyalar ────────────────────────────────────────────────────
function appendBubble(content, type) {
  const el = document.createElement('div');
  el.className = `bubble ${type}`; el.textContent = content;
  document.getElementById('chatMessages').appendChild(el);
}
function appendTyping() {
  const id = 'typing' + Date.now();
  const el = document.createElement('div');
  el.className = 'bubble bot typing'; el.id = id;
  el.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
  document.getElementById('chatMessages').appendChild(el);
  return id;
}
function appendProcessSteps(steps) {
  const id = 'proc' + Date.now();
  const el = document.createElement('div');
  el.className = 'bubble bot'; el.id = id;
  el.innerHTML = `<div class="process-steps">${steps.map((s, i) => `
    <div class="process-step">
      <div class="step-dot" id="${id}_d${i}"></div>
      <span id="${id}_t${i}" style="color:var(--text-muted)">${s}</span>
    </div>`).join('')}</div>`;
  document.getElementById('chatMessages').appendChild(el);
  return id;
}
function updateProcStep(bubbleId, idx, state) {
  const dot = document.getElementById(`${bubbleId}_d${idx}`);
  const txt = document.getElementById(`${bubbleId}_t${idx}`);
  if (dot) dot.className = `step-dot ${state}`;
  if (txt) txt.style.color = state === 'done' ? 'var(--green-light)' : state === 'active' ? 'var(--text-primary)' : 'var(--text-muted)';
}
function saveHistory(question, category, icon) {
  const now = new Date();
  history.unshift({ question, category, icon, time: now.getHours() + ':' + String(now.getMinutes()).padStart(2,'0') });
  if (history.length > 10) history = history.slice(0, 10);
  localStorage.setItem('hb_history', JSON.stringify(history));
}
function renderHistory() {
  const list = document.getElementById('historyList');
  const section = document.getElementById('historySection');
  if (!history.length) { section.style.display = 'none'; return; }
  section.style.display = '';
  list.innerHTML = history.slice(0, 5).map(h => `
    <div class="history-item" onclick="startQuestion('${h.question.replace(/'/g,"\\'")}')">
      <div class="history-icon">${h.icon || '📋'}</div>
      <div class="history-q">${h.question}</div>
      <div class="history-time">${h.time}</div>
    </div>`).join('');
}
function openUrl(url) { if (tg?.openLink) tg.openLink(url); else window.open(url,'_blank'); }
function setBtnDisabled(val) { const b = document.getElementById('sendBtn'); if(b) b.disabled = val; }
function removeEl(id) { document.getElementById(id)?.remove(); }
function scrollChat() { const m = document.getElementById('chatMessages'); if(m) m.scrollTop = m.scrollHeight; }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }