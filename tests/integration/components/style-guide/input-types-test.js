import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/input-types', 'Integration | Component | style guide/input types', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/input-types}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/input-types}}
      template block text
    {{/style-guide/input-types}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
