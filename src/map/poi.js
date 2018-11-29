import Map from './Map';
if (!$) {
  console.error('jQuery is required');
}

$(() => {
  if (window.mapboxAccessToken) {
    const map = new Map;
    map.setAccessToken(window.mapboxAccessToken)
       .setMapConfig({
          style: 'mapbox://styles/uzzikie12/cjp0txnoj0l122rpbmt0bt4j6',
          center: [103.8123, 1.362],
          zoom: 10,
          //pitch: 40,
          //bearing: -17.6,
          //hash: true,
          attributionControl: false
       })
       .renderTo($('#map').get(0));
       // .withGeoControl()
       // .withScaleControl();
  } else {
    console.error('Missing mapboxAccessToken');
  }
});
