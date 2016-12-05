define('crudmovies/tests/controllers/movies/movie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/movies/movie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies/movie.js should pass jshint.');
  });
});