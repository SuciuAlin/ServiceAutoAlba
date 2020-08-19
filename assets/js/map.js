"use strict";

      function initMap() {
        const myLatLng = {
          lat: 46.074875, 
          lng: 23.584342
        };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: myLatLng
        });
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "ServiceAuto"
        });
      }