define('crudmovies/app', ['exports', 'ember', 'crudmovies/resolver', 'ember-load-initializers', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesResolver, _emberLoadInitializers, _crudmoviesConfigEnvironment) {
  console.log('hi');
  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _crudmoviesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudmoviesConfigEnvironment['default'].podModulePrefix,
    Resolver: _crudmoviesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _crudmoviesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});