function showPage(name) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.nav-item').forEach(function(n) {
    n.classList.remove('active');
  });

  var page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');

  var nav = document.getElementById('nav-' + name);
  if (nav) nav.classList.add('active');

  if (name === 'tutorials') {
    renderTutorialList(applyFilters());
  }
  if (name === 'profile') {
    renderProfile();
  }
  if (name === 'admin') {
    renderAdminList();
  }
  if (name === 'home') {
    renderHomeRecent();
    updateProgressBar();
  }
}