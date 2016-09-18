var lat, lng, category, loop;
var canvas, ctx;
var count = 0;

function initGame(nlat, nlng, ncategory) {
	canvas = document.getElementById('minigameCanvas');
	ctx = canvas.getContext('2d');
	lat = nlat;
	lng = nlng;
	loop = setInterval(update, 17);
}

function update() {
	count++;
	if (count > 200) {
		clearInterval(loop);
		swal.enableButtons();
	}
	draw();
}

function draw() {
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(0, 0, 500, 500);
}
