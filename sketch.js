var wall, thickness
var bullet, speed, weight
var speed, weight


function setup() {
  createCanvas(1600,500);
  createSprite(400, 200, 50, 50);
  
  thickness=random(22,83)
  speed=random(223,331)
  weight=random(30,52)

  bullet=createSprite(50,200,50,50)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor = "pink"
  bullet.velocityX=speed
}

function draw() {
  background(0);  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed *speed /(thickness *thickness *thickness)
    if(damage>10)
    {
     wall.shapeColor=("red")
     text("FAILED - red",200,200)
    }
    if(damage<10)
    {
      wall.shapeColor=("green")
      text("PASSED - green",200,200)
    }
    
  }

  drawSprites();
}
function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
        return true
  }
        return false;

}

