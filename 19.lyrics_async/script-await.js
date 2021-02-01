const apiURL = "https://api.lyrics.ovh";

const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");



async function searchSongs(term) {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    showData(data);
};

  
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
};

async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();
    const lyrics = data.lyrics;
  
    result.innerHTML = `
                      <h1>${artist} - ${songTitle}</h1>
                      <div style="white-space: pre-line">${lyrics}</div>
                      `;
};


async function getMoreSongs(url) {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    const data = await res.json();
    console.log('data', data);
    showData(data);
};
    






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