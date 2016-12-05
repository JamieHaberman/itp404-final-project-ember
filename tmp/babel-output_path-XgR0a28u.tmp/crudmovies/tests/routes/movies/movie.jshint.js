define('crudmovies/tests/routes/movies/movie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies/movie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/movies/movie.js should pass jshint.\nroutes/movies/movie.js: line 8, col 19, \'$\' is not defined.\n\n1 error');
  });
});