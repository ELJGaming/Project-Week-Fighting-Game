//Save the sprite value to local storage:
//localStorage.setItem('sprite', 'spriteValue');

//Replace 'spriteValue' with the actual value of the sprite that you want to store.
//Retrieve the sprite value from local storage on the separate HTML document:
//let spriteValue = localStorage.getItem('sprite');

//Set the sprite value as the source of the image on the separate HTML document:
//let img = document.getElementById('imageId');//
//img.src = spriteValue;






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
const player1Audio = document.getElementById('player1-audio')
const player2Audio = document.getElementById('player2-audio')
/*startGameScreen*/
const countdown = document.getElementById("countdown");
const fightMessage = document.getElementById("fight-message");
const fightAudio = document.getElementById("fight-audio").play();
const songAudio = document.getElementById("song-audio")
setInterval(() => {
  songAudio.play()
}, 4000)
let hitSounds = ['../']
// const startGame 

// function hrefMenu(){
//   windows.location.href = 'start.html';
// }

/////////////
//IDEA FOR HIT SOUND
////////////
// Create an Audio object and set the source to your sound file
// const hitSound = new Audio('hit.wav');

// // Add an event listener to your sprite to detect when it's hit
// sprite.addEventListener('click', () => {
//   // Play the sound when the sprite is hit
//   hitSound.play();
// });
/////////////
//IDEA FOR HIT SOUND
////////////

/////////////
//BackGround
////////////
// const background = new Sprite({
//   position: {
//     x: 0,
//     y: 0
//   },
//   imageSrc: '../img/backgrounds/fighting-background-1.gif'
// });

// const shop = new Sprite({
//   position: {
//     x: 625,
//     y: 128
//   },
//   imageSrc: '../img/backgrounds/shop.png',
//   scale: 0,
//   framesMax: 6
// });


const background = new Sprite(JSON.parse(localStorage.getItem('map')));
console.log(background)

/////////////
//Player
////////////
const player  = new Fighter(JSON.parse(localStorage.getItem('player1')));
const enemy  = new Fighter(JSON.parse(localStorage.getItem('player2')));
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
//     y: 55,
//   },
//   imageSrc: '../img/Martial Hero 3/Idle.png',
//   framesMax: 10,
//   scale: 2.5,
//   sprites: {
//     idle: {
//       imageSrc: '../img/Martial Hero 3/Idle.png',
//       framesMax: 10
//     },
//     run: {
//       imageSrc: '../img/Martial Hero 3/Run.png',
//       framesMax: 8
//     },
//     jump: {
//       imageSrc: '../img/Martial Hero 3/Going Up.png',
//       framesMax: 3
//     },
//     fall: {
//       imageSrc: '../img/Martial Hero 3/Going Down.png',
//       framesMax: 3
//     },
//     attack1: {
//       imageSrc: '../img/Martial Hero 3/Attack1.png',
//       framesMax: 7
//     },
//     takeHit: {
//       imageSrc: '../img/Martial Hero 3/Take Hit.png',
//       framesMax: 3
//     },
//     death: {
//       imageSrc: '../img/Martial Hero 3/Death.png',
//       framesMax: 11
//     }
//   },
//   attackBox: {
//     offset: {
//       x: -30,
//       y: 50
//     },
//     width: 130,
//     height: 50
//   }
// });

/////////////
//Enemy
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
//     y: 172,
//   },
//   imageSrc: '../img/kenji/Idle.png',
//   framesMax: 4,
//   scale: 2.5,
//   sprites: {
//     idle: {
//       imageSrc: '../img/kenji/Idle.png',
//       framesMax: 4
//     },
//     run: {
//       imageSrc: '../img/kenji/Run.png',
//       framesMax: 8
//     },
//     jump: {
//       imageSrc: '../img/kenji/Jump.png',
//       framesMax: 2
//     },
//     fall: {
//       imageSrc: '../img/kenji/Fall.png',
//       framesMax: 2
//     },
//     attack1: {
//       imageSrc: '../img/kenji/Attack1.png',
//       framesMax: 4
//     },
//     takeHit: {
//       imageSrc: '../img/kenji/Take hit.png',
//       framesMax: 3
//     },
//     death: {
//       imageSrc: '../img/kenji/Death.png',
//       framesMax: 7
//     }
//   },
//   attackBox: {
//     offset: {
//       x: -190,
//       y: 50
//     },
//     width: 160,
//     height: 50
//   }
// });

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

/////////////////// 
////HitBox
/////////////////// 
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

function borderCollision(player) {
  return (
    player.position.x - 5 <= 0 || player.position.x + player.width + 5 >= canvasElement.width
  )
}

