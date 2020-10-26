var car,wall;
var speed,weight;
var defor;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
  defor=0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
  collision();
  car.depth=1;
  wall.depth=0.4;
  drawSprites();
}

function collision(){
  if(wall.x-car.x<car.width/2+wall.width/2){
    deformation();
  }
}

function deformation(){
  if(defor<180 && defor>100){
    car.velocityX=0;
    car.shapeColor=color(230,230,0);
  }
  if(defor<100){
    car.velocityX=0;
    car.shapeColor=color(0,255,0);
  }
  if(defor>180){
    car.velocityX=0;
    car.shapeColor=color(255,0,0);
  }
}