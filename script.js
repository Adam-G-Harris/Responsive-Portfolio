window.onload = () => {

	AOS.init();
	resize();

	window.addEventListener('resize', resize, false);

	function resize() {
		let canvas = document.getElementById('canvas');
		let ctx = canvas.getContext('2d');
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
		canvas.style.width = document.body.clientWidth;
		canvas.style.height = document.body.clientHeight;
	}

};