$( document ).ready(function(){

  $(".button-collapse").sideNav();

  //call google maps function on document ready
  initMap();

});

//google maps
function initMap() {
  var latlong = {lat: 33.7742969, lng: -84.4063173};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: latlong
  });
  var marker = new google.maps.Marker({
    position: latlong,
    map: map
  });
}
