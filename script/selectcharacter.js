// const canvasElement = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
const characterMusic = document.getElementById('selectcharacterMusic').play()
const characters = document.querySelectorAll('.character');
let count = 1;
const obj = {
  character1: fighters.fantasyWarrior,
  character2: fighters.martialHero,
  character3: fighters.kenji,
  character4: fighters.samauriMack,
  character5: fighters.evilWarrior,
  character6: fighters.huntress,
}

characters.forEach((character) => {
  character.addEventListener('click', () => {
    const fighter = character.id;
    localStorage.setItem(`player${count}`, JSON.stringify(obj[fighter]));
    count++;
    if (count === 3) window.location.href = "../html/selectmap.html";
  });
});

//If there is already a selected character remove the 'selected' class from that character element.
//Assign the clicked character element to the selectedCharacter variable.
//Add the 'selected' class to the clicked character element. The 'selected' class is used to visually indicate which character is currently selected.