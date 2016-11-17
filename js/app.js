$(document).ready(function (){
    console.log('działa');
    var nav = $('nav');
    var menu = $('.menu');
//    Zmienna przechowująca pozycję (top) elementu o klasie menu
    var position = menu.offset();
    var top = position.top; 
    console.log(top);

    $(window).scroll(function (){
        console.log('scroll scroll');
        var scrolling = $(document).scrollTop();
        console.log(scrolling);
        
        if(top < scrolling) {
            console.log('scroll part 2')
            menu.addClass('sticky');
        } else {
            console.log('remove class');
            menu.removeClass('sticky');
        }
    }); 
    
    $(window).resize(function(){
        console.log('resizing');
       if(menu.hasClass('sticky')){
          console.log('has class');
//            var menu = nav.offset();
            top = position.top;
            console.log(top);
        
        } else {
            top = nav.offset().top;
            
        }
           
          }); 

    
    
    
});