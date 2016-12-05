import Ember from 'ember';

export default Ember.Controller.extend({
actions:{
  search: function(e){
    e.preventDefault();
    console.log('submit');

    var searchTerm = this.get('searchTerm');
    this.transitionToRoute('search.results', searchTerm);
  }
}


});




//in backend make a url to post movielists to
  //SAVE THIS TO USE WITH MOVIELIST!!!
  //GET THE MOVIELIST TITLES IN THE BACKEND TO CREATE A URL!!
  //THEN "TITLE" WILL BE UPDATED BY WHATEVERS CLICKED
//this.get('') use to grab the button thats clicked

//   createmovie: function(e){
//     e.preventDefault();
//     var title= this.get('title');
//     console.log(title)
//
//   var promise =  $.ajax({
//       type:'get',
//       url: 'http://localhost:3000/api/movies',
//       data:{
//         title: this.get('title')
//       }
//     });
//     promise.then(function(){
//       alert('yay');
//       this.set('title', null);
//       this.get('store').findAll('title');
//     }, function(){
//       alert('error');
//     });
//   }
// }



  //
  // actions:{
  //   createMovie: function(e)
  // }









  //   actions:{
  //     search(moviesearch){
  //   var query = this.get('moviesearch');
  //   this.set('searchQuery', query);
  //   this.transitionToRoute('search', query);
  // }
  //     console.log(moviesearch);
  //
  //   var searchedmovie = this.get('moviesearch');
  //   console.log(searchedmovie);
  //   var url= 'http://localhost:3000/api/movies';
  // console.log(url);
  //  var data={};
  //   // data={};
  //   // $.ajax({
  //   //   type:'get',
  //   //   url: 'https://api.themoviedb.org/3/search/movie?api_key=017ba55a17b73509e379bc015be7c5f9&query=' + movie
  //   //
  //   // });
  //   var controller = this;
  //      var promise = $.ajax({
  //        url: url,
  //        type: "POST",
  //        data: data,
  //        success: function(data) {
  //          console.log(data);
  //          controller.set('response', data);
  //        },
  //        dataType: 'json'
  //      });
  //
  //   }
  //
  //   }
