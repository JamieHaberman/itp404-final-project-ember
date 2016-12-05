'use strict';

define('crudmovies/tests/acceptance/movies-test', ['exports', 'qunit', 'crudmovies/tests/helpers/module-for-acceptance'], function (exports, _qunit, _crudmoviesTestsHelpersModuleForAcceptance) {

  (0, _crudmoviesTestsHelpersModuleForAcceptance['default'])('Acceptance | movies');

  (0, _qunit.test)('visiting /movies takes you to movie page', function (assert) {
    visit('/movies');

    andThen(function () {
      assert.equal(currentURL(), '/movies');
    });
  });

  (0, _qunit.test)('visiting /movies shows list of movie titles', function (assert) {
    visit('/movies');

    andThen(function () {
      assert.equal(find('.titleresult').length, 20);
    });
  });

  (0, _qunit.test)('visiting /movies shows list of movie overviews', function (assert) {
    visit('/movies');

    andThen(function () {
      assert.equal(find('.overviewresult').length, 20);
    });
  });
});
define('crudmovies/tests/acceptance/movies-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/movies-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/movies-test.js should pass jshint.');
  });
});
define('crudmovies/tests/acceptance/search-test', ['exports', 'qunit', 'crudmovies/tests/helpers/module-for-acceptance'], function (exports, _qunit, _crudmoviesTestsHelpersModuleForAcceptance) {

  (0, _crudmoviesTestsHelpersModuleForAcceptance['default'])('Acceptance | search');

  (0, _qunit.test)('users inputted result gets added to the url and pushed to results', function (assert) {
    visit('/search');
    click('button.submit');
    andThen(function () {
      assert.equal(currentURL(), '/search/undefined');
    });
  });
});
define('crudmovies/tests/acceptance/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/search-test.js should pass jshint.');
  });
});
define('crudmovies/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('crudmovies/tests/controllers/movielist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/movielist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/movielist.js should pass jshint.');
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
define('crudmovies/tests/controllers/results/favorites.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/results/favorites.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/results/favorites.js should pass jshint.');
  });
});
define('crudmovies/tests/controllers/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/search.js should pass jshint.');
  });
});
define('crudmovies/tests/controllers/search/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/search/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/search/results.js should pass jshint.');
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
define('crudmovies/tests/routes/favoritez.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/favoritez.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/favoritez.js should pass jshint.');
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
define('crudmovies/tests/routes/movielist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movielist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movielist.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/movies.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/movies/movie.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/movies/movie.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/movies/movie.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/results/favorites.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/results/favorites.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/results/favorites.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass jshint.');
  });
});
define('crudmovies/tests/routes/search/results.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/search/results.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search/results.js should pass jshint.');
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
define('crudmovies/tests/unit/controllers/movielist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:movielist', 'Unit | Controller | movielist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crudmovies/tests/unit/controllers/movielist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/movielist-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/movielist-test.js should pass jshint.');
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
define('crudmovies/tests/unit/controllers/results/favorites-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:results/favorites', 'Unit | Controller | results/favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crudmovies/tests/unit/controllers/results/favorites-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/results/favorites-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/results/favorites-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/controllers/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:search', 'Unit | Controller | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crudmovies/tests/unit/controllers/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/controllers/search/results-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:search/results', 'Unit | Controller | search/results', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('crudmovies/tests/unit/controllers/search/results-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/search/results-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/search/results-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/favoritez-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:favoritez', 'Unit | Route | favoritez', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/favoritez-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/favoritez-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/favoritez-test.js should pass jshint.');
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
define('crudmovies/tests/unit/routes/results/favorites-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:results/favorites', 'Unit | Route | results/favorites', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/results/favorites-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/results/favorites-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/results/favorites-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass jshint.');
  });
});
define('crudmovies/tests/unit/routes/search/searchin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search/searchin', 'Unit | Route | search/searchin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('crudmovies/tests/unit/routes/search/searchin-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/search/searchin-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search/searchin-test.js should pass jshint.');
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
