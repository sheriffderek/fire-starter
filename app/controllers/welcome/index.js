import Ember from 'ember';

export default Ember.Controller.extend({

  excludedPackages: [
    {
      name: 'ember-welcome-page',
      url: 'https://github.com/ember-cli/ember-welcome-page',
      purpose: 'Removes the default ember-welcome-page'
    }
  ],
  includedPackages: [
    {
      name: 'ember-cli-eslint',
      url: 'https://github.com/ember-cli/ember-cli-eslint',
      purpose: 'Removes jsHint + replace it with esLint'
    },
    {
      name: 'eslint-plugin-ember-suave',
      url: 'https://github.com/DockYard/eslint-plugin-ember-suave',
      purpose: 'Adds Ember Suave addon to conform to some standard'
    },
    {
      name: 'ember-cli-autoprefixer',
      url: 'https://github.com/kimroen/ember-cli-autoprefixer',
      purpose: 'Automatically runs styles through autoprefixer'
    },
    {
      name: 'ember-cli-stylus',
      url: 'https://github.com/drewcovi/ember-cli-stylus',
      purpose: 'Adds stylus support. If you adopted ES6, I should have to convince you about stylus.'
    }
  ],
  cssConsiderations: [
    {
      name: 'Meyer reset',
      url: 'http://meyerweb.com/eric/tools/css/reset/',
      purpose: 'Reduces browser inconsistencies and allows you write CSS without worrying about outdated browser defaults.'
    },
  ]

});
