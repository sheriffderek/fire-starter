import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/svg-icons', 'Integration | Component | style guide/svg icons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/svg-icons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/svg-icons}}
      template block text
    {{/style-guide/svg-icons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
