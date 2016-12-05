define('crudmovies/tests/helpers/start-app', ['exports', 'ember', 'crudmovies/app', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesApp, _crudmoviesConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _crudmoviesConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _crudmoviesApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});