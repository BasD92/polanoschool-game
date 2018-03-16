/// <reference path="level.ts" />

class Level1 extends Level {

  // Create game instance
  private static instance: Level1;

  constructor() {
    super();

    // Create new element and append to container element
    let level1 = document.createElement("level1");
    level1.setAttribute('id', 'level1');
    document.getElementById('cont').appendChild(level1);

    // Create objects
    this.airObstacle = new AirObstacle(level1, 0, 0, 40);
    this.player = new Player(level1, 0, 370);
    this.obstacle = new Obstacle(level1, 350, 300, 75, 100);
    this.obstacle2 = new Obstacle(level1, 650, 100, 75, 100);
    this.obstacle3 = new Obstacle(level1, 1000, 300, 75, 100);

    // Push all objects to array
    this.allObjects.push(this.player, this.obstacle, this.obstacle2, this.obstacle3);

    // Push al obstacle objects to array
    this.obstacles.push(this.obstacle, this.obstacle2, this.obstacle3);

    requestAnimationFrame(() => this.gameLoop());
  }

  gameLoop(): void {

    // Draw spikes
    this.airObstacle.draw();

    // Loop to draw all obstacles
    for (let object of this.allObjects) {
      object.draw();
    }

    // Move player
    this.player.move();

    // Detect collision
    this.collision();

    // Detect avoid obstacles
    this.avoidObstacles();

    // Display score
    Score.displayScore();

    requestAnimationFrame(() => this.gameLoop());
  }

  // Check if Level1 object exists
  public static getInstance() {
    if (!Level1.instance) {
      Level1.instance = new Level1();
    }
    return Level1.instance;
  }

  // Detect collision
  collision(): void {
    // Check with loop for collisions with all obstacles
    for (let obstacle of this.obstacles) {
      if (this.player.x < obstacle.x + obstacle.width && this.player.x + this.player.width > obstacle.x
        && this.player.y < obstacle.y + obstacle.height && this.player.height + this.player.y > obstacle.y) {
        // Player to start position
        this.player.x = 0;
        this.player.y = 370;

        // Score to zero
        Score.resetScore(0);
      }
      else if (this.player.y < 35) {
        // Player to start position
        this.player.x = 0;
        this.player.y = 370;

        // Score to zero
        Score.resetScore(0);
      }
      else {
        //console.log("No collision");
      }
    }
  }

  // Count score when player avoid obstacles
  avoidObstacles() {
    if (this.player.x == this.obstacle.x + this.obstacle.width) {
      Score.updateScore(1);
    }
    else if (this.player.x == this.obstacle2.x + this.obstacle2.width) {
      Score.updateScore(1);
    }
    else if (this.player.x == this.obstacle3.x + this.obstacle2.width) {
      Score.updateScore(1);
    }
  }
}