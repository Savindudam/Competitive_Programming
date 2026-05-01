window.initApp = function() {
  var u = STATE.user;

  document.getElementById('welcome-name').textContent = 'Welcome back, ' + u.name + '.';

  var adminNav = document.getElementById('nav-admin');
  if (u.role === 'admin') {
    adminNav.classList.remove('hidden');
  } else {
    adminNav.classList.add('hidden');
  }

  loadTutorials();
  renderHomeRecent();
  updateProgressBar();
  showPage('home');
};

initAuthListener();