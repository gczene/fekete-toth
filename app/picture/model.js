import Model, { attr } from '@ember-data/model';
import {computed} from '@ember/object';

const { alias } = computed;

export default class PictureModel extends Model {
  @attr('string') title;
  @attr('string') image;
  // @attr('string') src;
  @alias('image') src;
  @attr('string') description;
  @attr('string', { defaultValue: 'gallery'}) type;
  @attr('string', { defaultValue: 'portrait' }) layout;
  @attr('number') width;
  @attr('number') height;


  @computed('layout')
  get w() {
    return this.width || (this.layout === 'portrait' ? 2448 : 3264)
  }
  @computed('layout')
  get h() {
    return this.height || (this.layout === 'portrait' ? 3264 : 2448);
  }
}
