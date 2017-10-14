$( document ).ready(function(){

  $(".button-collapse").sideNav();

  initMap();
  function initMap() {
          var latlng = new google.maps.LatLng(0, 0);
          var map = new google.maps.Map(document.getElementById('google'), {
            zoom: 2,
            center: latlng,
            mapTypeId: "hybrid"
          });
  };
});
