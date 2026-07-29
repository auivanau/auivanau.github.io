(function () {
  function updateIcon(theme) {
    const icon = document.getElementById("theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";
  }

  function applyTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
    localStorage.setItem("theme", theme === "light" ? "light" : "dark");
    updateIcon(theme);
  }

  window.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("theme");
    const preferred = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    applyTheme(saved || preferred);

    const button = document.createElement("button");
    button.id = "theme-toggle";
    button.className = "theme-toggle";
    button.type = "button";
    button.title = "Toggle light and dark mode";
    button.setAttribute("aria-label", "Toggle light and dark mode");
    button.innerHTML = '<span id="theme-icon" aria-hidden="true"></span>';
    button.addEventListener("click", function () {
      applyTheme(document.body.classList.contains("theme-dark") ? "light" : "dark");
    });
    document.body.appendChild(button);

    if (window.hljs) window.hljs.highlightAll();
  });
})();
