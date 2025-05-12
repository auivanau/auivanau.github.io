(function () {
  const iconMap = {
    dark: "🌙",
    light: "🌞",
    auto: "🌓"
  };

  function applyTheme(theme) {
    document.body.classList.remove("theme-dark", "theme-light");
    if (theme === "dark") document.body.classList.add("theme-dark");
    if (theme === "light") document.body.classList.add("theme-light");

    const iconSpan = document.getElementById("theme-icon");
    if (iconSpan) iconSpan.textContent = iconMap[theme || "auto"];
  }

  function toggleTheme() {
    const current = localStorage.getItem("theme");
    let next;
    if (current === "dark") next = "light";
    else if (current === "light") next = null; // system
    else next = "dark";

    if (next) localStorage.setItem("theme", next);
    else localStorage.removeItem("theme");

    applyTheme(next);
  }

  // Create toggle button on page load
  window.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("theme");
    applyTheme(saved);

    const btn = document.createElement("button");
    btn.innerHTML = '<span id="theme-icon">🌓</span>';
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
