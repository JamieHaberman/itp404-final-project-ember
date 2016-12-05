import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies', function() {
    this.route('movie');
  });
  this.route('movielist');
  this.route("search", function() {
    this.route('results', { path: ':term'}, function() {

    });
  });

  this.route('favoritez');
});

export default Router;
