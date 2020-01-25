import Model, { attr } from '@ember-data/model';
import { alias } from '@ember/object/computed';

export default class PictureModel extends Model {
  @attr('string') title;
  @attr('string') image;
  // @attr('string') src;
  @alias('image') src;
  @attr('string') description;
  @attr('string', { defaultValue: 'gallery'}) type;
  // w = 1024;
  h = 768;
}
