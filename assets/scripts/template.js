/* MENU LATÉRAL */
const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
});

/* NAVIGATION ENTRE SECTIONS */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* MODE SOMBRE / CLAIR */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
});

document.querySelectorAll('.coming-soon').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert("Cette section arrive bientôt !");
    });
});