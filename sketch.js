
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1,basket2,basket3,basket4,Endbasket,egg,base1,base2;


function preload()
{
	basket=loadImage("unnamed.png");
  backgroundimg=loadImage("1.webp")
  eggimg=loadImage("unnamed (1).png")
}

function setup() {
	createCanvas(800, 600);

 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base=createSprite(400,350,800,750)
	base.shapeColor="black";
  base.addImage(backgroundimg)
  base.scale=1.5
	base1=createSprite(200,600,1000,10);
	base2=createSprite(200,1,1000,1);
	egg=createSprite(100,100,30,30);
  egg.addImage(eggimg)
  egg.scale=0.1
   basket1=createSprite(200,300,60,80);
   basket1.velocityY=6
   basket1.addImage(basket);
   basket1.scale=0.2
   basket2=createSprite(300,300,60,80);
   basket2.velocityY=-8
   basket2.addImage(basket);
   basket2.scale=0.2
   basket3=createSprite(400,300,60,80);
   basket3.velocityY=10
   basket3.addImage(basket);
   basket3.scale=0.2
   basket4=createSprite(500,300,60,80);
   basket4.velocityY=-12
   basket4.addImage(basket);
   basket4.scale=0.2
   basket5=createSprite(100,100,60,80);
   basket5.addImage(basket);
   basket5.scale=0.2
   basket6=createSprite(650,100,1,1);
   basket6.addImage(basket);
   basket6.scale=0.3
   //basket6.debug=true
   basket6.setCollider("circle",0,0,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  createEdgeSprites();
 basket1.bounceOff(base1);
 basket2.bounceOff(base1);
 basket3.bounceOff(base1);
 basket4.bounceOff(base1);
 basket1.bounceOff(base2);
 basket2.bounceOff(base2);
 basket3.bounceOff(base2);
 basket4.bounceOff(base2);
 //laser2.bounceOff(edges);
  egg.display();
  
if(keyDown(RIGHT_ARROW)){
  egg.x= egg.x+4
}
egg.y=egg.y+4
if(keyDown(UP_ARROW)){
  egg.y= egg.y-12
  
}
  if(egg.isTouching(basket1)){
    egg.y=basket1.y
  }
  if(egg.isTouching(basket2)){
    egg.y=basket2.y
  }
  if(egg.isTouching(basket3)){
    egg.y=basket3.y
  }
  if(egg.isTouching(basket4)){
    egg.y=basket4.y
  }
  if(egg.isTouching(basket5)){
    egg.y=basket5.y
  }
  

  drawSprites();

  if(egg.isTouching(basket6)){
    egg.y=basket6.y
    textSize(30)
    fill ("yellow")
    text ("YOU WIN ",300,300)
  }
  
}



