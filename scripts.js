function goFullScreen() {
    let elem = document.getElementById("mainScreen");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function changeColor() {
    let color = document.getElementById("colorInput").value;
    document.getElementById("mainScreen").style.backgroundColor = color;
}
