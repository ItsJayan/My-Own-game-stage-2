var balloon,balloonImg;
var birdGroup
var background,backgroundImg;
var birdImage

function preload() {
  balloonImg = loadImage("balloon01.png");
  backgroundImg = loadImage("background.png");
  birdImage = loadAnimation("bird4.PNG","bird1.PNG","bird3.PNG","bird2.PNG")

}

function setup() {
  createCanvas(800,400);
  balloon = createSprite(250,100,20,20);
  balloon.addImage(balloonImg,"Balloon");
  balloon.scale = 0.3;
  
birdGroup = new Group ()

}

function draw() {
  background(backgroundImg,"Background"); 

  fill("black");
  text("Use Arrow Keys to move the Balloon!",10,30);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
    }
else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
    balloon.scale = 0.35;
}
else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
    balloon.scale = 0.25;
  }
spawnBirds();
  drawSprites();
}
function spawnBirds() {
  //write code here to spawn the birds
  if (frameCount % 60 === 0) {
     bird = createSprite(0,100,40,10);
    bird.y = Math.round(random(10,60));
    bird.addAnimation("bird",birdImage);
    bird.scale = 0.3;
    bird.velocityX = 3;
    
     //assign lifetime to the variable
    bird.lifetime = 300;
    
    
    //adding bird to the group
   birdGroup.add(bird);
    }
}







function changePosition(x,y){
  ball.x = ball.x + x;
  ball.y = ball.y + y;
}

function readValue(data) {
  position = data.val();

  ball.x = position.x;
  ball.y = position.y;

}

function showError() {
  console.log("Error in connecting to Database");
}

function writePosition(x,y) {
  database.ref('balloon/position').set({
      'x' : position.x + x,
      'y' : position.y + y,
  })    

}