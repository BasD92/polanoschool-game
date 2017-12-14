/// <reference path="level.ts" />

class Level2 extends Level {

  // Create game instance
  private static instance: Level2;
  private container: HTMLElement;

  constructor() {
    super();

    // Create new element and append to container element
    let level2 = document.createElement("level2");
    level2.setAttribute('id', 'level2');
    document.getElementById('cont').appendChild(level2);

    // Create objects
    this.airObstacle = new AirObstacle(level2, 0, 0, 40);
    this.player = new Player(level2, 2, 0, 200);
    this.obstacle = new Obstacle(level2, 500, 50, 60, 20);
    this.obstacle2 = new Obstacle(level2, 500, 200, 60, 20);
    this.obstacle3 = new Obstacle(level2, 500, 380, 60, 20);
    this.obstacle4 = new Obstacle(level2, 1150, 110, 60, 20);
    this.obstacle5 = new Obstacle(level2, 1150, 260, 60, 20);
    this.obstacle6 = new Obstacle(level2, 1150, 400, 60, 20);
    this.coin = new Coin(level2, 500, 140, 30, 30);
    this.coin2 = new Coin(level2, 1150, 340, 30, 30);

    // Push all objects to array
    this.allObjects.push(this.player, this.obstacle, this.obstacle2, this.obstacle3, this.obstacle4, this.obstacle5,
    this.obstacle6);

    // Push al obstacle objects to array
    this.obstacles.push(this.obstacle, this.obstacle2, this.obstacle3, this.obstacle4, this.obstacle5,
    this.obstacle6);

    requestAnimationFrame(() => this.gameLoop());
  }

  gameLoop(): void {

    // Draw spikes
    this.airObstacle.draw();

    // Loop to draw all obstacles
    for (let object of this.allObjects) {
      object.draw();
    }

    // Draw coins
    this.coin.draw();
    this.coin2.draw();

    // Move player
    this.player.moveLevel2();

    // Detect collision
    this.collision();

    // Detect when get coin
    this.getCoins();

    // Display score
    Score.displayScore();

    requestAnimationFrame(() => this.gameLoop());
  }

  // Check if Level2 object exists
  public static getInstance() {
    if (!Level2.instance) {
      Level2.instance = new Level2();
    }
    return Level2.instance;
  }

  // Detect collision
  collision(): void {
    // Check with loop for collisions with all obstacles
    for (let obstacle of this.obstacles) {
      if (this.player.x < obstacle.x + obstacle.width && this.player.x + this.player.width > obstacle.x
        && this.player.y < obstacle.y + obstacle.height && this.player.height + this.player.y > obstacle.y) {
        // Player to start position
        this.player.x = 0;
        this.player.y = 200;

        // Score to zero
        Score.resetScore(3);
      }
      else if (this.player.y < 35) {
        // Player to start position
        this.player.x = 0;
        this.player.y = 200;

        // Score to zero
        Score.resetScore(3);
      }
      else if(this.player.x > 1250 && Score.getScore() < 81) {
        // Player to start position
        this.player.x = 0;
        this.player.y = 200;
      }
      else if(this.player.x > 1250 && Score.getScore() > 81) {
        this.player.speed = 0;
        document.getElementById('finish').innerHTML = "Je hebt het gehaald! Gefeliciteerd!"
      }
      else {
        //console.log("No collision");
      }
    }
  }

  // Count score when player avoid obstacles
  getCoins() {
    if (this.player.x < this.coin.x + this.coin.width && this.player.x + this.player.width > this.coin.x
      && this.player.y < this.coin.y + this.coin.height && this.player.height + this.player.y > this.coin.y) {
      Score.updateScore(1);
    }
    else if (this.player.x < this.coin2.x + this.coin2.width && this.player.x + this.player.width > this.coin2.x
      && this.player.y < this.coin2.y + this.coin.height && this.player.height + this.player.y > this.coin2.y) {
      Score.updateScore(1);
    }
  }
}