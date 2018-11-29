import Map from './Map';
if (!$) {
  console.error('jQuery is required');
}

$(() => {
  if (window.mapboxAccessToken) {
    const map = new Map(window.mapboxAccessToken);
    map.style('mapbox://styles/uzzikie12/cjp0txnoj0l122rpbmt0bt4j6')
       .center(1.362, 103.8123)
       .zoom(10)
       //.withGeoControl()
       //.withScaleControl()
       //.withNavigationControl()
       .renderTo($('#map').get(0));
  } else {
    console.error('Missing mapboxAccessToken');
  }
});
