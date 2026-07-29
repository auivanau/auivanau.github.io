(function () {
  function updateIcon(theme) {
    const icon = document.getElementById("theme-icon");

    if (icon) {
      icon.textContent = theme === "dark" ? "☾" : "☀";
    }
  }

  function applyTheme(theme) {
    const resolvedTheme = theme === "light" ? "light" : "dark";

    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(
      resolvedTheme === "light" ? "theme-light" : "theme-dark"
    );

    localStorage.setItem("theme", resolvedTheme);
    updateIcon(resolvedTheme);
  }

  window.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");

    const preferredTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

    const initialTheme = savedTheme || preferredTheme;

    const button = document.createElement("button");
    button.id = "theme-toggle";
    button.className = "theme-toggle";
    button.type = "button";
    button.title = "Toggle light and dark mode";
    button.setAttribute("aria-label", "Toggle light and dark mode");

    button.innerHTML =
      '<span id="theme-icon" aria-hidden="true"></span>';

    button.addEventListener("click", function () {
      const nextTheme = document.body.classList.contains("theme-dark")
        ? "light"
        : "dark";

      applyTheme(nextTheme);
    });

    document.body.appendChild(button);

    // Apply the theme after the icon element exists.
    applyTheme(initialTheme);

    if (window.hljs) {
      window.hljs.highlightAll();
    }
  });
})();
