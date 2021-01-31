class Throw{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 13
        }
        this.pointB = pointB;
        this.throw = constraint.create(options);
        World.add(world, this.throw);
        
    }
      fly() {
          this.throw.bodyA = null;
      }
      launch(bodyA) {
          this.throw.bodyA = bodyA;
      }

  display() {
  }

}