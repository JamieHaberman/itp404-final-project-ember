define('crudmovies/router', ['exports', 'ember', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _crudmoviesConfigEnvironment['default'].locationType,
    rootURL: _crudmoviesConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('movies', function () {
      this.route('movie');
    });
    this.route('movielist');
    this.route("search", function () {
      this.route('results', { path: ':term' }, function () {});
    });

    this.route('favoritez');
  });

  exports['default'] = Router;
});