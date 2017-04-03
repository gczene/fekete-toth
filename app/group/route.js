import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let group = this.store.peekRecord('portfolioGroup', params.id);
    return {group};
  }
});
