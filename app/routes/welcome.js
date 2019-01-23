import Route from '@ember/routing/route';

const Things = [
	{
		name: "Derek",
	},
	{
		name: "Ivy",
	},
	{
		name: "Valentine",
	},
	{
		name: "Bandit",
	},
];

export default Route.extend({

	model() {
		return Things
	},

  actions: {
    toggleTheme() {
      const $body = document.body.classList.toggle('fire-starter-theme');
    },
  },

});
