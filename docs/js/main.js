var Ground = (function () {
    function Ground() {
    }
    return Ground;
}());
var Level1 = (function () {
    function Level1() {
        var _this = this;
        var container = document.getElementById("container");
        this.player = new Player(container, 1, 0, 250);
        this.obstacle = new Obstacle(container, 400, 150, 150, 75);
        this.obstacle2 = new Obstacle(container, 800, 150, 150, 75);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Level1.prototype.gameLoop = function () {
        var _this = this;
        this.player.draw();
        this.obstacle.draw();
        this.obstacle2.draw();
        this.collision();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Level1.getInstance = function () {
        if (!Level1.instance) {
            Level1.instance = new Level1();
        }
        return Level1.instance;
    };
    Level1.prototype.collision = function () {
        if (this.player.x < this.obstacle.x + this.obstacle.width && this.player.x + this.player.width > this.obstacle.x
            && this.player.y < this.obstacle.y + this.obstacle.height && this.player.height + this.player.y
            > this.obstacle.y) {
            console.log("Collision obstacle 1");
            this.player.x = 0;
            this.player.y = 250;
        }
        else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
            && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
            > this.obstacle2.y) {
            console.log("Collision obstacle 2");
            this.player.x = 0;
            this.player.y = 250;
        }
        else {
        }
    };
    return Level1;
}());
var Level2 = (function () {
    function Level2() {
        var _this = this;
        var container = document.getElementById("container");
        this.player = new Player(container, 1, 0, 250);
        this.obstacle = new Obstacle(container, 300, 110, 150, 75);
        this.obstacle2 = new Obstacle(container, 750, 50, 150, 75);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Level2.prototype.gameLoop = function () {
        var _this = this;
        this.player.draw();
        this.obstacle.draw();
        this.obstacle2.draw();
        this.collision();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Level2.getInstance = function () {
        if (!Level2.instance) {
            Level2.instance = new Level2();
        }
        return Level2.instance;
    };
    Level2.prototype.collision = function () {
        if (this.player.x < this.obstacle.x + this.obstacle.width && this.player.x + this.player.width > this.obstacle.x
            && this.player.y < this.obstacle.y + this.obstacle.height && this.player.height + this.player.y
            > this.obstacle.y) {
            console.log("Collision obstacle 1");
            this.player.x = 0;
            this.player.y = 250;
        }
        else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
            && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
            > this.obstacle2.y) {
            console.log("Collision obstacle 2");
            this.player.x = 0;
            this.player.y = 250;
        }
        else {
        }
    };
    return Level2;
}());
window.addEventListener("load", function () {
    Level1.getInstance();
});
var Obstacle = (function () {
    function Obstacle(parent, setX, setY, setHeight, setWidth) {
        this.obstacleElement = document.createElement("obstacle");
        parent.appendChild(this.obstacleElement);
        this.x = setX;
        this.y = setY;
        this.height = setHeight;
        this.width = setWidth;
    }
    Obstacle.prototype.draw = function () {
        this.obstacleElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Obstacle;
}());
var Player = (function () {
    function Player(parent, setSpeed, setX, setY) {
        this.playerElement = document.createElement("player");
        parent.appendChild(this.playerElement);
        this.speed = setSpeed;
        this.x = setX;
        this.y = setY;
        this.height = 50;
        this.width = 50;
        this.input = new p5.AudioIn();
        this.input.start();
    }
    Player.prototype.draw = function () {
        this.playerElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        var volume = this.input.getLevel();
        this.maximumUp = 0;
        this.maximumDown = 250;
        var soundMinimum = 0.01;
        var soundMaximum = 1;
        if (volume > soundMinimum && volume < soundMaximum && this.y > this.maximumUp) {
            console.log('Reactie op geluid!');
            this.y -= 5;
        }
        else if ((volume < soundMinimum || volume > soundMaximum) && this.y < this.maximumDown) {
            this.y += 1;
        }
    };
    return Player;
}());
var Score = (function () {
    function Score() {
    }
    return Score;
}());
//# sourceMappingURL=main.js.map