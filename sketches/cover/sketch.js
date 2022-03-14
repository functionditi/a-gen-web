function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(300);
}

function draw() {
 fill(255);

  stroke(0, 255, 0);
  strokeWeight(3);
  ellipse(mouseX, mouseY, 25);
}