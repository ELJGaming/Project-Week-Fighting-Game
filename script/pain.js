const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startspeech = document.getElementById('speech').play()
// function delay(){
//     setTimeout(function(){
//        
//     },5000);}


  // const images = ['../img/backgrounds/painimg.jpg', '../img/backgrounds/painimg5.jpg', '../img/backgrounds/painimg6.jpg', '../img/backgrounds/painimg1.jpg', '../img/backgrounds/painimg7.jpg'];
  // let currentImageIndex = 0;
  
  // function drawImage() {
  //   const img = new Image();
  //   img.src = images[currentImageIndex];
  //   img.onload = function() {
  //     ctx.drawImage(img, 0, 0, 1024, 576);
  //   };
    
  //   currentImageIndex++;
  //   if (currentImageIndex >= images.length) {
  //     currentImageIndex = 0;
  //   }
  // }
  
  // setInterval(drawImage, 7000); // Switch image every 7 seconds
  const sentences = ['This is the first sentence.', 'This is the second sentence.', 'This is the third sentence.', 'This is the fourth sentence.', 'This is the fifth sentence.'];
let currentSentenceIndex = 0;

function drawSentence() {
  const p = document.createElement('p');
  p.innerText = sentences[currentSentenceIndex];
  document.body.appendChild(p);
  
  currentSentenceIndex++;
  if (currentSentenceIndex >= sentences.length) {
    currentSentenceIndex = 0;
  }
  
  setTimeout(function() {
    p.remove();
  }, 5000); // Remove the sentence after 5 seconds
}

drawSentence();





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