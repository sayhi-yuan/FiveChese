// gameStart.js
function InitCheseData(num){
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			cheseData[i][j] = num;
		}
	}
}


$(document).ready(function(){
	$(".startGame > span").click(function(){
		$(this).css({
			"background-color": "rgba(0, 163, 139, .8)",
			"color": "red",
		});

		$(".game").css({
			"display": "block"
		});

		playGame = true;

		$(".come").css({
			"display": "none"
		});
	});

	$(".restartGame > span").mousedown(function(){
		$(this).css({
			"background-color": "rgba(0, 163, 139, .8)",
			"color": "red"
		});
	});

	$(".restartGame > span").mouseup(function(){
		$(this).css({
			"background-color": "rgba(0, 163, 139, .2)",
			"color": "blue"
		});

		$(".word").css({
			"display": "none"
		});

		$(".game").css({
			"display": "block"
		});

		//重新初始化
		InitCheseData(0);
		redOrBlack = true;
		playGame = true;

		if(rotateChese){
			ctx.rotate(-Math.PI/9);			
		}
		ctx.putImageData(imageData, 0, 0);
		ctx.fillStyle = "#FFF";

	});
});