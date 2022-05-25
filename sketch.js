
var car
var carsGroup
var riveImg
var score =0

function preload() {
  f1car1 = loadImage("f1car1.png");
  f1car2 = loadImage("f1car2.png");
  f1car3 = loadImage("f1car3.png");
  f1car4 = loadImage("f1car4.png");
  f1car5 = loadImage("f1car5.png");
  road = loadImage("road.jpg");
  gameOverimg=loadImage("gameOver.jpg")
  riveImg=loadImage("download.png")
  boomImg=loadImage("boom.png")
  coinImg = loadImage("coin.png");

  endImg= loadImage("endrod.jpg")
  win= loadImage("win.png")
  winsound=loadSound("JKL83NH-video-game-win.mp3")
}
function setup() {
  createCanvas(800,800);
   
   
   road_img = createSprite(200,800);
   road_img.addImage(road);
   road_img.scale = 1

   f1_car1 = createSprite(250,750);
   f1_car1.addImage(f1car1);
   f1_car1.scale= 0.8
   f1_car1.setCollider("rectangle",0,0,50,60)
   f1_car1.debug=true
  
    gameOver=createSprite(400,400)
    gameOver.addImage(gameOverimg)
    gameOver.visible= false


    boom= createSprite(400,400)
    boom.addImage(boomImg)
    boom.visible=false
    boom.scale=0.5

    end= createSprite(200,85)
    end.addImage(endImg)
    end.scale=0.2
    end.visible= true

    winImg=createSprite(200,85)
    winImg.addImage(win)
    winImg.visible=false

  carsGroup= new Group()
  coinsGroup= new Group()

}




function draw() {
  background(riveImg);  
  fill("black")
   textSize(30)
   text("SCORE:-"+score,550,100)

  spawncars();
   
  if(keyWentDown(LEFT_ARROW)){
    f1_car1.velocityX = -2

  }
     
  if(keyWentUp(LEFT_ARROW)){
    f1_car1.velocityX = 0

  }
   if(keyWentDown(RIGHT_ARROW)){
     f1_car1.velocityX = 5
   }
   if(keyWentUp(RIGHT_ARROW)){
    f1_car1.velocityX = 0

  }
  
   if (keyWentDown(UP_ARROW)) {
     f1_car1.velocityY = -5

  }
   if(keyWentUp(UP_ARROW)){
    f1_car1.velocityY = 0

  }

   if(keyDown(DOWN_ARROW)){
     f1_car1.velocityY = 5
   }
  
     
    if(f1_car1.x<10){
      carsGroup.destroyEach()
      gameOver.visible=true
      road_img.visible=false
      

    }

    if(f1_car1.x>400){
      carsGroup.destroyEach()
      gameOver.visible=true
      road_img.visible=false
      boom.x=f1_car1.x
      boom.y=f1_car1.y
      f1_car1.velocityX=0
      f1_car1.velocityY=0
      

      boom.visible=true
      

    }

    if (f1_car1.isTouching(carsGroup)){
        f1_car1.velocityX=0
        f1_car1.velocityY=0

      f1_car1.addImage(boomImg)
      gameOver.visible=true
      end.visible= false




    }
       spawncoin()

   
    
   
    drawSprites();

    if(f1_car1.y<100){
      winImg.visible=true
      
       f1_car1.velocityX=0
       f1_car1.velocityY=0
       carsGroup.destroyEach()
       winsound.play()
 
       
     }

     if(f1_car1.isTouching(coinsGroup)){
      score=score+5
      coinsGroup.destroyEach()

    }
   




}

function spawncars(){
  if(frameCount%60===0){
   car = createSprite(100,700)
   car.x=Math.round(random(10,150))
   car.velocityY = -5
   car.scale = 0.4
   car.lifetime = 200
   var rand = Math.round(random(1,4))
   switch(rand){
   case 1: car.addImage(f1car2)
    break;
    case 2: car.addImage(f1car2)
     break;
     case 3: car.addImage(f1car3)
      break;
      case 4: car.addImage(f1car4)
      break;
      
       default:break
       
   }

car.depth=road_img.depth
carsGroup.add(car)



   

   }
  }
  function spawncoin(){
    if (frameCount%50===0){
    coin= createSprite(10,500)
    coin.velocityY=-1
      
    coin.addImage(coinImg)
    coin.scale=0.09
    //coin.y = Math.round(random(10,300))
    coin.x = Math.round(random(10,300))
    coinsGroup.add(coin)
    }
  
  }






