class Monster {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            restitution: 0.4,
            friction: 1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pro-35/monster.png");
        World.add(world, this.body);
    }
    
    display() {
        imageMode(CENTRE);
        this.image(this.image, 0, 0, this.width, this.height);
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    }

}