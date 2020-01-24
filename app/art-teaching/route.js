import Route from '@ember/routing/route';

export default class ArtTeachingRoute extends Route {
  model() {
    return {
      pictures: this.store.peekAll('picture')
        .filter((p) => p.get('type') === 'art-teaching')
    };

  }
}
