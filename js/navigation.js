"use strict";

const toggleButton = document.getElementsByClassName("toggle-button")[0]; // Was bedeutet dass [0]?
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});