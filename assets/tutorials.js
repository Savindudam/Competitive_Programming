window.TUTORIALS = [
  {
    slug: "binary-search-the-answer",
    title: "Binary Search the Answer",
    topic: "Searching",
    difficulty: "Medium",
    readMinutes: 9,
    date: "2026-04-12",
    excerpt: "When the answer is monotonic in some predicate, you can binary search the answer itself. Here is how I think about it under contest pressure.",
    tags: ["binary-search", "monotonicity", "patterns"],
    html: `
<p>Most beginners learn binary search as "find a number in a sorted array". That framing is a trap. The real trick is recognising that the search space is not the array, it is the set of candidate answers.</p>
<h2>The mental model</h2>
<p>Define a boolean predicate <code>good(x)</code>. If the set of <code>x</code> for which it returns true forms a prefix or suffix of an interval, you can binary search for the boundary in <code>O(log range)</code>.</p>
<pre><code>int lo = 0, hi = 1e9;
while (lo &lt; hi) {
    int mid = lo + (hi - lo) / 2;
    if (good(mid)) hi = mid;
    else           lo = mid + 1;
}
return lo;</code></pre>
<h2>Where it actually shows up</h2>
<ul>
  <li>Minimum capacity to ship packages within D days.</li>
  <li>Maximum minimum distance between cows on a number line.</li>
  <li>Smallest k such that some greedy check passes.</li>
</ul>
<h3>Common mistakes</h3>
<ol>
  <li>Using <code>(lo + hi) / 2</code> with large bounds. Overflow is silent and brutal.</li>
  <li>Forgetting to prove monotonicity. If your predicate is not monotone, you are not binary searching, you are guessing.</li>
  <li>Mismatched invariants between <code>lo</code> and <code>hi</code>. Pick one and write it down.</li>
</ol>
<blockquote>If you cannot describe the predicate in one sentence, you do not understand the problem yet. Step away from the keyboard.</blockquote>
`
  },
  {
    slug: "dp-on-subsets-bitmask",
    title: "DP on Subsets: a Bitmask Primer",
    topic: "Dynamic Programming",
    difficulty: "Hard",
    readMinutes: 14,
    date: "2026-03-30",
    excerpt: "Bitmask DP is a hammer that turns 2^n problems into something tractable when n is small. Here is the pattern, the pitfalls, and a worked example.",
    tags: ["dp", "bitmask", "subset-sum"],
    html: `
<p>Whenever you see <code>n &le; 20</code>, your spider sense should tingle. There is a good chance the intended solution is exponential in <code>n</code> but polynomial per state.</p>
<h2>State design</h2>
<p>The state is usually a bitmask describing which elements have been used so far. The transition adds one more element and pays its cost.</p>
<pre><code>vector&lt;int&gt; dp(1 &lt;&lt; n, INF);
dp[0] = 0;
for (int mask = 0; mask &lt; (1 &lt;&lt; n); mask++) {
    int i = __builtin_popcount(mask);
    for (int j = 0; j &lt; n; j++) {
        if (mask &amp; (1 &lt;&lt; j)) continue;
        dp[mask | (1 &lt;&lt; j)] = min(dp[mask | (1 &lt;&lt; j)],
                                  dp[mask] + cost[i][j]);
    }
}</code></pre>
<h3>Worked example: assignment problem</h3>
<p>Assign <code>n</code> tasks to <code>n</code> workers minimising total cost. Iterate masks in increasing order, treat <code>popcount(mask)</code> as the worker index, and pick which task to give them next.</p>
<h2>Pitfalls</h2>
<ul>
  <li>Iterating masks in the wrong order. Increasing popcount works for most flavours.</li>
  <li>Off by one in <code>(1 &lt;&lt; n)</code>. Always parenthesise shifts.</li>
  <li>Using <code>int</code> for <code>n = 32</code>. Promote to <code>long long</code>.</li>
</ul>
`
  },
  {
    slug: "graphs-bfs-vs-dfs",
    title: "BFS vs DFS, and When Neither is Enough",
    topic: "Graphs",
    difficulty: "Easy",
    readMinutes: 7,
    date: "2026-03-15",
    excerpt: "Both run in linear time. Both look the same in code. They solve very different problems. A short note on picking the right one.",
    tags: ["graphs", "bfs", "dfs"],
    html: `
<p>BFS gives you shortest paths in unweighted graphs. DFS gives you tree structure, discovery times, and lets you talk about back edges. Pick the one whose side effects you actually need.</p>
<h2>BFS in a sentence</h2>
<pre><code>queue&lt;int&gt; q;
dist[s] = 0; q.push(s);
while (!q.empty()) {
    int u = q.front(); q.pop();
    for (int v : adj[u]) if (dist[v] == -1) {
        dist[v] = dist[u] + 1;
        q.push(v);
    }
}</code></pre>
<h2>When neither is enough</h2>
<p>Weighted graphs need Dijkstra. Negative weights need Bellman-Ford or SPFA. Multiple sources with different costs often want a 0-1 BFS with a deque.</p>
`
  },
  {
    slug: "segment-tree-from-scratch",
    title: "Segment Tree from Scratch (No Magic)",
    topic: "Data Structures",
    difficulty: "Medium",
    readMinutes: 12,
    date: "2026-02-22",
    excerpt: "A clean iterative segment tree, derived step by step. No recursion, no template soup, just an array of size 2n.",
    tags: ["segment-tree", "data-structures"],
    html: `
<p>The iterative segment tree is one of those things that looks like sorcery until you write it once. Then it never leaves your toolbox.</p>
<h2>The layout</h2>
<p>Store the tree in an array of size <code>2n</code>. Leaves live at indices <code>n</code> through <code>2n - 1</code>. The parent of node <code>i</code> is <code>i / 2</code>.</p>
<pre><code>void build() {
    for (int i = n - 1; i &gt; 0; --i)
        t[i] = t[i &lt;&lt; 1] + t[i &lt;&lt; 1 | 1];
}

void update(int p, int v) {
    for (t[p += n] = v; p &gt;&gt;= 1; )
        t[p] = t[p &lt;&lt; 1] + t[p &lt;&lt; 1 | 1];
}

int query(int l, int r) {
    int res = 0;
    for (l += n, r += n; l &lt; r; l &gt;&gt;= 1, r &gt;&gt;= 1) {
        if (l &amp; 1) res += t[l++];
        if (r &amp; 1) res += t[--r];
    }
    return res;
}</code></pre>
<h3>Why iterative</h3>
<ul>
  <li>No recursion overhead. Constant factor matters when n is large.</li>
  <li>Trivial to port between languages.</li>
  <li>Easier to debug. The whole tree fits in your head.</li>
</ul>
`
  },
  {
    slug: "number-theory-essentials",
    title: "Number Theory Essentials for Contests",
    topic: "Math",
    difficulty: "Medium",
    readMinutes: 10,
    date: "2026-02-04",
    excerpt: "GCD, modular inverse, Fermat, and the sieve. The four things that show up in roughly half of the contests I write.",
    tags: ["math", "number-theory", "modular"],
    html: `
<h2>GCD and the extended algorithm</h2>
<p>Euclid's algorithm is fast and reliable. The extended version returns coefficients <code>x, y</code> such that <code>ax + by = gcd(a, b)</code>, which is how you compute modular inverses when the modulus is not prime.</p>
<h2>Fermat's little theorem</h2>
<p>For prime <code>p</code> and <code>a</code> coprime to it, <code>a^(p-1) = 1 (mod p)</code>. So the modular inverse is <code>a^(p-2)</code>, computable with fast exponentiation in O(log p).</p>
<pre><code>long long pw(long long a, long long e, long long m) {
    long long r = 1 % m;
    a %= m;
    while (e) {
        if (e &amp; 1) r = r * a % m;
        a = a * a % m;
        e &gt;&gt;= 1;
    }
    return r;
}</code></pre>
<h2>Linear sieve</h2>
<p>Generates all primes up to <code>N</code> in <code>O(N)</code> and gives you the smallest prime factor of every integer for free, which is the real reason to use it.</p>
`
  },
  {
    slug: "two-pointers-discipline",
    title: "Two Pointers: a Discipline, Not a Trick",
    topic: "Patterns",
    difficulty: "Easy",
    readMinutes: 6,
    date: "2026-01-18",
    excerpt: "Two pointers is one of the highest leverage patterns in CP. The hard part is not the code, it is convincing yourself the invariant holds.",
    tags: ["two-pointers", "patterns"],
    html: `
<p>The two pointers technique works whenever advancing the right endpoint never makes the left endpoint want to move backward. Sliding window is the canonical example.</p>
<h2>Skeleton</h2>
<pre><code>int l = 0, best = 0;
for (int r = 0; r &lt; n; r++) {
    add(a[r]);
    while (!ok()) remove(a[l++]);
    best = max(best, r - l + 1);
}</code></pre>
<p>If you cannot say in one breath what <code>ok()</code> means and why it is monotone as the window grows, the pattern does not apply. Reach for something else.</p>
`
  }
];
