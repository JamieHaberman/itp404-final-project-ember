define('crudmovies/tests/routes/movies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies.js should pass jshint.');
  });
});