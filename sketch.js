const Engine = Matter.Engine;
const World=Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground,hero,fly;
var block1 , block2 , block3 , block4 , block5 ,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var monster;
function preload() {
//preload the images here
backgroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine=Engine.create();
  world =engine.world
  ground = new Ground(600,400,1200,10);
  hero = new SuperHero(7,200,150);
  fly = new Fly(hero.body,{x:450, y:70});

  block1 = new Block (600,100,70,70);
  block2 = new Block (600,100,70,70);
  block3 = new Block (600,100,70,70);
  block4 = new Block (600,100,70,70);
  block5 = new Block (600,100,70,70);
  block6 = new Block (700,100,70,70);
  block7 = new Block (700,100,70,70);
  block8 = new Block (700,100,70,70);
  block9 = new Block (700,100,70,70);
  block10 = new Block (700,100,70,70);
  block11 = new Block (800,100,70,70);
  block12 = new Block (800,100,70,70);
  block13 = new Block (800,100,70,70);
  block14 = new Block (800,100,70,70);
  block15 = new Block (800,100,70,70);
  
  monster = new Monster(1000,100,200);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  monster.display();
}
function mouseDragged(){
  
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  
}

