// Tracks which posts a visitor has opened, using localStorage (per browser,
// no account/server involved). On a post page it records the current URL;
// on the homepage it grays out cards for posts already in that list.
(function () {
  var STORAGE_KEY = "viewedPosts";

  function getViewed() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }

  function markCurrentPostAsViewed() {
    if (!document.querySelector(".post")) return;

    var path = window.location.pathname;
    var viewed = getViewed();

    if (viewed.indexOf(path) === -1) {
      viewed.push(path);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(viewed));
      } catch (err) {
        // localStorage unavailable (private browsing, quota, etc.) — skip silently.
      }
    }
  }

  function grayOutViewedCards() {
    var cards = document.querySelectorAll(".post-card[data-url]");
    if (!cards.length) return;

    var viewed = getViewed();
    cards.forEach(function (card) {
      if (viewed.indexOf(card.getAttribute("data-url")) !== -1) {
        card.classList.add("post-card--visited");
      }
    });
  }

  markCurrentPostAsViewed();
  grayOutViewedCards();
})();