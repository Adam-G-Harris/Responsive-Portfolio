window.onload = () => {

	// Global variables

	let canvasContainer = document.getElementById('canvas-container'),
		canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		maxNumberOfOrbs = 10,
		activeOrbs = [new Orb(100, 100, 50)];

	// Orb constructor function

	function Orb(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = 1.1;
	}

	// Object prototypes

	Orb.prototype.update = function () {
		this.draw();
	};

	Orb.prototype.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		ctx.closePath();
		ctx.stroke();
	}

	// Canvas loop

	function loop() {
		window.requestAnimationFrame(loop);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		activeOrbs.forEach(orb => {
			orb.update();
		});
	}

	window.requestAnimationFrame(loop);

	// Canvas pixel aspect ratio handler
	// Without it, the canvas would look blurry on retina displays

	window.addEventListener('resize', resize, false);

	function resize() {
		alert('resize');
		let sizeX = document.body.clientWidth;
		let sizeY = document.body.clientHeight;
		canvas.style.width = `${sizeX}px`;
		canvas.style.height = `${sizeY}px`;
		let scale = window.devicePixelRatio;
		canvas.width = sizeX * scale;
		canvas.height = sizeY * scale;
		ctx.scale(scale, scale);
	}

	resize();

	// Initializing CSS on-scroll transitions

	AOS.init();

};