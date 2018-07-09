function setup() {
  createCanvas(1200,800);
}

function draw() {
  background('purple');
  fill("yellow")
  ellipse(mouseX,mouseY,100,100);
  triangle(130,175,158,120,186,175);
  fill("orange");
  textSize(55);
  text("Hi bae! I <3 u", 250, 400);
}
