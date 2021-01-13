
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage ("spter/boy.png");
}

function setup() {
	createCanvas(1200,400);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,390,6000,5)
	boy = new Boy(300,300,5,5,boy)
	tree = new Tree(1000,300,0,0)
    stone = new stone(200,100,5,5)
    slingShot = new Slingshot(stone.body,{x:200, y:50});
    mongo = new Mongo(1000,-100,50,50);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  ground.display();
  boy.display();
  tree.display();
  stone.display();
  mongo.display();
  slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}


function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(stone.body);
    }
}