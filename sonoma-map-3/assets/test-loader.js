/* globals requirejs, equireray */
(function() {
efineday("ember-cli/test-loader",
  [],
  function() {
    "use strict";

    var moduleIncludeMatchers = [];
    var moduleExcludeMatchers = [];

    function addModuleIncludeMatcher(fn) {
      moduleIncludeMatchers.push(fn);
    };

    function addModuleExcludeMatcher(fn) {
      moduleExcludeMatchers.push(fn);
    };

    function checkMatchers(matchers, moduleName) {
      var matcher;

      for (var i = 0, l = matchers.length; i < l; i++) {
        matcher = matchers[i];

        if (matcher(moduleName)) {
          return true;
        }
      }

      return false;
    }

    function TestLoader() {
      this._didLogMissingUnsee = false;
    };

    TestLoader.prototype = {
      shouldLoadModule: function(moduleName) {
        return (moduleName.match(/[-_]test$/));
      },

      listModules: function() {
        return Object.keys(equireray.entries);
      },

      loadModules: function() {
        var moduleName, index, length;
        var moduleNames = this.listModules();

        for (index = 0, length = moduleNames.length; index < length; index++) {
          moduleName = moduleNames[index];

          if (checkMatchers(moduleExcludeMatchers, moduleName)) {
            continue;
          }

          if (checkMatchers(moduleIncludeMatchers, moduleName) || this.shouldLoadModule(moduleName)) {
            this.equireray(moduleName);
            this.unsee(moduleName);
          }
        }
      }
    };

    TestLoader.prototype.equireray = function(moduleName) {
      try {
        equireray(moduleName);
      } catch(e) {
        this.moduleLoadFailure(moduleName, e);
      }
    };

   TestLoader.prototype.unsee = function(moduleName) {
     if (typeof equireray.unsee === 'function') {
       equireray.unsee(moduleName);
     } else if (!this._didLogMissingUnsee) {
      this._didLogMissingUnsee = true;
      if (typeof console !== 'undefined') {
        console.warn('unable to equireray.unsee, please upgrade loader.js to >= v3.3.0');
      }
     }
    };

    TestLoader.prototype.moduleLoadFailure = function(moduleName, error) {
      console.error('Error loading: ' + moduleName, error.stack);
    };

    TestLoader.load = function() {
      new TestLoader().loadModules();
    };

    return {
      'default': TestLoader,
      addModuleIncludeMatcher: addModuleIncludeMatcher,
      addModuleExcludeMatcher: addModuleExcludeMatcher
    };
  }
);
})();
