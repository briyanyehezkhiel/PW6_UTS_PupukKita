const darkModeToggle = document.getElementById("darkModeToggle");
const stylesheet = document.getElementById("stylesheet");

// Function to toggle dark mode
function toggleDarkMode() {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "true");
        stylesheet.href = "style-dark.css";
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
        stylesheet.href = "style.css";
    }
}

// Check user's preference from local storage
if (localStorage.getItem("darkMode") === "true") {
    darkModeToggle.checked = true;
    toggleDarkMode();
}

// Add change event listener to the dark mode toggle checkbox
darkModeToggle.addEventListener("change", toggleDarkMode);
