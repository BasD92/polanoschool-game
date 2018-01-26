var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.draw = function () {
    };
    return GameObject;
}());
var AirObstacle = (function (_super) {
    __extends(AirObstacle, _super);
    function AirObstacle(parent, setX, setY, setHeight) {
        var _this = _super.call(this) || this;
        _this.objectElement = document.createElement("spikes");
        parent.appendChild(_this.objectElement);
        _this.x = setX;
        _this.y = setY;
        _this.height = setHeight;
        return _this;
    }
    AirObstacle.prototype.draw = function () {
        this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.objectElement.style.height = this.height + "px";
        this.objectElement.style.width = "1200px";
    };
    return AirObstacle;
}(GameObject));
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin(parent, setX, setY, setHeight, setWidth) {
        var _this = _super.call(this) || this;
        _this.objectElement = document.createElement("coin");
        parent.appendChild(_this.objectElement);
        _this.x = setX;
        _this.y = setY;
        _this.height = setHeight;
        _this.width = setWidth;
        return _this;
    }
    Coin.prototype.draw = function () {
        this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.objectElement.style.height = this.height + "px";
        this.objectElement.style.width = this.width + "px";
    };
    return Coin;
}(GameObject));
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
        if (Score.getScore() < 3) {
            Level1.getInstance();
        }
        else {
            document.getElementById("level1").remove();
            Level2.getInstance();
        }
    };
    return Game;
}());
var Level = (function () {
    function Level() {
        this.allObjects = new Array();
        this.obstacles = new Array();
    }
    Level.prototype.collision = function () {
    };
    Level.prototype.avoidObstacles = function () {
    };
    return Level;
}());
var Level1 = (function (_super) {
    __extends(Level1, _super);
    function Level1() {
        var _this = _super.call(this) || this;
        var level1 = document.createElement("level1");
        level1.setAttribute('id', 'level1');
        document.getElementById('cont').appendChild(level1);
        _this.airObstacle = new AirObstacle(level1, 0, 0, 40);
        _this.player = new Player(level1, 2, 0, 370);
        _this.obstacle = new Obstacle(level1, 350, 300, 75, 100);
        _this.obstacle2 = new Obstacle(level1, 650, 100, 75, 100);
        _this.obstacle3 = new Obstacle(level1, 1000, 300, 75, 100);
        _this.allObjects.push(_this.player, _this.obstacle, _this.obstacle2, _this.obstacle3);
        _this.obstacles.push(_this.obstacle, _this.obstacle2, _this.obstacle3);
        requestAnimationFrame(function () { return _this.gameLoop(); });
        return _this;
    }
    Level1.prototype.gameLoop = function () {
        var _this = this;
        this.airObstacle.draw();
        for (var _i = 0, _a = this.allObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            object.draw();
        }
        this.player.move();
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
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            if (this.player.x < obstacle.x + obstacle.width && this.player.x + this.player.width > obstacle.x
                && this.player.y < obstacle.y + obstacle.height && this.player.height + this.player.y > obstacle.y) {
                this.player.x = 0;
                this.player.y = 370;
                Score.resetScore(0);
            }
            else if (this.player.y < 35) {
                this.player.x = 0;
                this.player.y = 370;
                Score.resetScore(0);
            }
            else {
            }
        }
    };
    Level1.prototype.avoidObstacles = function () {
        if (this.player.x == this.obstacle.x + this.obstacle.width) {
            Score.updateScore(1);
        }
        else if (this.player.x == this.obstacle2.x + this.obstacle2.width) {
            Score.updateScore(1);
        }
        else if (this.player.x == this.obstacle3.x + this.obstacle2.width) {
            Score.updateScore(1);
        }
    };
    return Level1;
}(Level));
var Level2 = (function (_super) {
    __extends(Level2, _super);
    function Level2() {
        var _this = _super.call(this) || this;
        var level2 = document.createElement("level2");
        level2.setAttribute('id', 'level2');
        document.getElementById('cont').appendChild(level2);
        _this.airObstacle = new AirObstacle(level2, 0, 0, 40);
        _this.player = new Player(level2, 2, 0, 200);
        _this.obstacle = new Obstacle(level2, 700, 50, 70, 100);
        _this.obstacle2 = new Obstacle(level2, 400, 250, 70, 100);
        _this.obstacle3 = new Obstacle(level2, 700, 380, 70, 100);
        _this.obstacle4 = new Obstacle(level2, 1150, 200, 70, 100);
        _this.coin = new Coin(level2, 500, 140, 30, 30);
        _this.coin2 = new Coin(level2, 1150, 340, 30, 30);
        _this.allObjects.push(_this.player, _this.obstacle, _this.obstacle2, _this.obstacle3, _this.obstacle4);
        _this.obstacles.push(_this.obstacle, _this.obstacle2, _this.obstacle3, _this.obstacle4);
        requestAnimationFrame(function () { return _this.gameLoop(); });
        return _this;
    }
    Level2.prototype.gameLoop = function () {
        var _this = this;
        this.airObstacle.draw();
        for (var _i = 0, _a = this.allObjects; _i < _a.length; _i++) {
            var object = _a[_i];
            object.draw();
        }
        this.coin.draw();
        this.coin2.draw();
        this.player.moveLevel2();
        this.collision();
        this.getCoins();
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
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            if (this.player.x < obstacle.x + obstacle.width && this.player.x + this.player.width > obstacle.x
                && this.player.y < obstacle.y + obstacle.height && this.player.height + this.player.y > obstacle.y) {
                this.player.x = 0;
                this.player.y = 200;
                Score.resetScore(3);
            }
            else if (this.player.y < 35) {
                this.player.x = 0;
                this.player.y = 200;
                Score.resetScore(3);
            }
            else if (this.player.x > 1250 && Score.getScore() <= 80) {
                this.player.x = 0;
                this.player.y = 200;
            }
            else if (this.player.x > 1250 && Score.getScore() >= 81) {
                this.player.speed = 0;
                document.getElementById('finish').innerHTML = "Je hebt het gehaald! Gefeliciteerd!";
            }
            else {
            }
        }
    };
    Level2.prototype.getCoins = function () {
        if (this.player.x < this.coin.x + this.coin.width && this.player.x + this.player.width > this.coin.x
            && this.player.y < this.coin.y + this.coin.height && this.player.height + this.player.y > this.coin.y) {
            Score.updateScore(1);
        }
        else if (this.player.x < this.coin2.x + this.coin2.width && this.player.x + this.player.width > this.coin2.x
            && this.player.y < this.coin2.y + this.coin.height && this.player.height + this.player.y > this.coin2.y) {
            Score.updateScore(1);
        }
    };
    return Level2;
}(Level));
window.addEventListener("load", function () {
    Game.getInstance();
});
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle(parent, setX, setY, setHeight, setWidth) {
        var _this = _super.call(this) || this;
        _this.objectElement = document.createElement("obstacle");
        parent.appendChild(_this.objectElement);
        _this.x = setX;
        _this.y = setY;
        _this.height = setHeight;
        _this.width = setWidth;
        return _this;
    }
    Obstacle.prototype.draw = function () {
        this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.objectElement.style.height = this.height + "px";
        this.objectElement.style.width = this.width + "px";
    };
    return Obstacle;
}(GameObject));
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(parent, setSpeed, setX, setY) {
        var _this = _super.call(this) || this;
        _this.objectElement = document.createElement("player");
        parent.appendChild(_this.objectElement);
        _this.speed = setSpeed;
        _this.x = setX;
        _this.y = setY;
        _this.height = 75;
        _this.width = 60;
        _this.input = new p5.AudioIn();
        _this.ellipse = new p5();
        _this.input.start();
        return _this;
    }
    Player.prototype.draw = function () {
        this.objectElement.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.objectElement.style.height = this.height + "px";
        this.objectElement.style.width = this.width + "px";
    };
    Player.prototype.move = function () {
        if (this.x < 1250) {
            this.x += this.speed;
        }
        var volume = this.input.getLevel();
        this.maximumUp = 0;
        this.maximumDown = 370;
        var soundMinimum = 0.1;
        var soundMaximum = 1;
        if (volume > 0.3 && this.y > this.maximumUp) {
            this.y -= 10;
        }
        else if (volume > soundMinimum && volume < soundMaximum && this.y > this.maximumUp) {
            this.y -= 3;
        }
        else if ((volume < soundMinimum || volume > soundMaximum) && this.y < this.maximumDown) {
            this.y += 1.5;
        }
    };
    Player.prototype.moveLevel2 = function () {
        this.x += this.speed;
        var volume = this.input.getLevel();
        this.maximumUp = 0;
        this.maximumDown = 400;
        var soundMinimum = 0.04;
        var soundMedium = 0.12;
        var soundMaximum = 1;
        if (volume > 0.3 && this.y > this.maximumUp) {
            this.y -= 10;
        }
        else if (volume > soundMedium && volume < soundMaximum && this.y > this.maximumUp) {
            this.y -= 3;
        }
        else if (volume > soundMinimum && volume < soundMedium && this.y < this.maximumDown) {
            this.y += 3;
        }
    };
    return Player;
}(GameObject));
var Score = (function () {
    function Score() {
    }
    Score.updateScore = function (s) {
        this.score += s;
    };
    Score.resetScore = function (s) {
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
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        return myObj[0].speed;
    }
};
xmlhttp.open("GET", "http://localhost/polanoschool-game/docs/php/getSettings.php", true);
xmlhttp.send();
//# sourceMappingURL=main.js.map