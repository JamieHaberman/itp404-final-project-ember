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
            "line": 13,
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
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["content","data.title",["loc",[null,[10,0],[10,14]]],0,0,0,0]
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
          "line": 34,
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
      dom.setAttribute(el1,"style","text-align:center; ");
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
      var el1 = dom.createTextNode("\n  ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","submit");
      var el3 = dom.createTextNode("Add to list!");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [7]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,5,5,contextualElement);
      morphs[2] = dom.createAttrMorph(element0, 'onSubmit');
      morphs[3] = dom.createMorphAt(element0,1,1);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0],
      ["block","each",[["get","model.data",["loc",[null,[5,12],[5,22]]],0,0,0,0]],[],0,null,["loc",[null,[5,4],[13,11]]]],
      ["attribute","onSubmit",["subexpr","action",["createmovie"],[],["loc",[null,[null,null],[15,43]]],0,0],0,0,0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","movielist",["loc",[null,[16,28],[16,37]]],0,0,0,0]],[],[],0,0]],["loc",[null,[16,0],[16,39]]],0,0]
    ],
    locals: [],
    templates: [child0]
  };
}()));