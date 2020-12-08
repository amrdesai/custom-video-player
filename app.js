// DOM elements variables
const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progressBar = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Function: Play & pause video
const toggleVideoStatus = () => {
    // Play video
    if (video.paused) {
        video.play();
    } else {
        // Pause video
        video.pause();
    }
};

// Function: Update play/pause icon
const updatePlayIcon = () => {
    if (video.paused) {
        playBtn.innerHTML = "<i class='fa fa-play fa-2x'>";
    } else {
        playBtn.innerHTML = "<i class='fa fa-pause fa-2x'>";
    }
};

// Fucntion: Update progress bar
const updateProgress = () => {
    progressBar.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    // Get Seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    // Update timestamp
    timestamp.innerHTML = `${minutes}:${seconds}`;
};

// Fucntion: Change video timer & progress
const setVideoProgress = () => {
    video.currentTime = (+progress.value * video.duration) / 100;
};

// Fucntion: Stop video
const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
};

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progressBar.addEventListener('change', setVideoProgress);
