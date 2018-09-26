//  in viewport js
//  Author Piers Rueb
//  https://github.com/piersrueb/inViewport

function inViewport(elem){
    var allElements = document.getElementsByTagName(elem),
        windowHeight = window.innerHeight;
    window.addEventListener('scroll', elems);
    function elems(){
        for (var i = 0; i < allElements.length; i++) {  //  loop through the sections
            var viewportOffset = allElements[i].getBoundingClientRect(),  //  returns the size of an element and its position relative to the viewport
                top = viewportOffset.top;  //  get the offset top
            if(top < windowHeight){  //  if the top offset is less than the window height
                allElements[i].classList.add('in-viewport');  //  add the class
            } else{
                allElements[i].classList.remove('in-viewport');  //  add the class
            }
        }
    }
    elems();
}

inViewport('section');  //  run the function on all section elements
