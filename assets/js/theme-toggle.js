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
      document.getElementById("theme-icon").textContent = iconMap.dark;
    } else {
      document.body.classList.add("theme-light");
      localStorage.setItem("theme", "light");
      document.getElementById("theme-icon").textContent = iconMap.light;
    }
  }

  window.toggleTheme = function () {
    const isDark = document.body.classList.contains("theme-dark");
    applyTheme(isDark ? "light" : "dark");
  };

  window.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("theme") || "dark"; // default to dark
    applyTheme(saved);
  });
})();
