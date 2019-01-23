import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  // there's also an implicit route here application/index - which is always entered first
  this.route('welcome');

  this.route('some-lists', function() {
  	// I explicity created an index route... but it doesn't show here... 
    this.route('people');
    this.route('things');
  });

  this.route('not-found', { path: '/*path'} ); // lots of options - but this is a '404'-like wild-card route

  this.route('some-list', function() {});
});

export default Router;
