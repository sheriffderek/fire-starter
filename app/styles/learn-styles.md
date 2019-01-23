
# Style setup

Introduction: Ember's eco-system and how styles play a part in the applications. How Broccoli works and what files and things you might want to learn about / things you'll need to touch. `app/styles/app.css` "Just like a classic HTML + CSS website, file is your default entrypoint for authoring style rules..." That app.css file gets compiled to `whatever-you-named-your-project.css` and you can see it where it's linked to the document in `index.html`. There are no special CLI commands for generating CSS file - so, you'll just create them like any file / but just be sure that they are in your `/styles` folder.


## Options

There are a lot of ways to author and maintain style rules. Pros and cons? any thoughts...


### Regular CSS

How to @import many files in css (you don't need a processor, if you use imports... do you?)
(don't start with a css framework...) See /more-styles  folder and import example - in the project


### Using Preprocessors

Clearly stylus is the best... hehehe --- but we can't show preference - so, place links to all of them here? Instead of teaching too much about that here - we should probably help tune-up the npm READMEs on their end.


### Special stuff + Broccoli

What if you need 2 things to build? partials need underscores? What about per route styles? Anything and everything people might ask - if they weren't the creators of CSS and Broccoli.


### Module unification? Per component styles? Scopes?

Whatever we know about that....


### What about addons?

Maybe... we can have the addon that I'll try to use here - be an example of how the cross styles work. Can they use our $variables from the project?


## Testing

...


[There could be community-generated videos for each of these topics]
