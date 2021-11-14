
var gameState;
var LOAD = 0;
var PLAY = 1;
var END = 1;

//Gamestate "0" Variables
var loadSCR, backImg;
var playBTN, playImg;

//Gamestate "1" Variables
var survivor, monster ,villager;
var survivorImg, survivo9rImg1, survivorImg2, survivorImg3, survivorImg4, monsterImg , villagerImg;
var ground, groundImg;


function preload(){
   backImg = loadImage("Images/loadSCR.jpg"); 
   playImg = loadImage("Images/playBTN.png");
   groundImg = loadImage("Images/ground.png");
   survivorImg = loadImage("Images/survivorRUN1.png")

   survivorImg1 = loadAnimation("Images/survivorRUN1.png","Images/survivorRUN2.png","Images/survivorRUN3.png");
   survivorImg2 = loadAnimation("Images/survivorRUN4.png","Images/survivorRUN5.png","Images/survivorRUN6.png");
   survivorImg3 = loadAnimation("Images/survivorRUN7.png","Images/survivorRUN8.png","Images/survivorRUN9.png");
   survivorImg4 = loadAnimation("Images/survivorRUN10.png","Images/survivorRUN11.png","Images/survivorRUN12.png");

}

function setup() {
  createCanvas(1400,800);

  loadSCR = createSprite(683,400,500,500);
    loadSCR.addImage("loading",backImg);
     
  playBTN = createSprite(683,500,600,80);
    playBTN.addImage("playBTN",playImg);
    playBTN.scale = 9;
   
  ground = createSprite(700,400,10,10);
    ground.addImage("ground",groundImg);
    ground.scale = 3.9;   
       ground.visible = false;
          
  survivor = createSprite(700,400,10,10);
    survivor.visible = false;
    survivor.addImage("standing",survivorImg);
    survivor.addAnimation("leftrun",survivorImg2);
    survivor.addAnimation("downrun",survivorImg1);
    survivor.addAnimation("uprun",survivorImg3);
    survivor.addAnimation("rightrun",survivorImg4);
      survivor.scale = 2.5;
  
}
function draw() {
  background("green"); 
  
  if(frameCount % 60 === 0){
    ground.x = ground.width/2;
    ground.y = ground.width/2;
  }

   if(gameState === LOAD ){
     playBTN.visible = true;
     loadSCR.visible = true;
   } 

   if(gameState === PLAY ){
      ground.visible = true
      survivor.visible = true
  }

  if(mousePressedOver(playBTN)){
   gameState = PLAY;
   playBTN.visible = false;
   loadSCR.visible = false;
  }

 
  
 
  drawSprites();
}


      
  








