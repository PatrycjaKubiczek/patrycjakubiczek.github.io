$(window).on("load", function() {
   $('.loader').fadeOut("fast"); 
});

$(document).ready(function() {
//    $('.loader').css('display', 'none');
function openNav() {
    document.getElementById("mySidenav").style.width = "13%";
    document.getElementById("main").style.marginLeft = "13%";
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

function initMap() {
    
    // map in general
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 50.06465009999999, lng: 19.94497990000002},
            zoom: 14,
            styles: [
            {
    // styling of map
                featureType: 'all',
                elementType: 'landscape',
                stylers: [
                  {lightness: 10},
                  {saturation: -30},
                  {visibility: 'on'},
                ]
            }
            ]
        });
        
        setMarkers(map)
    }
            
       var markers = [];
    
// images of markers    
var imageVegan = './images/marker-green.png';
var imageVeggie = './images/marker-yellow.png';         
var imageOther = './images/marker-red.png';            
var imageIcecreams = './images/marker-blue.png';
            
// info about places on map
var places = [
            //vegan
            ['Krowarzywa', 50.0634449, 19.9370629, 'Sławkowska 8', 1, imageVegan, 'http://krowarzywa.pl/'],
            ['Vegab', 50.05854799999999, 19.943381000000045, 'Starowiślna 6', 1, imageVegan, 'https://www.facebook.com/vegab2015/'],
            ['Nova Krova', 50.048342, 19.944429000000014, 'plac Wolnica 12', 1, imageVegan, 'https://www.facebook.com/novakrovakrakow'],
            ['Bar Wegański', 50.0559, 19.94618, 'Starowiślna 28', 1, imageVegan, 'https://www.facebook.com/Bar-Wega%C5%84ski-561507927285122/'],
            ['Smaki Roślinne', 50.05817, 19.93208, 'Zwierzyniecka 8', 1, imageVegan, 'https://www.facebook.com/Smakiroslinne/'],
            ['Free Farma Burgerownia Roślinna', 50.06066, 19.93503, 'Wiślna 6', 1, imageVegan, 'https://www.facebook.com/veganfarmakrakow/'],
            ['Vege Sun Pizza', 50.07569, 19.96424, '50.07569, 19.96424', 1, imageVegan, 'https://www.facebook.com/VegeSunPizza/'],
            
            //veggie
            ['Wielopole 3', 50.05887, 19.9434, 'Wielopole 3', 2, imageVeggie],
            ['Pod Norenami', 50.06337, 19.93135, 'Krupnicza 6', 2, imageVeggie],
            ['Cafe Młynek', 50.04922, 19.9447, 'plac Wolnica 7', 2, imageVeggie],
            ['Momo. Bar Wegetariański', 50.0523, 19.94263, 'Dietla 49', 2, imageVeggie],
            ['Glonojad', 50.06615, 19.94225, 'plac Jana Matejki 2', 2, imageVeggie],
            ['Miąższ', 50.06615, 19.94225, 'plac Jana Matejki 2', 2, imageVeggie],
            ['Green Day', 50.06145, 19.94187, 'Mikołajska 14', 2, imageVeggie],
            ['Green Way Food for Life', 50.06341, 19.92888, 'Mikołajska 14', 2, imageVeggie],
            ['Karma', 50.06342, 19.93059, 'Krupnicza 12', 2, imageVeggie],
            ['Cheder Cafe', 50.05129, 19.94721, 'Józefa 36', 2, imageVeggie],
            ['Bonobo Księgarnia Kawiarnia Podróżnicza', 50.06115, 19.94053, 'Mały Rynek 4', 2, imageVeggie],
            
            ['Mazaya Falafel', 50.05775, 19.95733, 'Grzegórzecka 40', 2, imageVeggie],
            ['Go healthy', 50.05865, 19.9278, 'Smoleńsk 27', 2, imageVeggie],
            ['Veganic', 50.06449, 19.92739, 'Dolnych Młynów 10', 2, imageVeggie],
            //['', , '', 2, imageVeggie],
    
            //other
            ['Bunkier Cafe', 50.06348, 19.93461, 'pl. Szczepański 3a', 3, imageOther],
            ['Wesoła Cafe', 50.06694, 19.95204, 'Rakowicka 17', 3, imageOther],
    
            //icecreams
            ['Lodziarnia Donizetti', 50.06328, 19.94134, 'Świętego Marka 23', 4, imageIcecreams]
          ];
            

