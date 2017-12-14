/// <reference path="gameobject.ts" />

class AirObstacle extends GameObject {

  constructor(parent:HTMLElement, setX: number, setY: number, setHeight: number) {
    super();

    // Append spikes element to parent (container)
    this.objectElement = document.createElement("spikes");
    parent.appendChild(this.objectElement);

    // Set x and y axis
    this.x = setX;
    this.y = setY;

    // Set height and width
    this.height = setHeight;
    //this.width = setWidth;
  }

  public draw(): void {
    // Draw element with translate method
    this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    this.objectElement.style.height = this.height + "px";
    this.objectElement.style.width = "1200px";
  }
}