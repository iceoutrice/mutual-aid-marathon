var darkeness = 0;
function darken() {
	darkeness += .01
	document.getElementById("darken").style.opacity = darkeness;
	if (darkeness < .6) {
		setTimeout(darken, 10);
	}
}

var lighteness = .6;
function lighten() {
	lighteness -= .01
	document.getElementById("darken").style.opacity = lighteness;
	if (lighteness > 0) {
		setTimeout(lighten, 10);
	}
}

var inness = 100;
function slide_sidebar_in() {
	inness -= 1;
	document.getElementById("sidebar").style.left = inness + "vw";
	if (inness > 40) {
		setTimeout(slide_sidebar_in, 10);
	}
}

var outness = 40;
function slide_sidebar_out() {
	outness += 1;
	document.getElementById("sidebar").style.left = outness + "vw";
	if (outness <= 100) {
		setTimeout(slide_sidebar_out, 10);
	}
}

function open_sidebar() {
	document.getElementById("hamburger").style.display = "none";
	document.getElementById("x-icon").style.display = "inline-block";

	darkeness = 0;
	document.getElementById("darken").style.display = "inline-block";
	darken();

	inness = 100;
	document.getElementById("sidebar").style.display = "inline-block";
	slide_sidebar_in();
}

function close_sidebar() {
	document.getElementById("hamburger").style.display = "inline-block";
	document.getElementById("x-icon").style.display = "none";

	lighteness = .6;
	setTimeout(function() {document.getElementById("darken").style.display = "none"}, 600);
	lighten();

	outness = 40;
	setTimeout(function() {document.getElementById("sidebar").style.display = "none"}, 600);
	slide_sidebar_out();
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("hamburger").onclick = open_sidebar;
	document.getElementById("x-icon").onclick = close_sidebar;
})