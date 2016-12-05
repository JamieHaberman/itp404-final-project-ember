import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //get api endpoint to get all movie data
  return Ember.$.getJSON('https://moviemood.herokuapp.com/api/movies');
  }
});
