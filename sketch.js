var tis,thisImage;


function preload(){

  thisImage = loadImage("play.png");

}



function setup(){
createCanvas(400,800);


tis = createSprite(200,300);
tis.addImage(thisImage);
tis.scale = 0.5;

}


function draw(){

background("white");

text("text will come here",200,200);

if(mousePressedOver(tis)){
    textSize(25);
    text("done",200,600);
}


drawSprites();

}