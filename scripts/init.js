// init.js
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
ctx.fillStyle = "#FFF";

var playGame = false;

var redOrBlack = true;//true is 白色, false is black;

var rotateChese = false;

// init cheseData
var cheseData = new Array();
for(var i=0; i<9; i++){
	cheseData[i] = new Array();
	for(var j=0; j<9; j++){
		cheseData[i][j] = 0;
	}
}

// draw checkerborard
for(var row=0; row <=10; row++){
	ctx.beginPath();
	ctx.moveTo(150, 50+50*row);
	ctx.lineTo(650, 50+50*row);
	ctx.stroke();
	ctx.closePath();
}

for(var col=0; col <=10; col++){
	ctx.beginPath();
	ctx.moveTo(150+50*col, 50);
	ctx.lineTo(150+50*col, 550);
	ctx.stroke();
	ctx.closePath();
}


ctx.textAlign = "center";
ctx.font = "65px bold Arial";
ctx.fillText("白", 75, 250);
ctx.fillText("方", 75, 350);

ctx.fillStyle = "black";
ctx.fillText("黑", 725, 250);
ctx.fillText("方", 725, 350);

ctx.font = "35px bold Arial";
ctx.fillText("五    子    棋", 400, 35);

var imageData = ctx.getImageData(0, 0, 800, 600);
//归位白色
ctx.fillStyle = "#FFF";



