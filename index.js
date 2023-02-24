////////////////
///Screen
///////////////

//select the canvas
const canvasElement = document.querySelector("canvas");
//context responsible for shapes and sprites
const ctx = canvasElement.getContext("2d"); //2d game

// size of screen
canvasElement.width = 1024;
canvasElement.height = 576; //dont use . style

ctx.fillRect(0, 0, 1024, 576); //4arguments x, y, width, height fills a rectangle

///////////////////////
///player and enemy using oop for interactivity
///////////////////

const gravity = 0.7; // downward acceleration to objects

const resultTextElement = document.querySelector('#displayResult');

/////////////
//BackGround
////////////
const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/fighting-background-1.gif'
});

/////////////
//Player
////////////
const player = new Fighter({
  position: {
    x: canvasElement.width * 0.4,
    y: 15,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 0,
    y: 0,
  },
});
/////////////
//Enemy
////////////
const enemy = new Fighter({
  position: {
    x: canvasElement.width * 0.8,
    y: 15,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  offset: {
    x: 50,
    y: 0,
  },
  color: "red",
});

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowDown: {
    pressed: false,
  },
};

let lastKey; //show last key that was pressed

function rectanglarCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

// 
function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId);
    resultTextElement.style.display = 'flex';
    if (player.health === enemy.health) {
      resultTextElement.innerText = 'Tie';
    } else if (player.health > enemy.health) {
      resultTextElement.innerText = 'Player 1 Wins';
    } else if (player.health < enemy.health) {
      resultTextElement.innerText = 'Player 2 Wins';
    }
}

///TIMER
let timer = 60;
let timerId;
function decrementTimer(){
  if (timer > 0) {
    timerId = setTimeout(decrementTimer, 1000);
    timer--;
    document.querySelector('#timer').innerText = timer;
  }
  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}
decrementTimer();

//moving objects velocity determines direction inside an animation loopand gravity
function animatieSprites() {
  window.requestAnimationFrame(animatieSprites); //creating an infinite loop
  ctx.fillStyle = "black"; // black canvas
  ctx.fillRect(0, 0, 1024, 576); //not drawing anything
  background.update();
  player.moveSprite();
  enemy.moveSprite();

  player.velocity.x = 0; // default value player isnt moving
  enemy.velocity.x = 0; // default value enemy isnt moving

  //Player Movement
  if (keys.a.pressed && lastKey === "a") {
    player.velocity.x = -5;
  } else if (keys.d.pressed && lastKey === "d") {
    player.velocity.x = 5;
  }

  //Enemy Movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
  }

  //Detect for Collision
  if (
    rectanglarCollision({
      rectangle1: player,
      rectangle2: enemy,
    }) &&
    player.isAttacking
  ) {
    player.isAttacking = false;
    // console.log("attack");
    enemy.health -= 10;
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
  }

  if (
    rectanglarCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttacking
  ) {
    enemy.isAttacking = false;
    // console.log("enemy attack");
    player.health -= 10;
    document.querySelector("#playerHealth").style.width = player.health + "%";
  }

  //end game based on health
  if (player.health <= 0 || enemy.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}
animatieSprites();

//////////////////
//Move Sprite usimg event listeners
/////////////////

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break; // if key is equal to d player moves 1 to right
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break; // if key is equal to a player moves 1 to left
    case "w":
      player.velocity.y = -15;
      break; // if key is equal to a player moves 1 to up
    case " ":
      player.attack();
      break; // if space is equal to a player attack
    ////enemy
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      enemy.lastKey = "ArrowRight";
      break; // if key is equal to d player moves 1 to right
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = "ArrowLeft";
      break; // if key is equal to a player moves 1 to left
    case "ArrowUp":
      enemy.velocity.y = -15;
      break; // if key is equal to a player moves 1 to up
    case "ArrowDown":
      enemy.attack();
      break; // if key is equal to a player attack function gets fired
  }
  console.log(event.key);
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break; // if key is equal to d player does not move right
    case "a":
      keys.a.pressed = false;
      break; // if key is equal to d player does not move left
    //////enemy
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break; // if key is presssed player does not move right
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break; // if key is presssed player does not move left
    case "ArrowDown":
      keys.ArrowDown.pressed = false;
      break;
  }
  //   console.log(event.key);
});
