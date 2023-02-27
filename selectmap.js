const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const selectMap = document.getElementById("selectMap");
//begin playback of the media file
const toggleMusicButton = document.getElementById("button1");
toggleMusicButton.addEventListener("click", () => {
  selectMap.paused ? selectMap.play() : selectMap.pause();
});
      // let selectedCharacter = null;

      // characters.forEach((character) => {
      //   character.addEventListener('click', () => {
      //     if (selectedCharacter) {
      //       selectedCharacter.classList.remove('selected');
      //     }
      //     selectedCharacter = character;
      //     selectedCharacter.classList.add('selected');
      //   });
      // });

     

