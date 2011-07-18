// Main function for planet ubuntu-it

function localizeDate () {
    var months = new Array( 
            'gen', 'feb', 'mar', 'apr', 'mag', 'giu',
            'lug', 'ago', 'set', 'ott', 'nov', 'dic' 
            );
    
    var dates = $('span.date-to-fix');
    for (var i = 0 ; i < dates.length ; i++) {
        var d = dates[i].innerHTML;
        // This add 2 hours to date, fixing localized time (GMT+0200)
        var date = new Date(new Date(d).getTime() + 2 * 60 * 60 * 1000);
        dates[i].innerHTML = date.getDate() + " " + months[date.getMonth()] + " "
                             + date.getFullYear();
        if (d.indexOf(':') > 0 ) { // date contains time: 
            minutes = date.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            dates[i].innerHTML += " alle " + date.getHours() + ":" + minutes;
        }
    }
}
        


function main() {
    localizeDate ();
    accessibility();
}

$(function() {

    var offset = $("#contacts").offset();
    var topPadding = 30;

    $(window).scroll(function() {
    
        if ($(window).scrollTop() > offset.top) {       
/*            
            $("#contacts").stop().animate({            
                marginTop: $(window).scrollTop() - offset.top + topPadding
            });
*/
            $("#contacts").stop().addClass('fixed');
        
        } else {
        
/*            $("#contacts").stop().animate({ marginTop: 10 }); */
              $("#contacts").stop().removeClass('fixed');
        
        }
        
            
    });

    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
});
