const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var box1;

function preload(){
    polygonimg=loadImage("polygon.png")
}



function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(370,380,40,40);
    box2 = new Box(410,380,40,40);
    box3 = new Box(450,380,40,40);
    box4 = new Box(490,380,40,40);
    box5 = new Box(530,380,40,40);
    box6 = new Box(570,380,40,40);
    box7 = new Box(610,380,40,40); 
    box8 = new Box(650,380,40,40);
    box9 = new Box(410,340,40,40);
    box10 = new Box(450,260,40,40);
    box11 = new Box(490,220,40,40);
    box12 = new Box(530,180,40,40);
    box13 = new Box(570,140,40,40);
    box14 = new Box(610,100,40,40);
    box15 = 
    

    ground=new Ground(500,400,400,20)
    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)
    slingshot=new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();  
    box8.display();
    fill("blue")
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    slingshot.display();

    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40)

    
    
   
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
