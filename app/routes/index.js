import Route from '@ember/routing/route';

export default Route.extend({

	// route 'hooks'
	beforeModel() { 
		// we aren't really getting any 'model' data here... - so we can do things before that
		this.transitionTo('welcome'); // always just move to the welcome route when you arrive
	},

});
