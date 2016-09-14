// boolVictory.js
function DrawVic(flag){
	ctx.strokeStyle = "yellow";
	ctx.lineWidth = 4;
	ctx.textAlign = "center"
	ctx.font = "90px bold Arial";
	ctx.fillStyle = "yellow";
	ctx.beginPath();
	if(flag == 1){
		ctx.arc(75, 265, 60, 0, 2*Math.PI, false);	
		ctx.rotate(Math.PI/9);
		ctx.fillText("胜", 163, 253);
		rotateChese = true;
	}else{
		ctx.arc(725, 265, 60, 0, 2*Math.PI, false);
		ctx.rotate(Math.PI/9);
		ctx.fillText("胜", 772, 28);
		rotateChese = true;
	}
	ctx.stroke();
	ctx.closePath();
}

function CountNum(count, flag){
	if(count == 5){
		if(flag == 1){
			playGame = false;
			DrawVic(flag);
		}else{
			playGame = false;
			DrawVic(flag);
		}

		$(".game").css({
			"display": "none"
		});

		$(".word").css({
			"display": "block"
		});
	}
}

//cheseData
//x 为cheseData 左下标
//y 为cheseData 右下标

function BollVictory(x, y){
	var currentX = x;
	var currentY = y;
	var flag = cheseData[x][y];
	var count = 0;
	//横向
	for(var i=0; i<9; i++){
		if(cheseData[x][i] == flag){
			count++;
			CountNum(count, flag);
		}else{
			count = 0;
		}
	}

	//纵向
	for(var i=0; i<9; i++){
		if(cheseData[i][y] == flag){
			count++;
			CountNum(count, flag);
		}else{
			count = 0;
		}
	}

	//斜
	var index = 0;
	for(var i=4; i<9; i++){
		index = i;
		for(var j=0; index>=0; j++, index--){
			if(cheseData[index][j] == flag){
				count++;
				CountNum(count, flag);
			}else{
				count = 0;
			}
		}
	}

	for(var i=1; i<5; i++){
		index = i;
		for(var j=8; index<9; index++, j--){
			if(cheseData[index][j] == flag){
				count++;
				CountNum(count, flag);
			}else{
				count = 0;
			}
		}
	}

	//反斜
	for(var i=0; i<5; i++){
		index = i;
		for(var j=0; index<9; index++, j++){
			if(cheseData[index][j] == flag){
				count++;
				CountNum(count, flag);
			}else{
				count = 0;
			}
		}
	}

	for(var i=4; i<9; i++){
		index = i;
		for(var j=8; index>=0; j--, index--){
			if(cheseData[index][j] == flag){
				count++;
				CountNum(count, flag);
			}else{
				count = 0;
			}			
		}
	}
}