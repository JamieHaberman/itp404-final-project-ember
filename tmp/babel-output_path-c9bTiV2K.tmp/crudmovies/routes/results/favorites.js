define('crudmovies/routes/results/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

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

    model: function model() {
      var url = 'http://localhost:3000/api/movies/';
      //url created by me in node to find specific terms that are searched for
      // var url ='http://localhost:3000/api/movies/search/${params.term}';
      return _ember['default'].$.getJSON(url);
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }

  });
});