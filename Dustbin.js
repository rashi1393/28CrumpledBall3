class Bin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("bin.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        noStroke();
        fill("white");
        rect(0,0,this.width,this.height);
        pop();

        push();
        image(this.image,820,430,150,150);
        pop();
    }
}