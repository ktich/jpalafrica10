$(document).ready(function(){
$(".our-work").on('click', function(event){
  
    $(".our-work").each(function(i){
      var currentElement = '#'+$(".our-work").get(i).id;
      $(currentElement).css("fill", "#e35925");
    });
    
    $(".content").each(function(i){
      var currentContent = $(".content").get(i);
      $(currentContent).css("display", "none");
    })
    
    var countryId =  '#'+event.target.id;
    var textClass = '.'+event.target.id;
    $(countryId).css("fill", "black");
    $(textClass).css("display", "block");
    $(".country-click").css("display","none");
  })
});

$('.timeline').timelify()

