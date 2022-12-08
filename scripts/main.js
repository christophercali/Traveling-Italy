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