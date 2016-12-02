document.addEventListener("DOMContentLoaded", function () {
    // mobile nav
    var button = document.getElementById("nav-btn");
    var nav = document.querySelector("nav");
    var faIcon = document.querySelector("i");
    console.log(faIcon);
    button.addEventListener("click", function () {
        console.log('click btn1');
        nav.classList.toggle("visible");
        faIcon.classList.toggle("fa-bars");
        faIcon.classList.toggle("fa-times");
    });

    window.addEventListener('resize', function () {
        if (window.matchMedia("(min-width: 769px)").matches) {
            nav.classList.remove("visible");
            console.log("działa!");
            
        }
    });
    
    var prevSlide = document.getElementById('prev');
    var currSlide = document.getElementById('current');
    var nextSlide = document.getElementById('next');
    
    
    var bgImage = [
        "url('../../images/gallery-1.png')", "url('../../images/gallery-2.png')", "url('../../images/gallery-3.png')"];
    
    
    function slider () {
        if(dir == "right" && current < len-1){
        current++;
        middle.style.backgroundImage = "url(" + url + img[current] + ")";
    } else if(dir == "left" && current > 0){
        current--;
        middle.style.backgroundImage = "url(" + url + img[current] + ")";
    }
        
         nextSlide.addEventListener('click', function(){
    console.log('next');
    var i = 0;
        prevSlide.style.backgroundImage = bgImage[i]-1;
        currSlide.style.backgroundImage = bgImage[i];
        nextSlide.style.backgroundImage = bgImage[i]+1;
              
    });
        
//        prevSlide.addEventListener('click', function(){
//    console.log('next');
//        for (var i = 0; i < bgImage.length; i++)
//            {
//        prevSlide.style.backgroundImage = bgImage[2];
//        currSlide.style.backgroundImage = bgImage[1];
//        nextSlide.style.backgroundImage = bgImage[0];
//            }    
//    });
    }
   
    slider();
    
    
//    prevSlide.addEventListener('click', function(){
//    console.log('prev');
//        var i = 1;
//        prevSlide.style.backgroundImage = bgImage[i+1];
//        currSlide.style.backgroundImage = bgImage[i-1];
//        nextSlide.style.backgroundImage = bgImage[i];
//    });
    
//    prevSlide.addEventListener('click', function(){
//        console.log('next dziala');
//        
//        currSlide.style.backgroundImage = "url('../../images/gallery-2.png')";
//        prevSlide.style.backgroundImage = "url('../../images/gallery-1.png')";
//        nextSlide.style.backgroundImage = "url('../../images/gallery-3a.png')";
//    });
});
