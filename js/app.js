"use strict";
/*variables */
const form = document.querySelector("form");
const header = document.getElementById("head");
let timer;
let path = window.location.pathname.split("/");
class Settings {
	constructor(options) {
		this.title = options.title,
		this.endTime = options.endTime,
		this.message = options.message
	}
	getLeftTime(endTime) {
		return (endTime.getTime() - Date.now());
	}
};

function getIndexPage() {
	if(path[path.indexOf("index.html")] === "index.html") {
		return;
	} else {
		window.location = "index.html";
	}
}
if(!window.localStorage.settings) {
	if(path[path.indexOf("settings.html")] !== "settings.html") {
		window.location = "settings.html";
	} else {
		if(form) {
			form.addEventListener("submit", function(event) {
				event.preventDefault();
				let options = {};
				options.title = document.querySelector("#title").value;
				options.message = document.querySelector("#message").value;
				let date = document.querySelector("#date").value.split("-").join("/");
				let time = document.querySelector("#time").value.split(".").join(":")+":00";
				options.endTime = new Date(date + " " + time);
				let settings = new Settings(options);
				window.localStorage.setItem("settings", JSON.stringify(settings));
				getIndexPage();
			});
		}
	}
} else {
	const settings = new Settings(JSON.parse(window.localStorage.getItem("settings")));
	header.innerHTML = settings.title;
	let endTime = new Date(settings.endTime);
	let difference = settings.getLeftTime(endTime);
	timer = setInterval(displayLeftTime, 1000, settings);
	function displayLeftTime(settings) {
		let endTime = new Date(settings.endTime);
		if(difference <= 0) {
			clearInterval(timer);
			holidayMessage(settings);
		} else {
			var seconds = Math.floor(difference / 1000);
    		var minutes = Math.floor(seconds / 60);
    		var hours = Math.floor(minutes / 60);
    		var days = Math.floor(hours / 24);

    		hours %= 24;
    		minutes %= 60;
    		seconds %= 60;

    		document.getElementById("days").innerHTML = days;
    		document.getElementById("hours").innerHTML = hours;
    		document.getElementById("minutes").innerHTML = minutes;
    		document.getElementById("seconds").innerHTML = seconds;
    		difference = settings.getLeftTime(endTime);
		}
	}
	function holidayMessage(settings) {
		window.location = "message.html";
		header.innerHTML = settings.message;
		setTimeout(function() {
			window.localStorage.clear();
			header.innerHTML = "Set settings options";
			window.location = "settings.html";
		}, 30000);
	}
}
