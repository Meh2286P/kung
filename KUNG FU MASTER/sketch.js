var bgimg
var player,playerimg
function preload(){
 bgimg = loadImage ("bg.jpg")

 playerimg = loadImage ("standkungfu.png")
}

function setup(){
  createCanvas(600,200)
  
  player = createSprite(100,180,10,10);
  player.addImage("player",playerimg)


 
}

function draw(){
  background(bgimg);
 
  
drawSprites()
}
