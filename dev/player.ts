/// <reference path="gameobject.ts" />

class Player extends GameObject {

  //public speed: number;

  public input;
  public ellipse;

  public maximumUp: number;
  public maximumDown: number;

  public test: number;

  public speed: number = Number(localStorage.getItem("speed"));
  public soundMinimum = localStorage.getItem("minimum");
  public soundMedium = localStorage.getItem("medium");
  public soundMaximum = localStorage.getItem("maximum");

  constructor(parent: HTMLElement, setX: number, setY: number) {
    super();

    // Append player element to parent (container)
    this.objectElement = document.createElement("player");
    parent.appendChild(this.objectElement);

    // Set x and y axis
    this.x = setX;
    this.y = setY;

    // Set height and width
    this.height = 75;
    this.width = 60;

    // Create an Audio input
    this.input = new p5.AudioIn();

    this.ellipse = new p5();

    // Start input
    this.input.start();
  }

  public draw(): void {
    // Draw element with translate method
    this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    this.objectElement.style.height = this.height + "px";
    this.objectElement.style.width = this.width + "px";
  }

  public move() {

    // Count x axis with speed value to move
    if(this.x < 1250) {
      this.x += this.speed;
    }

    // Get the overall volume (between 0 and 1.0)
    var volume = this.input.getLevel();

    // Maximum up and down move player
    this.maximumUp = 0;
    this.maximumDown = 370;

    if (volume > 0.3 && this.y > this.maximumUp) {
      this.y -= 10;
    }
    else if (volume > this.soundMinimum && volume < this.soundMaximum && this.y > this.maximumUp) {
      //console.log('Reactie op geluid!');
      this.y -= 3;
    }
    else if ((volume < this.soundMinimum || volume > this.soundMaximum) && this.y < this.maximumDown) {
      this.y += 1.5;
    }
  }

  public moveLevel2(): void {
    // Count x axis with speed value to move
    this.x += this.speed;

    // Get the overall volume (between 0 and 1.0)
    var volume = this.input.getLevel();

    // Maximum up and down move player
    this.maximumUp = 0;
    this.maximumDown = 400;

    var soundMinimum = 0.04;
    var soundMaximum = 1;

    if (volume > 0.3 && this.y > this.maximumUp) {
      this.y -= 10;
    }
    else if (volume > this.soundMedium && volume < this.soundMaximum && this.y > this.maximumUp) {
      //console.log('Hard praten, speler gaat omhoog.');
      this.y -= 3;
    }
    else if (volume > this.soundMinimum && volume < this.soundMedium && this.y < this.maximumDown) {
      //console.log('Zacht praten, speler gaat omlaag.');
      this.y += 3;
    }
  }
}