const storeBtn = document.getElementById("store-btn");
const removeBtn = document.getElementById("remove-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
	
	setCookie("user", "John", {});
});

retrieveBtn.addEventListener("click", () => {
	
	getCookie("user");
});

removeBtn.addEventListener("click", () => {});











function getCookie(name) {
	let matches = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
	console.log("started setCookie", setCookie);

	options = {
		path: "/",
		// add other defaults here if necessary
		...options,
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie =
		encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
	console.log("ended setCookie", setCookie);
}

function deleteCookie(name) {
	setCookie(name, "", {
		"max-age": -1,
	});
}