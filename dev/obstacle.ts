class Obstacle {

  private obstacleElement: HTMLElement;
  public x: number;
  public y: number;
  public height: number;
  public width: number;

  constructor(parent:HTMLElement, setX: number, setY: number, setHeight: number, setWidth: number) {
    // Append obstacle element to parent (container)
    this.obstacleElement = document.createElement("obstacle");
    parent.appendChild(this.obstacleElement);

    // Set x and y axis
    this.x = setX;
    this.y = setY;

    // Set height and width
    this.height = setHeight;
    this.width = setWidth;
  }

  // Draw obstacle on screen
  public draw(): void {
    // Draw element with translate method
    this.obstacleElement.style.transform ="translate("+this.x+"px, "+this.y+"px)";
  }
}