let myVideo = document.getElementById("myVideo");
let btnPlay = document.getElementById("btnPlay");
let btnPause = document.getElementById("btnPause");
let btnStop = document.getElementById("btnStop");
let timeOut = document.getElementById("#timeOut");
let vidNumOut = document.getElementById("vidNum");
let rapBtn = document.getElementById("rap");
let carsBTn = document.getElementById("cars");
let hitsBtn = document.getElementById("hits");
let placesBtn = document.getElementById("places");
let timer = null;
btnPlay.addEventListener("click", playVideo);
btnPause.addEventListener("click", pauseVideo);
btnStop.addEventListener("click", stopVideo);
btnNext.addEventListener("click", nextVideo);
rapBtn.addEventListener("click", listRap);
placesBtn.addEventListener("click", listPlaces);
function listPlaces() {
  listOfVideos = dBase.places;
  myVideo.src = dBase.places[0];
  vidNumOut.innerHTML = 1 + "/" + listOfVideos.length;
}
function listRap() {
  listOfVideos = dBase.rap;
  myVideo.src = dBase.rap[0];
  vidNumOut.innerHTML = 1 + "/" + listOfVideos.length;
}
hitsBtn.addEventListener("click", listHits);
function listHits() {
  listOfVideos = dBase.hits;
  myVideo.src = dBase.hits[0];
  vidNumOut.innerHTML = 1 + "/" + listOfVideos.length;
}
carsBTn.addEventListener("click", listCars);
function listCars() {
  listOfVideos = dBase.cars;
  myVideo.src = dBase.cars[0];
  vidNumOut.innerHTML = 1 + "/" + listOfVideos.length;
}
let listOfVideos = ["maldive.mp4", "dubai.mp4"];

let dBase = {
  hits: ["hits2.mp4", "hits3.mp4"],
  rap: ["rap1.mp4", "rap2.mp4"],
  cars: ["cars1.mp4", "cars2.mp4"],
  places: ["maldive.mp4", "bali.mp4"],
};
let vidPlaying = 1;
function pauseVideo() {
  myVideo.pause();
}
function stopVideo() {
  myVideo.pause();
  myVideo.currentTime = 0;
}
function playVideo() {
  myVideo.play();
}
function nextVideo() {
  if (vidPlaying < listOfVideos.length) {
    console.log("first", vidPlaying);
    console.log("first", listOfVideos.length);

    vidPlaying++;
  } else {
    vidPlaying = 1;
  }
  myVideo.src = listOfVideos[vidPlaying - 1];
  vidNumOut.innerHTML = vidPlaying + "/" + listOfVideos.length;
}
function skipVideo() {
  // doublick on video to skip 10 s
  myVideo.currentTime += 10;
}
