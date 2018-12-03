/**
 * For building a map
 */
class Map {

  constructor(accessToken) {
    mapboxgl.accessToken = accessToken;
    this.config = {
      style: 'mapbox://styles/mapbox/basic-v9',
      center: [103.8123, 1.362],
      zoom: 10,
      attributionControl: false
    };
    this.controls = [];
    this.events = [];
  }

  /**
   * Changing mapbox style
   * @param {string} style
   * @return {this}
   */
  style(style) {
    return this._setConfig('setStyle', 'style', style);
  }

  /**
   * Changing map center, or fly to the place
   * @param {numeric} lat Latitude
   * @param {numeric} lng Longitude
   * @return {this}
   */
  center(lat, lng) {
    return this._setConfig('flyTo', 'center', [lng, lat]);
  }

  /**
   * Changing map center, or fly to the place
   * @param {numeric} lat Latitude
   * @param {numeric} lng Longitude
   * @return {this}
   */
  zoom(zoom) {
    return this._setConfig('zoomTo', 'zoom', zoom);
  }

  /**
   * Changing map pitch
   * @param {numeric} pitch The pitch number
   * @return {this}
   */
  pitch(pitch) {
    return this._setConfig('setPitch', 'pitch', pitch);
  }

  /**
   * Changing map bearing
   * @param {numeric} bearing The bearing number
   * @return {this}
   */
  bearing(bearing) {
    return this._setConfig('setBearing', 'bearing', bearing);
  }

  /**
   * Handy function for on load
   * @param {function}
   */
  ready(fn) {
    return this.on('load', fn);
  }

  /**
   * Attach event
   * @param {string} event
   * @param {function} callback function
   */
  on(event, fn) {
    if (this.map) {
      this.map.on.apply(this.map, arguments);
    } else {
      this.events[event] = this.events[event] || [];
      this.events[event].push(fn);
    }
    return this;
  }

  /**
   * Detach event
   * @param {string} event
   * @param {function} callback function
   */
  off(event, fn) {
    if (this.map) {
      this.map.off.apply(this.map, arguments);
    }
    return this;
  }

  addSource(id, config) {
    if (this.map) {
      this.map.addSource.apply(this.map, arguments);
    }
    return this;
  }

  addLayer(config) {
    if (this.map) {
      this.map.addLayer.apply(this.map, arguments);
    }
    return this;
  }

  setCursor(style) {
    if (this.map) {
      this.map.getCanvas().style.cursor = style;
    }
    return this;
  }

  /**
   * To add a cross hair geo control on the top right
   * hand corner to get user location
   * @param {object} opt Options to override default options
   * @return {this}
   */
  withGeoControl(opt = null) {
    return this._addControl(new mapboxgl.GeolocateControl(opt || {
      positionOptions: {
        enableHighAccuracy: true
	    },
	    fitBoundsOptions: {maxZoom: 18},
	    trackUserLocation: false
    }));
  }

  /**
   * To add a scale control at the bottom of the map
   * @param {object} opt Options to override default options
   * @return {this}
   */
  withScaleControl(opt = null) {
    return this._addControl(new mapboxgl.ScaleControl(opt || {
      maxWidth: 100,
      unit: 'metric'
    }));
  }

  /**
   * To add a navigation control at the right screen
   * hand corner to get user location
   * @param {object} opt Options to override default options
   * @return {this}
   */
  withNavigationControl(opt = null) {
    return this._addControl(new mapboxgl.NavigationControl(opt));
  }

  /**
   * Standard set config
   * @param {string} functionName The mapbox function name
   * @param {string} configName The mapbox config name
   * @param {mixed} value
   * @return {this}
   */
  _setConfig(functionName, configName, value) {
    if (this.map) {
      this.map[functionName]({center: value});
      console.log(this.map[functionName], {center: value});
    } else {
      this.config[configName] = value;
    }
    return this;
  }

  /**
   * Add control
   * @param {object} control
   * @return {this}
   */
  _addControl(control) {
    if (this.map) {
      this.map.addControl(control);
    } else {
      this.controls.push(control);
    }
    return this;
  }

  renderTo(el) {
    const map = this.map = new mapboxgl.Map({
      container: el,
      ...this.config
    });
    // Controls!
    this.controls.forEach(control => map.addControl(control));

    // Events
    for (let evt in this.events) {
      if (this.events.hasOwnProperty(evt)) {
        for (let fn of this.events[evt]) {
          this.on(evt, fn);
        }
      }
    }

    return this;
  }
}

export default Map;
