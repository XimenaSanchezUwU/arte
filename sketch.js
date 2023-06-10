let img;
let myFont;
function preload() {
  img = loadImage('assets/Madurar.png');
  myFont = loadFont('assets/TIMESBI.TTF');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  textFont(myFont);
}

/*function draw() {
  background(220);
  frameRate(34)
  textFont('Times New Roman');
  textSize(30);
  fill(203, 0, 0)
  text('¡Tienes que madurar!', random(2), 13);
}
*/

function draw(){
  image(img, 0, 0, windowWidth, windowHeight);
  textSize(50);
  fill(random(86), random(231), 37);
  text('¡Tienes que madurar!', random(02), random(633));
  text('¡Tienes que madurar!', random(02), random(629));
  text('¡Tienes que madurar!', random(02), random(610));
  text('¡Tienes que madurar!', random(02), random(673));
  frameRate(8)
  textSize(67);
  fill(255, 0, 155);
  text('¡Tienes que madurar!', 312, random(53));
  text('¡Tienes que madurar!', 301, random(53));
  text('¡Tienes que madurar!', 290, random(53));
  textSize(80);
  fill(255, 8, 0);
  text('¡Tienes que madurar!', random(5), 720)
}