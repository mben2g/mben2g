
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.toggle("show");
    });
});
