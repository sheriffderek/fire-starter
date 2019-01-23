import Controller from '@ember/controller';
import ENV from 'fire-starter/config/environment';

export default Controller.extend({
  applicationName: 'fire-starter',
  devMode: false,

  theme: 'fire-starter',

  init() {
  	this._super(...arguments);
		if (ENV.environment === 'development') {
		  this.set('devMode', true);
		  document.body.classList.add('dev-mode');
		}
  },

});
