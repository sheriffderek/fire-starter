import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/font-families', 'Integration | Component | style guide/font families', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/font-families}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/font-families}}
      template block text
    {{/style-guide/font-families}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
