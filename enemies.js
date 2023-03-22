//enemy types and thier behaviour
//enemies resources will be there...if i don't fucking kill myself

//small ship
class smallShip {
    constructor(x,y,img,v,hp){
        this.x = x;
        this.y = y;
        this.img = img;
        this.velocity = v;
        this.hp = hp;
        this.width=50
        this.heigth=50
        //mass center
        this.PointOfHitDetX = (this.x+(this.width/2))
        this.PointOfHitDetY = (this.y + (this.heigth/2))
    }
    smallDraw(){
        ctx.beginPath();
        ctx.fillStyle = "red"
        ctx.fillRect(this.x,this.y,this.width,this.heigth)
    }
    smallHitDetection(){            //do hit detection
            if (r) {}
            
    }
    smallAi(){

    }
}
