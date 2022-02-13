let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 600);
  fill(240);
  noStroke();
}

function draw() {
  background(0, 0, 51);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(1); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
  push();
  fill('white');
  ellipse(200, 550, 175, 175);
  stroke(0, 0, 51);
  ellipse(200, 430, 150, 150);
  ellipse(200, 330, 125, 125);
  fill('black');
  ellipse(175, 320, 15, 15);
  ellipse(225, 320, 15, 15);
  ellipse(200, 410, 10, 10);
  ellipse(200, 490, 10, 10);
  ellipse(200, 570, 10, 10);
  rect(125, 240, 150, 40);
  rect(180, 200, 40, 40);
  fill(237, 145, 33);
  triangle(200, 330, 260, 340, 200, 350);
  pop();
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(1, 3);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
