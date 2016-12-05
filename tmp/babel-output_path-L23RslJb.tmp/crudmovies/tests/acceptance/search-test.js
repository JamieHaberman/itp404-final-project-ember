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