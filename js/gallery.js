document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".listing-gallery").forEach(function (g) {
    var main = g.querySelector(".listing-main img");
    var links = g.querySelectorAll(".listing-thumbs a");
    if (!main) return;
    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        main.src = a.getAttribute("href");
        main.alt = a.querySelector("img").alt;
        links.forEach(function (l) { l.removeAttribute("aria-current"); });
        a.setAttribute("aria-current", "true");
      });
    });
  });
});
