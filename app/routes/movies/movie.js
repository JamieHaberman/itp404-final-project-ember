import Ember from 'ember';

export default Ember.Route.extend({
  //params passes along the id
  model:function(params){
    var movieID = params.id;
var  url = 'https://api.themoviedb.org/3/movie/popular?api_key=017ba55a17b73509e379bc015be7c5f9&language=en-US&page=' + movieID + '/';
    var promise = Ember.$.ajax({
      type:'get',
      url: url
    });

  return promise;
  }

});
