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

        var promise = _ember['default'].$.ajax({
          type: 'POST',

          //post API endpoint to post movies to db
          url: 'http://localhost:3000/api/movies',
          data: {
            movielist: this.get('movielist')
          },
          success: function success(data) {
            // controller.set('model', data);
            this.set('model', data);
          }
        });
        promise.then(function () {
          alert('This movie was added to your list!');
        }, function () {});
      }

    }

  });
});