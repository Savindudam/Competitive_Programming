var TUTORIALS_KEY = 'cpblog_tutorials';

function loadTutorials() {
  var raw = localStorage.getItem(TUTORIALS_KEY);
  if (raw) {
    try { STATE.tutorials = JSON.parse(raw); return; } catch(e) {}
  }
  STATE.tutorials = getSeedTutorials();
  saveTutorials();
}

function saveTutorials() {
  localStorage.setItem(TUTORIALS_KEY, JSON.stringify(STATE.tutorials));
}

function getSeedTutorials() {
  return [
    {
      id: 'binary-search-basics',
      title: 'Binary Search Basics',
      category: 'Algorithms',
      level: 'Beginner',
      difficulty: 'Easy',
      excerpt: 'Learn how binary search works and how to implement it cleanly in competitive programming.',
      body: '<h2>What is Binary Search?</h2><p>Binary search is a fundamental algorithm used to locate a target value within a sorted array. Instead of checking every element, it halves the search space at each step, resulting in O(log n) time complexity.</p><h2>Implementation</h2><pre><code>int binarySearch(vector&lt;int&gt;&amp; arr, int target) {\n    int lo = 0, hi = arr.size() - 1;\n    while (lo &lt;= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] &lt; target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}</code></pre><h2>When to Use</h2><p>Use binary search whenever the problem involves searching in a sorted structure, or whenever you can define a monotonic predicate to binary search on the answer.</p>',
      date: new Date(Date.now() - 86400000 * 3).toISOString(),
      slug: 'binary-search-basics'
    },
    {
      id: 'prefix-sums',
      title: 'Prefix Sums',
      category: 'Arrays',
      level: 'Beginner',
      difficulty: 'Easy',
      excerpt: 'A simple but powerful technique for answering range sum queries in O(1).',
      body: '<h2>The Idea</h2><p>A prefix sum array allows you to answer the query "what is the sum of elements from index l to r?" in O(1) time, after an O(n) preprocessing step.</p><h2>Construction</h2><pre><code>vector&lt;int&gt; prefix(n + 1, 0);\nfor (int i = 0; i &lt; n; i++)\n    prefix[i + 1] = prefix[i] + arr[i];\n\nint rangeSum(int l, int r) {\n    return prefix[r + 1] - prefix[l];\n}</code></pre>',
      date: new Date(Date.now() - 86400000 * 7).toISOString(),
      slug: 'prefix-sums'
    },
    {
      id: 'dijkstra',
      title: "Dijkstra's Shortest Path",
      category: 'Graphs',
      level: 'Intermediate',
      difficulty: 'Medium',
      excerpt: "Master Dijkstra's algorithm for single-source shortest paths on weighted graphs.",
      body: "<h2>Overview</h2><p>Dijkstra's algorithm finds the shortest paths from a source node to all other nodes in a graph with non-negative edge weights. It runs in O((V + E) log V) with a priority queue.</p><h2>Implementation</h2><pre><code>vector&lt;long long&gt; dijkstra(int src, vector&lt;vector&lt;pair&lt;int,int&gt;&gt;&gt;&amp; adj) {\n    int n = adj.size();\n    vector&lt;long long&gt; dist(n, LLONG_MAX);\n    priority_queue&lt;pair&lt;long long,int&gt;, vector&lt;pair&lt;long long,int&gt;&gt;, greater&lt;&gt;&gt; pq;\n    dist[src] = 0;\n    pq.push({0, src});\n    while (!pq.empty()) {\n        auto [d, u] = pq.top(); pq.pop();\n        if (d &gt; dist[u]) continue;\n        for (auto [v, w] : adj[u]) {\n            if (dist[u] + w &lt; dist[v]) {\n                dist[v] = dist[u] + w;\n                pq.push({dist[v], v});\n            }\n        }\n    }\n    return dist;\n}</code></pre>",
      date: new Date(Date.now() - 86400000 * 14).toISOString(),
      slug: 'dijkstra'
    }
  ];
}

function applyFilters() {
  var search = document.getElementById('tut-search').value.toLowerCase();
  var cat    = document.getElementById('tut-cat').value;
  var level  = STATE.levelFilter;
  return STATE.tutorials.filter(function(t) {
    var matchSearch = !search || t.title.toLowerCase().includes(search) || t.excerpt.toLowerCase().includes(search);
    var matchCat    = cat === 'All' || t.category === cat;
    var matchLevel  = level === 'All' || t.level === level;
    return matchSearch && matchCat && matchLevel;
  });
}

