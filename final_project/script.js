const navToggle = document.querySelector(".nav-toggle");
const arrow = document.querySelector(".arrow");
const navToggle1 = document.querySelector(".nav-toggle1");
const arrow1 = document.querySelector(".arrow1");

navToggle.addEventListener("click", () => {
    arrow.classList.toggle("show-links");
	arrow1.classList.remove("show-links");
    
});
navToggle1.addEventListener("click", () => {
    arrow1.classList.toggle("show-links");
	arrow.classList.remove("show-links");
    
});
document.addEventListener("click", (e) => {
	if (e.target.classList.value === "") {
		arrow.classList.remove("show-links");
	}
});
document.addEventListener("click", (e) => {
	if (e.target.classList.value === "") {
		arrow1.classList.remove("show-links");
	}
});

$(document).ready(function(){
    $(".scroll-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});


     //nav
const navbtn = document.querySelector(".navbtn");
const links = document.querySelector(".mobile_nav_links");

navbtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

window.addEventListener("resize", () => links.classList.remove("show-links"));


   //slider
let slideIndex=1;
showImage(slideIndex);

function plusIndex(n){
	showImage(slideIndex+=n);
}
function showImage(n){
	let slide=document.getElementsByClassName("slides");

	if(n>slide.length){
		slideIndex=1
	};
	if(n<1){
		slideIndex=slide.length
	};
	for(let i=0; i<slide.length; i++){
		slide[i].style.display="none";
	};
	slide[slideIndex-1].style.display="block";
}


