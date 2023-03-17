

function showShare() {
	document.getElementById("div-share").style.visibility = "visible";
	document.getElementById("div-rotate").style.visibility = "visible";
	document.getElementById("div-right").style.backgroundColor = "hsl(214, 17%, 51%)";
	document.getElementById("img-share").style.filter = "brightness(1000%)";
}

function hiddenShare() {
	document.getElementById("div-share").style.visibility = "hidden";
	document.getElementById("div-rotate").style.visibility = "hidden";
}

function changeArrow() {
	document.getElementById("div-right").style.backgroundColor = "hsl(210, 46%, 95%)";
	document.getElementById("img-share").style.filter = "brightness(100%)";
}



document.getElementById("div-right").addEventListener("mouseover", showShare);

document.getElementById("main").addEventListener("click",  hiddenShare );

document.getElementById("div-right").addEventListener("mouseout",  changeArrow );