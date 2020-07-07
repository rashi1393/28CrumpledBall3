const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bin1,bin2,bin3,paper;
var launcher;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //creating ground
    ground = new Ground();
    bin1 = new Bin(815,500,20,140);
    //bin2 = new Bin(910,560,200,20);
    bin3 = new Bin(975,500,20,140);
    paper = new Paper(100,100,28);

    launcher = new Launcher(paper.body, {x:200, y: 200})
}

function draw(){
    background(255);
    Engine.update(engine);
    
    ground.display();
    bin1.display();
    //bin2.display();
    bin3.display();
    paper.display();
    launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}