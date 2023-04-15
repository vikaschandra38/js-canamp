// Import stylesheets
import './style.css';

var video = document.getElementById('my-video');
var playBtn = document.querySelector('#play-button');
video.addEventListener('click', function (event) {
  playBtn.style.visibility = 'hidden';
  video.currentTime = 0;
  video.muted = false;
  video.play();
});

playBtn.addEventListener('click', function () {
  video.click();
});

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      playBtn.style.visibility = 'visible';
      video.muted = true;
    }
  });
});

observer.observe(video);
