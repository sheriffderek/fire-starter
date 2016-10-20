import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/color-pallet', 'Integration | Component | style guide/color pallet', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/color-pallet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/color-pallet}}
      template block text
    {{/style-guide/color-pallet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
