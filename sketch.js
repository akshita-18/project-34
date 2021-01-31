const Engine = matter.Engine;
const World = Matter.World;
const Bodies = Matter.Body;
const constraint = Matter.constraint;

function preload() {
//preload the images here
backgroundImage = loadImage("pro-35/background.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

  engine = Engine.create();
  World = engine.World;

  ground = new Ground(200, 400, 600, 5);
  Superhero = new Superhero(400, 3, 100, 100);
  attach = new Throw (superhero.body,{X:100, Y:460});
  block1 = new Block(280,350,30,40);
  block2 = new Block(300,350,30,40);
  block3 = new Block(340,350,30,40);
  block4 = new Block(365,350,30,40);
  block5 = new Block(390,350,30,40);
  block6 = new Block(440,350,30,40);
  block7 = new Block(460,350,30,40);
  block8 = new Block(495,350,30,40);
  block9 = new Block(315,320,30,40);
  block10 = new Block(345,320,30,40);
  block11 = new Block(370,320,30,40);
  block12 = new Block(405,320,30,40);
  block13 = new Block(425,320,30,40);
  block14 = new Block(380,320,30,40);
  monster = new Monster(375,200,100,100);

  Engine.run(engine);

}

function draw() {
  background(backgroundImage);
  rectMode(CENTRE);

  superhero.display();
  fill(15);
  ground.display();
  stroke(12);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();
  
}
function mouseDragged() {
     Matter.body.setPosition(superhero.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
  attach.fly();
}

