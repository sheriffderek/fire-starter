
# Understanding components

If you've checked out the relationship between the `templates/application.hbs` _template_ and the `controllers/application.js` _controller_ - then you're well on your way to understanding components. They just smaller versions of that. Each component is a little encapsulated 'thing' that has a backing controller - and a template that acts as that controller's view. The fun part is that you can also pass data and state into the component from it's context, whether that be the main route of the site, or 3 layers deep in other components.

## What?

Check out the example in (not yet created);

```
// the .js ("controller") ? (no one really knows what to call this file... )
import Component from '@ember/component';

export default Component.extend({
	tagName: 'aside',
	componentTitle: "I'm a default title!!!" // you can setup defaults - or any complex logic you want

});
```

```
{{!-- the .hbs ("template") file --}}
<header class="component-header">
	{{componentTitle}}
</header>
```

```
{{!-- and- then used in another template --}}
<ExampleComponent @componentTitle="Hi! I'm a title?" />
```

```
{{!-- or with a dynamic value passed in from the context --}}
<ExampleComponent @componentTitle={{dynamicTitleFromContextsProperty}} />
```

Then show an example of a yield? - or some loops?


## Requirements

Gotta have a dash... what else?


## Other info...

Brackets should be taught as the standard... but maybe a note about other invocations?


## Testing

...

[There could be community-generated videos for each of these topics]
