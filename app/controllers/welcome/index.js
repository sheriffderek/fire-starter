import Controller from "@ember/controller";

export default Controller.extend({

  // /Users/sheriffderek/Sites/ember/fire-starter/app/controllers/welcome/index.js
  // 5:3  error  Only string, number, symbol, boolean, null, undefined, and function 
  // are allowed as default properties  ember/avoid-leaking-state-in-ember-objects ???
  excludedPackages: [
    {
      name: `ember-welcome-page`,
      url: `https://github.com/ember-cli/ember-welcome-page`,
      purpose: `Removes the default ember-welcome-page`,
    },
  ],

  includedPackages: [
    {
      name: `ember-cli-eslint`,
      url: `https://github.com/ember-cli/ember-cli-eslint`,
      purpose: `Removes jsHint + replace it with esLint`,
    },
    {
      name: `eslint-plugin-ember-suave`,
      url: `https://github.com/DockYard/eslint-plugin-ember-suave`,
      purpose: `Adds Ember Suave addon to conform to some standard`,
    },
    {
      name: `ember-cli-autoprefixer`,
      url: `https://github.com/kimroen/ember-cli-autoprefixer`,
      purpose: `Automatically runs styles through autoprefixer`,
    },
    {
      name: `ember-cli-stylus`,
      url: `https://github.com/drewcovi/ember-cli-stylus`,
      purpose: `Adds stylus support. If you adopted ES6, I should have to convince you about stylus.`,
    },
    {
      name: `ember-load`,
      url: `https://github.com/mike-north/ember-load`,
      purpose: `Application loading UI for Ember.js apps.`,
    },
    {
      name: `ember-cli-surge`,
      url: `https://github.com/kennethormandy/ember-cli-surge`,
      purpose: `Very fast and simple publishing through the CLI.`,
    },
  ],

  cssConsiderations: [
    {
      name: `Meyer reset`,
      url: `http://meyerweb.com/eric/tools/css/reset/`,
      purpose: `Reduces browser inconsistencies and allows you write CSS without worrying about outdated browser defaults.`,
    },
    {
      name: `Reset box model`,
      url: `https://www.paulirish.com/2012/box-sizing-border-box-ftw/`,
      purpose: `Sets padding and borders to stay inside their elements.`,
    },
    {
      name: `SVG icon sprite`,
      url: `http://fontastic.me/`,
      purpose: `Quickly get solid cross-device icons that you can control with CSS and that are always crisp`,
    },
  ],

  routingConsiderations: [
    {
      name: `Generic top-level 404 / 'page not found'`,
      url: `/oops`,
      purpose: `People are going to type an incorrect URL and pages are going to dissapear at some point.`,
    },
    {
      name: `Top-level loading route + template`,
      url: `/loading`,
      purpose: `Sometimes things need to load. - not done`,
    },
    {
      name: `Top-level error route + template`,
      url: `/error`,
      purpose: `There may be some errors.`,
    },
  ],

});
