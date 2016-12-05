import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //get api endpoint to get all movie data
  return Ember.$.getJSON('http://localhost:3000/api/movies');
  }
});
