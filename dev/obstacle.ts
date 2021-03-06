/// <reference path="gameobject.ts" />

class Obstacle extends GameObject {

  constructor(parent:HTMLElement, setX: number, setY: number, setHeight: number, setWidth: number) {
    super();

    // Append obstacle element to parent (container)
    this.objectElement = document.createElement("obstacle");
    parent.appendChild(this.objectElement);

    // Set x and y axis
    this.x = setX;
    this.y = setY;

    // Set height and width
    this.height = setHeight;
    this.width = setWidth;
  }

  public draw(): void {
    // Draw element with translate method
    this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    this.objectElement.style.height = this.height + "px";
    this.objectElement.style.width = this.width + "px";
  }
}