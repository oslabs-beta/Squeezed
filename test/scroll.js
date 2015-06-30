
function setCookie(value){
    localStorage.setItem('page_scroll', value);
}

function getCookie() {
    return localStorage.getItem('page_scroll');
}

function saveScroll(){ // added function
    var x = (document.pageXOffset?document.pageXOffset:document.body.scrollLeft)
    var y = (document.pageYOffset?document.pageYOffset:document.body.scrollTop)
    var value=x + "_" + y
    setCookie(value);
}

function loadScroll(){ // added function
    var inf = getCookie();
    if(!inf) {
        return
    }
    var ar = inf.split("_")
    if(ar.length == 2) {
      setTimeout(function() {
        window.scrollTo(parseInt(ar[0]), parseInt(ar[1]))
      }, 0);
    }
}