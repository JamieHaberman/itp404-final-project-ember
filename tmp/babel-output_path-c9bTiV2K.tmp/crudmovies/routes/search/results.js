define('crudmovies/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {

      //get api endpoint to search by title
      //url created by me in node to find specific terms that are searched for
      var url = 'http://localhost:3000/api/movies/search/' + params.term;

      return _ember['default'].$.getJSON(url);
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }

  });
});