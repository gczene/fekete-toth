import Model, { attr } from '@ember-data/model';

export default class PortfolioGroupModel extends Model {
  @attr('string') title;
  @attr('string') image;
  @attr('string') pictures;
}
