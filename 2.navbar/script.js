const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

window.addEventListener("resize", () => links.classList.remove("show-links"));