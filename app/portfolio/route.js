import Route from '@ember/routing/route';

export default class PortfolioRoute extends Route {
  model() {
    return this.store.peekAll('portfolio-group');
  }
}
