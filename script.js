window.onload = () => {

	AOS.init();

	// // Global variables

	// let canvas = document.getElementById('canvas'),
	// 	ctx = canvas.getContext('2d'),
	// 	activeOrbs = [];

	// // Orb constructor function

	// function Orb(x, y, r, xV, yV) {
	// 	this.x = x;
	// 	this.y = y;
	// 	this.r = r;
	// 	this.xV = xV;
	// 	this.yV = yV;
	// }

	// // Creating orb positions

	// function makeOrbs() {
	// 	let r, x, y, orb, xVelocity, yVelocity;
	// 	for (let i = 0; i < 100; i++) {
	// 		r = randomInt(10, 20);
	// 		x = randomInt(r, document.body.clientWidth - r);
	// 		y = randomInt(r, document.body.clientHeight - r);
	// 		xVelocity = randomInt(-2, 2);
	// 		yVelocity = randomInt(-2, 2);
	// 		if (i === 0) {
	// 			orb = new Orb(x, y, r, xVelocity, yVelocity);
	// 			activeOrbs.push(orb);
	// 		} else {
	// 			activeOrbs.forEach(item => {
	// 				if (getDistance(x, y, item.x, item.y) < (r + item.r)) {
	// 					console.log('They touching!');
	// 				} else {
	// 					; (function temp() {
	// 						if (getDistance(x, y, item.x, item.y) > (r + item.r + 300)) {
	// 							console.log('< 300')
	// 						} else {
	// 							console.log('> 300')
	// 						}
	// 					})();
	// 					//console.log(getDistance(x, y, item.x, item.y));
	// 				}
	// 			});
	// 		}
	// 	}
	// }

	// // Object prototypes

	// Orb.prototype.update = function () {
	// 	this.draw();
	// }

	// Orb.prototype.draw = function () {
	// 	ctx.beginPath();
	// 	ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
	// 	ctx.closePath();
	// 	ctx.stroke();
	// }

	// // Scales size based on pixel aspect ratio

	// function resize() {
	// 	let sizeX = document.body.clientWidth;
	// 	let sizeY = document.body.clientHeight;
	// 	canvas.style.width = `${sizeX}px`;
	// 	canvas.style.height = `${sizeY}px`;
	// 	let scale = window.devicePixelRatio || 1;
	// 	canvas.width = sizeX * scale;
	// 	canvas.height = sizeY * scale;
	// 	ctx.scale(scale, scale);
	// }

	// // Checking the distance between two arguments

	// function getDistance(x1, y1, x2, y2) {
	// 	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	// }

	// // Returns a random integer between 2 arguments

	// function randomInt(min, max) {
	// 	return Math.floor(Math.random() * (max - min) + min);
	// }

	// // Canvas loop

	// function loop() {
	// 	window.requestAnimationFrame(loop);
	// 	ctx.clearRect(0, 0, document.body.clientWidth, document.body.clientHeight);
	// 	activeOrbs.forEach(orb => {
	// 		orb.update();
	// 	});
	// }

	// // Starts all animations on window load

	// function init() {
	// 	window.addEventListener('resize', resize, false);
	// 	resize(); // Resizes canvas based on aspect ratio
	// 	makeOrbs(); // Creates properties for x number of orbs
	// 	loop(); // Clears canvas each frame & calls update function
	// }

	// init();

};