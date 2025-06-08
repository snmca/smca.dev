const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// Set initial theme
const saved = localStorage.getItem("theme");
applyTheme(saved === "light" || saved === "dark" ? saved : "dark");

// Set up toggle
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}

