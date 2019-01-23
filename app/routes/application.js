import Route from '@ember/routing/route';

export default Route.extend({

	actions: {
		didTransition() {
			console.log('transitioned into application');
		},
	},

});
