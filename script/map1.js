const canvas = document.getElementById('map1');
const ctx = canvas.getContext('2d');
const Map1 = document.getElementById("map1Music");
//begin playback of the media file
const toggleMusicButton = document.getElementById("button1");
toggleMusicButton.addEventListener("click", () => {
    Map1.paused ? Map1.play() : Map1.pause();
});
     

canvas.width = 1024;
canvas.height = 576;