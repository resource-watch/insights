"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

efineday('prep-prototype/about/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    }
  });
});
efineday("prep-prototype/about/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 8
            },
            "end": {
              "line": 17,
              "column": 8
            }
          },
          "moduleName": "prep-prototype/about/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          About the partners\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
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
        "moduleName": "prep-prototype/about/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-8 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("About");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-10 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The PREP Platform is a project started by the Partnership for Resilience and Preparedness (PREP), a public-private collaboration that emerged out of the White House Climate Data Initiative. We aim to facilitate collaboration among technology innovators, researchers, data scientists, and practitioners from the private sector, civil society and government. This cooperation will help spur new types of data discovery; develop innovative, customizable tools in response to user needs; and facilitate sharing and collective learning.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-10 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        dom.setAttribute(el6, "class", "title -small");
        var el7 = dom.createTextNode("The Mission");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Our mission is to empower a data-driven approach to building climate resilience by providing planners and interested public around the globe with accessible, actionable data and insights.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        dom.setAttribute(el6, "class", "title -small");
        var el7 = dom.createTextNode("The Challenge");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Our changing climate is accelerating the intensity and frequency of stresses facing communities across the globe. There is now a growing recognition that even with aggressive reductions in greenhouse gas emissions, continued changes in Earth’s climate are inevitable. Society is increasingly focused on preparing for this climate variability and change. In 2015, more than 190 nations committed to take action to build climate resilience through the Sendai Framework for Disaster Risk Reduction, the Paris Agreement and the Sustainable Development Goals.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("But to act on these commitments, planners, businesses, investors, and resource managers must have access to robust and actionable information, as well as guidance on how to use it to manage the risks. Two fundamental problems constrain progress in this area:");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ol");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Data and information isn’t accessible or usable because it’s held in silos across government agencies, the private sector and civil society; and ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Because of these silos, it’s not easy to share information or learn from others who are building climate resilience.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The Partnership for Resilience and Preparedness (PREP) aims to tackle these related challenges.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        dom.setAttribute(el6, "class", "title -small");
        var el7 = dom.createTextNode("The Platform");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The initial product of the Partnership for Resilience and Preparedness is a platform to help planners, investors and resource managers assess and incorporate climate risks into their decisions by enhancing access to the best available data and insights on climate variability and change. It leverages innovations in information and communication technologies to help users easily produce interactive climate risk assessments and resilience plans.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("We will do this by:");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Focusing on the user. We will continuously pursue input from user communities on how the platform can facilitate the use of climate risk information in management decisions.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Enabling the next generation of living climate reports and resilience plans that provide interactive access to the underlying scientific data.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Developing an open platform that enables access to climate-related information from across government agencies and other relevant data sets.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Enabling users to customize risk dashboards – to create, curate, and share content for their users and embedding the functionality into their websites.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("Accelerating the migration of USG and other climate-relevant datasets into the Cloud for 3rd party applications to use.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid create");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Do you have relevant data about climate?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Would you like to improve a dashboard?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-create coming-soon");
        var el5 = dom.createTextNode("CREATE YOUR DASHBOARD");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-contact coming-soon");
        var el5 = dom.createTextNode("GET IN TOUCH");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 3, 1]), 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["partners"], ["class", "link"], 0, null, ["loc", [null, [15, 8], [17, 21]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'prep-prototype/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _prepPrototypeConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _prepPrototypeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _prepPrototypeConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _prepPrototypeConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
efineday('prep-prototype/application/adapter', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({});
});
efineday('prep-prototype/application/route', ['exports', 'ember', 'npm:js-cookie'], function (exports, _ember, _npmJsCookie) {
  exports['default'] = _ember['default'].Route.extend({

    intl: _ember['default'].inject.service(),

    beforeModel: function beforeModel(transition) {

      // ref for setting locale in opendata-ui:
      // https://github.com/ArcGIS/opendata-ui/blob/master/app/application/route.js
      var intl = this.get('intl');
      var defaultLocale = 'en-us';
      intl.setLocale(defaultLocale);

      var loggedIn = _npmJsCookie['default'].get('prep_logged_in');
      if (!loggedIn) {
        this.transitionTo('login');
      }
    }
  });
});
efineday("prep-prototype/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["empty-body"]
          },
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
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
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "prep-prototype/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["partials/header-data"], [], ["loc", [null, [4, 2], [4, 36]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 0
              },
              "end": {
                "line": 7,
                "column": 0
              }
            },
            "moduleName": "prep-prototype/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["partials/header"], [], ["loc", [null, [6, 2], [6, 31]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "eq", [["get", "currentPath", ["loc", [null, [3, 14], [3, 25]]]], "data"], [], ["loc", [null, [3, 10], [3, 33]]]]], [], 0, 1, ["loc", [null, [3, 0], [7, 0]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 0
            },
            "end": {
              "line": 16,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
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
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 0
              },
              "end": {
                "line": 18,
                "column": 0
              }
            },
            "moduleName": "prep-prototype/application/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "partial", ["partials/footer"], [], ["loc", [null, [17, 2], [17, 31]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/application/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "noteq", [["get", "currentPath", ["loc", [null, [16, 17], [16, 28]]]], "data"], [], ["loc", [null, [16, 10], [16, 36]]]]], [], 0, null, ["loc", [null, [16, 0], [18, 0]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" don't show footer if we are in Data route ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" maybe change this to a minimal footer later on ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" {{#ember-wormhole to=\"about-modal-destination\"}}\n  {{data-popup}}\n{{/ember-wormhole}} ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "currentPath", ["loc", [null, [1, 10], [1, 21]]]], "login"], [], ["loc", [null, [1, 6], [1, 30]]]]], [], 0, 1, ["loc", [null, [1, 0], [7, 7]]]], ["content", "outlet", ["loc", [null, [10, 0], [10, 12]]]], ["block", "if", [["subexpr", "eq", [["get", "currentPath", ["loc", [null, [14, 10], [14, 21]]]], "login"], [], ["loc", [null, [14, 6], [14, 30]]]]], [], 2, 3, ["loc", [null, [14, 0], [18, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
