var rectWidth = 60;
var cnv;
var fillColor;

function setup() {
  noStroke();
  width = window.innerWidth;
  height = window.innerHeight;

  var cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');

  var barColors = [
    "#ffd1dc",
    "#c9c9ff",
    "#f1cbff",
    "#ffdfba"
  ]

  fillColor = random(barColors);

}

function draw() {
  background(255, 255, 255, 10);

  fill(fillColor);
  var ypos = Math.floor(mouseY / 40) * 40;
  rect(0, ypos, window.innerWidth, rectWidth);

  // fill('#d1fff4');
  // var xpos = Math.floor(mouseX / 40) * 40;
  // rect(xpos, 0, rectWidth, window.innerHeight);
}
