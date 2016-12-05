define('crudmovies/tests/controllers/search/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/search/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/search/results.js should pass jshint.\ncontrollers/search/results.js: line 17, col 20, \'$\' is not defined.\ncontrollers/search/results.js: line 27, col 42, \'response\' is not defined.\n\n2 errors');
  });
});