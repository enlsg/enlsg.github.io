import mapboxgl from 'mapbox-gl';

/**
 * For building a map
 */
class Map {

  setAccessToken(accessToken) {
    mapboxgl.accessToken = accessToken;
    return this;
  }

  setMapConfig(config) {
    this.config = config;
    return this;
  }

  onMapLoad() {


    // map.addSource("portal_data", {
    //     "type": "geojson",
    //     "data": {
    //         "type": "FeatureCollection",
    //         "features": [
    //       {"type":"Feature","geometry":{"type":"Point","coordinates":[103.818165,1.270491]},"properties": {"title":"Japanese Navy Admiral Tomb", "p":"N", "d": "N", "i": "https://lh3.ggpht.com/4-rBuvi2ZUi7N6FrA9iasInqeSoV-DI3W8wvDv7B9366MIvhSoY9N3dndS0rTFED6p1SC04b1hGITIUoICKa", "id":"103.818165,1.270491", "desc": "Located near Mount Faber, this tombstone is the final resting place for a Japanese naval officer who was buried there in 1943."  }},
    //       {"type":"Feature","geometry":{"type":"Point","coordinates":[103.812194,1.308772]},"properties": {"title":"Istana Woodneuk", "p":"N", "d": "N", "i":"https://lh6.ggpht.com/TkemSsGUK9QWrJaOQNaSo1_W06dGALAr3NTNN-LZ7rj7voWR3ECd9fZU1gMSSXuUp6P7xdzJWPykDQYp80XdqQ", "id":"103.812194,1.308772", "desc": "This abandoned two-storey palace is located near the Singapore Botanic Gardens. It belongs to the State of Johor, and currently out of bounds to outsiders."   }},
    //       {"type":"Feature","geometry":{"type":"Point","coordinates":[103.740621,1.160054]},"properties": {"title":"Raffles Lighthouse", "p":"N", "d": "N", "i":"https://lh5.ggpht.com/vyPyVPoSyj5EQ6qf2fRERKRsWON3yFxo3QMChxxSL-hDThqRwIWPwKGjMAInYkl-jS6qqiF3sgyAKdtgMe6_", "id":"103.740621,1.160054", "desc": "Built in 1855, it's one of two operating lighthouses in Singapore. It's closed to public access except in April, when Maritime Port Authority will conduct educational tours."   }},
    //       {"type":"Feature","geometry":{"type":"Point","coordinates":[103.808102,1.4142]},"properties": {"title":"In Loving Memory Of President Wee", "p":"N", "d": "N", "i": "https://lh5.ggpht.com/sC-S_G8sIxy7OyzIE6sXTn5NX5TTzIfQOg6rMXus5ALMhIfjMc4H3Wc2Puo_QvedxDwWb4FTAuk-dQsL-CMN", "id":"103.808102,1.4142", "desc": "Wee Kim Wee served as the 4th President of Singapore from 1985 to 1993. He asked to be laid to rest at Mandai Columbarium alongside with ordinary citizens instead of Kranji War Cemetery, where late dignitaries are usually buried."  }},
    //       {"type":"Feature","geometry":{"type":"Point","coordinates":[103.831929,1.463843]},"properties": {"title":"The Battle for Singapore", "p":"N", "d": "N", "i": "https://lh4.ggpht.com/X2AlS2HggqRFKOkJvU-mfUL8HGVT6d8MGl497wQS2Sua1oWgs6M_FzI58dZFg0zbtAvU9cReWG7bw5BGO46z1g", "id":"103.831929,1.463843", "desc": "Located at the site of the former British naval base, this plaque commemorate the Battle for Singapore which fell to the Japanese in Febuarary 1942."  }}
    //
    //         ]
    //     }
    // });
    //
    //
    //
    // map.addLayer({
    //     id: "unclustered-point",
    //     type: "symbol",
    //     source: "portal_data",
    //     layout: {
    //         "icon-image": "marker-11",
    //         "icon-optional": true,
    //         "text-size": 11.45,
    //         "text-field": "{title}",
    //         "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //         "text-offset": [0, 0.9],
    //         "text-anchor": "top"
    //     },
    //   "paint": {
    //       //"text-color": "#EBEDEF",
    //       "text-color": "#c7cbd1",
    //       "text-opacity": 0.9,
    //       "text-halo-color": "#131c20",
    //           "text-halo-blur": 0.0,
    //           "text-halo-width": 1
    //   }
    // });
    //
    //
    //
    //
    // map.on('mouseenter', 'unclustered-point', function(e) {
    //     // Change the cursor style as a UI indicator.
    //     map.getCanvas().style.cursor = 'pointer';
    //  });
    //
    // map.on('mouseleave', 'unclustered-point', function() {
    //     map.getCanvas().style.cursor = '';
    // });
    //
    // map.on('click', function(e) {
    //
    //   var features = map.queryRenderedFeatures(e.point, {
    //     layers: ['unclustered-point'] // replace this with the name of the layer
    //   });
    //
    //   if (!features.length) {
    //     return;
    //   }
    //
    //   var feature = features[0];
    //
    //   var title = feature.properties.title;
    //   var image = feature.properties.i;
    //   var desc = feature.properties.desc;
    //   var latlng = feature.properties.id;
    //
    //   var data = '<div class="img2" id="p103.818165,1.270491" style="font-size: 11px;text-align: left; height:340px; width:240px; border: 1px solid rgba(0,0,0,0.5); background-size: cover; background-repeat:no-repeat; background-position:center;background-image:url(' + image + ') !important"><div style="padding: 6px; padding-bottom:4px; width:228px; position: absolute; background:rgba(255,255,255, 0.7);"><a style="font-size: 12px;color: green;" href="https://intel.ingress.com/intel?ll=' + latlng + '&z=17&pll=' + latlng + '" target="_blank" >' + title + '</a><br>' + desc + '<br/></div></div>';
    //
    //
    //
    //   var popup = new mapboxgl.Popup({ offset: [0, 0] })
    //     .setLngLat(feature.geometry.coordinates)
    //     .setHTML(data)
    //     .setLngLat(feature.geometry.coordinates)
    //     .addTo(map);
    //
    // });
    //
    //
    // // Insert the layer beneath any symbol layer.
    // var layers = map.getStyle().layers;
    //
    // var labelLayerId;
    // for (var i = 0; i < layers.length; i++) {
    //     if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    //         labelLayerId = layers[i].id;
    //         break;
    //     }
    // }
    //
    // map.addLayer({
    //     'id': '3d-map',
    //     'source': 'composite',
    //     'source-layer': 'building',
    //     'filter': ['==', 'extrude', 'true'],
    //     'type': 'fill-extrusion',
    //     'minzoom': 15,
    //     'paint': {
    //         //'fill-extrusion-color': '#5D6D7E',
    //         'fill-extrusion-color': '#EBEDEF',
    //
    //         //'fill-extrusion-color': {
    //         //    "property": "height",
    //         //    "stops":[
    //         //        [2.75, "rgb(220, 239, 151)"], // 1 floor
    //         //        [5.5, "rgb(178, 234, 129)"],  // 2 floors
    //         //        [13.75, "rgb(122, 217, 141)"],// 5 floors
    //         //        [27.5, "rgb(65, 184, 164)"],  // 10 floors
    //         //        [55, "rgb(8, 69, 148)"]       // 20 floors
    //         //    ]
    //         //},
    //
    //         // use an 'interpolate' expression to add a smooth transition effect to the
    //         // buildings as the user zooms in
    //         'fill-extrusion-height': [
    //             "interpolate", ["linear"], ["zoom"],
    //             15, 0,
    //             15.05, ["get", "height"]
    //         ],
    //         'fill-extrusion-base': [
    //             "interpolate", ["linear"], ["zoom"],
    //             15, 0,
    //             15.05, ["get", "min_height"]
    //         ],
    //         'fill-extrusion-opacity': 0.3
    //     }
    // }, labelLayerId);

  }

  withGeoControl(opt = null) {
    if (this.map) {
      this.map.addControl(new mapboxgl.GeolocateControl(opt || {
        positionOptions: {
          enableHighAccuracy: true
  	    },
  	    fitBoundsOptions: {maxZoom: 18},
  	    trackUserLocation: false
      }));
    }
    return this;
  }

  withScaleControl(opt = null) {
    if (this.map) {
      this.map.addControl(new mapboxgl.ScaleControl(opt || {
        maxWidth: 100,
        unit: 'metric'
      }));
    }
    return this;
  }

  renderTo(el) {
    const map = this.map = new mapboxgl.Map($.extend({
      container: el
    }, this.config));
    map.on('load', this.onMapLoad.bind(this));
    return this;
  }
}

export default Map;
