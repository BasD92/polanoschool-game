abstract class Level {

  // Level properties
  protected player: Player;
  protected airObstacle: AirObstacle;
  protected obstacle: Obstacle;
  protected obstacle2: Obstacle;
  protected obstacle3: Obstacle;
  protected obstacle4: Obstacle;
  protected obstacle5: Obstacle;
  protected obstacle6: Obstacle;
  protected coin: Coin;
  protected coin2: Coin;
  protected allObjects: Array<GameObject> = new Array();
  protected obstacles: Array<Obstacle> = new Array();

  // Protected constructor Singleton
  protected constructor() {

  }

  // Detect collision
  protected collision(): void {

  }

  // Count score when player avoid obstacles
  protected avoidObstacles() {

  }
}