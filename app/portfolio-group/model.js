import Model, { attr, hasMany } from '@ember-data/model';

export default class PortfolioGroupModel extends Model {
  @attr('string') title;
  @attr('string') image;
  @hasMany pictures;
}