// markers on map  

            
function setMarkers(map) {        

  var shape = {
    coords: [17,28,7,10,10,1,19,1,24,5,27,12],
    type: 'poly'
  };       
    
    
// info window    
var infowindow = null;
infowindow = new google.maps.InfoWindow({
            content: "holding..."
        });


    
for (var i = 0; i < places.length; i++) {
    var place = places[i];
 
    var marker = new google.maps.Marker({
      position: {lat: place[1], lng: place[2]},
      map: map,
      icon: place[5],
      shape: shape,
      title: place[0],
      desc: '<div id="content">'+'<h1 id="firstHeading" class="firstHeading">'+place[0]+'</h1>' + '<div id="bodyContent">'+ '<p>' + place[3] +'</p>' + '<p><a href="'+ place[6] +'">'+ place[0] +'</a>'+ '</p>'+ '</div>' +'</div>',
      animation: google.maps.Animation.DROP, 
      
    });
        marker.type = places[i][3];
        marker.setVisible(true);
        markers.push(marker);
    
//        function colorsOfMarkers (obj, type) {
//        for (i = 0; i < places.length; i++) {
//            if (places[i].type == 1){
//                places[i].icon(imageVegan);
//            } else if (places[i].type == 2) { 
//                places[i].icon(imageVeggie);
//                }
//            else if (places[i].type == 3) { 
//                   var icon = imageOther
//                }
//        }
//    }    

        google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(this.desc );
        infowindow.open(map, this);
        });
    
        google.maps.event.addListener(marker, 'mouseover', function() {
        this.setAnimation(google.maps.Animation.BOUNCE);
        this.setOpacity(0.8);
        
        });
    
        google.maps.event.addListener(marker, 'mouseout', function() {
        this.setAnimation(null);
        this.setOpacity(1);
        });
    
    
    }; // closing for 
}; // closing function set markers
            
    function displayMarkers (obj, type){
 //       console.log(obj, type, places);
        
        var i;
        
        for (i = 0; i < places.length; i++) {
            if (places[i][4] == type) {
                 if ($(obj).is(":checked")) {
                     markers[i].setVisible(true);
//                } else {
//                    markers[i].setVisible(false);    
//                    }
            } else {
                 markers[i].setVisible(false);
            }
        }
    }    
}
    
// search box    
function searching (){
   var search = $('.controls');
    search.on('change', function(){
        var searchtext = $(this).val().toLowerCase();
    
        console.log(searchtext);
        var i;
        
        
        for (i = 0; i < places.length; i++) {
            console.log(places[i][0],places[i][0].indexOf(searchtext));
            var searchLower = places[i][0].toLowerCase();
            if (searchLower.indexOf(searchtext) >= 0 ) {
                var infowindow = null;
    
                infowindow = new google.maps.InfoWindow({
                content: "holding..."
                });

                     markers[i].setAnimation(google.maps.Animation.BOUNCE);
                     infowindow.setContent(markers[i].desc);
                     infowindow.open(map,markers[i]);
                    infowindow.marker = markers[i];
                
                        google.maps.event.addListener(infowindow, 'closeclick', function() {  
                        this.marker.setAnimation(null);
//                      map.panTo(marker.getPosition());            
                    });
//                        google.maps.event.addListener(marker, 'click', function() {
//                            map.setZoom(8);
//                            map.setCenter(this.getPosition()); });
//                    infowindow.open(map, this);
//                } else {
//                    markers[i].setVisible(false);    
//                    }
            } 
            else {
//                google.maps.event.clearListeners(marker, 'click');
            
//                 markers[i].setAnimation(null);
               
                    
//                 markers[i].setVisible(false); 
            }
        }
    });    
    }

    
// checkbox - displaying markers    
    $('#vegancheck').on('click', function (){
       displayMarkers(this, 1);
    });
    
        $('#veggiecheck').on('click', function (){
       displayMarkers(this, 2);
    });
    
        $('#othercheck').on('click', function (){
       displayMarkers(this, 3);
    });
    
        $('#icecream').on('click', function (){
       displayMarkers(this, 4);
    });
    

initMap();
searching();
displayMarkers();
});

