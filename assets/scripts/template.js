/* MENU LATÉRAL */
const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const wrapper = document.querySelector('.content-wrapper');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    wrapper.classList.toggle('shifted');
});

/* SCROLL VERS SECTION */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* MODE SOMBRE / CLAIR */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
});
