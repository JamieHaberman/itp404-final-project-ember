define('crudmovies/tests/controllers/movielist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/movielist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movielist.js should pass jshint.');
  });
});