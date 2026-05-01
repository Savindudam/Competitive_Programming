// tutorials.js — Firestore-backed tutorial storage
// Reads from Firestore; falls back to seed data if empty.
// Admin create/delete write through to Firestore.

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

let _db = null;
function getDb() {
  if (!_db) _db = getFirestore();
  return _db;
}

window.loadTutorials = async function() {
  try {
    const db   = getDb();
    const q    = query(collection(db, 'tutorials'), orderBy('date', 'desc'));
    const snap = await getDocs(q);
    if (!snap.empty) {
      STATE.tutorials = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      return;
    }
  } catch (e) {
    console.warn('Firestore tutorial fetch failed, using seed data:', e);
  }
  STATE.tutorials = getSeedTutorials();
};

function getSeedTutorials() {
  var seeds = [];
  if (typeof TUTORIAL_REGISTRY !== 'undefined') {
    TUTORIAL_REGISTRY.forEach(function(key) {
      var varName = 'TUTORIAL_' + key.replace(/-/g, '_');
      if (window[varName]) seeds.push(window[varName]);
    });
  }
  if (!seeds.length) {
    seeds = [
      {
        id: 'binary-search-basics',
        title: 'Binary Search Basics',
        category: 'Algorithms',
        level: 'Beginner',
        difficulty: 'Easy',
        excerpt: 'Learn how binary search works and how to implement it cleanly in competitive programming.',
        body: '<h2>What is Binary Search?</h2><p>Binary search locates a target in a sorted array by halving the search space — O(log n).</p><h2>Implementation</h2><pre><code>int binarySearch(vector&lt;int&gt;&amp; arr, int target) {\n    int lo = 0, hi = arr.size() - 1;\n    while (lo &lt;= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] &lt; target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}</code></pre>',
        date: new Date(Date.now() - 86400000 * 3).toISOString(),
        slug: 'binary-search-basics'
      }
    ];
  }
  return seeds;
}

window.applyFilters = function() {
  var search = document.getElementById('tut-search').value.toLowerCase();
  var cat    = document.getElementById('tut-cat').value;
  var level  = STATE.levelFilter;
  return STATE.tutorials.filter(function(t) {
    var matchSearch = !search || t.title.toLowerCase().includes(search) || t.excerpt.toLowerCase().includes(search);
    var matchCat    = cat === 'All' || t.category === cat;
    var matchLevel  = level === 'All' || t.level === level;
    return matchSearch && matchCat && matchLevel;
  });
};

