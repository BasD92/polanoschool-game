class Game {

  // Create game instance
  private static instance: Game;

  // Private constructor Singleton
  private constructor() {

    requestAnimationFrame(() => this.gameLoop());
  }

  private gameLoop(): void {
    this.setLevel();
    requestAnimationFrame(() => this.gameLoop());
  }

  // Check if Game object exists
  public static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  // Change level when reach a score
  private setLevel(): void {
    if (Score.getScore() < 3) {
      Level1.getInstance();
    }
    else {
      // Remove HTML element of old level
      document.getElementById("level1").remove();
      Level2.getInstance();
    }
    //Level1.getInstance();
  }
}