import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('portfolio', {path: '/gallery'}, function() {
  });
  this.route('group', {path: '/portfolio/:group_id'});
  this.route('about');
  this.route('contact-me');
  this.route('art-teaching');
});
