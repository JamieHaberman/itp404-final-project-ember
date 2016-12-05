define('crudmovies/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crudmovies/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _crudmoviesConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_crudmoviesConfigEnvironment['default'].APP.name, _crudmoviesConfigEnvironment['default'].APP.version)
  };
});