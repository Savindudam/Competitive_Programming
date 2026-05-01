function renderHome() {
  const nameEl = document.getElementById('home-welcome-name');
  if (nameEl && STATE.user) nameEl.textContent = STATE.user.name.split(' ')[0];
  updateProgressBar();
  renderRecentTutorials();
}

function renderRecentTutorials() {
  const grid = document.getElementById('recent-grid');
  if (!grid) return;
  const recent = STATE.tutorials.slice(0, 4);
  grid.innerHTML = recent.map(t => {
    const levelClass = 'tag-' + t.level.toLowerCase();
    return `<div class="tutorial-card" onclick="openDetail(STATE.tutorials.find(x => x.id === '${t.id}'))">
      <div class="tutorial-card-tags">
        <span class="tag tag-category">${t.category}</span>
        <span class="tag ${levelClass}">${t.level}</span>
      </div>
      <h3 class="tutorial-card-title" style="margin-top:10px">${t.title}</h3>
      <p class="tutorial-card-excerpt">${t.excerpt}</p>
    </div>`;
  }).join('');
}

function renderProfile() {
  const completed = getCompleted();
  const inProgress = getInProgress();
  const saved = getSaved();

  const el = id => document.getElementById(id);
  if (el('profile-name')) el('profile-name').textContent = STATE.user ? STATE.user.name : '';
  if (el('profile-email')) el('profile-email').textContent = STATE.user ? STATE.user.email : '';
  if (el('profile-avatar-letter')) el('profile-avatar-letter').textContent = STATE.user ? STATE.user.name[0].toUpperCase() : '';
  if (el('stat-completed')) el('stat-completed').textContent = completed.length;
  if (el('stat-inprogress')) el('stat-inprogress').textContent = inProgress.length;
  if (el('stat-saved')) el('stat-saved').textContent = saved.length;

  const savedList = document.getElementById('saved-list');
  if (savedList) {
    if (!saved.length) {
      savedList.innerHTML = '<p style="color:var(--text-muted);font-size:0.82rem;">No saved tutorials yet.</p>';
    } else {
      savedList.innerHTML = saved.map(id => {
        const t = STATE.tutorials.find(x => x.id === id);
        if (!t) return '';
        return `<div class="saved-item" onclick="openDetail(STATE.tutorials.find(x => x.id === '${id}'))">
          <span>${t.title}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>`;
      }).join('');
    }
  }
  updateProgressBar();
}

function updateProgressBar() {
  const bar = document.getElementById('progress-bar-fill');
  const text = document.getElementById('progress-bar-text');
  if (!bar) return;
  const total = STATE.tutorials.length;
  const done = getCompleted().length;
  const pct = total ? Math.round((done / total) * 100) : 0;
  bar.style.width = pct + '%';
  if (text) text.textContent = done + ' of ' + total + ' completed (' + pct + '%)';
}

function showToast(message, type) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'toast' + (type ? ' ' + type : '');

  const icon = type === 'success'
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
    : type === 'error'
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
    : '';

  t.innerHTML = icon + message;
  container.appendChild(t);
  setTimeout(() => {
    t.classList.add('leaving');
    setTimeout(() => t.remove(), 220);
  }, 3000);
}

window.renderHome = renderHome;
window.renderProfile = renderProfile;
window.updateProgressBar = updateProgressBar;
window.showToast = showToast;