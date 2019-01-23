
# Understanding controllers

Put aside what you may have heard... We still use controllers.

Controllers (explain the naming conventions of Ember) - and that they are generated on the fly / whether you know it or not... Use the application controller as an example. This could reference what is already there - or could be a how-to.


## What are they

'Singletons' - that exist for the life of the app - (only once called upon?) - maintain state - but reasons why you shouldn't count on them for that... maybe lead into what services offer you...


## the model hook

In your route files, you'll use the model hook to pull in data for that route. _Even if you didn't explicity create a controller_ for that route - there's one there --- and when you return data in the model hook, it's really just setting the model property on that controller. That's how you can then use that data in your template.

```
model: model(), // from route!
```
See the example in the 'application' controller that was explicitly created with the CLI for this project - and how it backs the template / controls logic etc...


## Other info...

Will controller go away - and could we just have a little hash in the route to do this job? What is the problem with controllers - if there is one? Are there situations that aren't 'cool'?

[There could be community-generated videos for each of these topics]


## Testing

...


[There could be community-generated videos for each of these topics]
