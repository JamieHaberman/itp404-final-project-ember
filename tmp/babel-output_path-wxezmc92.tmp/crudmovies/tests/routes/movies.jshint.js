define('crudmovies/tests/routes/movies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/movies.js should pass jshint.\nroutes/movies.js: line 5, col 18, \'$\' is not defined.\n\n1 error');
  });
});