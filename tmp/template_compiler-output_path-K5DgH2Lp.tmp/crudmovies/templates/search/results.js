export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 4
          },
          "end": {
            "line": 14,
            "column": 2
          }
        },
        "moduleName": "crudmovies/templates/search/results.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2,"type","submit");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'onSubmit');
        morphs[1] = dom.createAttrMorph(element1, 'value');
        return morphs;
      },
      statements: [
        ["attribute","onSubmit",["subexpr","action",["createmovie"],[],["loc",[null,[null,null],[7,44]]],0,0],0,0,0,0],
        ["attribute","value",["get","data.title",["loc",[null,[10,36],[10,46]]],0,0,0,0],0,0,0,0]
      ],
      locals: ["data"],
      templates: []
    };
  }());
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
          "line": 22,
          "column": 0
        }
      },
      "moduleName": "crudmovies/templates/search/results.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("results");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0],
      ["block","each",[["get","model.data",["loc",[null,[5,12],[5,22]]],0,0,0,0]],[],0,null,["loc",[null,[5,4],[14,11]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));