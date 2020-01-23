import Model, { attr } from '@ember-data/model';

export default class PictureModel extends Model {
  @attr('string') title;
  @attr('string') image;
  @attr('string') description;
  @attr('string', { defaultValue: 'gallery'}) type;

}
