$( document ).ready(function(){

  $(".button-collapse").sideNav();

  $(document).ready(function(){
    initMap();
  });
    //create google maps with lat/lng
    function initMap() {
        var latlng = new google.maps.LatLng(lat, lng);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: latlng,
          mapTypeId: "hybrid"
        });
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
  }//end of initMap
});
