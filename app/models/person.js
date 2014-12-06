import Ember from './vendor/ember';
import App from './app/app';

var App.Person = Ember.Object.extend({
	firstName: null,
	lastName: null,
	age: null,
	birthday: null
});

export default App.Person;