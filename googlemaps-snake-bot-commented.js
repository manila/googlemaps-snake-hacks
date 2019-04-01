(function () {
	/* Keep track of positions as the board is checked more often than it is drawn */
	oldPosX = Q.b.o.b[0].b.x;
	oldPosY = Q.b.o.b[0].b.y;

	/* Move snake */
	function moveSnake() {
		/* Get current snake (head) position */
		curPosX = Q.b.o.b[0].b.x;
		curPosY = Q.b.o.b[0].b.y;

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
					Q.s({key: "Up"});
					console.log("Going Up");
				}
				else
				{
					Q.s({key: "Down"});
					console.log("Going Down");
				}


				/* If snake gets to top or one up from the bottom of the grid turn right */
				if ((curPosY == 18 && curPosX % 2 !== 0 && curPosX != 19) || (curPosY == 0 && curPosX % 2 == 0)) {
					Q.s({key: "Right"});
					console.log("Turn Right");
				}
			}

			if (curPosX == 19 && curPosY == 19) {
				Q.s({key: "Left"});
				console.log("Turn Left");
			} else if (curPosX == 0 && curPosY == 19) {
				Q.s({key: "Up"});
				console.log("Turn Right");
			}
	
			console.log("Snake Position X:" + curPosX + " Y:" + curPosY);
		}
		window.requestAnimationFrame(moveSnake);
	};
	window.requestAnimationFrame(moveSnake);
})();
