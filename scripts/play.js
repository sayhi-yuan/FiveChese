// click.js

myCanvas.onclick = function(event){
	if(playGame){
		//array x y
		arrayX = parseInt((event.clientX-this.offsetLeft-175)/50);
		arrayY = parseInt((event.clientY-this.offsetTop-75)/50);

		//落子圆心
		canvasX = 200+50*arrayX;
		canvasY = 100+50*arrayY;

		// alert(canvasX+":"+canvasY);
		//draw arc
		if(cheseData[arrayY][arrayX]==0){
			DrawPiece(canvasX, canvasY);
			
			if(redOrBlack){
				ctx.fillStyle = "#000";
				cheseData[arrayY][arrayX] = 1;
				redOrBlack = false;
			}else{
				ctx.fillStyle = "#FFF";
				cheseData[arrayY][arrayX] = 2;
				redOrBlack = true;
			}

			BollVictory(arrayY, arrayX);
		}
	}
}