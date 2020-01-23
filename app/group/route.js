import Route from '@ember/routing/route';

export default class GroupRoute extends Route {
  model(params) {
    const group = this.store.peekRecord('portfolioGroup', params.group_id);
    return {group};
  }

}
