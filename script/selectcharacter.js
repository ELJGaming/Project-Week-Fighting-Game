// const canvasElement = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
const characterMusic = document.getElementById('selectcharacterMusic').play()
const characters = document.querySelectorAll('.character');
const displayTitle = document.querySelector('#displayCharacterSelection');
let count = 1;
const obj = {
  character1: fighters.fantasyWarrior,
  character2: fighters.martialHero,
  character3: fighters.kenji,
  character4: fighters.samauriMack,
  character5: fighters.evilWarrior,
  character6: fighters.huntress,
}
if (count === 1) playAudio('../mp3/player1selection.mp3')

characters.forEach((character) => {
  character.addEventListener('click', () => {
    if (count === 1) playAudio('../mp3/player2selection.mp3')
    const fighter = character.id;
    localStorage.setItem(`player${count}`, JSON.stringify(obj[fighter]));
    count++;
    if (count === 3) window.location.href = "../html/selectmap.html";
  });
});

function playAudio(file){
  // displayTitle.innerText = "PLAYER 2 PICK YOUR CHARACTER";
  const audio = new Audio(file);
  audio.play();
}
//If there is already a selected character remove the 'selected' class from that character element.
//Assign the clicked character element to the selectedCharacter variable.
//Add the 'selected' class to the clicked character element. The 'selected' class is used to visually indicate which character is currently selected.