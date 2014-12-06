import Ember from 'ember';
import App from './app/app.js';

var App.Router = Ember.Router.extend();

App.Router.map({
	this.route('index', {path: '/'});
});

App.Router.reopen({
	location: 'auto'
})

export default App.Router;