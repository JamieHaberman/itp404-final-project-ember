define("crudmovies/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.3",
          "loc": {
            "source": null,
            "start": {
              "line": 55,
              "column": 14
            },
            "end": {
              "line": 57,
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
              "line": 62,
              "column": 12
            },
            "end": {
              "line": 64,
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
            "line": 74,
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
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "jumbo");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "right tomster");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "style", "margin-top:-8px;width: 70%; height:100%;\n  ");
        dom.setAttribute(el3, "src", "https://media.giphy.com/media/a6RSZDimhSReE/giphy.gif");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "style", "position:absolute; top:27%; width:40%;position: absolute;\nmargin-right: auto;\nleft: 50%;\n\nright: 0;");
        dom.setAttribute(el3, "src", "https://65.media.tumblr.com/0152b0b14c029c8b18a56ceea3db5903/tumblr_ohfzblqeOx1qhk3cbo1_1280.png");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "style", "position:absolute; top:50%; width:15%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 0;\nright: 0;");
        var el4 = dom.createTextNode("   ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "style", "position:absolute; top:55%; width:15%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 0;\nright: 0;");
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "style", "position:absolute; top:60%; width:15%;position: absolute;\nmargin-left: auto;\nmargin-right: auto;\nleft: 0;\nright: 0;");
        var el4 = dom.createTextNode("Now Playing");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n");
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
        var element0 = dom.childAt(fragment, [2, 2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["movies"], [], 0, null, ["loc", [null, [55, 14], [57, 14]]]], ["block", "link-to", ["trmovies"], [], 1, null, ["loc", [null, [62, 12], [64, 14]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});