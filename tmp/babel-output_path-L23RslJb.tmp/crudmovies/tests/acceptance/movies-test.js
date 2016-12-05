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