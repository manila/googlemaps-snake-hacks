(function () {
	let gameObj = R;
	/* Keep track of positions as the board is checked more often than it is drawn */
	/* The Q.b.o.b[0].b Object is where the snake data is stored, this is obsfucated by Google */
	oldPosX = gameObj.b.o.b[0].b.x;
	oldPosY = gameObj.b.o.b[0].b.y;

	/* Move snake */
	function moveSnake() {
		/* Get current snake (head) position */
		curPosX = gameObj.b.o.b[0].b.x;
		curPosY = gameObj.b.o.b[0].b.y;

		/* Check if snake has moved since we checked it's position last */
		if (oldPosX !== curPosX || oldPosY !== curPosY)
		{
			/* Update last checked position of snake */
			oldPosX = curPosX;
			oldPosY = curPosY;

			/* Check if snake is anywhere but the last row */
			if (curPosY < 19 && curPosX < 20)
			{
				/* Move snake up in every even column, down in every odd column */
				if (curPosX % 2 == 0)
				{
					/* The Q.s() function is called by a keydown event listener, this is obsfucated by Google */
					gameObj.s({key: "Up"});
					console.log("Going Up");
				}
				else
				{
					gameObj.s({key: "Down"});
					console.log("Going Down");
				}


				/* If snake gets to top or one up from the bottom of the grid turn right */
				if ((curPosY == 18 && curPosX % 2 !== 0 && curPosX != 19) || (curPosY == 0 && curPosX % 2 == 0)) {
					gameObj.s({key: "Right"});
					console.log("Turn Right");
				}
			}

			/* This handles the snake navigation in the bottom row of the board */
			if (curPosX == 19 && curPosY == 19) {
				gameObj.s({key: "Left"});
				console.log("Turn Left");
			} else if (curPosX == 0 && curPosY == 19) {
				gameObj.s({key: "Up"});
				console.log("Turn Right");
			}
	
			console.log("Snake Position X:" + curPosX + " Y:" + curPosY);
		}
		window.requestAnimationFrame(moveSnake);
	};
	window.requestAnimationFrame(moveSnake);
})();
