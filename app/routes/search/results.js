import Ember from 'ember';

export default Ember.Route.extend({

    model:function(params){

      //get api endpoint to search by title
        //url created by me in node to find specific terms that are searched for
      var url ='https://moviemood.herokuapp.com/api/movies/search/' + params.term;

      return Ember.$.getJSON(url);
    },
    afterModel: function(model){
      console.log(model);
    }

});
