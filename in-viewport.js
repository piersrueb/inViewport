//  in viewport js
//  Author Piers Rueb
//  https://github.com/piersrueb/inViewport

let wh = window.innerHeight;
let tol = wh * 0.77; //  scroll tolerance - eg. 77% from page top

const inViewport = (elem, pix, cls) => {
    if (document.getElementsByClassName(elem).length > 0) {
        let elems = document.getElementsByClassName(elem);
        const check = () => {
            for (let i = 0; i < elems.length; i++) {
                let off = elems[i].getBoundingClientRect().top;
                if (off <= pix) {
                    elems[i].classList.add(cls);
                } else {
                    elems[i].classList.remove(cls);
                }
            }
            requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
    }
};
