const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
	sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
	sidebar.classList.remove("show-sidebar");
});

// !Bonus
document.addEventListener("click", (e) => {
	if (e.target.classList.value === "") {
		sidebar.classList.remove("show-sidebar");
	}
});