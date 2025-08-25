const imgElement = document.querySelector(".card-img img");

const images = [
  "assets/pics/hi1.png",
  "assets/pics/hi2.png"
];

let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  imgElement.src = images[current];
}, 700); 

const musicFiles = [
  "assets/music/1.mp3",
  "assets/music/2.mp3",
  "assets/music/3.mp3",
  "assets/music/4.mp3",
  "assets/music/5.mp3",
  "assets/music/6.mp3",
  "assets/music/7.mp3",
  "assets/music/8.mp3",
  "assets/music/9.mp3",
  "assets/music/10.mp3",
];

const playBtn = document.getElementById("playMusicBtn");
const player = document.getElementById("musicPlayer");

playBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * musicFiles.length);
  player.src = musicFiles[randomIndex];
  player.play();
});

