import Ember from 'ember';

export default Ember.Route.extend({

  ///RENDER THE movielist!!!

//
// model: function(){
//   var url = 'http://localhost:3000/api/movies/api/add';
// }
// var promise = $.ajax({
//   type:'get',
//   url:url
// }).then(function(response){
//   return {
//     movielist: response.movielist
//   };
// });
// return promise;
// }

model:function(){
  var url ='http://localhost:3000/api/movies/';
  //url created by me in node to find specific terms that are searched for
  // var url ='http://localhost:3000/api/movies/search/${params.term}';
  return Ember.$.getJSON(url);
},
afterModel: function(model){
  console.log(model);
}

});
