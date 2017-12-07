class Score {

  private static score: number = 0;

  constructor() {

  }

  public static scoreUpdate(s: number) {
    this.score += s;
  }

  public static scoreZero(s: number) {
    this.score = s;
  }

  public static getScore(): number {
    return this.score;
  }

  public static displayScore() {
    document.getElementById('score').innerHTML = "Score: " + this.score;
  }
}