import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

// This is weird!
const myRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

myRouter.map(function() {
  this.route('welcome', { path: '/' }, function() {
    this.route('index', { path: '/' });
  });
  this.route('style-guide', function() {
    this.route('index', { path: '/' });
    this.route('loading-indicator');
    this.route('color-pallet');
    this.route('light-theme');
    this.route('dark-theme');
    this.route('color-theme');
    this.route('highlight-theme');
    this.route('alternate-theme');
  });
  this.route('page-not-found', {
    path: '/*wildcard'
  });
  this.route('loading', { path: '/loading' });
  this.route('error');
  this.route('code-style', function() {});
});

export default myRouter;
