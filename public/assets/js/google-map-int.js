$(document).ready(function () {
    'use strict';

    var marker;
    function initMap() {
        // The location of Uluru
        var abuja = {lat: 9.103808, lng: 7.443079};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('contact-map1'), {zoom: 14, center: abuja});
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: abuja, map: map});
        marker.addListener('click', toggleBounce);

      }
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    google.maps.event.addDomListener(window, 'load', initMap);

});