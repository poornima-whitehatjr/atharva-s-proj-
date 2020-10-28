var bananaImage,obstacleImage,obstacleGroup,background2,backgroundImage,score, monkey, monkeyRunning, insvisibleground, bananaGroup

function preload(){
  backgroundImage = loadImage("jungle.jpg")
  
  monkeyRunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(600, 300);
  
  
  
  background2 = createSprite(300,150,10,10)
  background2.addImage("background",backgroundImage)
  background2.velocityX = -7
  background2.x = background2.width/2
  background2.scale = 1.2
  
  invisibleground = createSprite(300,295,600,5)
  invisibleground.visible = false
  
  monkey = createSprite(100,250,10,10)
  monkey.addAnimation("monkeyrunning",monkeyRunning)
  monkey.scale = 0.15
  
  obstacleGroup = new Group()
  bananaGroup = new Group()
  
  score = 0
}

function draw() {
  background(220);
  
 
  
  if(keyDown("space") && monkey.y >= 245){
    monkey.velocityY = -17 
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(invisibleground)

  
   if (background2.x < 0){
    background2.x = background2.width/2;
  }
  
  spawnobstacles()
  
  spawnBanana()
  
  if(monkey.isTouching(bananaGroup)){
    score = score+2
    bananaGroup.destroyEach()
  }
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale = 0.15
  }
  
  increaseMonkeyscalePer10Score()
  
  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
 text("score:- "+score,500,50)
}



function spawnobstacles(){
  if(frameCount % 80 ===0){
    var obstacle = createSprite(600,280,10,10)
    obstacle.addImage("stone",obstacleImage)
    obstacle.velocityX = -7
    obstacle.scale = 0.2
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 300
  }
}

function spawnBanana(){
  if(frameCount % 120 === 0){
    var banana = createSprite(600,Math.round(random(100,150)),10,10) 
    banana.addImage("banana",bananaImage)
    banana.velocityX = -5
    banana.scale = 0.1 
    banana.lifetime = 300
    bananaGroup.add(banana)
  }
}

function increaseMonkeyscalePer10Score(){
  switch(score){
    case 10: monkey.scale = 0.18
      break
    case 20: monkey.scale = 0.21
      break
    case 30: monkey.scale = 0.24
      break
    case 40: monke.scale= 0.27
  }
}