//Start fight
// let count = 3
// function startFight(){
//   setTimeout(() => {
//     //display count
//     console.log(count)
//     --count
//     if(count === 0){
//       //display 'FIGHT'
//     }
//   } )
// }
//start fight updated
// function startCountdown() {
//   let count = 3;
//   countdown.innerText = count;

//   const countdownInterval = setInterval(() => {
//     --count;
//     countdown.innerText = count;

//     if (count === 0) {
//       clearInterval(countdownInterval);
//       countdown.style.display = "none";
//       fightMessage.style.display = "block";
//       fightAudio.play();
//       setTimeout(() => {
//         fightMessage.style.display = count;
//       }, 1000);
//     } else {
//       tickAudio.play();
//     }
//   }, 1000);
// }
// startCountdown();

//START GAME UPDATED UPDATED
function startCountdown() {
  let count = 3;
  countdown.innerText = count;


  const countdownInterval = setInterval(() => {
    --count;
    countdown.style.color = Math.floor(Math.random() * 16777215).toString(16);//generates random color
    countdown.innerText = count;
    if (count === 0) {
      countdown.innerText = 'Fight'
    }
    if (count === -1) {
      //fightMessage.innerText = 'Fight'
      clearInterval(countdownInterval);
      countdown.style.display = "none";
      // fightMessage.style.display = "none"
      //       fightAudio.play();
    }
  }, 1000);
  //  const fight = setTimeout(() =>{
  //   if (count === 0){
  //     fightMessage.style.display = "fight"
  //     clearInterval(fightMessage);
  //   }
  //  },3000)
}

window.addEventListener("load", startCountdown);


//PAUSE button
function pressedPause() {
  screenPause.style.display = 'flex';
  clearTimeout(timerId);
}
//Resume
function pressedResume() {
  decrementTimer();
  screenPause.style.display = 'none';
  controlScreen.style.display = 'none';
}
function howToPlayFunction() {
  screenPause.style.display = 'none';
  controlScreen.style.display = 'flex';
}

// determines winner
function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  endScreen.style.display = 'flex';
  if (player.health === enemy.health) {
    resultTextElement.innerText = 'TIE';
    fightAudio.pause()
  } else if (player.health > enemy.health) {
    resultTextElement.innerText = 'PLAYER 1 WINS';
    player1Audio.play()
    fightAudio.pause()
  } else if (player.health < enemy.health) {
    resultTextElement.innerText = 'PLAYER 2 WINS';
    player2Audio.play()
    fightAudio.pause()
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
  // shop.update();
  // contrast background
  // ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  // ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
  player.moveSprite();
  enemy.moveSprite();

  player.velocity.x = 0; // default value player isnt moving
  enemy.velocity.x = 0; // default value enemy isnt moving

  if (!borderCollision(player)) { }

  //Player Movement
  if (keys.a.pressed && player.lastKey === "a" && player.position.x - player.width > 0) {
    player.velocity.x = -5;
    player.switchSprite('run');
    // console.log(player.position.x);
  } else if (keys.d.pressed && player.lastKey === "d" && player.position.x + player.width < canvasElement.width) {
    player.velocity.x = 5;
    player.switchSprite('run');
  } else {
    player.switchSprite('idle');
  }
  // player jumping
  if (player.velocity.y < 0) player.switchSprite('jump');
  else if (player.velocity.y > 0) player.switchSprite('fall');

  //Enemy Movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft" && enemy.position.x > 0) {
    enemy.velocity.x = -5;
    enemy.switchSprite('run');
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight" && enemy.position.x + enemy.width + enemy.offset.x < canvasElement.width) {
    enemy.velocity.x = 5;
    // console.log(enemy.position.x);
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
    document.querySelector('#Ooof').play();
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
    //leave this when merging
    document.querySelector('#Ooof').play();
    enemy.isAttacking = false;
    gsap.to("#playerHealth", {
      width: player.health + "%"
    });
  }

  if (enemy.isAttacking && enemy.framesCurrent === 2) enemy.isAttacking = false;

  //end game based on health
  if (player.health <= 0 || enemy.health <= 0) {
    // document.querySelector('#deathAudio').play();
    determineWinner({ player, enemy, timerId });
  }
}
animatieSprites();

//////////////////
//Move Sprite usimg event listeners
/////////////////

window.addEventListener("keydown", (event) => {
  // debugger
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
      case "c":
        player.attack2();
        break; // if key is equal to a player attack
      case "v":
        player.attack3();
        break; // if key is equal to a player attack
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
      case "m":
        enemy.attack2();
        break; // if key is equal to a player attack
      // case "n":
      //   enemy.attack3();
      //   break; // if key is equal to a player attack
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
