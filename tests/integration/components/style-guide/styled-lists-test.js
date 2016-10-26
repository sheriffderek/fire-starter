import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/styled-lists', 'Integration | Component | style guide/styled lists', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/styled-lists}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/styled-lists}}
      template block text
    {{/style-guide/styled-lists}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
