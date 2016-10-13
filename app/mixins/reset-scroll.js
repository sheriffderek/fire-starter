import Ember from 'ember';

// https://guides.emberjs.com/v1.10.0/cookbook/user_interface_and_interaction/resetting_scroll_on_route_changes/
export default Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});
