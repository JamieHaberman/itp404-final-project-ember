define('crudmovies/tests/routes/results/favorites.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/results/favorites.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/results/favorites.js should pass jshint.\nroutes/results/favorites.js: line 26, col 10, \'$\' is not defined.\n\n1 error');
  });
});