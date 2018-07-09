function setup() {
  createCanvas(600,400);
}

function draw() {
  background('purple');
  fill("green")
  ellipse(mouseX,mouseY,100,100);
  triangle(30,75,58,20,86,75);
  fill("orange");
  textSize(42);
  text("Hi bae! I <3 u", 100, 50);
}
