var tiger,tigerimage

function preload(){
 tigerimage=loadImage("Tiger.png");
}


function setup(){

  var Canvas=createCanvas(400,400);

  tiger=createSprite(200,200,80,80);
  tiger.addImage("animal",tigerimage);
  tiger.shapeColor="white";
  tiger.scale=0.10;
  
  
}

function draw(){
 background(2);
 
 if (keyWentDown(UP_ARROW)) {
   tiger.velocityY=6;
 }


 if (keyWentUp(UP_ARROW)) {
   tiger.velocityY=0;
 }
 
 if (keyWentDown(DOWN_ARROW)) {
   tiger.velocityY=-6;
 }

 if (keyWentUp(DOWN_ARROW)) {
   tiger.velocityY=0;
 }

 drawSprites();

}