var paper1
var DustBinSide1,DustBinSide2
var DustBinBottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1= new Paper(200,200,10)
	paper1.density=1
	DustBinSide1= new DustbinSide(600,250,20,100)
	DustBinSide1.density=1
	DustBinSide2= new DustbinSide(720,250,20,100)
	DustBinSide2.density=1
	DustBinBottom= new Dustbinbottom(660,300,130,20)
	Dustbinbottom=1
	ground=new Ground(400,675,800,20)
	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background(0);
  paper1.display()
  DustBinSide1.display()
  DustBinSide2.display()
  DustBinBottom.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
			 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-30});
		 }
	 }



