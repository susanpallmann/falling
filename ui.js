$(document).on("mousemove", function(event) {
    $('#character').css('left', event.pageX - ($('#character').width()/2) + 'px');
});
