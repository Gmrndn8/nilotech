$(document).ready(function() {
  $("a.showPrice").click(function() {
    $("span.price").toggle(3000);
  });
  $("span#pay").click(function() {
    $("p#last").show(4000);
  });
});
