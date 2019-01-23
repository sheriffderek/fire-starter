
# Learn models

In Ember, models are "Schemas" - (the name is a little confusing) - but you can think about them as the big concepts in your application. Think big! What are you going to make? What do you need the application to understand explicitly when it comes to data?

Gotta mention ember-data here for sure...


## mental model

If you were going to build an app for a school, you might have 'teachers' and 'students' and those might be "models." Maybe though... those teachers and students are "people" - and they just also have some other attributes that are different. It all depends on how your app logic and the data work.

In the case of "People" - you are going to need to figure out what a "Person" is - so that the app knows too. People have `names` and `height` and `age` and all sorts of stuff. With a javascript constructor - you might write it like this:

```
function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

var Tom = new Person("Tom", "Ster", 5, "Brown");

```

But with Ember - and ember-data / that is all abstracted away. Instead - you build out a 'model' of what you want the data to look like / and Ember will build whatever gets sent in / into the proper Ember-Objects - and prepare them for use in your app.


## Defining your model

Check out our example 'thing' model in `models/thing.js`

```
import DS from 'ember-data';

export default DS.Model.extend({

	firstName: DS.attr('String'),
	lastName: DS.attr('String'),
	age: DS.attr('Number'),
	eyeColor: DS.attr('String'),

});
```

When calling for data from an external API, (in your route) `return this.store.findAll('thing');` - then you'll get back all the data as though it's passed through this model outline as a filter.


## How to use data locally (not using a server?)

... we need to know how to do this ellegantly - a lot of us are building on-site products


## Expected formats from servers

...


## Reformatting data on the way in

Sometimes the data is coming in - in a format that isn't in the shape we want it - and that's where you can use etc etc. [link to adapters and serializer examples]


## Reformatting data on the way out

...


## Computed properties

...


## When to do logic stuff in the model

...


Link to the docs etc : Link to David Tang's book?


[There could be community-generated videos for each of these topics]
