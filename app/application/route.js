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
  }
});
