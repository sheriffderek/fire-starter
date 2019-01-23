import Route from '@ember/routing/route';
import seedData from 'fire-starter/seed-data';

export default Route.extend({

	model() {
		return seedData;
	},

});
