var Game = (function () {
    function Game() {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.setLevel();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    Game.prototype.setLevel = function () {
        if (Score.getScore() < 2) {
            Level1.getInstance();
        }
        else {
            document.getElementById("level1").remove();
            Level2.getInstance();
        }
    };
    return Game;
}());
var Ground = (function () {
    function Ground() {
    }
    return Ground;
}());
var Level1 = (function () {
    function Level1() {
        var _this = this;
        var level1 = document.createElement("level1");
        level1.setAttribute('id', 'level1');
        document.getElementById('cont').appendChild(level1);
        this.player = new Player(level1, 2, 0, 250);
        this.obstacle = new Obstacle(level1, 400, 150, 150, 75);
        this.obstacle2 = new Obstacle(level1, 800, 150, 150, 75);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Level1.prototype.gameLoop = function () {
        var _this = this;
        this.player.draw();
        this.obstacle.draw();
        this.obstacle2.draw();
        this.collision();
        this.avoidObstacles();
        Score.displayScore();
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
            this.player.x = 0;
            this.player.y = 250;
            Score.scoreZero(0);
        }
        else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
            && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
            > this.obstacle2.y) {
            this.player.x = 0;
            this.player.y = 250;
            Score.scoreZero(0);
        }
        else {
        }
    };
    Level1.prototype.avoidObstacles = function () {
        if (this.player.x == this.obstacle.x + this.obstacle.width + 1) {
            Score.scoreUpdate(1);
        }
        else if (this.player.x == this.obstacle2.x + this.obstacle2.width + 1) {
            Score.scoreUpdate(1);
        }
    };
    return Level1;
}());
var Level2 = (function () {
    function Level2() {
        var _this = this;
        var level2 = document.createElement("level2");
        level2.setAttribute('id', 'level2');
        document.getElementById('cont').appendChild(level2);
        this.player = new Player(level2, 2, 0, 250);
        this.obstacle = new Obstacle(level2, 300, 110, 150, 75);
        this.obstacle2 = new Obstacle(level2, 750, 50, 150, 75);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Level2.prototype.gameLoop = function () {
        var _this = this;
        this.player.draw();
        this.obstacle.draw();
        this.obstacle2.draw();
        this.collision();
        this.avoidObstacles();
        Score.displayScore();
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
            this.player.x = 0;
            this.player.y = 250;
            Score.scoreZero(2);
        }
        else if (this.player.x < this.obstacle2.x + this.obstacle2.width && this.player.x + this.player.width > this.obstacle2.x
            && this.player.y < this.obstacle2.y + this.obstacle2.height && this.player.height + this.player.y
            > this.obstacle2.y) {
            this.player.x = 0;
            this.player.y = 250;
            Score.scoreZero(2);
        }
        else {
        }
    };
    Level2.prototype.avoidObstacles = function () {
        if (this.player.x == this.obstacle.x + this.obstacle.width + 1) {
            Score.scoreUpdate(1);
        }
        else if (this.player.x == this.obstacle2.x + this.obstacle2.width + 1) {
            Score.scoreUpdate(1);
        }
    };
    return Level2;
}());
window.addEventListener("load", function () {
    Game.getInstance();
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
        this.ellipse = new p5();
        this.input.start();
    }
    Player.prototype.draw = function () {
        this.x += this.speed;
        this.playerElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        var volume = this.input.getLevel();
        this.maximumUp = 0;
        this.maximumDown = 250;
        var soundMinimum = 0.01;
        var soundMaximum = 1.00;
        if (volume > soundMinimum && volume < soundMaximum && this.y > this.maximumUp) {
            console.log('Reactie op geluid!');
            this.y -= 5;
        }
        else if ((volume < soundMinimum || volume > soundMaximum) && this.y < this.maximumDown) {
            this.y += 2;
        }
    };
    return Player;
}());
var Score = (function () {
    function Score() {
    }
    Score.scoreUpdate = function (s) {
        this.score += s;
    };
    Score.scoreZero = function (s) {
        this.score = s;
    };
    Score.getScore = function () {
        return this.score;
    };
    Score.displayScore = function () {
        document.getElementById('score').innerHTML = "Score: " + this.score;
    };
    return Score;
}());
Score.score = 0;
//# sourceMappingURL=main.js.map