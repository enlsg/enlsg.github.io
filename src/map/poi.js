import Map from './Map';
import PortalManager from './PortalManager';
if (!$) {
  console.error('jQuery is required');
}

// {
//   "type":"Feature",
//   "geometry":{
//     "type":"Point",
//     "coordinates":[103.818165,1.270491]
//   },
//   "properties":{
//     "title":"Japanese Navy Admiral Tomb",
//     "p":"N",
//     "d": "N",
//     "i": "https://lh3.ggpht.com/4-rBuvi2ZUi7N6FrA9iasInqeSoV-DI3W8wvDv7B9366MIvhSoY9N3dndS0rTFED6p1SC04b1hGITIUoICKa",
//     "id":"103.818165,1.270491",
//     "desc": "Located near Mount Faber, this tombstone is the final resting place for a Japanese naval officer who was buried there in 1943."
//   }
// },

$(() => {
  if (window.mapboxAccessToken) {
    const map = new Map(window.mapboxAccessToken);
    map.style('mapbox://styles/uzzikie12/cjp0txnoj0l122rpbmt0bt4j6')
       .center(1.362, 103.8123)
       .zoom(10)
       //.withGeoControl()
       //.withScaleControl()
       //.withNavigationControl()
       .renderTo($('#map').get(0))
       .ready(() => {
         if (window.poi) {
           (new PortalManager(map))
             .setPortals(window.poi)
             .render();
         }
       });
  } else {
    console.error('Missing mapboxAccessToken');
  }
});
