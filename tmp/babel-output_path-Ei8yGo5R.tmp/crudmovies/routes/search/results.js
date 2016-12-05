define('crudmovies/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // model: function(){
    //   var movieid = params.id;
    //   var promise = $.ajax({
    //     type: 'get',
    //     url: 'http://localhost:3000/api/movies'
    //   })
    //   console.log(params);
    // }

    model: function model(params) {
      var url = 'http://localhost:3000/api/movies/search/' + params.term;
      //url created by me in node to find specific terms that are searched for
      // var url ='http://localhost:3000/api/movies/search/${params.term}';
      return $.getJSON(url);
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }

  });
});