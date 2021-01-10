$(document).on("mousemove", function(event) {
    $('#character').css('left', event.pageX - ($('#character').width()/2) + 'px');
});

var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
$('#story').bind(mousewheelevt, function(e){
    var evt = window.event || e //equalize event object     
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if(delta > 0) {
        //scroll up
        console.log('up');
    }
    else{
        //scroll down
        console.log('down');
    }   
});
