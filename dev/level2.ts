class Level2 {

// Create game instance
private static instance: Level2;

  private player: Player;
  private obstacle: Obstacle;
  private obstacle2: Obstacle;

  // Private constructor Singleton
  private constructor() {

    // Container element variable
    let container = document.getElementById("container");

    // Create objects
    this.player = new Player(container, 1, 0, 250);
    this.obstacle = new Obstacle(container, 300, 110, 150, 75);
    this.obstacle2 = new Obstacle(container, 750, 50, 150, 75);

    requestAnimationFrame(() => this.gameLoop());
  }

  private gameLoop(): void {

    // Draw objects to screen
    this.player.draw();
    this.obstacle.draw();
    this.obstacle2.draw();

    this.collision();

    requestAnimationFrame(() => this.gameLoop());
  }

  // Check if Game object exists
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
      console.log("Collision obstacle 1");
      // Player to start position
      this.player.x = 0;
      this.player.y = 250;
    }
    else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
        && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
        > this.obstacle2.y) {
      console.log("Collision obstacle 2");
      // Player to start position
      this.player.x = 0;
      this.player.y = 250;
    }
    else {
    //console.log("No collision");
    }
  }
}