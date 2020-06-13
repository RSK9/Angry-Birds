const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;
var box3;
var box4, pig2;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
pig = new Pig(250,300, 50, 50);
    box1 = new Box(200,300,50,50);
    box2 = new Box(300,300,50,50);
    ground = new Ground(200,height,400,20)
    log = new Log(255,260,180,PI/2);
    box3 = new Box(210,280, 50,50);
    box4 = new Box(290, 280, 50, 50);
    pig2 = new Pig(250,280,50,50);
    box5 = new Box(250, 250, 50,50);
    log2 = new Log(225, 250, 100, PI/6)
    log3 = new Log(275, 250, 100, -PI/6)
    log4 = new Log(255, 290, 180, PI/2)
    bird = new Bird(50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    pig2.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}