function initApp() {
  if (STATE.user) {
    const nameEl = document.getElementById('sidebar-user-name');
    const roleEl = document.getElementById('sidebar-user-role');
    const avatarEl = document.getElementById('sidebar-avatar');
    if (nameEl) nameEl.textContent = STATE.user.name;
    if (roleEl) roleEl.textContent = STATE.user.role;
    if (avatarEl) avatarEl.textContent = STATE.user.name[0].toUpperCase();

    if (STATE.user.role === 'admin') {
      document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'flex');
    }
  }

  loadTutorials();
  showPage('home');
  setupAuthForms();
  setupSearchFilters();
  setupAdminForm();
  setupSettingsToggles();
}

function setupAuthForms() {
  const tabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const which = tab.dataset.tab;
      loginForm.style.display = which === 'login' ? 'flex' : 'none';
      registerForm.style.display = which === 'register' ? 'flex' : 'none';
      clearAuthError();
    });
  });

  document.getElementById('btn-login').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    if (!email || !password) { showAuthError('Please fill in all fields.'); return; }
    try {
      await doLogin(email, password);
    } catch (e) {
      showAuthError(getFriendlyError(e.code));
    }
  });

  document.getElementById('btn-register').addEventListener('click', async () => {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    if (!name || !email || !password) { showAuthError('Please fill in all fields.'); return; }
    try {
      await doRegister(name, email, password);
    } catch (e) {
      showAuthError(getFriendlyError(e.code));
    }
  });

  document.getElementById('btn-google').addEventListener('click', async () => {
    try {
      await doGoogleSignIn();
    } catch (e) {
      showAuthError(getFriendlyError(e.code));
    }
  });
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error');
  if (el) { el.textContent = msg; el.classList.add('visible'); }
}

function clearAuthError() {
  const el = document.getElementById('auth-error');
  if (el) el.classList.remove('visible');
}

function setupSearchFilters() {
  const search = document.getElementById('filter-search');
  const category = document.getElementById('filter-category');
  const level = document.getElementById('filter-level');
  if (search) search.addEventListener('input', e => { STATE.filters.search = e.target.value; renderTutorials(); });
  if (category) category.addEventListener('change', e => { STATE.filters.category = e.target.value; renderTutorials(); });
  if (level) level.addEventListener('change', e => { STATE.filters.level = e.target.value; renderTutorials(); });
}

function setupAdminForm() {
  const form = document.getElementById('admin-create-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      title: document.getElementById('admin-title').value.trim(),
      category: document.getElementById('admin-category').value.trim(),
      level: document.getElementById('admin-level').value,
      difficulty: parseInt(document.getElementById('admin-difficulty').value),
      excerpt: document.getElementById('admin-excerpt').value.trim(),
      body: document.getElementById('admin-body').value.trim(),
    };
    if (!data.title || !data.category || !data.excerpt || !data.body) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    adminCreateTutorial(data);
    form.reset();
  });
  renderAdminList();
}

function setupSettingsToggles() {
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) logoutBtn.addEventListener('click', () => doLogout());
}

document.addEventListener('DOMContentLoaded', () => {
  initAuthListener();
});