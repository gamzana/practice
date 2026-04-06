let navbar;
let adBanner;
let product;
let gnb;
let aiIcon;
let grdGreen;
let textBox;

let state = 0;

function preload() {
  navbar = loadImage('01_NavBar.png');
  adBanner = loadImage('02_AdBanner.png');
  product = loadImage('03_Product.png');
  gnb = loadImage('04_GNB.png');
  aiIcon = loadImage('05_ai_icon.png');
  grdGreen = loadImage('06_green.png');
  textBox = loadImage('07_textbox.png');
}


function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(255);
  if(state==0){
    image(navbar,0,0,393,128);
    image(adBanner,0,128,393,284);
    image(product,0,412,393,440);
    image(gnb,0,764,393,88);
    image(aiIcon,320,688,60,60);
  }else if(state==1){
    image(navbar,0,0,393,128);
    image(adBanner,0,128,393,284);
    image(product,0,412,393,440);
    image(grdGreen,0,612,393,152);
    image(gnb,0,764,393,88);
    image(aiIcon,320,688,60,60);
  }
}

function mouseClicked(){
  if(mouseX>=320 && mouseX<=380){
    if(mouseY>=688 && mouseY<=748){
      if(state==0){
        state = 1;
      }else if (state ==1){
        state = 0;
      }
    }
  }
}