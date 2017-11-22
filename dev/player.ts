class Player {

  private playerElement: HTMLElement;
  private speed: number;
  public x: number;
  public y: number;
  public height: number;
  public width: number;

  public input;

  public maximumUp: number;
  public maximumDown: number;

  constructor(parent: HTMLElement, setSpeed: number, setX: number, setY: number) {
    // Append player element to parent (container)
    this.playerElement = document.createElement("player");
    parent.appendChild(this.playerElement);

    // Set speed, x and y axis
    this.speed = setSpeed;
    this.x = setX;
    this.y = setY;

    // Set height and width
    this.height = 50;
    this.width = 50;

    // Create an Audio input
    this.input = new p5.AudioIn();

    // Start input
    this.input.start();
  }

  // Draw player on screen
  public draw(): void {
    // Count x axis with speed value to move
    this.x += this.speed;

    // Draw element with translate method
    this.playerElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";

    // Get the overall volume (between 0 and 1.0)
    var volume = this.input.getLevel();

    // Maximum up and down move player
    this.maximumUp = 0;
    this.maximumDown = 250;

    // If the volume > soundMinimum or < soundMaximum,  player goes up
    // Else player goes down.
    var soundMinimum = 0.01;
    var soundMaximum = 1;
    if (volume > soundMinimum && volume < soundMaximum && this.y > this.maximumUp) {
      console.log('Reactie op geluid!');
      this.y -= 5;
    }
    else if ((volume < soundMinimum || volume > soundMaximum) && this.y < this.maximumDown) {
      this.y += 1;
    }
  }
}