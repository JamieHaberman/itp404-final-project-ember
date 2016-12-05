define('crudmovies/tests/helpers/resolver', ['exports', 'crudmovies/resolver', 'crudmovies/config/environment'], function (exports, _crudmoviesResolver, _crudmoviesConfigEnvironment) {

  var resolver = _crudmoviesResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _crudmoviesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudmoviesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});