const canvas = document.querySelector("#Field");
const ctx = canvas.getContext("2d");


var ship = {
    posX:500,
    posY:720,
    health:500,
}
class Bullet {
    constructor(x,y,v){                         // x/y/v - x - position, y - position v - velocity
        this.bPosX = x;
        this.bPosY = y;
        this.bVelo = v
        this.ctx = ctx;
        this.canvas = canvas;
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = "orange";
        ctx.clearRect(0,0,1000,1000);
        ctx.fillRect(this.bPosX,this.bPosY,10,30);
        this.bPosY-=this.bVelo;
    }
    
}


canvas.addEventListener("click",function(){
    new Bullet(ship.posX,ship.posY,2);
    
});
       

