const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startspeech = document.getElementById('speech').play()
const afterspeech = document.getElementById('painspeech')
     setTimeout(() => {
      afterspeech.play()
     }, 98000)


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
//   const sentences = ['This is the first sentence.', 'This is the second sentence.', 'This is the third sentence.', 'This is the fourth sentence.', 'This is the fifth sentence.'];
// let currentSentenceIndex = 0;

// function drawSentence() {
//   const p = document.createElement('p');
//   p.innerText = sentences[currentSentenceIndex];
//   document.body.appendChild(p);
  
//   currentSentenceIndex++;
//   if (currentSentenceIndex >= sentences.length) {
//     currentSentenceIndex = 0;
//   }
  
//   setTimeout(function() {
//     p.remove();
//   }, 5000); // Remove the sentence after 5 seconds
// }

// drawSentence();





window.addEventListener('DOMContentLoaded', (event) => {
    setInterval(() => {
      let images = document.getElementsByTagName('img');
	for(let i = 0; i < images.length; i++) {
		images[i].classList.add('fade-in');
	}
    },80000)
});

// The setInterval() method takes two arguments - a function to execute and the time interval (in milliseconds) at which to execute it.

// selects all the <img> elements Inside the loop, the class "fade-in" is added to each <img> element using the classList.add() method.

// The setInterval() function runs this code block every 80 seconds (80000 milliseconds) until the timer is stopped or the page is refreshed.

// In summary, the code fades in all the images on the page in intervals of 80 seconds after the DOM content is fully loaded.
// The classList is a property of the HTMLElement interface that returns the list of classes of an element. It is a read-only property, but it also provides methods to manipulate the classes of an element.

// The code uses the classList.add() method to add a new class to the list of classes of each <img> element. In this case, the new class being added is "fade-in".

// Adding the "fade-in" class to an element is a common technique used in web development to create animations or transition effects. In this case, it is likely that there is CSS code that defines the styles for the "fade-in" class, which would be applied to each <img> element to make it fade in gradually.





 canvas.width = 1024;
 canvas.height = 576;