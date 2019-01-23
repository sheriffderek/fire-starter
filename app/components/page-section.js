import Component from '@ember/component';
import on from 'ember';

export default Component.extend({
	tagName: 'section',
	name: null,
	//
  init() {
  	this._super(...arguments);
    let name = this.get('name');
    this.set('elementId', name);
    this.set('classNames', [
    	'page-section',
    	name,
    ]);
  },
	//
	backgroundImage: false,
	overlay: false,
});