$(document).ready(function() {
    
function openNav() {
    document.getElementById("mySidenav").style.width = "12%";
    document.getElementById("main").style.marginLeft = "12%";
    document.getElementById("menu").style.display = "none";

}    
    
$('#menu').on('click', function (){
    openNav();
})

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline-block";
}

$('.closebtn').on('click', function (){
    closeNav();
})

openNav();
closeNav();    
});