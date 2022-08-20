const mobileBtn = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-menu]");
const mobileDataNav = document.querySelector("[data-nav]");

mobileBtn.addEventListener("click", burger);

function burger() {
    mobileBtn.getAttribute("aria-expanted") === true || false;

    mobileBtn.classList.toggle("is-active");
    mobileBtn.setAttribute("aria-expanded", !burger);
    mobileNav.classList.toggle("is-open");
    mobileDataNav.classList.toggle("is-open");
}