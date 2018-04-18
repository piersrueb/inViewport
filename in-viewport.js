//  in viewport js

var allSections = document.getElementsByTagName('section'),  //  store all the section tags in an array
    windowHeight = window.innerHeight;  //  get the window height

window.addEventListener('scroll', inViewport);  //  run the funtion on scroll

function inViewport(){
    for (var i = 0; i < allSections.length; i++) {  //  loop through the sections
        var viewportOffset = allSections[i].getBoundingClientRect(),  //  returns the size of an element and its position relative to the viewport
            top = viewportOffset.top;  //  get the offset top
        if(top < windowHeight){  //  if the top offset is less than the window height
            allSections[i].classList.add('in-viewport');  //  add the class
        }
    }
}

inViewport();  //  run the function on init
