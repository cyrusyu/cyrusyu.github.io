(() => {
  const storageKey = "cyrusyu-theme";
  let darkMode = false;

  try {
    darkMode = localStorage.getItem(storageKey) === "dark";
  } catch {
    darkMode = false;
  }

  const updateTheme = () => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-checked", String(darkMode));
    });
  };

  updateTheme();

  document.addEventListener("DOMContentLoaded", () => {
    updateTheme();

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        darkMode = !darkMode;
        updateTheme();

        try {
          localStorage.setItem(storageKey, darkMode ? "dark" : "light");
        } catch {
          // The theme still works for this page if storage is unavailable.
        }
      });
    });
  });
})();
