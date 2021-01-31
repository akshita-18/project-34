class Superhero {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
        restitutions: 0,
        friction: 1,
        density: 1.0

    }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("pro-35/hero.png");
     world.add(world. this.body);
    
}
    display() {
    var angle =this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTRE);
    this.image(this.image, 0, 0, this.width, this.height);
    pop();
    } 
}