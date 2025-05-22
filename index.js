document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.getElementById("darkModeBtn");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

// Set current year dynamically
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
});
