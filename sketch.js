const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
    ellipseMode(RADIUS);
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
    
	roof = Bodies.rectangle(400,200,230,20,roof_options);
	var bob_options={
		isStatic:false
	}
	bob1 = Bodies.circle(300,500,25,bob_options);
	bob2 = Bodies.circle(350,500,25,bob_options);
	bob3 = Bodies.circle(400,500,25,bob_options);
	bob4 = Bodies.circle(450,500,25,bob_options);
	bob5 = Bodies.circle(500,500,25,bob_options);
	World.add(world,roof);
    World.add(world,bob1);
	World.add(world,bob2);
	World.add(world,bob3);
	World.add(world,bob4);
	World.add(world,bob5);
	rope1 = new Rope(bob1,roof,-100,0);
	rope2 = new Rope(bob2,roof,-50,0);
	rope3 = new Rope(bob3,roof,0,0);
	rope4 = new Rope(bob4,roof,50,0);
	rope5 = new Rope(bob5,roof,100,0);
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  stroke(2);
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,25);
  ellipse(bob2.position.x,bob2.position.y,25);
  ellipse(bob3.position.x,bob3.position.y,25);
  ellipse(bob4.position.x,bob4.position.y,25);
  ellipse(bob5.position.x,bob5.position.y,25);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if (keyCode === 32){
	Matter.Body.applyForce(bob1,bob1.position,{x:-1000,y:-1000});
  }
}