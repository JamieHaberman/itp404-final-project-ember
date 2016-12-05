export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.3",
        "loc": {
          "source": null,
          "start": {
            "line": 31,
            "column": 4
          },
          "end": {
            "line": 38,
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
        dom.setAttribute(el1,"style","margin-left:-160px;");
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
        ["content","data.title",["loc",[null,[35,0],[35,14]]],0,0,0,0]
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
          "line": 39,
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
      var el1 = dom.createElement("style");
      var el2 = dom.createTextNode("\n#input2{\n  border: 4px solid white; border-radius:10px; width:200px; margin-left:-180px;\n}\n#button2{\n  border: 4px solid white; border-radius:10px; width:100px; background:#00b5cb;\n}\n#button3{\n  border: 4px solid white; border-radius:10px; width:200px; background:#f07f75;\n}\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"style","padding-top:90px; color:white; margin-left:-25%;");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      var el3 = dom.createTextNode("Your Movie Results!");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  Copy and paste your top movies and add them to the list here.\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\nNeed help? Try: harry potter\n  ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n  ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("  ");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","submit");
      var el3 = dom.createTextNode("Add to list!");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","submit");
      dom.setAttribute(el2,"id","button3");
      var el3 = dom.createTextNode("View The Top Movie List!");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [8]);
      var morphs = new Array(4);
      morphs[0] = dom.createAttrMorph(element0, 'onSubmit');
      morphs[1] = dom.createMorphAt(element0,1,1);
      morphs[2] = dom.createMorphAt(fragment,10,10,contextualElement);
      morphs[3] = dom.createMorphAt(fragment,14,14,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["attribute","onSubmit",["subexpr","action",["createmovie"],[],["loc",[null,[null,null],[19,41]]],0,0],0,0,0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","movielist",["loc",[null,[20,28],[20,37]]],0,0,0,0]],[],[],0,0],"id","input2"],["loc",[null,[20,0],[20,51]]],0,0],
      ["content","outlet",["loc",[null,[29,0],[29,10]]],0,0,0,0],
      ["block","each",[["get","model.data",["loc",[null,[31,12],[31,22]]],0,0,0,0]],[],0,null,["loc",[null,[31,4],[38,11]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));