//  in viewport

var allSections = document.getElementsByTagName('section'),
    windowHeight = window.innerHeight;

window.addEventListener('scroll', inViewport);

function inViewport(){
    for (var i = 0; i < allSections.length; i++) {
        var viewportOffset = allSections[i].getBoundingClientRect(),
            top = viewportOffset.top;
        if(top < windowHeight){
            allSections[i].setAttribute('class', 'in-viewport');
        }
    }
}

inViewport();
