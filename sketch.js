const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var ground, platform;
var polygon, slingshot;

function preload() {

}

function setup() {
    var canas = createCanvas(1100, 900);
    engine = Engine.create();
    world = engine.world;

    ground = new Platform(550, 900, width, 50);
    platform = new Platform(388, 263, 200, 15);

    block1 = new Block(330, 235, 30, 40);
    block2 = new Block(360, 235, 30, 40);
    block3 = new Block(390, 235, 30, 40);
    block4 = new Block(420, 235, 30, 40);
    block5 = new Block(450, 235, 30, 40);
    block6 = new Block(360, 195, 30, 40);
    block7 = new Block(390, 195, 30, 40);
    block8 = new Block(420, 195, 30, 40);
    block9 = new Block(390, 155, 30, 40);

    polygon = new Polygon(100, 240, 50, 50);

    slingshot = new Slingshot(polygon.body,{x:200, y:50});
}

function draw() {
    background(132, 85, 54);
    Engine.update(engine);

    ground.display();
    platform.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(polygon.body);
    }
}