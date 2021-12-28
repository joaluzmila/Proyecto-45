var huesoImg, perroImg, platoImg, sueloImg;
var hueso, perro, plato, suelo;
var backgroundImg;

function preload(){
  huesoImg = loadImage("hueso.png");
  platoImg = loadImage("plato.png");
  backgroundImg = loadImage("fondo1.jpg");
  perroImg = loadAnimation("perro1.png","perro2.png","perro3.png","perro4.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  perro = createSprite(width-150,800);
  perro.addAnimation("perro",perroImg);
  perro.velocityX = -3;

  hueso = createSprite(width-1800,500);
  hueso.addImage(huesoImg);
  hueso.scale = 0.2; 

  plato = createSprite(150,800);
  plato.addImage(platoImg);
  plato.scale = 0.1;
}


function draw(){

  background(backgroundImg);
  drawSprites();

}
