$(document).ready(function(){
  $( ".adv_a" ).click(function() {
      $( ".adv_a" ).hide();
    });

  $( ".adv_b" ).click(function() {
      $( ".adv_b" ).hide();
    });

    $("#phlist").sortable({scroll:false, cursor:"grabbing"});

  $(".tbtn1").addClass("acttbable");
  $(".h_table2").hide();
  $(".h_table3").hide();

  $(".tbtn1").click(function () {
        $(".tbtn1").addClass("acttbable");
        $(".tbtn2").removeClass("acttbable");
        $(".tbtn3").removeClass("acttbable");
        $(".h_table2").hide();
        $(".h_table3").hide();
        $(".h_table1").show();
    });
  $(".tbtn2").click(function () {
      $(".tbtn2").addClass("acttbable");
      $(".tbtn1").removeClass("acttbable");
      $(".tbtn3").removeClass("acttbable");
      $(".h_table1").hide();
      $(".h_table3").hide();
      $(".h_table2").show();
  });
  $(".tbtn3").click(function () {
    $(".tbtn3").addClass("acttbable");
    $(".tbtn1").removeClass("acttbable");
    $(".tbtn2").removeClass("acttbable");
    $(".h_table1").hide();
    $(".h_table2").hide();
    $(".h_table3").show();
  });

  $("#CityApp").chained("#CountryApp");
  $("#HospApp").chained("#CityApp");

  $('.Aline').click(function(){
    if($(this).next().hasClass("active"))
    {
        $(this).next().toggleClass("active");
        $(this).next().css({"max-height" : "0"})
    }
    else
    {
        $('.Acontent').css({"max-height" : "0"})
        $('.Acontent').removeClass("active");
        $(this).next().toggleClass("active");
        $(this).next().css({"max-height" : $(this).next().prop('scrollHeight') + 'px'});
        setTimeout(() => {  window.scrollTo(0,document.body.scrollHeight); }, 200);
    }
  });

let index = 1

let lockedright = false;
function slide() {
  if(!lockedright)
  {
    if (index < 3) {
        lockedright = true;
        index += 1;
        $('.slider').css('transition', 'all 0.3s');
        $('.slider').css('transform', 'translate(' + (index) * (-20) + '%)');
        setTimeout(() => {lockedright = false}, 300);
    }
    else {
      lockedright = true;
        index += 1;
        $('.slider').css('transition', 'all 0.3s');
        $('.slider').css('transform', 'translate(' + (index) * (-20) + '%)');
        index = 1;
        setTimeout(() => {  $('.slider').css('transition', 'all 0s');
        $('.slider').css('transform', 'translate(' + (index) * (-20) + '%)'); 
        lockedright = false }, 300);
    }
  }
}

let timer = setInterval(slide, 10000);
$('.right').click(slide);

let lockedleft = false;
$('.left').click(function(){
  if(!lockedleft)
  {
    if(index > 1)
    {
      lockedleft = true;
      index -= 1;
      $('.slider').css('transition', 'all 0.3s');
      $('.slider').css('transform', 'translate(' + (index) * (-20) + '%)');
      setTimeout(() => {lockedleft = false}, 300);
    }
    else {
      lockedleft = true;
      index -= 1;
      $('.slider').css('transition', 'all 0.3s');
      $('.slider').css('transform', 'translate(' + (index) * (-20) + '%)');
      index = 3;
      setTimeout(() => {  $('.slider').css('transition', 'all 0s');
      $('.slider').css('transform', 'translate(' + (index) * (-20) + '%)'); 
      lockedleft = false }, 300);
  }
}
});


});