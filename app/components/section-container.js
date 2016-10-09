import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  setElementId: Ember.on('init', function() {
    var name = this.get('name');
    this.set('elementId', name);
    this.set('classNames', ['container', name]);
  })
});
