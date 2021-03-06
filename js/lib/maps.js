




var map, map2;

var myOptions = {
  zoom: 16,
  center: new google.maps.LatLng(46.483641, 30.741751),

  styles: [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
      "saturation": "-100"
      }]
    }, {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
      }]
    }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
      }, {
      "lightness": 65
      }, {
      "visibility": "on"
      }]
    }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
      }, {
      "lightness": "50"
      }, {
      "visibility": "simplified"
      }]
    }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "saturation": "-100"
      }]
    }, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
      }]
    }, {
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [{
      "lightness": "30"
      }]
    }, {
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{
      "lightness": "40"
      }]
    }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
      }, {
      "visibility": "simplified"
      }]
    }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "hue": "#ffff00"
      }, {
      "lightness": -25
      }, {
      "saturation": -97
      }]
    }, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
      "lightness": -25
      }, {
      "saturation": -100
      }]
    }]
};



var myOptions2 = {
  zoom: 11,
  center: new google.maps.LatLng(50.451143, 30.622959),
  styles: [{
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [{
      "saturation": "-100"
      }]
    }, {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
      }]
    }, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
      }, {
      "lightness": 65
      }, {
      "visibility": "on"
      }]
    }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
      }, {
      "lightness": "50"
      }, {
      "visibility": "simplified"
      }]
    }, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
      "saturation": "-100"
      }]
    }, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
      }]
    }, {
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [{
      "lightness": "30"
      }]
    }, {
    "featureType": "road.local",
    "elementType": "all",
    "stylers": [{
      "lightness": "40"
      }]
    }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "saturation": -100
      }, {
      "visibility": "simplified"
      }]
    }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "hue": "#ffff00"
      }, {
      "lightness": -25
      }, {
      "saturation": -97
      }]
    }, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [{
      "lightness": -25
      }, {
      "saturation": -100
      }]
    }]
};

map = new google.maps.Map(document.getElementById("map-odessa"),
  myOptions);
marker = new google.maps.Marker({
  position: new google.maps.LatLng(46.483641, 30.741751),
  map: map,
  title: 'Магазин в Одессе'
});

map2 = new google.maps.Map(document.getElementById("map-kiev"),
  myOptions2);
marker2 = new google.maps.Marker({
  position: new google.maps.LatLng(50.451143, 30.622959),
  map: map2,
  title: 'Магазин Киева'
});