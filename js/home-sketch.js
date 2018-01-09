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

// Replace videos with images on mobile
if (isMobileDevice()){
  var rogue = document.getElementById('rogue-media');
  rogue.innerHTML = '<img src="img/rogue-demo.png"></img>'

  var ao = document.getElementById('ao-media');
  ao.innerHTML = '<img src="img/ao-demo.png"></img>'

  var radio = document.getElementById('radio-media');
  radio.innerHTML = '<img src="img/radio-demo.png"></img>'

  var dialup = document.getElementById('dialup-media');
  dialup.innerHTML = '<img src="img/dialup-demo.png"></img>'

}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