window.setLevelFilter = function(btn, level) {
  STATE.levelFilter = level;
  document.querySelectorAll('.lvl-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderTutorialList(applyFilters());
};

window.renderTutorialList = function(list) {
  var el = document.getElementById('tut-list');
  if (!list.length) {
    el.innerHTML = '<div class="empty-state">No tutorials found.</div>';
    return;
  }
  el.innerHTML = list.map(function(t) {
    var done        = isCompleted(t.id);
    var saved       = isSaved(t.id);
    var statusDot   = done ? 'complete' : (saved ? 'saved' : '');
    var statusLabel = done ? 'Complete'  : (saved ? 'Saved'  : '');
    return '<div class="tut-card" onclick="openDetail(\'' + t.id + '\')">' +
      '<div>' +
        '<div class="tut-card-title">' + escHtml(t.title) + '</div>' +
        '<div class="tut-card-excerpt">' + escHtml(t.excerpt) + '</div>' +
        '<div class="tut-card-tags">' +
          '<span class="tag tag-cat">' + escHtml(t.category) + '</span>' +
          '<span class="tag tag-' + t.level.toLowerCase() + '">' + t.level + '</span>' +
          '<span class="tag tag-' + t.difficulty.toLowerCase() + '">' + t.difficulty + '</span>' +
        '</div>' +
      '</div>' +
      '<div>' +
        (statusLabel ? '<div class="tut-card-status"><div class="status-dot ' + statusDot + '"></div>' + statusLabel + '</div>' : '') +
        '<div class="tut-card-status" style="margin-top:8px;color:var(--muted)">' + formatDate(t.date) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
};

window.openDetail = async function(id) {
  var tut = STATE.tutorials.find(function(t) { return t.id === id; });
  if (!tut) return;

  STATE.currentDetailId = id;

  // Bug 8 fix: await progress save to prevent race conditions
  if (!isCompleted(id) && !isInProgress(id)) {
    await saveTutorialProgress(id, 'in-progress');
  }

  document.getElementById('detail-title').textContent = tut.title;
  document.getElementById('detail-meta').innerHTML =
    '<span class="tag tag-cat">' + escHtml(tut.category) + '</span>' +
    '<span class="tag tag-' + tut.level.toLowerCase() + '">' + tut.level + '</span>' +
    '<span class="tag tag-' + tut.difficulty.toLowerCase() + '">' + tut.difficulty + '</span>' +
    '<span class="tag tag-cat" style="margin-left:4px">' + formatDate(tut.date) + '</span>';

  document.getElementById('detail-body').innerHTML = tut.body;

  var btnComplete = document.getElementById('btn-complete');
  var btnSave     = document.getElementById('btn-save');

  if (isCompleted(id)) {
    btnComplete.textContent   = 'Completed';
    btnComplete.style.opacity = '0.5';
    btnComplete.style.cursor  = 'default';
  } else {
    btnComplete.textContent   = 'Mark as Complete';
    btnComplete.style.opacity = '1';
    btnComplete.style.cursor  = 'pointer';
  }
  btnSave.textContent = isSaved(id) ? 'Unsave' : 'Save';

  // Bug 10 fix: never record 'detail' as the previous page
  var activePage = document.querySelector('.page.active');
  if (activePage) {
    var pg = activePage.id.replace('page-', '');
    if (pg !== 'detail') STATE.previousPage = pg;
  }
  showPage('detail');
};

window.backFromDetail = function() {
  showPage(STATE.previousPage || 'tutorials');
};

window.markComplete = function() {
  var id = STATE.currentDetailId;
  if (!id || isCompleted(id)) return;
  saveTutorialProgress(id, 'done');
  document.getElementById('btn-complete').textContent   = 'Completed';
  document.getElementById('btn-complete').style.opacity = '0.5';
  document.getElementById('btn-complete').style.cursor  = 'default';
  updateProgressBar();
  showToast('Tutorial marked as complete.', 'ok');
};

window.toggleSave = function() {
  var id = STATE.currentDetailId;
  if (!id) return;
  if (isSaved(id)) {
    saveTutorialProgress(id, null);
    document.getElementById('btn-save').textContent = 'Save';
    showToast('Removed from saved.', 'info');
  } else {
    saveTutorialProgress(id, 'saved');
    document.getElementById('btn-save').textContent = 'Unsave';
    showToast('Tutorial saved.', 'ok');
  }
};

// Bug 7 fix: adminCreate writes to Firestore
window.adminCreate = async function() {
  if (!STATE.user || STATE.user.role !== 'admin') return;

  var title     = document.getElementById('adm-title').value.trim();
  var cat       = document.getElementById('adm-cat').value;
  var level     = document.getElementById('adm-level').value;
  var diff      = document.getElementById('adm-diff').value;
  var excerpt   = document.getElementById('adm-excerpt').value.trim();
  var body      = document.getElementById('adm-body').value.trim();
  var slugInput = document.getElementById('adm-slug').value.trim();

  if (!title || !excerpt || !body) {
    showToast('Title, excerpt, and content are required.', 'err');
    return;
  }

  var slug     = slugInput || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  var tutorial = { title, category: cat, level, difficulty: diff, excerpt, body, date: new Date().toISOString(), slug };

  try {
    const db  = getDb();
    const ref = await addDoc(collection(db, 'tutorials'), tutorial);
    tutorial.id = ref.id;
    STATE.tutorials.unshift(tutorial);
  } catch (e) {
    console.error('Firestore write failed:', e);
    showToast('Failed to save tutorial to database.', 'err');
    return;
  }

  renderAdminList();
  renderHomeRecent();
  document.getElementById('adm-title').value   = '';
  document.getElementById('adm-excerpt').value = '';
  document.getElementById('adm-body').value    = '';
  document.getElementById('adm-slug').value    = '';
  showToast('Tutorial published successfully.', 'ok');
};

window.renderAdminList = function() {
  var el = document.getElementById('admin-tut-list');
  if (!el) return;
  if (!STATE.tutorials.length) {
    el.innerHTML = '<div class="empty-state">No tutorials yet.</div>';
    return;
  }
  el.innerHTML = STATE.tutorials.map(function(t) {
    return '<div class="admin-tut-item">' +
      '<div class="admin-tut-title">' + escHtml(t.title) + '</div>' +
      '<div class="admin-tut-meta">' + t.category + ' | ' + t.level + ' | ' + formatDate(t.date) + '</div>' +
      '<button class="btn btn-danger" style="width:auto;padding:6px 12px;font-size:.78rem" onclick="adminDelete(\'' + t.id + '\')">Delete</button>' +
    '</div>';
  }).join('');
};

// Bug 7 fix: adminDelete removes from Firestore
window.adminDelete = async function(id) {
  try {
    const db = getDb();
    await deleteDoc(doc(db, 'tutorials', id));
  } catch (e) {
    console.error('Firestore delete failed:', e);
    showToast('Failed to delete from database.', 'err');
    return;
  }
  STATE.tutorials = STATE.tutorials.filter(function(t) { return t.id !== id; });
  renderAdminList();
  renderHomeRecent();
  showToast('Tutorial deleted.', 'err');
};

window.escHtml = function(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

window.formatDate = function(val) {
  if (!val) return '';
  var d = (val && typeof val.toDate === 'function') ? val.toDate() : new Date(val);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};