(function () {
  const iconMap = {
    dark: "🌙",
    light: "🌞"
  };

  function applyTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light");

    if (theme === "dark") {
      document.body.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
      updateIcon("dark");
    } else {
      document.body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
      updateIcon("light");
    }
  }

  function updateIcon(theme) {
    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.textContent = theme === "dark" ? "🌙" : "🌞";
    }
  }

  window.toggleTheme = function () {
    const isDark = document.body.classList.contains("theme-dark");
    applyTheme(isDark ? "light" : "dark");
  };

  window.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("theme") || "dark";
    applyTheme(saved);

    const btn = document.createElement("button");
    btn.innerHTML = '<span id="theme-icon">🌙</span>';
    btn.title = "Toggle theme";
    btn.style = `
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.3em;
      cursor: pointer;
      z-index: 1000;
    `;
    btn.onclick = toggleTheme;
    document.body.appendChild(btn);
  });
})();
