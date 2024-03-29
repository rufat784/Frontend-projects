const apiURL = "https://api.lyrics.ovh";

const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");



function searchSongs(term) {              //inputa yazilan ad
    fetch(`${apiURL}/suggest/${term}`)
    .then((res) => res.json())
    .then((data) => {
        showData(data)
    })
	
}

function showData(data) {
	result.innerHTML = `
		<ul class="songs">
		${data.data
			.map(
				(song) =>`<li>
		    			 <span><strong>${song.artist.name}</strong> - ${song.title}</span>
		    			 <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
					    </li>`
			)
            .join("")}
        </ul>`

        if (data.next || data.prev) {
            more.innerHTML = `
                 ${data.prev ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`: ""}
                 ${data.next? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`: ""}`;
        } else {
            more.innerHTML = "";
        }
}

function getMoreSongs(url) {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			// console.log("data", data);
			showData(data);
		});
}
    


function getLyrics(artist, songTitle){
    fetch(`${apiURL}/v1/${artist}/${songTitle}`)
    .then((res) => res.json())
    .then((data) => {
        const lyrics = data.lyrics
            result.innerHTML = `
				<h1>${artist} - ${songTitle}</h1>
				<div style="white-space: pre-line">${lyrics}</div>
			`
        })
}







form.addEventListener("submit", (e) => {
	e.preventDefault();

	const searchTerm = search.value.trim();

	if (searchTerm) {
		searchSongs(searchTerm)
		
	} else {
		alert("Please type in a search term");
	}
});


result.addEventListener("click", (e) => {                           //event delegation
	const clickedEl = e.target;

	if (clickedEl.tagName === "BUTTON") {
		const artist = clickedEl.getAttribute("data-artist");
		const songTitle = clickedEl.getAttribute("data-songtitle");

		getLyrics(artist, songTitle);
	}
});