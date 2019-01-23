import Mixin from '@ember/object/mixin';

// https://guides.emberjs.com/v1.10.0/cookbook/user_interface_and_interaction/resetting_scroll_on_route_changes/
export default Mixin.create({
  activate() {
    this._super();
    window.scrollTo(0, 0);
    // this is an example of when we're "Allowed" to use window?
  },
});
