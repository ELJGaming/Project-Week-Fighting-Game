const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const characters = document.querySelectorAll('.character');
const backMusic = document.getElementById("backgroundMusic");
backMusic.play();//begin playback of the media file
const toggleMusicButton = document.getElementById("button1");
toggleMusicButton.addEventListener("click", () => {
  backMusic.paused ? backMusic.play() : backMusic.pause();
});
      let selectedCharacter = null;

      characters.forEach((character) => {
        character.addEventListener('click', () => {
          if (selectedCharacter) {
            selectedCharacter.classList.remove('selected');
          }
          selectedCharacter = character;
          selectedCharacter.classList.add('selected');
        });
      });

     

