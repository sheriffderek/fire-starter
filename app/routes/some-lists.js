import Route from '@ember/routing/route';


const PretendApiData = {

	people: [
		{
			name: "Derek",
			age: 37,
		},
		{
			name: "Ivy",
			age: "?",
		},
		{
			name: "Valentine",
			age: 12,
		},
	],

	things: [
		'ketchup',
		'cars',
		'sandwiches',
		'san castles',
	],

};


export default Route.extend({

	model() {
		return PretendApiData; // this sets the 'model' property on the 'some-lists' controller
	},

	// as you can see... this allows you to get this data into the template... but it's not really 'reactive' (insert whaterver we are calling the Ember Object... 'observable' ?)
	// you can also see that the 'model' (this Object) = is available in the sub-routes - of this route...
	// how can we show - a good example of how this doesn't do what we need?
});
