import Portal from './Portal';

const MAPBOX_SOURCE_NAME = 'portals';
const MAPBOX_LAYER_NAME = 'portals';
/**
 * For building a map
 */
class PortalManager {

  /**
   * @param {Map} map
   * @param {[]} portalOfInterests
   */
  constructor(map) {
    this.map = map;
    this.portals = [];
    this.featurePoints = {};
  }

  setPortals(portals) {
    portals.forEach(conf => this.addPortal(conf));
    return this;
  }

  addPortal(conf) {
    this.portals.push(new Portal(conf));
    return this;
  }

  render() {

    let features = [];

    for (let portal of this.portals) {
      features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: portal.center()
        },
        properties: {
          name: portal.name(),
          photo: portal.photo(),
          description: portal.description(),
          descriptionType: portal.descriptionType()
        }
      })
    }

    this.map.addSource(MAPBOX_SOURCE_NAME, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features
      }
    });

    this.map.addLayer({
      id: MAPBOX_LAYER_NAME,
      type: "symbol",
      source: MAPBOX_SOURCE_NAME,
      layout: {
          "icon-image": "marker-11",
          "icon-optional": true,
          "text-size": 11.45,
          "text-field": "{name}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.9],
          "text-anchor": "top"
      },
      "paint": {
          //"text-color": "#EBEDEF",
          "text-color": "#c7cbd1",
          "text-opacity": 0.9,
          "text-halo-color": "#131c20",
              "text-halo-blur": 0.0,
              "text-halo-width": 1
      }
    });

    this.map.on('mouseenter', MAPBOX_LAYER_NAME, () => {
      this.map.setCursor('pointer');
    });

    this.map.on('mouseleave', MAPBOX_LAYER_NAME, () => {
      this.map.setCursor('');
    });

    this.map.on('click', () => {

    });
  }
}

export default PortalManager;
