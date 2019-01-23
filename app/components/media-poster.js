import Component from '@ember/component';
import Ember from 'ember';

const terms = [
	'water',
	'fire',
	'cars',
	'indoor',
	'mountain',
	'cartoon',
	'cats',
	'cat',
	'bird',
	'dog',
	'happy',
	'rain',
	'lake',
	'building',
	'music',
	'party',
	'house',
	'pool',
	'sunglasses',
	'records',
	'plants',
	'drums',
	'sandwiches',
	'parks',
	'pizza',
	'children',
	'salad',
	'beer',
	'couches',
	'movies',
	'sky',
	'chair',
	'table',
	'love',
	'phone',
	'camera',
	'broccoli',
];

export default Component.extend({
	tagName: 'aside',
	classNames: [
		'component',
		'media-poster',
	],

  classNameBindings: ['loading:loading',],

  loading: true,

	terms,

	media: null, // incoming

	generatedImage: Ember.computed('users', function() {
		const terms = this.get('terms');
		const randomTerm = terms[Math.floor(Math.random() * terms.length)];

		return `https://source.unsplash.com/900x1300/?${randomTerm}`;
	}),

	didRender() {
		console.log('didRender');
		console.log(this.get('element').querySelector('.image'));
		this.send('loadImage');
	},

	actions: {

		loadImage() { // https://discuss.emberjs.com/t/loading-dynamically-generated-images/10248/3
			return new Ember.RSVP.Promise( (resolve)=> {
				const image = new Image()
				image.onload = ()=> {
					Ember.run.later( ()=> {
						this.set('loading', false);
					}, 500);
					resolve();
				}
				image.src = this.get('generatedImage');
				console.log('image', image);
				this.get('element').querySelector('.image').src = this.get('generatedImage');
			});
		},

	},
});
