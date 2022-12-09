$(document).ready(function(){
    // needed to do this because the albums would not load if I used CSS to default hide. 
    $(window).on('load', function() {
        $(".hidden").hide()
       });

    //    THESE ARE THE FUNCTIONS TO CLICK THE BOXES THAT WILL OPEN THE CITY INFO AND HIDE THE BOX
    $("#palermoCard").click(function(){
        $("#palermo").toggle("slow");
        $("#palermoCard").hide("slow");
      });

    $("#cefaluCard").click(function(){
        $("#cefalu").toggle("slow");
        $("#cefaluCard").hide("slow");
      });

    $("#cataniaCard").click(function(){
        $("#catania").toggle("slow");
        $("#cataniaCard").hide("slow");
      });

    $("#romaCard").click(function(){
        $("#roma").toggle("slow");
        $("#romaCard").hide("slow");
      });

    $("#firenzeCard").click(function(){
        $("#firenze").toggle("slow");
        $("#firenzeCard").hide("slow");
      });

    $("#veronaCard").click(function(){
        $("#verona").toggle("slow");
        $("#veronaCard").hide("slow");
      });

    $("#veneziaCard").click(function(){
        $("#venezia").toggle("slow");
        $("#veneziaCard").hide("slow");
      });

    $("#parmaCard").click(function(){
        $("#parma").toggle("slow");
        $("#parmaCard").hide("slow");
      });

      $("#cinqueCard").click(function(){
        $("#cinque").toggle("slow");
        $("#cinqueCard").hide("slow");
      });

// THESE FUNCTIONS ARE A CLICK ON THE TITLE OF THE CITY INFO TO HIDE AND RESHOW THE BOX
$("#palermoTitle").click(function(){
    $("#palermo").toggle("slow");
    $("#palermoCard").show("slow");
  });

$("#cefaluTitle").click(function(){
    $("#cefalu").toggle("slow");
    $("#cefaluCard").show("slow");
  });

$("#cataniaTitle").click(function(){
    $("#catania").toggle("slow");
    $("#cataniaCard").show("slow");
  });

$("#romaTitle").click(function(){
    $("#roma").toggle("slow");
    $("#romaCard").show("slow");
  });

$("#firenzeTitle").click(function(){
    $("#firenze").toggle("slow");
    $("#firenzeCard").show("slow");
  });

$("#veronaTitle").click(function(){
    $("#verona").toggle("slow");
    $("#veronaCard").show("slow");
  });

$("#veneziaTitle").click(function(){
    $("#venezia").toggle("slow");
    $("#veneziaCard").show("slow");
  });

$("#parmaTitle").click(function(){
    $("#parma").toggle("slow");
    $("#parmaCard").show("slow");
  });

$("#cinqueTitle").click(function(){
    $("#cinque").toggle("slow");
    $("#cinqueCard").show("slow");
  });

  });

  
//   Using the leaflet stuff for this now
  var map = L.map('map', {
    center: [41.9028, 12.4964], zoom: 6 //lat long is rome
})

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);


// having major issues here. Not sure how to do this.
//Adding points for all of the italian cities using the JSON file from simplemaps italy database. 

// fetch('it.json')
//     .then(response =>.json())
//     .then(data => {
//         var citiesItaly = JSON.parse(?);
//     })

// var citiesItaly = JSON.parse(
    
// );

// console.log(citiesItaly);
// for (var i=0; i < citiesItaly.length; i++){
// //    let city be the city in the JSON
//     var city = citiesItaly [i];
// // Make marker for each
//     var marker = L.marker([city.lat, city.lng]);
//     marker.addTo(map)
// // giving a label/pop up
//     marker.bindPopup(city.city);

// }

// Create markers for some of the major cities in Italy and add them to the map
var firenzeMarker = L.marker([43.7696, 11.2558]).addTo(map);
var veneziaMarker = L.marker([45.4408, 12.3155]).addTo(map);

// Add labels to the markers
firenzeMarker.bindPopup("<b>Firenze</b>");
veneziaMarker.bindPopup("<b>Venezia</b>");