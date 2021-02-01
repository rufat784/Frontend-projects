// const list = document.getElementById("list");                    //JS style
// const input = document.getElementById("search");

// input.addEventListener("keyup", (e) => {
// 	const searchText = e.target.value.toUpperCase();
// 	let listItems = list.querySelectorAll("li");

// 	listItems.forEach((li) => {
// 		if (li.innerText.toUpperCase().includes(searchText)) {
// 			li.style.display = "";
// 		} else {
// 			li.style.display = "none";
// 		}
// 	});
// });


// $(document).ready(function () {                                         //jQuery style
//     $('#search').keyup(function () {
//       const searchText = $(this).val().toLowerCase();
//       $('#list li').filter(function () {
//         $(this).toggle($(this).text().toLowerCase().includes(searchText));
//       });
//     });
//   });