class Level1 {

  // Create game instance
  private static instance: Level1;

  private player: Player;
  private obstacle: Obstacle;
  private obstacle2: Obstacle;

  // Private constructor Singleton
  private constructor() {
    // Container element variable
    //let level1 = document.getElementById("level");
    // Create new element and append to container element
    let level1 = document.createElement("level1");
    level1.setAttribute('id', 'level1');
    document.getElementById('cont').appendChild(level1);

    // Create objects (Player y = 250)
    this.player = new Player(level1, 2, 0, 250);
    this.obstacle = new Obstacle(level1, 400, 150, 150, 75);
    this.obstacle2 = new Obstacle(level1, 800, 150, 150, 75);

    requestAnimationFrame(() => this.gameLoop());
  }

  private gameLoop(): void {
    // Draw objects to screen
    this.player.draw();
    this.obstacle.draw();
    this.obstacle2.draw();

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
    if(!Level1.instance) {
      Level1.instance = new Level1();
    }
    return Level1.instance;
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
      Score.scoreZero(0);
    }
    else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
        && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
        > this.obstacle2.y) {
      //console.log("Collision obstacle 2");

      // Player to start position
      this.player.x = 0;
      this.player.y = 250;

      // Score to zero
      Score.scoreZero(0);
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
  }
}