function setLevelFilter(btn, level) {
  STATE.levelFilter = level;
  document.querySelectorAll('.lvl-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  renderTutorialList(applyFilters());
}

function renderTutorialList(list) {
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
          '<span class="tag tag-cat">'                                      + escHtml(t.category) + '</span>' +
          '<span class="tag tag-' + t.level.toLowerCase()      + '">' + t.level      + '</span>' +
          '<span class="tag tag-' + t.difficulty.toLowerCase() + '">' + t.difficulty + '</span>' +
        '</div>' +
      '</div>' +
      '<div>' +
        (statusLabel ? '<div class="tut-card-status"><div class="status-dot ' + statusDot + '"></div>' + statusLabel + '</div>' : '') +
        '<div class="tut-card-status" style="margin-top:8px;color:var(--muted)">' + formatDate(t.date) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function openDetail(id) {
  var tut = STATE.tutorials.find(function(t) { return t.id === id; });
  if (!tut) return;

  STATE.currentDetailId = id;

  // Mark as in-progress the moment they open it (if not already done or in-progress)
  if (!isCompleted(id) && !isInProgress(id)) {
    saveTutorialProgress(id, 'in-progress');
  }

  document.getElementById('detail-title').textContent = tut.title;
  document.getElementById('detail-meta').innerHTML =
    '<span class="tag tag-cat">'                                      + escHtml(tut.category)   + '</span>' +
    '<span class="tag tag-' + tut.level.toLowerCase()      + '">' + tut.level      + '</span>' +
    '<span class="tag tag-' + tut.difficulty.toLowerCase() + '">' + tut.difficulty + '</span>' +
    '<span class="tag tag-cat" style="margin-left:4px">'             + formatDate(tut.date)     + '</span>';

  document.getElementById('detail-body').innerHTML = tut.body;

  var btnComplete = document.getElementById('btn-complete');
  var btnSave     = document.getElementById('btn-save');

  if (isCompleted(id)) {
    btnComplete.textContent    = 'Completed';
    btnComplete.style.opacity  = '0.5';
    btnComplete.style.cursor   = 'default';
  } else {
    btnComplete.textContent    = 'Mark as Complete';
    btnComplete.style.opacity  = '1';
    btnComplete.style.cursor   = 'pointer';
  }

  btnSave.textContent = isSaved(id) ? 'Unsave' : 'Save';

  STATE.previousPage = document.querySelector('.page.active').id.replace('page-', '');
  showPage('detail');
}

function backFromDetail() {
  showPage(STATE.previousPage || 'tutorials');
}

function markComplete() {
  var id = STATE.currentDetailId;
  if (!id || isCompleted(id)) return;

  saveTutorialProgress(id, 'done');

  document.getElementById('btn-complete').textContent   = 'Completed';
  document.getElementById('btn-complete').style.opacity = '0.5';
  document.getElementById('btn-complete').style.cursor  = 'default';

  updateProgressBar();
  showToast('Tutorial marked as complete.', 'ok');
}

function toggleSave() {
  var id = STATE.currentDetailId;
  if (!id) return;

  if (isSaved(id)) {
    saveTutorialProgress(id, isInProgress(id) ? 'in-progress' : null);
    document.getElementById('btn-save').textContent = 'Save';
    showToast('Removed from saved.', 'info');
  } else {
    saveTutorialProgress(id, 'saved');
    document.getElementById('btn-save').textContent = 'Unsave';
    showToast('Tutorial saved.', 'ok');
  }
}

function adminCreate() {
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
  var id       = slug + '-' + Date.now();
  var tutorial = { id, title, category: cat, level, difficulty: diff, excerpt, body, date: new Date().toISOString(), slug };

  STATE.tutorials.unshift(tutorial);
  saveTutorials();
  renderAdminList();
  renderHomeRecent();

  document.getElementById('adm-title').value   = '';
  document.getElementById('adm-excerpt').value = '';
  document.getElementById('adm-body').value    = '';
  document.getElementById('adm-slug').value    = '';

  showToast('Tutorial published successfully.', 'ok');
}

function renderAdminList() {
  var el = document.getElementById('admin-tut-list');
  if (!el) return;
  if (!STATE.tutorials.length) {
    el.innerHTML = '<div class="empty-state">No tutorials yet.</div>';
    return;
  }
  el.innerHTML = STATE.tutorials.map(function(t) {
    return '<div class="admin-tut-item">' +
      '<div class="admin-tut-title">'  + escHtml(t.title) + '</div>' +
      '<div class="admin-tut-meta">'   + t.category + ' | ' + t.level + ' | ' + formatDate(t.date) + '</div>' +
      '<button class="btn btn-danger" style="width:auto;padding:6px 12px;font-size:.78rem" onclick="adminDelete(\'' + t.id + '\')">Delete</button>' +
    '</div>';
  }).join('');
}

function adminDelete(id) {
  STATE.tutorials = STATE.tutorials.filter(function(t) { return t.id !== id; });
  saveTutorials();
  renderAdminList();
  renderHomeRecent();
  showToast('Tutorial deleted.', 'err');
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(iso) {
  if (!iso) return '';
  var d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}