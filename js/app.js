const POSSIBLE_Y_VALUES = [60, 143, 236];
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = getRandomInt(-200,-50);
    this.y = POSSIBLE_Y_VALUES[Math.floor(Math.random() * POSSIBLE_Y_VALUES.length)];
    this.speed = getRandomInt(50,300);
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;

    if (this.x >= 550) {
        this.x = getRandomInt(-200,-50);
        this.y = POSSIBLE_Y_VALUES[Math.floor(Math.random() * POSSIBLE_Y_VALUES.length)];
        this.speed = getRandomInt(50,300);
    }


    if (player.y + 41 >= this.y && player.x <= this.x + 60 && player.y <= this.y + 60 && player.x + 65 >= this.x) {
        player.x = 200;
        player.y = 383;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 200;
    this.y = 383;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.winning = function(){
    var self = this;
    if (self.y == -17) {
    setTimeout(function() {
        self.x = 200;
        self.y = 383;
    }, 500);
    }
}

Player.prototype.update = function() {
    player.winning();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if(this.y != -17){
        if (key == 'left') {
            this.x -= 100;
            if (this.x < 0) {
                this.x = 0;
            }
        }
        if (key == 'up') {
            this.y -= 80;
            if (this.y < -17 ) {
                this.y = -17;
            }
        }
        if (key == 'right') {
            this.x += 100;
            if (this.x > 400) {
                this.x = 400;
            }
        }
        if (key == 'down') {
            this.y += 80;
            if (this.y > 383 ) {
                this.y = 383;
            }
        }
    }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Now instantiate your objects.
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);
// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});