const SEED_TUTORIALS = [
  {
    id: 'binary-search-basics',
    title: 'Binary Search Basics',
    category: 'Algorithms',
    level: 'Beginner',
    difficulty: 1,
    excerpt: 'Learn how binary search works and why it is significantly faster than linear search for sorted arrays.',
    date: '2024-01-15',
    body: `<h2>What is Binary Search?</h2>
<p>Binary search is a fast search algorithm that works on sorted arrays by repeatedly dividing the search space in half. Instead of checking every element like linear search, it eliminates half the remaining elements on each step.</p>
<h2>Time Complexity</h2>
<p>Binary search runs in O(log n) time, which is much faster than O(n) linear search. For an array of 1,000,000 elements, binary search takes at most 20 comparisons.</p>
<h2>Implementation</h2>
<pre><code>function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}</code></pre>
<h2>When to Use Binary Search</h2>
<ul>
  <li>The array is sorted</li>
  <li>You need fast lookups with many queries</li>
  <li>Random access to elements is possible (not a linked list)</li>
</ul>`,
  },
  {
    id: 'dynamic-programming-intro',
    title: 'Introduction to Dynamic Programming',
    category: 'Algorithms',
    level: 'Intermediate',
    difficulty: 3,
    excerpt: 'Understand the core concepts of dynamic programming and how to identify when a problem can be solved with it.',
    date: '2024-02-01',
    body: `<h2>Core Idea</h2>
<p>Dynamic programming (DP) solves complex problems by breaking them into overlapping subproblems and storing solutions to avoid recomputation. It requires two properties: optimal substructure and overlapping subproblems.</p>
<h2>Fibonacci Example</h2>
<pre><code>function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}</code></pre>
<h2>Bottom-Up vs Top-Down</h2>
<p>Top-down uses recursion with memoization. Bottom-up fills a table iteratively from base cases upward. Both achieve the same complexity; bottom-up often uses less stack space.</p>`,
  },
  {
    id: 'graph-traversal',
    title: 'Graph Traversal: BFS and DFS',
    category: 'Graphs',
    level: 'Intermediate',
    difficulty: 2,
    excerpt: 'Master breadth-first search and depth-first search, the two fundamental graph traversal algorithms.',
    date: '2024-02-20',
    body: `<h2>BFS Overview</h2>
<p>Breadth-first search explores neighbors level by level using a queue. It finds the shortest path in unweighted graphs and is ideal for level-order problems.</p>
<h2>DFS Overview</h2>
<p>Depth-first search goes as deep as possible along each branch before backtracking. It uses a stack (or recursion) and is useful for cycle detection, topological sort, and connected components.</p>
<pre><code>function bfs(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}</code></pre>`,
  },
  {
    id: 'two-pointers-technique',
    title: 'Two Pointers Technique',
    category: 'Arrays',
    level: 'Beginner',
    difficulty: 2,
    excerpt: 'A powerful pattern that uses two pointers to reduce O(n²) brute force solutions to O(n) time.',
    date: '2024-03-05',
    body: `<h2>The Pattern</h2>
<p>Two pointers is a technique where you maintain two indices into an array, typically moving them toward each other or in the same direction, to solve problems in linear time.</p>
<h2>Classic: Two Sum on Sorted Array</h2>
<pre><code>function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}</code></pre>
<h2>Common Applications</h2>
<ul>
  <li>Pair with target sum in sorted array</li>
  <li>Container with most water</li>
  <li>Remove duplicates from sorted array</li>
  <li>Palindrome checking</li>
</ul>`,
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window Pattern',
    category: 'Arrays',
    level: 'Intermediate',
    difficulty: 2,
    excerpt: 'Learn the sliding window technique to solve substring and subarray problems efficiently.',
    date: '2024-03-18',
    body: `<h2>When to Use Sliding Window</h2>
<p>Sliding window is ideal for problems involving contiguous subarrays or substrings where you need to find or optimize some property over all windows of a given size or constraint.</p>
<h2>Fixed Window Example</h2>
<pre><code>function maxSumSubarray(arr, k) {
  let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}</code></pre>`,
  },
  {
    id: 'trees-fundamentals',
    title: 'Binary Trees Fundamentals',
    category: 'Trees',
    level: 'Beginner',
    difficulty: 2,
    excerpt: 'Understand binary trees, their properties, and the three traversal orders every developer should know.',
    date: '2024-04-01',
    body: `<h2>Tree Terminology</h2>
<p>A binary tree is a hierarchical data structure where each node has at most two children. The topmost node is the root. Nodes without children are leaves. Height is the longest path from root to a leaf.</p>
<h2>Traversals</h2>
<pre><code>function inOrder(root, result = []) {
  if (!root) return result;
  inOrder(root.left, result);
  result.push(root.val);
  inOrder(root.right, result);
  return result;
}</code></pre>
<ul>
  <li>In-order (Left, Root, Right): sorted output for BSTs</li>
  <li>Pre-order (Root, Left, Right): copy/serialize a tree</li>
  <li>Post-order (Left, Right, Root): delete a tree safely</li>
</ul>`,
  },
];

function loadTutorials() {
  const stored = localStorage.getItem('cp_tutorials');
  if (stored) {
    const parsed = JSON.parse(stored);
    STATE.tutorials = parsed.length ? parsed : SEED_TUTORIALS;
  } else {
    STATE.tutorials = [...SEED_TUTORIALS];
  }
}

function saveTutorialsLocal() {
  localStorage.setItem('cp_tutorials', JSON.stringify(STATE.tutorials));
}

function getFilteredTutorials() {
  const { search, category, level } = STATE.filters;
  return STATE.tutorials.filter(t => {
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = !category || t.category === category;
    const matchLevel = !level || t.level === level;
    return matchSearch && matchCat && matchLevel;
  });
}

