import Ember from 'ember';
import resetScroll from '../mixins/reset-scroll'; //$reset scroll example

const { Route } = Ember;

export default Route.extend(
  resetScroll, {
  //
});
