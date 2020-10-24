var fixed_rect, moving_rect;
function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200, 200, 40, 80);
  moving_rect = createSprite(400, 200, 80, 40);
  fixed_rect.shapeColor = "lightblue";
  moving_rect.shapeColor = "yellow";
  fixed_rect.debug = true;
  moving_rect.debug = true;
}

function draw() {
  background("pink");
  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if(moving_rect.x - fixed_rect.x < fixed_rect.width / 2 + moving_rect.width / 2 && 
    fixed_rect.x - moving_rect.x < fixed_rect.width / 2 + moving_rect.width / 2 &&
    moving_rect.y - fixed_rect.y < fixed_rect.height / 2 + moving_rect.height / 2 &&
    fixed_rect.y - moving_rect.y < fixed_rect.height / 2 + moving_rect.height / 2)
  {
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "red";
  }

  else
  {
    fixed_rect.shapeColor = "lightblue";
    moving_rect.shapeColor = "yellow";  
  }

  console.log("Hi");
  drawSprites();
}