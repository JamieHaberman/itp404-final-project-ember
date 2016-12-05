define('crudmovies/routes/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // model:function(){
    //   var promise = $.ajax({
    //     type:'get',
    //     url:'http://localhost:3000/api/movies/search'
    //   });
    //   return promise;
    // }

    // model(){
    //   return $.getJSON('http://localhost:3000/api/movies');
    // }
  });
});