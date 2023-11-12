let vid = document.getElementById("myVideo");

function playonmute() {
    vid.play();
}

function pausevideo(){
    vid.pause();
    vid.currentTime = 0;
}