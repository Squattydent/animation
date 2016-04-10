function changeimage() {
    var image = document.getElementById('myImage');
    if (image.src.match("true")) {
        image.src = "moringa-white.png";
    } else {
        image.src = "true.jpg";
    }
}
