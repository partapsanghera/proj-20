var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  
  car=createSprite(100, 200, 50, 50);
  car.shapeColor=color("white");
  car.velocityX=speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("black"); 

  if(wall.x - car.x < (car.width+wall.width/2)) {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180) {
      car.shapeColor=color(255,0,0);
      fill("white");
      textSize(18);
      text("Deformation is greater than 180", 650, 200);
    }

    if(deformation<180 && deformation>100) {
      car.shapeColor=color(230,230,0);
      fill("white");
      textSize(18);
      text("Deformation is less than 180 but greater than 100", 650, 200);
    }

    if(deformation<100) {
      car.shapeColor=color(0,255,0);
      fill("white");
      textSize(18);
      text("Deformation is less than 100", 650, 200);
    }
  }
  drawSprites();
}