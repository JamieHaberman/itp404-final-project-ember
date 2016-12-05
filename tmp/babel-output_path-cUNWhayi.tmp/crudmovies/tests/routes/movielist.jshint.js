define('crudmovies/tests/routes/movielist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movielist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movielist.js should pass jshint.');
  });
});