
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boximage= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper(100,650,20)
ground=new Ground(600,680,1200,20);

	boxbody2= Bodies.rectangle(720,650,200,60,{isStatic:true});
	
  
  World.add(world, boxbody2);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  ground.display();
  imageMode(CENTER);

  image (boximage,boxbody2.position.x,boxbody2.position.y,200,100);
 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}



