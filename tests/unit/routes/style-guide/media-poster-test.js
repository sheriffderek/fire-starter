import { module, test, } from 'qunit';
import { setupTest, } from 'ember-qunit';

module('Unit | Route | /style-guide/media-poster', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:/style-guide/media-poster');
    assert.ok(route);
  });
});
