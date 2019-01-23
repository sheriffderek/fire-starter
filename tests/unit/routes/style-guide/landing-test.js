import { module, test, } from 'qunit';
import { setupTest, } from 'ember-qunit';

module('Unit | Route | style-guide/landing', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:style-guide/landing');
    assert.ok(route);
  });
});
