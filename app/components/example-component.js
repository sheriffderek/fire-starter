import Component from '@ember/component';
import { later, } from '@ember/runloop';
import { computed, } from '@ember/object';

export default Component.extend({ // this is all scoped to the component

	// Setup
	tagName: 'aside', // element type
	classNames: ['component', 'example-component',], // setup CSS classes
	classNameBindings: ['hidden',],

	// Data properties
	title: null, // might be sent in from it's parent/context
	currentText: "I'm bound to currentText", // set a default ?
	hidden: true, // based on this property - the class will be bound to the element because it's set in classNameBindings
	fadeInDelay: 200, // default
	needsHint: false, // we'll give them the benefit of the doubt

	// Life-cycle 'hooks' // https://guides.emberjs.com/release/components/the-component-lifecycle/
	didInsertElement() {
		// you don't have access to the DOM in the traditional way... because it's not there - yet
		// const thisElement = this.$(); // refers to the element;
	},

	didRender() { // it's definitly rendered...
		// you can toggle the data propety - and then that's bound to the hidden class on the element
		later( ()=> { // like setTimeout
			this.set('hidden', false); // show it - when it's ready;
		}, this.get('fadeInDelay') );
	},

	// Computed properties
	showHint: computed('needsHint', 'currentText', function() {
		return this.get('needsHint') && !this.get('currentText');
	}),

	// User Interactions mostly
	actions: { 
		// where you put your 'actions' / which are methods
		// Ember people call Objects like this a 'hash' - and you'll hear it refered to as "The Actions Hash"

		clearInput() {
			this.set('currentText', '');
		},

		yell(someString) {
			if (someString) {
				alert( `${someString}!!!` ); // note es2015 string templates with ``
				this.get('clearInput')(); // reset the input string for next time
				this.set('needsHint', false); // because they've seen they need to type
			} else {
				this.set('needsHint', true); // they aren't inputing anything...
			}
		},



	},

});
