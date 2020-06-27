const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box=new Box(200,200,20,30 );

box1=new Box(300,300,20,20);

box2= new Box(100,10,20,20);

}



function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box1.display();
    box2.display();
}