// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
const selectMap = document.getElementById("selectMap").play();
const mapsElements = document.querySelectorAll('.mas');
//begin playback of the media file

const obj = {
      map1: maps.map1,
      map2: maps.map2,
      map3: maps.map3
};

const audio = new Audio('../img/mapselection.mp3');
audio.play();

mapsElements.forEach((mapElement) => {
      mapElement.addEventListener('click', () => {
            const map = mapElement.id;
            localStorage.setItem('map', JSON.stringify(obj[map]));
            window.location.href = "../html/start.html";
      });
});
