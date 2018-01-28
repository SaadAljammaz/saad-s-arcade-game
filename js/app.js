// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = getRandomInt(-200,-50);
    var row = getRandomInt(1,3);
    if(row == 1){
        this.y = 55;
    }
    if(row == 2){
        this.y = 145;
    }
    if(row == 3){
        this.y = 230;
    }
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
    }

    if (player.y == -17) {
    setTimeout(function() {
      playAgain();
    }, 500);
    }

    if (player.y + 41 >= this.y && player.x <= this.x + 60 && player.y <= this.y + 60 && player.x + 65 >= this.x) {
        playAgain();
    }
};


var playAgain = function(){
    player.x = 200;
    player.y = 383;
}


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

Player.prototype.update = function() {
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if (key == 'left') {
        player.x -= 100;
        if (player.x < 0) {
        player.x = 0;
    }
    }

    if (key == 'up') {
        player.y -= 80;
        if (player.y < -17 ) {
        player.y = -17;
    }
    }

    if (key == 'right') {
        player.x += 100;
        if (player.x > 400) {
        player.x = 400;
    }
    }
    if (key == 'down') {
        player.y += 80;
        if (player.y > 383 ) {
        player.y = 383;
    }
    }
    console.log(player.x+"   "+player.y);
    console.log(key);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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