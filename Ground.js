class Ground{
    constructor(){
        var options = {
            isStatic: true
        }

        this.ground = Bodies.rectangle(600,580,1200,20,options);
        this.width = 1200;
        this.height = 20;
        World.add(world, this.ground);
    }

    display(){
        var pos = this.ground.position;
        var angle = this.ground.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}