/**
 * Represent a single portal
 */
class Portal {
  
  constructor(config) {
    this.config = config;
  }

  description() {
    return this.config['description'] || '';
  }

  descriptionType() {
    return this.config['description_type'] || 'markdown';
  }

  published() {
    return this.config['published'] || false;
  }

  name() {
    return this.config['name'] || 'Unnamed';
  }

  photo() {
    return this.config['photo'] || '';
  }

  intel() {
    return this.config['intel'] || '';
  }

  /**
   * Mapbox center
   */
  center() {
    return [this.config['lng'], this.config['lat']];
  }
}

export default Portal;
