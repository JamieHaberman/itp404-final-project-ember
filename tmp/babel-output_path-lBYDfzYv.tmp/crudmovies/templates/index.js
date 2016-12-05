define("crudmovies/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 14
            },
            "end": {
              "line": 53,
              "column": 2
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
          var el1 = dom.createTextNode("\nPopular Movies\n  ");
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
              "line": 58,
              "column": 12
            },
            "end": {
              "line": 60,
              "column": 2
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
          var el1 = dom.createTextNode("\nTop Rated Movies\n  ");
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
            "line": 77,
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
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n#buttons{opacity:1; position:absolute; top:55%; width:30%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 0;\nright: 0;}\n#buttons:hover{visibility:none;}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        dom.setAttribute(el3, "class", "jumbo");
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "right tomster");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "style", "margin-top:-8px;width: 100%; height:100%;\n  ");
        dom.setAttribute(el4, "src", "https://68.media.tumblr.com/ffdb8b4d895c249110efbf218af13427/tumblr_ohjc0lpNHQ1qhk3cbo2_1280.png");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "style", "position:absolute; top:136%; width:15%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 35%;\nright: 0;");
        var el5 = dom.createTextNode("   ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "style", "position:absolute; top:142%; width:15%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 35%;\nright: 0;");
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "style", "position:absolute; top:148%; width:15%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 35%;\nright: 0;");
        var el5 = dom.createTextNode("Now Playing");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "style", "background:#00b5cb; width:100%; height: 800px; font-family: 'Archivo Narrow', sans-serif;");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "style", "font-size:27pt; width:340px; color:white; margin-left:6%; margin-top:20%; float:left;");
        var el5 = dom.createTextNode("Explore Cat's Movie Lists & Build Your Own!");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "style", "width: 60%;  float:right;\n    ");
        dom.setAttribute(el4, "src", "https://68.media.tumblr.com/d2909918c6ce08b55b35b028d759cea5/tumblr_ohjc04IJ8L1qhk3cbo1_1280.gif");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
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
        var element0 = dom.childAt(fragment, [2, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["movies"], [], 0, null, ["loc", [null, [51, 14], [53, 14]]]], ["block", "link-to", ["trmovies"], [], 1, null, ["loc", [null, [58, 12], [60, 14]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});