import Component from '@glimmer/component';

export default class TopMenuComponent extends Component {
  constructor() {
    super(...arguments);
    const el = document.getElementById('pre-loader');
    if (el) {
      el.parentNode.removeChild(el);
    }
  }
}
