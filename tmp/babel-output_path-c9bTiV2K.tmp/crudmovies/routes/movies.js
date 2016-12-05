define('crudmovies/routes/movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var promise = _ember['default'].$.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=017ba55a17b73509e379bc015be7c5f9&language=en-US'

      });
      return promise;
    }
  });
});