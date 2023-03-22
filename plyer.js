class player {
    constructor(x,y,img,v,hp){
            this.x = x
            this.y = y
            this.img = img
            this.velocity = v
            this.hp = hp
            this.width = 50
            this.heigth = 50
            //player mass center
        this.PointOfHitDetX = (this.x+(this.width/2))
        this.PointOfHitDetY = (this.y + (this.heigth/2))
    }

    playerDraw(){
        ctx.fillStyle = "black"
       ctx.fillRect(this.x,this.y,this.width,this.heigth)
    }


}


export var player1 = new player(50,50,10,3,500);
