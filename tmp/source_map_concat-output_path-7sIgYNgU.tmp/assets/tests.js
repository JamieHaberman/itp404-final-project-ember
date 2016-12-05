'use strict';

define('crudmovies/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('crudmovies/tests/controllers/movies/movie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/movies/movie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movies/movie.js should pass jshint.');
  });
});
define('crudmovies/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('crudmovies/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('crudmovies/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'crudmovies/tests/helpers/start-app', 'crudmovies/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _crudmoviesTestsHelpersStartApp, _crudmoviesTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _crudmoviesTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _crudmoviesTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('crudmovies/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('crudmovies/tests/helpers/resolver', ['exports', 'crudmovies/resolver', 'crudmovies/config/environment'], function (exports, _crudmoviesResolver, _crudmoviesConfigEnvironment) {

  var resolver = _crudmoviesResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _crudmoviesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudmoviesConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('crudmovies/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('crudmovies/tests/helpers/start-app', ['exports', 'ember', 'crudmovies/app', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesApp, _crudmoviesConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _crudmoviesConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _crudmoviesApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('crudmovies/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('crudmovies/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('crudmovies/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/movies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/movies.js should pass jshint.\nroutes/movies.js: line 5, col 18, \'$\' is not defined.\n\n1 error');
  });
});
define('crudmovies/tests/routes/movies/movie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies/movie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/movies/movie.js should pass jshint.\nroutes/movies/movie.js: line 8, col 19, \'$\' is not defined.\n\n1 error');
  });
});
define('crudmovies/tests/routes/trmovies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/trmovies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trmovies.js should pass jshint.');
  });
});
define('crudmovies/tests/test-helper', ['exports', 'crudmovies/tests/helpers/resolver', 'ember-qunit'], function (exports, _crudmoviesTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_crudmoviesTestsHelpersResolver['default']);
});
define('crudmovies/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/controllers/movies/movie-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:movies/movie', 'Unit | Controller | movies/movie', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crudmovies/tests/unit/controllers/movies/movie-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/movies/movie-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movies/movie-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/movies-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists', 'Unit | Route | artists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/movies-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/movies-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/movies/movie-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:movies/movie', 'Unit | Route | movies/movie', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/movies/movie-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/movies/movie-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/movies/movie-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/trmovies-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:trmovies', 'Unit | Route | trmovies', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/trmovies-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/trmovies-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/trmovies-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('crudmovies/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
