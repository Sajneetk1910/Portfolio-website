// document.addEventListener("DOMContentLoaded", () => {
//     const darkModeBtn = document.getElementById("darkModeBtn");
//     const body = document.body;
  
//     // Check local storage for dark mode preference
//     if (localStorage.getItem("darkMode") === "enabled") {
//       body.classList.add("dark-mode");
//     }
  
//     darkModeBtn.addEventListener("click", () => {
//       body.classList.toggle("dark-mode");
  
//       // Save preference in local storage
//       if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("darkMode", "enabled");
//       } else {
//         localStorage.setItem("darkMode", "disabled");
//       }
//     });
//   });
  

// Set current year dynamically
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
  });
  