import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('break-point-helper', 'Integration | Component | break point helper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{break-point-helper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#break-point-helper}}
      template block text
    {{/break-point-helper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
