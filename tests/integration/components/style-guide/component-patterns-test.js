import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/component-patterns', 'Integration | Component | style guide/component patterns', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/component-patterns}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/component-patterns}}
      template block text
    {{/style-guide/component-patterns}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
