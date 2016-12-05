define('crudmovies/routes/results/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      console.log(params);
    }

  });
});