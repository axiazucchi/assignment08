var bgColor = 'yellow' ;

var h = 450;
var w = 450;
var k = 450;
var shake = 1;
var op = 255;
var op2 = 0;
var op3 = 0;

function preload() {
  
  kid1 = loadImage("./libraries/kid1.png");
  kid2 = loadImage("./libraries/kid2.png")
  kid3 = loadImage("./libraries/kid3.png")
  eye = loadImage("./libraries/eye.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  
  background(color('#8AFFC1'));

  
  for(var x=10; x<=windowWidth; x+=50) {
    for(var y=20; y<=windowHeight; y+=50) {
      
      fill(color('#FEFCAD'));
      noStroke();
      ellipse(x, y, 10, 10);
      
    }
  }
  
  imageMode(CENTER);
  image(kid2,width/2,height/2,450,450);
  
  push()
  tint(255,op);
  image(eye,width/2,height/2,450,h);
  pop();
  
  push()
  tint(255,op2);
  image(kid1,width/2,height/2,450,450);
  pop();
  
  push()
  tint(255,op3);
  image(kid3,width/2,height/2,w,k);
  pop();
  
  textAlign(CENTER);
  textSize(18);
  fill('black');
  text('shake phone to wake me up',width/2,height/2+300);
  
}



function deviceShaken() {
  h = h - 50;
  
  
  if ( h <= - 50 ) {
    
    op = 0;
    op2 = 255;
    
  } else {
    
    op=255;
    op2=0;
  }
  
  if ( h <= -80 ) {
    
    op3 = 255;
    k = 1800;
    w = 1800;
    
  } else {
    
    op3 = 0;
    k = 450
    w = 450;
  }
}