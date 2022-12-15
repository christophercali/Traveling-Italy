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

// THESE FUNCTIONS ARE A CLICK ON THE TITLE OF THE CITY INFO TO HIDE AND RESHOW THE BOX ABOVE
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

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// looping through the JSON file to give the names of all the cities in Italy for exploration
fetch('it.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var city = data[i];
      var marker = L.circleMarker([city.lat, city.lng], {
        title: city.city,
        radius: city.population/50000,
        color: 'green',
        weight:1
      }).addTo(map);
    
      marker.bindPopup(city.city);
    }
  });

// adding specifric markers for the cities I visited
var palermo = L.marker([38.12, 13.35]).addTo(map);
var cefalu = L.marker([38.04, 14.01]).addTo(map);
var catania = L.marker([37.31, 15.09]).addTo(map);
var roma = L.marker([41.90, 12.50]).addTo(map);
var firenze = L.marker([43.77, 11.25]).addTo(map);
var venezia = L.marker([45.44, 12.33]).addTo(map);
var parma = L.marker([44.80, 10.32]).addTo(map);
var cinqueTerre = L.marker([44.15, 9.65]).addTo(map);
var verona = L.marker([45.44, 10.99]).addTo(map);

// adding pop ups to each marker with information about the city
palermo.bindPopup("<b>Palermo</b><br>Palermo is the capital of Sicily that has a vibrant street life and many historic sites.");
cefalu.bindPopup("<b>Cefalu</b><br>Cefalu is a coastal town in Sicily, known for its wonderful beaches and historic town.");
catania.bindPopup("<b>Catania</b><br>Catania is a city on the east coast of Sicily with beautiful Baroque architecture.");
roma.bindPopup("<b>Roma</b><br>Rome is the capital of Italy and has many iconic Italian landmarks like the Coliseum and Trevi Fountain");
firenze.bindPopup("<b>Firenze</b><br>Florence is a city in central Italy best known for its art.");
venezia.bindPopup("<b>Venezia</b><br>Venice is a city in northeastern Italy known for its canals. It is at high risk of flooding due to climate change.");
parma.bindPopup("<b>Parma</b><br>Parma is a city in northern Italy known for its prosciutto and parmesan cheese.");
cinqueTerre.bindPopup("<b>Cinque Terre</b><br>Cinque Terre is a combination of 5 villages that has striking views and challenging hikes.");






