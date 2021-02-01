const navToggle = document.querySelector(".nav-toggle");
const logoandlinks = document.querySelector(".logoandlinks");

navToggle.addEventListener("click", () => {
	logoandlinks.classList.toggle("show-links");
});

window.addEventListener("resize", () => logoandlinks.classList.remove("show-links"));