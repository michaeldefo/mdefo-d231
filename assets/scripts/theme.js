// Activate dark mode by override default.css with dark mode css
/*function toggleTheme() {
    const darkLink = document.getElementById('dark-theme');
    darkLink.disabled = !darkLink.disabled;
}*/

// Active ou désactive le thème sombre + sauvegarde
function toggleTheme() {
    const darkLink = document.getElementById('dark-theme');
    const isDark = !darkLink.disabled;

    // Bascule
    darkLink.disabled = isDark;

    // Sauvegarde dans localStorage
    localStorage.setItem("theme", isDark ? "light" : "dark");
}

// Applique le thème sauvegardé au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const darkLink = document.getElementById('dark-theme');

    if (savedTheme === "dark") {
        darkLink.disabled = false;   // active dark.css
    } else {
        darkLink.disabled = true;    // active default.css
    }
});
