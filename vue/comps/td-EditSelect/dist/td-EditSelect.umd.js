"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["td-EditSelect"] = factory();else root["td-EditSelect"] = factory();
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


        var setPublicPath = __webpack_require__("e6e2"); // CONCATENATED MODULE: /Users/guy/Development/www/titus-moodle/moodle/local/tlcore/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/guy/Development/www/titus-moodle/moodle/local/tlcore/vue/comps/td-EditSelect/node_modules/.cache/vue-loader","cacheIdentifier":"2aa12d38-vue-loader-template"}!/usr/local/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/guy/Development/www/titus-moodle/moodle/local/tlcore/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/guy/Development/www/titus-moodle/moodle/local/tlcore/node_modules/vue-loader/lib??vue-loader-options!./td-EditSelect.vue?vue&type=template&id=da211ba6&


        var render = function render() {
          var _vm = this;

          var _h = _vm.$createElement;

          var _c = _vm._self._c || _h;

          return _c('div', {
            staticClass: "td-edit-select"
          }, [_c('select', {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: _vm.val,
              expression: "val"
            }],
            staticClass: "mr-2",
            attrs: {
              "disabled": this.row.updating
            },
            on: {
              "change": [function ($event) {
                var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
                  return o.selected;
                }).map(function (o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val;
                });
                _vm.val = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
              }, function ($event) {
                _vm.onChange($event);
              }]
            }
          }, _vm._l(_vm.opts, function (option) {
            return _c('option', {
              key: option.value,
              domProps: {
                "value": option.value
              }
            }, [_vm._v(_vm._s(option.text))]);
          })), _vm.changed ? _c('i', {
            staticClass: "fa fa-check-circle",
            attrs: {
              "tabindex": "0",
              "role": "button",
              "aria-label": "Confirm",
              "title": "Confirm"
            },
            on: {
              "click": _vm.confirm,
              "keyup": function keyup($event) {
                if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                  return null;
                }

                return _vm.confirm($event);
              }
            }
          }) : _vm._e(), this.row.updating ? _c('i', {
            staticClass: "fa fa-spinner fa-pulse"
          }) : _vm._e()]);
        };

        var staticRenderFns = []; // CONCATENATED MODULE: ./td-EditSelect.vue?vue&type=template&id=da211ba6&
        // CONCATENATED MODULE: /Users/guy/Development/www/titus-moodle/moodle/local/tlcore/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/guy/Development/www/titus-moodle/moodle/local/tlcore/node_modules/vue-loader/lib??vue-loader-options!./td-EditSelect.vue?vue&type=script&lang=js&
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
        //
        //
        //
        //
        //

        /* harmony default export */

        var lib_vue_loader_options_td_EditSelectvue_type_script_lang_js_ = {
          props: ["value", "field", "row", "xprops", "options"],
          data: function data() {
            return {
              val: this.value,
              changed: false,
              // The options.options looks odd but here's an explanation -
              // this.options <- that is just generally optional things that could be passed into
              // any dynamic component - e.g. this.options.disabled = true;
              // this.options.options <- these are the select box options.
              // Capeesh?
              opts: this.options && this.options.options ? this.options.options : null
            };
          },
          updated: function updated() {
            // Val is a data property local to this child component.
            // However, when the parent component updates the child's data, we need to also update
            // val, providing it hasn't been changed by the child component.
            if (!this.changed) {
              this.val = this.value;
            }
          },
          methods: {
            onChange: function onChange($event) {
              this.changed = true;
            },
            confirm: function confirm() {
              this.changed = false;
              this.xprops.eventbus.$emit('SELECT_CHANGE_CONFIRMED', {
                row: this.row,
                val: this.val
              });
            }
          }
        }; // CONCATENATED MODULE: ./td-EditSelect.vue?vue&type=script&lang=js&

        /* harmony default export */

        var td_EditSelectvue_type_script_lang_js_ = lib_vue_loader_options_td_EditSelectvue_type_script_lang_js_; // CONCATENATED MODULE: /Users/guy/Development/www/titus-moodle/moodle/local/tlcore/node_modules/vue-loader/lib/runtime/componentNormalizer.js

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
        } // CONCATENATED MODULE: ./td-EditSelect.vue

        /* normalize component */


        var component = normalizeComponent(td_EditSelectvue_type_script_lang_js_, render, staticRenderFns, false, null, null, null);
        /* harmony default export */

        var td_EditSelect = component.exports; // CONCATENATED MODULE: /usr/local/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

        /* harmony default export */

        var entry_lib = __webpack_exports__["default"] = td_EditSelect;
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