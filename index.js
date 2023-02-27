////////////////
///Screen
///////////////

//select the canvas
const canvasElement = document.querySelector("canvas");
//context responsible for shapes and sprites
const ctx = canvasElement.getContext("2d"); //2d game
// canvasElement.save();
// canvasElement.scale(-1,1);
// canvasElement.restore();


// size of screen
canvasElement.width = 1024;
canvasElement.height = 576; //dont use . style

ctx.fillRect(0, 0, 1024, 576); //4arguments x, y, width, height fills a rectangle

///////////////////////
///player and enemy using oop for interactivity
///////////////////

const gravity = 0.7; // downward acceleration to objects

const endScreen = document.querySelector('#endGameScreen');
const resultTextElement = document.querySelector('#result');
const screenPause = document.querySelector('#pauseScreen');
const controlScreen = document.querySelector('#controlScreen');

// function hrefMenu(){
//   windows.location.href = 'start.html';
// }

/////////////
//BackGround
////////////
const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/backgrounds/fighting-background-1.gif'
});

const shop = new Sprite({
  position: {
    x: 625,
    y: 128
  },
  imageSrc: './img/backgrounds/shop.png',
  scale: 0,
  framesMax: 6
});

// const background = new Sprite({
//   position: {
//     x: 0,
//     y: 0
//   },
//   imageSrc: './img/backgrounds/fighting-background-1.gif'
// });

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
    x: 215,
    y: 141,
  },
  imageSrc: './img/Huntress/Idle.png',
  framesMax: 8,
  scale: 3,
  sprites: {
    idle: {
      imageSrc: './img/Huntress/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/Huntress/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/Huntress/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/Huntress/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/Huntress/Attack1.png',
      framesMax: 5
    },
    takeHit: {
      imageSrc: './img/Huntress/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/Huntress/Death.png',
      framesMax: 8
    }
  },
  attackBox: {
    offset: {
      x: 8,
      y: 50
    },
    width: 160,
    height: 50
  }
});

/////////////
//ENEMY
////////////

// const enemy = new Fighter({
//   position: {
//     x: canvasElement.width * 0.8,
//     y: 15,
//   },
//   velocity: {
//     x: 0,
//     y: 0,
//   },
//   offset: {
//     x: 215,
//     y: 105,
//   },
//   imageSrc: './img/Fantasy Warrior/Idle.png',
//   framesMax: 10,
//   scale: 2.5,
//   sprites: {
//     idle: {
//       imageSrc: './img/Fantasy Warrior/Idle.png',
//       framesMax: 10
//     },
//     run: {
//       imageSrc: './img/Fantasy Warrior/Run.png',
//       framesMax: 8
//     },
//     jump: {
//       imageSrc: './img/Fantasy Warrior/Jump.png',
//       framesMax: 3
//     },
//     fall: {
//       imageSrc: './img/Fantasy Warrior/Fall.png',
//       framesMax: 3
//     },
//     attack1: {
//       imageSrc: './img/Fantasy Warrior/Attack1.png',
//       framesMax: 7
//     },
//     takeHit: {
//       imageSrc: './img/Fantasy Warrior/Take hit.png',
//       framesMax: 3
//     },
//     death: {
//       imageSrc: './img/Fantasy Warrior/Death.png',
//       framesMax: 7
//     }
//   },
//   attackBox: {
//     offset: {
//       x: 100,
//       y: 50
//     },
//     width: 160,
//     height: 50
//   }
// });

/////////////
//Player
////////////
// const player = new Fighter({
//   position: {
//     x: canvasElement.width * 0.4,
//     y: 15,
//   },
//   velocity: {
//     x: 0,
//     y: 0,
//   },
//   offset: {
//     x: 215,
//     y: 157,
//   },
//   imageSrc: './img/samauriMack/Idle.png',
//   framesMax: 8,
//   scale: 2.5,
//   sprites: {
//     idle: {
//       imageSrc: './img/samauriMack/Idle.png',
//       framesMax: 8
//     },
//     run: {
//       imageSrc: './img/samauriMack/Run.png',
//       framesMax: 8
//     },
//     jump: {
//       imageSrc: './img/samauriMack/Jump.png',
//       framesMax: 2
//     },
//     fall: {
//       imageSrc: './img/samauriMack/Fall.png',
//       framesMax: 2
//     },
//     attack1: {
//       imageSrc: './img/samauriMack/Attack1.png',
//       framesMax: 6
//     },
//     takeHit: {
//       imageSrc: './img/samauriMack/Take Hit - white silhouette.png',
//       framesMax: 4
//     },
//     death: {
//       imageSrc: './img/samauriMack/Death.png',
//       framesMax: 6
//     }
//   },
//   attackBox: {
//     offset: {
//       x: 100,
//       y: 50
//     },
//     width: 160,
//     height: 50
//   }
// });
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
    x: 215,
    y: 172,
  },
  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  sprites: {
    idle: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -190,
      y: 50
    },
    width: 160,
    height: 50
  }
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
  }
};

