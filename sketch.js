
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

var leftSide,ground,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;


	

 var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
 }

 ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = new Ground(400,550,800,20)
  leftSide = new Ground(700,490,20,100)
 rightSide = new Ground(500,490,20,100)
}


function draw() {
background(0)


ground.show()
leftSide.show()
rightSide.show()

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
ellipse(ball.position.x, ball.position.y, 20)

	Engine.run(engine);


  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-50})
	}
}










