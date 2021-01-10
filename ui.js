$(document).on("mousemove", function(event) {
    $('#character').css('left', event.pageX - ($('#character').width()/2) + 'px');
});

var scrollTimer = 0;
var lastScrollFireTime = 0;

$(document).ready(function() {
    
    let phase = 0;
  
    function updatePhase(val) {
        if (phase !== 0 && phase !== 5) {
            console.log(phase + parseInt(val));
            phase = phase + parseInt(val);
        }
        console.log(phase);
    }

    
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
    $('#story').bind(mousewheelevt, function(e){
        var evt = window.event || e //equalize event object     
        evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
        var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

        var scrollInterval = 100;
        var now = new Date().getTime();

        function processScroll() {
            if(delta > 0) {
                //scroll up
                console.log('up');
                updatePhase(-1);
            }
            else{
                //scroll down
                updatePhase(1);
            } 
        }
        if (!scrollTimer) {
            if (now - lastScrollFireTime > (3 * scrollInterval)) {
                processScroll();   // fire immediately on first scroll
                lastScrollFireTime = now;
            }
            scrollTimer = setTimeout(function() {
                scrollTimer = null;
                lastScrollFireTime = new Date().getTime();
                processScroll();
            }, scrollInterval);
        }

    });    
});
