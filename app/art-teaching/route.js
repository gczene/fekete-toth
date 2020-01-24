import Route from '../base-route/route';

export default class ArtTeachingRoute extends Route {
  model() {
    return {
      pictures: this.store.peekAll('picture')
        .filter((p) => p.get('type') === 'art-teaching')
    };
  }
}