efineday('prep-prototype/arcgis-map-data/service', ['exports', 'ember', 'esri/arcgis/utils', 'esri/dijit/Legend', 'esri/dijit/Search'], function (exports, _ember, _esriArcgisUtils, _esriDijitLegend, _esriDijitSearch) {
  exports['default'] = _ember['default'].Service.extend({
    legendCounter: 0,
    titleCounter: 0,

    widgets: [],

    createMap: function createMap(webMap, elem, options) {
      if (!options) {
        options = {
          mapOptions: {}
        };
      }
      options.mapOptions.smartNavigation = false;
      return _esriArcgisUtils['default'].createMap(webMap, elem, options);
    },

    destroyMap: function destroyMap(map, handlers) {
      if (_ember['default'].isArray(handlers)) {
        handlers.forEach(function (handler) {
          if (handler.remove) {
            handler.remove();
          }
        });
        handlers.length = 0;
        handlers = null;
      }

      if (map && map.destroy) {
        map.destroy();
        map = null;
      }
      return map;
    },

    createLegend: function createLegend(map_el, map, layerInfos) {
      var cnt = this.get('legendCounter');
      var legend_id = 'legend_' + cnt;
      var legend_el = '<div id="' + legend_id + '" class="arcgis-map-legend"></div>';
      var node = _ember['default'].$(map_el).append(legend_el);
      var legend = new _esriDijitLegend['default']({
        map: map,
        layerInfos: layerInfos
      }, legend_id);
      legend.startup();

      this.set('legendCounter', this.get('legendCounter') + 1);
    },

    createMapTitle: function createMapTitle(map_el, title) {
      var cnt = this.get('titleCounter');
      var title_id = 'title_' + cnt;
      var title_el = '<div id="' + title_id + '" class="arcgis-map-title">\n      <p>' + title + '</p>\n    </div>';
      var node = _ember['default'].$(map_el).append(title_el);

      this.set('titleCounter', this.get('titleCounter') + 1);
    },

    createSearchWidget: function createSearchWidget(map) {
      var search = new _esriDijitSearch['default']({
        map: map
      }, 'search');

      search.startup();
      this.get('widgets').push(search);
    },

    destroyWidgets: function destroyWidgets() {
      this.get('widgets').forEach(function (w) {
        w.destroy();
      });
      this.set('widgets', []);
    }

  });
});
efineday('prep-prototype/arcgis-map/service', ['exports', 'ember', 'esri/arcgis/utils', 'esri/dijit/Legend'], function (exports, _ember, _esriArcgisUtils, _esriDijitLegend) {
  exports['default'] = _ember['default'].Service.extend({
    legendCounter: 0,
    titleCounter: 0,

    createMap: function createMap(webMap, elem, options) {
      if (!options) {
        options = {
          mapOptions: {}
        };
      }
      options.mapOptions.smartNavigation = false;
      return _esriArcgisUtils['default'].createMap(webMap, elem, options);
    },

    destroyMap: function destroyMap(map, handlers) {
      if (_ember['default'].isArray(handlers)) {
        handlers.forEach(function (handler) {
          if (handler.remove) {
            handler.remove();
          }
        });
        handlers.length = 0;
        handlers = null;
      }

      if (map && map.destroy) {
        map.destroy();
        map = null;
      }
      return map;
    },

    createLegend: function createLegend(map_el, map, layerInfos) {
      var cnt = this.get('legendCounter');
      var legend_id = 'legend_' + cnt;
      var legend_el = '<div id="' + legend_id + '" class="arcgis-map-legend"></div>';
      var node = _ember['default'].$(map_el).append(legend_el);
      var legend = new _esriDijitLegend['default']({
        map: map,
        layerInfos: layerInfos
      }, legend_id);
      legend.startup();

      this.set('legendCounter', this.get('legendCounter') + 1);
    },

    createMapTitle: function createMapTitle(map_el, title) {
      var cnt = this.get('titleCounter');
      var title_id = 'title_' + cnt;
      var title_el = '<div id="' + title_id + '" class="arcgis-map-title">\n      <p>' + title + '</p>\n    </div>';
      var node = _ember['default'].$(map_el).append(title_el);

      this.set('titleCounter', this.get('titleCounter') + 1);
    }

  });
});
efineday('prep-prototype/autocomplete-service/service', ['exports', 'ember-cli-opendata-pages/autocomplete-service/service', 'prep-prototype/config/environment'], function (exports, _emberCliOpendataPagesAutocompleteServiceService, _prepPrototypeConfigEnvironment) {
  exports['default'] = _emberCliOpendataPagesAutocompleteServiceService['default'].extend({
    config: _prepPrototypeConfigEnvironment['default']
  });

  //export { default } from 'ember-cli-opendata-pages/autocomplete/service';
});
efineday('prep-prototype/chart-service/service', ['exports', 'ember-cli-opendata-pages/chart-service/service'], function (exports, _emberCliOpendataPagesChartServiceService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesChartServiceService['default'];
    }
  });
});
efineday("prep-prototype/cldrs/cs", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "cs", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
    }, "fields": { "year": { "displayName": "rok", "relative": { "0": "tento rok", "1": "příští rok", "-1": "minulý rok" }, "relativeTime": { "future": { "one": "za {0} rok", "few": "za {0} roky", "many": "za {0} roku", "other": "za {0} let" }, "past": { "one": "před {0} rokem", "few": "před {0} lety", "many": "před {0} rokem", "other": "před {0} lety" } } }, "month": { "displayName": "měsíc", "relative": { "0": "tento měsíc", "1": "příští měsíc", "-1": "minulý měsíc" }, "relativeTime": { "future": { "one": "za {0} měsíc", "few": "za {0} měsíce", "many": "za {0} měsíce", "other": "za {0} měsíců" }, "past": { "one": "před {0} měsícem", "few": "před {0} měsíci", "many": "před {0} měsícem", "other": "před {0} měsíci" } } }, "day": { "displayName": "den", "relative": { "0": "dnes", "1": "zítra", "2": "pozítří", "-2": "předevčírem", "-1": "včera" }, "relativeTime": { "future": { "one": "za {0} den", "few": "za {0} dny", "many": "za {0} dne", "other": "za {0} dní" }, "past": { "one": "před {0} dnem", "few": "před {0} dny", "many": "před {0} dnem", "other": "před {0} dny" } } }, "hour": { "displayName": "hodina", "relativeTime": { "future": { "one": "za {0} hodinu", "few": "za {0} hodiny", "many": "za {0} hodiny", "other": "za {0} hodin" }, "past": { "one": "před {0} hodinou", "few": "před {0} hodinami", "many": "před {0} hodinou", "other": "před {0} hodinami" } } }, "minute": { "displayName": "minuta", "relativeTime": { "future": { "one": "za {0} minutu", "few": "za {0} minuty", "many": "za {0} minuty", "other": "za {0} minut" }, "past": { "one": "před {0} minutou", "few": "před {0} minutami", "many": "před {0} minutou", "other": "před {0} minutami" } } }, "second": { "displayName": "sekunda", "relative": { "0": "nyní" }, "relativeTime": { "future": { "one": "za {0} sekundu", "few": "za {0} sekundy", "many": "za {0} sekundy", "other": "za {0} sekund" }, "past": { "one": "před {0} sekundou", "few": "před {0} sekundami", "many": "před {0} sekundou", "other": "před {0} sekundami" } } } } };
});
efineday("prep-prototype/cldrs/da", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "da", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          t0 = Number(s[0]) == n;if (ord) return "other";return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
    }, "fields": { "year": { "displayName": "år", "relative": { "0": "i år", "1": "næste år", "-1": "sidste år" }, "relativeTime": { "future": { "one": "om {0} år", "other": "om {0} år" }, "past": { "one": "for {0} år siden", "other": "for {0} år siden" } } }, "month": { "displayName": "måned", "relative": { "0": "denne måned", "1": "næste måned", "-1": "sidste måned" }, "relativeTime": { "future": { "one": "om {0} måned", "other": "om {0} måneder" }, "past": { "one": "for {0} måned siden", "other": "for {0} måneder siden" } } }, "day": { "displayName": "dag", "relative": { "0": "i dag", "1": "i morgen", "2": "i overmorgen", "-2": "i forgårs", "-1": "i går" }, "relativeTime": { "future": { "one": "om {0} dag", "other": "om {0} dage" }, "past": { "one": "for {0} dag siden", "other": "for {0} dage siden" } } }, "hour": { "displayName": "time", "relativeTime": { "future": { "one": "om {0} time", "other": "om {0} timer" }, "past": { "one": "for {0} time siden", "other": "for {0} timer siden" } } }, "minute": { "displayName": "minut", "relativeTime": { "future": { "one": "om {0} minut", "other": "om {0} minutter" }, "past": { "one": "for {0} minut siden", "other": "for {0} minutter siden" } } }, "second": { "displayName": "sekund", "relative": { "0": "nu" }, "relativeTime": { "future": { "one": "om {0} sekund", "other": "om {0} sekunder" }, "past": { "one": "for {0} sekund siden", "other": "for {0} sekunder siden" } } } } };
});
efineday("prep-prototype/cldrs/de", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "de", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "Jahr", "relative": { "0": "dieses Jahr", "1": "nächstes Jahr", "-1": "letztes Jahr" }, "relativeTime": { "future": { "one": "in {0} Jahr", "other": "in {0} Jahren" }, "past": { "one": "vor {0} Jahr", "other": "vor {0} Jahren" } } }, "month": { "displayName": "Monat", "relative": { "0": "diesen Monat", "1": "nächsten Monat", "-1": "letzten Monat" }, "relativeTime": { "future": { "one": "in {0} Monat", "other": "in {0} Monaten" }, "past": { "one": "vor {0} Monat", "other": "vor {0} Monaten" } } }, "day": { "displayName": "Tag", "relative": { "0": "heute", "1": "morgen", "2": "übermorgen", "-2": "vorgestern", "-1": "gestern" }, "relativeTime": { "future": { "one": "in {0} Tag", "other": "in {0} Tagen" }, "past": { "one": "vor {0} Tag", "other": "vor {0} Tagen" } } }, "hour": { "displayName": "Stunde", "relativeTime": { "future": { "one": "in {0} Stunde", "other": "in {0} Stunden" }, "past": { "one": "vor {0} Stunde", "other": "vor {0} Stunden" } } }, "minute": { "displayName": "Minute", "relativeTime": { "future": { "one": "in {0} Minute", "other": "in {0} Minuten" }, "past": { "one": "vor {0} Minute", "other": "vor {0} Minuten" } } }, "second": { "displayName": "Sekunde", "relative": { "0": "jetzt" }, "relativeTime": { "future": { "one": "in {0} Sekunde", "other": "in {0} Sekunden" }, "past": { "one": "vor {0} Sekunde", "other": "vor {0} Sekunden" } } } } };
});
efineday("prep-prototype/cldrs/el", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "el", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return n == 1 ? "one" : "other";
    }, "fields": { "year": { "displayName": "έτος", "relative": { "0": "φέτος", "1": "επόμενο έτος", "-1": "πέρσι" }, "relativeTime": { "future": { "one": "σε {0} έτος", "other": "σε {0} έτη" }, "past": { "one": "πριν από {0} έτος", "other": "πριν από {0} έτη" } } }, "month": { "displayName": "μήνας", "relative": { "0": "τρέχων μήνας", "1": "επόμενος μήνας", "-1": "προηγούμενος μήνας" }, "relativeTime": { "future": { "one": "σε {0} μήνα", "other": "σε {0} μήνες" }, "past": { "one": "πριν από {0} μήνα", "other": "πριν από {0} μήνες" } } }, "day": { "displayName": "ημέρα", "relative": { "0": "σήμερα", "1": "αύριο", "2": "μεθαύριο", "-2": "προχθές", "-1": "χθες" }, "relativeTime": { "future": { "one": "σε {0} ημέρα", "other": "σε {0} ημέρες" }, "past": { "one": "πριν από {0} ημέρα", "other": "πριν από {0} ημέρες" } } }, "hour": { "displayName": "ώρα", "relativeTime": { "future": { "one": "σε {0} ώρα", "other": "σε {0} ώρες" }, "past": { "one": "πριν από {0} ώρα", "other": "πριν από {0} ώρες" } } }, "minute": { "displayName": "λεπτό", "relativeTime": { "future": { "one": "σε {0} λεπτό", "other": "σε {0} λεπτά" }, "past": { "one": "πριν από {0} λεπτό", "other": "πριν από {0} λεπτά" } } }, "second": { "displayName": "δευτερόλεπτο", "relative": { "0": "τώρα" }, "relativeTime": { "future": { "one": "σε {0} δευτερόλεπτο", "other": "σε {0} δευτερόλεπτα" }, "past": { "one": "πριν από {0} δευτερόλεπτο", "other": "πριν από {0} δευτερόλεπτα" } } } } };
});
efineday("prep-prototype/cldrs/en-us", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "en-US", "parentLocale": "en" };
});
efineday("prep-prototype/cldrs/en", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } };
});
efineday("prep-prototype/cldrs/es", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "es", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return n == 1 ? "one" : "other";
    }, "fields": { "year": { "displayName": "año", "relative": { "0": "este año", "1": "el próximo año", "-1": "el año pasado" }, "relativeTime": { "future": { "one": "dentro de {0} año", "other": "dentro de {0} años" }, "past": { "one": "hace {0} año", "other": "hace {0} años" } } }, "month": { "displayName": "mes", "relative": { "0": "este mes", "1": "el próximo mes", "-1": "el mes pasado" }, "relativeTime": { "future": { "one": "dentro de {0} mes", "other": "dentro de {0} meses" }, "past": { "one": "hace {0} mes", "other": "hace {0} meses" } } }, "day": { "displayName": "día", "relative": { "0": "hoy", "1": "mañana", "2": "pasado mañana", "-2": "anteayer", "-1": "ayer" }, "relativeTime": { "future": { "one": "dentro de {0} día", "other": "dentro de {0} días" }, "past": { "one": "hace {0} día", "other": "hace {0} días" } } }, "hour": { "displayName": "hora", "relativeTime": { "future": { "one": "dentro de {0} hora", "other": "dentro de {0} horas" }, "past": { "one": "hace {0} hora", "other": "hace {0} horas" } } }, "minute": { "displayName": "minuto", "relativeTime": { "future": { "one": "dentro de {0} minuto", "other": "dentro de {0} minutos" }, "past": { "one": "hace {0} minuto", "other": "hace {0} minutos" } } }, "second": { "displayName": "segundo", "relative": { "0": "ahora" }, "relativeTime": { "future": { "one": "dentro de {0} segundo", "other": "dentro de {0} segundos" }, "past": { "one": "hace {0} segundo", "other": "hace {0} segundos" } } } } };
});
efineday("prep-prototype/cldrs/et", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "et", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "aasta", "relative": { "0": "käesolev aasta", "1": "järgmine aasta", "-1": "eelmine aasta" }, "relativeTime": { "future": { "one": "{0} aasta pärast", "other": "{0} aasta pärast" }, "past": { "one": "{0} aasta eest", "other": "{0} aasta eest" } } }, "month": { "displayName": "kuu", "relative": { "0": "käesolev kuu", "1": "järgmine kuu", "-1": "eelmine kuu" }, "relativeTime": { "future": { "one": "{0} kuu pärast", "other": "{0} kuu pärast" }, "past": { "one": "{0} kuu eest", "other": "{0} kuu eest" } } }, "day": { "displayName": "päev", "relative": { "0": "täna", "1": "homme", "2": "ülehomme", "-2": "üleeile", "-1": "eile" }, "relativeTime": { "future": { "one": "{0} päeva pärast", "other": "{0} päeva pärast" }, "past": { "one": "{0} päeva eest", "other": "{0} päeva eest" } } }, "hour": { "displayName": "tund", "relativeTime": { "future": { "one": "{0} tunni pärast", "other": "{0} tunni pärast" }, "past": { "one": "{0} tunni eest", "other": "{0} tunni eest" } } }, "minute": { "displayName": "minut", "relativeTime": { "future": { "one": "{0} minuti pärast", "other": "{0} minuti pärast" }, "past": { "one": "{0} minuti eest", "other": "{0} minuti eest" } } }, "second": { "displayName": "sekund", "relative": { "0": "nüüd" }, "relativeTime": { "future": { "one": "{0} sekundi pärast", "other": "{0} sekundi pärast" }, "past": { "one": "{0} sekundi eest", "other": "{0} sekundi eest" } } } } };
});
efineday("prep-prototype/cldrs/fi", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "fi", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "vuosi", "relative": { "0": "tänä vuonna", "1": "ensi vuonna", "-1": "viime vuonna" }, "relativeTime": { "future": { "one": "{0} vuoden päästä", "other": "{0} vuoden päästä" }, "past": { "one": "{0} vuosi sitten", "other": "{0} vuotta sitten" } } }, "month": { "displayName": "kuukausi", "relative": { "0": "tässä kuussa", "1": "ensi kuussa", "-1": "viime kuussa" }, "relativeTime": { "future": { "one": "{0} kuukauden päästä", "other": "{0} kuukauden päästä" }, "past": { "one": "{0} kuukausi sitten", "other": "{0} kuukautta sitten" } } }, "day": { "displayName": "päivä", "relative": { "0": "tänään", "1": "huomenna", "2": "ylihuomenna", "-2": "toissa päivänä", "-1": "eilen" }, "relativeTime": { "future": { "one": "{0} päivän päästä", "other": "{0} päivän päästä" }, "past": { "one": "{0} päivä sitten", "other": "{0} päivää sitten" } } }, "hour": { "displayName": "tunti", "relativeTime": { "future": { "one": "{0} tunnin päästä", "other": "{0} tunnin päästä" }, "past": { "one": "{0} tunti sitten", "other": "{0} tuntia sitten" } } }, "minute": { "displayName": "minuutti", "relativeTime": { "future": { "one": "{0} minuutin päästä", "other": "{0} minuutin päästä" }, "past": { "one": "{0} minuutti sitten", "other": "{0} minuuttia sitten" } } }, "second": { "displayName": "sekunti", "relative": { "0": "nyt" }, "relativeTime": { "future": { "one": "{0} sekunnin päästä", "other": "{0} sekunnin päästä" }, "past": { "one": "{0} sekunti sitten", "other": "{0} sekuntia sitten" } } } } };
});
efineday("prep-prototype/cldrs/fr", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "fr", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 ? "one" : "other";return n >= 0 && n < 2 ? "one" : "other";
    }, "fields": { "year": { "displayName": "année", "relative": { "0": "cette année", "1": "l’année prochaine", "-1": "l’année dernière" }, "relativeTime": { "future": { "one": "dans {0} an", "other": "dans {0} ans" }, "past": { "one": "il y a {0} an", "other": "il y a {0} ans" } } }, "month": { "displayName": "mois", "relative": { "0": "ce mois-ci", "1": "le mois prochain", "-1": "le mois dernier" }, "relativeTime": { "future": { "one": "dans {0} mois", "other": "dans {0} mois" }, "past": { "one": "il y a {0} mois", "other": "il y a {0} mois" } } }, "day": { "displayName": "jour", "relative": { "0": "aujourd’hui", "1": "demain", "2": "après-demain", "-2": "avant-hier", "-1": "hier" }, "relativeTime": { "future": { "one": "dans {0} jour", "other": "dans {0} jours" }, "past": { "one": "il y a {0} jour", "other": "il y a {0} jours" } } }, "hour": { "displayName": "heure", "relativeTime": { "future": { "one": "dans {0} heure", "other": "dans {0} heures" }, "past": { "one": "il y a {0} heure", "other": "il y a {0} heures" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "dans {0} minute", "other": "dans {0} minutes" }, "past": { "one": "il y a {0} minute", "other": "il y a {0} minutes" } } }, "second": { "displayName": "seconde", "relative": { "0": "maintenant" }, "relativeTime": { "future": { "one": "dans {0} seconde", "other": "dans {0} secondes" }, "past": { "one": "il y a {0} seconde", "other": "il y a {0} secondes" } } } } };
});
efineday("prep-prototype/cldrs/it", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "it", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? "many" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "anno", "relative": { "0": "quest’anno", "1": "anno prossimo", "-1": "anno scorso" }, "relativeTime": { "future": { "one": "tra {0} anno", "other": "tra {0} anni" }, "past": { "one": "{0} anno fa", "other": "{0} anni fa" } } }, "month": { "displayName": "mese", "relative": { "0": "questo mese", "1": "mese prossimo", "-1": "mese scorso" }, "relativeTime": { "future": { "one": "tra {0} mese", "other": "tra {0} mesi" }, "past": { "one": "{0} mese fa", "other": "{0} mesi fa" } } }, "day": { "displayName": "giorno", "relative": { "0": "oggi", "1": "domani", "2": "dopodomani", "-2": "l’altro ieri", "-1": "ieri" }, "relativeTime": { "future": { "one": "tra {0} giorno", "other": "tra {0} giorni" }, "past": { "one": "{0} giorno fa", "other": "{0} giorni fa" } } }, "hour": { "displayName": "ora", "relativeTime": { "future": { "one": "tra {0} ora", "other": "tra {0} ore" }, "past": { "one": "{0} ora fa", "other": "{0} ore fa" } } }, "minute": { "displayName": "minuto", "relativeTime": { "future": { "one": "tra {0} minuto", "other": "tra {0} minuti" }, "past": { "one": "{0} minuto fa", "other": "{0} minuti fa" } } }, "second": { "displayName": "Secondo", "relative": { "0": "ora" }, "relativeTime": { "future": { "one": "tra {0} secondo", "other": "tra {0} secondi" }, "past": { "one": "{0} secondo fa", "other": "{0} secondi fa" } } } } };
});
efineday("prep-prototype/cldrs/ja", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "ja", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return "other";
    }, "fields": { "year": { "displayName": "年", "relative": { "0": "今年", "1": "翌年", "-1": "昨年" }, "relativeTime": { "future": { "other": "{0} 年後" }, "past": { "other": "{0} 年前" } } }, "month": { "displayName": "月", "relative": { "0": "今月", "1": "翌月", "-1": "先月" }, "relativeTime": { "future": { "other": "{0} か月後" }, "past": { "other": "{0} か月前" } } }, "day": { "displayName": "日", "relative": { "0": "今日", "1": "明日", "2": "明後日", "-2": "一昨日", "-1": "昨日" }, "relativeTime": { "future": { "other": "{0} 日後" }, "past": { "other": "{0} 日前" } } }, "hour": { "displayName": "時", "relativeTime": { "future": { "other": "{0} 時間後" }, "past": { "other": "{0} 時間前" } } }, "minute": { "displayName": "分", "relativeTime": { "future": { "other": "{0} 分後" }, "past": { "other": "{0} 分前" } } }, "second": { "displayName": "秒", "relative": { "0": "今すぐ" }, "relativeTime": { "future": { "other": "{0} 秒後" }, "past": { "other": "{0} 秒前" } } } } };
});
efineday("prep-prototype/cldrs/ko", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "ko", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return "other";
    }, "fields": { "year": { "displayName": "년", "relative": { "0": "올해", "1": "내년", "-1": "작년" }, "relativeTime": { "future": { "other": "{0}년 후" }, "past": { "other": "{0}년 전" } } }, "month": { "displayName": "월", "relative": { "0": "이번 달", "1": "다음 달", "-1": "지난달" }, "relativeTime": { "future": { "other": "{0}개월 후" }, "past": { "other": "{0}개월 전" } } }, "day": { "displayName": "일", "relative": { "0": "오늘", "1": "내일", "2": "모레", "-2": "그저께", "-1": "어제" }, "relativeTime": { "future": { "other": "{0}일 후" }, "past": { "other": "{0}일 전" } } }, "hour": { "displayName": "시", "relativeTime": { "future": { "other": "{0}시간 후" }, "past": { "other": "{0}시간 전" } } }, "minute": { "displayName": "분", "relativeTime": { "future": { "other": "{0}분 후" }, "past": { "other": "{0}분 전" } } }, "second": { "displayName": "초", "relative": { "0": "지금" }, "relativeTime": { "future": { "other": "{0}초 후" }, "past": { "other": "{0}초 전" } } } } };
});
efineday("prep-prototype/cldrs/lt", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "lt", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          f = s[1] || "",
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return "other";return n10 == 1 && (n100 < 11 || n100 > 19) ? "one" : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? "few" : f != 0 ? "many" : "other";
    }, "fields": { "year": { "displayName": "metai", "relative": { "0": "šiais metais", "1": "kitais metais", "-1": "praėjusiais metais" }, "relativeTime": { "future": { "one": "po {0} metų", "few": "po {0} metų", "many": "po {0} metų", "other": "po {0} metų" }, "past": { "one": "prieš {0} metus", "few": "prieš {0} metus", "many": "prieš {0} metų", "other": "prieš {0} metų" } } }, "month": { "displayName": "mėnuo", "relative": { "0": "šį mėnesį", "1": "kitą mėnesį", "-1": "praėjusį mėnesį" }, "relativeTime": { "future": { "one": "po {0} mėnesio", "few": "po {0} mėnesių", "many": "po {0} mėnesio", "other": "po {0} mėnesių" }, "past": { "one": "prieš {0} mėnesį", "few": "prieš {0} mėnesius", "many": "prieš {0} mėnesio", "other": "prieš {0} mėnesių" } } }, "day": { "displayName": "diena", "relative": { "0": "šiandien", "1": "rytoj", "2": "poryt", "-2": "užvakar", "-1": "vakar" }, "relativeTime": { "future": { "one": "po {0} dienos", "few": "po {0} dienų", "many": "po {0} dienos", "other": "po {0} dienų" }, "past": { "one": "prieš {0} dieną", "few": "prieš {0} dienas", "many": "prieš {0} dienos", "other": "prieš {0} dienų" } } }, "hour": { "displayName": "valanda", "relativeTime": { "future": { "one": "po {0} valandos", "few": "po {0} valandų", "many": "po {0} valandos", "other": "po {0} valandų" }, "past": { "one": "prieš {0} valandą", "few": "prieš {0} valandas", "many": "prieš {0} valandos", "other": "prieš {0} valandų" } } }, "minute": { "displayName": "minutė", "relativeTime": { "future": { "one": "po {0} minutės", "few": "po {0} minučių", "many": "po {0} minutės", "other": "po {0} minučių" }, "past": { "one": "prieš {0} minutę", "few": "prieš {0} minutes", "many": "prieš {0} minutės", "other": "prieš {0} minučių" } } }, "second": { "displayName": "sekundė", "relative": { "0": "dabar" }, "relativeTime": { "future": { "one": "po {0} sekundės", "few": "po {0} sekundžių", "many": "po {0} sekundės", "other": "po {0} sekundžių" }, "past": { "one": "prieš {0} sekundę", "few": "prieš {0} sekundes", "many": "prieš {0} sekundės", "other": "prieš {0} sekundžių" } } } } };
});
efineday("prep-prototype/cldrs/lv", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "lv", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          f = s[1] || "",
          v = f.length,
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2),
          f100 = f.slice(-2),
          f10 = f.slice(-1);if (ord) return "other";return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
    }, "fields": { "year": { "displayName": "gads", "relative": { "0": "šajā gadā", "1": "nākamajā gadā", "-1": "pagājušajā gadā" }, "relativeTime": { "future": { "zero": "pēc {0} gadiem", "one": "pēc {0} gada", "other": "pēc {0} gadiem" }, "past": { "zero": "pirms {0} gadiem", "one": "pirms {0} gada", "other": "pirms {0} gadiem" } } }, "month": { "displayName": "mēnesis", "relative": { "0": "šajā mēnesī", "1": "nākamajā mēnesī", "-1": "pagājušajā mēnesī" }, "relativeTime": { "future": { "zero": "pēc {0} mēnešiem", "one": "pēc {0} mēneša", "other": "pēc {0} mēnešiem" }, "past": { "zero": "pirms {0} mēnešiem", "one": "pirms {0} mēneša", "other": "pirms {0} mēnešiem" } } }, "day": { "displayName": "diena", "relative": { "0": "šodien", "1": "rīt", "2": "parīt", "-2": "aizvakar", "-1": "vakar" }, "relativeTime": { "future": { "zero": "pēc {0} dienām", "one": "pēc {0} dienas", "other": "pēc {0} dienām" }, "past": { "zero": "pirms {0} dienām", "one": "pirms {0} dienas", "other": "pirms {0} dienām" } } }, "hour": { "displayName": "stundas", "relativeTime": { "future": { "zero": "pēc {0} stundām", "one": "pēc {0} stundas", "other": "pēc {0} stundām" }, "past": { "zero": "pirms {0} stundām", "one": "pirms {0} stundas", "other": "pirms {0} stundām" } } }, "minute": { "displayName": "minūtes", "relativeTime": { "future": { "zero": "pēc {0} minūtēm", "one": "pēc {0} minūtes", "other": "pēc {0} minūtēm" }, "past": { "zero": "pirms {0} minūtēm", "one": "pirms {0} minūtes", "other": "pirms {0} minūtēm" } } }, "second": { "displayName": "sekundes", "relative": { "0": "tagad" }, "relativeTime": { "future": { "zero": "pēc {0} sekundēm", "one": "pēc {0} sekundes", "other": "pēc {0} sekundēm" }, "past": { "zero": "pirms {0} sekundēm", "one": "pirms {0} sekundes", "other": "pirms {0} sekundēm" } } } } };
});
efineday("prep-prototype/cldrs/nb", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "nb", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return n == 1 ? "one" : "other";
    }, "fields": { "year": { "displayName": "år", "relative": { "0": "i år", "1": "neste år", "-1": "i fjor" }, "relativeTime": { "future": { "one": "om {0} år", "other": "om {0} år" }, "past": { "one": "for {0} år siden", "other": "for {0} år siden" } } }, "month": { "displayName": "måned", "relative": { "0": "denne måneden", "1": "neste måned", "-1": "forrige måned" }, "relativeTime": { "future": { "one": "om {0} måned", "other": "om {0} måneder" }, "past": { "one": "for {0} måned siden", "other": "for {0} måneder siden" } } }, "day": { "displayName": "dag", "relative": { "0": "i dag", "1": "i morgen", "2": "i overmorgen", "-2": "i forgårs", "-1": "i går" }, "relativeTime": { "future": { "one": "om {0} døgn", "other": "om {0} døgn" }, "past": { "one": "for {0} døgn siden", "other": "for {0} døgn siden" } } }, "hour": { "displayName": "time", "relativeTime": { "future": { "one": "om {0} time", "other": "om {0} timer" }, "past": { "one": "for {0} time siden", "other": "for {0} timer siden" } } }, "minute": { "displayName": "minutt", "relativeTime": { "future": { "one": "om {0} minutt", "other": "om {0} minutter" }, "past": { "one": "for {0} minutt siden", "other": "for {0} minutter siden" } } }, "second": { "displayName": "sekund", "relative": { "0": "nå" }, "relativeTime": { "future": { "one": "om {0} sekund", "other": "om {0} sekunder" }, "past": { "one": "for {0} sekund siden", "other": "for {0} sekunder siden" } } } } };
});
efineday("prep-prototype/cldrs/nl", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "nl", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "jaar", "relative": { "0": "dit jaar", "1": "volgend jaar", "-1": "vorig jaar" }, "relativeTime": { "future": { "one": "over {0} jaar", "other": "over {0} jaar" }, "past": { "one": "{0} jaar geleden", "other": "{0} jaar geleden" } } }, "month": { "displayName": "maand", "relative": { "0": "deze maand", "1": "volgende maand", "-1": "vorige maand" }, "relativeTime": { "future": { "one": "over {0} maand", "other": "over {0} maanden" }, "past": { "one": "{0} maand geleden", "other": "{0} maanden geleden" } } }, "day": { "displayName": "dag", "relative": { "0": "vandaag", "1": "morgen", "2": "overmorgen", "-2": "eergisteren", "-1": "gisteren" }, "relativeTime": { "future": { "one": "over {0} dag", "other": "over {0} dagen" }, "past": { "one": "{0} dag geleden", "other": "{0} dagen geleden" } } }, "hour": { "displayName": "Uur", "relativeTime": { "future": { "one": "over {0} uur", "other": "over {0} uur" }, "past": { "one": "{0} uur geleden", "other": "{0} uur geleden" } } }, "minute": { "displayName": "minuut", "relativeTime": { "future": { "one": "over {0} minuut", "other": "over {0} minuten" }, "past": { "one": "{0} minuut geleden", "other": "{0} minuten geleden" } } }, "second": { "displayName": "seconde", "relative": { "0": "nu" }, "relativeTime": { "future": { "one": "over {0} seconde", "other": "over {0} seconden" }, "past": { "one": "{0} seconde geleden", "other": "{0} seconden geleden" } } } } };
});
efineday("prep-prototype/cldrs/pl", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "pl", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2);if (ord) return "other";return n == 1 && v0 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? "many" : "other";
    }, "fields": { "year": { "displayName": "rok", "relative": { "0": "w tym roku", "1": "w przyszłym roku", "-1": "w zeszłym roku" }, "relativeTime": { "future": { "one": "za {0} rok", "few": "za {0} lata", "many": "za {0} lat", "other": "za {0} roku" }, "past": { "one": "{0} rok temu", "few": "{0} lata temu", "many": "{0} lat temu", "other": "{0} roku temu" } } }, "month": { "displayName": "miesiąc", "relative": { "0": "w tym miesiącu", "1": "w przyszłym miesiącu", "-1": "w zeszłym miesiącu" }, "relativeTime": { "future": { "one": "za {0} miesiąc", "few": "za {0} miesiące", "many": "za {0} miesięcy", "other": "za {0} miesiąca" }, "past": { "one": "{0} miesiąc temu", "few": "{0} miesiące temu", "many": "{0} miesięcy temu", "other": "{0} miesiąca temu" } } }, "day": { "displayName": "dzień", "relative": { "0": "dzisiaj", "1": "jutro", "2": "pojutrze", "-2": "przedwczoraj", "-1": "wczoraj" }, "relativeTime": { "future": { "one": "za {0} dzień", "few": "za {0} dni", "many": "za {0} dni", "other": "za {0} dnia" }, "past": { "one": "{0} dzień temu", "few": "{0} dni temu", "many": "{0} dni temu", "other": "{0} dnia temu" } } }, "hour": { "displayName": "godzina", "relativeTime": { "future": { "one": "za {0} godzinę", "few": "za {0} godziny", "many": "za {0} godzin", "other": "za {0} godziny" }, "past": { "one": "{0} godzinę temu", "few": "{0} godziny temu", "many": "{0} godzin temu", "other": "{0} godziny temu" } } }, "minute": { "displayName": "minuta", "relativeTime": { "future": { "one": "za {0} minutę", "few": "za {0} minuty", "many": "za {0} minut", "other": "za {0} minuty" }, "past": { "one": "{0} minutę temu", "few": "{0} minuty temu", "many": "{0} minut temu", "other": "{0} minuty temu" } } }, "second": { "displayName": "sekunda", "relative": { "0": "teraz" }, "relativeTime": { "future": { "one": "za {0} sekundę", "few": "za {0} sekundy", "many": "za {0} sekund", "other": "za {0} sekundy" }, "past": { "one": "{0} sekundę temu", "few": "{0} sekundy temu", "many": "{0} sekund temu", "other": "{0} sekundy temu" } } } } };
});
efineday("prep-prototype/cldrs/pt-br", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "pt-br", "parentLocale": "pt" };
});
efineday("prep-prototype/cldrs/pt-pt", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "pt-PT", "parentLocale": "pt", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "ano", "relative": { "0": "este ano", "1": "próximo ano", "-1": "ano passado" }, "relativeTime": { "future": { "one": "dentro de {0} ano", "other": "dentro de {0} anos" }, "past": { "one": "há {0} ano", "other": "há {0} anos" } } }, "month": { "displayName": "mês", "relative": { "0": "este mês", "1": "próximo mês", "-1": "mês passado" }, "relativeTime": { "future": { "one": "dentro de {0} mês", "other": "dentro de {0} meses" }, "past": { "one": "há {0} mês", "other": "há {0} meses" } } }, "day": { "displayName": "dia", "relative": { "0": "hoje", "1": "amanhã", "2": "depois de amanhã", "-2": "anteontem", "-1": "ontem" }, "relativeTime": { "future": { "one": "dentro de {0} dia", "other": "dentro de {0} dias" }, "past": { "one": "há {0} dia", "other": "há {0} dias" } } }, "hour": { "displayName": "hora", "relativeTime": { "future": { "one": "dentro de {0} hora", "other": "dentro de {0} horas" }, "past": { "one": "há {0} hora", "other": "há {0} horas" } } }, "minute": { "displayName": "minuto", "relativeTime": { "future": { "one": "dentro de {0} minuto", "other": "dentro de {0} minutos" }, "past": { "one": "há {0} minuto", "other": "há {0} minutos" } } }, "second": { "displayName": "segundo", "relative": { "0": "agora" }, "relativeTime": { "future": { "one": "dentro de {0} segundo", "other": "dentro de {0} segundos" }, "past": { "one": "há {0} segundo", "other": "há {0} segundos" } } } } };
});
efineday("prep-prototype/cldrs/pt", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "pt", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          t0 = Number(s[0]) == n;if (ord) return "other";return t0 && n >= 0 && n <= 2 && n != 2 ? "one" : "other";
    }, "fields": { "year": { "displayName": "ano", "relative": { "0": "este ano", "1": "próximo ano", "-1": "ano passado" }, "relativeTime": { "future": { "one": "em {0} ano", "other": "em {0} anos" }, "past": { "one": "há {0} ano", "other": "há {0} anos" } } }, "month": { "displayName": "mês", "relative": { "0": "este mês", "1": "próximo mês", "-1": "mês passado" }, "relativeTime": { "future": { "one": "em {0} mês", "other": "em {0} meses" }, "past": { "one": "há {0} mês", "other": "há {0} meses" } } }, "day": { "displayName": "dia", "relative": { "0": "hoje", "1": "amanhã", "2": "depois de amanhã", "-2": "anteontem", "-1": "ontem" }, "relativeTime": { "future": { "one": "em {0} dia", "other": "em {0} dias" }, "past": { "one": "há {0} dia", "other": "há {0} dias" } } }, "hour": { "displayName": "hora", "relativeTime": { "future": { "one": "em {0} hora", "other": "em {0} horas" }, "past": { "one": "há {0} hora", "other": "há {0} horas" } } }, "minute": { "displayName": "minuto", "relativeTime": { "future": { "one": "em {0} minuto", "other": "em {0} minutos" }, "past": { "one": "há {0} minuto", "other": "há {0} minutos" } } }, "second": { "displayName": "segundo", "relative": { "0": "agora" }, "relativeTime": { "future": { "one": "em {0} segundo", "other": "em {0} segundos" }, "past": { "one": "há {0} segundo", "other": "há {0} segundos" } } } } };
});
efineday("prep-prototype/cldrs/ro", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "ro", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n100 = t0 && s[0].slice(-2);if (ord) return n == 1 ? "one" : "other";return n == 1 && v0 ? "one" : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? "few" : "other";
    }, "fields": { "year": { "displayName": "An", "relative": { "0": "anul acesta", "1": "anul viitor", "-1": "anul trecut" }, "relativeTime": { "future": { "one": "peste {0} an", "few": "peste {0} ani", "other": "peste {0} de ani" }, "past": { "one": "acum {0} an", "few": "acum {0} ani", "other": "acum {0} de ani" } } }, "month": { "displayName": "Lună", "relative": { "0": "luna aceasta", "1": "luna viitoare", "-1": "luna trecută" }, "relativeTime": { "future": { "one": "peste {0} lună", "few": "peste {0} luni", "other": "peste {0} de luni" }, "past": { "one": "acum {0} lună", "few": "acum {0} luni", "other": "acum {0} de luni" } } }, "day": { "displayName": "Zi", "relative": { "0": "azi", "1": "mâine", "2": "poimâine", "-2": "alaltăieri", "-1": "ieri" }, "relativeTime": { "future": { "one": "peste {0} zi", "few": "peste {0} zile", "other": "peste {0} de zile" }, "past": { "one": "acum {0} zi", "few": "acum {0} zile", "other": "acum {0} de zile" } } }, "hour": { "displayName": "Oră", "relativeTime": { "future": { "one": "peste {0} oră", "few": "peste {0} ore", "other": "peste {0} de ore" }, "past": { "one": "acum {0} oră", "few": "acum {0} ore", "other": "acum {0} de ore" } } }, "minute": { "displayName": "Minut", "relativeTime": { "future": { "one": "peste {0} minut", "few": "peste {0} minute", "other": "peste {0} de minute" }, "past": { "one": "acum {0} minut", "few": "acum {0} minute", "other": "acum {0} de minute" } } }, "second": { "displayName": "Secundă", "relative": { "0": "acum" }, "relativeTime": { "future": { "one": "peste {0} secundă", "few": "peste {0} secunde", "other": "peste {0} de secunde" }, "past": { "one": "acum {0} secundă", "few": "acum {0} secunde", "other": "acum {0} de secunde" } } } } };
});
efineday("prep-prototype/cldrs/ru", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "ru", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          i = s[0],
          v0 = !s[1],
          i10 = i.slice(-1),
          i100 = i.slice(-2);if (ord) return "other";return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
    }, "fields": { "year": { "displayName": "год", "relative": { "0": "в этом году", "1": "в следующем году", "-1": "в прошлом году" }, "relativeTime": { "future": { "one": "через {0} год", "few": "через {0} года", "many": "через {0} лет", "other": "через {0} года" }, "past": { "one": "{0} год назад", "few": "{0} года назад", "many": "{0} лет назад", "other": "{0} года назад" } } }, "month": { "displayName": "месяц", "relative": { "0": "в этом месяце", "1": "в следующем месяце", "-1": "в прошлом месяце" }, "relativeTime": { "future": { "one": "через {0} месяц", "few": "через {0} месяца", "many": "через {0} месяцев", "other": "через {0} месяца" }, "past": { "one": "{0} месяц назад", "few": "{0} месяца назад", "many": "{0} месяцев назад", "other": "{0} месяца назад" } } }, "day": { "displayName": "день", "relative": { "0": "сегодня", "1": "завтра", "2": "послезавтра", "-2": "позавчера", "-1": "вчера" }, "relativeTime": { "future": { "one": "через {0} день", "few": "через {0} дня", "many": "через {0} дней", "other": "через {0} дней" }, "past": { "one": "{0} день назад", "few": "{0} дня назад", "many": "{0} дней назад", "other": "{0} дня назад" } } }, "hour": { "displayName": "час", "relativeTime": { "future": { "one": "через {0} час", "few": "через {0} часа", "many": "через {0} часов", "other": "через {0} часа" }, "past": { "one": "{0} час назад", "few": "{0} часа назад", "many": "{0} часов назад", "other": "{0} часа назад" } } }, "minute": { "displayName": "минута", "relativeTime": { "future": { "one": "через {0} минуту", "few": "через {0} минуты", "many": "через {0} минут", "other": "через {0} минуты" }, "past": { "one": "{0} минуту назад", "few": "{0} минуты назад", "many": "{0} минут назад", "other": "{0} минуты назад" } } }, "second": { "displayName": "секунда", "relative": { "0": "сейчас" }, "relativeTime": { "future": { "one": "через {0} секунду", "few": "через {0} секунды", "many": "через {0} секунд", "other": "через {0} секунды" }, "past": { "one": "{0} секунду назад", "few": "{0} секунды назад", "many": "{0} секунд назад", "other": "{0} секунды назад" } } } } };
});
efineday("prep-prototype/cldrs/sv", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "sv", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? "one" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "år", "relative": { "0": "i år", "1": "nästa år", "-1": "i fjol" }, "relativeTime": { "future": { "one": "om {0} år", "other": "om {0} år" }, "past": { "one": "för {0} år sedan", "other": "för {0} år sedan" } } }, "month": { "displayName": "månad", "relative": { "0": "denna månad", "1": "nästa månad", "-1": "förra månaden" }, "relativeTime": { "future": { "one": "om {0} månad", "other": "om {0} månader" }, "past": { "one": "för {0} månad sedan", "other": "för {0} månader sedan" } } }, "day": { "displayName": "dag", "relative": { "0": "i dag", "1": "i morgon", "2": "i övermorgon", "-2": "i förrgår", "-1": "i går" }, "relativeTime": { "future": { "one": "om {0} dag", "other": "om {0} dagar" }, "past": { "one": "för {0} dag sedan", "other": "för {0} dagar sedan" } } }, "hour": { "displayName": "timme", "relativeTime": { "future": { "one": "om {0} timme", "other": "om {0} timmar" }, "past": { "one": "för {0} timme sedan", "other": "för {0} timmar sedan" } } }, "minute": { "displayName": "minut", "relativeTime": { "future": { "one": "om {0} minut", "other": "om {0} minuter" }, "past": { "one": "för {0} minut sedan", "other": "för {0} minuter sedan" } } }, "second": { "displayName": "sekund", "relative": { "0": "nu" }, "relativeTime": { "future": { "one": "om {0} sekund", "other": "om {0} sekunder" }, "past": { "one": "för {0} sekund sedan", "other": "för {0} sekunder sedan" } } } } };
});
efineday("prep-prototype/cldrs/th", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "th", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return "other";
    }, "fields": { "year": { "displayName": "ปี", "relative": { "0": "ปีนี้", "1": "ปีหน้า", "-1": "ปีที่แล้ว" }, "relativeTime": { "future": { "other": "ในอีก {0} ปี" }, "past": { "other": "{0} ปีที่แล้ว" } } }, "month": { "displayName": "เดือน", "relative": { "0": "เดือนนี้", "1": "เดือนหน้า", "-1": "เดือนที่แล้ว" }, "relativeTime": { "future": { "other": "ในอีก {0} เดือน" }, "past": { "other": "{0} เดือนที่ผ่านมา" } } }, "day": { "displayName": "วัน", "relative": { "0": "วันนี้", "1": "พรุ่งนี้", "2": "มะรืนนี้", "-2": "เมื่อวานซืน", "-1": "เมื่อวาน" }, "relativeTime": { "future": { "other": "ในอีก {0} วัน" }, "past": { "other": "{0} วันที่ผ่านมา" } } }, "hour": { "displayName": "ชั่วโมง", "relativeTime": { "future": { "other": "ในอีก {0} ชั่วโมง" }, "past": { "other": "{0} ชั่วโมงที่ผ่านมา" } } }, "minute": { "displayName": "นาที", "relativeTime": { "future": { "other": "ในอีก {0} นาที" }, "past": { "other": "{0} นาทีที่ผ่านมา" } } }, "second": { "displayName": "วินาที", "relative": { "0": "ขณะนี้" }, "relativeTime": { "future": { "other": "ในอีก {0} วินาที" }, "past": { "other": "{0} วินาทีที่ผ่านมา" } } } } };
});
efineday("prep-prototype/cldrs/tr", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "tr", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return n == 1 ? "one" : "other";
    }, "fields": { "year": { "displayName": "Yıl", "relative": { "0": "bu yıl", "1": "gelecek yıl", "-1": "geçen yıl" }, "relativeTime": { "future": { "one": "{0} yıl sonra", "other": "{0} yıl sonra" }, "past": { "one": "{0} yıl önce", "other": "{0} yıl önce" } } }, "month": { "displayName": "Ay", "relative": { "0": "bu ay", "1": "gelecek ay", "-1": "geçen ay" }, "relativeTime": { "future": { "one": "{0} ay sonra", "other": "{0} ay sonra" }, "past": { "one": "{0} ay önce", "other": "{0} ay önce" } } }, "day": { "displayName": "Gün", "relative": { "0": "bugün", "1": "yarın", "2": "öbür gün", "-2": "evvelsi gün", "-1": "dün" }, "relativeTime": { "future": { "one": "{0} gün sonra", "other": "{0} gün sonra" }, "past": { "one": "{0} gün önce", "other": "{0} gün önce" } } }, "hour": { "displayName": "Saat", "relativeTime": { "future": { "one": "{0} saat sonra", "other": "{0} saat sonra" }, "past": { "one": "{0} saat önce", "other": "{0} saat önce" } } }, "minute": { "displayName": "Dakika", "relativeTime": { "future": { "one": "{0} dakika sonra", "other": "{0} dakika sonra" }, "past": { "one": "{0} dakika önce", "other": "{0} dakika önce" } } }, "second": { "displayName": "Saniye", "relative": { "0": "şimdi" }, "relativeTime": { "future": { "one": "{0} saniye sonra", "other": "{0} saniye sonra" }, "past": { "one": "{0} saniye önce", "other": "{0} saniye önce" } } } } };
});
efineday("prep-prototype/cldrs/vi", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "vi", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return n == 1 ? "one" : "other";return "other";
    }, "fields": { "year": { "displayName": "Năm", "relative": { "0": "năm nay", "1": "năm sau", "-1": "năm ngoái" }, "relativeTime": { "future": { "other": "sau {0} năm nữa" }, "past": { "other": "{0} năm trước" } } }, "month": { "displayName": "Tháng", "relative": { "0": "tháng này", "1": "tháng sau", "-1": "tháng trước" }, "relativeTime": { "future": { "other": "sau {0} tháng nữa" }, "past": { "other": "{0} tháng trước" } } }, "day": { "displayName": "Ngày", "relative": { "0": "Hôm nay", "1": "Ngày mai", "2": "Ngày kia", "-2": "Hôm kia", "-1": "Hôm qua" }, "relativeTime": { "future": { "other": "sau {0} ngày nữa" }, "past": { "other": "{0} ngày trước" } } }, "hour": { "displayName": "Giờ", "relativeTime": { "future": { "other": "sau {0} giờ nữa" }, "past": { "other": "{0} giờ trước" } } }, "minute": { "displayName": "Phút", "relativeTime": { "future": { "other": "sau {0} phút nữa" }, "past": { "other": "{0} phút trước" } } }, "second": { "displayName": "Giây", "relative": { "0": "bây giờ" }, "relativeTime": { "future": { "other": "sau {0} giây nữa" }, "past": { "other": "{0} giây trước" } } } } };
});
efineday("prep-prototype/cldrs/zh-hans", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "zh-Hans", "parentLocale": "zh" };
});
efineday("prep-prototype/cldrs/zh-hant", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "zh-Hant", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return "other";
    }, "fields": { "year": { "displayName": "年", "relative": { "0": "今年", "1": "明年", "-1": "去年" }, "relativeTime": { "future": { "other": "{0} 年後" }, "past": { "other": "{0} 年前" } } }, "month": { "displayName": "月", "relative": { "0": "本月", "1": "下個月", "-1": "上個月" }, "relativeTime": { "future": { "other": "{0} 個月後" }, "past": { "other": "{0} 個月前" } } }, "day": { "displayName": "日", "relative": { "0": "今天", "1": "明天", "2": "後天", "-2": "前天", "-1": "昨天" }, "relativeTime": { "future": { "other": "{0} 天後" }, "past": { "other": "{0} 天前" } } }, "hour": { "displayName": "小時", "relativeTime": { "future": { "other": "{0} 小時後" }, "past": { "other": "{0} 小時前" } } }, "minute": { "displayName": "分鐘", "relativeTime": { "future": { "other": "{0} 分鐘後" }, "past": { "other": "{0} 分鐘前" } } }, "second": { "displayName": "秒", "relative": { "0": "現在" }, "relativeTime": { "future": { "other": "{0} 秒後" }, "past": { "other": "{0} 秒前" } } } } };
});
efineday("prep-prototype/cldrs/zh", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = { "locale": "zh", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      if (ord) return "other";return "other";
    }, "fields": { "year": { "displayName": "年", "relative": { "0": "今年", "1": "明年", "-1": "去年" }, "relativeTime": { "future": { "other": "{0}年后" }, "past": { "other": "{0}年前" } } }, "month": { "displayName": "月", "relative": { "0": "本月", "1": "下个月", "-1": "上个月" }, "relativeTime": { "future": { "other": "{0}个月后" }, "past": { "other": "{0}个月前" } } }, "day": { "displayName": "日", "relative": { "0": "今天", "1": "明天", "2": "后天", "-2": "前天", "-1": "昨天" }, "relativeTime": { "future": { "other": "{0}天后" }, "past": { "other": "{0}天前" } } }, "hour": { "displayName": "小时", "relativeTime": { "future": { "other": "{0}小时后" }, "past": { "other": "{0}小时前" } } }, "minute": { "displayName": "分钟", "relativeTime": { "future": { "other": "{0}分钟后" }, "past": { "other": "{0}分钟前" } } }, "second": { "displayName": "秒钟", "relative": { "0": "现在" }, "relativeTime": { "future": { "other": "{0}秒钟后" }, "past": { "other": "{0}秒钟前" } } } } };
});
efineday('prep-prototype/components/accordion-panel/component', ['exports', 'ember-cli-opendata-pages/components/accordion-panel/component'], function (exports, _emberCliOpendataPagesComponentsAccordionPanelComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsAccordionPanelComponent['default'];
    }
  });
});
efineday('prep-prototype/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'prep-prototype/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _prepPrototypeConfigEnvironment) {

  var name = _prepPrototypeConfigEnvironment['default'].APP.name;
  var version = _prepPrototypeConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
efineday('prep-prototype/components/arcgis-map-data/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['data-map-container '],

    arcgisMapData: _ember['default'].inject.service(),
    legendControl: _ember['default'].inject.service(),

    init: function init() {
      this._super.apply(this, arguments);

      // array to store map event handlers
      this.handlers = [];
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      var add_title = this.get('addTitle') || false;

      // parse properties
      var webmap = this.get('webmap');
      var logo = this.get('logo');
      var showAttribution = this.get('showAttribution');

      var options = {
        mapOptions: {
          logo: logo,
          sliderPosition: 'top-right',
          showAttribution: showAttribution
        }
      };

      // init map
      var svc = this.get('arcgisMapData');
      if (!webmap) {
        return;
      }
      svc.createMap(webmap, this.element, options).then(function (response) {
        _this.map = response.map;
        _this.itemInfo = response.itemInfo;
        if (response.clickEventHandle) {
          _this.handlers.push(response.clickEventHandle);
        }

        svc.createSearchWidget(_this.map);

        _this.map.disableScrollWheelZoom();

        var layerListing = [];
        response.itemInfo.itemData.operationalLayers.forEach(function (layer) {
          layerListing.push({
            labelText: layer.title,
            visible: layer.visibility,
            layerObject: layer.layerObject
          });
        });

        _this.get('session').set('layerListing', layerListing);
        _this.get('session').set('legendLayers', response.itemInfo.itemData.operationalLayers);
      });
    },

    willDestroyElement: function willDestroyElement() {

      this.get('session').set('layerListing', []);
      this.get('session').set('legendLayers', []);

      var svc = this.get('arcgisMapData');
      svc.destroyMap(this.map, this.handlers);
      this.itemInfo = null;

      svc.destroyWidgets();
    }
  });
});
efineday("prep-prototype/components/arcgis-map-data/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/arcgis-map-data/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/arcgis-map/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    // classNames: ['arcgis-map-component'],
    classNames: ['data-map-container '],

    arcgisMap: _ember['default'].inject.service(),

    init: function init() {
      this._super.apply(this, arguments);

      // array to store map event handlers
      this.handlers = [];
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      var add_title = this.get('addTitle') || false;

      // parse properties
      var webmap = this.get('webmap');
      var logo = this.get('logo');
      var showAttribution = this.get('showAttribution');
      var add_legend = this.get('legend') || false;

      var options = {
        mapOptions: {
          logo: logo,
          sliderPosition: 'top-right',
          showAttribution: showAttribution
        }
      };

      // init map
      var svc = this.get('arcgisMap');
      if (!webmap) {
        return;
      }
      svc.createMap(webmap, this.element, options).then(function (response) {
        _this.map = response.map;
        _this.itemInfo = response.itemInfo;
        if (response.clickEventHandle) {
          _this.handlers.push(response.clickEventHandle);
        }

        _this.map.disableScrollWheelZoom();

        if (add_legend) {
          var layerInfos = [{
            layer: response.itemInfo.itemData.operationalLayers[0].layerObject,
            title: ' '
          }];
          svc.createLegend(_this.element, _this.map, layerInfos);
        }

        if (add_title) {
          var title = response.itemInfo.itemData.operationalLayers[0].title;
          svc.createMapTitle(_this.element, title);
        }
      });
    },

    willDestroyElement: function willDestroyElement() {
      var svc = this.get('arcgisMap');
      svc.destroyMap(this.map, this.handlers);
      this.itemInfo = null;
    }
  });
});
efineday("prep-prototype/components/arcgis-map/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/arcgis-map/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/area-line-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
efineday("prep-prototype/components/area-line-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/area-line-card/template.hbs"
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
      statements: [["content", "area-line-chart", ["loc", [null, [1, 0], [1, 19]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/area-line-chart/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      var src = 'https://s3.amazonaws.com/project-climate/cedar-types/area-line.json';
      var chart = new Cedar({ specification: src });
      var sample_data = { "features": [{ attributes: { "Date": 1970, "Value": 500, "Value2": 550 } }, { attributes: { "Date": 1980, "Value": 550, "Value2": 475 } }, { attributes: { "Date": 1990, "Value": 600, "Value2": 370 } }, { attributes: { "Date": 2000, "Value": 650, "Value2": 410 } }, { attributes: { "Date": 2010, "Value": 700, "Value2": 645 } }, { attributes: { "Date": 2020, "Value": 800, "Value2": 780 } }] };
      var dataset = {
        data: sample_data,
        mappings: {
          "x": { "field": "Date", "label": "" },
          "y": { "field": "Value", "label": "" },
          "y2": { "field": "Value2", "label": "" }
        }
      };
      chart.dataset = dataset;
      chart.show({
        elementId: '#' + this.elementId
      });
    }
  });
});
efineday("prep-prototype/components/area-line-chart/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/area-line-chart/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/body-editor/component', ['exports', 'ember-cli-opendata-pages/components/body-editor/component'], function (exports, _emberCliOpendataPagesComponentsBodyEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsBodyEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/breadcrumb-nav/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'ol',
    classNames: ['breadcrumb', 'breadcrumb-nav']
  });
});
efineday("prep-prototype/components/breadcrumb-nav/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 14
          }
        },
        "moduleName": "prep-prototype/components/breadcrumb-nav/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <ol class=\"breadcrumb\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        var el3 = dom.createTextNode("Home");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        var el3 = dom.createTextNode("Library");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        dom.setAttribute(el1, "class", "active");
        var el2 = dom.createTextNode("Data");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" </ol> ");
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
  })());
});
efineday('prep-prototype/components/card-canvas/component', ['exports', 'ember-cli-opendata-pages/components/card-canvas/component'], function (exports, _emberCliOpendataPagesComponentsCardCanvasComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsCardCanvasComponent['default'];
    }
  });
});
efineday('prep-prototype/components/card-editor/component', ['exports', 'ember-cli-opendata-pages/components/card-editor/component'], function (exports, _emberCliOpendataPagesComponentsCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/card-list/component', ['exports', 'ember-cli-opendata-pages/components/card-list/component'], function (exports, _emberCliOpendataPagesComponentsCardListComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsCardListComponent['default'];
    }
  });
});
efineday('prep-prototype/components/category-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/category-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsCategoryCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsCategoryCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/category-card/component', ['exports', 'ember-cli-opendata-pages/components/category-card/component', 'prep-prototype/config/environment'], function (exports, _emberCliOpendataPagesComponentsCategoryCardComponent, _prepPrototypeConfigEnvironment) {
  exports['default'] = _emberCliOpendataPagesComponentsCategoryCardComponent['default'].extend({
    config: _prepPrototypeConfigEnvironment['default']
  });
});
efineday('prep-prototype/components/cedar-chart/component', ['exports', 'ember-cli-cedar/components/cedar-chart/component'], function (exports, _emberCliCedarComponentsCedarChartComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliCedarComponentsCedarChartComponent['default'];
    }
  });
});
efineday('prep-prototype/components/chart-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/chart-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsChartCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsChartCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/chart-card/component', ['exports', 'ember', 'ic-ajax'], function (exports, _ember, _icAjax) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: [''],

    didInsertElement: function didInsertElement() {
      var settings = this.get('settings');
      console.log(settings);

      if (!settings) {
        return;
      }

      this.set('settings', settings);

      var chart = null;
      if (settings.chart_type === 'time-trendline') {
        chart = new Cedar({ type: 'https://s3.amazonaws.com/project-climate/cedar-types/time-trendline.json' });
      } else if (settings.chart_type === 'time-hist-high-low') {
        // chart = new Cedar({type: 'https://s3.amazonaws.com/project-climate/cedar-types/time-hist-high-low.json'});
        chart = new Cedar({ type: 'http://localhost:4200/time-hist-high-low.json' });
      } else {
        chart = new Cedar({ type: settings.chart_type });
      }

      if (settings.tooltip) {
        chart.tooltip = settings.tooltip;
      }

      if (settings.dataset.url) {
        chart.dataset = settings.dataset;
        this._showChart(chart);
      } else if (settings.json_url) {
        chart.dataset = {};
        chart.dataset.mappings = settings.dataset.mappings;
        (0, _icAjax['default'])({
          url: settings.json_url,
          dataType: 'json'
        }).then((function (data) {
          if (data) {
            this._showChart(chart, data);
          }
        }).bind(this))['catch'](function (error) {
          console.log('error querying for json data for chart', error);
        });
      }
    },

    _showChart: function _showChart(chart, data) {

      if (data) {
        chart.dataset.data = data;
      }

      var settings = this.get('settings');

      chart.show({
        elementId: '#' + this.elementId
      });

      if (settings && settings.override) {
        chart.override = settings.override;
      }

      // window.onresize = this.updateChart.bind(this);

      this.set('chart', chart);
    },

    updateChart: function updateChart() {
      var el = document.getElementById(this.elementId);
      var width = el.offsetWidth;

      var labels = undefined;
      if (width <= 200) {
        labels = {
          "fontSize": { "value": 0 }
        };
      } else if (200 < width && width <= 600) {
        labels = {
          "angle": { "value": 50 },
          "align": { "value": "left" },
          "baseline": { "value": "middle" }
        };
      } else {
        labels = {
          "angle": { "value": 0 },
          "align": { "value": "center" },
          "baseline": { "value": "middle" }
        };
      }

      var chart = this.get('chart');
      chart.override = {
        "axes": [{ "properties": {
            "labels": labels
          } }]
      };

      chart.update();
    }
  });
});
efineday("prep-prototype/components/chart-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "prep-prototype/components/chart-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/contact-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/contact-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsContactCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsContactCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/contact-card/component', ['exports', 'ember-cli-opendata-pages/components/contact-card/component'], function (exports, _emberCliOpendataPagesComponentsContactCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsContactCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/dashboard-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['dashboard-card'],

    fakeDashboardItems: _ember['default'].inject.service(),

    panel_title: 'hello',

    didInsertElement: function didInsertElement() {
      var indicator_id = this.get('indicator_id');
      var svc = this.get('fakeDashboardItems');
      var options = svc.getFakeItem(indicator_id);

      this.set('panel_title', options.panel_title);
      this.set('panel_subtitle', options.panel_subtitle);
      this.set('component_name', options.type);
      this.set('component_settings', options.component_settings);
    }
  });
});
efineday("prep-prototype/components/dashboard-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/dashboard-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-left");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h3");
        dom.setAttribute(el4, "class", "panel-title card-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "card-sub-title text-uppercase");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon-info-sign");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "clearfix");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["content", "panel_title", ["loc", [null, [4, 41], [4, 56]]]], ["content", "panel_subtitle", ["loc", [null, [5, 47], [5, 65]]]], ["inline", "component", [["get", "component_name", ["loc", [null, [13, 16], [13, 30]]]]], ["settings", ["subexpr", "@mut", [["get", "component_settings", ["loc", [null, [13, 40], [13, 58]]]]], [], []]], ["loc", [null, [13, 4], [13, 60]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/dashboard-return-link/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'a',
    classNames: [''],
    attributeBindings: ['href', 'title'],

    init: function init() {
      this._super.apply(this, arguments);
    },
    click: function click() {
      console.log('click!');
    }
  });
});
efineday("prep-prototype/components/dashboard-return-link/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/dashboard-return-link/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/data-popup/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
efineday("prep-prototype/components/data-popup/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 6
          }
        },
        "moduleName": "prep-prototype/components/data-popup/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal fade data-popup");
        dom.setAttribute(el1, "id", "dataPopupModal");
        dom.setAttribute(el1, "tabindex", "-1");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-labelledby", "myModalLabel");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog modal-lg");
        dom.setAttribute(el2, "role", "document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        dom.setAttribute(el5, "aria-label", "Close");
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "pull-left");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h4");
        dom.setAttribute(el6, "class", "modal-title data-title");
        var el7 = dom.createTextNode("Precipitation Change");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "modal-title data-subtitle text-uppercase");
        var el7 = dom.createTextNode("Relative to 1950-1999 Average");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("  \n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "pull-right");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "btn btn-default btn-md btn-download");
        var el7 = dom.createTextNode("DOWNLOAD");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "clearfix");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body modal-body-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-6");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/data/data-popup-chart.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-6 info-text");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createElement("strong");
        var el9 = dom.createTextNode("Description:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Lorem ipsum annual precipitation (in %) for the Puget Sound Lowlands climate division shown relative to the average for 1950-1999 (black horizontal line corresponding 43.6 inches). The dashed line indicating a warming of +1.3ºF (range: +0.7ºF to +1.9ºF)ß from 1895 to 2014.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createElement("strong");
        var el9 = dom.createTextNode("Data source:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Vose et al. 2014.D,1");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createElement("strong");
        var el9 = dom.createTextNode("Topic:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Precipitations, Temperature");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createElement("strong");
        var el9 = dom.createTextNode("Area:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Puget Sound, Washington");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/uw-wash.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/dataset-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/dataset-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsDatasetCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsDatasetCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/dataset-card/component', ['exports', 'ember-cli-opendata-pages/components/dataset-card/component', 'prep-prototype/config/environment'], function (exports, _emberCliOpendataPagesComponentsDatasetCardComponent, _prepPrototypeConfigEnvironment) {
  exports['default'] = _emberCliOpendataPagesComponentsDatasetCardComponent['default'].extend({
    config: _prepPrototypeConfigEnvironment['default']
  });
});
efineday('prep-prototype/components/dataset-picker/component', ['exports', 'ember-cli-opendata-pages/components/dataset-picker/component'], function (exports, _emberCliOpendataPagesComponentsDatasetPickerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsDatasetPickerComponent['default'];
    }
  });
});
efineday('prep-prototype/components/editor-drawer/component', ['exports', 'ember-cli-opendata-pages/components/editor-drawer/component'], function (exports, _emberCliOpendataPagesComponentsEditorDrawerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsEditorDrawerComponent['default'];
    }
  });
});
efineday('prep-prototype/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
efineday('prep-prototype/components/ember-tether', ['exports', 'ember-tether/components/ember-tether'], function (exports, _emberTetherComponentsEmberTether) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTetherComponentsEmberTether['default'];
    }
  });
});
efineday('prep-prototype/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
efineday('prep-prototype/components/featured-dataset-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/featured-dataset-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsFeaturedDatasetCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsFeaturedDatasetCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/featured-dataset-card/component', ['exports', 'ember-cli-opendata-pages/components/featured-dataset-card/component'], function (exports, _emberCliOpendataPagesComponentsFeaturedDatasetCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsFeaturedDatasetCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/featured-datasets-card/component', ['exports', 'ember-cli-opendata-pages/components/featured-datasets-card/component'], function (exports, _emberCliOpendataPagesComponentsFeaturedDatasetsCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsFeaturedDatasetsCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/four-quad-map-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
efineday("prep-prototype/components/four-quad-map-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/four-quad-map-card/template.hbs"
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
      statements: [["content", "four-quad-map", ["loc", [null, [1, 0], [1, 17]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/four-quad-map/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
efineday("prep-prototype/components/four-quad-map/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 50,
            "column": 6
          }
        },
        "moduleName": "prep-prototype/components/four-quad-map/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body pad-5");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row pad-bottom-5");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 marg-right-15 quad-map-col");
        var el5 = dom.createTextNode("\n        \n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n         \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 pad-left-5 quad-map-col");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 marg-right-15 quad-map-col");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 pad-left-5 quad-map-col");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "arcgis-map", [], ["webmap", "10350605f40847228356bcfc94f254c8", "logo", false, "showAttribution", false, "class", "quad-map", "legend", true, "addTitle", true], ["loc", [null, [6, 10], [13, 12]]]], ["inline", "arcgis-map", [], ["webmap", "51f882573f354ff4a03151892560f25b", "logo", false, "showAttribution", false, "class", "quad-map", "legend", true, "addTitle", true], ["loc", [null, [17, 8], [24, 12]]]], ["inline", "arcgis-map", [], ["webmap", "036239da0a6e42f78c9dd8fb938cde84", "logo", false, "showAttribution", false, "class", "quad-map", "legend", true, "addTitle", true], ["loc", [null, [29, 8], [36, 12]]]], ["inline", "arcgis-map", [], ["webmap", "af2da7efd24c4ae4bda1717506070e65", "logo", false, "showAttribution", false, "class", "quad-map", "legend", true, "addTitle", true], ["loc", [null, [39, 8], [46, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/grid-layout/component', ['exports', 'ember-cli-opendata-pages/components/grid-layout/component'], function (exports, _emberCliOpendataPagesComponentsGridLayoutComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsGridLayoutComponent['default'];
    }
  });
});
efineday('prep-prototype/components/header-locale-dropdown/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'li',
    classNames: ['dropdown'],

    intl: _ember['default'].inject.service(),

    actions: {
      setLocale: function setLocale(locale) {
        var intl = this.get('intl');
        intl.setLocale(locale);
      }
    }
  });
});
efineday("prep-prototype/components/header-locale-dropdown/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 5
          }
        },
        "moduleName": "prep-prototype/components/header-locale-dropdown/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        dom.setAttribute(el1, "class", "dropdown-toggle");
        dom.setAttribute(el1, "data-toggle", "dropdown");
        dom.setAttribute(el1, "role", "button");
        dom.setAttribute(el1, "aria-haspopup", "true");
        dom.setAttribute(el1, "aria-expanded", "false");
        var el2 = dom.createTextNode("ENGLISH ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "caret");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "dropdown-menu");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("ENGLISH");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("SPANISH");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("FRENCH");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1, 0]);
        var element2 = dom.childAt(element0, [3, 0]);
        var element3 = dom.childAt(element0, [5, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [["element", "action", ["setLocale", "en-us"], [], ["loc", [null, [3, 9], [3, 39]]]], ["element", "action", ["setLocale", "es"], [], ["loc", [null, [4, 9], [4, 36]]]], ["element", "action", ["setLocale", "fr"], [], ["loc", [null, [5, 9], [5, 36]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/header-navbar/component', ['exports', 'ember-cli-opendata-pages/components/header-navbar/component'], function (exports, _emberCliOpendataPagesComponentsHeaderNavbarComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsHeaderNavbarComponent['default'];
    }
  });
});
efineday('prep-prototype/components/jumbotron-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/jumbotron-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsJumbotronCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsJumbotronCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/jumbotron-card/component', ['exports', 'ember-cli-opendata-pages/components/jumbotron-card/component'], function (exports, _emberCliOpendataPagesComponentsJumbotronCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsJumbotronCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/layout-row/component', ['exports', 'ember-cli-opendata-pages/components/layout-row/component'], function (exports, _emberCliOpendataPagesComponentsLayoutRowComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsLayoutRowComponent['default'];
    }
  });
});
efineday('prep-prototype/components/legend-item/component', ['exports', 'ember', 'dojo/on', 'esri/request', 'esri/IdentityManager'], function (exports, _ember, _dojoOn, _esriRequest, _esriIdentityManager) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['legend-item'],
    classNameBindings: ['visible::legend-item-hide'],

    title: _ember['default'].computed('layer', function () {
      return this.get('layer').title;
    }),

    visible: _ember['default'].computed('layer', function () {
      return this.get('layer').visibility;
    }),

    legendSwatchInfo: '',

    didInsertElement: function didInsertElement() {
      var legUtil = 'http://utility.arcgis.com/sharing/tools/legend';
      this.set('legUtil', legUtil);
      esri.config.defaults.io.corsEnabledServers.push(legUtil);

      var layer = this.get('layer');

      if (layer.url) {
        esri.config.defaults.io.corsEnabledServers.push(layer.url);
      }

      var l = layer.layerObject;

      var url = 'http://www.arcgis.com/home/webmap/viewer.html?url=' + l.url;
      this.set('arcgisWebViewerLink', url);

      if (!l) {
        return;
      }

      l.on('visibility-change', (function () {
        this.set('visible', layer.layerObject.visible);
        if (layer.layerObject.visible && !layer.legendLoaded) {
          esri.config.defaults.io.corsEnabledServers.push(layer.url);
          this.requestLegendInfo();
        }
      }).bind(this));

      if (!layer.visibility) {
        return;
      }

      if (l.loaded) {
        this.requestLegendInfo();
      } else {
        _dojoOn['default'].once(l, 'update-end', this.requestLegendInfo.bind(this));
      }
    },

    requestLegendInfo: function requestLegendInfo() {
      var layer = this.get('layer');

      // set cors enablement
      // esri.config.defaults.io.corsEnabledServers.push(layer.url);

      var url = layer.url + '/legend';
      var buildFunc = '';
      if (layer.layerType === 'ArcGISMapServiceLayer' || layer.layerType === 'ArcGISTiledMapServiceLayer') {
        buildFunc = this._buildMapServiceLegend;
      } else if (layer.layerType === 'ArcGISImageServiceLayer') {
        buildFunc = this._buildImageServiceLegend;
      } else {
        // FeatureLayer or KMLLayer should be able to get swatches right away
        if (layer.layerType === 'KML') {
          this._buildKMLLegend(layer);
        } else if (layer.layerType === 'ArcGISFeatureLayer') {
          this._buildFeatureLayerLegend(layer);
        }
        return;
      }

      (0, _esriRequest['default'])({
        url: url,
        content: {
          f: 'json'
        },
        handleAs: 'json'
      }).then(buildFunc.bind(this), this.legendInfoRequestError.bind(this));
    },

    legendInfoRequestError: function legendInfoRequestError(error) {
      console.log('error requesting legend swatches', error);
    },

    _buildMapServiceLegend: function _buildMapServiceLegend(response) {
      console.log(response);
      var layer = this.get('layer');
      var visibleLayerIndex = layer.layerObject.visibleLayers[0];
      var legendInfo = response.layers.filter(function (layer) {
        return layer.layerId === visibleLayerIndex;
      })[0].legend;
      var swatchInfo = [];
      var info = null;
      for (var i = 0; i < legendInfo.length; i++) {
        if (i === 6) {
          break;
        }
        info = legendInfo[i];
        swatchInfo.push('<div class=\'legend-item-swatch\'> <img src=\'data:' + info.contentType + ';base64,' + info.imageData + '\'> </div>');
      }

      var legendSwatchInfo = new _ember['default'].Handlebars.SafeString(swatchInfo.join(''));
      this.set('legendSwatchInfo', legendSwatchInfo);

      if (layer) {
        layer.legendLoaded = true;
      }
    },

    _buildImageServiceLegend: function _buildImageServiceLegend(response) {
      console.log(response);
      var lengendInfo = response.layers[0].legend;
      var swatchInfo = [];
      var info = null;
      for (var i = 0; i < lengendInfo.length; i++) {
        if (i === 6) {
          break;
        }
        info = lengendInfo[i];
        swatchInfo.push('<div class=\'legend-item-swatch rotate-270\'> <img src=\'data:' + info.contentType + ';base64,' + info.imageData + '\'> </div>');
      }

      var legendSwatchInfo = new _ember['default'].Handlebars.SafeString(swatchInfo.join(''));
      this.set('legendSwatchInfo', legendSwatchInfo);

      var layer = this.get('layer');
      if (layer) {
        layer.legendLoaded = true;
      }
    },

    _buildKMLLegend: function _buildKMLLegend(layer) {
      var fLayer = layer.layerObject._fLayers[0];
      var renderer = fLayer.renderer;
      var infos = renderer.infos;

      var swatchInfo = [];
      var info = null;
      for (var i = 0; i < infos.length; i++) {
        if (i === 6) {
          break;
        }
        info = infos[i];
        swatchInfo.push('<div class=\'legend-item-swatch swatch-kml\' style=\'background-color:' + info.symbol.color.toHex() + '\'></div>');
      }

      var legendSwatchInfo = new _ember['default'].Handlebars.SafeString(swatchInfo.join(''));
      this.set('legendSwatchInfo', legendSwatchInfo);

      if (layer) {
        layer.legendLoaded = true;
      }
    },

    _buildFeatureLayerLegend: function _buildFeatureLayerLegend(layer) {
      var _this = this;

      var url = layer.url;
      if (url.indexOf('MapServer')) {
        (function () {
          var serviceUrl = url.substr(0, url.indexOf('MapServer') + 9);
          var layerIndex = url.substr(url.indexOf('MapServer') + 10);

          (0, _esriRequest['default'])({
            url: _this.get('legUtil'),
            content: {
              f: 'json',
              soapUrl: serviceUrl
            },
            handleAs: 'json'
          }).then((function (response) {
            if (!response.layers || response.layers.length === 0) {
              console.log('no layer legend info for :: ' + layer.title);
              return;
            }
            var infos = response.layers[layerIndex].legend;
            var swatchInfo = [];
            var info = null;
            for (var i = 0; i < infos.length; i++) {
              if (i === 6) {
                break;
              }
              info = infos[i];
              if (info.imageData && info.imageData !== '') {
                swatchInfo.push('<div class=\'legend-item-swatch\'> <img src=\'data:' + info.contentType + ';base64,' + info.imageData + '\'> </div>');
              } else {
                swatchInfo.push('<div class=\'legend-item-swatch\'> <img class="fs-image" src=\'' + info.url + '\'></div>');
              }
            }

            var legendSwatchInfo = new _ember['default'].Handlebars.SafeString(swatchInfo.join(''));
            this.set('legendSwatchInfo', legendSwatchInfo);

            layer.legendLoaded = true;
          }).bind(_this), function (error) {
            console.log('error getting legend for feature layer by map server reference', error);
          });
        })();
      }
    }

  });
});
efineday("prep-prototype/components/legend-item/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
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
        "moduleName": "prep-prototype/components/legend-item/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-xs-3 vcenter legend-item-padding");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "swatch-wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-xs-5 vcenter legend-item-padding");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "legend-title text-uppercase");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "col-xs-4 vcenter legend-item-padding text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "legend-options");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon-eye-open coming-soon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon-screenshot coming-soon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon-calendar coming-soon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <span class=\"glyphicon glyphicon-info-sign\" data-target=\"#dataPopupModal\" data-toggle=\"modal\"></span> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "arcgis-link");
        dom.setAttribute(el4, "target", "_blank");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "glyphicon glyphicon-info-sign");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5, 1, 9]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 0, 0);
        morphs[2] = dom.createAttrMorph(element1, 'href');
        return morphs;
      },
      statements: [["content", "legendSwatchInfo", ["loc", [null, [4, 6], [4, 26]]]], ["content", "title", ["loc", [null, [8, 45], [8, 54]]]], ["attribute", "href", ["concat", [["get", "arcgisWebViewerLink", ["loc", [null, [16, 17], [16, 36]]]]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/legend-view/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    layersDidChange: _ember['default'].observer('session.legendLayers', function () {
      var layers = this.get('session').get('legendLayers');
      this.set('layers', layers);
      this._buildLegend(layers);
    }),

    _buildLegend: function _buildLegend(layers) {
      console.log(layers);
    }

  });
});
efineday("prep-prototype/components/legend-view/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "prep-prototype/components/legend-view/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "legend-item", [], ["layer", ["subexpr", "@mut", [["get", "layer", ["loc", [null, [3, 24], [3, 29]]]]], [], []]], ["loc", [null, [3, 4], [3, 31]]]]],
        locals: ["layer"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "prep-prototype/components/legend-view/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "legend-view");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "layers", ["loc", [null, [2, 10], [2, 16]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/components/map-card/component', ['exports', 'ember', 'esri/arcgis/utils'], function (exports, _ember, _esriArcgisUtils) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['map-card'],

    map: null,

    didInsertElement: function didInsertElement() {
      var settings = this.get('settings');
      console.log(settings);

      if (!settings) {
        return;
      }

      var options = {
        mapOptions: {
          smartNavigation: false
        }
      };

      _esriArcgisUtils['default'].createMap(settings.webmap, this.element, options).then((function (response) {
        console.log(response);
        if (response.map) {
          this.set('map', response.map);
          response.map.disableScrollWheelZoom();
        }
      }).bind(this), function (error) {
        console.log(error);
      });
    }
  });
});
efineday("prep-prototype/components/map-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/map-card/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/markdown-card/component', ['exports', 'ember-cli-opendata-pages/components/markdown-card/component'], function (exports, _emberCliOpendataPagesComponentsMarkdownCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsMarkdownCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
efineday('prep-prototype/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
efineday('prep-prototype/components/od-autocomplete/component', ['exports', 'ember-cli-opendata-pages/components/od-autocomplete/component'], function (exports, _emberCliOpendataPagesComponentsOdAutocompleteComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsOdAutocompleteComponent['default'];
    }
  });
});
efineday('prep-prototype/components/od-header-search/component', ['exports', 'ember-cli-opendata-pages/components/od-header-search/component'], function (exports, _emberCliOpendataPagesComponentsOdHeaderSearchComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsOdHeaderSearchComponent['default'];
    }
  });
});
efineday('prep-prototype/components/od-location-search/component', ['exports', 'ember-cli-opendata-pages/components/od-location-search/component'], function (exports, _emberCliOpendataPagesComponentsOdLocationSearchComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsOdLocationSearchComponent['default'];
    }
  });
});
efineday('prep-prototype/components/od-signin-placeholder/component', ['exports', 'ember-cli-opendata-pages/components/od-signin-placeholder/component'], function (exports, _emberCliOpendataPagesComponentsOdSigninPlaceholderComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsOdSigninPlaceholderComponent['default'];
    }
  });
});
efineday('prep-prototype/components/page-info-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/page-info-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsPageInfoCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsPageInfoCardEditorComponent['default'];
    }
  });
});
efineday('prep-prototype/components/page-info-card/component', ['exports', 'ember-cli-opendata-pages/components/page-info-card/component'], function (exports, _emberCliOpendataPagesComponentsPageInfoCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsPageInfoCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/placeholder-card/component', ['exports', 'ember-cli-opendata-pages/components/placeholder-card/component'], function (exports, _emberCliOpendataPagesComponentsPlaceholderCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsPlaceholderCardComponent['default'];
    }
  });
});
efineday('prep-prototype/components/publish-controls/component', ['exports', 'ember-cli-opendata-pages/components/publish-controls/component'], function (exports, _emberCliOpendataPagesComponentsPublishControlsComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsPublishControlsComponent['default'];
    }
  });
});
efineday('prep-prototype/components/rank-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
efineday("prep-prototype/components/rank-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/rank-card/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/rank-component/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
efineday("prep-prototype/components/rank-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/rank-component/template.hbs"
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
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/reveal-presentation/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isShowingContentModal: false,
    isShowingDownloadModal: false,
    tooltips: {
      up: false,
      down: false,
      left: false,
      right: false
    },
    animations: {
      up: false,
      down: false,
      left: false,
      right: true
    },
    slidesTitles: Em.A(),
    nextSlideTitle: 'Next slide',
    showTooltip: false,
    classNames: 'reveal-container',
    actions: {
      goToSlide: function goToSlide(indexh, indexv) {
        this.toggleProperty('isShowingContentModal');
        Reveal.slide(indexh, indexv);
      },
      toggleModal: function toggleModal(modal) {
        switch (modal) {
          case 'content':
            this.toggleProperty('isShowingContentModal');
            break;
          case 'download':
            this.toggleProperty('isShowingDownloadModal');
            break;
          default:
        }
      },
      downloadDashboard: function downloadDashboard() {
        console.log('Download dashboard');
      }
    },

    didInsertElement: function didInsertElement() {
      this.slidesTitlesEl = this.$('#sliderTitles');
      this.setSlidesTitles();
      this.initializeReveal();
    },

    setSlidesTitles: function setSlidesTitles() {
      this.$('.slides > section').each((function (index, section) {
        var sections = $(section).find('section');
        var sectionsLenght = sections.length;
        this.slidesTitles[index] = [];
        if (sectionsLenght) {
          sections.each((function (index2, slide) {
            this.slidesTitles[index].push({ title: slide.dataset.title, active: false });
          }).bind(this));
        } else {
          this.slidesTitles[index].push({ title: section.dataset.title, active: false });
        }
      }).bind(this));
    },

    initializeReveal: function initializeReveal() {
      Reveal.initialize({
        controls: false,
        progress: false,
        slideNumber: true,
        history: false,
        keyboard: true,
        overview: true,
        center: true,
        touch: true,
        loop: false,
        hideAddressBar: true, // Hides the address bar on mobile devices
        transition: 'slide', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'default' });
      // Slide number formatting can be configured using these variables:
      //  "h.v":  horizontal . vertical slide number (default)
      //  "h/v":  horizontal / vertical slide number
      //    "c":  flattened slide number
      //  "c/t":  flattened slide number / total slides
      // default/fast/slow
      Reveal.slide(0, 0);
      Reveal.configure({ slideNumber: 'c/t' });
      Reveal.addEventListener('ready', (function (event) {
        this.updateSlidesInfo(event);
      }).bind(this));
      Reveal.addEventListener('slidechanged', (function (event) {
        this.updateSlidesInfo(event);
      }).bind(this));
    },

    updateSlidesInfo: function updateSlidesInfo(event) {
      this.updateActiveIndex();
      this.updateTitle(event.indexh, event.indexv);
      this.setTooltipVisibles();
      this.setAnimations();
    },

    updateActiveIndex: function updateActiveIndex() {
      var slidesTitles = this.get("slidesTitles");
      if (this.currentSlideActive) {
        Em.set(slidesTitles.objectAt(this.currentSlideActive.indexh).objectAt(this.currentSlideActive.indexv), 'active', false);
      }
      this.currentSlideActive = this.getCurrentSlideIndex();
      Em.set(slidesTitles.objectAt(this.currentSlideActive.indexh).objectAt(this.currentSlideActive.indexv), 'active', true);
    },

    getCurrentSlideIndex: function getCurrentSlideIndex() {
      var index = Reveal.getIndices(Reveal.getCurrentSlide());
      index.v = index.v ? index.v : 0;
      return { indexh: index.h, indexv: index.v };
    },

    updateTitle: function updateTitle(indexh, indexv) {
      var title = this.slidesTitles[indexh][indexv].title;
      if (title.length > 50) title = title.slice(0, 50) + '…';
      this.slidesTitlesEl.html(title);
    },

    setAnimations: function setAnimations() {
      this.set('animations', {
        up: this.getAnimationStatus('up'),
        down: this.getAnimationStatus('down'),
        left: this.getAnimationStatus('left'),
        right: this.getAnimationStatus('right')
      });
    },

    getAnimationStatus: function getAnimationStatus(position) {
      var _currentSlideActive = this.currentSlideActive;
      var indexh = _currentSlideActive.indexh;
      var indexv = _currentSlideActive.indexv;

      var isLastVerticalSlide = (function () {
        return this.slidesTitles[indexh][indexv + 1] ? false : true;
      }).bind(this);
      switch (position) {
        case 'left':
          return Reveal.isLastSlide();
        case 'right':
          return isLastVerticalSlide();
        case 'up':
          return Reveal.isLastSlide();
        case 'down':
          return indexv >= 0 && !isLastVerticalSlide();
        default:
          return false;
      }
    },

    setTooltipVisibles: function setTooltipVisibles() {
      this.set('tooltips', {
        up: this.getNextSlideTitle('up'),
        down: this.getNextSlideTitle('down'),
        left: this.getNextSlideTitle('left'),
        right: this.getNextSlideTitle('right')
      });
    },

    getNextSlideTitle: function getNextSlideTitle(type) {
      var _currentSlideActive2 = this.currentSlideActive;
      var indexh = _currentSlideActive2.indexh;
      var indexv = _currentSlideActive2.indexv;

      switch (type) {
        case 'left':
          indexv = 0;
          indexh = indexh - 1;
          break;
        case 'right':
          indexv = 0;
          indexh = indexh + 1;
          break;
        case 'up':
          indexv = indexv - 1;
          break;
        case 'down':
          indexv = indexv + 1;
          break;
        default:
      }
      if (this._indexInsideArray(indexh, indexv) && this.slidesTitles[indexh][indexv]) {
        return this.slidesTitles[indexh][indexv].title;
      } else {
        return false;
      }
    },
    _indexInsideArray: function _indexInsideArray(indexh, indexv) {
      if (indexh > -1 && indexh < this.slidesTitles.length) {
        return indexv > -1 && indexv < this.slidesTitles[indexh].length;
      } else {
        return false;
      }
    }
  });
});
efineday("prep-prototype/components/reveal-presentation/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 10
              },
              "end": {
                "line": 11,
                "column": 10
              }
            },
            "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "tooltips.left", ["loc", [null, [10, 12], [10, 29]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tooltip-on-element", [], ["side", "right", "updateFor", ["subexpr", "@mut", [["get", "tooltips.left", ["loc", [null, [9, 55], [9, 68]]]]], [], []], "class", "sonoma-tooltip"], 0, null, ["loc", [null, [9, 10], [11, 33]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 20,
                "column": 10
              },
              "end": {
                "line": 22,
                "column": 10
              }
            },
            "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "tooltips.right", ["loc", [null, [21, 12], [21, 30]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tooltip-on-element", [], ["side", "left", "updateFor", ["subexpr", "@mut", [["get", "tooltips.right", ["loc", [null, [20, 54], [20, 68]]]]], [], []], "class", "sonoma-tooltip"], 0, null, ["loc", [null, [20, 10], [22, 33]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 10
              },
              "end": {
                "line": 33,
                "column": 10
              }
            },
            "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "tooltips.up", ["loc", [null, [32, 12], [32, 27]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 8
            },
            "end": {
              "line": 34,
              "column": 8
            }
          },
          "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tooltip-on-element", [], ["updateFor", ["subexpr", "@mut", [["get", "tooltips.up", ["loc", [null, [31, 42], [31, 53]]]]], [], []], "class", "sonoma-tooltip"], 0, null, ["loc", [null, [31, 10], [33, 33]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 40,
                "column": 10
              },
              "end": {
                "line": 42,
                "column": 10
              }
            },
            "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "tooltips.down", ["loc", [null, [41, 12], [41, 29]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 8
            },
            "end": {
              "line": 43,
              "column": 8
            }
          },
          "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "tooltip-on-element", [], ["updateFor", ["subexpr", "@mut", [["get", "tooltips.down", ["loc", [null, [40, 42], [40, 55]]]]], [], []], "class", "sonoma-tooltip"], 0, null, ["loc", [null, [40, 10], [42, 33]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "fragmentReason": false,
                    "revision": "Ember@2.4.2",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 71,
                        "column": 12
                      },
                      "end": {
                        "line": 75,
                        "column": 12
                      }
                    },
                    "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("              ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createElement("a");
                    dom.setAttribute(el2, "href", "#");
                    var el3 = dom.createComment("");
                    dom.appendChild(el2, el3);
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n              ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var element4 = dom.childAt(fragment, [1]);
                    var element5 = dom.childAt(element4, [1]);
                    var morphs = new Array(3);
                    morphs[0] = dom.createAttrMorph(element4, 'class');
                    morphs[1] = dom.createElementMorph(element5);
                    morphs[2] = dom.createMorphAt(element5, 0, 0);
                    return morphs;
                  },
                  statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "slide.active", ["loc", [null, [72, 30], [72, 42]]]], "-active"], [], ["loc", [null, [72, 25], [72, 54]]]]]]], ["element", "action", ["goToSlide", ["get", "indexh", ["loc", [null, [73, 49], [73, 55]]]], ["get", "indexv", ["loc", [null, [73, 56], [73, 62]]]]], [], ["loc", [null, [73, 28], [73, 65]]]], ["content", "slide.title", ["loc", [null, [73, 66], [73, 81]]]]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.4.2",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 70,
                      "column": 10
                    },
                    "end": {
                      "line": 76,
                      "column": 10
                    }
                  },
                  "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
                },
                isEmpty: false,
                arity: 2,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["block", "unless", [["get", "indexv", ["loc", [null, [71, 22], [71, 28]]]]], [], 0, null, ["loc", [null, [71, 12], [75, 23]]]]],
                locals: ["slide", "indexv"],
                templates: [child0]
              };
            })();
            var child1 = (function () {
              var child0 = (function () {
                return {
                  meta: {
                    "fragmentReason": false,
                    "revision": "Ember@2.4.2",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 79,
                        "column": 14
                      },
                      "end": {
                        "line": 83,
                        "column": 14
                      }
                    },
                    "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("                ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("li");
                    var el2 = dom.createTextNode("\n                  ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createElement("a");
                    dom.setAttribute(el2, "href", "#");
                    var el3 = dom.createComment("");
                    dom.appendChild(el2, el3);
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var element2 = dom.childAt(fragment, [1]);
                    var element3 = dom.childAt(element2, [1]);
                    var morphs = new Array(3);
                    morphs[0] = dom.createAttrMorph(element2, 'class');
                    morphs[1] = dom.createElementMorph(element3);
                    morphs[2] = dom.createMorphAt(element3, 0, 0);
                    return morphs;
                  },
                  statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "slide.active", ["loc", [null, [80, 32], [80, 44]]]], "-active"], [], ["loc", [null, [80, 27], [80, 56]]]]]]], ["element", "action", ["goToSlide", ["get", "indexh", ["loc", [null, [81, 51], [81, 57]]]], ["get", "indexv", ["loc", [null, [81, 58], [81, 64]]]]], [], ["loc", [null, [81, 30], [81, 67]]]], ["content", "slide.title", ["loc", [null, [81, 68], [81, 83]]]]],
                  locals: [],
                  templates: []
                };
              })();
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.4.2",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 78,
                      "column": 12
                    },
                    "end": {
                      "line": 84,
                      "column": 12
                    }
                  },
                  "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
                },
                isEmpty: false,
                arity: 2,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                  dom.insertBoundary(fragment, 0);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [["block", "if", [["get", "indexv", ["loc", [null, [79, 20], [79, 26]]]]], [], 0, null, ["loc", [null, [79, 14], [83, 21]]]]],
                locals: ["slide", "indexv"],
                templates: [child0]
              };
            })();
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.4.2",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 69,
                    "column": 8
                  },
                  "end": {
                    "line": 86,
                    "column": 8
                  }
                },
                "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("ul");
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("          ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
                dom.insertBoundary(fragment, 0);
                return morphs;
              },
              statements: [["block", "each", [["get", "slides", ["loc", [null, [70, 18], [70, 24]]]]], [], 0, null, ["loc", [null, [70, 10], [76, 19]]]], ["block", "each", [["get", "slides", ["loc", [null, [78, 20], [78, 26]]]]], [], 1, null, ["loc", [null, [78, 12], [84, 21]]]]],
              locals: [],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.4.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 68,
                  "column": 6
                },
                "end": {
                  "line": 87,
                  "column": 6
                }
              },
              "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
            },
            isEmpty: false,
            arity: 2,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "indexh", ["loc", [null, [69, 14], [69, 20]]]]], [], 0, null, ["loc", [null, [69, 8], [86, 15]]]]],
            locals: ["slides", "indexh"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 64,
                "column": 2
              },
              "end": {
                "line": 89,
                "column": 2
              }
            },
            "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "close");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h1");
            dom.setAttribute(el1, "class", "title -has-action");
            var el2 = dom.createTextNode("Table of contents");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1, "class", "index");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1]);
            var element7 = dom.childAt(fragment, [3]);
            var morphs = new Array(3);
            morphs[0] = dom.createElementMorph(element6);
            morphs[1] = dom.createElementMorph(element7);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
            return morphs;
          },
          statements: [["element", "action", ["toggleModal", "content"], [], ["loc", [null, [65, 24], [65, 59]]]], ["element", "action", ["goToSlide", 0, 0], [], ["loc", [null, [66, 34], [66, 61]]]], ["block", "each", [["get", "slidesTitles", ["loc", [null, [68, 14], [68, 26]]]]], [], 0, null, ["loc", [null, [68, 6], [87, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 63,
              "column": 0
            },
            "end": {
              "line": 90,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "modal-dialog", [], ["targetAttachment", "center"], 0, null, ["loc", [null, [64, 2], [89, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child5 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 93,
                "column": 2
              },
              "end": {
                "line": 163,
                "column": 2
              }
            },
            "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "close");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "container content-section");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "row modal-header-wrapper");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-md-9 wrapper");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("header");
            dom.setAttribute(el4, "class", "header");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("h2");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode("Datasets used");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-md-3");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("button");
            dom.setAttribute(el4, "class", "btn btn-transparent");
            dom.setAttribute(el4, "type", "button");
            dom.setAttribute(el4, "name", "button");
            var el5 = dom.createTextNode("Download dashboard");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "row");
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-md-4 resources");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Aqueduct: Water stress projections ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("WRI");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Environmental democracy index ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("IUCN and UNEP");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Epidemic ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("IUCN and UNEP");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Intact forest landscapes ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("USGS");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-md-4 resources");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Aqueduct: Water stress projections ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("WRI");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Environmental democracy index ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("IUCN and UNEP");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Epidemic ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("IUCN and UNEP");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Intact forest landscapes ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("USGS");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "col-md-4 resources");
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Aqueduct: Water stress projections ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("WRI");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Environmental democracy index ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("IUCN and UNEP");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Epidemic ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("IUCN and UNEP");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "resource");
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("p");
            dom.setAttribute(el5, "class", "title");
            var el6 = dom.createTextNode(" Intact forest landscapes ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("div");
            dom.setAttribute(el5, "class", "links");
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("CSV");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("a");
            dom.setAttribute(el6, "href", "#");
            dom.setAttribute(el6, "target", "_blank");
            var el7 = dom.createTextNode("USGS");
            dom.appendChild(el6, el7);
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode(" ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n          ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n        ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n      ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(fragment, [3, 1, 3, 1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [["element", "action", ["toggleModal", "download"], [], ["loc", [null, [94, 24], [94, 60]]]], ["element", "action", ["downloadDashboard"], [], ["loc", [null, [103, 74], [103, 104]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 0
            },
            "end": {
              "line": 164,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "modal-dialog", [], ["targetAttachment", "center", "container-class", "-center"], 0, null, ["loc", [null, [93, 2], [163, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 165,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/reveal-presentation/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "reveal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "slides");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "reveal-controls -horizontal -left");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "navigate-left");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "reveal-controls -horizontal -right");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "navigate-right");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "reveal-controls -vertical");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "navigate-up");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "navigate-down");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "reveal-actions");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "index");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "menu-icon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "id", "sliderTitles");
        dom.setAttribute(el4, "href", "#");
        var el5 = dom.createTextNode("Start");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "toolbar");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "download");
        var el5 = dom.createTextNode("Download");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "share coming-soon");
        var el5 = dom.createTextNode("Share");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element8 = dom.childAt(fragment, [0]);
        var element9 = dom.childAt(element8, [3, 1]);
        var element10 = dom.childAt(element8, [5, 1]);
        var element11 = dom.childAt(element8, [7]);
        var element12 = dom.childAt(element11, [1]);
        var element13 = dom.childAt(element11, [3]);
        var element14 = dom.childAt(element8, [9]);
        var element15 = dom.childAt(element14, [1]);
        var element16 = dom.childAt(element14, [3, 1]);
        var morphs = new Array(13);
        morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
        morphs[1] = dom.createAttrMorph(element9, 'class');
        morphs[2] = dom.createMorphAt(dom.childAt(element9, [1]), 1, 1);
        morphs[3] = dom.createAttrMorph(element10, 'class');
        morphs[4] = dom.createMorphAt(dom.childAt(element10, [1]), 1, 1);
        morphs[5] = dom.createAttrMorph(element12, 'class');
        morphs[6] = dom.createMorphAt(dom.childAt(element12, [1]), 1, 1);
        morphs[7] = dom.createAttrMorph(element13, 'class');
        morphs[8] = dom.createMorphAt(dom.childAt(element13, [1]), 1, 1);
        morphs[9] = dom.createElementMorph(element15);
        morphs[10] = dom.createElementMorph(element16);
        morphs[11] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[12] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [3, 4], [3, 13]]]], ["attribute", "class", ["concat", ["navigate-container ", ["subexpr", "if", [["get", "animations.left", ["loc", [null, [6, 40], [6, 55]]]], "blink"], [], ["loc", [null, [6, 35], [6, 65]]]]]]], ["block", "if", [["get", "tooltips.left", ["loc", [null, [8, 14], [8, 27]]]]], [], 0, null, ["loc", [null, [8, 8], [12, 15]]]], ["attribute", "class", ["concat", ["navigate-container ", ["subexpr", "if", [["get", "animations.right", ["loc", [null, [17, 40], [17, 56]]]], "blink"], [], ["loc", [null, [17, 35], [17, 66]]]]]]], ["block", "if", [["get", "tooltips.right", ["loc", [null, [19, 14], [19, 28]]]]], [], 1, null, ["loc", [null, [19, 8], [23, 15]]]], ["attribute", "class", ["concat", ["navigate-container ", ["subexpr", "if", [["get", "animations.up", ["loc", [null, [28, 40], [28, 53]]]], "blink"], [], ["loc", [null, [28, 35], [28, 63]]]]]]], ["block", "if", [["get", "tooltips.up", ["loc", [null, [30, 14], [30, 25]]]]], [], 2, null, ["loc", [null, [30, 8], [34, 15]]]], ["attribute", "class", ["concat", ["navigate-container ", ["subexpr", "if", [["get", "animations.down", ["loc", [null, [37, 40], [37, 55]]]], "blink"], [], ["loc", [null, [37, 35], [37, 65]]]]]]], ["block", "if", [["get", "tooltips.down", ["loc", [null, [39, 14], [39, 27]]]]], [], 3, null, ["loc", [null, [39, 8], [43, 15]]]], ["element", "action", ["toggleModal", "content"], [], ["loc", [null, [48, 23], [48, 58]]]], ["element", "action", ["toggleModal", "download"], [], ["loc", [null, [57, 18], [57, 54]]]], ["block", "if", [["get", "isShowingContentModal", ["loc", [null, [63, 6], [63, 27]]]]], [], 4, null, ["loc", [null, [63, 0], [90, 7]]]], ["block", "if", [["get", "isShowingDownloadModal", ["loc", [null, [92, 6], [92, 28]]]]], [], 5, null, ["loc", [null, [92, 0], [164, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  })());
});
efineday('prep-prototype/components/site-footer/component', ['exports', 'ember-cli-opendata-pages/components/site-footer/component'], function (exports, _emberCliOpendataPagesComponentsSiteFooterComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsSiteFooterComponent['default'];
    }
  });
});
efineday('prep-prototype/components/site-header/component', ['exports', 'ember-cli-opendata-pages/components/site-header/component'], function (exports, _emberCliOpendataPagesComponentsSiteHeaderComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsSiteHeaderComponent['default'];
    }
  });
});
efineday('prep-prototype/components/sonoma-slide-0/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title", "data-background-image", "data-background-size"],
    "data-title": 'Start',
    "data-background-image": "img/sonoma/dashboard-sonoma-header.png",
    "data-background-size": "cover"
  });
});
efineday("prep-prototype/components/sonoma-slide-0/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-0/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container content-section -center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-12 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4, "class", "banner");
        var el5 = dom.createTextNode("\n        How is sonoma county’s climate changing\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-1/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    cartodbtable: 'o_1_tmx1951_1980_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(143.152,#00009C) stop(153.226,#0046FF) stop(163.3,#00FFFF) stop(173.375,#0CFFCD) stop(183.449,#68FF8A) stop(193.523,#FEFF00) stop(203.597,#FF8F00) stop(213.672,#FF0000) stop(223.746,#800000) }',

    vegaSpec: {
      "padding": { "top": 40, "left": 40, "bottom": 50, "right": 20 },
      "signals": [{
        "name": "currentYear",
        "init": "0",
        "streams": [{
          "type": "mousemove",
          "expr": "utcyear(iscale('x', eventX()))"
        }]
      }, {
        "name": "tooltip",
        "init": { "x": 0, "y": 0 },
        "streams": [{
          "type": "mousemove",
          "expr": "{xLeft: +iscale('x', eventX()), xRight: +iscale('x', eventX() - 150)}"
        }]
      }],
      "data": [{
        "name": "line",
        "values": [],
        "format": { "parse": { "x": "date" } }
      }, {
        "name": "axis",
        "values": [{ "x": "Year", "y": "Precipitation in inches" }]
      }, {
        "name": "tooltip",
        "source": "line",
        "transform": [{
          "type": "filter",
          "test": "datum.x == utc(currentYear, 0, 1)"
        }, {
          "type": "formula",
          "field": "xTooltip",
          "expr": "datum.x > utc(2040, 0, 1) ? tooltip.xRight : tooltip.xLeft"
        }, {
          "type": "formula",
          "field": "xData",
          "expr": "tooltip.xLeft"
        }]
      }],
      "scales": [{
        "name": "x",
        "type": "time",
        "range": "width",
        "domain": { "data": "line", "field": "x" }
      }, {
        "name": "y",
        "type": "linear",
        "range": "height",
        "domain": { "data": "line", "field": "y" },
        "nice": true
      }],
      "axes": [{
        "name": "lbl",
        "type": "x",
        "scale": "x",
        "values": [-1577923200000, -946771200000, -315619200000, 315532800000, 946684800000, 1577836800000, 2208988800000, 2840140800000, 3471292800000],
        "formatType": "utc",
        "format": "%Y",
        "properties": {
          "ticks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "strokeWidth": { "value": 0 }
          },
          "labels": {
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "dy": { "value": 5 }
          }
        }
      }, {
        "type": "y",
        "ticks": 7,
        "scale": "y",
        "grid": true,
        "layer": "back",
        "format": "f",
        "properties": {
          "ticks": { "stroke": { "value": "steelblue" } },
          "majorTicks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#333" },
            "strokeWidth": { "value": 0 }
          },
          "grid": {
            "stroke": { "value": "#000" },
            "strokeOpacity": { "value": 0.1 },
            "strokeWidth": { "value": 1 }
          },
          "labels": {
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }],
      "marks": [{
        "type": "area",
        "from": { "data": "area" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "y2": { "scale": "y", "value": "0" },
            "fill": { "value": "#000" },
            "opacity": { "value": 0.07 }
          }
        }
      }, {
        "type": "line",
        "from": { "data": "line" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "stroke": { "value": "#fff" },
            "strokeWidth": { "value": 3 }
          }
        }
      }, {
        "type": "text",
        "from": { "data": "axis" },
        "properties": {
          "enter": {
            "x": 0,
            "y": 0,
            "text": { "template": "{{datum.y | upper}}" },
            "dx": { "value": -40 },
            "dy": { "value": -20 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 56.4 },
            "stroke": { "value": "#263e57" },
            "strokeWidth": { "value": 1.5 }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 27.1 },
            "stroke": { "value": "#3B4F63" },
            "strokeWidth": { "value": 1.5 },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "group",
        "from": { "data": "tooltip" },
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xTooltip" },
            "y": { "scale": "y", "field": "y", "offset": -55 },
            "width": { "value": 150 },
            "height": { "value": 45 },
            "fill": { "value": "#fff" },
            "fillOpacity": { "value": 0.85 }
          }
        },

        "marks": [{
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 10 },
              "y": { "value": 17 },
              "text": { "template": "{{currentYear}}" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 },
              "fontWeight": { "value": "bold" }
            }
          }
        }, {
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 11 },
              "y": { "value": 35 },
              "text": { "template": "{{parent.y|number:'.2f'}} in" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 }
            }
          }
        }]
      }, {
        "type": "symbol",
        "from": { "data": "tooltip" },
        "size": 4,
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xData" },
            "y": { "scale": "y", "field": "y" },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 12 },
            "fill": { "value": "#fff" },
            "stroke": { "value": "#ffc94e" },
            "strokeWidth": { "value": 2 }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": { "value": -25 },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "10TH PERCENTILE (27.1 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5,
              "offset": -25
            },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#263e57" }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5
            },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "90TH PERCENTILE (56.4 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }]
    },

    didRender: function didRender() {
      this.$chart = this.$('#chart1-1');
      this.slideMapEl = this.$('#map1-3');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = data.rows;
        this.initChart();
      }).bind(this));
      this.setListeners();
    },

    fetchData: function fetchData() {
      return $.get('https://prep-admin.cartodb.com/api/v2/sql?q=SELECT year AS x, precipitation_in_yr AS y FROM "prep-admin". precipitation_pcm_a2 union all select year AS x, precipitation_in_yr AS y FROM precipitation1920_2009 order by x asc');
    },

    setListeners: function setListeners() {
      this.refreshEvent = _.debounce(_.bind(this.update, this), 300);
      $(window).on('resize', this.refreshEvent);
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-1-3')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    update: function update() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
        this.initChart();
      }
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map1-3', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        if (this.bounds) {
          this.fitBounds();
        } else {
          this.setBounds().done((function (data) {
            var coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
            var southWest = L.latLng(coordinates[0][1], coordinates[0][0]),
                northEast = L.latLng(coordinates[2][1], coordinates[2][0]);
            this.bounds = L.latLngBounds(southWest, northEast);
            this.fitBounds();
          }).bind(this));
        }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      this.slideMap.setMaxBounds(this.bounds);
      this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this2 = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider1-3');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this2.index = index;
        _this2.updateLayer(index);

        /* We update the slider */
        _this2.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_tmx1951_1980_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_tmx1981_2010_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_tmx2010_2039_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_tmx2040_2069_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_tmx2070_2099_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_tmx1951_1980_ave_hst';
      }
      this.addRaster();
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }

  });
});
efineday("prep-prototype/components/sonoma-slide-1/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 64,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-1/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Projected Overall increased weather variability");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Projected Overall increased weather variability");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Unprecedented warm conditions are projected to occur in both summer and winter seasons. Both extreme wet years and extreme dry years are likely to occur. Overall, despite all this variability, the North Bay region is becoming more arid due to rising temperatures.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Preparing for the impacts of this increased weather variability is critically important\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Projected annual precipitations between 2010 and 2099");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart");
        dom.setAttribute(el6, "id", "chart1-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-1-3 -no-center");
        dom.setAttribute(el1, "data-title", "Temperatures increasing throughout the Year");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "float-title");
        var el4 = dom.createTextNode("Temperatures increasing throughout the Year ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "info-button");
        var el5 = dom.createTextNode("i");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "map1-3");
        dom.setAttribute(el2, "class", "map -big slide-map-1-3");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "map-legend");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "range years");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "-selected");
        var el5 = dom.createTextNode("1951-1980");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("1981-2010");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("2011-2039");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("2040-2069");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("2070-2099");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "timelineSlider1-3");
        dom.setAttribute(el3, "class", "slide");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("Explanation");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "legend");
        var el4 = dom.createTextNode(" Areas showing where the 30-yr average maximum monthly temperature exceeds average maximum temperature between 1981 to 2010 (>72.2 °F) ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Investments to prepare the Sonoma County Region");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "overlapping-cards");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Increase weather variability requires more planning and investments to prepare the Sonoma County Region to be resilient in the face of this climate change in areas such as:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Infrastructure improvements (buildings, roads, energy grids)");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Agriculture");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Water Management");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Health Services");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Fire Management");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card slide-1-3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-2/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide', '-no-center'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Slide 2',

    cartodbtable: 'o_1_tmx1951_1980_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(143.152,#00009C) stop(153.226,#0046FF) stop(163.3,#00FFFF) stop(173.375,#0CFFCD) stop(183.449,#68FF8A) stop(193.523,#FEFF00) stop(203.597,#FF8F00) stop(213.672,#FF0000) stop(223.746,#800000) }',

    didRender: function didRender() {
      this.slideMapEl = this.$('#map2-1');
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-2-1')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map2-1', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        // if (this.bounds){
        //   this.fitBounds();
        // } else {
        //   this.setBounds().done(function(data){
        //     let coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
        //     let southWest = L.latLng(coordinates[0][1],coordinates[0][0]),
        //     northEast = L.latLng(coordinates[2][1],coordinates[2][0]);
        //     this.bounds = L.latLngBounds(southWest, northEast);
        //     this.fitBounds();
        //   }.bind(this));
        // }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      this.slideMap.setMaxBounds(this.bounds);
      this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider2-1');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this.index = index;
        _this.updateLayer(index);

        /* We update the slider */
        _this.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_tmx1951_1980_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_tmx1981_2010_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_tmx2010_2039_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_tmx2040_2069_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_tmx2070_2099_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_tmx1951_1980_ave_hst';
      }
      this.addRaster();
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }
  });
});
efineday("prep-prototype/components/sonoma-slide-2/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-2/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-2-1");
        dom.setAttribute(el1, "data-title", "Overall temperatures projected to rise in both summer and winter seasons");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Overall temperatures projected to rise in both summer and winter seasons");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          This map visualization shows temperatures are projected to rise in both summer and winter seasons in Sonoma County. There are positive and negatives aspects to this change.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper map-card");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "map2-1");
        dom.setAttribute(el5, "class", "map");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "map-legend");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "range years");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "-selected");
        var el8 = dom.createTextNode("1951-1980");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("1981-2010");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2011-2039");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2040-2069");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2070-2099");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "timelineSlider2-1");
        dom.setAttribute(el6, "class", "slide");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Explanation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "legend");
        var el7 = dom.createTextNode(" Areas showing where the 30-yr average maximum monthly temperature exceeds average maximum temperature between 1981 to 2010 (>72.2 °F)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "What does this mean for you?");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "overlapping-cards");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        var el7 = dom.createTextNode("What does this mean for you?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Fire frequencies could increase by 20%, requiring more readiness planning.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Plants that grow best in these temperatures are different than those that thrive in current temps.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Water demand will increase, as  well as costs.");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Lower heating use and costs in winter.");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("Increase air conditioning use and costs in summer.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card slide-2-2");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-3/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    cartodbtable: 'o_1_tmn1951_1980djf_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(250,#800000) }',

    didRender: function didRender() {
      this.slideMapEl = this.$('#map3-1');
      this.setListeners();
    },

    setListeners: function setListeners() {
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-3-1')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map3-1', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        // commented because of this raster is bigger and doesnt fit well
        // if (this.bounds){
        //   this.fitBounds();
        // } else {
        //   this.setBounds().done(function(data){
        //     let coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
        //     let southWest = L.latLng(coordinates[0][1],coordinates[0][0]),
        //     northEast = L.latLng(coordinates[2][1],coordinates[2][0]);
        //     this.bounds = L.latLngBounds(southWest, northEast);
        //     this.fitBounds();
        //   }.bind(this));
        // }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      // this.slideMap.setMaxBounds(this.bounds);
      // this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + ' ' + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider3-1');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this.index = index;
        _this.updateLayer(index);
        _this.addRaster();

        /* We update the slider */
        _this.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_tmn1951_1980djf_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_tmn1981_2010djf_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_tmn2010_2039djf_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_tmn2040_2069djf_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_tmn2070_2099djf_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_tmn1951_1980djf_ave_hst';
      }
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }

  });
});
efineday("prep-prototype/components/sonoma-slide-3/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 51,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-3/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-3-1");
        dom.setAttribute(el1, "data-title", "Increase in warmer winter nights projected");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Increase in Warmer Winter Nights projected");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          This map visualization shows the Sonoma County region is projected to see an increase in night-time temperature for winter months (Dec, Jan, Feb).\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Warmer Winter Nights will bring more relaxing evenings outdoors, yet also bring potential problems for agriculture and health.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper map-card");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "map3-1");
        dom.setAttribute(el5, "class", "map slide-map-3-1");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "map-legend");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "range years");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "-selected");
        var el8 = dom.createTextNode("1951-1980");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("1981-2010");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2011-2039");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2040-2069");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2070-2099");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "timelineSlider3-1");
        dom.setAttribute(el6, "class", "slide");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Explanation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "legend");
        var el7 = dom.createTextNode(" Areas showing where 30-yr average minimum monthly winter temperature exceeds average minimum monthly winter temperature between 1981 and 2010 (>39.7 °F) ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Night temperature changes consequences");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "overlapping-cards");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card -sm");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("While warmer winter nights may seem great to be outside and use less energy to heat your home or office, it can affect agriculture, Sonoma County’s largest industry, in complex ways.  Growers have been adapting to environmental changes creatively for decades and will need to in the future.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Grapevines equireray a certain number of nights near freezing to produce fruit.  Fewer freezing nights will therefore equireray shifts to agricultural practices to maintain their production levels.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card slide-3-2");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Also when night times temperatures get so low that grapes are threatened by frost, vineyard managers will spray grapevines with water immediately prior to the freeze to protect the vines from extreme damage.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Fewer nights of freezing will result therefore in less water used by agriculture for frost protection.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Warmer winter nights unfortunately also increase the potential for disease vectors from mosquitoes and rodents. Freezing nights kill mosquitoes and reduce rodent population.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-4/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'section',

    cartodbtable: 'o_1_tmx1951_1980jja_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(250,#800000) }',

    didRender: function didRender() {
      this.slideMapEl = this.$('#map4-2');
      this.setListeners();
    },

    setListeners: function setListeners() {
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-4-2')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map4-2', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        if (this.bounds) {
          this.fitBounds();
        } else {
          this.setBounds().done((function (data) {
            var coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
            var southWest = L.latLng(coordinates[0][1], coordinates[0][0]),
                northEast = L.latLng(coordinates[2][1], coordinates[2][0]);
            this.bounds = L.latLngBounds(southWest, northEast);
            this.fitBounds();
          }).bind(this));
        }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      // this.slideMap.setMaxBounds(this.bounds);
      // this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider4-2');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this.index = index;
        _this.updateLayer(index);
        _this.addRaster();

        /* We update the slider */
        _this.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_tmx1951_1980jja_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_tmx1981_2010jja_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_tmx2010_2039jja_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_tmx2040_2069jja_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_tmx2070_2099jja_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_tmx1951_1980jja_ave_hst';
      }
      this.addRaster();
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }

  });
});
efineday("prep-prototype/components/sonoma-slide-4/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-4/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-4-2");
        dom.setAttribute(el1, "data-title", "Summertime heat waves");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("More heat stress days projected in the summer");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper map-card");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "map4-2");
        dom.setAttribute(el5, "class", "map slide-map-4-2");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "map-legend");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "range years");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "-selected");
        var el8 = dom.createTextNode("1951-1980");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("1981-2010");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2011-2039");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2040-2069");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2070-2099");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "timelineSlider4-2");
        dom.setAttribute(el6, "class", "slide");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Explanation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "legend");
        var el7 = dom.createTextNode(" Areas showing the 30-yr average maximum monthly summer temperature exceeds the average maximum monthly temperature between 1981 and 2010 (>95 °F) ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Heat stress effects");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "overlapping-cards");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        var el7 = dom.createTextNode("Heat Stress Effects");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Heat Stress Effects are Manifold to people, animals (pets, wildlife and livestock) and plants (landscape and agriculture).");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("\n            Cautions with heat stress:");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("br");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("People.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Illness, dehydration, careful work conditions\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("Animals.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Additional water for hydration and shelter\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("Plants.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" Landscape and agriculture will equireray more irrigation and at times growing specific types of plants/crops who can handle high heat.\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card slide-4-3");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-5/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    vegaSpec: {
      "padding": { "top": 40, "left": 40, "bottom": 50, "right": 20 },
      "signals": [{
        "name": "currentYear",
        "init": "0",
        "streams": [{
          "type": "mousemove",
          "expr": "utcyear(iscale('x', eventX()))"
        }]
      }, {
        "name": "tooltip",
        "init": { "x": 0, "y": 0 },
        "streams": [{
          "type": "mousemove",
          "expr": "{xLeft: +iscale('x', eventX()), xRight: +iscale('x', eventX() - 150)}"
        }]
      }],
      "data": [{
        "name": "line",
        "values": [],
        "format": { "parse": { "x": "date" } }
      }, {
        "name": "axis",
        "values": [{ "x": "Year", "y": "Precipitation in inches" }]
      }, {
        "name": "tooltip",
        "source": "line",
        "transform": [{
          "type": "filter",
          "test": "datum.x == utc(currentYear, 0, 1)"
        }, {
          "type": "formula",
          "field": "xTooltip",
          "expr": "datum.x > utc(2040, 0, 1) ? tooltip.xRight : tooltip.xLeft"
        }, {
          "type": "formula",
          "field": "xData",
          "expr": "tooltip.xLeft"
        }]
      }],
      "scales": [{
        "name": "x",
        "type": "time",
        "range": "width",
        "domain": { "data": "line", "field": "x" }
      }, {
        "name": "y",
        "type": "linear",
        "range": "height",
        "domain": { "data": "line", "field": "y" },
        "nice": true
      }],
      "axes": [{
        "name": "lbl",
        "type": "x",
        "scale": "x",
        "values": [-1577923200000, -946771200000, -315619200000, 315532800000, 946684800000, 1577836800000, 2208988800000, 2840140800000, 3471292800000],
        "formatType": "utc",
        "format": "%Y",
        "properties": {
          "ticks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "strokeWidth": { "value": 0 }
          },
          "labels": {
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "dy": { "value": 5 }
          }
        }
      }, {
        "type": "y",
        "ticks": 7,
        "scale": "y",
        "grid": true,
        "layer": "back",
        "format": "f",
        "properties": {
          "ticks": { "stroke": { "value": "steelblue" } },
          "majorTicks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#333" },
            "strokeWidth": { "value": 0 }
          },
          "grid": {
            "stroke": { "value": "#000" },
            "strokeOpacity": { "value": 0.1 },
            "strokeWidth": { "value": 1 }
          },
          "labels": {
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }],
      "marks": [{
        "type": "area",
        "from": { "data": "area" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "y2": { "scale": "y", "value": "0" },
            "fill": { "value": "#000" },
            "opacity": { "value": 0.07 }
          }
        }
      }, {
        "type": "line",
        "from": { "data": "line" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "stroke": { "value": "#fff" },
            "strokeWidth": { "value": 3 }
          }
        }
      }, {
        "type": "text",
        "from": { "data": "axis" },
        "properties": {
          "enter": {
            "x": 0,
            "y": 0,
            "text": { "template": "{{datum.y | upper}}" },
            "dx": { "value": -40 },
            "dy": { "value": -20 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 56.4 },
            "stroke": { "value": "#263e57" },
            "strokeWidth": { "value": 1.5 }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 27.1 },
            "stroke": { "value": "#3B4F63" },
            "strokeWidth": { "value": 1.5 },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "group",
        "from": { "data": "tooltip" },
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xTooltip" },
            "y": { "scale": "y", "field": "y", "offset": -55 },
            "width": { "value": 150 },
            "height": { "value": 45 },
            "fill": { "value": "#fff" },
            "fillOpacity": { "value": 0.85 }
          }
        },

        "marks": [{
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 10 },
              "y": { "value": 17 },
              "text": { "template": "{{currentYear}}" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 },
              "fontWeight": { "value": "bold" }
            }
          }
        }, {
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 11 },
              "y": { "value": 35 },
              "text": { "template": "{{parent.y|number:'.2f'}} in" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 }
            }
          }
        }]
      }, {
        "type": "symbol",
        "from": { "data": "tooltip" },
        "size": 4,
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xData" },
            "y": { "scale": "y", "field": "y" },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 12 },
            "fill": { "value": "#fff" },
            "stroke": { "value": "#ffc94e" },
            "strokeWidth": { "value": 2 }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": { "value": -25 },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "10TH PERCENTILE (27.1 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5,
              "offset": -25
            },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#263e57" }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5
            },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "90TH PERCENTILE (56.4 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }]
    },

    didRender: function didRender() {
      this.$chart = this.$('#chart5-1');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = data.rows;
        this.initChart();
      }).bind(this));
      this.setListeners();
    },

    fetchData: function fetchData() {
      return $.get('https://prep-admin.cartodb.com/api/v2/sql?q=SELECT year AS x, precipitation_in_yr AS y FROM "prep-admin". precipitation_pcm_a2 union all select year AS x, precipitation_in_yr AS y FROM precipitation1920_2009 order by x asc');
    },

    setListeners: function setListeners() {
      this.refreshEvent = _.debounce(_.bind(this.update, this), 300);
      $(window).on('resize', this.refreshEvent);
    },

    update: function update() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
        this.initChart();
      }
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
    }

  });
});
efineday("prep-prototype/components/sonoma-slide-5/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-5/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Rainfall is projected to become more variable");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Rainfall is projected to become more variable");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("These graphs project an increased frequency of both high and low rainfall years in the coming century.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Projected annual precipitations between 2010 and 2099");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart");
        dom.setAttribute(el6, "id", "chart5-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Rainfall fluctuation consequences");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "overlapping-cards");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card -sm");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        var el7 = dom.createTextNode("Rainfall fluctuation consequences");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("With these fluctuations between high and low rainfall years, periods of drought and floods are projected.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Streams could fluctuate dramatically affecting water supply, fish habitat and transportation infrastructure such as roads and bridges.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card slide-5-2");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-6/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    vegaSpec: {
      "padding": { "top": 30, "left": 40, "bottom": 65, "right": 20 },
      "data": [{
        "name": "bars",
        "values": [],
        "transform": [{
          "type": "formula",
          "field": "label",
          "expr": "(2001 + datum.x * 5) + '-' + (2005 + datum.x * 5)"
        }]
      }, {
        "name": "axis",
        "values": [{ "x": "Year", "y": "Number of events" }]
      }, {
        "name": "legend-1",
        "values": [{ "name": "Lower flow", "color": "#1a3e62" }]
      }, {
        "name": "legend-2",
        "values": [{ "name": "Upper flow", "color": "#ffc94e" }]
      }],
      "scales": [{
        "name": "x",
        "type": "ordinal",
        "range": "width",
        "padding": 0.2,
        "domain": { "fields": [{ "data": "bars", "field": "x" }] }
      }, {
        "name": "y",
        "type": "linear",
        "range": "height",
        "domain": { "fields": [{ "data": "bars", "field": "y" }] },
        "nice": true
      }, {
        "name": "color",
        "type": "ordinal",
        "domain": { "data": "bars", "field": "position" },
        "range": ["#1a3e62", "#ffc94e"]
      }],
      "axes": [{
        "name": "lbl",
        "type": "x",
        "scale": "x",
        "properties": {
          "ticks": {
            "strokeWidth": { "value": 1 },
            "stroke": { "value": "#3B4F63" },
            "opacity": { "value": 0.3 }
          },
          "axis": {
            "stroke": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "strokeWidth": { "value": 0 }
          },
          "labels": {
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "dy": { "value": 5 },
            "angle": { "value": -30 },
            "text": { "value": "" }
          }
        }
      }, {
        "type": "y",
        "ticks": 7,
        "scale": "y",
        "grid": true,
        "layer": "back",
        "format": "f",
        "properties": {
          "ticks": { "stroke": { "value": "steelblue" } },
          "majorTicks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#333" },
            "strokeWidth": { "value": 0 }
          },
          "grid": {
            "stroke": { "value": "#000" },
            "strokeOpacity": { "value": 0.1 },
            "strokeWidth": { "value": 1 }
          },
          "labels": {
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }],
      "marks": [{
        "type": "rect",
        "properties": {
          "enter": {
            "x": { "scale": "x", "value": "0" },
            "x2": { "scale": "x", "value": "2" },
            "y": { "value": 0 },
            "height": { "field": { "group": "height" } },
            "fill": { "value": "#001421" },
            "opacity": { "value": 0.08 }
          }
        }
      }, {
        "type": "group",
        "from": {
          "data": "bars",
          "transform": [{ "type": "facet", "groupby": ["x"] }]
        },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "key" },
            "width": { "scale": "x", "band": true }
          }
        },
        "scales": [{
          "name": "pos",
          "type": "ordinal",
          "range": "width",
          "domain": { "field": "position" }
        }],
        "marks": [{
          "name": "bars",
          "type": "rect",
          "properties": {
            "enter": {
              "x": { "scale": "pos", "field": "position" },
              "width": { "scale": "pos", "band": true },
              "y": { "scale": "y", "field": "y" },
              "y2": { "scale": "y", "value": 0 },
              "fill": { "scale": "color", "field": "position" }
            }
          }
        }, {
          "type": "text",
          "from": {
            "transform": [{
              "type": "filter",
              "test": "datum.x % 2 == 0 && datum.position == 0"
            }]
          },
          "properties": {
            "enter": {
              "x": { "scale": "pos", "field": "position" },
              "y": { "scale": "y", "value": 0 },
              "text": {
                "template": "{{datum.label}}"
              },
              "dx": { "value": -42 },
              "dy": { "value": 20 },
              "angle": { "value": -30 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.5 },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 10 },
              "fontWeight": { "value": 300 }
            }
          }
        }]
      }, {
        "type": "text",
        "from": { "data": "axis" },
        "properties": {
          "enter": {
            "x": 0,
            "y": 0,
            "text": { "template": "{{datum.y | upper}}" },
            "dx": { "value": -25 },
            "dy": { "value": -20 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rect",
        "from": { "data": "legend-1" },
        "properties": {
          "enter": {
            "x": { "value": -25 },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 58
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 55
            },
            "fill": { "field": "color" }
          }
        }
      }, {
        "type": "text",
        "from": { "data": "legend-1" },
        "properties": {
          "enter": {
            "x": 0,
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "template": "{{datum.name | upper}}" },
            "dx": { "value": -9 },
            "dy": { "value": 60 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rect",
        "from": { "data": "legend-2" },
        "properties": {
          "enter": {
            "x": { "value": 100 },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 55
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 58
            },
            "fill": { "field": "color" }
          }
        }
      }, {
        "type": "text",
        "from": { "data": "legend-2" },
        "properties": {
          "enter": {
            "x": 0,
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "template": "{{datum.name | upper}}" },
            "dx": { "value": 115 },
            "dy": { "value": 60 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }]
    },

    didRender: function didRender() {
      this.$chart = this.$('#chart6-1');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = this._getParseData(data.rows);
        this.initChart();
      }).bind(this));
      this.setListeners();
    },

    fetchData: function fetchData() {
      // var query = "with low as (SELECT split_part(date, '/', 3)::int%2B2000 as date, count(pcm_a2_lower_river) lower FROM day_average_flows where pcm_a2_lower_river>38902.6 group by split_part(date, '/', 3)::int%2B2000 order by date asc), up as (SELECT split_part(date, '/', 3)::int%2B2000 as date, count(pcm_a2_upper_river) upper FROM day_average_flows where pcm_a2_upper_river>19298.2 group by split_part(date, '/', 3)::int%2B2000 order by date asc) select to_date(up.date::text, 'YYYY') date, lower, upper from low full outer join up on low.date=up.date order by date asc"
      var query = "with low as (SELECT distinct on (cat)  (cat-400) as cat, count(pcm_a2_lower_river) over (partition by cat order by cat asc) lower FROM \"prep-admin\".day_average_flow where pcm_a2_lower_river>38902.6 order by cat asc), up as (SELECT distinct on (cat)  (cat-400) as cat, count(pcm_a2_upper_river) over (partition by cat order by cat asc) upper FROM \"prep-admin\".day_average_flow where pcm_a2_upper_river>19298.2 order by cat asc) select up.cat, lower, upper from low full outer join up on low.cat=up.cat order by cat asc";

      return $.get('https://prep-admin.cartodb.com/api/v2/sql?q=' + query);
    },

    _getParseData: function _getParseData(data) {
      var parseData = [];

      var dataIndex = 0;
      var dataMaxIndex = Math.max.apply(null, data.map(function (row) {
        return row.cat;
      }));
      for (var i = 0, j = dataMaxIndex + 1; i < j; i++) {
        var x = i;

        if (i === data[dataIndex].cat) {
          parseData.push({ x: x, y: data[dataIndex].lower || 0, position: 0 });
          parseData.push({ x: x, y: data[dataIndex].upper || 0, position: 1 });
          dataIndex++;
        } else {
          parseData.push({ x: x, y: 0, position: 0 });
          parseData.push({ x: x, y: 0, position: 1 });
        }
      }

      return parseData;
    },

    setListeners: function setListeners() {
      this.refreshEvent = _.debounce(_.bind(this.update, this), 300);
      $(window).on('resize', this.refreshEvent);
    },

    update: function update() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
        this.initChart();
      }
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
    }

  });
});
efineday("prep-prototype/components/sonoma-slide-6/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-6/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Increase in intense storm events");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Increase in intense storm events");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The frequency of 3-day “very high water flow events” are up to 3 times more likely to occur than they do currently.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card -light");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Number of 3-day flow events in the Russian river watershed");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart");
        dom.setAttribute(el6, "id", "chart6-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Storm Events Consequences");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "overlapping-cards");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("The most worrisome storm events are ones that become labeled “the worst storm events for a given year or decade”. Which usually last 3 days and have extremely high rainfall, water runoff and flooding (called water flow).");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Extreme weather events equireray planning for emergencies such as road and store closures where you need to have supplies of water and food to live on your own for a few days if needed.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Agriculture and landscape preparation includes prevention of soil erosion and crop/plant damage.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "card slide-6-2");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma-slide-7/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    cartodbtable: 'o_1_cwd1951_1980_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(250,rgba(128, 0, 0, 1)) }',

    didRender: function didRender() {
      this.slideMapEl = this.$('#map7-2');
      this.setListeners();
    },

    setListeners: function setListeners() {
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-7-2')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map7-2', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        if (this.bounds) {
          this.fitBounds();
        } else {
          this.setBounds().done((function (data) {
            var coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
            var southWest = L.latLng(coordinates[0][1], coordinates[0][0]),
                northEast = L.latLng(coordinates[2][1], coordinates[2][0]);
            this.bounds = L.latLngBounds(southWest, northEast);
            this.fitBounds();
          }).bind(this));
        }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      this.slideMap.setMaxBounds(this.bounds);
      this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + ' ' + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider7-2');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this.index = index;
        _this.updateLayer(index);
        _this.addRaster();

        /* We update the slider */
        _this.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_cwd1951_1980_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_cwd1981_2010_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_cwd2010_2039_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_cwd2040_2069_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_cwd2070_2099_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_cwd1951_1980_ave_hst';
      }
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }

  });
});
efineday("prep-prototype/components/sonoma-slide-7/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma-slide-7/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Drought occurrence is projected to increase because of rising temperatures");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Drought occurrence is projected to increase because of rising temperatures");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The extreme drought which California has been in for 5+ years cannot be remedied quickly, and it is important to know that not all high rainfall events can efficiently decrease the drought conditions in the soils in the landscape.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("When we get a lot of rain, it’s often during warm weather, the plants soak up the rainwater and less goes into the soil.  The soil and ground need hydration in order to build back up our ground-water supply.  What accumulates is called Climate Water Deficit.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-7-2 -no-center");
        dom.setAttribute(el1, "data-title", "Climate water deficit");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "float-title");
        var el4 = dom.createTextNode("Climate Water Deficit ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "info-button");
        var el5 = dom.createTextNode("i");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "id", "map7-2");
        dom.setAttribute(el2, "class", "map -big slide-map-7-2");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "map-legend");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "range years");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "-selected");
        var el5 = dom.createTextNode("1951-1980");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("1981-2010");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("2011-2039");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("2040-2069");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("2070-2099");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "timelineSlider7-2");
        dom.setAttribute(el3, "class", "slide");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("Explanation");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "legend");
        var el4 = dom.createTextNode(" Areas showing where the 30-yr average climate water deficit exceeds the average climate water deficit between 1981 and 2010 (>28 in/yr) ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-0/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title", "data-background-image", "data-background-size"],
    "data-title": 'Start',
    "data-background-image": "img/sonoma/sonoma-1/landscape.jpg",
    "data-background-size": "cover",

    didRender: function didRender() {
      this.setListeners();
    },

    setListeners: function setListeners() {
      Reveal.addEventListener('slidechanged', (function (event) {
        if (!event.currentSlide.classList.contains('slide-1-intro')) {
          event.currentSlide.style.background = 'white';
        }
      }).bind(this));
    }
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-0/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 143,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-0/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-1-intro");
        dom.setAttribute(el1, "data-title", "Projected Overall increased weather variability");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "viel-banner");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section flex -justify-space-between -column full-height");
        var el3 = dom.createTextNode("\n  	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        dom.setAttribute(el3, "style", "margin-bottom: 10%");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12 wrapper flex -column -align-center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/SCCRD-Logo.png");
        dom.setAttribute(el5, "class", "c-image -medium");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  			");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "banner -center header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.setAttribute(el6, "class", "title -line-center -white");
        var el7 = dom.createTextNode("\n          	Sonoma County Climate Resilience Dashboard\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n	        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        var el7 = dom.createTextNode("\n	          Developed by The Sonoma County Climate Resilience Team\n	        ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n  		");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  	");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("footer");
        dom.setAttribute(el5, "class", "c-logos");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-1/logos/scw-logo.png");
        dom.setAttribute(el6, "class", "logo");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-1/logos/rcpa-logo.png");
        dom.setAttribute(el6, "class", "logo");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-1/logos/pepperwood-logo.png");
        dom.setAttribute(el6, "class", "logo");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-1/logos/usgs-logo.png");
        dom.setAttribute(el6, "class", "logo");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-1/logos/ek-logo.png");
        dom.setAttribute(el6, "class", "logo");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-1/logos/sec-logo.png");
        dom.setAttribute(el6, "class", "logo");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "style", "color: white");
        var el4 = dom.createTextNode("Photo Credit: ©Pepperwood 2016");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Projected Overall increased weather variability");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Projected Overall increased weather variability");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sonoma County features diverse agriculture, globally-significant biodiversity, nine growing communities, and a thriving economy. The Russian River watershed provides drinking water to 600,000 people, habitat for rare salmon species, and world-class wines.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/road.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "How the Region is Preparing for Climate Change");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/people.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("How the Region is Preparing for Climate Change");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sonoma County—\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Leader in combating climate change");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Recognized by the White House as a US Climate Champion");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Continually raising community awareness about the impacts of climate variability");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("\n          Photo Credit: ©Pepperwood 2016\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Sonoma County’s Regional Climate Protection Authority (RCPA) Fosters Collaboration");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Sonoma County’s Regional Climate Protection Authority (RCPA) Fosters Collaboration");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          The RCPA is a unique agency created to improve coordination on climate change issues, and is governed by a Board of elected officials from all nine cities and the County. The RCPA provides a platform to pool resources and share tools and best practices. The Regional Climate Action Plan developed by the RCPA on behalf of local jurisdictions guides policies for mitigation and adaptation.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/community.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Sonoma County Water Agency:  Mitigation Leader");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/collector.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Sonoma County Water Agency:  Mitigation Leader");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          The Sonoma County Water Agency is an innovator in utilizing renewable energy sources to supply water to its users, and procures 100% of its electricity needs through renewable and carbon free resources, achieving a carbon neutral electricity supply to power its water system.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "A Vibrant Collective of NGOs Catalyzes Community Action");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/NBCAI-logo.png");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/crosspollinate.png");
        dom.setAttribute(el5, "class", "c-image -small");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("A Vibrant Collective of NGOs Catalyzes Community Action");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Under the umbrella of the ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://www.northbayclimate.org");
        dom.setAttribute(el6, "target", "_blanck");
        var el7 = dom.createTextNode("North Bay Climate Adaptation Initiative");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" (NBCAI), local NGOs leverage their strengths to forge innovative partnerships between scientists, businesses, and experts in multiple sectors. NBCAI’s community engagement supports public agencies by seeding the ground for a science-based approach to cross-sector action.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Photo Credit: ©Pepperwood 2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-5 col-md-offset-1 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/Pyramid.png");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n	    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("footer");
        dom.setAttribute(el4, "class", "c-logos");
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/SEC-Logo.jpg");
        dom.setAttribute(el5, "class", "logo");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/Aginno-logo.png");
        dom.setAttribute(el5, "class", "logo");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/Pepperwood-Logo.jpg");
        dom.setAttribute(el5, "class", "logo");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/brelje-race-logo.png");
        dom.setAttribute(el5, "class", "logo");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/logos/laguna-logo.png");
        dom.setAttribute(el5, "class", "logo");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n	    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-1/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    vegaSpec: {
      axes: [{
        type: "x",
        scale: "x",
        ticks: 5,
        title: "years",
        values: [1920, 1940, 1960, 1980, 2000, 2020, 2040, 2060, 2080, 2099],
        properties: {
          axis: {
            stroke: {
              value: "#E6E6E6"
            },
            opacity: {
              value: 1
            },
            strokeWidth: {
              value: 1.5
            }
          },
          ticks: {
            stroke: {
              value: "#9BA2AA"
            }
          },
          title: {
            fill: {
              value: "#9BA2AA"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            fontSize: {
              value: 12
            }
          },
          labels: {
            fill: {
              value: "#9BA2AA"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            align: {
              value: "center"
            },
            baseline: {
              value: "top"
            },
            fontSize: {
              value: 10
            }
          }
        }
      }, {
        grid: false,
        type: "y",
        scale: "y",
        ticks: 10,
        title: "Summer max temperature ºC",
        properties: {
          axis: {
            stroke: {
              value: "#E6E6E6"
            },
            opacity: {
              value: 1
            },
            strokeWidth: {
              value: 1.5
            }
          },
          ticks: {
            stroke: {
              value: "#9BA2AA"
            }
          },
          title: {
            x: {
              value: 50
            },
            y: {
              value: -20
            },
            fill: {
              value: "#9BA2AA"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            angle: 90,
            fontSize: {
              value: 12
            }
          },
          labels: {
            fill: {
              value: "#9BA2AA"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            align: {
              value: "right"
            },
            baseline: {
              value: "middle"
            },
            fontSize: {
              value: 10
            }
          }
        },
        titleOffset: 15
      }],
      data: [{
        url: "http://api.resourcewatch.org/query/3feaf26c-42c8-43ce-b1b5-07a02a773c36?sql=select * from index_3feaf26c42c843ceb1b507a02a773c36 order by date asc",
        name: "data",
        format: {
          type: "json",
          property: "data"
        }
      }, {
        name: "hist",
        source: "data",
        transform: [{
          test: "datum.date < 2010",
          type: "filter"
        }]
      }, {
        name: "modeled",
        source: "data",
        transform: [{
          test: "datum.date > 2009",
          type: "filter"
        }]
      }, {
        name: "legend",
        values: [{
          cat: "Historic"
        }, {
          cat: "PCM A2"
        }, {
          cat: "Models amplitude"
        }]
      }, {
        name: "tooltip",
        source: "data",
        transform: [{
          test: "datum.date == indexDate.date",
          type: "filter"
        }, {
          expr: "datum.date > 2060 ? indexDate.xRight : indexDate.xLeft",
          type: "formula",
          field: "xTooltip"
        }, {
          expr: "datum.date < 2010 ? datum.HST : datum.PCM_A2",
          type: "formula",
          field: "value"
        }, {
          expr: "indexDate.xLeft",
          type: "formula",
          field: "xData"
        }, {
          by: "date",
          type: "sort"
        }]
      }],
      marks: [{
        name: "datalines-hist",
        type: "group",
        marks: [{
          from: {
            data: "hist"
          },
          type: "line",
          properties: {
            enter: {
              x: {
                field: "date",
                scale: "x"
              },
              y: {
                field: "HST",
                scale: "y"
              },
              height: {
                scale: "y"
              },
              stroke: {
                value: "#efa600"
              },
              strokeWidth: {
                value: 1.5
              },
              strokeOpacity: {
                value: 1
              }
            }
          }
        }]
      }, {
        name: "datalines-modeled",
        type: "group",
        marks: [{
          from: {
            data: "modeled"
          },
          type: "area",
          properties: {
            enter: {
              x: {
                field: "date",
                scale: "x"
              },
              y: {
                field: "min",
                scale: "y"
              },
              y2: {
                field: "max",
                scale: "y"
              },
              fill: {
                value: "#1a6d9e"
              },
              fillOpacity: {
                value: 0.2
              },
              interpolate: {
                value: "linear"
              }
            }
          }
        }, {
          from: {
            data: "modeled"
          },
          type: "line",
          properties: {
            enter: {
              x: {
                field: "date",
                scale: "x"
              },
              y: {
                field: "PCM_A2",
                scale: "y"
              },
              height: {
                scale: "y"
              },
              stroke: {
                value: "#1a6d9e"
              },
              strokeWidth: {
                value: 1.5
              },
              strokeOpacity: {
                value: 1
              }
            }
          }
        }]
      }, {
        name: "90 perc",
        type: "rule",
        properties: {
          enter: {
            x: {
              value: 0
            },
            y: {
              scale: "y",
              value: 31.35
            },
            x2: {
              field: {
                group: "width"
              }
            },
            stroke: {
              value: "#263e57"
            },
            strokeWidth: {
              value: 1.5
            },
            strokeOpacity: {
              value: 0.2
            }
          }
        }
      }, {
        name: "10 perc",
        type: "rule",
        properties: {
          enter: {
            x: {
              value: 0
            },
            y: {
              scale: "y",
              value: 29.3
            },
            x2: {
              field: {
                group: "width"
              }
            },
            stroke: {
              value: "#263e57"
            },
            strokeWidth: {
              value: 1.5
            },
            strokeOpacity: {
              value: 0.2
            }
          }
        }
      }, {
        from: {
          data: "tooltip"
        },
        name: "tooltip",
        type: "group",
        marks: [{
          type: "text",
          properties: {
            update: {
              x: {
                value: 10
              },
              y: {
                value: 17
              },
              fill: {
                value: "#3B4F63"
              },
              font: {
                value: "Montserrat, sans-serif"
              },
              text: {
                template: "{{indexDate.xLeft}}"
              },
              opacity: {
                value: 0.8
              },
              fontSize: {
                value: 11
              },
              fontWeight: {
                value: "bold"
              }
            }
          }
        }, {
          name: "mean",
          type: "text",
          properties: {
            update: {
              x: {
                value: 11
              },
              y: {
                value: 35
              },
              fill: {
                value: "#3B4F63"
              },
              font: {
                value: "Montserrat, sans-serif"
              },
              text: {
                template: "{{parent.value|number:'.2f'}} ºC"
              },
              opacity: {
                value: 0.8
              },
              fontSize: {
                value: 11
              }
            }
          }
        }],
        properties: {
          update: {
            x: {
              field: "xTooltip",
              scale: "x",
              offset: 0
            },
            y: {
              scale: "y",
              offset: -10,
              signal: "indexDate.yval"
            },
            fill: {
              value: "#fff"
            },
            width: {
              value: 130
            },
            height: {
              value: 55
            },
            fillOpacity: {
              value: 0.85
            }
          }
        }
      }, {
        ease: "in-out",
        from: {
          data: "tooltip"
        },
        size: 4,
        type: "rule",
        properties: {
          update: {
            x: {
              field: "date",
              scale: "x"
            },
            y: {
              value: 0
            },
            y2: {
              field: {
                group: "height"
              }
            },
            stroke: {
              value: "#000000"
            },
            opacity: {
              value: 0.2
            },
            strokeWidth: {
              value: 2
            }
          }
        }
      }, {
        ease: "in-out",
        from: {
          data: "tooltip"
        },
        size: 4,
        type: "symbol",
        properties: {
          update: {
            x: {
              field: "date",
              scale: "x"
            },
            y: {
              field: "value",
              scale: "y"
            },
            fill: {
              value: "#c15467"
            },
            size: {
              value: 20
            }
          }
        }
      }],
      width: 600,
      height: 400,
      scales: [{
        name: "x",
        type: "ordinal",
        range: "width",
        domain: {
          fields: [{
            data: "data",
            field: "date"
          }]
        },
        domainMax: 2100,
        domainMin: 1920
      }, {
        name: "y",
        type: "linear",
        zero: false,
        range: "height",
        domain: {
          fields: [{
            data: "data",
            field: "max"
          }]
        },
        domainMax: 40,
        domainMin: 25
      }, {
        name: "color",
        type: "ordinal",
        zero: false,
        range: ["#efa600", "#D2E2EC", "#1a6d9e"],
        domain: {
          sort: true,
          fields: [{
            data: "legend",
            field: "cat"
          }]
        },
        points: true
      }],
      legends: [{
        fill: "color",
        offset: 50,
        properties: {
          title: {
            dx: {
              value: 0
            },
            dy: {
              value: -2
            },
            fontSize: {
              value: 12
            }
          },
          labels: {
            fill: {
              value: "#9BA2AA"
            },
            text: {
              template: "{{datum.data}}"
            },
            fontSize: {
              value: 10
            }
          },
          legend: {
            x: {
              mult: 0.05,
              field: {
                group: "width"
              },
              offset: 0
            },
            y: {
              mult: 0.05,
              field: {
                group: "height"
              },
              offset: -10
            }
          },
          symbols: {
            size: {
              value: 30
            },
            shape: {
              value: "square"
            },
            strokeOpacity: {
              value: 0
            }
          }
        }
      }],
      padding: {
        top: 30,
        left: 35,
        right: 5,
        bottom: 40
      },
      signals: [{
        init: {
          xval: 0,
          yval: 0
        },
        name: "indexDate",
        streams: [{
          expr: "{xLeft: +iscale('x', eventX() + 10), xRight: +iscale('x', eventX() - 130), date: +iscale('x', eventX()), yval: iscale('y', eventY())}",
          type: "mousemove"
        }]
      }]
    },

    didRender: function didRender() {
      this.$chart = this.$('.chart2');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = data.rows;
        this.initChart();
      }).bind(this));
    },

    fetchData: function fetchData() {
      return $.get('http://api.resourcewatch.org/query/3feaf26c-42c8-43ce-b1b5-07a02a773c36?sql=select * from index_3feaf26c42c843ceb1b507a02a773c36');
    },

    update: function update() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
        this.initChart();
      }
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0] && this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[1] }).update();
      });
    }

  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-1/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-1/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Our Climate is getting Warmer and More Variable");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Our Climate is getting Warmer and More Variable");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Yearly rain and yearly summer air temperature for Sonoma County, showing actual data before 2010 and projected data from multiple models after 2010. The model closest to the mid-range of all the models, used throughout this dashboard, is highlighted in black. Dotted lines show 10th and 90th percentiles.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart chart2");
        dom.setAttribute(el6, "id", "chart2-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Our Climate is getting Warmer and More Variable");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart chart2");
        dom.setAttribute(el6, "id", "chart2-2");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Our Climate is getting Warmer and More Variable");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Scientists can estimate the range of future climate change outcomes using computer models.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("18 future projections were evaluated and all suggest that Sonoma County climate is getting warmer and more variable.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("This dashboard presents results from just one climate-hydrology projection for illustration.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Chart: Yearly rain and yearly summer air temperature for Sonoma County, showing actual data before 2010 and projected data from multiple models after 2010. The model closest to the mid-range of all the models, used throughout this dashboard, is highlighted in black. Dotted lines show 10th and 90th percentiles.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-10/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-10/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 97,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-10/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-11-1");
        dom.setAttribute(el1, "data-title", "Rainfall in the Region Falls Mostly as Extreme Events");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Rainfall in the Region Falls Mostly as Extreme Events");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Almost half of the region’s rain comes from ocean events known as ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("Atmospheric Rivers");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(".\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("Atmospheric rivers can carry 10 times the amount of water flowing out the mouth of the Mississippi River, and can cause extreme rain, snow, and flood risks.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "c-image -column");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-11/atmospheric-river.gif");
        dom.setAttribute(el6, "class", "c-image");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Atmospheric Rivers are “Drought Busters”");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "c-images -column");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-11/lake.jpg");
        dom.setAttribute(el6, "class", "c-image");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-11/lake-dry.jpg");
        dom.setAttribute(el6, "class", "c-image");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Atmospheric Rivers are “Drought Busters”");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Atmospheric Rivers comprise the top 5% of all annual rainfall responsible for filling Sonoma County reservoirs, often called “Drought Busters.”\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Atmospheric Rivers Fill the Region’s Reservoirs");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Atmospheric Rivers Fill the Region’s Reservoirs");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          A series of events filled Lake Mendocino in early 2016 from far below normal to above normal in 3 months.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "c-image -column");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-11/Mendolakechart.png");
        dom.setAttribute(el6, "class", "c-image");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Learning more about Atmospheric Rivers (ARs)");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "c-image -column");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/sonoma/sonoma-11/russian.png");
        dom.setAttribute(el6, "class", "c-image");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Learning more about Atmospheric Rivers (ARs)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          The Sonoma County Water Agency, the Scripps Institute of Oceanography’s ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://woodland.ucsd.edu/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Center for Western Weather and Water Extremes");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(", and NOAA have installed new monitoring systems to improve AR forecasts. The program allows scientists to understand how ARs can help provide a more secure water supply.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode("Legend:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "style", "color: #bb8f8f");
        var el7 = dom.createTextNode(" Brown bars, annual precipitation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "style", "color: black");
        var el7 = dom.createTextNode(" Black line, 5-year running average of annual precipitation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "style", "color: #1ffe3d");
        var el7 = dom.createTextNode(" Green line, bottom 90% of wet days");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "style", "color: red");
        var el7 = dom.createTextNode(" Red line, top 10% of wet days");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Image: The top 10% of wet days reflects the patterns in\n          the total annual precipitation. Big storms like ARs\n          explain 81% of the variance in total precipitation,\n          which illustrates their importance in the Sonoma\n          County region.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-11/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-11/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 50,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-11/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "More Frequent and Severe Droughts");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("More Frequent and Severe Droughts");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Climate projections indicate that droughts in the region will become more frequent and more severe.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Droughts are caused by low rainfall, but their impact is made more severe by high temperatures. Landscapes take longer to recover from these extended droughts.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Photo Credit: ©Pepperwood 2016\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-12/drought2.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Effects of Severe Drought");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-12/fish.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Effects of Severe Drought");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Water supply emergencies, depleted reservoirs and groundwater aquifers, resulting in mandatory water use restrictions.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Forest stress, die off, pest infestations, and risk of catastrophic fire.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Crop failure and low crop yields.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Higher prices of food and water.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Loss of water and forage for livestock.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Deaths of fish, amphibians, and other species that rely on streams and wetlands.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-12/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-12/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 52,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-12/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "What is Climatic Water Deficit");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("What is Climatic Water Deficit");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sonoma County’s climate features a dry season from April through November.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Climate models project shorter winters and longer summers with soils that are more drought-stressed by the end of the dry season.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Climatic Water Deficit is a metric that quantifies plants’ need for water from the soil.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-13/waterbalancediagram.png");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Climatic Water Deficit and Landscape Stress");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-13/CWDpic.png");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Climatic Water Deficit and Landscape Stress");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Climatic Water Deficit indicates:\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Landscape and plant drought stress");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Environment’s need for water to irrigate crops");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Where plants can grow");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Potential wildfire risks");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Image: As winter water supply stops in the late spring and warmer air increases evapotranspiration, plants use the available water in the soil.  As soil water declines, a deficit accumulates until rain comes again in the fall. Irrigation may reverse the deficit.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-13/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-13/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-13/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Different Kinds of Drought");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Different Kinds of Drought");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          “Water supply” droughts:\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Impact river and stream flows, reservoirs and wells");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Are measured by recharge and runoff");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          “Landscape” droughts:\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Impact soils and vegetation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Are measured by climatic water deficit");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Climatic Water Deficit is a metric that quantifies plants’ need for water from the soil.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Figure footnote: An acute ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("water supply drought");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" in 1976 and 1977 had rain far below normal, and moderate climatic water deficit. An extended ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("strong");
        var el7 = dom.createTextNode("landscape drought");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" began in 2012 with rain about 75% of normal, and hotter temperatures.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 wrapper");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "c-images -mid-height -center");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "src", "img/sonoma/sonoma-14/water-deficit.png");
        dom.setAttribute(el8, "class", "c-image -medium");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "src", "img/sonoma/sonoma-14/water-deficit1.png");
        dom.setAttribute(el8, "class", "c-image -medium");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-md-12 wrapper flex -justify-center");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/sonoma/sonoma-14/water-deficit2.png");
        dom.setAttribute(el7, "class", "c-image -medium -mid-height");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-14/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-14/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-14/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Next Century Projection of Landscape Drough");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Next Century Projection of Landscape Drough");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Despite the great variability in rainfall projections for the region, all future scenarios project larger, increasing climatic water deficits, equivalent to 3-6 inches of additional rainfall or irrigation that today’s plants would need to survive!\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode("Image: ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode(">28 in/year (yellow)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        var el7 = dom.createTextNode(">32 in/year (red)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-15/cwd.png");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-15/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    cartodbtable: 'o_1_tmx1951_1980_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(143.152,#00009C) stop(153.226,#0046FF) stop(163.3,#00FFFF) stop(173.375,#0CFFCD) stop(183.449,#68FF8A) stop(193.523,#FEFF00) stop(203.597,#FF8F00) stop(213.672,#FF0000) stop(223.746,#800000) }',

    vegaSpec: {
      axes: [{
        name: "lbl",
        type: "x",
        scale: "x",
        properties: {
          axis: {
            stroke: {
              value: "#3B4F63"
            },
            opacity: {
              value: 0.5
            },
            strokeWidth: {
              value: 0
            }
          },
          ticks: {
            stroke: {
              value: "#3B4F63"
            },
            opacity: {
              value: 0.3
            },
            strokeWidth: {
              value: 1
            }
          },
          labels: {
            dy: {
              value: 5
            },
            fill: {
              value: "#3B4F63"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            text: {
              value: ""
            },
            angle: {
              value: -30
            },
            opacity: {
              value: 0.5
            },
            fontSize: {
              value: 10
            },
            fontWeight: {
              value: 300
            }
          }
        }
      }, {
        grid: true,
        type: "y",
        layer: "back",
        scale: "y",
        ticks: 7,
        format: "f",
        properties: {
          axis: {
            stroke: {
              value: "#333"
            },
            strokeWidth: {
              value: 0
            }
          },
          grid: {
            stroke: {
              value: "#000"
            },
            strokeWidth: {
              value: 1
            },
            strokeOpacity: {
              value: 0.1
            }
          },
          ticks: {
            stroke: {
              value: "steelblue"
            }
          },
          labels: {
            fill: {
              value: "#3B4F63"
            },
            opacity: {
              value: 0.5
            },
            fontSize: {
              value: 10
            },
            fontWeight: {
              value: 300
            }
          },
          majorTicks: {
            strokeWidth: {
              value: 0
            }
          }
        }
      }],
      data: [{
        url: "http://api.resourcewatch.org/query/d172917b-3e34-4ed0-a55a-05eaf1abab53?sql=select%20y::int,%20x::int%20,position::int%20from%20table",
        name: "bars",
        format: {
          type: "json",
          property: "data"
        },
        transform: [{
          expr: "(2001 + datum.x * 5) + '-' + (2005 + datum.x * 5)",
          type: "formula",
          field: "label"
        }]
      }, {
        name: "axis",
        values: [{
          x: "Year",
          y: "Number of events"
        }]
      }, {
        name: "legend-1",
        values: [{
          name: "Lower flow",
          color: "#1a3e62"
        }]
      }, {
        name: "legend-2",
        values: [{
          name: "Upper flow",
          color: "#ffc94e"
        }]
      }],
      marks: [{
        type: "rect",
        properties: {
          enter: {
            x: {
              scale: "x",
              value: "0"
            },
            y: {
              value: 0
            },
            x2: {
              scale: "x",
              value: "2"
            },
            fill: {
              value: "#001421"
            },
            height: {
              field: {
                group: "height"
              }
            },
            opacity: {
              value: 0.08
            }
          }
        }
      }, {
        from: {
          data: "bars",
          transform: [{
            type: "facet",
            groupby: ["x"]
          }]
        },
        type: "group",
        marks: [{
          name: "bars",
          type: "rect",
          properties: {
            enter: {
              x: {
                field: "position",
                scale: "pos"
              },
              y: {
                field: "y",
                scale: "y"
              },
              y2: {
                scale: "y",
                value: 0
              },
              fill: {
                field: "position",
                scale: "color"
              },
              width: {
                band: true,
                scale: "pos"
              }
            }
          }
        }, {
          from: {
            transform: [{
              test: "datum.x % 2 == 0 && datum.position == 0",
              type: "filter"
            }]
          },
          type: "text",
          properties: {
            enter: {
              x: {
                field: "position",
                scale: "pos"
              },
              y: {
                scale: "y",
                value: 0
              },
              dx: {
                value: -42
              },
              dy: {
                value: 20
              },
              fill: {
                value: "#3B4F63"
              },
              font: {
                value: "Montserrat, sans-serif"
              },
              text: {
                template: "{{datum.label}}"
              },
              angle: {
                value: -30
              },
              opacity: {
                value: 0.5
              },
              fontSize: {
                value: 10
              },
              fontWeight: {
                value: 300
              }
            }
          }
        }],
        scales: [{
          name: "pos",
          type: "ordinal",
          range: "width",
          domain: {
            field: "position"
          }
        }],
        properties: {
          enter: {
            x: {
              field: "key",
              scale: "x"
            },
            width: {
              band: true,
              scale: "x"
            }
          }
        }
      }, {
        from: {
          data: "axis"
        },
        type: "text",
        properties: {
          enter: {
            x: 0,
            y: 0,
            dx: {
              value: -25
            },
            dy: {
              value: -20
            },
            fill: {
              value: "#3B4F63"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            text: {
              template: "{{datum.y | upper}}"
            },
            align: {
              value: "left"
            },
            opacity: {
              value: 0.5
            },
            fontSize: {
              value: 10
            },
            fontWeight: {
              value: 700
            }
          }
        }
      }, {
        from: {
          data: "legend-1"
        },
        type: "rect",
        properties: {
          enter: {
            x: {
              value: -25
            },
            y: {
              mult: 1,
              field: {
                group: "height"
              },
              offset: 58
            },
            y2: {
              mult: 1,
              field: {
                group: "height"
              },
              offset: 55
            },
            fill: {
              field: "color"
            },
            width: {
              value: 9
            }
          }
        }
      }, {
        from: {
          data: "legend-1"
        },
        type: "text",
        properties: {
          enter: {
            x: 0,
            y: {
              mult: 1,
              field: {
                group: "height"
              }
            },
            dx: {
              value: -9
            },
            dy: {
              value: 60
            },
            fill: {
              value: "#3b4f63"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            text: {
              template: "{{datum.name | upper}}"
            },
            align: {
              value: "left"
            },
            opacity: {
              value: 0.7
            },
            fontSize: {
              value: 10
            },
            fontWeight: {
              value: 700
            }
          }
        }
      }, {
        from: {
          data: "legend-2"
        },
        type: "rect",
        properties: {
          enter: {
            x: {
              value: 100
            },
            y: {
              mult: 1,
              field: {
                group: "height"
              },
              offset: 55
            },
            y2: {
              mult: 1,
              field: {
                group: "height"
              },
              offset: 58
            },
            fill: {
              field: "color"
            },
            width: {
              value: 9
            }
          }
        }
      }, {
        from: {
          data: "legend-2"
        },
        type: "text",
        properties: {
          enter: {
            x: 0,
            y: {
              mult: 1,
              field: {
                group: "height"
              }
            },
            dx: {
              value: 115
            },
            dy: {
              value: 60
            },
            fill: {
              value: "#3b4f63"
            },
            font: {
              value: "Montserrat, sans-serif"
            },
            text: {
              template: "{{datum.name | upper}}"
            },
            align: {
              value: "left"
            },
            opacity: {
              value: 0.7
            },
            fontSize: {
              value: 10
            },
            fontWeight: {
              value: 700
            }
          }
        }
      }],
      scales: [{
        name: "x",
        type: "ordinal",
        range: "width",
        domain: {
          fields: [{
            data: "bars",
            field: "x"
          }]
        },
        padding: 0.2
      }, {
        name: "y",
        nice: true,
        type: "linear",
        range: "height",
        domain: {
          fields: [{
            data: "bars",
            field: "y"
          }]
        }
      }, {
        name: "color",
        type: "ordinal",
        range: ["#1a3e62", "#ffc94e"],
        domain: {
          data: "bars",
          field: "position"
        }
      }],
      padding: {
        top: 30,
        left: 40,
        right: 20,
        bottom: 65
      }
    },

    didRender: function didRender() {
      this.$chart = this.$('.chart16-1');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = data.rows;
        this.initChart();
      }).bind(this));
    },

    fetchData: function fetchData() {
      return $.get('http://api.resourcewatch.org/query/d172917b-3e34-4ed0-a55a-05eaf1abab53?sql=select * from table');
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
    }

  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-15/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-15/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Effect of Climate Change on Water Supply");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Effect of Climate Change on Water Supply");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Watershed models suggest that ground-water recharge, which refills aquifers, is a much more reliable source of water for the region than surface-water runoff which fills reservoirs. Groundwater aquifers are a much larger water supply than reservoirs, but reliable only when effectively managed.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart chart16-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-16/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-16/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-16/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Sea Level Rise");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Sea Level Rise");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          The tides of the ocean and bay bordering the region are projected to rise in response to increasing global temperatures.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sea level rise is ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://data.pointblue.org/apps/ocof/cms/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("anticipated");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" to exceed 5 feet by the end of the century, resulting in more frequent flooding in communities like Jenner and Petaluma.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/road.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-17/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-17/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 58,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-17/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Sonoma County Climate Resilience Team");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-12 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Sonoma County Climate Resilience Team");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("\n          The Sonoma County Climate Resilience Dashboard is product of the Sonoma County Climate Resilience Team:\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Contacts:\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sonoma County Water Agency");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "Jay.Jasperse@scwa.ca.gov");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Jay Jasperse");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          Chief Engineer and Director of Groundwater Management\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sonoma County Regional Climate Protection Authority");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "lauren.casey@rcpa.ca.gov");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Lauren Casey");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          Director of Climate Programs\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Pepperwood Foundation");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "lmicheli@pepperwoodpreserve.org");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Lisa Micheli");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          President and CEO\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Sonoma Ecology Center, for the North Bay Climate Adaptation Initiative");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "caitlin@sonomaecologycenter.org");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Caitlin Cornwall");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          Research Program Manager\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          U.S. Geology Survey");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "lflint@usgs.gov");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Lorraine Flint");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          Research Hydrologist\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Earth Knowledge");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "julia@earthknowledge.net");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Julia Armstrong D’Agnese");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("br");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          Chief Executive Officer\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-2/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    cartodbtable: 'o_1_tmx1951_1980_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(143.152,#00009C) stop(153.226,#0046FF) stop(163.3,#00FFFF) stop(173.375,#0CFFCD) stop(183.449,#68FF8A) stop(193.523,#FEFF00) stop(203.597,#FF8F00) stop(213.672,#FF0000) stop(223.746,#800000) }',

    vegaSpec: {
      "padding": { "top": 40, "left": 40, "bottom": 50, "right": 20 },
      "signals": [{
        "name": "currentYear",
        "init": "0",
        "streams": [{
          "type": "mousemove",
          "expr": "utcyear(iscale('x', eventX()))"
        }]
      }, {
        "name": "tooltip",
        "init": { "x": 0, "y": 0 },
        "streams": [{
          "type": "mousemove",
          "expr": "{xLeft: +iscale('x', eventX()), xRight: +iscale('x', eventX() - 150)}"
        }]
      }],
      "data": [{
        "name": "line",
        "values": [],
        "format": { "parse": { "x": "date" } }
      }, {
        "name": "axis",
        "values": [{ "x": "Year", "y": "Precipitation in inches" }]
      }, {
        "name": "tooltip",
        "source": "line",
        "transform": [{
          "type": "filter",
          "test": "datum.x == utc(currentYear, 0, 1)"
        }, {
          "type": "formula",
          "field": "xTooltip",
          "expr": "datum.x > utc(2040, 0, 1) ? tooltip.xRight : tooltip.xLeft"
        }, {
          "type": "formula",
          "field": "xData",
          "expr": "tooltip.xLeft"
        }]
      }],
      "scales": [{
        "name": "x",
        "type": "time",
        "range": "width",
        "domain": { "data": "line", "field": "x" }
      }, {
        "name": "y",
        "type": "linear",
        "range": "height",
        "domain": { "data": "line", "field": "y" },
        "nice": true
      }],
      "axes": [{
        "name": "lbl",
        "type": "x",
        "scale": "x",
        "values": [-1577923200000, -946771200000, -315619200000, 315532800000, 946684800000, 1577836800000, 2208988800000, 2840140800000, 3471292800000],
        "formatType": "utc",
        "format": "%Y",
        "properties": {
          "ticks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "strokeWidth": { "value": 0 }
          },
          "labels": {
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "dy": { "value": 5 }
          }
        }
      }, {
        "type": "y",
        "ticks": 7,
        "scale": "y",
        "grid": true,
        "layer": "back",
        "format": "f",
        "properties": {
          "ticks": { "stroke": { "value": "steelblue" } },
          "majorTicks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#333" },
            "strokeWidth": { "value": 0 }
          },
          "grid": {
            "stroke": { "value": "#000" },
            "strokeOpacity": { "value": 0.1 },
            "strokeWidth": { "value": 1 }
          },
          "labels": {
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }],
      "marks": [{
        "type": "area",
        "from": { "data": "area" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "y2": { "scale": "y", "value": "0" },
            "fill": { "value": "#000" },
            "opacity": { "value": 0.07 }
          }
        }
      }, {
        "type": "line",
        "from": { "data": "line" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "stroke": { "value": "#fff" },
            "strokeWidth": { "value": 3 }
          }
        }
      }, {
        "type": "text",
        "from": { "data": "axis" },
        "properties": {
          "enter": {
            "x": 0,
            "y": 0,
            "text": { "template": "{{datum.y | upper}}" },
            "dx": { "value": -40 },
            "dy": { "value": -20 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 56.4 },
            "stroke": { "value": "#263e57" },
            "strokeWidth": { "value": 1.5 }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 27.1 },
            "stroke": { "value": "#3B4F63" },
            "strokeWidth": { "value": 1.5 },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "group",
        "from": { "data": "tooltip" },
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xTooltip" },
            "y": { "scale": "y", "field": "y", "offset": -55 },
            "width": { "value": 150 },
            "height": { "value": 45 },
            "fill": { "value": "#fff" },
            "fillOpacity": { "value": 0.85 }
          }
        },

        "marks": [{
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 10 },
              "y": { "value": 17 },
              "text": { "template": "{{currentYear}}" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 },
              "fontWeight": { "value": "bold" }
            }
          }
        }, {
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 11 },
              "y": { "value": 35 },
              "text": { "template": "{{parent.y|number:'.2f'}} in" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 }
            }
          }
        }]
      }, {
        "type": "symbol",
        "from": { "data": "tooltip" },
        "size": 4,
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xData" },
            "y": { "scale": "y", "field": "y" },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 12 },
            "fill": { "value": "#fff" },
            "stroke": { "value": "#ffc94e" },
            "strokeWidth": { "value": 2 }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": { "value": -25 },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "10TH PERCENTILE (27.1 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5,
              "offset": -25
            },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#263e57" }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5
            },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "90TH PERCENTILE (56.4 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }]
    },

    didRender: function didRender() {
      this.$chart = this.$('.chart3-1');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = data.rows;
        this.initChart();
      }).bind(this));
    },

    fetchData: function fetchData() {
      return $.get('https://prep-admin.cartodb.com/api/v2/sql?q=SELECT year AS x, precipitation_in_yr AS y FROM "prep-admin". precipitation_pcm_a2 union all select year AS x, precipitation_in_yr AS y FROM precipitation1920_2009 order by x asc');
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[1] }).update();
      });
    }

  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-2/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-2/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "How are Climate Projections Developed?");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("How are Climate Projections Developed?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          By integrating global climate data with local watershed models, scientists from the US Geological Survey have projected ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://ca.water.usgs.gov/projects/reg_hydro/projects/dataset.html");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("potential climate vulnerabilities");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" for the Sonoma County region.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Chart: ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://climate.calcommons.org/crnb/home");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Climate projections in this dashboard");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" are produced by the ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://ca.water.usgs.gov/projects/reg_hydro/projects/dataset.html");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("USGS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" and ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://www.pepperwoodpreserve.org/tbc3/");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("TBC3.org");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" in collaboration with ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://climate.calcommons.org/crnb/home");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("Climate Ready North Bay");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(", a public-private partnership funded by the California Coastal Conservancy’s Climate Ready program.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart chart3-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Interpreting Climate Projections");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart chart3-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Interpreting Climate Projections");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Climate projections are summarized using 30-year averages to describe the direction and size of potential climate trends. Downscaled climate projections can be displayed at annual intervals shown on the right. These are not predictions of when these conditions will occur, but simulations of the potential variability underlying ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://climate.calcommons.org/article/why-so-many-climate-models");
        dom.setAttribute(el6, "targe", "_blank");
        var el7 = dom.createTextNode("climate data ensembles");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(".\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-3/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-3/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 72,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-3/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Extreme Weather in the Sonoma Region");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Extreme Weather in the Sonoma Region");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          The region has historically experienced severe storms, floods, droughts, heat waves, and fires, but the severity and frequency of these events and related impacts are increasing.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Understanding how these hazards are changing and making informed decisions about them will keep our communities vibrant and resilient.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-4/Guerneville.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Preparing for Climate Variability");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-4/drought.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Preparing for Climate Variability");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Unprecedented heat is projected in all seasons: all sectors of our economy will be impacted.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Rainfall is likely to be more variable, producing both low and high extremes. Runoff will become more flashy, and dry soil conditions will be persistent.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Photo Credit: ©Pepperwood 2016\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "What to Expect");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("What to Expect");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Water demand for agriculture may increase 10%.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Wildfires may increase 20%.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Forests will change, shifting to more drought-tolerant species.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Suitability for agricultural crops may shift locations.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Photo Credit: ©Pepperwood 2016\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-4/fire.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-4/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-4/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-4/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Necessary Investments for Resilience and Preparedness");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Necessary Investments for Resilience and Preparedness");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Increased climate variability will equireray more planning and investment in the following sectors:\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Infrastructure");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Agriculture");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Water Management");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Health and Emergency Services");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Wildfire and Wildland Management");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-5/road2.jpeg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-5/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    cartodbtable: 'o_1_tmn1951_1980djf_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(250,#800000) }',

    didRender: function didRender() {
      this.slideMapEl = this.$('#map3-1');
      this.setListeners();
    },

    setListeners: function setListeners() {
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-3-1')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map3-1', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        // commented because of this raster is bigger and doesnt fit well
        // if (this.bounds){
        //   this.fitBounds();
        // } else {
        //   this.setBounds().done(function(data){
        //     let coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
        //     let southWest = L.latLng(coordinates[0][1],coordinates[0][0]),
        //     northEast = L.latLng(coordinates[2][1],coordinates[2][0]);
        //     this.bounds = L.latLngBounds(southWest, northEast);
        //     this.fitBounds();
        //   }.bind(this));
        // }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      // this.slideMap.setMaxBounds(this.bounds);
      // this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + ' ' + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider3-1');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this.index = index;
        _this.updateLayer(index);
        _this.addRaster();

        /* We update the slider */
        _this.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_tmn1951_1980djf_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_tmn1981_2010djf_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_tmn2010_2039djf_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_tmn2040_2069djf_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_tmn2070_2099djf_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_tmn1951_1980djf_ave_hst';
      }
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }

  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-5/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-5/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-3-1");
        dom.setAttribute(el1, "data-title", "Warmer Winter Nights");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Warmer Winter Nights");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          This sequence of maps shows where winter night-time temperatures, on average, are expected to exceed 39°F (yellow) and 43°F (red).\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper map-card");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "map3-1");
        dom.setAttribute(el5, "class", "map slide-map-3-1");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "map-legend");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "range years");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "-selected");
        var el8 = dom.createTextNode("1951-1980");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("1981-2010");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2011-2039");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2040-2069");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2070-2099");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "timelineSlider3-1");
        dom.setAttribute(el6, "class", "slide");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Explanation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "legend");
        var el7 = dom.createTextNode(" Areas showing where 30-yr average minimum monthly winter temperature exceeds average minimum monthly winter temperature between 1981 and 2010 (>39.7 °F) ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-6/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-6/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-6/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Effects of Warmer Winter Nights");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Effects of Warmer Winter Nights");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Warmer nights can result in:\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Less insect die-off, leading to forest outbreaks, or agricultural infestations.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Fewer chilling hours for fruit trees, reducing fruit yield.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("A mismatch in the timing of pollinators and plant growth.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          Photo Credit: ©Pepperwood 2016\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-7/flower.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-7/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'section',

    cartodbtable: 'o_1_tmx1951_1980jja_ave_hst',
    cartocss: '{raster-opacity:1; raster-colorizer-default-mode: linear; raster-colorizer-default-color: transparent; raster-colorizer-epsilon: 0.01; raster-colorizer-stops: stop(250,#800000) }',

    didRender: function didRender() {
      this.slideMapEl = this.$('#map8-1');
      this.setListeners();
    },

    setListeners: function setListeners() {
      Reveal.addEventListener('slidechanged', (function (event) {
        if (event.currentSlide.classList.contains('slide-map-8-1')) {
          this.initMap();
          this.initLegend();
        } else if (this.slideMap) {
          this.removeMap();
        }
      }).bind(this));
    },

    initMap: function initMap() {
      this.slideMapEl.addClass('-loading');
      var mapOptions = {
        zoomControl: false,
        scrollWheelZoom: false,
        center: [38.280957, -122.457728],
        zoom: 7,
        basemapSpec: {
          url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
          options: {
            maxZoom: 18
          }
        }
      };

      if (!this.slideMap) {
        this.slideMap = L.map('map8-1', mapOptions);
        L.tileLayer(mapOptions.basemapSpec.url, mapOptions.basemapSpec.options).addTo(this.slideMap);
        L.control.zoom({ position: 'topright' }).addTo(this.slideMap);
        this.addRaster();
        this.addLabels();
        if (this.bounds) {
          this.fitBounds();
        } else {
          this.setBounds().done((function (data) {
            var coordinates = JSON.parse(data.rows[0].bbox).coordinates[0];
            var southWest = L.latLng(coordinates[0][1], coordinates[0][0]),
                northEast = L.latLng(coordinates[2][1], coordinates[2][0]);
            this.bounds = L.latLngBounds(southWest, northEast);
            this.fitBounds();
          }).bind(this));
        }
      }
    },

    fitBounds: function fitBounds() {
      this.slideMap.fitBounds(this.bounds);
      // this.slideMap.setMaxBounds(this.bounds);
      // this.slideMap.options.minZoom = this.slideMap.getZoom();
    },

    setBounds: function setBounds() {
      var query = 'SELECT ST_AsGeoJSON(ST_Envelope(ST_Union(ST_Transform(ST_Envelope(the_raster_webmercator), 4326)))) as bbox FROM ' + this.cartodbtable + ' as t';
      return $.get('https://prep-admin.cartodb.com/api/v2/sql/?q=' + query);
    },

    addLabels: function addLabels() {
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'SELECT * FROM \"prep-admin\".rrcounties',
            'cartocss': '#rrcounties{polygon-fill:transparent;line-color: #cccac9;line-width: 1;line-opacity: 0.8;} #ci08au12::labels {text-name: [name];text-face-name: \'Lato Regular\';text-size: 10;text-label-position-tolerance: 10;text-fill: #a3a1a0;text-halo-fill: #FFF;text-halo-radius: 0.2;text-dy: -10;text-allow-overlap: false;text-placement: point;text-placement-type: simple;}',
            'cartocss_version': '2.3.0'
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            var labelsLayer = L.tileLayer(tileUrl).setZIndex(3).addTo(this.slideMap, 1);

            labelsLayer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    addRaster: function addRaster() {
      this.slideMapEl.addClass('-loading');
      var request = {
        layers: [{
          'user_name': 'prep-admin',
          'type': 'cartodb',
          'options': {
            'sql': 'with xr as (SELECT the_geom_webmercator FROM \"prep-admin\".cb_2015_06_tract_500k_copy) select ST_clip(the_raster_webmercator,1,the_geom_webmercator, 1) the_raster_webmercator from \"prep-admin\".' + this.cartodbtable + ', xr  where st_intersects(the_geom_webmercator, the_raster_webmercator)',
            'cartocss': '#' + this.cartodbtable + this.cartocss,
            'cartocss_version': '2.3.0',
            'geom_column': 'the_raster_webmercator',
            'geom_type': 'raster',
            'raster_band': 1
          }
        }]
      };

      $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=UTF-8',
        url: 'https://prep-admin.cartodb.com/api/v1/map/',
        data: JSON.stringify(request),
        success: (function (data) {
          var tileUrl = 'https://prep-admin.cartodb.com/api/v1/map/' + data.layergroupid + '/{z}/{x}/{y}.png';
          if (this.slideMap) {
            if (this.layer) {
              this.slideMap.removeLayer(this.layer);
              this.layer = null;
            }
            this.layer = L.tileLayer(tileUrl).addTo(this.slideMap, 1);
            this.layer.on('load', (function () {
              if (this.slideMapEl) {
                this.slideMapEl.removeClass('-loading');
              }
            }).bind(this));
          }
        }).bind(this)
      });
    },

    initLegend: function initLegend() {
      var _this = this;

      if (this.slider) return this.updateLayer(this.index);

      var steps = this.$('.years span');

      /* We create the slider instance */
      this.slider = document.getElementById('timelineSlider8-1');
      noUiSlider.create(this.slider, {
        start: [0],
        step: 1,
        range: {
          'min': [0],
          'max': [steps.length - 1]
        }
      });

      var switchLayer = function switchLayer(index) {
        /* We update the map */
        _this.index = index;
        _this.updateLayer(index);
        _this.addRaster();

        /* We update the slider */
        _this.slider.noUiSlider.set([index]);
        steps.removeClass('-selected');
        steps[index].classList.add('-selected');
      };

      /* Event listener for the click on the labels */
      steps.on('click', function (e) {
        return switchLayer($(e.currentTarget).index());
      });

      /* Event listener for when the cursor is dragged */
      this.slider.noUiSlider.on('change', function (index) {
        return switchLayer(+index);
      });
    },

    updateLayer: function updateLayer(index) {
      switch (index) {
        case 0:
          this.cartodbtable = 'o_1_tmx1951_1980jja_ave_hst';
          break;
        case 1:
          this.cartodbtable = 'o_1_tmx1981_2010jja_ave_hst';
          break;
        case 2:
          this.cartodbtable = 'o_1_tmx2010_2039jja_ave_ccsm4';
          break;
        case 3:
          this.cartodbtable = 'o_1_tmx2040_2069jja_ave_ccsm4';
          break;
        case 4:
          this.cartodbtable = 'o_1_tmx2070_2099jja_ave_ccsm4';
          break;
        default:
          this.cartodbtable = 'o_1_tmx1951_1980jja_ave_hst';
      }
      this.addRaster();
    },

    removeMap: function removeMap() {
      this.slideMap.remove();
      this.slideMap = null;
    }

  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-7/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-7/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide slide-map-8-1");
        dom.setAttribute(el1, "data-title", "More Very Hot Days");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("More Very Hot Days");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          This sequence of maps shows where summer temperatures, on average, are expected to exceed 85°F (yellow) and 90°F (red).\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Increases of this magnitude can result in up to six times more high heat days compared to today.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper map-card");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "id", "map8-1");
        dom.setAttribute(el5, "class", "map slide-map-8-1");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "map-legend");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "range years");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "-selected");
        var el8 = dom.createTextNode("1951-1980");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("1981-2010");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2011-2039");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2040-2069");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        var el8 = dom.createTextNode("2070-2099");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "id", "timelineSlider8-1");
        dom.setAttribute(el6, "class", "slide");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Explanation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "legend");
        var el7 = dom.createTextNode(" Areas showing the 30-yr average maximum monthly summer temperature exceeds the average maximum monthly temperature between 1981 and 2010 (>95 °F) ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-8/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['sonoma-slide'],
    tagName: 'section',
    attributeBindings: ["data-title"],
    "data-title": 'Start'
  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-8/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-8/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Effects of More Very Hot Days");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Effects of More Very Hot Days");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Serious health risks for some people");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("More water needed to maintain landscaping and crops");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("More energy used for cooling and for water production");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createTextNode("Shifts in how farmers grow crops");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-9/agriculture.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/sonoma/sonoma-slide-9/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    tagName: 'section',

    vegaSpec: {
      "padding": { "top": 40, "left": 40, "bottom": 50, "right": 20 },
      "signals": [{
        "name": "currentYear",
        "init": "0",
        "streams": [{
          "type": "mousemove",
          "expr": "utcyear(iscale('x', eventX()))"
        }]
      }, {
        "name": "tooltip",
        "init": { "x": 0, "y": 0 },
        "streams": [{
          "type": "mousemove",
          "expr": "{xLeft: +iscale('x', eventX()), xRight: +iscale('x', eventX() - 150)}"
        }]
      }],
      "data": [{
        "name": "line",
        "values": [],
        "format": { "parse": { "x": "date" } }
      }, {
        "name": "axis",
        "values": [{ "x": "Year", "y": "Precipitation in inches" }]
      }, {
        "name": "tooltip",
        "source": "line",
        "transform": [{
          "type": "filter",
          "test": "datum.x == utc(currentYear, 0, 1)"
        }, {
          "type": "formula",
          "field": "xTooltip",
          "expr": "datum.x > utc(2040, 0, 1) ? tooltip.xRight : tooltip.xLeft"
        }, {
          "type": "formula",
          "field": "xData",
          "expr": "tooltip.xLeft"
        }]
      }],
      "scales": [{
        "name": "x",
        "type": "time",
        "range": "width",
        "domain": { "data": "line", "field": "x" }
      }, {
        "name": "y",
        "type": "linear",
        "range": "height",
        "domain": { "data": "line", "field": "y" },
        "nice": true
      }],
      "axes": [{
        "name": "lbl",
        "type": "x",
        "scale": "x",
        "values": [-1577923200000, -946771200000, -315619200000, 315532800000, 946684800000, 1577836800000, 2208988800000, 2840140800000, 3471292800000],
        "formatType": "utc",
        "format": "%Y",
        "properties": {
          "ticks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "strokeWidth": { "value": 0 }
          },
          "labels": {
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "dy": { "value": 5 }
          }
        }
      }, {
        "type": "y",
        "ticks": 7,
        "scale": "y",
        "grid": true,
        "layer": "back",
        "format": "f",
        "properties": {
          "ticks": { "stroke": { "value": "steelblue" } },
          "majorTicks": { "strokeWidth": { "value": 0 } },
          "axis": {
            "stroke": { "value": "#333" },
            "strokeWidth": { "value": 0 }
          },
          "grid": {
            "stroke": { "value": "#000" },
            "strokeOpacity": { "value": 0.1 },
            "strokeWidth": { "value": 1 }
          },
          "labels": {
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 300 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }],
      "marks": [{
        "type": "area",
        "from": { "data": "area" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "y2": { "scale": "y", "value": "0" },
            "fill": { "value": "#000" },
            "opacity": { "value": 0.07 }
          }
        }
      }, {
        "type": "line",
        "from": { "data": "line" },
        "properties": {
          "enter": {
            "x": { "scale": "x", "field": "x" },
            "y": { "scale": "y", "field": "y" },
            "stroke": { "value": "#fff" },
            "strokeWidth": { "value": 3 }
          }
        }
      }, {
        "type": "text",
        "from": { "data": "axis" },
        "properties": {
          "enter": {
            "x": 0,
            "y": 0,
            "text": { "template": "{{datum.y | upper}}" },
            "dx": { "value": -40 },
            "dy": { "value": -20 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 56.4 },
            "stroke": { "value": "#263e57" },
            "strokeWidth": { "value": 1.5 }
          }
        }
      }, {
        "type": "rule",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "x2": { "field": { "group": "width" } },
            "y": { "scale": "y", "value": 27.1 },
            "stroke": { "value": "#3B4F63" },
            "strokeWidth": { "value": 1.5 },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "group",
        "from": { "data": "tooltip" },
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xTooltip" },
            "y": { "scale": "y", "field": "y", "offset": -55 },
            "width": { "value": 150 },
            "height": { "value": 45 },
            "fill": { "value": "#fff" },
            "fillOpacity": { "value": 0.85 }
          }
        },

        "marks": [{
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 10 },
              "y": { "value": 17 },
              "text": { "template": "{{currentYear}}" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 },
              "fontWeight": { "value": "bold" }
            }
          }
        }, {
          "type": "text",
          "properties": {
            "update": {
              "x": { "value": 11 },
              "y": { "value": 35 },
              "text": { "template": "{{parent.y|number:'.2f'}} in" },
              "font": { "value": "\"Montserrat\", sans-serif" },
              "fontSize": { "value": 11 },
              "fill": { "value": "#3B4F63" },
              "opacity": { "value": 0.8 }
            }
          }
        }]
      }, {
        "type": "symbol",
        "from": { "data": "tooltip" },
        "size": 4,
        "properties": {
          "update": {
            "x": { "scale": "x", "field": "xData" },
            "y": { "scale": "y", "field": "y" },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 12 },
            "fill": { "value": "#fff" },
            "stroke": { "value": "#ffc94e" },
            "strokeWidth": { "value": 2 }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": { "value": -25 },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#3B4F63" },
            "opacity": { "value": 0.5 }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": { "value": 0 },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "10TH PERCENTILE (27.1 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }, {
        "type": "rect",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5,
              "offset": -25
            },
            "y": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 45
            },
            "width": { "value": 9 },
            "y2": {
              "field": { "group": "height" },
              "mult": 1,
              "offset": 48
            },
            "fill": { "value": "#263e57" }
          }
        }
      }, {
        "type": "text",
        "properties": {
          "enter": {
            "x": {
              "field": { "group": "width" },
              "mult": 0.5
            },
            "y": { "field": { "group": "height" }, "mult": 1 },
            "text": { "value": "90TH PERCENTILE (56.4 IN/YR)" },
            "dx": { "value": -9 },
            "dy": { "value": 50 },
            "font": { "value": "\"Montserrat\", sans-serif" },
            "fontSize": { "value": 10 },
            "fontWeight": { "value": 700 },
            "fill": { "value": "#3b4f63" },
            "opacity": { "value": 0.7 },
            "align": { "value": "left" }
          }
        }
      }]
    },

    didRender: function didRender() {
      this.$chart = this.$('#chart10-1');
      this.fetchData().done((function (data) {
        this.vegaSpec.data[0].values = data.rows;
        this.initChart();
      }).bind(this));
      this.setListeners();
    },

    fetchData: function fetchData() {
      return $.get('https://prep-admin.cartodb.com/api/v2/sql?q=SELECT year AS x, precipitation_in_yr AS y FROM "prep-admin". precipitation_pcm_a2 union all select year AS x, precipitation_in_yr AS y FROM precipitation1920_2009 order by x asc');
    },

    setListeners: function setListeners() {
      this.refreshEvent = _.debounce(_.bind(this.update, this), 300);
      $(window).on('resize', this.refreshEvent);
    },

    update: function update() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
        this.initChart();
      }
    },

    getSize: function getSize() {
      var vegaSpec = this.vegaSpec;
      var widthSpace = vegaSpec.padding ? vegaSpec.padding.left + vegaSpec.padding.right : 0;
      var heightSpace = vegaSpec.padding ? vegaSpec.padding.top + vegaSpec.padding.bottom : 0;

      var containerSize = this.$chart[0].getBoundingClientRect();

      return {
        width: containerSize.width - widthSpace,
        height: containerSize.height - heightSpace
      };
    },

    getVegaSpec: function getVegaSpec() {
      var size = this.getSize();
      this.vegaSpec.width = size.width;
      this.vegaSpec.height = size.height;
      return this.vegaSpec;
    },

    initChart: function initChart() {
      var _this = this;

      var vegaSpec = this.getVegaSpec();
      vg.parse.spec(vegaSpec, function (chart) {
        return chart({ el: _this.$chart[0] }).update();
      });
    }

  });
});
efineday("prep-prototype/components/sonoma/sonoma-slide-9/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/components/sonoma/sonoma-slide-9/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Rainfall is projected to become more variable");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Rainfall is Projected to Become More Variable");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "chart-card");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "info-button");
        var el7 = dom.createTextNode("i");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "chart");
        dom.setAttribute(el6, "id", "chart10-1");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "sonoma-slide");
        dom.setAttribute(el1, "data-title", "Rainfall is Projected to Become More Variable");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row flex -align-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "src", "img/sonoma/sonoma-1/road.jpg");
        dom.setAttribute(el5, "class", "c-image");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Rainfall is Projected to Become More Variable");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          Rainfall over the next century is uncertain. Some models estimate the region will see a major increase in rainfall, while others project little change or a reduction.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n          In most projections, there is increasing variability in rainfall from year to year.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
  })());
});
efineday('prep-prototype/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
efineday('prep-prototype/components/toggle-checkbox/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['layer-item'],

    labelText: '',

    didInsertElement: function didInsertElement() {
      var id = this.$(this.element).children()[0].id;
      this.$('#' + id).bootstrapToggle({
        onstyle: 'success',
        style: 'ios',
        size: 'mini',
        on: '',
        off: '',
        height: 10,
        width: 17
      });

      var opts = this.get('layerOptions');

      this.$('#' + id).prop('checked', opts.visible).change();
      this.set('labelText', opts.labelText);

      this.$('#' + id).change(function () {
        var checked = $(this).prop('checked');
        opts.layerObject.setVisibility(checked);
      });
    }
  });
});
efineday("prep-prototype/components/toggle-checkbox/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 123
          }
        },
        "moduleName": "prep-prototype/components/toggle-checkbox/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "checkbox", "data-toggle", "toggle", "data-style", "ios", "data-on", "", "data-off", "", "data-onstyle", "success"], ["loc", [null, [1, 0], [1, 109]]]], ["content", "labelText", ["loc", [null, [1, 110], [1, 123]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/components/tooltip-on-component', ['exports', 'ember-tooltips/components/tooltip-on-component'], function (exports, _emberTooltipsComponentsTooltipOnComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTooltipOnComponent['default'];
    }
  });
});
efineday('prep-prototype/components/tooltip-on-element', ['exports', 'ember-tooltips/components/tooltip-on-element'], function (exports, _emberTooltipsComponentsTooltipOnElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTooltipsComponentsTooltipOnElement['default'];
    }
  });
});
efineday('prep-prototype/contact/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
efineday("prep-prototype/contact/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 25,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/contact/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-8 wrapper");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Contact");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-10 wrapper");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("This website is under development");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Please reach out to ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "mailto://fgassert@wri.org");
        var el7 = dom.createTextNode("Francis");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" or ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "mailto://ana@climatedatasolutions.com");
        var el7 = dom.createTextNode("Ana");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" to learn more.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
