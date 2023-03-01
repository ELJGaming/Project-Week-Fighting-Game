const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startspeech = document.getElementById('speech').play()
// function delay(){
//     setTimeout(function(){
//        
//     },5000);}



//   const images = ['howtoplay.jpg', 'image2.jpg', 'image3.jpg'];
//   let currentImageIndex = 0;
  
//   function drawImage() {
//     const img = new Image();
//     img.src = images[currentImageIndex];
//     img.onload = function() {
//       ctx.drawImage(img, 0, 0, 1024, 576);
//     };
    
//     currentImageIndex++;
//     if (currentImageIndex >= images.length) {
//       currentImageIndex = 0;
//     }
//   }
  
//   setInterval(drawImage, 7000); // Switch image every 7 seconds


window.addEventListener('DOMContentLoaded', (event) => {
    setInterval(() => {
        let images = document.getElementsByTagName('img');
	for(let i = 0; i < images.length; i++) {
		images[i].classList.add('fade-in');
	}
    },80000)
});


     

canvas.width = 1024;
canvas.height = 576;