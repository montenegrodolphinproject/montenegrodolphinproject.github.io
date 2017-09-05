// --------------------------------------------------------------------
// Google Map
// --------------------------------------------------------------------

function initGoogleMap(el, lat, lng) {
  if (!lat || !lng) {
    return;
  }
  //set your google maps parameters
  var $map_zoom = 17;
  /* ZOOM SETTING */

  //google map custom marker icon
  var $marker_url = 'img/google-map-marker.png';

  //we define here the style of the map
  var style = [
    {
      stylers: [
        {
          hue: '#aaa',
        },
        {
          saturation: 100,
        },
        {
          gamma: 1.15,
        },
        {
          lightness: 5,
        },
      ],
    },
  ];

  //set google map options
  var map_options = {
    center: new google.maps.LatLng(lat, lng),
    zoom: $map_zoom,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: style,
  };
  //initialize the map
  var map = new google.maps.Map(el, map_options);
  //add a custom marker to the map
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map,
    visible: true,
    icon: $marker_url,
  });
}

export default initGoogleMap;
