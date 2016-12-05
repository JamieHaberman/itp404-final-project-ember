define('crudmovies/controllers/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    //in backend make a url to post movielists to
    //SAVE THIS TO USE WITH MOVIELIST!!!
    //GET THE MOVIELIST TITLES IN THE BACKEND TO CREATE A URL!!
    //THEN "TITLE" WILL BE UPDATED BY WHATEVERS CLICKED
    //this.get('') use to grab the button thats clicked
    actions: {
      createmovie: function createmovie(e) {
        e.preventDefault();
        var movielist = this.get('movielist');
        console.log(movielist);

        var promise = $.ajax({
          type: 'post',
          url: 'http://localhost:3000/api/movies/add',
          data: {
            movielist: this.get('model.id')
          }
        });
        promise.then(function () {
          alert('yay');
          var movielists = this.get('model.movielist');
          var newMovie = movielists.concat(response.movielist);
          this.set('model.movielists', newMovie);
        }, function () {
          alert('error');
        });
      }

    }

  });
});