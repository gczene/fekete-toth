import Ember from 'ember';
import pictures from './picture-seed';
import groups from './portfolio-group-seed';

export default Ember.Route.extend({
  pushRecords() {
    this.store.push(groups);
    this.store.push(pictures);
  },
  beforeModel() {
    return this.pushRecords();
  },
  afterModel() {
    let pictures = this.store.peekAll('picture');
    pictures.forEach((picture) => {
      picture.set('i', new Image());
      picture.set('i.src', picture.get('image'));
    });
  }
});
