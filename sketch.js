
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	keyPressed
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  Paper=new paper (100,450,100);
    
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  Paper.display ();

}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(	PaperObject.body,PaperObject.body.position,{x:130,y:-145});
	}
	}
	

