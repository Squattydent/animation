function changeimage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "bulboff.gif";
    } else {
        image.src = "bulbon.gif";
    }
}

// from jsfiddle

//function cubeswitch() {
//    var image = document.getElementById("light-bulb2");
//    if (image.)
//        if ($('.cube-switch').hasClass('active')) {
//            $('.cube-switch').removeClass('active');
//            $('#light-bulb2').css({
//                'opacity': '0'
//            });
//        } else {
//            $('.cube-switch').addClass('active');
//            $('#light-bulb2').css({
//                'opacity': '1'
//            });
//        }
//}

$('cmn-toggle').click(function () {

    $("#light-bulb2").toggleClass('on');

});
