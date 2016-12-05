define('crudmovies/routes/favoritez', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      //get api endpoint to get all movie data
      return _ember['default'].$.getJSON('http://localhost:3000/api/movies');
    }
  });
});