import Route from '@ember/routing/route';

import data from '../../seed-data';

export default Route.extend({

	model() {
		return data;
	},

});
