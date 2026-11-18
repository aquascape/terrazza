// Apre e chiude il menu a burger su smartphone
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var button = header && header.querySelector(".menu-toggle");
  if (!button) return;
  function setOpen(open) {
    header.classList.toggle("open", open);
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
  }
  button.addEventListener("click", function () {
    setOpen(!header.classList.contains("open"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("open")) { setOpen(false); button.focus(); }
  });
  var wide = window.matchMedia("(min-width: 761px)");
  wide.addEventListener("change", function (e) { if (e.matches) setOpen(false); });
});
