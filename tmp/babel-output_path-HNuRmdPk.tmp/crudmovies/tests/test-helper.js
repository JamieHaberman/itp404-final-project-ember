define('crudmovies/tests/test-helper', ['exports', 'crudmovies/tests/helpers/resolver', 'ember-qunit'], function (exports, _crudmoviesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_crudmoviesTestsHelpersResolver['default']);
});