const videos = [
  "reel1.mp4",
  "reel2.mp4",
  "reel3.mp4",
  "reel4.mp4",
  "reel5.mp4",
  "reel6.mp4"
];
let currentVideoIndex = 0;

function changeVideo(direction) {
  currentVideoIndex += direction;

  if (currentVideoIndex < 0) {
    currentVideoIndex = videos.length - 1;
  } else if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0;
  }

  const videoElement = document.getElementById("video");
  videoElement.src = videos[currentVideoIndex];
  videoElement.play();
}