function renderTutorials() {
  const grid = document.getElementById('tutorials-grid');
  if (!grid) return;
  const filtered = getFilteredTutorials();
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">
      <svg class="empty-state-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <h3>No tutorials found</h3>
      <p>Try adjusting your search or filters</p>
    </div>`;
    return;
  }
  grid.innerHTML = filtered.map(t => tutorialCardHTML(t)).join('');
}

function tutorialCardHTML(t) {
  const status = STATE.progress[t.id];
  const dotClass = status ? status : '';
  const savedClass = status === 'saved' ? ' saved' : '';
  const levelClass = 'tag-' + t.level.toLowerCase();
  return `<div class="tutorial-card" onclick="openDetail(STATE.tutorials.find(x => x.id === '${t.id}'))">
    <div class="tutorial-card-meta">
      <div class="tutorial-card-tags">
        <span class="tag tag-category">${t.category}</span>
        <span class="tag ${levelClass}">${t.level}</span>
      </div>
      <div class="tutorial-card-actions">
        <button class="card-icon-btn${savedClass}" onclick="event.stopPropagation(); toggleSave('${t.id}')" title="Save">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${status === 'saved' ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
    </div>
    <h3 class="tutorial-card-title">${t.title}</h3>
    <p class="tutorial-card-excerpt">${t.excerpt}</p>
    <div class="tutorial-card-footer">
      <span><span class="tutorial-status-dot ${dotClass}"></span>${status ? status.replace('-', ' ') : 'not started'}</span>
      <span>${formatDate(t.date)}</span>
    </div>
  </div>`;
}

function renderDetail(t) {
  const page = document.getElementById('page-detail');
  if (!page) return;
  const levelClass = 'tag-' + t.level.toLowerCase();
  const completed = isCompleted(t.id);
  page.innerHTML = `
    <button class="detail-back" onclick="showPage('tutorials')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Back to Tutorials
    </button>
    <div class="detail-layout">
      <div class="detail-main">
        <div class="detail-meta">
          <span class="tag tag-category">${t.category}</span>
          <span class="tag ${levelClass}">${t.level}</span>
        </div>
        <h1 class="detail-title">${t.title}</h1>
        <p class="detail-excerpt">${t.excerpt}</p>
        <div class="detail-body">${t.body}</div>
      </div>
      <div>
        <div class="detail-sidebar-card">
          <h4>Tutorial Info</h4>
          <div class="detail-info-row">
            <div class="detail-info-item"><span>Category</span><span>${t.category}</span></div>
            <div class="detail-info-item"><span>Level</span><span>${t.level}</span></div>
            <div class="detail-info-item"><span>Published</span><span>${formatDate(t.date)}</span></div>
            <div class="detail-info-item"><span>Difficulty</span><span>${'★'.repeat(t.difficulty || 1)}${'☆'.repeat(5 - (t.difficulty || 1))}</span></div>
          </div>
          <div class="detail-actions">
            <button class="btn ${completed ? 'btn-ghost' : 'btn-primary'}" onclick="markComplete('${t.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              ${completed ? 'Completed' : 'Mark as Complete'}
            </button>
            <button class="btn btn-ghost" onclick="toggleSave('${t.id}'); renderDetail(STATE.tutorials.find(x => x.id === '${t.id}'))">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${isSaved(t.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
              ${isSaved(t.id) ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>`;

  if (!isInProgress(t.id) && !isCompleted(t.id)) {
    saveTutorialProgress(t.id, 'in-progress');
  }
}

function markComplete(id) {
  saveTutorialProgress(id, 'done');
  showToast('Tutorial marked as complete', 'success');
  const t = STATE.tutorials.find(x => x.id === id);
  if (t) renderDetail(t);
  updateProgressBar();
}

function toggleSave(id) {
  const current = STATE.progress[id];
  if (current === 'saved') {
    saveTutorialProgress(id, null);
    showToast('Removed from saved', '');
  } else {
    saveTutorialProgress(id, 'saved');
    showToast('Saved for later', 'success');
  }
  renderTutorials();
}

function formatDate(d) {
  if (!d) return '';
  try {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return d;
  }
}

function adminCreateTutorial(data) {
  const id = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const tutorial = { ...data, id, date: new Date().toISOString().split('T')[0] };
  STATE.tutorials.unshift(tutorial);
  saveTutorialsLocal();
  renderAdminList();
  renderTutorials();
  showToast('Tutorial published', 'success');
}

function adminDeleteTutorial(id) {
  STATE.tutorials = STATE.tutorials.filter(t => t.id !== id);
  saveTutorialsLocal();
  renderAdminList();
  renderTutorials();
  showToast('Tutorial deleted', '');
}

function renderAdminList() {
  const el = document.getElementById('admin-tutorial-list');
  if (!el) return;
  el.innerHTML = STATE.tutorials.map(t => `
    <div class="admin-tutorial-row">
      <div class="admin-tutorial-row-info">
        <h4>${t.title}</h4>
        <p>${t.category} &middot; ${t.level} &middot; ${formatDate(t.date)}</p>
      </div>
      <button class="btn btn-danger" onclick="adminDeleteTutorial('${t.id}')">Delete</button>
    </div>`).join('');
}

window.renderTutorials = renderTutorials;
window.renderDetail = renderDetail;
window.markComplete = markComplete;
window.toggleSave = toggleSave;
window.adminCreateTutorial = adminCreateTutorial;
window.adminDeleteTutorial = adminDeleteTutorial;
window.renderAdminList = renderAdminList;
window.loadTutorials = loadTutorials;
window.formatDate = formatDate;