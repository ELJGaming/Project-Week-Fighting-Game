
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const backMusic = document.getElementById("backgroundMusic");
    backMusic.play();//begin playback of the media file
    const toggleMusicButton = document.getElementById("button1");
    toggleMusicButton.addEventListener("click", () => {
      backMusic.paused ? backMusic.play() : backMusic.pause();
    });

    canvas.width = 1024;
    canvas.height = 576;


//     // move sprites 
// // Load the sprite images
// var sprite1 = new Image();
// sprite1.src = "sprite1.png";
// var sprite2 = new Image();
// sprite2.src = "sprite2.png";

// // Define the sprite objects
// var sprite1X = 100; // Initial X position for sprite 1
// var sprite1Y = 100; // Initial Y position for sprite 1
// var sprite1SpeedX = 2; // X speed for sprite 1
// var sprite1SpeedY = 1; // Y speed for sprite 1

// var sprite2X = 200; // Initial X position for sprite 2
// var sprite2Y = 200; // Initial Y position for sprite 2
// var sprite2SpeedX = -1; // X speed for sprite 2
// var sprite2SpeedY = 1; // Y speed for sprite 2

// // Define the main animation loop
// function draw() {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw the sprites
//   ctx.drawImage(sprite1, sprite1X, sprite1Y);
//   ctx.drawImage(sprite2, sprite2X, sprite2Y);

//   // Move sprite 1
//   sprite1X += sprite1SpeedX;
//   sprite1Y += sprite1SpeedY;
//   if (sprite1X + sprite1.width > canvas.width || sprite1X < 0) {
//     sprite1SpeedX = -sprite1SpeedX;
//   }
//   if (sprite1Y + sprite1.height > canvas.height || sprite1Y < 0) {
//     sprite1SpeedY = -sprite1SpeedY;
//   }

//   // Move sprite 2
//   sprite2X += sprite2SpeedX;
//   sprite2Y += sprite2SpeedY;
//   if (sprite2X + sprite2.width > canvas.width || sprite2X < 0) {
//     sprite2SpeedX = -sprite2SpeedX;
//   }
//   if (sprite2Y + sprite2.height > canvas.height || sprite2Y < 0) {
//     sprite2SpeedY = -sprite2SpeedY;
//   }

//   // Request the next animation frame
//   requestAnimationFrame(draw);
// }

// // Start the animation loop
// draw();



// //     /* Style buttons */
// // .btn {
// //   background-color: transparent; /* Blue background */
// //   border: none; /* Remove borders */
// //   color: white; /* White text */
// //   padding: 12px 16px; /* Some padding */
// //   font-size: 30px; /* Set a font size */
// //   position: absolute;
// //   bottom: 115.75px;
// //   right: 567px;
// //   cursor: pointer; /* Mouse pointer on hover */
// // }
  
