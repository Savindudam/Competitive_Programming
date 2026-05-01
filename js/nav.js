function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');

  const navItem = document.querySelector('[data-page="' + id + '"]');
  if (navItem) navItem.classList.add('active');

  if (id === 'tutorials') renderTutorials();
  if (id === 'home') renderHome();
  if (id === 'profile') renderProfile();

  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openDetail(tutorial) {
  renderDetail(tutorial);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

window.showPage = showPage;
window.openDetail = openDetail;
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;