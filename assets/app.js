(function () {
  var THEME_KEY = "cpblog-theme";

  function getInitialTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(THEME_KEY, t);
    document.querySelectorAll("[data-theme-icon]").forEach(function (el) {
      el.innerHTML = t === "dark"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    });
    document.querySelectorAll("[data-theme-toggle-state]").forEach(function (el) {
      if (t === "dark") el.classList.add("on"); else el.classList.remove("on");
    });
  }

  function initTheme() {
    applyTheme(getInitialTheme());
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-theme-toggle]");
      if (!t) return;
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  function initSidebarToggle() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-sidebar-toggle]");
      if (!t) return;
      var app = document.querySelector(".app");
      if (window.innerWidth <= 900) {
        app.classList.toggle("menu-open");
      } else {
        app.classList.toggle("collapsed");
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target.classList && e.target.classList.contains("scrim")) {
        document.querySelector(".app").classList.remove("menu-open");
      }
    });
  }

  function initFAQ() {
    document.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.classList.toggle("open");
      });
    });
  }

  function initToggles() {
    document.querySelectorAll(".toggle:not(.disabled):not([data-theme-toggle-state])").forEach(function (el) {
      el.addEventListener("click", function () {
        el.classList.toggle("on");
      });
    });
  }

  function showToast(title, desc) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.querySelector(".t-title").textContent = title;
    t.querySelector(".t-desc").textContent = desc;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("show"); }, 3500);
  }

  function initLogin() {
    var f = document.getElementById("login-form");
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("Auth not wired yet", "This is a UI shell. Hook it up to a backend when you are ready.");
    });
  }

  /* ===== Tutorials list page ===== */
  function fmtBadge(d) {
    return '<span class="badge ' + d.toLowerCase() + '">' + d + '</span>';
  }

  function renderTutorialList(list, mountId) {
    var mount = document.getElementById(mountId);
    if (!mount) return;
    if (!list.length) {
      mount.innerHTML = '<div class="empty">no results. try a different filter.</div>';
      return;
    }
    var html = '<ul class="list">' + list.map(function (t) {
      var tags = t.tags.map(function (tag) { return '<span class="tag">#' + tag + '</span>'; }).join("");
      return '<li><a class="list-item" href="tutorial.html?slug=' + t.slug + '">' +
             '<span class="date">' + t.date + '</span>' +
             '<div><h3 class="list-title">' + t.title + '</h3>' +
             '<p class="list-excerpt">' + t.excerpt + '</p>' +
             '<div class="tags">' + tags + '</div></div>' +
             '<div class="badge-cell">' + fmtBadge(t.difficulty) + '</div>' +
             '</a></li>';
    }).join("") + '</ul>';
    mount.innerHTML = html;
  }

  function initTutorialsPage() {
    if (!document.getElementById("tutorials-list")) return;
    var data = window.TUTORIALS;
    var topics = ["All"].concat(Array.from(new Set(data.map(function (t) { return t.topic; }))));
    var chipsEl = document.getElementById("topic-chips");
    chipsEl.innerHTML = topics.map(function (t, i) {
      return '<button class="chip' + (i === 0 ? ' active' : '') + '" data-topic="' + t + '">' + t + '</button>';
    }).join("");

    var state = { topic: "All", q: "" };

    function apply() {
      var q = state.q.trim().toLowerCase();
      var filtered = data.filter(function (t) {
        var matchTopic = state.topic === "All" || t.topic === state.topic;
        var matchQ = !q || t.title.toLowerCase().indexOf(q) !== -1
          || t.excerpt.toLowerCase().indexOf(q) !== -1
          || t.tags.some(function (tag) { return tag.indexOf(q) !== -1; });
        return matchTopic && matchQ;
      });
      renderTutorialList(filtered, "tutorials-list");
    }

    chipsEl.addEventListener("click", function (e) {
      var c = e.target.closest(".chip");
      if (!c) return;
      chipsEl.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("active"); });
      c.classList.add("active");
      state.topic = c.getAttribute("data-topic");
      apply();
    });
    document.getElementById("search-input").addEventListener("input", function (e) {
      state.q = e.target.value;
      apply();
    });

    apply();
  }

  function initHomeFeatured() {
    if (!document.getElementById("featured-list")) return;
    renderTutorialList(window.TUTORIALS.slice(0, 3), "featured-list");
    var stats = document.getElementById("home-stats");
    if (stats) {
      var n = window.TUTORIALS.length;
      var topics = new Set(window.TUTORIALS.map(function (t) { return t.topic; })).size;
      stats.innerHTML =
        '<div class="stat"><div class="v">' + String(n).padStart(2, "0") + '</div><div class="l">tutorials</div></div>' +
        '<div class="stat"><div class="v">' + topics + '</div><div class="l">topics</div></div>' +
        '<div class="stat"><div class="v">weekly</div><div class="l">updated</div></div>';
    }
  }

  function initTutorialDetail() {
    var mount = document.getElementById("tutorial-article");
    if (!mount) return;
    var slug = new URLSearchParams(location.search).get("slug");
    var data = window.TUTORIALS;
    var i = data.findIndex(function (t) { return t.slug === slug; });
    var t = data[i];
    if (!t) {
      mount.innerHTML = '<div class="container"><h1 class="font-serif">Not found</h1>' +
        '<p style="color:var(--muted);margin-top:8px">This tutorial does not exist.</p>' +
        '<p style="margin-top:16px"><a class="btn btn-outline" href="tutorials.html">Back to index</a></p></div>';
      return;
    }
    document.title = t.title + " — CP-Blog";
    var tags = t.tags.map(function (tag) { return '<span class="tag">#' + tag + '</span>'; }).join("");
    var prev = data[i - 1];
    var next = data[i + 1];

    mount.innerHTML =
      '<a class="back-link" href="tutorials.html">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>' +
      'back to index</a>' +
      '<header class="section-divider">' +
        '<div class="article-meta">' +
          '<span>' + t.topic + '</span><span class="sep">/</span>' +
          '<span>' + t.date + '</span><span class="sep">/</span>' +
          '<span class="read"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' + t.readMinutes + ' min</span>' +
        '</div>' +
        '<h1 class="article-title">' + t.title + '</h1>' +
        '<p class="article-excerpt">' + t.excerpt + '</p>' +
        '<div class="article-meta-row">' + fmtBadge(t.difficulty) + tags + '</div>' +
      '</header>' +
      '<div class="prose">' + t.html + '</div>' +
      '<nav class="article-nav">' +
        '<div>' + (prev ? '<a class="nav-prev" href="tutorial.html?slug=' + prev.slug + '"><span class="nav-label">previous</span><span class="nav-title">' + prev.title + '</span></a>' : '') + '</div>' +
        '<div>' + (next ? '<a class="nav-next" href="tutorial.html?slug=' + next.slug + '"><span class="nav-label">next</span><span class="nav-title">' + next.title + '</span></a>' : '') + '</div>' +
      '</nav>';
  }

  function initCrumbs() {
    var el = document.getElementById("crumbs");
    if (!el) return;
    var page = el.getAttribute("data-page") || "";
    var html = '<a href="index.html">~</a>';
    if (page) html += '<span class="sep">/</span><a href="' + page + '.html">' + page + '</a>';
    var slug = new URLSearchParams(location.search).get("slug");
    if (page === "tutorials" && slug) {
      html += '<span class="sep">/</span><span>' + slug + '</span>';
    }
    el.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initSidebarToggle();
    initFAQ();
    initToggles();
    initLogin();
    initCrumbs();
    initHomeFeatured();
    initTutorialsPage();
    initTutorialDetail();
  });
})();
