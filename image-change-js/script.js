function changeimage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "bulboff.gif";
    } else {
        image.src = "bulbon.gif";
    }
}

// from jsfiddle

$('#light-bulb2').click(function cubeswitch() {
    if ($('#light-bulb2').hasClass('off')) {
        $('#light-bulb2').css({
            'opacity': '0'
        });
    } else {
        $('.cube-switch').addClass('active');
        $('#light-bulb2').css({
            'opacity': '1'
        });
    }
});
