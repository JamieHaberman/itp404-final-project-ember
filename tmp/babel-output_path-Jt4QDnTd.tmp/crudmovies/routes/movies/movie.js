define('crudmovies/routes/movies/movie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    //params passes along the id
    model: function model(params) {
      var movieID = params.id;
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=017ba55a17b73509e379bc015be7c5f9&language=en-US&page=' + movieID + '/';
      var promise = $.ajax({
        type: 'get',
        url: url
      });

      return promise;
    }

  });
});