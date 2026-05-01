window.renderProfile = function() {
  var u = STATE.user;
  if (!u) return;

  document.getElementById('prof-name').textContent   = u.name;
  document.getElementById('prof-email').textContent  = u.email;
  document.getElementById('prof-joined').textContent = formatDate(u.joined);
  document.getElementById('prof-role').textContent   = u.role || 'user';

  var done   = getCompleted();
  var inProg = getInProgress();
  var saved  = getSaved();

  document.getElementById('stat-done').textContent  = done.length;
  document.getElementById('stat-prog').textContent  = inProg.length;
  document.getElementById('stat-saved').textContent = saved.length;

  var savedEl   = document.getElementById('saved-list');
  var savedTuts = STATE.tutorials.filter(function(t) { return saved.indexOf(t.id) !== -1; });

  if (!savedTuts.length) {
    savedEl.innerHTML = '<div class="empty-state">No saved tutorials yet.</div>';
  } else {
    savedEl.innerHTML = savedTuts.map(function(t) {
      return '<div class="saved-item" onclick="openDetail(\'' + t.id + '\')">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>' +
        escHtml(t.title) +
        '<span style="margin-left:auto;font-family:var(--mono);font-size:.72rem;color:var(--muted)">' + t.category + '</span>' +
      '</div>';
    }).join('');
  }
};

window.renderHomeRecent = function() {
  var el = document.getElementById('home-recent');
  if (!el) return;
  var recent = STATE.tutorials.slice(0, 5);
  if (!recent.length) {
    el.innerHTML = '<div class="empty-state">No tutorials yet.</div>';
    return;
  }
  el.innerHTML = recent.map(function(t) {
    return '<div class="recent-item" onclick="openDetail(\'' + t.id + '\')">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' +
      '<div class="recent-item-info">' +
        '<div class="recent-item-title">' + escHtml(t.title) + '</div>' +
        '<div class="recent-item-sub">' + t.category + ' | ' + t.level + ' | ' + formatDate(t.date) + '</div>' +
      '</div>' +
      (isCompleted(t.id) ? '<div class="status-dot complete"></div>' : '') +
    '</div>';
  }).join('');
};

window.updateProgressBar = function() {
  var total = STATE.tutorials.length;
  var done  = getCompleted().length;
  var pct   = total ? Math.round((done / total) * 100) : 0;
  var numEl = document.getElementById('progress-num');
  var barEl = document.getElementById('progress-bar');
  if (numEl) numEl.textContent = done + ' / ' + total;
  if (barEl) barEl.style.width = pct + '%';
};

window.showToast = function(msg, type) {
  var container = document.getElementById('toast-container');
  var t = document.createElement('div');
  t.className   = 'toast ' + (type || 'info');
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(function() {
    t.style.opacity    = '0';
    t.style.transition = 'opacity 0.3s';
    setTimeout(function() { t.remove(); }, 300);
  }, 3000);
};