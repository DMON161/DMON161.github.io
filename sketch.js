function setup() {
  leinWand = createCanvas(windowWidth, windowHeight);
  leinWand.position(0,0);
  leinWand.style("z-index","-1");
  noStroke();
  //background(215, 228, 236);
}

function draw() {
  fill(random(0,1000),random(0,1000),random(0,1000),random(0,1000))
  circle(mouseX,mouseY,10);
}