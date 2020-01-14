$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").show();
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable-p").click(function() {
    $("#hidden-text").fadeToggle();
  })
});