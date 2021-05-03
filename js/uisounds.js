var hover = $("#hover")[0];
$(".hov").mouseenter(function () {
  hover.play();
});

var click = $("#click")[0];
$(".cli").click(function () {
  click.play();
});

$(document).ready(function () {
  $("#stop").on("click", function () {
    $("#stop").hide();
    $(".smuted").toggle();
  });

  $(".smuted").on("click", function () {
    $(".smuted").hide();
    $("#stop").toggle();
  });
});