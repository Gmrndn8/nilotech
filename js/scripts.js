$(document).ready(function() {
  $("a.showPrice").click(function() {
    $("span.price").toggle(3000);
  });
  $("span#pay").click(function() {
    $("p#last").show(4000);
  });
});

/*google maps*/
function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(-1.2921, 36.8219),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }

  var marker = new google.maps.Marker({
    position: mapOptions,
    map: map,
    title: 'NiloTech!'
  });

  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
