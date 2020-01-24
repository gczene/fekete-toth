import Route from '../base-route/route';

export default class PortfolioRoute extends Route {
  model() {
    return this.store.peekAll('portfolio-group');
  }
}
