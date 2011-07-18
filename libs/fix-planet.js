// This function is used to init fix processing
function fixplanet() {
  fixurls();
}



// This funtiontion fixes urls of ubuntu-it News that contain 
// '&amp;' instead of '&'

function fixurls () {
  var h2 = document.getElementsByTagName('h2');
  var i = 0;
  for (i = 0 ; i < h2.length ; i++ ) {
    if (h2[i].className == 'post-title') {
      var posttitle = h2[i].getElementsByTagName('a')[0];
      var href = posttitle.href;
      if (href.indexOf('http://www.ubuntu-it.org/index.php?mact=News', 0) == 0) {
        while(href.indexOf('&amp;') > 0) {
          href = href.replace('&amp;', '&');
        }
      }
      posttitle.href = href;
    }
  }
}

