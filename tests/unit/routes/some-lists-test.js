import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | some-lists', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:some-lists');
    assert.ok(route);
  });
});
