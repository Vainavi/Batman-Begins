var thunderbolt, walking;
var drops = []
var maxDrops = 100;

function preload(){
  thunderbolt1 = loadImage("images/thunderbolt/1.png");
  thunderbolt2 = loadImage("images/thunderbolt/2.png");
  thunderbolt3 = loadImage("images/thunderbolt/3.png");
  thunderbolt4 = loadImage("images/thunderbolt/4.png");

  //walking = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","imagesWalking Frame//walking_8.png");
    
}

function setup(){
 canvas = createCanvas(1200, 400);


 for (var i = 0; i<maxDrops; i++){
     drops.push(new createDrop(random(0, 400), random(0, 400)));
 }
    
}

function draw(){
    
    
}   

