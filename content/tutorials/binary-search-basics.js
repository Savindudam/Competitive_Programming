var TUTORIAL_binary_search_basics = {
  id: "binary-search-basics",
  title: "Binary Search Basics",
  category: "Algorithms",
  level: "Beginner",
  difficulty: "Easy",
  slug: "binary-search-basics",
  excerpt: "Learn how binary search works and how to implement it cleanly in competitive programming.",
  date: "2025-01-01",
  body: `
<h2>What is Binary Search?</h2>
<p>
  Binary search is a fundamental algorithm used to locate a target value within a sorted array.
  Instead of checking every element linearly, it halves the search space at each step,
  resulting in O(log n) time complexity.
</p>

<h2>Implementation</h2>
<pre><code>int binarySearch(vector&lt;int&gt;&amp; arr, int target) {
    int lo = 0, hi = arr.size() - 1;
    while (lo &lt;= hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}</code></pre>

<h2>When to Use</h2>
<p>
  Use binary search whenever the problem involves searching in a sorted structure,
  or whenever you can define a monotonic predicate to binary search on the answer.
</p>

<h2>Practice Problems</h2>
<ul>
  <li>Codeforces 1742B - Increasing Subsequence</li>
  <li>LeetCode 704 - Binary Search</li>
  <li>LeetCode 35 - Search Insert Position</li>
</ul>
  `
};