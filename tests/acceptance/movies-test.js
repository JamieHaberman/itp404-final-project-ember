import { test } from 'qunit';
import moduleForAcceptance from 'crudmovies/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | movies');

test('visiting /movies takes you to movie page', function(assert) {
  visit('/movies');

  andThen(function() {
    assert.equal(currentURL(), '/movies');
  });
});

test('visiting /movies shows list of movie titles', function(assert) {
  visit('/movies');

  andThen(function() {
    assert.equal(find('.titleresult').length, 20);
  });
});

test('visiting /movies shows list of movie overviews', function(assert) {
  visit('/movies');

  andThen(function() {
    assert.equal(find('.overviewresult').length, 20);
  });
});
