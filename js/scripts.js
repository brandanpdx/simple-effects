$(document).ready(function() {
    $(".clickable").click(function() {
      $("img").show();
      $("#walrus-showing").slideToggle();
      $("#walrus-hidden").slideToggle();
    });
  });