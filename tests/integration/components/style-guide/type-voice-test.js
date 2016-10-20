import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('style-guide/type-voice', 'Integration | Component | style guide/type voice', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{style-guide/type-voice}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#style-guide/type-voice}}
      template block text
    {{/style-guide/type-voice}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
