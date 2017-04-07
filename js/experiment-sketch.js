var rings = []

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;

  createCanvas(width, height);
  noFill();
  background(255);

}

function draw() {
  ellipse(mouseX, mouseY, 2, 2);
  for(i=rings.length-1; i>= 0; i--){
    if(rings[i].radius > window.innerWidth/2){
      rings.splice(i, 1);
    } else {
      stroke(rings[i].start_color % 255)
      rings[i].expand();
      rings[i].display();
    }
  }
}

function mousePressed() {
  r = new Ring();
  r.x = mouseX;
  r.y = mouseY;
  rings.push(r);
}

function Ring() {
  this.x;
  this.y;
  this.radius = 0;

  this.start_color = 0;

  this.expand = function(){
    this.radius += 2;
    this.start_color += 2;
  };

  this.display = function(){
    ellipse(this.x, this.y, this.radius, this.radius);
  };
}
