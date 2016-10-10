import Ember from 'ember';

const { Component, on } = Ember;

export default Component.extend({
  tagName: 'section',
  setElementId: on('init', function() {
    let name = this.get('name');
    this.set('elementId', name);
    this.set('classNames', ['container', name]);
  })
});
