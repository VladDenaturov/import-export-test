import player1 from ".\player.js"






const canvas = document.querySelector("#Field");
const ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "destination-over"

function gameLoop(){
ctx.clearRect(0,0,1000,1000);
    player1.playerDraw()


 p1 = requesAnimationFrame(gameLoop);
}
gameLoop();










