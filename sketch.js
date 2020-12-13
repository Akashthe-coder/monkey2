var monkey,monkey1;
var jungle,jungle1;
var ground,invisibleGround;
var stoneGroup,stoneImage;
var bananasGroup,bananaImage;
var bananaEaten=0;
var score=0;

function preload() {

jungle1=loadImage("jungle.jpg");
monkey1=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stone.png");
}

function setup() {
  
  createCanvas(500,300);
  
  invisbleGround=createSprite(300,280,600,10);
  
  jungle=createSprite(300,-10,800,200);
  jungle.addAnimation("jungle",jungle1);
  jungle.scale=1;
  jungle.x=jungle.width/2;
  jungle.velocityX=-4;
  
  monkey=createSprite(100,270,20,20);
  monkey.addAnimation("monkey",monkey1);
  monkey.debug=true;
  monkey.scale=0.1;
  
  stroke("black");
  textSize(14);
  fill("white");

bananasGroup=new Group ();
stoneGroup=new Group();  
  
}

function draw() {
  background(220);
  
  //update the score and display it
  if(bananasGroup.isTouching(monkey)){
    score=score+2;
  }
  
  if (bananasGroup.isTouching(monkey)) {
    bananaEaten=bananaEaten+1;
  }
  
  if(keyDown("space") && monkey.y>=200) {
    monkey.velocityY = -18;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  
  monkey.collide(invisibleGround);
  
  switch(score) {
    case 10:monkey.scale=0.12;
      break;
      case 20:monkey.scale=0.14;
      break;
      case 30:monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      default:break;
  }
  
  if (stoneGroup.isTouching(monkey)){
    monkey.scale=0.1;
  }
  
  spawnStones();
  spawnBananas();
  
  drawSprites();
  text("Score:"+score,450,50);
  text("Banana(s) Eaten:"+bananaEaten,50,50);
}

function spawnStones () {
  if (frameCount%200===0) {
var stone=createSprite(600,250,20,20);
    stone.addImage(stoneImage);
    stone.setCollider("circle",0,0,200);
    stone.debug=true;
    stone.velocityX=-5;
    stone.lifeTime=110;
stone.scale=0.15;    
    stone.depth=jungle.depth;
    stone.depth=stone.depth+1;
    
    stoneGroup.add(stone);
    
      }
}