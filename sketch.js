var balloon, balloonImg1;
var database
function preload(){
bg = loadImage("Image/cityImage.png")
balloonImg1 = loadAnimation("Image/HotAirBallon-01.png")
}
function setup() {
  createCanvas(1500,700);
  database = firebase.database()

  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("hotAirBalloon", balloonImg1)
  balloon.scale=0.5
  var balloonposition=database.ref('balloon/position')
  balloonposition.on("value",readPosition)
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    WritePosition(-1,0)
  }

  if(keyDown(RIGHT_ARROW)){
    WritePosition(1,0)
  }

  if(keyDown(UP_ARROW)){
    WritePosition(0,-1)
  }

  if(keyDown(DOWN_ARROW)){
    WritePosition(0,1) 
  }
  drawSprites();
}
function WritePosition(x,y){
  database.ref("balloon/position").set({
    "x": position.x+x,
    "y": position.y+y
})

}
function readPosition(data){
  position = data.val()
  balloon.x = position.x;
  balloon.y = position.y;
  
  }
  