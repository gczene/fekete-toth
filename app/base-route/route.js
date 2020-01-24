import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class BaseRouteRoute extends Route {
  @inject meta;
  afterModel() {
    this.meta.run(this.routeName);
  }
}
