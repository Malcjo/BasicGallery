/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function open() {
//     document.getElementById("mydropdown").classList.toggle("show");
// }

var slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("demo");
    //checking if current slide index is going past the end or before the beingning index
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex -1].className += " active";
}


