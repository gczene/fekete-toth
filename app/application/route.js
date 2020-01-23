import Route from '@ember/routing/route';
import pictures from './picture-seed';
import groups from './portfolio-group-seed';

export default class ApplicationRoute extends Route {
  pushRecords() {
    this.store.push(groups);
    this.store.push(pictures);
  }
  beforeModel() {
    return this.pushRecords();
  }

}
