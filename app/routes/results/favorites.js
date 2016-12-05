import Ember from 'ember';

export default Ember.Route.extend({



model:function(){
  var url ='https://moviemood.herokuapp.com/api/movies/';
  //url created by me in node to find specific terms that are searched for
  // var url ='http://localhost:3000/api/movies/search/${params.term}';
  return Ember.$.getJSON(url);
},
afterModel: function(model){
  console.log(model);
}

});
