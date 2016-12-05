import Ember from 'ember';

export default Ember.Controller.extend({


  //in backend make a url to post movielists to
    //SAVE THIS TO USE WITH MOVIELIST!!!
    //GET THE MOVIELIST TITLES IN THE BACKEND TO CREATE A URL!!
    //THEN "TITLE" WILL BE UPDATED BY WHATEVERS CLICKED
  //this.get('') use to grab the button thats clicked
actions:{
    createmovie: function(e){
      e.preventDefault();

    var promise =  Ember.$.ajax({
        type:'POST',

        //post API endpoint to post movies to db
        url: 'https://moviemood.herokuapp.com/api/movies',
        data: {
          movielist: this.get('movielist')
        },
        success: function(data){
            // controller.set('model', data);
          this.set('model', data);
        }
      });
      promise.then(function(){
         alert('This movie was added to your list!');

      }, function(){

     });
    }

}



});
