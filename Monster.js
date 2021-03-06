class Monster{
    constructor(x, y, radius) {
        var options = {
          //A  isStatic:true,
            density: 1,
            frictionAir: 0
            
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,0, 0, this.radius,this.radius);
        pop();
      }
}