"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["th-Filter"] = factory();else root["th-Filter"] = factory();
})(typeof self !== 'undefined' ? self : void 0, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "38e8");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "38e8":
      /***/
      function e8(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__); // EXTERNAL MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js


        var setPublicPath = __webpack_require__("e6e2"); // CONCATENATED MODULE: /Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/vue/comps/th-Filter/node_modules/.cache/vue-loader","cacheIdentifier":"2aa12d38-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/node_modules/vue-loader/lib??vue-loader-options!./th-Filter.vue?vue&type=template&id=2fc5c20a&


        var render = function render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "btn-group"
          }, [_vm._v("\n  " + _vm._s(_vm.title) + "\n  "), _c('a', {
            attrs: {
              "href": "javascript:;",
              "data-toggle": "dropdown",
              "role": "button",
              "aria-label": 'Filter for ' + _vm.title
            }
          }, [_c('i', {
            staticClass: "fa fa-filter",
            "class": {
              'text-muted': !_vm.keyword
            }
          })]), _c('ul', {
            staticClass: "dropdown-menu",
            staticStyle: {
              "padding": "3px"
            }
          }, [_c('div', {
            staticClass: "input-group input-group-sm"
          }, [_c('input', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.keyword,
              expression: "keyword"
            }],
            ref: "input",
            staticClass: "form-control",
            attrs: {
              "type": "search",
              "placeholder": "Search " + _vm.field + "..."
            },
            domProps: {
              "value": _vm.keyword
            },
            on: {
              "click": _vm.searchclick,
              "keydown": function keydown($event) {
                if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                  return null;
                }

                return _vm.search($event);
              },
              "input": function input($event) {
                if ($event.target.composing) {
                  return;
                }

                _vm.keyword = $event.target.value;
              }
            }
          }), _c('span', {
            staticClass: "input-group-btn"
          }, [_c('button', {
            staticClass: "btn btn-default fa fa-search",
            on: {
              "click": _vm.search
            }
          })])])])]);
        };

        var staticRenderFns = []; // CONCATENATED MODULE: ./th-Filter.vue?vue&type=template&id=2fc5c20a&
        // CONCATENATED MODULE: /Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/node_modules/vue-loader/lib??vue-loader-options!./th-Filter.vue?vue&type=script&lang=js&
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //

        /* harmony default export */

        var lib_vue_loader_options_th_Filtervue_type_script_lang_js_ = {
          props: ['field', 'title', 'query'],
          data: function data() {
            return {
              keyword: ''
            };
          },
          mounted: function mounted() {
            var _this = this;

            $(this.$el).on('shown.bs.dropdown', function (e) {
              return _this.$refs.input.focus();
            });
          },
          watch: {
            keyword: function keyword(kw) {
              // reset immediately if empty
              if (kw === '') this.search();
            }
          },
          methods: {
            searchclick: function searchclick(e) {
              e.stopPropagation();
            },
            search: function search() {
              var query = this.query; // `$props.query` would be initialized to `{ limit: 10, offset: 0, sort: '', order: '' }` by default
              // custom query conditions must be set to observable by using `Vue.set / $vm.$set`

              this.$set(query, 'filter', this.field + '~' + this.keyword); // GT mod - use a filter field for filters.

              query.offset = 0; // reset pagination
            }
          }
        }; // CONCATENATED MODULE: ./th-Filter.vue?vue&type=script&lang=js&

        /* harmony default export */

        var th_Filtervue_type_script_lang_js_ = lib_vue_loader_options_th_Filtervue_type_script_lang_js_; // EXTERNAL MODULE: ./th-Filter.vue?vue&type=style&index=0&lang=css&

        var th_Filtervue_type_style_index_0_lang_css_ = __webpack_require__("4ee7"); // CONCATENATED MODULE: /Users/guy/Development/www/titus-moodle/moodle/mod/tlevent/node_modules/vue-loader/lib/runtime/componentNormalizer.js

        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.


        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier,
        /* server only */
        shadowMode
        /* vue-cli only */
        ) {
          // Vue.extend constructor export interop
          var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports; // render functions

          if (render) {
            options.render = render;
            options.staticRenderFns = staticRenderFns;
            options._compiled = true;
          } // functional template


          if (functionalTemplate) {
            options.functional = true;
          } // scopedId


          if (scopeId) {
            options._scopeId = 'data-v-' + scopeId;
          }

          var hook;

          if (moduleIdentifier) {
            // server build
            hook = function hook(context) {
              // 2.3 injection
              context = context || // cached call
              this.$vnode && this.$vnode.ssrContext || // stateful
              this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
              // 2.2 with runInNewContext: true

              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
              } // inject component styles


              if (injectStyles) {
                injectStyles.call(this, context);
              } // register component module identifier for async chunk inferrence


              if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
              }
            }; // used by ssr in case component is cached and beforeCreate
            // never gets called


            options._ssrRegister = hook;
          } else if (injectStyles) {
            hook = shadowMode ? function () {
              injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles;
          }

          if (hook) {
            if (options.functional) {
              // for template-only hot-reload because in that case the render fn doesn't
              // go through the normalizer
              options._injectStyles = hook; // register for functioal component in vue file

              var originalRender = options.render;

              options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
              };
            } else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
          }

          return {
            exports: scriptExports,
            options: options
          };
        } // CONCATENATED MODULE: ./th-Filter.vue

        /* normalize component */


        var component = normalizeComponent(th_Filtervue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        /* harmony default export */

        var th_Filter = component.exports; // CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

        /* harmony default export */

        var entry_lib = __webpack_exports__["default"] = th_Filter;
        /***/
      },

      /***/
      "4ee7":
      /***/
      function ee7(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        /* harmony import */

        var _usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_th_Filter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be39");
        /* harmony import */


        var _usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_th_Filter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/
        __webpack_require__.n(_usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_th_Filter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
        /* unused harmony reexport * */

        /* unused harmony default export */


        var _unused_webpack_default_export = _usr_local_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_oneOf_1_1_usr_local_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_th_Filter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a;
        /***/
      },

      /***/
      "be39":
      /***/
      function be39(module, exports, __webpack_require__) {// extracted by mini-css-extract-plugin

        /***/
      },

      /***/
      "e6e2":
      /***/
      function e6e2(module, exports, __webpack_require__) {
        // This file is imported into lib/wc client bundles.
        if (typeof window !== 'undefined') {
          var i;

          if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
            __webpack_require__.p = i[1]; // eslint-disable-line
          }
        }
        /***/

      }
      /******/

    })["default"]
  );
});