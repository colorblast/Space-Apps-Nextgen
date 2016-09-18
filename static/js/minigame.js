var lat, lng, category, loop;
var canvas, ctx, bgimg;
var count = 0;
var ob1, ob2;
var charX, charY;
var up = false, down = false, left = false, right = false;
var bgloaded = false;

function initGame(nlat, nlng, ncategory) {
	canvas = document.getElementById('minigameCanvas');
	ctx = canvas.getContext('2d');
	lat = nlat;
	lng = nlng;
	category = ncategory;

	charX = 250;
	charY = 250;
	
	$(function() {
		$.getJSON('https://api.nasa.gov/planetary/earth/imagery?lon='+lng+'&lat='+lat+'&date=2014-02-01&cloud_score=True&api_key=YiSsr6JNgEpcszd0LoaIWsR4yGEv4OqemQMkwOMm',function(data) {
			var bgurl = data['url'];
			bgimg = new Image;
			bgimg.src = bgurl;
            bgloaded = true;
		});
	});
	
	ob1 = {
		img: null,
		x: 100,
		y: 100,
		touch: false
	};
	ob2 = {
		img: null,
		x: 300,
		y: 350,
		touch: false
	};
	console.log("Wildfires " + category);
	if (category == "Wildfires") {
		ob1.img = new Image;
		ob1.img.src = '/img/fire.png';
		ob2.img = new Image;
		ob2.img.src = '/img/fire.png';
	}

	loop = setInterval(update, 17);
}

function update() {
	if (down) charY++;
    if (up) charY--;
    if (right) charX++;
    if (left) charX--;

	count++;
	if (count > 200) {
		clearInterval(loop);
		swal.enableButtons();
	}
	draw();
}

function draw() {
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, 512, 512);
	if(bgloaded) {
        ctx.drawImage(bgimg, 0, 0);
    }   
	if (!ob1.touch) ctx.drawImage(ob1.img, ob1.x, ob1.y, 100, 140);
	if (!ob2.touch) ctx.drawImage(ob2.img, ob2.x, ob2.y, 100, 140);
	ctx.fillRect(charX, charY, 20, 20);
}

function getkey(e) {
if ( window.event.keyCode == 37 ) {
	left = true;
}

if ( window.event.keyCode == 38 ) {
	up = true;
}

if ( window.event.keyCode == 39 ) {
	right = true;
}

if ( window.event.keyCode == 40 ) {
	down = true;
    console.log('down key pressed.')
}

console.log(charX + ", " + charY);
}
