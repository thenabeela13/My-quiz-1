var form;

function preload(){

}

function setup(){

  createCanvas(displayWidth, displayHeight)

  form = new Form();
}

function draw(){
background("cyan");

form.display();
}


