import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('welcome');
  this.route('style-guide', function() {
    this.route('landing');
    this.route('media-grid');
    this.route('color-pallet');
    this.route('media-poster');
  });
  this.route('about', function() {
    this.route('overview');
  });
});

export default Router;
