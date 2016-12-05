define('crudmovies/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'crudmovies/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _crudmoviesConfigEnvironment) {

  var name = _crudmoviesConfigEnvironment['default'].APP.name;
  var version = _crudmoviesConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});