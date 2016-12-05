"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('crudmovies/app', ['exports', 'ember', 'crudmovies/resolver', 'ember-load-initializers', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesResolver, _emberLoadInitializers, _crudmoviesConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _crudmoviesConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _crudmoviesConfigEnvironment['default'].podModulePrefix,
    Resolver: _crudmoviesResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _crudmoviesConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('crudmovies/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'crudmovies/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _crudmoviesConfigEnvironment) {

  var name = _crudmoviesConfigEnvironment['default'].APP.name;
  var version = _crudmoviesConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('crudmovies/controllers/movielist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('crudmovies/controllers/movies/movie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('crudmovies/controllers/results/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('crudmovies/controllers/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      search: function search(e) {
        e.preventDefault();
        console.log('submit');

        var searchTerm = this.get('searchTerm');
        this.transitionToRoute('search.results', searchTerm);
      }
    }

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
  });
});
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
define('crudmovies/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('crudmovies/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('crudmovies/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'crudmovies/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _crudmoviesConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_crudmoviesConfigEnvironment['default'].APP.name, _crudmoviesConfigEnvironment['default'].APP.version)
  };
});
define('crudmovies/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('crudmovies/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('crudmovies/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('crudmovies/initializers/export-application-global', ['exports', 'ember', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_crudmoviesConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _crudmoviesConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_crudmoviesConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('crudmovies/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('crudmovies/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('crudmovies/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("crudmovies/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('crudmovies/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('crudmovies/router', ['exports', 'ember', 'crudmovies/config/environment'], function (exports, _ember, _crudmoviesConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _crudmoviesConfigEnvironment['default'].locationType,
    rootURL: _crudmoviesConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('movies', function () {
      this.route('movie');
    });
    this.route('movielist');
    this.route("search", function () {
      this.route('results', { path: ':term' }, function () {
        this.route('favorites');
      });
    });
  });

  exports['default'] = Router;
});
define('crudmovies/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // model(){
    //   return $.getJSON('http://localhost:3000/api/movies');
    // }
  });
});
define('crudmovies/routes/movielist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // model(){
    //   return $.getJSON('http://localhost:3000/api/movies');
    // }
  });
});
define('crudmovies/routes/movies', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var promise = $.ajax({
        type: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=017ba55a17b73509e379bc015be7c5f9&language=en-US'

      });
      return promise;
    }
  });
});
define('crudmovies/routes/movies/movie', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    //params passes along the id
    model: function model(params) {
      var movieID = params.id;
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=017ba55a17b73509e379bc015be7c5f9&language=en-US&page=' + movieID + '/';
      var promise = $.ajax({
        type: 'get',
        url: url
      });

      return promise;
    }

  });
});
define('crudmovies/routes/results/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    ///RENDER THE movielist!!!

    //
    // model: function(){
    //   var url = 'http://localhost:3000/api/movies/api/add';
    // }
    // var promise = $.ajax({
    //   type:'get',
    //   url:url
    // }).then(function(response){
    //   return {
    //     movielist: response.movielist
    //   };
    // });
    // return promise;
    // }

  });
});
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
define('crudmovies/routes/search/results', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // model: function(){
    //   var movieid = params.id;
    //   var promise = $.ajax({
    //     type: 'get',
    //     url: 'http://localhost:3000/api/movies'
    //   })
    //   console.log(params);
    // }

    model: function model(params) {
      var url = 'http://localhost:3000/api/movies/search/' + params.term;
      //url created by me in node to find specific terms that are searched for
      // var url ='http://localhost:3000/api/movies/search/${params.term}';
      return $.getJSON(url);
    },
    afterModel: function afterModel(model) {
      console.log(model);
    }

  });
});
define('crudmovies/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("crudmovies/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 59,
              "column": 9
            },
            "end": {
              "line": 61,
              "column": 6
            }
          },
          "moduleName": "crudmovies/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n  Cat's Movie List\n      ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 65,
              "column": 2
            },
            "end": {
              "line": 67,
              "column": 6
            }
          },
          "moduleName": "crudmovies/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Build your Own List!\n      ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 76,
            "column": 0
          }
        },
        "moduleName": "crudmovies/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n#buttons{opacity:1; position:absolute; top:55%; width:30%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 0;\nright: 0;}\n#buttons:hover{visibility:none;}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("body");
        dom.setAttribute(el1, "style", "margin:-8px; ");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "background: #00b5cb;");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "top");
        dom.setAttribute(el3, "style", "height:800px;  background-size: cover; background-image:url('https://68.media.tumblr.com/ffdb8b4d895c249110efbf218af13427/tumblr_ohjc0lpNHQ1qhk3cbo2_1280.png');");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "id", "arrow");
        dom.setAttribute(el4, "style", " width:150px; position:relative; left:570px; top:670px;");
        dom.setAttribute(el4, "src", "https://68.media.tumblr.com/565aa8b5eeceee6efa559ca2415b4437/tumblr_ohjc0lpNHQ1qhk3cbo3_500.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "div2");
        dom.setAttribute(el3, "style", "background:#00b5cb; width:100%; height: 650px; font-family: 'Archivo Narrow', sans-serif;");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6");
        dom.setAttribute(el4, "style", " padding-left: 100px; padding-right:150px;font-size:27pt; width:50%; color:white;  margin-top:20%; float:left;");
        var el5 = dom.createTextNode("Explore Cat's Movie List & Build Your Own!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6");
        var el5 = dom.createTextNode("\n\n  ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "style", "width: 100%;  float:right;\n    ");
        dom.setAttribute(el5, "src", "https://68.media.tumblr.com/d2909918c6ce08b55b35b028d759cea5/tumblr_ohjc04IJ8L1qhk3cbo1_1280.gif");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "style", "margin-left:140px; width:800px;");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "style", " width:20%;float: left; margin:10px; background:#f07f75; padding:10px;border:4px solid white; border-radius:10px;\n    ");
        var el7 = dom.createTextNode("   ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "style", "; width:20%;float: left; margin:10px; background:#f07f75; padding:10px;border:4px solid white; border-radius:10px;\n  ");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3, 1, 3, 3, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [6]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["movies"], [], 0, null, ["loc", [null, [59, 9], [61, 18]]]], ["block", "link-to", ["search"], [], 1, null, ["loc", [null, [65, 2], [67, 18]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("crudmovies/templates/movielist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "crudmovies/templates/movielist.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("crudmovies/templates/movies", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "crudmovies/templates/movies.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "font-size:20px; color:white;");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createElement("br");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "color:black;");
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 4, 4);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 2, 2);
          return morphs;
        },
        statements: [["content", "result.original_title", ["loc", [null, [15, 2], [15, 27]]], 0, 0, 0, 0], ["content", "result.overview", ["loc", [null, [24, 2], [24, 21]]], 0, 0, 0, 0]],
        locals: ["result"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 0
          }
        },
        "moduleName": "crudmovies/templates/movies.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        dom.setAttribute(el1, "style", "width:100%;  height:100%; background:#f07f75; background-repeat: no-repeat;font-family: 'Archivo Narrow', sans-serif; background-image: url('https://68.media.tumblr.com/a65c6c5418d48f8e07d980087583865e/tumblr_ohmtyiuXVV1qhk3cbo1_1280.png'); background-size:100%;");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "style", "padding-top:150px; color:white; margin-left:25%;");
        var el3 = dom.createTextNode("Popular Movies!");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-5");
        dom.setAttribute(el3, "style", "width:50%; margin-left:25%; padding-bottom:50px;");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element0, 4, 4);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.results", ["loc", [null, [9, 8], [9, 21]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 0], [28, 9]]]], ["content", "outlet", ["loc", [null, [38, 0], [38, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("crudmovies/templates/movies/movie", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "crudmovies/templates/movies/movie.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "overview");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          return morphs;
        },
        statements: [["content", "result.overview", ["loc", [null, [9, 0], [9, 19]]], 0, 0, 0, 0]],
        locals: ["result"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "crudmovies/templates/movies/movie.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("No overview of this movie");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "crudmovies/templates/movies/movie.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]], 0, 0, 0, 0], ["block", "each", [["get", "model.results", ["loc", [null, [7, 8], [7, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [7, 0], [14, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('crudmovies/config/environment', ['ember'], function(Ember) {
  var prefix = 'crudmovies';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("crudmovies/app")["default"].create({"name":"crudmovies","version":"0.0.0+f9714d2a"});
}

/* jshint ignore:end */
//# sourceMappingURL=crudmovies.map
