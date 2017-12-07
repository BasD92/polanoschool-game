class Level2 {

// Create game instance
private static instance: Level2;

  private player: Player;
  private obstacle: Obstacle;
  private obstacle2: Obstacle;
  private obstacle3: Obstacle;
  private container: HTMLElement;

  // Private constructor Singleton
  private constructor() {
    // Create new element and append to container element
    let level2 = document.createElement("level2");
    level2.setAttribute('id', 'level2');
    document.getElementById('cont').appendChild(level2);

    // Create objects
    this.player = new Player(level2, 2, 0, 250);
    this.obstacle = new Obstacle(level2, 300, 110, 150, 75);
    this.obstacle2 = new Obstacle(level2, 650, 100, 150, 75);
    this.obstacle3 = new Obstacle(level2, 900, 0, 150, 75);

    requestAnimationFrame(() => this.gameLoop());
  }

  private gameLoop(): void {
    // Draw objects to screen
    this.player.draw();
    this.obstacle.draw();
    this.obstacle2.draw();
    this.obstacle3.draw();

    // Detect collision
    this.collision();

    // Detect avoid obstacles
    this.avoidObstacles();

    // Display score
    Score.displayScore();

    requestAnimationFrame(() => this.gameLoop());
  }

  // Check if Level2 object exists
  public static getInstance() {
    if(!Level2.instance) {
      Level2.instance = new Level2();
    }
    return Level2.instance;
  }

  // Detect collision
  private collision(): void {
    if (this.player.x < this.obstacle.x + this.obstacle.width && this.player.x + this.player.width > this.obstacle.x
    && this.player.y < this.obstacle.y + this.obstacle.height && this.player.height + this.player.y
    > this.obstacle.y) {
      //console.log("Collision obstacle 1");

      // Player to start position
      this.player.x = 0;
      this.player.y = 250;

      // Score to zero
      Score.scoreZero(2);
    }
    else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
    && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
    > this.obstacle2.y) {
      //console.log("Collision obstacle 2");

      // Player to start position
      this.player.x = 0;
      this.player.y = 250;

      // Score to zero
      Score.scoreZero(2);
    }
    else if (this.player.x < this.obstacle3.x + this.obstacle3.width && this.player.x + this.player.width > this.obstacle3.x
    && this.player.y < this.obstacle3.y + this.obstacle3.height && this.player.height + this.player.y
    > this.obstacle3.y) {
        //console.log("Collision obstacle 3");

        // Player to start position
        this.player.x = 0;
        this.player.y = 250;

        // Score to zero
        Score.scoreZero(2);
      }
    else {
      //console.log("No collision");
    }
  }

  // Count score when player avoid obstacles
  private avoidObstacles() {
    if(this.player.x == this.obstacle.x + this.obstacle.width + 1) {
      Score.scoreUpdate(1);
    }
    else if(this.player.x == this.obstacle2.x + this.obstacle2.width + 1) {
      Score.scoreUpdate(1);
    }
    else if(this.player.x == this.obstacle3.x + this.obstacle2.width + 1) {
      Score.scoreUpdate(1);
    }
  }
}