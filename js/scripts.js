$(document).ready(function() {
  $("form#subscription").submit(function(event) {
    event.preventDefault();
  });
  $("a.rent").click(function() {

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
