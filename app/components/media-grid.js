import Component from '@ember/component';

export default Component.extend({
	tagName: 'aside',
	classNames: [
		'component',
		'media-grid',
	],

	media: null, // coming down
});
