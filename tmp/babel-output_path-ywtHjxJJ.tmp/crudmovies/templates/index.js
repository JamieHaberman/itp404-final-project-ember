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
      statements: [["block", "link-to", ["movies"], [], 0, null, ["loc", [null, [59, 9], [61, 18]]]], ["block", "link-to", ["movielist"], [], 1, null, ["loc", [null, [65, 2], [67, 18]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});