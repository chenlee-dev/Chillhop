
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var slides = document.getElementsByClassName('details');

    if(n > slides.length) {slideIndex = 1};
    if(n < 1) {slideIndex = slides.length};

    for( let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// when scrolling

var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(prevScrollpos > currentScrollPos){
        document.getElementById('nav-bar').style.top = "0";
    } else {
        document.getElementById('nav-bar').style.top = "-100px"
    }
    prevScrollpos = currentScrollPos;
}

// login

function openNav(){
    document.getElementById('myslidepanel').style.width = "20%";
}
function closeNav(){
    document.getElementById('myslidepanel').style.width = "0";
}


