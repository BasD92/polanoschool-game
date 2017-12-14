class Score {

  private static score: number = 0;

  constructor() {

  }

  public static updateScore(s: number) {
    this.score += s;
  }

  public static resetScore(s: number) {
    this.score = s;
  }

  public static getScore(): number {
    return this.score;
  }

  public static displayScore() {
    document.getElementById('score').innerHTML = "Score: " + this.score;
  }
}