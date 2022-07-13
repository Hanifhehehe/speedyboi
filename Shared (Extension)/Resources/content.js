var speedIncrement = 0.1
var speedCurrent = 1
var playingVideo = document.querySelectorAll("video");


document.addEventListener("keydown", function(event) {
    manipulateSpeed(event.key);
})

function resetPlayingVideo() {
    playingVideo = null
    playingVideo = document.querySelectorAll("video")
}

function manipulateSpeed(key) {
    
    resetPlayingVideo();
    switch (key) {
        case "g":
            speedComfortable();
            showSpeed();
            break;
        case "r":
            speedReset();
            showSpeed();
            break;
        case "d":
            speedFaster();
            showSpeed();
            break;
        case "s":
            speedSlower();
            showSpeed();
            break;
        case "v":
            console.log(speedCurrent.toString().slice(0,3));
            break;
        case "√":
            alert("Current playback speed is " + speedCurrent.toString().slice(0,3));
            break;
    
        default:
            break;
    }
}

function showSpeed() {
    
    console.log(speedCurrent.toString().slice(0,3));
    // parseInt(speedCurrent);
    return speedCurrent
}


function speedIncrease() {
    speedCurrent = speedCurrent + speedIncrement
    return speedCurrent
}

function speedDecrease() {
    speedCurrent = speedCurrent - speedIncrement
    return speedCurrent
}

function speedFaster() {
    speedIncrease();
    for (var video of playingVideo) {
        video.playbackRate = speedCurrent
    }
}

function speedSlower() {
    speedDecrease();
    for (var video of playingVideo) {
        video.playbackRate = speedCurrent
    }
}

function speedComfortable() {
    speedCurrent = 1.8
    for (var video of playingVideo) {
        video.playbackRate = speedCurrent
    }

}

function speedReset() {
    speedCurrent = 1
    for (var video of playingVideo) {
        video.playbackRate = speedCurrent
    }
}