efineday('prep-prototype/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
efineday('prep-prototype/dashboards/dashboard/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params, transition) {
      console.log(params, transition);
      // const card_id = transition.state.params['dashboards.dashboard'].dashboard_id;
      // return this.store.query('dashboard', { ids: [card_id].join(',') });
    }
  });
});
efineday("prep-prototype/dashboards/dashboard/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 10
          }
        },
        "moduleName": "prep-prototype/dashboards/dashboard/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\">\n  {{ partial 'partials/dashboard-tabs' }}\n</div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [6, 0], [6, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/dashboards/dashboard/indicators/adapter', ['exports', 'ember-data', 'prep-prototype/config/environment'], function (exports, _emberData, _prepPrototypeConfigEnvironment) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({

    host: _prepPrototypeConfigEnvironment['default'].prepApiHost,

    urlForQuery: function urlForQuery() {
      return this.host + '/dashboards';
    },

    urlForQueryRecord: function urlForQueryRecord() {
      return this.host + '/dashboards';
    }

  });
});
efineday('prep-prototype/dashboards/dashboard/indicators/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      var svc = this.get('session');
      svc.set('headerSubStyle', 'header-dashboards');
      svc.set('headerSectionTitle', 'Dashboards');
      svc.set('dashboardReturnDisplay', 'dashboardReturnDisplayInline');
    },

    model: function model(params, transition) {
      var card_id = transition.state.params['dashboards.dashboard'].dashboard_id;
      return this.store.query('dashboard', { ids: [card_id].join(',') });
      // const m = this.modelFor('dashboards.dashboard');
      // return m;
    }
  });
});
efineday("prep-prototype/dashboards/dashboard/indicators/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 45
          }
        },
        "moduleName": "prep-prototype/dashboards/dashboard/indicators/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "grid-layout", [], ["cards", ["subexpr", "@mut", [["get", "session.indicatorCards", ["loc", [null, [1, 20], [1, 42]]]]], [], []]], ["loc", [null, [1, 0], [1, 45]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday("prep-prototype/dashboards/dashboard/indicators/loading/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 12
          }
        },
        "moduleName": "prep-prototype/dashboards/dashboard/indicators/loading/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("loading ....");
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
  })());
});
efineday('prep-prototype/dashboards/dashboard/insights/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      var svc = this.get('session');
      svc.set('headerSubStyle', 'header-dashboards');
    }
  });
});
efineday("prep-prototype/dashboards/dashboard/insights/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/dashboard/insights/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("[ Insights go here ]\n");
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
  })());
});
efineday("prep-prototype/dashboards/dashboard/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 6
          }
        },
        "moduleName": "prep-prototype/dashboards/dashboard/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container pad-top-20");
        var el2 = dom.createTextNode(" \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row dashboard-views-container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  \n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["partials/dashboard-tabs"], [], ["loc", [null, [4, 6], [4, 45]]]], ["content", "outlet", ["loc", [null, [10, 6], [10, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/dashboards/dashboard/tools/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      var svc = this.get('session');
      svc.set('headerSubStyle', 'header-dashboards');
    }
  });
});
efineday("prep-prototype/dashboards/dashboard/tools/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 17
          }
        },
        "moduleName": "prep-prototype/dashboards/dashboard/tools/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("[ Tools go here ]");
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
  })());
});
efineday('prep-prototype/dashboards/index/route', ['exports', 'ember', 'npm:js-cookie'], function (exports, _ember, _npmJsCookie) {
  exports['default'] = _ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    },
    actions: {
      loadDashboard: function loadDashboard(dashboard_id) {
        this.transitionTo('dashboards.washington.indicators');
      },
      loadSonoma: function loadSonoma() {
        this.transitionTo('dashboards.sonoma');
      }
    }
  });
});
efineday("prep-prototype/dashboards/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 101,
              "column": 10
            },
            "end": {
              "line": 115,
              "column": 10
            }
          },
          "moduleName": "prep-prototype/dashboards/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pre-footer");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "header");
          var el4 = dom.createTextNode("Datasets");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "desc");
          var el4 = dom.createTextNode("Explore the entire set of data contributed by our community");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "explore");
          var el4 = dom.createTextNode("EXPLORE THE MAP");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 151,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboards");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "text-center title");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Dashboards");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "separator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "text-center subnav");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "items coming-soon");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("TOPICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("AREAS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("DATE");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboards-cards");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Understanding Sonoma County's Climate Adaptation Plan");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Unprecedented warm conditions are projected to occur in both summer and winter seasons. Both extreme wet years and extreme dry years are likely to become more frequent. Preparing for the impacts of this increase weather variability is critically important.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Climate change in the Puget Sound");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Most climate change effects in the Puget Sound region are likely to increase the potential for damage to infrastructure and service disruptions (unplanned transportation closures, delays, or detours), although some risks may decrease.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/uw-wash.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Porto Alegre Desafio Resiliente");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Buscando garantir uma visão de futuro que contemple os anseios e desejos da maior parcela possível da sociedade e identificando a importância de que a visão se mantenha atualizada, frente a novos contextos, versões posteriores da Estratégia poderão apresentar ajustes na mesma.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/100rc.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Open Data: A New Tool for Building Climate Resilience");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("As communities across America continue to experience increasing climate impacts in the form of rising seas, heat waves, and extreme weather, local and federal leaders are starting to roll up their sleeves.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/wri.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Climate Change and Water");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("The Bureau of Reclamation has published an updated SECURE Water Act Report to Congress. The report highlights findings from basin-specific collaborative planning studies to provide a West-wide perspective on anticipated impacts to water resources due to climate change and corresponding adaptation strategies.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/esri.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("National Climate Assessment: Midwest Region");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Extreme heat, heavy downpours, and flooding will affect infrastructure, health, agriculture, forestry, transportation, air and water quality, and more. Climate change will also exacerbate a range of risks to the Great Lakes.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Explore how climate change is affecting the Midwest.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/partners/usgcrp.jpg");
        dom.setAttribute(el7, "width", "180px");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default btn-lg btn-show-more coming-soon");
        var el4 = dom.createTextNode("SHOW MORE RESULTS");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboard-prefooter");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "pre-footer coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "header");
        var el7 = dom.createTextNode("Insights");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "desc");
        var el7 = dom.createTextNode("Read stories about success in resilience planning");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "explore");
        var el7 = dom.createTextNode("EXPLORE THE INSIGHTS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid create");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Do you have relevant data about climate?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Would you like to improve a dashboard?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-create coming-soon");
        var el5 = dom.createTextNode("CREATE YOUR DASHBOARD");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-contact coming-soon");
        var el5 = dom.createTextNode("GET IN TOUCH");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["loadSonoma"], [], ["loc", [null, [19, 39], [19, 62]]]], ["element", "action", ["loadDashboard", "washington"], [], ["loc", [null, [27, 39], [27, 78]]]], ["block", "link-to", ["data"], ["class", "link"], 0, null, ["loc", [null, [101, 10], [115, 23]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/dashboards/sonoma/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
efineday("prep-prototype/dashboards/sonoma/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 2,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 3,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child3 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child4 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child5 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child6 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child7 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child8 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child9 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 28
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child10 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 12,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child11 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 13,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child12 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child13 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 2
              },
              "end": {
                "line": 15,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child14 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 2
              },
              "end": {
                "line": 16,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child15 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child16 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 2
              },
              "end": {
                "line": 18,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
      var child17 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 29
              }
            },
            "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
          },
          isEmpty: true,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
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
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(18);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          morphs[3] = dom.createMorphAt(fragment, 7, 7, contextualElement);
          morphs[4] = dom.createMorphAt(fragment, 9, 9, contextualElement);
          morphs[5] = dom.createMorphAt(fragment, 11, 11, contextualElement);
          morphs[6] = dom.createMorphAt(fragment, 13, 13, contextualElement);
          morphs[7] = dom.createMorphAt(fragment, 15, 15, contextualElement);
          morphs[8] = dom.createMorphAt(fragment, 17, 17, contextualElement);
          morphs[9] = dom.createMorphAt(fragment, 19, 19, contextualElement);
          morphs[10] = dom.createMorphAt(fragment, 21, 21, contextualElement);
          morphs[11] = dom.createMorphAt(fragment, 23, 23, contextualElement);
          morphs[12] = dom.createMorphAt(fragment, 25, 25, contextualElement);
          morphs[13] = dom.createMorphAt(fragment, 27, 27, contextualElement);
          morphs[14] = dom.createMorphAt(fragment, 29, 29, contextualElement);
          morphs[15] = dom.createMorphAt(fragment, 31, 31, contextualElement);
          morphs[16] = dom.createMorphAt(fragment, 33, 33, contextualElement);
          morphs[17] = dom.createMorphAt(fragment, 35, 35, contextualElement);
          return morphs;
        },
        statements: [["block", "sonoma/sonoma-slide-0", [], [], 0, null, ["loc", [null, [2, 2], [2, 54]]]], ["block", "sonoma/sonoma-slide-1", [], [], 1, null, ["loc", [null, [3, 2], [3, 54]]]], ["block", "sonoma/sonoma-slide-2", [], [], 2, null, ["loc", [null, [4, 2], [4, 54]]]], ["block", "sonoma/sonoma-slide-3", [], [], 3, null, ["loc", [null, [5, 2], [5, 54]]]], ["block", "sonoma/sonoma-slide-4", [], [], 4, null, ["loc", [null, [6, 2], [6, 54]]]], ["block", "sonoma/sonoma-slide-5", [], [], 5, null, ["loc", [null, [7, 2], [7, 54]]]], ["block", "sonoma/sonoma-slide-6", [], [], 6, null, ["loc", [null, [8, 2], [8, 54]]]], ["block", "sonoma/sonoma-slide-7", [], [], 7, null, ["loc", [null, [9, 2], [9, 54]]]], ["block", "sonoma/sonoma-slide-8", [], [], 8, null, ["loc", [null, [10, 2], [10, 54]]]], ["block", "sonoma/sonoma-slide-9", [], [], 9, null, ["loc", [null, [11, 2], [11, 54]]]], ["block", "sonoma/sonoma-slide-10", [], [], 10, null, ["loc", [null, [12, 2], [12, 56]]]], ["block", "sonoma/sonoma-slide-11", [], [], 11, null, ["loc", [null, [13, 2], [13, 56]]]], ["block", "sonoma/sonoma-slide-12", [], [], 12, null, ["loc", [null, [14, 2], [14, 56]]]], ["block", "sonoma/sonoma-slide-13", [], [], 13, null, ["loc", [null, [15, 2], [15, 56]]]], ["block", "sonoma/sonoma-slide-14", [], [], 14, null, ["loc", [null, [16, 2], [16, 56]]]], ["block", "sonoma/sonoma-slide-15", [], [], 15, null, ["loc", [null, [17, 2], [17, 56]]]], ["block", "sonoma/sonoma-slide-16", [], [], 16, null, ["loc", [null, [18, 2], [18, 56]]]], ["block", "sonoma/sonoma-slide-17", [], [], 17, null, ["loc", [null, [19, 2], [19, 56]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14, child15, child16, child17]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/sonoma/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "reveal-presentation", [], [], 0, null, ["loc", [null, [1, 0], [20, 24]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/dashboards/washington/indicators/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var routeName = this.get('routeName');
      this.get('session').set('routeName', routeName);
    }
  });
});
efineday("prep-prototype/dashboards/washington/indicators/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 10
            },
            "end": {
              "line": 64,
              "column": 10
            }
          },
          "moduleName": "prep-prototype/dashboards/washington/indicators/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pre-footer");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "header");
          var el4 = dom.createTextNode("Datasets");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "desc");
          var el4 = dom.createTextNode("Explore the entire set of data contributed by our community");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "explore");
          var el4 = dom.createTextNode("EXPLORE THE MAP");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 100,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/washington/indicators/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid wash-indicators");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row section-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "section-title text-center");
        var el4 = dom.createTextNode("Observed Temperature Changes in Puget Sound");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "separator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "subtitle");
        var el4 = dom.createTextNode("The Puget Sound region has experienced long-term warming, a lengthening of the frost-free season, and more frequent nighttime heat waves.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row indicators");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row section-header margin-top-95");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        dom.setAttribute(el3, "class", "section-title text-center");
        var el4 = dom.createTextNode("Projected Temperature Changes in Puget Sound");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "separator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "subtitle");
        var el4 = dom.createTextNode("The Puget Sound region is project to warm rapidly during the 21st century. Prior to mid-century, the project increase in air temperatures is about the same for all greenhouse gas scenarios, a result of the fact that a certain amount of warming is already \"locked in\" due to past emissions. After about 2050, projected warming depends on the amount of greenhouse gases emitted globally in the coming decades.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "dash-w-summary-more coming-soon");
        var el4 = dom.createTextNode("Read more");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <div class=\"row indicators\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        {{dashboard-card indicator_id=\"washington_chart_three\"}}\n      </div>\n      <div class=\"col-xs-6\">\n        {{dashboard-card indicator_id=\"washington_chart_four\"}}\n      </div>\n    </div>\n    <div class=\"row post-section\">\n      <div class=\"col-xs-9 col-xs-offset-2\">\n        <p class=\"post-section-text\">All scenarios project warming in the Puget Sound region for the 21st century; projected changes in annual precipitation are small compared to year-to-year variability.</p>\n        <p class=\"dash-w-summary-more\">Read more.</p>\n      </div>\n    </div>\n  </div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboard-prefooter");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "pre-footer coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "header");
        var el7 = dom.createTextNode("Insights");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "desc");
        var el7 = dom.createTextNode("Read stories about success in resilience planning");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "explore");
        var el7 = dom.createTextNode("EXPLORE THE INSIGHTS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid create");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Do you have relevant data about climate?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Would you like to improve a dashboard?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-create coming-soon");
        var el5 = dom.createTextNode("CREATE YOUR DASHBOARD");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-contact coming-soon");
        var el5 = dom.createTextNode("GET IN TOUCH");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [0, 3]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "dashboard-card", [], ["indicator_id", "washington_chart_one"], ["loc", [null, [10, 8], [10, 62]]]], ["inline", "dashboard-card", [], ["indicator_id", "washington_chart_two"], ["loc", [null, [13, 8], [13, 62]]]], ["inline", "dashboard-card", [], ["indicator_id", "washington_map_one"], ["loc", [null, [18, 8], [18, 60]]]], ["block", "link-to", ["data"], [], 0, null, ["loc", [null, [50, 10], [64, 23]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/dashboards/washington/insights/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var routeName = this.get('routeName');
      this.get('session').set('routeName', routeName);
    }
  });
});
efineday("prep-prototype/dashboards/washington/insights/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/washington/insights/template.hbs"
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/dashboards/washington/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    },

    beforeModel: function beforeModel() {
      var routeName = this.get('routeName');
      this.set('routeName', routeName);

      this.transitionTo('dashboards.washington.indicators');
    }
  });
});
efineday("prep-prototype/dashboards/washington/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 6
            },
            "end": {
              "line": 35,
              "column": 6
            }
          },
          "moduleName": "prep-prototype/dashboards/washington/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "page-marker-washington-dash");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/washington/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dash-w");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "text-center title");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("How Is Puget Sound's Climate Changing");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "separator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container dash-w-summary");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-left coming-soon");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon glyphicon-menu-left dash-w-summary-icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "dashboards-summary-header");
        var el5 = dom.createTextNode("DASHBOARDS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right coming-soon");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon glyphicon-download-alt dash-w-summary-icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "dashboards-summary-header header-download");
        var el5 = dom.createTextNode("DOWNLOAD");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "glyphicon glyphicon glyphicon-share-alt dash-w-summary-icon");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "dashboards-summary-header");
        var el5 = dom.createTextNode("SHARE");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "clearfix");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "dash-w-summary-text");
        var el4 = dom.createTextNode("This dashboard provides a summary of the mechanisms by which climate could affect ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("b");
        var el5 = dom.createTextNode("change in Washington State");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(". We also provide access to recent and ongoing efforts by communities, agencies, tribes, and organizations that are working to prepare for the effects of climate change.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "dash-w-summary-more coming-soon");
        var el4 = dom.createTextNode("Read more");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dash-w-subnav");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-2 col-xs-offset-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("INDICATORS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "coming-soon");
        var el5 = dom.createTextNode("INSIGHTS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-2");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "coming-soon");
        var el5 = dom.createTextNode("TOOLS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
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
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 1]), 3, 3);
        morphs[1] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "session.routeName", ["loc", [null, [33, 16], [33, 33]]]], "dashboards.washington.indicators"], [], ["loc", [null, [33, 12], [33, 69]]]]], [], 0, null, ["loc", [null, [33, 6], [35, 13]]]], ["content", "outlet", ["loc", [null, [46, 0], [46, 10]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/dashboards/washington/tools/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      var routeName = this.get('routeName');
      this.get('session').set('routeName', routeName);
    }
  });
});
efineday("prep-prototype/dashboards/washington/tools/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/dashboards/washington/tools/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("wash tools\n");
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
  })());
});
efineday('prep-prototype/data/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel(transition) {
      var svc = this.get('session');
      svc.set('headerSubStyle', 'header-data');
      svc.set('headerSectionTitle', 'Data');
    }
  });
});
efineday("prep-prototype/data/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 4
            },
            "end": {
              "line": 22,
              "column": 4
            }
          },
          "moduleName": "prep-prototype/data/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "toggle-checkbox", [], ["layerOptions", ["subexpr", "@mut", [["get", "layer", ["loc", [null, [21, 37], [21, 42]]]]], [], []]], ["loc", [null, [21, 6], [21, 44]]]]],
        locals: ["layer"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
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
        "moduleName": "prep-prototype/data/template.hbs"
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
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "data-sidecar");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" header ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "coming-soon");
        var el6 = dom.createTextNode("TOPICS");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "coming-soon");
        var el6 = dom.createTextNode("AREAS");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "coming-soon");
        var el6 = dom.createTextNode("DATE");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" layer listing ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "layer-listing");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "layer-listing");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "btn btn-default btn-lg btn-show-more");
        dom.setAttribute(el3, "href", "http://prepdata.sdgs.opendata.arcgis.com/");
        var el4 = dom.createTextNode("Download Data");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "search");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 7]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "arcgis-map-data", [], ["webmap", "a3a1227296a043809bf29a031fbd15b6"], ["loc", [null, [1, 0], [1, 61]]]], ["block", "each", [["get", "session.layerListing", ["loc", [null, [20, 12], [20, 32]]]]], [], 0, null, ["loc", [null, [20, 4], [22, 13]]]], ["content", "legend-view", ["loc", [null, [32, 0], [32, 15]]]], ["content", "data-popup", ["loc", [null, [33, 0], [33, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/event-bus/service', ['exports', 'ember-cli-opendata-pages/event-bus/service'], function (exports, _emberCliOpendataPagesEventBusService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesEventBusService['default'];
    }
  });
});
efineday('prep-prototype/fake-dashboard-items/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    items: {
      washington_chart_one: {
        type: 'chart-card',
        component_settings: {
          chart_type: 'time-trendline',
          dataset: {
            url: 'http://services3.arcgis.com/7pxWboj3YvCWYdcm/arcgis/rest/services/Observed_Temperature/FeatureServer/0',
            mappings: {
              time: { 'field': 'year', 'label': 'Year' },
              value: { 'field': 'annual', 'label': 'Annual Air Temperature' },
              trendline: { 'field': 'trendline', label: '' },
              sort: 'year'
            }
          },
          override: {
            axes: [{
              "type": "x",
              "scale": "x",
              "values": [1900, 1920, 1940, 1960, 1980, 2000, 2015]
            }, {
              "type": "y",
              "scale": "y",
              "grid": true,
              "format": "0d",
              "values": [47, 48, 49, 50, 51, 52, 53]
            }],
            scales: [{
              "name": "x",
              "type": "ordinal",
              "range": "width",
              "nice": "year",
              "zero": false
            }, {
              "name": "y",
              "zero": false,
              "nice": true
            }],
            marks: [{
              "properties": {
                "enter": {
                  "stroke": { "value": "#e05757" },
                  "strokeWidth": { "value": 3 }
                }
              }
            }, {
              "properties": {
                "enter": {
                  "stroke": { "value": "#000000" },
                  "strokeWidth": { "value": 3 }
                }
              }
            }]
          }
        },
        panel_title: 'Temperature Change',
        panel_subtitle: '1895-2015'
      },
      washington_chart_two: {
        type: 'chart-card',
        component_settings: {
          chart_type: 'time-trendline',
          dataset: {
            url: 'http://services3.arcgis.com/7pxWboj3YvCWYdcm/arcgis/rest/services/Observed_Precipitation/FeatureServer/0',
            mappings: {
              time: { 'field': 'year', 'label': 'Year' },
              value: { 'field': 'annual', 'label': 'Total Precipitation' },
              trendline: { 'field': 'trendline', label: '' },
              sort: 'year'
            }
          },
          override: {
            axes: [{
              "type": "x",
              "scale": "x",
              "values": [1900, 1920, 1940, 1960, 1980, 2000, 2015]
            }, {
              "type": "y",
              "scale": "y",
              "grid": true,
              "format": "0d",
              "values": [20, 30, 40, 50, 60]
            }],
            scales: [{
              "name": "x",
              "type": "ordinal",
              "range": "width",
              "nice": "year",
              "zero": false
            }, {
              "name": "y",
              "zero": false,
              "nice": true,
              "domainMin": 20
            }],
            marks: [{
              "properties": {
                "enter": {
                  "stroke": { "value": "#008ec4" },
                  "strokeWidth": { "value": 3 }
                }
              }
            }, {
              "properties": {
                "enter": {
                  "stroke": { "value": "#000000" },
                  "strokeWidth": { "value": 3 }
                }
              }
            }]
          }
        },
        panel_title: 'Precipitation Change',
        panel_subtitle: '1895-2015'
      },
      washington_map_one: {
        type: 'map-card',
        component_settings: {
          webmap: '1c9c6da70d744e7e9631cde431bbd8ce'
        },
        panel_title: 'Temperature in the Puget Sound Lowlands',
        panel_subtitle: 'Map'
      },

      washington_chart_three: {
        type: 'chart-card',
        component_settings: {
          chart_type: 'time-hist-high-low',
          dataset: {
            url: 'http://services3.arcgis.com/7pxWboj3YvCWYdcm/arcgis/rest/services/Temperature_Difference/FeatureServer/0',
            mappings: {
              time: { 'field': 'year', 'label': 'year' },
              historical: { 'field': 'AVG_HIST', 'label': 'Historical' },
              low: { 'field': 'AVG_RCP45', 'label': 'Low' },
              high: { 'field': 'AVG_RCP85', 'label': 'High' },
              sort: 'year'
            }
          },
          override: {
            axes: [{
              "type": "x",
              "scale": "x",
              "values": [1950, 1975, 2000, 2025, 2050, 2075, 2099]
            }, {
              "type": "y",
              "scale": "y",
              "grid": true,
              "format": "0d",
              "values": [30, 32, 34, 36, 38, 40, 42]
            }],
            scales: [{
              "name": "x",
              "type": "ordinal",
              "range": "width",
              "nice": "year",
              "zero": false
            }, {
              "name": "y",
              "zero": false,
              "nice": true,
              "domainMin": 30
            }]
          }
        },
        panel_title: 'Temperature Difference',
        panel_subtitle: 'Relative to 1950-1999 Average'
      },
      washington_chart_four: {
        type: 'chart-card',
        component_settings: {
          chart_type: 'time',
          dataset: {
            url: 'http://services.arcgis.com/bkrWlSKcjUDFDtgw/arcgis/rest/services/It\'s_a_Tornado_Map/FeatureServer/0',
            mappings: {
              time: { 'field': 'Date', 'label': 'Date' },
              value: { 'field': 'Injuries', 'label': 'Injuries' },
              sort: 'Date'
            }
          },
          tooltip: {
            title: '{Year}',
            content: '{Injuries} injuries {Fatalities} fatalities'
          }
        },
        panel_title: 'Temperature Change',
        panel_subtitle: 'Relative to 1950-1999 Average'
      }
    },

    getFakeItem: function getFakeItem(id) {
      return this.items[id];
    }
  });
});
efineday('prep-prototype/fake-indicator-card-service/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    dashboards: [{
      name: 'chicago',
      indicator_sections: [{
        title: 'Weather Evolution',
        indicators: [{
          x: 0,
          y: 0,
          height: 8,
          width: 7,
          component: {
            name: 'area-line-card',
            settings: {}
          }
        }, {
          x: 7,
          y: 0,
          height: 4,
          width: 5,
          component: {
            name: 'placeholder-card'
          }
        }, {
          x: 7,
          y: 4,
          height: 4,
          width: 5,
          component: {
            name: 'placeholder-card'
          }
        }]
      }, {
        title: 'Impact on the environment',
        indicators: [{
          x: 0,
          y: 0,
          height: 4,
          width: 7,
          component: {
            name: 'four-quad-map-card'
          }
        }]
      }]
    }],

    getFakeDashboard: function getFakeDashboard(dashId) {
      return this.dashboards.filter(function (d) {
        return d.name === dashId;
      })[0];
    }
  });
});
efineday('prep-prototype/faqs/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    }
  });
});
efineday("prep-prototype/faqs/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/faqs/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-8 wrapper");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("FAQs");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-10 wrapper");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("What is PREP?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The PREP Platform is a project started by the Partnership for Resilience and Preparedness (PREP), a public-private collaboration that emerged out of the White House Climate Data Initiative. We aim to facilitate collaboration among technology innovators, researchers, data scientists, and practitioners from the private sector, civil society and government. This cooperation will help spur new types of data discovery; develop innovative, customizable tools in response to user needs; and facilitate sharing and collective learning.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("What is Climate Resilience?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("How can I get involved?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Can I trust your data?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("Where can I download data?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("How do you deal with uncertainty in planning for the future?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("b");
        var el7 = dom.createTextNode("I see an error, where do I report it?");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/formats', ['exports'], function (exports) {
  var hhmmss = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  exports['default'] = {
    time: {
      hhmmss: hhmmss
    },
    date: {
      hhmmss: hhmmss
    },
    number: {
      EUR: { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 },
      USD: { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }
    }
  };
});
efineday('prep-prototype/helpers/eq', ['exports', 'ember'], function (exports, _ember) {

  var eq = function eq(params) {
    return params[0] === params[1];
  };

  exports['default'] = _ember['default'].Helper.helper(eq);
});
efineday('prep-prototype/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _emberIntlHelpersFormatDate) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatDate['default'];
    }
  });
});
efineday('prep-prototype/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
efineday('prep-prototype/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _emberIntlHelpersFormatMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatMessage['default'];
    }
  });
});
efineday('prep-prototype/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _emberIntlHelpersFormatNumber) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatNumber['default'];
    }
  });
});
efineday('prep-prototype/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _emberIntlHelpersFormatRelative) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatRelative['default'];
    }
  });
});
efineday('prep-prototype/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _emberIntlHelpersFormatTime) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatTime['default'];
    }
  });
});
efineday('prep-prototype/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _emberIntlHelpersIntlGet) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersIntlGet['default'];
    }
  });
});
efineday('prep-prototype/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _emberIntlHelpersL) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersL['default'];
    }
  });
});
efineday('prep-prototype/helpers/noteq', ['exports', 'ember'], function (exports, _ember) {

  var eq = function eq(params) {
    return params[0] !== params[1];
  };

  exports['default'] = _ember['default'].Helper.helper(eq);
});
efineday('prep-prototype/helpers/or', ['exports', 'ember'], function (exports, _ember) {
  exports.or = or;

  function or(params /*, hash*/) {
    return params[0] || params[1];
  }

  exports['default'] = _ember['default'].Helper.helper(or);
});
efineday('prep-prototype/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
efineday('prep-prototype/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
efineday('prep-prototype/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _emberIntlHelpersT) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersT['default'];
    }
  });
});
efineday('prep-prototype/home/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    hello: _emberData['default'].attr()
  });
});
efineday('prep-prototype/home/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel(transition) {
      var svc = this.get('session');
      svc.set('headerSubStyle', 'header-home');
    }
  });
});
efineday("prep-prototype/home/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 8
            },
            "end": {
              "line": 29,
              "column": 8
            }
          },
          "moduleName": "prep-prototype/home/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          About our mission\n");
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
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 48,
              "column": 6
            },
            "end": {
              "line": 50,
              "column": 6
            }
          },
          "moduleName": "prep-prototype/home/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Go to Insights\n");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 95,
              "column": 6
            },
            "end": {
              "line": 97,
              "column": 6
            }
          },
          "moduleName": "prep-prototype/home/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Go to Dashboards\n");
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 132,
              "column": 6
            },
            "end": {
              "line": 134,
              "column": 6
            }
          },
          "moduleName": "prep-prototype/home/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Go to Data\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 168,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/home/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section l-header-home");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("header");
        dom.setAttribute(el4, "class", "header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5, "class", "title -main intro");
        var el6 = dom.createTextNode("Working together to build a climate-resilient world");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section l-homepage-mission");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-5 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title -small");
        var el7 = dom.createTextNode("The Challenge");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Our changing climate is accelerating the intensity and frequency of stresses facing communities across the globe. There is now a growing recognition that even with aggressive reductions in greenhouse gas emissions, continued changes in Earth’s climate are inevitable. Planners, businesses, investors and resource managers must have access to robust and actionable information as well as guidance on how to use it to manage the risks.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-6 wrapper floatingcontainer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "hero");
        dom.setAttribute(el5, "src", "img/vizz/img-accessible.jpg");
        dom.setAttribute(el5, "alt", "Our mission");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title -small");
        var el7 = dom.createTextNode("Our Mission");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("The Partnership for Resilience and Preparedness (PREP) is a public-private collaboration whose mission is to empower a data-driven approach to building climate resilience.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("Our inital product is a platfom to help planners, investors and resource managers assess and incorporate climate risks into their decisions by enhancing access to data and insights on climate variability and change.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid imagecontainer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-12 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "hero");
        dom.setAttribute(el5, "src", "img/vizz/img-mission.jpg");
        dom.setAttribute(el5, "alt", "Accessible, authoritative assessments");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "container content-section l-homepage-problem");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-10 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("header");
        dom.setAttribute(el4, "class", "header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5, "class", "title -border2 -smallmargin");
        var el6 = dom.createTextNode("Access to Authoratative Information");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-10 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("The platform provides access to climate-relevant data, tools and case studies from authoritative sources within government, private industry and civil society. It will also allow you to seamlessly incorporate your own local content.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row indicators");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 indicator");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "name");
        var el6 = dom.createTextNode("Global temperature");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("1.4");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("sup");
        var el7 = dom.createTextNode("ºF");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "context");
        var el6 = dom.createTextNode("Since 1880");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 indicator");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "name");
        var el6 = dom.createTextNode("Carbon Dioxide");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("402.56");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "context");
        var el6 = dom.createTextNode("Parts per million");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 indicator");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "name");
        var el6 = dom.createTextNode("Sea Level");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("3.39");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "context");
        var el6 = dom.createTextNode("mm per year");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row insight");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "new-york");
        dom.setAttribute(el4, "src", "img/home/porto-alegre-crop.jpeg");
        dom.setAttribute(el4, "alt", "Porto Alegre");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "link -right coming-soon");
        var el5 = dom.createTextNode("Go to Porto Alegre insight");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "container content-section l-homepage-analysis");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-9 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("header");
        dom.setAttribute(el4, "class", "header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5, "class", "title -smallmargin");
        var el6 = dom.createTextNode("Develop Customized Dashboards");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-7 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "content -margin");
        var el5 = dom.createTextNode("Create and share your own online dashboard containing data, information, tools, interactive stories and other dynamic resources specific to your own geographic or topical area of interest. These dashboards can help mainstream climate-risk information into planning and investment decisions.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-8 wrapper indicator coming-soon");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "src", "img/vizz/img-chart1.png");
        dom.setAttribute(el4, "alt", "Indicator 1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "row indicatorgroup");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-md-12 wrapper indicator coming-soon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/vizz/img-chart2.png");
        dom.setAttribute(el6, "alt", "Indicator 2");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "col-md-12 wrapper indicator coming-soon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/vizz/img-chart3.png");
        dom.setAttribute(el6, "alt", "Indicator 3");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-12 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "href", "");
        dom.setAttribute(el4, "class", "link  -right coming-soon");
        var el5 = dom.createTextNode("go to Porto Alegre dashboard");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "container content-section l-homepage-map");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-8 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("header");
        dom.setAttribute(el4, "class", "header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5, "class", "title -border3 -smallmargin");
        var el6 = dom.createTextNode("Explore the latest data");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-7 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "content");
        var el5 = dom.createTextNode("Interact with global, national, regional and local data using a web-based map. Filter by topic, projection models and area of impact to customize the map within seconds. Create unique data visualizations or explore those created by others. When you’re ready, publish or share your findings to raise awareness in your community.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "class", "map");
        dom.setAttribute(el4, "src", "img/vizz/img-map.png");
        dom.setAttribute(el4, "alt", "Map");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section l-homepage-contact");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("article");
        dom.setAttribute(el4, "class", "col-xs-12 col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title -inverse");
        var el7 = dom.createTextNode("We want to hear from you");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content -inverse");
        var el6 = dom.createTextNode("PREP aims to enhance access to and usability of data relevant for climate assessment and resilience planning—and we can only achieve that with thoughtful feedback from users like you.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content -inverse");
        var el6 = dom.createTextNode("Interested in formally joining the collaboration? Please contact us here.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-12 col-md-6 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("form");
        dom.setAttribute(el5, "class", "contactbox coming-soon");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("input");
        dom.setAttribute(el6, "type", "email");
        dom.setAttribute(el6, "placeholder", "your@email.org");
        dom.setAttribute(el6, "class", "email");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("textarea");
        dom.setAttribute(el6, "placeholder", "Your message here");
        dom.setAttribute(el6, "class", "message");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "submit");
        dom.setAttribute(el6, "class", "general-button");
        var el7 = dom.createTextNode("Send Message");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 1, 3]), 11, 11);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 1]), 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6, 1, 1]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [8, 1, 1]), 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["about"], ["class", "link"], 0, null, ["loc", [null, [27, 8], [29, 20]]]], ["block", "link-to", ["insights"], ["class", "link -margin"], 1, null, ["loc", [null, [48, 6], [50, 18]]]], ["block", "link-to", ["dashboards.index"], ["class", "link -margin"], 2, null, ["loc", [null, [95, 6], [97, 18]]]], ["block", "link-to", ["data"], ["class", "link -margin"], 3, null, ["loc", [null, [132, 6], [134, 18]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
efineday('prep-prototype/indicators-test/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    fakeIndicatorCardService: _ember['default'].inject.service(),

    model: function model() {
      var svc = this.get('fakeIndicatorCardService');
      var dashboard = svc.getFakeDashboard('chicago');
      this.get('session').set('indicator_sections', dashboard.indicator_sections);
    }
  });
});
efineday("prep-prototype/indicators-test/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "prep-prototype/indicators-test/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["content", "section.title", ["loc", [null, [4, 8], [4, 25]]]], ["inline", "grid-layout", [], ["cards", ["subexpr", "@mut", [["get", "section.indicators", ["loc", [null, [6, 24], [6, 42]]]]], [], []]], ["loc", [null, [6, 4], [6, 44]]]]],
        locals: ["section"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/indicators-test/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
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
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "session.indicator_sections", ["loc", [null, [3, 10], [3, 36]]]]], [], 0, null, ["loc", [null, [3, 2], [7, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('prep-prototype/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
efineday('prep-prototype/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'prep-prototype/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _prepPrototypeConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_prepPrototypeConfigEnvironment['default'].APP.name, _prepPrototypeConfigEnvironment['default'].APP.version)
  };
});
efineday('prep-prototype/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

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
efineday('prep-prototype/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

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
  
    App.PostsController = Ember.ArrayController.extend({
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
efineday('prep-prototype/initializers/export-application-global', ['exports', 'ember', 'prep-prototype/config/environment'], function (exports, _ember, _prepPrototypeConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_prepPrototypeConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _prepPrototypeConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_prepPrototypeConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
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
efineday('prep-prototype/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

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
efineday('prep-prototype/initializers/session', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {
    application.inject('route', 'session', 'service:session');
    application.inject('controller', 'session', 'service:session');
    application.inject('component', 'session', 'service:session');
  }

  exports['default'] = {
    name: 'session',
    initialize: initialize
  };
});
efineday('prep-prototype/initializers/store', ['exports', 'ember'], function (exports, _ember) {

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
efineday('prep-prototype/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

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
efineday('prep-prototype/insights/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    },
    beforeModel: function beforeModel(transition) {
      var svc = this.get('session');
      svc.set('headerSubStyle', 'header-data');
      svc.set('headerSectionTitle', 'Insights');
    }
  });
});
efineday("prep-prototype/insights/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 104,
              "column": 10
            },
            "end": {
              "line": 118,
              "column": 10
            }
          },
          "moduleName": "prep-prototype/insights/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "pre-footer");
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "header");
          var el4 = dom.createTextNode("Datasets");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "desc");
          var el4 = dom.createTextNode("Explore the entire set of data contributed by our community");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "row text-center");
          var el3 = dom.createTextNode("\n\n                      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("p");
          dom.setAttribute(el3, "class", "explore");
          var el4 = dom.createTextNode("EXPLORE THE MAP");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n                  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 154,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/insights/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboards");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "text-center title");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        var el4 = dom.createTextNode("Insights");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "separator -blue");
        dom.setAttribute(el3, "style", "background-color:#25b5cd");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "text-center subnav");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "items coming-soon");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("TOPICS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("AREAS");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createTextNode("DATE");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboards-cards");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Climate Change and Water");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("The Bureau of Reclamation has published an updated SECURE Water Act Report to Congress. The report highlights findings from basin-specific collaborative planning studies to provide a West-wide perspective on anticipated impacts to water resources due to climate change and corresponding adaptation strategies.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/esri.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Open Data: A New Tool for Building Climate Resilience");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("As communities across America continue to experience increasing climate impacts in the form of rising seas, heat waves, and extreme weather, local and federal leaders are starting to roll up their sleeves.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/wri.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Climate change in the Puget Sound");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Most climate change effects in the Puget Sound region are likely to increase the potential for damage to infrastructure and service disruptions (unplanned transportation closures, delays, or detours), although some risks may decrease.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/uw-wash.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Porto Alegre Desafio Resiliente");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Buscando garantir uma visão de futuro que contemple os anseios e desejos da maior parcela possível da sociedade e identificando a importância de que a visão se mantenha atualizada, frente a novos contextos, versões posteriores da Estratégia poderão apresentar ajustes na mesma.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/100rc.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Climate Change and Water");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("The Bureau of Reclamation has published an updated SECURE Water Act Report to Congress. The report highlights findings from basin-specific collaborative planning studies to provide a West-wide perspective on anticipated impacts to water resources due to climate change and corresponding adaptation strategies.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/dashboards/logos/esri.png");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel panel-default coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "panel-body");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("National Climate Assessment: Midwest Region");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Extreme heat, heavy downpours, and flooding will affect infrastructure, health, agriculture, forestry, transportation, air and water quality, and more. Climate change will also exacerbate a range of risks to the Great Lakes.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Explore how climate change is affecting the Midwest.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "dashboard-summary-logo");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("img");
        dom.setAttribute(el7, "src", "img/partners/usgcrp.jpg");
        dom.setAttribute(el7, "width", "180px");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "class", "btn btn-default btn-lg btn-show-more coming-soon");
        var el4 = dom.createTextNode("SHOW MORE RESULTS");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid dashboard-prefooter");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "pre-footer coming-soon");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "header");
        var el7 = dom.createTextNode("Dashboards");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "desc");
        var el7 = dom.createTextNode("Explore actionable information on climate");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6, "class", "explore");
        var el7 = dom.createTextNode("EXPLORE THE DASHBOARDSS");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid create");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Have a story to tell about resilience?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Would you like to improve a dashboard?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-create coming-soon");
        var el5 = dom.createTextNode("WRITE AN INSIGHT");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-contact coming-soon");
        var el5 = dom.createTextNode("GET IN TOUCH");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [2, 3, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["loadDashboard", "washington"], [], ["loc", [null, [44, 39], [44, 78]]]], ["block", "link-to", ["data"], ["class", "link"], 0, null, ["loc", [null, [104, 10], [118, 23]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday("prep-prototype/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
efineday('prep-prototype/instance-initializers/ember-intl', ['exports', 'prep-prototype/config/environment'], function (exports, _prepPrototypeConfigEnvironment) {
  exports.instanceInitializer = instanceInitializer;

  function filterBy(env, type) {
    return Object.keys(requirejs._eak_seen).filter(function (key) {
      return key.indexOf(env.modulePrefix + '/' + type + '/') === 0;
    });
  }

  function instanceInitializer(instance) {
    var container = instance.lookup ? instance : instance.container;
    var service = container.lookup('service:intl');

    filterBy(_prepPrototypeConfigEnvironment['default'], 'cldrs').forEach(function (key) {
      service.addLocaleData(equireray(key, null, null, true)['default']);
    });

    filterBy(_prepPrototypeConfigEnvironment['default'], 'translations').forEach(function (key) {
      var localeSplit = key.split('\/');
      var localeName = localeSplit[localeSplit.length - 1];
      service.addTranslations(localeName, equireray(key, null, null, true)['default']);
    });
  }

  exports['default'] = {
    name: 'ember-intl',
    initialize: instanceInitializer
  };
});
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
efineday('prep-prototype/legend-control/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({});
});
efineday('prep-prototype/login/route', ['exports', 'ember', 'npm:js-cookie'], function (exports, _ember, _npmJsCookie) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel() {
      var is_logged_in = _npmJsCookie['default'].get('prep_logged_in');
      if (is_logged_in) {
        this.transitionTo('home');
      }
    },

    actions: {
      checkLogin: function checkLogin() {
        _ember['default'].$('.pwd-error').fadeOut();
        var pwd_in = _ember['default'].$('#input-pwd').val();
        if (btoa(pwd_in) === 'cGFzc3dvcmQxMjM=') {
          _npmJsCookie['default'].set('prep_logged_in', true);
          this.transitionTo('home');
        } else {
          _ember['default'].$('.pwd-error').fadeIn();
          _ember['default'].$('#input-pwd').val('').blur();
        }
      }
    }
  });
});
efineday("prep-prototype/login/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 6
          }
        },
        "moduleName": "prep-prototype/login/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row text-center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "input input--minoru");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "class", "input__field input__field--yoko");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "id", "input-pwd");
        dom.setAttribute(el4, "autocomplete", "off");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4, "class", "input__label input__label--yoko");
        dom.setAttribute(el4, "for", "input-18");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "input__label-content input__label-content--yoko");
        var el6 = dom.createTextNode("Password");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "pwd-error text-danger");
        var el3 = dom.createTextNode("incorrect password");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["element", "action", ["checkLogin"], ["on", "submit"], ["loc", [null, [2, 8], [2, 43]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/logout/route', ['exports', 'ember', 'npm:js-cookie'], function (exports, _ember, _npmJsCookie) {
  exports['default'] = _ember['default'].Route.extend({
    beforeModel: function beforeModel() {
      _npmJsCookie['default'].remove('prep_logged_in');
      this.transitionTo('login');
    }
  });
});
efineday("prep-prototype/logout/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/logout/template.hbs"
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
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('prep-prototype/partners/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    activate: function activate() {
      this._super();
      window.scrollTo(0, 0);
    }
  });
});
efineday("prep-prototype/partners/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 115,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/partners/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        dom.setAttribute(el1, "class", "content-section");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-10 wrapper");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h1");
        dom.setAttribute(el6, "class", "title");
        var el7 = dom.createTextNode("Partners");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createTextNode("A public-private collaboration, the Partnership for Resilience and Preparedness (PREP) was formed to accelerate use of information and communication technology to improve climate risk assessment and resilience planning. It includes representatives from United States government agencies with vast data holdings, leading technology companies in the private sector, and civil society organizations.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        dom.setAttribute(el5, "class", "content");
        var el6 = dom.createElement("i");
        var el7 = dom.createTextNode("Co-develop, co-brand, and co-govern.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" A public-private collaboration was created to take advantage of the respective abilities each partner brings to the table. We pursue nimble and rapid innovation, ownership and trust among partners, and a diversity of expertise and experience.\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("style");
        var el4 = dom.createTextNode("\n     .content-section .wrapper .partner-logo {\n         display: inline-block;\n         height: 90px;\n         margin: 25px 0;\n     }\n     .content-section .wrapper .partner-logo > img{\n         position: relative;\n         max-width: 180px;\n         max-height: 90px;\n         top: 50%;\n         transform: translate(0, -50%);\n         -moz-transform: translate(0, -50%);\n         -webkit-transform: translate(0, -50%);\n     }\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-9 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Partners");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//cartodb.com");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/cartodb.png");
        dom.setAttribute(el6, "alt", "CartoDB");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//descarteslabs.com");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/descarteslabs.png");
        dom.setAttribute(el6, "alt", "Descartes Labs");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//earthknowledge.com");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/earthknowledge.jpg");
        dom.setAttribute(el6, "alt", "Earth Knowledge");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//esri.com");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/esri.jpg");
        dom.setAttribute(el6, "alt", "Esri");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//vizzuality.com");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/vizzuality.png");
        dom.setAttribute(el6, "alt", "Vizzuality");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//wri.org");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/wri.jpg");
        dom.setAttribute(el6, "alt", "World Resources Institute");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-9 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Federal collaborators");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//doi.gov");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/doi.png");
        dom.setAttribute(el6, "alt", "U.S. Department of the Interior");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//nasa.gov");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/nasa.png");
        dom.setAttribute(el6, "alt", "U.S. National Aeronautics and Space Administration");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//noaa.gov");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/noaa.png");
        dom.setAttribute(el6, "alt", "U.S. National Oceanic and Atmospheric Administration");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6 col-sm-4 col-md-3 wrapper");
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "//globalchange.gov");
        dom.setAttribute(el5, "class", "partner-logo");
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("img");
        dom.setAttribute(el6, "src", "img/partners/usgcrp.jpg");
        dom.setAttribute(el6, "alt", "U.S. Global Change Research Program");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid create");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Do you have relevant data about climate?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Would you like to improve a dashboard?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-create coming-soon");
        var el5 = dom.createTextNode("CREATE YOUR DASHBOARD");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn-lg btn-contact coming-soon");
        var el5 = dom.createTextNode("GET IN TOUCH");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
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
  })());
});
efineday('prep-prototype/router', ['exports', 'ember', 'prep-prototype/config/environment'], function (exports, _ember, _prepPrototypeConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _prepPrototypeConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home', { path: '/' });
    this.route('data');

    this.route('dashboards', function () {
      // this.route('dashboard',{ path: '/:dashboard_id' }, function() {
      // this.route('indicators', function() {});
      // this.route('insights', function () {});
      // this.route('tools', function () {});
      // });
      this.route('sonoma');
      this.route('washington', function () {
        this.route('indicators');
        this.route('insights');
        this.route('tools');
      });
    });

    this.route('insights');
    this.route('search');
    this.route('indicators-test');
    this.route('about');
    this.route('faqs');
    this.route('contact');
    this.route('partners');
    this.route('login');
    this.route('logout');
  });

  exports['default'] = Router;
});
efineday('prep-prototype/search/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
efineday("prep-prototype/search/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 4
          }
        },
        "moduleName": "prep-prototype/search/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "text-center");
        var el2 = dom.createTextNode("[ search goes here]");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
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
  })());
});
efineday('prep-prototype/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _emberIntlServicesIntl) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlServicesIntl['default'];
    }
  });
});
efineday('prep-prototype/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
efineday('prep-prototype/session/service', ['exports', 'ember', 'ic-ajax'], function (exports, _ember, _icAjax) {
  exports['default'] = _ember['default'].Service.extend({
    headerSectionTitle: 'Dashboards',
    indicatorCards: [],
    dashboardReturnDisplay: 'dashboardReturnDisplayNone',
    layerListing: [],
    token: '',

    init: function init() {
      var layerListing = [];
      this.set('layerListing', layerListing);

      // this.getToken()
      //   .then(function (response) {
      //     console.log(response);
      //     if (response.token) {
      //       this.set('token', response.token);
      //     }
      //   }.bind(this))
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },

    getToken: function getToken() {
      var url = 'https://www.arcgis.com/sharing/generateToken';
      var data = {
        username: 'prep_user',
        password: 'password123',
        referer: 'client',
        f: 'json'
      };

      return (0, _icAjax['default'])({
        url: url,
        data: data,
        dataType: 'json'
      });
    }
  });
});
efineday('prep-prototype/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
efineday('prep-prototype/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
efineday("prep-prototype/templates/partials/-dashboard-tabs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "prep-prototype/templates/partials/-dashboard-tabs.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "t", ["dashboard.tabs.indicators"], [], ["loc", [null, [3, 9], [3, 42]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "prep-prototype/templates/partials/-dashboard-tabs.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "t", ["dashboard.tabs.insights"], [], ["loc", [null, [6, 9], [6, 40]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "prep-prototype/templates/partials/-dashboard-tabs.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "t", ["dashboard.tabs.tools"], [], ["loc", [null, [9, 9], [9, 37]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 5
          }
        },
        "moduleName": "prep-prototype/templates/partials/-dashboard-tabs.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "nav nav-pills nav-justified");
        dom.setAttribute(el1, "role", "tablist");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["dashboards.dashboard.indicators"], ["tagName", "li"], 0, null, ["loc", [null, [2, 2], [4, 14]]]], ["block", "link-to", ["dashboards.dashboard.insights"], ["tagName", "li"], 1, null, ["loc", [null, [5, 2], [7, 14]]]], ["block", "link-to", ["dashboards.dashboard.tools"], ["tagName", "li"], 2, null, ["loc", [null, [8, 2], [10, 14]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
efineday("prep-prototype/templates/partials/-footer-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["empty-body"]
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/templates/partials/-footer-data.hbs"
      },
      isEmpty: true,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
efineday("prep-prototype/templates/partials/-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 14
            },
            "end": {
              "line": 46,
              "column": 14
            }
          },
          "moduleName": "prep-prototype/templates/partials/-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("Partners");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 14
            },
            "end": {
              "line": 49,
              "column": 14
            }
          },
          "moduleName": "prep-prototype/templates/partials/-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("About");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 14
            },
            "end": {
              "line": 52,
              "column": 14
            }
          },
          "moduleName": "prep-prototype/templates/partials/-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("FAQs");
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 53,
              "column": 14
            },
            "end": {
              "line": 55,
              "column": 14
            }
          },
          "moduleName": "prep-prototype/templates/partials/-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("Contact");
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
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 63,
            "column": 0
          }
        },
        "moduleName": "prep-prototype/templates/partials/-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "content-section l-footer");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("article");
        dom.setAttribute(el4, "class", "wrapper col-xs-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("header");
        dom.setAttribute(el5, "class", "header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        dom.setAttribute(el6, "class", "title -inverse");
        var el7 = dom.createTextNode("Our partners");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "partners");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "partner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.wri.org");
        dom.setAttribute(el7, "target", "blank");
        dom.setAttribute(el7, "rel", "noreferrer");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-wri");
        dom.setAttribute(el8, "src", "img/vizz/partners/wri.png");
        dom.setAttribute(el8, "alt", "WRI");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "partner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.esri.com");
        dom.setAttribute(el7, "target", "blank");
        dom.setAttribute(el7, "rel", "noreferrer");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-esri");
        dom.setAttribute(el8, "src", "img/vizz/partners/esri.png");
        dom.setAttribute(el8, "alt", "ESRI");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "partner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.vizzuality.com");
        dom.setAttribute(el7, "target", "blank");
        dom.setAttribute(el7, "rel", "noreferrer");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-vizzuality");
        dom.setAttribute(el8, "src", "img/vizz/partners/vizzuality.png");
        dom.setAttribute(el8, "alt", "Vizzuality");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "partner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.nasa.gov");
        dom.setAttribute(el7, "target", "blank");
        dom.setAttribute(el7, "rel", "noreferrer");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-nasa");
        dom.setAttribute(el8, "src", "img/vizz/partners/nasa.png");
        dom.setAttribute(el8, "alt", "NASA");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "partner");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://www.descarteslabs.com");
        dom.setAttribute(el7, "target", "blank");
        dom.setAttribute(el7, "rel", "noreferrer");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("img");
        dom.setAttribute(el8, "class", "logo-descartes");
        dom.setAttribute(el8, "src", "img/vizz/partners/descartes.png");
        dom.setAttribute(el8, "alt", "Descartes Labs");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        dom.setAttribute(el6, "class", "partner");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "");
        dom.setAttribute(el7, "class", "general-button -inverse -outline coming-soon");
        var el8 = dom.createTextNode("Become a partner");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.setAttribute(el5, "class", "separator");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("footer");
        dom.setAttribute(el5, "class", "footer");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("nav");
        dom.setAttribute(el6, "class", "navbar navbar-default");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "class", "nav navbar-nav navbar-left socialmedia coming-soon");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "item");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#");
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el10 = dom.createElement("svg");
        dom.setAttribute(el10, "width", "8");
        dom.setAttribute(el10, "height", "16");
        dom.setAttribute(el10, "viewBox", "0 0 8 16");
        dom.setAttribute(el10, "xmlns", "http://www.w3.org/2000/svg");
        var el11 = dom.createElement("title");
        var el12 = dom.createTextNode("facebook");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("path");
        dom.setAttribute(el11, "d", "M7.172 5.18H4.728V3.52c0-.623.403-.767.679-.767h1.727V.011L4.76 0C2.124 0 1.523 2.047 1.523 3.354v1.827H0v2.825h1.523V16h3.205V8.006h2.163l.281-2.825");
        dom.setAttribute(el11, "fill", "#FFF");
        dom.setAttribute(el11, "fill-rule", "evenodd");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        dom.setNamespace(null);
        var el8 = dom.createElement("li");
        dom.setAttribute(el8, "class", "item");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "#");
        dom.setNamespace("http://www.w3.org/2000/svg");
        var el10 = dom.createElement("svg");
        dom.setAttribute(el10, "width", "22");
        dom.setAttribute(el10, "height", "16");
        dom.setAttribute(el10, "viewBox", "0 0 22 16");
        dom.setAttribute(el10, "xmlns", "http://www.w3.org/2000/svg");
        var el11 = dom.createElement("title");
        var el12 = dom.createTextNode("twitter");
        dom.appendChild(el11, el12);
        dom.appendChild(el10, el11);
        var el11 = dom.createElement("path");
        dom.setAttribute(el11, "d", "M17.372 2.64c-.017-.006-.029-.023-.046-.034-.811-.766-1.766-1.132-2.863-1.086l-.034-.08c.011-.006.017-.006.023-.006.994-.234 1.583-.468 1.76-.725.063-.206-.012-.32-.229-.349a5.525 5.525 0 0 0-1.377.337c.526-.337.726-.577.611-.697-.514.017-1.068.28-1.651.8.217-.371.297-.571.24-.606-.274.195-.52.4-.726.623-.44.492-.794.949-1.063 1.366L12 2.217c-.697 1.143-1.183 2.286-1.474 3.452l-.109.085-.022.023a5.503 5.503 0 0 0-1.52-1.331c-.71-.469-1.543-.909-2.503-1.337a21.914 21.914 0 0 0-3.19-1.349c-.005 1.211.584 2.177 1.755 2.88v.023a3.657 3.657 0 0 0-1.2.177c.075 1.126.869 1.897 2.366 2.326l-.006.023a1.712 1.712 0 0 0-1.451.6c.491.971 1.366 1.44 2.628 1.4-.245.131-.445.274-.571.434-.234.24-.309.526-.234.857.274.492.76.72 1.48.686l.04.051-.023.023c-1.24 1.286-2.732 1.869-4.486 1.743L3.452 13c-1.07-.005-2.212-.525-3.452-1.554 1.246 1.806 2.897 3.109 4.943 3.926 2.343.777 4.68.834 7.017.165H12c2.269-.657 4.189-2.011 5.778-4.057.731-1.074 1.188-2.097 1.371-3.074 1.183.04 2.04-.303 2.566-1.034l-.012-.018c-.394.138-1.165.098-2.308-.137v-.131c0-.006 0-.006.005 0 1.252-.143 1.989-.549 2.229-1.223-.874.343-1.737.349-2.589.029-.154-1.189-.708-2.27-1.668-3.252");
        dom.setAttribute(el11, "fill", "#FFF");
        dom.setAttribute(el11, "fill-rule", "evenodd");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        dom.setNamespace(null);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7, "class", "nav navbar-nav navbar-right menu");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
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
        var element0 = dom.childAt(fragment, [0, 1, 1, 1, 7, 1, 3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 2, 2);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 4, 4);
        return morphs;
      },
      statements: [["block", "link-to", ["partners"], ["tagName", "li", "class", "item"], 0, null, ["loc", [null, [44, 14], [46, 26]]]], ["block", "link-to", ["about"], ["tagName", "li", "class", "item"], 1, null, ["loc", [null, [47, 14], [49, 26]]]], ["block", "link-to", ["faqs"], ["tagName", "li", "class", "item"], 2, null, ["loc", [null, [50, 14], [52, 26]]]], ["block", "link-to", ["contact"], ["tagName", "li", "class", "item"], 3, null, ["loc", [null, [53, 14], [55, 26]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
efineday("prep-prototype/templates/partials/-header-data", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 10
            },
            "end": {
              "line": 14,
              "column": 10
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-data.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "logo");
          dom.setAttribute(el1, "src", "img/header/prep-tmp.svg");
          dom.setAttribute(el1, "alt", "Preparedness for Resilience");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 12
            },
            "end": {
              "line": 21,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-data.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("DATA");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "page-marker-data");
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
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 12
            },
            "end": {
              "line": 24,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-data.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("DASHBOARDS");
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
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 12
            },
            "end": {
              "line": 27,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-data.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("INSIGHTS");
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
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 9
          }
        },
        "moduleName": "prep-prototype/templates/partials/-header-data.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "jumbotron content-section l-header-data");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("nav");
        dom.setAttribute(el4, "class", "navbar navbar-default");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "navbar-header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "button");
        dom.setAttribute(el6, "class", "navbar-toggle collapsed");
        dom.setAttribute(el6, "data-toggle", "collapse");
        dom.setAttribute(el6, "data-target", "#bs-example-navbar-collapse-1");
        dom.setAttribute(el6, "aria-expanded", "false");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "sr-only");
        var el8 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "collapse navbar-collapse");
        dom.setAttribute(el5, "id", "bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "nav navbar-nav navbar-right");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item separator");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item -secondary coming-soon");
        var el8 = dom.createElement("a");
        var el9 = dom.createTextNode("Search");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item -secondary coming-soon");
        var el8 = dom.createElement("a");
        var el9 = dom.createTextNode("English");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [12, 10], [14, 22]]]], ["block", "link-to", ["data"], ["tagName", "li", "class", "item"], 1, null, ["loc", [null, [18, 12], [21, 24]]]], ["block", "link-to", ["dashboards.index"], ["tagName", "li", "class", "item"], 2, null, ["loc", [null, [22, 12], [24, 24]]]], ["block", "link-to", ["insights"], ["tagName", "li", "class", "item"], 3, null, ["loc", [null, [25, 12], [27, 24]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
efineday("prep-prototype/templates/partials/-header-home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 10
            },
            "end": {
              "line": 14,
              "column": 10
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "logo");
          dom.setAttribute(el1, "src", "img/header/prep-tmp.svg");
          dom.setAttribute(el1, "alt", "Preparedness for Resilience");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 12
            },
            "end": {
              "line": 22,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-home.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("DASHBOARDS");
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
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 9
          }
        },
        "moduleName": "prep-prototype/templates/partials/-header-home.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "jumbotron content-section l-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("nav");
        dom.setAttribute(el4, "class", "navbar navbar-default");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "navbar-header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "button");
        dom.setAttribute(el6, "class", "navbar-toggle collapsed");
        dom.setAttribute(el6, "data-toggle", "collapse");
        dom.setAttribute(el6, "data-target", "#bs-example-navbar-collapse-1");
        dom.setAttribute(el6, "aria-expanded", "false");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "sr-only");
        var el8 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "collapse navbar-collapse");
        dom.setAttribute(el5, "id", "bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "nav navbar-nav navbar-right");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createTextNode("Data");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment(" <li class=\"item\"><a href=\"#\">Dashboards</a></li> ");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createTextNode("Insights");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item separator");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item -secondary coming-soon");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createTextNode("Search");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item -secondary coming-soon");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "href", "#");
        var el9 = dom.createTextNode("English");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("header");
        dom.setAttribute(el4, "class", "header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h1");
        dom.setAttribute(el5, "class", "title -main intro");
        var el6 = dom.createTextNode("Enabling collective action to manage climate risks");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [12, 10], [14, 22]]]], ["block", "link-to", ["dashboards.index"], ["tagName", "li", "class", "item"], 1, null, ["loc", [null, [20, 12], [22, 24]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday("prep-prototype/templates/partials/-header-nav-right", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 3,
              "column": 51
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["header.navRight.data"], [], ["loc", [null, [3, 23], [3, 51]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 6,
              "column": 63
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["header.navRight.dashboards"], [], ["loc", [null, [6, 29], [6, 63]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 9,
              "column": 59
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["header.navRight.insights"], [], ["loc", [null, [9, 27], [9, 59]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 4
            },
            "end": {
              "line": 15,
              "column": 55
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["header.navRight.search"], [], ["loc", [null, [15, 25], [15, 55]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 5
          }
        },
        "moduleName": "prep-prototype/templates/partials/-header-nav-right.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "nav navbar-nav navbar-right");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "header-separator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
        morphs[4] = dom.createMorphAt(element0, 11, 11);
        return morphs;
      },
      statements: [["block", "link-to", ["data"], [], 0, null, ["loc", [null, [3, 4], [3, 63]]]], ["block", "link-to", ["dashboards"], [], 1, null, ["loc", [null, [6, 4], [6, 75]]]], ["block", "link-to", ["insights"], [], 2, null, ["loc", [null, [9, 4], [9, 71]]]], ["block", "link-to", ["search"], [], 3, null, ["loc", [null, [15, 4], [15, 67]]]], ["content", "header-locale-dropdown", ["loc", [null, [18, 2], [18, 28]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
efineday("prep-prototype/templates/partials/-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 10
            },
            "end": {
              "line": 14,
              "column": 10
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "logo");
          dom.setAttribute(el1, "src", "img/header/prep-tmp.svg");
          dom.setAttribute(el1, "alt", "Preparedness for Resilience");
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
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 12
            },
            "end": {
              "line": 20,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("DATA");
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
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 14
              },
              "end": {
                "line": 27,
                "column": 14
              }
            },
            "moduleName": "prep-prototype/templates/partials/-header.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "page-marker-dashboards");
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
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 12
            },
            "end": {
              "line": 28,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("DASHBOARDS");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "or", [["subexpr", "eq", [["get", "currentPath", ["loc", [null, [24, 26], [24, 37]]]], "dashboards.index"], [], ["loc", [null, [24, 22], [24, 57]]]], ["subexpr", "eq", [["get", "currentPath", ["loc", [null, [25, 26], [25, 37]]]], "dashboards.washington"], [], ["loc", [null, [25, 22], [25, 62]]]]], [], ["loc", [null, [23, 20], [25, 64]]]]], [], 0, null, ["loc", [null, [23, 14], [27, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.2",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 14
              },
              "end": {
                "line": 33,
                "column": 14
              }
            },
            "moduleName": "prep-prototype/templates/partials/-header.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "page-marker-insights");
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
          "fragmentReason": false,
          "revision": "Ember@2.4.2",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 12
            },
            "end": {
              "line": 34,
              "column": 12
            }
          },
          "moduleName": "prep-prototype/templates/partials/-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1, "href", "#");
          var el2 = dom.createTextNode("INSIGHTS");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["subexpr", "eq", [["get", "currentPath", ["loc", [null, [31, 24], [31, 35]]]], "insights"], [], ["loc", [null, [31, 20], [31, 47]]]]], [], 0, null, ["loc", [null, [31, 14], [33, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 9
          }
        },
        "moduleName": "prep-prototype/templates/partials/-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        dom.setAttribute(el1, "class", "jumbotron content-section l-header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container content-section");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "wrapper");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("nav");
        dom.setAttribute(el4, "class", "navbar navbar-default");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "navbar-header");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "type", "button");
        dom.setAttribute(el6, "class", "navbar-toggle collapsed");
        dom.setAttribute(el6, "data-toggle", "collapse");
        dom.setAttribute(el6, "data-target", "#bs-example-navbar-collapse-1");
        dom.setAttribute(el6, "aria-expanded", "false");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "sr-only");
        var el8 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "icon-bar");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "collapse navbar-collapse");
        dom.setAttribute(el5, "id", "bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "nav navbar-nav navbar-right");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item separator");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item -secondary coming-soon");
        var el8 = dom.createElement("a");
        var el9 = dom.createTextNode("Search");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "item -secondary coming-soon");
        var el8 = dom.createElement("a");
        var el9 = dom.createTextNode("English");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 3, 3);
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 3, 3);
        return morphs;
      },
      statements: [["block", "link-to", ["home"], [], 0, null, ["loc", [null, [12, 10], [14, 22]]]], ["block", "link-to", ["data"], ["tagName", "li", "class", "item"], 1, null, ["loc", [null, [18, 12], [20, 24]]]], ["block", "link-to", ["dashboards.index"], ["tagName", "li", "class", "item"], 2, null, ["loc", [null, [21, 12], [28, 24]]]], ["block", "link-to", ["insights"], ["tagName", "li", "class", "item"], 3, null, ["loc", [null, [29, 12], [34, 24]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
efineday("prep-prototype/translations/en-us", ["exports"], function (exports) {
  exports["default"] = { "dashboard": { "tabs": { "indicators": "INDICATORS", "insights": "INSIGHTS", "tools": "TOOLS" } }, "dashboards": { "featuredText": "Featured Dashboards", "findText": "Find dashoards by Topic, Area, and Date", "title": "Dashboards" }, "header": { "backToDashboards": "BACK TO DASHBOARDS", "navRight": { "dashboards": "DASHBOARDS", "data": "DATA", "insights": "INSIGHTS", "search": "SEARCH" } } };
});
efineday("prep-prototype/translations/es", ["exports"], function (exports) {
  exports["default"] = { "dashboard": { "tabs": { "indicators": "INDICATORS", "insights": "INSIGHTS", "tools": "TOOLS" } }, "dashboards": { "featuredText": "Featured Dashboards", "findText": "Find dashoards by Topic, Area, and Date", "title": "Cuadros de Mando" }, "header": { "backToDashboards": "BACK TO DASHBOARDS", "navRight": { "dashboards": "DASHBOARDS", "data": "DATA", "insights": "INSIGHTS", "search": "SEARCH" } } };
});
efineday('prep-prototype/utils/intl/missing-message', ['exports', 'ember', 'ember-intl/utils/links'], function (exports, _ember, _emberIntlUtilsLinks) {
  exports['default'] = missingMessage;
  var logger = _ember['default'].Logger;

  function missingMessage(key, locales) {
    if (!locales) {
      logger.warn('ember-intl: no locale has been set. Documentation: ' + _emberIntlUtilsLinks['default'].unsetLocale);
    } else {
      logger.warn('ember-intl: translation: \'' + key + '\' on locale: \'' + locales.join(', ') + '\' was not found.');
    }

    return 'Missing translation: ' + key;
  }
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

efineday('prep-prototype/config/environment', ['ember'], function(Ember) {
  var prefix = 'prep-prototype';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  equireray("prep-prototype/app")["default"].create({"name":"prep-prototype","version":"0.0.0+a1160c1f"});
}

/* jshint ignore:end */
//# sourceMappingURL=prep-prototype.map