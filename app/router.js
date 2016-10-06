import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', { path: '/' }, function() {
    //
  });
  this.route('style-guide', function() {
    this.route('index', { path: '/' });
  });

  this.route('loading');
  this.route('error');
});

export default Router;
