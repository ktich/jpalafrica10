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
  });

//tabs on our-work page
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
  });

//linking to tab content using the tab id
var url = document.location.toString();
if (url.match('#tab-research')) {
    $('#tab-research').addClass('current');
};

if (url.match('#tab-policy')) {
  $('#tab-policy').addClass('current');
};

if (url.match('#tab-community')) {
  $('#tab-community').addClass('current');
};

// Change hash for page-reload
$('.tab-link a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
});

//scroll button on index page - full-screen header
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
//for arrow click part (PART2)
 $('.header-arrow').on('click',function () {
  $("html").scrollTop(0);
   $('html, body').animate({
     scrollTop: $(".main-landing").offset().top
 }, 1000);
 });

});

$('.timeline').timelify()

