import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
	tagName: 'section',
	classNames: [
		'page-section',
		'style-guide-section',
	],

	name: "module-name-here",

	destination: Ember.computed('name', function() {
		return `style-guide.${this.get('name')}`;
	}),
});
