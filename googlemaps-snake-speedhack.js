(function () {
	/* This game is using requestAnimationFrame so we can alter the game object to increase the delta between frames, this should trick the game into thinking that more time has passed than has actually passed */
	function increaseDelta() {
		Q.h = 1;
		window.requestAnimationFrame(increaseDelta);
	}
	window.requestAnimationFrame(increaseDelta);
})();
