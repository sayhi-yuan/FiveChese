// drawPiect.js
function DrawPiece(x, y){
	ctx.beginPath();
	ctx.arc(x, y, 25, 0, 2*Math.PI, false);
	ctx.fill();
	ctx.closePath();
}