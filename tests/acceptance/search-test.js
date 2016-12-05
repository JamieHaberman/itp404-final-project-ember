import { test } from 'qunit';
import moduleForAcceptance from 'crudmovies/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('users inputted result gets added to the url and pushed to results', function(assert) {
  visit('/search');
  click('button.submit');
  andThen(function() {
    assert.equal(currentURL(), '/search/undefined');
  });
});
