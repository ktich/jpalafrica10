$(document).ready(function(){
$(".our-work").on('click', function(event){
  
  //change all other countries to regular background
    $(".our-work").each(function(i){
      var currentElement = '#'+$(".our-work").get(i).id;
      $(currentElement).css("fill", "#f2c200");
    });
    
    //display no content in .detail box
    $(".content").each(function(i){
      var currentContent = $(".content").get(i);
      $(currentContent).css("display", "none");
    })
    
    //change the clicked country and display corresponding content
    var countryId =  '#'+event.target.id;
    var textClass = '.'+event.target.id;
    $(countryId).css("fill", "rgba(0,0,0,0.5)");
    $(textClass).css("display", "block");
    $(".country-click").css("display","none");
  })
});

$('.timeline').timelify()