function rectanglarCollision({ rectangle1, rectangle2 }) {
/////////////////// 
////HitBox
/////////////////// 
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

function borderCollision(player) {
  return (
    player.position.x - 5 <= 0 || player.position.x + player.width + 5 >= canvasElement.width
  )
}

//PAUSE button
function pressedPause(){
  screenPause.style.display = 'flex';
  clearTimeout(timerId);
}
//Resume
function pressedResume(){
  decrementTimer();
  screenPause.style.display = 'none';
  controlScreen.style.display = 'none';
}
function howToPlayFunction(){
  screenPause.style.display = 'none';
  controlScreen.style.display = 'flex';
}

// determines winner
function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  endScreen.style.display = 'flex';
  if (player.health === enemy.health) {
    resultTextElement.innerText = 'TIE';
  } else if (player.health > enemy.health) {
    resultTextElement.innerText = 'PLAYER 1 WINS';
  } else if (player.health < enemy.health) {
    resultTextElement.innerText = 'PLAYER 2 WINS';
  }
}

///TIMER
let timer = 60;
let timerId;
function decrementTimer() {
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
  shop.update();
  // contrast background
  // ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  // ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
  player.moveSprite();
  enemy.moveSprite();

  player.velocity.x = 0; // default value player isnt moving
  enemy.velocity.x = 0; // default value enemy isnt moving

  if (!borderCollision(player)) {}

  //Player Movement
  if (keys.a.pressed && player.lastKey === "a") {
    player.velocity.x = -5;
    player.switchSprite('run');
  } else if (keys.d.pressed && player.lastKey === "d") {
    player.velocity.x = 5;
    player.switchSprite('run');
  } else {
    player.switchSprite('idle');
  }
  // player jumping
  if (player.velocity.y < 0) player.switchSprite('jump');
  else if (player.velocity.y > 0) player.switchSprite('fall');

  //Enemy Movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -5;
    enemy.switchSprite('run');
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 5;
    enemy.switchSprite('run');
  } else {
    enemy.switchSprite('idle');
  }
  // enemy jumping
  if (enemy.velocity.y < 0) enemy.switchSprite('jump');
  else if (enemy.velocity.y > 0) enemy.switchSprite('fall');

  //Detect for Collision
  if (
    rectanglarCollision({
      rectangle1: player,
      rectangle2: enemy,
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    enemy.takeHit();
    player.isAttacking = false;
    gsap.to("#enemyHealth", {
      width: enemy.health + "%"
    });
  }

  if (player.isAttacking && player.framesCurrent === 4) player.isAttacking = false;

  if (
    rectanglarCollision({
      rectangle1: enemy,
      rectangle2: player,
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
  ) {
    player.takeHit();
    enemy.isAttacking = false;
    gsap.to("#playerHealth", {
      width: player.health + "%"
    });
  }

  if (enemy.isAttacking && enemy.framesCurrent === 2) enemy.isAttacking = false;

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
  ////player
  if (!player.dead) {
    switch (event.key) {
      case "d":
        keys.d.pressed = true;
        player.lastKey = "d";
        break; // if key is equal to d player moves 1 to right
      case "a":
        keys.a.pressed = true;
        player.lastKey = "a";
        break; // if key is equal to a player moves 1 to left
      case "w":
        player.velocity.y = -15;
        break; // if key is equal to a player moves 1 to up
      case " ":
        player.attack();
        break; // if space is equal to a player attack
    }
  }
  ////enemy
  if (!enemy.dead) {
    switch (event.key) {
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
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    //////player
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
  }
});
