// Import stylesheets
import './style.css';

var video = document.getElementById('my-video');

video.addEventListener('click', function () {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
});
