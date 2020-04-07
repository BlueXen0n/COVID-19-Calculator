function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covid_covid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./covid/covid.component */
    "./src/app/covid/covid.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'The-Journey';
        this.x = this.getCookie('theme');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(document.cookie);

          if (this.x == null) {
            this.setCookie("theme", "darkly");
          }

          this.DisplayTheme();
        }
      }, {
        key: "DisplayTheme",
        value: function DisplayTheme() {
          var elem1 = document.getElementById("Theme1");
          var elem2 = document.getElementById("Theme2");
          var elem3 = document.getElementById("Theme3");
          var elem4 = document.getElementById("Theme4");
          var elem5 = document.getElementById("Theme5");
          this.x = this.getCookie('theme');

          if (this.getCookie("theme") === "darkly") {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
          } else if (this.getCookie("theme") === "flatly") {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
          }
        }
      }, {
        key: "ThemeChange",
        value: function ThemeChange() {
          var elem1 = document.getElementById("Theme1");
          var elem2 = document.getElementById("Theme2");
          var elem3 = document.getElementById("Theme3");
          var elem4 = document.getElementById("Theme4");
          var elem5 = document.getElementById("Theme5");

          if (this.getCookie("theme") === "darkly") {
            this.setCookie("theme", 'flatly');
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
          } else if (this.getCookie("theme") === "flatly") {
            this.setCookie('theme', 'darkly');
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
          }
        } // export function setCookie(cname, cvalue, exdays) {
        //   var d = new Date();
        //   d.setTime(d.getTime() + (exdays*24*60*60*1000));
        //   var expires = "expires="+ d.toUTCString();
        //   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        // }

      }, {
        key: "getCookie",
        value: function getCookie(name) {
          var value = "; ".concat(document.cookie);
          var parts = value.split("; ".concat(name, "="));

          if (parts.length === 2) {
            return parts.pop().split(';').shift();
          }
        }
      }, {
        key: "setCookie",
        value: function setCookie(name, val) {
          var date = new Date();
          var value = val; // Set it expire in 7 days

          date.setTime(date.getTime() + 3600 * 1000 * 24 * 365 * 1); // Set it

          document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
        }
      }, {
        key: "ThemeOnLoad",
        value: function ThemeOnLoad() {
          var user = this.getCookie("theme");
          var elem1 = document.getElementById("Theme1");
          var elem2 = document.getElementById("Theme2");
          var elem3 = document.getElementById("Theme3");
          var elem4 = document.getElementById("Theme4");
          var elem5 = document.getElementById("Theme5");

          if (user) {
            /* Runs Reset on page load */
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-dark";
            elem2.className = "dropdown-menu bg-dark";
            elem3.className = "dropdown-item bg-dark";
            elem4.className = "dropdown-item bg-dark";
            elem5.className = "card text-center bg-dark";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/darkly/bootstrap.min.css");
          } else {
            elem1.className = "navbar navbar-expand-sm navbar-dark bg-primary";
            elem2.className = "dropdown-menu bg-primary";
            elem3.className = "dropdown-item bg-primary";
            elem4.className = "dropdown-item bg-primary";
            elem5.className = "card text-center bg-primary";
            document.getElementById('stylesheet').setAttribute('href', "https://bootswatch.com/4/flatly/bootstrap.min.css");
          }
        }
      }, {
        key: "checkCookie",
        value: function checkCookie() {
          var user = this.getCookie("theme");

          if (user === null) {
            this.setCookie("theme", user);
          } else {
            user = prompt("Please enter your name:", "");

            if (user != "" && user != null) {
              this.setCookie("theme", user);
            }
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 27,
      vars: 0,
      consts: [["id", "Theme1", 1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark"], ["ng-href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavId", "aria-controls", "collapsibleNavId", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavId", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], [1, "nav-item", "active"], ["ng-href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["ng-href", "#home", 1, "nav-link"], [1, "nav-item", "dropdown"], ["ng-href", "#", "id", "dropdownId", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "#e0e0e0"], ["id", "Theme2", "aria-labelledby", "dropdownId", 1, "dropdown-menu", "bg-dark"], ["id", "Theme3", "ng-href", "#/CURB-65", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], ["id", "Theme4", "ng-href", "#Covid19", 1, "dropdown-item", "bg-dark", 2, "color", "#fff"], [1, "form-group"], ["type", "button", "id", "customSwitch1", 1, "btn", "btn-info", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The-Journey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Calculators");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CURB-65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Covid-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() {
            return ctx.ThemeChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dark mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-covid");
        }
      },
      directives: [_covid_covid_component__WEBPACK_IMPORTED_MODULE_1__["CovidComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./curb65/curb65.component */
    "./src/app/curb65/curb65.component.ts");
    /* harmony import */


    var _covid_covid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./covid/covid.component */
    "./src/app/covid/covid.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_4__["CURB65Component"], _covid_covid_component__WEBPACK_IMPORTED_MODULE_5__["CovidComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _curb65_curb65_component__WEBPACK_IMPORTED_MODULE_4__["CURB65Component"], _covid_covid_component__WEBPACK_IMPORTED_MODULE_5__["CovidComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/covid/covid.component.ts":
  /*!******************************************!*\
    !*** ./src/app/covid/covid.component.ts ***!
    \******************************************/

  /*! exports provided: CovidComponent */

  /***/
  function srcAppCovidCovidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidComponent", function () {
      return CovidComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CovidComponent =
    /*#__PURE__*/
    function () {
      function CovidComponent() {
        _classCallCheck(this, CovidComponent);

        this.totalBthArr = 0;
        this.LevelsArr2 = 0;
        this.Levels = 0;
      }

      _createClass(CovidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Reset();
          /* Runs Reset on page load */
        }
      }, {
        key: "Print",
        value: function Print() {
          window.print();
        }
      }, {
        key: "Reset",
        value: function Reset() {
          document.getElementById("criteria_2_0-no").checked = true;
          document.getElementById("criteria_2_1-no").checked = true;
          document.getElementById("criteria_2_2-no").checked = true;
          document.getElementById("criteria_2_3-no").checked = true;
          document.getElementById("criteria_2_4-no").checked = false;
          document.getElementById("criteria_2_5-no").checked = false;
          document.getElementById("criteria_2_6-no").checked = false;
          document.getElementById("criteria_2_7-no").checked = false;
          document.getElementById("criteria_2_8-no").checked = false;
          document.getElementById("criteria_2_4-yes").checked = false;
          document.getElementById("criteria_2_5-yes").checked = false;
          document.getElementById("criteria_2_6-yes").checked = false;
          document.getElementById("criteria_2_7-yes").checked = false;
          document.getElementById("criteria_2_8-yes").checked = false;
          CovidComponent.arr1 = [0, 0, 0, 0];
          CovidComponent.arr2 = [];
          this.totalBthArr = 0;
          this.ResultsAdder();
        }
      }, {
        key: "ResultsAdder",
        value: function ResultsAdder() {
          var totalArr1 = 0;
          var totalArr2;

          for (var i in CovidComponent.arr1) {
            totalArr1 += CovidComponent.arr1[i];
          }

          for (var i in CovidComponent.arr2) {
            totalArr2 += CovidComponent.arr2[i];
          }

          this.totalBthArr = CovidComponent.test123(totalArr1); // console.log("TotalArr1=" + totalArr1)
          // console.log("TotalArr2=" + totalArr2)
          // console.log("TotalbthArr=" + this.totalBthArr)
          // console.log("Test123=" + CovidComponent.test123(totalArr1))
          // console.log("Level=" + this.Levels)
          // console.log("LevelArr2=" + this.LevelsArr2)

          console.log(CovidComponent.arr1);
          console.log(CovidComponent.arr2);
          this.Levels = this.LevelsArr2 + CovidComponent.test123(totalArr1);
          this.CheckTxtResults_2_1();

          if (CovidComponent.test123(totalArr1) > 2) {
            this.LevelsArr2 = 0;
            document.getElementById("criteria_2_4d").style.display = "block";

            if (CovidComponent.arr2[0] === 0) {
              this.totalBthArr = 4;
            }

            if (CovidComponent.arr2[0] === 1) {
              this.totalBthArr = 4;
            }

            if (CovidComponent.arr2[1] === 0) {
              this.totalBthArr = 5;
            }

            if (CovidComponent.arr2[2] === 0) {
              this.totalBthArr = 6;
            }

            if (CovidComponent.arr2[3] === 0) {
              this.totalBthArr = 7;
            } else if (CovidComponent.arr2[3] === 1) {
              this.totalBthArr = 8;
            }
          } else {
            this.LevelsArr2 = 0;
            CovidComponent.arr2 = [0, 0, 0, 0];
            document.getElementById("criteria_2_4d").style.display = "none";
            document.getElementById("criteria_2_5d").style.display = "none";
            document.getElementById("criteria_2_6d").style.display = "none";
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_4-no").checked = false;
            document.getElementById("criteria_2_5-no").checked = false;
            document.getElementById("criteria_2_6-no").checked = false;
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_4-yes").checked = false;
            document.getElementById("criteria_2_5-yes").checked = false;
            document.getElementById("criteria_2_6-yes").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
          }
        }
      }, {
        key: "CheckResults0",
        value: function CheckResults0() {
          if (document.getElementById("criteria_2_0-yes").checked === true) {
            CovidComponent.arr1[0] = 1;
            this.ResultsAdder();
          } else {
            CovidComponent.arr1[0] = 0;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults1",
        value: function CheckResults1() {
          if (document.getElementById("criteria_2_1-yes").checked === true) {
            CovidComponent.arr1[1] = 1;
            this.ResultsAdder();
          } else {
            CovidComponent.arr1[1] = 0;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults2",
        value: function CheckResults2() {
          if (document.getElementById("criteria_2_2-yes").checked === true) {
            CovidComponent.arr1[2] = 1;
            this.ResultsAdder();
          } else {
            CovidComponent.arr1[2] = 0;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults3",
        value: function CheckResults3() {
          if (document.getElementById("criteria_2_3-yes").checked === true) {
            CovidComponent.arr1[3] = 1;
            this.ResultsAdder();
          } else {
            CovidComponent.arr1[3] = 0;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults4no",
        value: function CheckResults4no() {
          if (document.getElementById("criteria_2_4-no").checked === true) {
            CovidComponent.arr2 = [];
            document.getElementById("criteria_2_5d").style.display = "none";
            document.getElementById("criteria_2_6d").style.display = "none";
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_5-no").checked = false;
            document.getElementById("criteria_2_6-no").checked = false;
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_5-yes").checked = false;
            document.getElementById("criteria_2_6-yes").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 0;
            this.ResultsAdder();
            this.ResultsTxt_2_10();
          }
        }
      }, {
        key: "CheckResults4yes",
        value: function CheckResults4yes() {
          if (document.getElementById("criteria_2_4-yes").checked === true) {
            this.ResultsAdder();
            document.getElementById("criteria_2_5d").style.display = "block";
            this.ResultsTxt_2_9();
          }
        }
      }, {
        key: "CheckResults5",
        value: function CheckResults5() {
          if (document.getElementById("criteria_2_5-yes").checked === true) {
            CovidComponent.arr2[0] = 1;
            document.getElementById("criteria_2_6d").style.display = "block";
            this.ResultsAdder();
            this.ResultsTxt_2_9();
          } else if (document.getElementById("criteria_2_5-no").checked === true) {
            CovidComponent.arr2 = [];
            document.getElementById("criteria_2_6d").style.display = "none";
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_6-no").checked = false;
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_6-yes").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 1;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults6",
        value: function CheckResults6() {
          if (document.getElementById("criteria_2_6-yes").checked === true) {
            CovidComponent.arr2[1] = 1;
            document.getElementById("criteria_2_7d").style.display = "block";
            this.ResultsAdder();
            this.ResultsTxt_2_9();
          } else if (document.getElementById("criteria_2_6-no").checked === true) {
            CovidComponent.arr2 = [1];
            document.getElementById("criteria_2_7d").style.display = "none";
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_7-no").checked = false;
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_7-yes").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 2;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults7",
        value: function CheckResults7() {
          if (document.getElementById("criteria_2_7-yes").checked === true) {
            CovidComponent.arr2[2] = 1;
            document.getElementById("criteria_2_8d").style.display = "block";
            this.ResultsAdder();
            this.ResultsTxt_2_9();
          } else if (document.getElementById("criteria_2_7-no").checked === true) {
            CovidComponent.arr2 = [1, 1];
            document.getElementById("criteria_2_8d").style.display = "none";
            document.getElementById("criteria_2_8-no").checked = false;
            document.getElementById("criteria_2_8-yes").checked = false;
            this.LevelsArr2 = 3;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckResults8",
        value: function CheckResults8() {
          if (document.getElementById("criteria_2_8-yes").checked === true) {
            CovidComponent.arr2[3] = 1;
            this.LevelsArr2 = 5;
            this.ResultsAdder();
          } else {
            CovidComponent.arr2 = [1, 1, 1];
            this.LevelsArr2 = 4;
            this.ResultsAdder();
          }
        }
      }, {
        key: "CheckTxtResults_2_1",
        value: function CheckTxtResults_2_1() {
          switch (this.Levels) {
            case 0:
              this.ResultsTxt_2_0();
              break;

            case 1:
              this.ResultsTxt_2_1();
              break;

            case 2:
              this.ResultsTxt_2_2();
              break;

            case 3:
              this.ResultsTxt_2_3();
              break;

            case 4:
              this.ResultsTxt_2_4();
              break;

            case 5:
              this.ResultsTxt_2_5();
              break;

            case 6:
              this.ResultsTxt_2_6();
              break;

            case 7:
              this.ResultsTxt_2_7();
              break;

            case 8:
              this.ResultsTxt_2_8();
              break;

            default:
              this.ResultsTxt_2_9();
              break;
          }
        }
      }, {
        key: "ResultsTxt_2_0",
        value: function ResultsTxt_2_0() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Keep patient monitored with pulse oximetry and clinical evaluation.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS consider chloroquine or hydroxychloroquine.";
          document.getElementById("Levels").innerHTML = "Level 0";
        }
      }, {
        key: "ResultsTxt_2_1",
        value: function ResultsTxt_2_1() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Provide supplemental O<sub>2</sub>. Keep patient monitored with pulse oximetry and clinical evaluation.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS chloroquine or hydroxychloroquine.";
          document.getElementById("Levels").innerHTML = "Level 1";
        }
      }, {
        key: "ResultsTxt_2_2",
        value: function ResultsTxt_2_2() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Perform CXR and ABG. Provide supplemental O<sub>2</sub>. Keep patient monitored with pulse oximetry and clinical evaluation.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS consider chloroquine or hydroxychloroquine. Consider dexamethasone¹.<br><br> ¹Consider age/comorbidities, cognitive decline.";
          document.getElementById("Levels").innerHTML = "Level 2";
        }
      }, {
        key: "ResultsTxt_2_3",
        value: function ResultsTxt_2_3() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Trial of non-invasive ventilation (CPAP/BiPAP) or high-flow nasal canula (HFNC) recommended. If above clinical criteria worsening or patient clinically worsening despite this trial, intubation recommended. Otherwise, perform CXR every 2 days and ABG twice a day.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Lopinavir/ritonavir or ritonavir-boosted darunavir PLUS consider chloroquine or hydroxychloroquine. Consider dexamethasone¹ and consider starting tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline. <br>²Inclusion criteria.";
          document.getElementById("Levels").innerHTML = "Level 3";
        }
      }, {
        key: "ResultsTxt_2_4",
        value: function ResultsTxt_2_4() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Follow ICU protocols; use local ventilator weaning protocol.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline. <br>²Inclusion criteria.";
          document.getElementById("Levels").innerHTML = "Level 4";
        }
      }, {
        key: "ResultsTxt_2_5",
        value: function ResultsTxt_2_5() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Try to minimize sedation (RASS -1 to 0). Perform SBT daily.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
          document.getElementById("Levels").innerHTML = "Level 5";
        }
      }, {
        key: "ResultsTxt_2_6",
        value: function ResultsTxt_2_6() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Try to minimize sedation (RASS -1 to 0).";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
          document.getElementById("Levels").innerHTML = "Level 6";
        }
      }, {
        key: "ResultsTxt_2_7",
        value: function ResultsTxt_2_7() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Perform best <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.mdcalc.com/static-lung-compliance-cstat-calculation\">PEEP and Compliance calculation</a>. Try to suspend NMBA. Optimize volume status.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
          document.getElementById("Levels").innerHTML = "Level 7";
        }
      }, {
        key: "ResultsTxt_2_8",
        value: function ResultsTxt_2_8() {
          document.getElementById("Management_2_1").innerHTML = "<b>Management</b>: Extreme level of medical complexity given failing other management options; defer to clinician expertise.";
          document.getElementById("Medications_2_1").innerHTML = "<b>Medications</b>: Remdesivir (if not available, lopinavir/ritonavir or boosted darunavir) PLUS Chloroquine or hydroxychloroquine PLUS considering dexamethasone¹ and tocilizumab².<br><br> ¹Consider age/comorbidities, cognitive decline.<br> ²Inclusion criteria.";
          document.getElementById("Levels").innerHTML = "Level 8";
        }
      }, {
        key: "ResultsTxt_2_9",
        value: function ResultsTxt_2_9() {
          document.getElementById("Management_2_1").innerHTML = "<b>Please fill out required fields.</b>";
          document.getElementById("Medications_2_1").innerHTML = "";
          document.getElementById("Levels").innerHTML = "";
        }
      }, {
        key: "ResultsTxt_2_10",
        value: function ResultsTxt_2_10() {
          document.getElementById("Management_2_1").innerHTML = "<b>Re-select number of criteria present and follow management.</b>";
          document.getElementById("Medications_2_1").innerHTML = "";
          document.getElementById("Levels").innerHTML = "";
        }
      }], [{
        key: "test123",
        value: function test123(Value) {
          var First4;

          if (Value === 0) {
            First4 = 0;
          } else if (Value === 1) {
            First4 = 1;
          } else if (Value === 2) {
            First4 = 2;
          } else if (Value > 2) {
            First4 = 3;
          }

          console.log("First4=" + First4);
          return First4;
        }
      }]);

      return CovidComponent;
    }();

    CovidComponent.arr1 = new Array(4);
    CovidComponent.arr2 = new Array(4);

    CovidComponent.ɵfac = function CovidComponent_Factory(t) {
      return new (t || CovidComponent)();
    };

    CovidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CovidComponent,
      selectors: [["app-covid"]],
      decls: 257,
      vars: 0,
      consts: [["id", "Covid19"], [1, "alert", "alert-dismissible", "alert-danger"], [2, "font-size", "x-large"], [1, "mb-0"], ["href", "https://www.mdcalc.com/covid-19", "target", "_blank", "rel", "noopener noreferrer", 1, "alert-link"], ["href", "https://www.mdcalc.com/covid-19/brescia-covid-respiratory-severity-scale-bcrss-interview", "target", "_blank", "rel", "noopener noreferrer", 1, "alert-link"], [1, "alert", "alert-dismissible", "alert-info"], [1, "alert", "alert-dismissible", "alert-light"], [1, "switch-field"], ["type", "radio", "id", "criteria_2_0-no", "name", "criteria_2_0", 1, "btn", "btn-outline-info", 3, "change"], ["for", "criteria_2_0-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_0-yes", "name", "criteria_2_0", 3, "change"], ["for", "criteria_2_0-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_2_1-no", "name", "criteria_2_1", 3, "change"], ["for", "criteria_2_1-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_1-yes", "name", "criteria_2_1", 3, "change"], ["for", "criteria_2_1-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_2_2-no", "name", "criteria_2_2", 3, "change"], ["for", "criteria_2_2-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_2-yes", "name", "criteria_2_2", 3, "change"], ["for", "criteria_2_2-yes", 1, "switch-field"], ["title", "Chest X-ray", 1, "tooltip1"], ["type", "radio", "id", "criteria_2_3-no", "name", "criteria_2_3", 3, "change"], ["for", "criteria_2_3-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_3-yes", "name", "criteria_2_3", 3, "change"], ["for", "criteria_2_3-yes", 1, "switch-field"], ["id", "criteria_2_4d", 2, "display", "none"], ["type", "radio", "id", "criteria_2_4-no", "name", "criteria_2_4", 3, "change"], ["for", "criteria_2_4-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_4-yes", "name", "criteria_2_4", 3, "change"], ["for", "criteria_2_4-yes", 1, "switch-field"], ["id", "criteria_2_5d", 2, "display", "none"], ["title", "Continuous mandatory ventilation", 1, "tooltip1"], ["type", "radio", "id", "criteria_2_5-no", "name", "criteria_2_5", 3, "change"], ["for", "criteria_2_5-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_5-yes", "name", "criteria_2_5", 3, "change"], ["for", "criteria_2_5-yes", 1, "switch-field"], ["id", "criteria_2_6d", 2, "display", "none"], ["href", "https://www.mdcalc.com/horowitz-index-lung-function-p-f-ratio"], ["type", "radio", "id", "criteria_2_6-no", "name", "criteria_2_6", 3, "change"], ["for", "criteria_2_6-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_6-yes", "name", "criteria_2_6", 3, "change"], ["for", "criteria_2_6-yes", 1, "switch-field"], ["id", "criteria_2_7d", 2, "display", "none"], ["type", "radio", "id", "criteria_2_7-no", "name", "criteria_2_7", 3, "change"], ["for", "criteria_2_7-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_7-yes", "name", "criteria_2_7", 3, "change"], ["for", "criteria_2_7-yes", 1, "switch-field"], ["id", "criteria_2_8d", 2, "display", "none"], ["type", "radio", "id", "criteria_2_8-no", "name", "criteria_2_8", 3, "change"], ["for", "criteria_2_8-no", 1, "switch-field"], ["type", "radio", "id", "criteria_2_8-yes", "name", "criteria_2_8", 3, "change"], ["for", "criteria_2_8-yes", 1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], ["id", "Results", 1, "card-body"], ["id", "Levels", 2, "font-size", "large"], ["id", "Management_2_1"], ["id", "Medications_2_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse", 2, "text-align", "center"], [2, "text-align", "left", "display", "inline-block"], ["href", "https://cdn-web-img.mdcalc.com/content/BRSS_A4.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", ""], [2, "text-align", "center", "display", "inline-block"], [2, "text-align", "lcenter", "display", "inline-block"], ["href", "https://www.eahp.eu/sites/default/files/linee_guida_sulla_gestione_terapeutica_e_di_supporto_per_pazienti_con_infezione_da_coronavirus_covid-19.pdf", "target", "_blank", "rel", "noopener noreferrer", "download", ""], ["href", "https://www.mdcalc.com/brescia-covid-respiratory-severity-scale-bcrss-algorithm", "target", "_blank", "rel", "noopener noreferrer", "download", ""], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://cdn-web-img.mdcalc.com/content/BRSS_A4-1.png"], ["src", "https://cdn-web-img.mdcalc.com/content/BRSS_A4-1.png", "alt", "BRSS"]],
      template: function CovidComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "COVID-19 Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IMPORTANT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Launched during COVID-19 crisis. Not externally validated. Use with caution; this is being used in Italy for assessment, trending, and treatment recommendations. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "COVID-19 Resource Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "See MDCalc's interview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " with Italian intensivist, Dr. Simone Piva, for an in-depth discussion of how the BCRSS is being used practically to simplify and communicate the respiratory status of patients.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "INSTRUCTIONS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "This algorithm is a step-wise approach to managing patients with confirmed/presumed COVID-19 pneumonia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "If not intubated, follow management and then each 4 testing criteria should be repeated to assess for improvement or deterioration. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Repetition frequency based on clinical judgment to downgrade/upgrade score.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Not only is the management important; the numerical score is used to easily compare and summarize patients to treating clinicians.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "NIV concerning for aerosolization; included in score due to ventilator scarcity in Italy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "[Patient has COVID-19 pneumonia or COVID-19 symptoms for \u22657 days] AND");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " [Patient is PCR+ OR high suspicion for COVID-19/PCR pending]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Patient wheezing OR unable to speak in full sentences while at rest/with minimal effort:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_49_listener() {
            return ctx.CheckResults0();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_52_listener() {
            return ctx.CheckResults0();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Respiratory rate >22:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_58_listener() {
            return ctx.CheckResults1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_61_listener() {
            return ctx.CheckResults1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "PaO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " <65 mmHg or SpO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " <90%: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_73_listener() {
            return ctx.CheckResults2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_76_listener() {
            return ctx.CheckResults2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Repeat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "CXR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " is significantly worsening:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_85_listener() {
            return ctx.CheckResults3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_88_listener() {
            return ctx.CheckResults3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " When >2 criteria are selected, algorithm recommends escalating to non-invasive ventilation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " (NIV/CPAP/BiPAP) or high-flow nasal cansula (HFNC), and then reassessing patient criteria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Does patient still have >2 criteria despite NIV/HFNC?:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_102_listener() {
            return ctx.CheckResults4no();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_105_listener() {
            return ctx.CheckResults4yes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Intubation recommended for worsening symptoms despite NIV/HFNC. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " With the patient intubated:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Is the intubated patient on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "CMV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_121_listener() {
            return ctx.CheckResults5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_124_listener() {
            return ctx.CheckResults5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "PaO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "/FiO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " <150 mmHg:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_139_listener() {
            return ctx.CheckResults6();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_142_listener() {
            return ctx.CheckResults6();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Patient on neuromuscular blockade (NMBA):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_149_listener() {
            return ctx.CheckResults7();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_152_listener() {
            return ctx.CheckResults7();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Patient prone or on ECMO:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_159_listener() {
            return ctx.CheckResults8();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CovidComponent_Template_input_change_162_listener() {
            return ctx.CheckResults8();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "label", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CovidComponent_Template_button_click_166_listener() {
            return ctx.Reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CovidComponent_Template_button_click_168_listener() {
            return ctx.Print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Results: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "p", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "svg", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " View More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "svg", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "*Inclusion criteria for tocilizumab:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " End of the initial phase of high viral load of COVID-19 (e.g. apyretic from >72h and/or elapsed \u22657 days after the onset of symptoms).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Worsening of respiratory exchanges, such as to require non-invasive or invasive support from ventilation (Level \u22653).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " High levels of IL-6 (>40 pg/mL); alternatively high levels of d-dimer, CRP, ferritin, and/or fibrinogen progressively increasing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "From ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Italy's latest SIMIT Guidelines.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "ADVICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Healthcare workers must be aware that COVID-19 information is rapidly changing; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " We will attempt to update this score as frequently as possible to keep up with the rapidly changing nature of this pandemic. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "While this score certainly would indicate increasing levels of respiratory severity, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, " one's local hospital recommendations or drug availability may provide different recommendations for treatment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "MANAGEMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "This score is meant to be dynamic and frequently reassessed and re-scored after interventions; ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " frequency of reassessment is by clinical judgment. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " A brand new patient in the ED may need to be reassessed every 15 minutes, for example, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "while a stable patient on the medical floor may only need reassessment every 6-12 hours. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "If a patient is assigned a new score based on these criteria, the medical and respiratory management should then change as well.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "EVIDENCE APPRAISAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " This score has not been externally validated and is being published on The-Journey as one way to easily assess and compare patients in a time of crisis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "ORIGINAL/PRIMARY REFERENCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "SIMIT Guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Brescia-COVID Treatment Algorithm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "MDCalc's BCRSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#Covid19[_ngcontent-%COMP%] { \n    text-align: center; \n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\na[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n    text-decoration: underline;\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh5[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nul[_ngcontent-%COMP%] { \n    display: inline-block; \n}\n\nol[_ngcontent-%COMP%] { \n    display: inline-block; \n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    padding: 1%;\n}\n\n#Levels[_ngcontent-%COMP%] {  \n    font-weight: bold; \n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#Theme5[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \n    position: absolute !important;\n    clip: rect(0, 0, 0, 0);\n    height: 1px; \n    width: 1px;\n    border: 0;\n    overflow: hidden;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { \n    background-color: #434f5c;\n    color: #e0e0e0;\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.507), 0 1px rgba(255, 255, 255, 0);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover { \n    cursor: pointer;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] { \n    background-color: #20adffce;\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type { \n    border-radius: 4px 0 0 4px;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type { \n    border-radius: 0 4px 4px 0;\n}\n\n.alert[_ngcontent-%COMP%] { \n    display: inline-block;\n}\n\n.tooltip1[_ngcontent-%COMP%] {\n    color: rgb(33, 118, 175);\n    border-bottom: 1px dotted rgb(33, 118, 175);\n}\n\nimg[_ngcontent-%COMP%] {\n    height: 50%;\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQvY292aWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7O0FBRXhDLFdBQVcsNkNBQTZDO0lBQ3BELGtCQUFrQjtBQUN0Qjs7QUFFQSxJQUFJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBLElBQUksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUEsS0FBSyx5QkFBeUI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSywyQkFBMkI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBLEtBQUssMkJBQTJCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBLFVBQVUsZ0NBQWdDO0lBQ3RDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsVUFBVSx3QkFBd0I7SUFDOUIsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQSxzQkFBc0IsNENBQTRDO0lBQzlELDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBLHVCQUF1Qiw0Q0FBNEM7SUFDL0QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUEsc0JBQXNCLDRDQUE0QztJQUM5RCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztBQUNwQzs7QUFFQSw0QkFBNEIsNENBQTRDO0lBQ3BFLGVBQWU7QUFDbkI7O0FBRUEsc0NBQXNDLDRDQUE0QztJQUM5RSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQSxvQ0FBb0MsNENBQTRDO0lBQzVFLDBCQUEwQjtBQUM5Qjs7QUFFQSxtQ0FBbUMsNENBQTRDO0lBQzNFLDBCQUEwQjtBQUM5Qjs7QUFFQSxTQUFTLDZDQUE2QztJQUNsRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvdmlkL2NvdmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgQ1NTIGZvdW5kIGluIC4uLy4uL3N0eWxlLmNzcyAqL1xuXG4jQ292aWQxOSB7IC8qIEFsaWducyBjb250ZW50IHRvIHRoZSBjZW50ZXIgb2YgdGhlIHNpdGUgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG5wIHsgLyogQ29tcGFjdHMgdGV4dCAqL1xuICAgIG1hcmdpbjogMC4xJTtcbn1cblxuYSB7IC8qIENoYW5nZXMgbGluayBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaDEgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaDMgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaDUgeyAvKiBDaGFuZ2VzIGhlYWRlciBjb2xvciAqL1xuICAgIGNvbG9yOiByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxudWwgeyAvKiBNb3ZlcyBEb3RzIHRvIHRoZSBsaXN0ICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbn1cblxub2wgeyAvKiBNb3ZlcyBEb3RzIHRvIHRoZSBsaXN0ICovXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbn1cblxuI2J1dHRvbjEge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4jYnV0dG9uMiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi5jYXJkLWhlYWRlciB7IC8qIENoYW5nZXMgUmVzdWx0cyBoZWFkZXIgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuI0xldmVscyB7IC8qIEdpdmVzIFJlc3VsdHMgQm9sZCBwcm9wZXJ0eSAqLyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG5cbiNSZXN1bHRzIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJvZHkgKi9cbiAgICBtYXJnaW46IC0xJTtcbn1cblxuI1RoZW1lNSB7IC8qIENoYW5nZXMgUmVzdWx0cyBib3ggKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTA3KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW46IDAuNSU7XG4gICAgY29sb3I6ICNlMGUwZTA7XG59XG5cbi5zd2l0Y2gtZmllbGQgaW5wdXQgeyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGhlaWdodDogMXB4OyBcbiAgICB3aWR0aDogMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3dpdGNoLWZpZWxkIGJ1dHRvbiB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRmNWM7XG4gICAgY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNDAwKSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsIHsgLyogQ2hhbmdlcyByYWRpbyBidXR0b25zIHRvIHRvZ2dsZSBidXR0b25zICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGY1YztcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNTA3KSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpob3ZlciB7IC8qIENoYW5nZXMgcmFkaW8gYnV0dG9ucyB0byB0b2dnbGUgYnV0dG9ucyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXRjaC1maWVsZCBpbnB1dDpjaGVja2VkICsgbGFiZWwgeyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhZGZmY2U7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uc3dpdGNoLWZpZWxkIGxhYmVsOmZpcnN0LW9mLXR5cGUgeyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpsYXN0LW9mLXR5cGUgeyAvKiBDaGFuZ2VzIHJhZGlvIGJ1dHRvbnMgdG8gdG9nZ2xlIGJ1dHRvbnMgKi9cbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cblxuLmFsZXJ0IHsgLyogTWFrZXMgaGludHMgc21hbGxlciBhbmQgaW5saW5lIHdpdGggdGV4dCAqL1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAxIHtcbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2IoMzMsIDExOCwgMTc1KTtcbn1cblxuaW1nIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-covid',
          templateUrl: './covid.component.html',
          styleUrls: ['./covid.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/curb65/curb65.component.ts":
  /*!********************************************!*\
    !*** ./src/app/curb65/curb65.component.ts ***!
    \********************************************/

  /*! exports provided: CURB65Component */

  /***/
  function srcAppCurb65Curb65ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CURB65Component", function () {
      return CURB65Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CURB65Component =
    /*#__PURE__*/
    function () {
      function CURB65Component() {
        _classCallCheck(this, CURB65Component);

        this.Points = 0;
        /* Default Points */
      }

      _createClass(CURB65Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Reset();
          /* Runs Reset on page load */
        }
      }, {
        key: "Print",
        value: function Print() {
          window.print();
        }
      }, {
        key: "Reset",
        value: function Reset() {
          document.getElementById("criteria_1_1-no").checked = true;
          document.getElementById("criteria_1_2-no").checked = true;
          document.getElementById("criteria_1_3-no").checked = true;
          document.getElementById("criteria_1_4-no").checked = true;
          document.getElementById("criteria_1_5-no").checked = true;
          /*(<HTMLInputElement>document.getElementById("pneumonia-yes")).checked = true;  Not sure if i want this ? */

          this.Points = 0;
          /* Resets score to default*/

          this.CheckPneumonia();
        }
      }, {
        key: "CheckPneumonia",
        value: function CheckPneumonia() {
          if (document.getElementById("pneumonia-no").checked === true) {
            document.getElementById("Pneumonia").style.display = 'none';
            document.getElementById("AnyInfection").style.display = 'block';
            this.CheckTxtResult_1_2();
            this.CheckS_1_1();
          } else {
            document.getElementById("Pneumonia").style.display = 'block';
            document.getElementById("AnyInfection").style.display = 'none';
            this.CheckTxtResult_1_1();
            this.CheckS_1_1();
          }
        }
      }, {
        key: "Add",
        value: function Add() {
          this.Points++;
          this.CheckPneumonia();
        }
      }, {
        key: "Sub",
        value: function Sub() {
          this.Points--;
          this.CheckPneumonia();
        }
      }, {
        key: "CheckTxtResult_1_1",
        value: function CheckTxtResult_1_1() {
          switch (this.Points) {
            case 0:
              this.ResultTxt_1_1_0();
              break;

            case 1:
              this.ResultTxt_1_1_1();
              break;

            case 2:
              this.ResultTxt_1_1_2();
              break;

            case 3:
              this.ResultTxt_1_1_3();
              break;

            case 4:
              this.ResultTxt_1_1_4();
              break;

            case 5:
              this.ResultTxt_1_1_4();
              break;
          }
        }
      }, {
        key: "CheckTxtResult_1_2",
        value: function CheckTxtResult_1_2() {
          switch (this.Points) {
            case 0:
              this.ResultTxt_1_2_0();
              break;

            case 1:
              this.ResultTxt_1_2_0();
              break;

            case 2:
              this.ResultTxt_1_2_1();
              break;

            case 3:
              this.ResultTxt_1_2_1();
              break;

            case 4:
              this.ResultTxt_1_2_2();
              break;

            case 5:
              this.ResultTxt_1_2_2();
              break;
          }
        }
      }, {
        key: "CheckS_1_1",
        value: function CheckS_1_1() {
          switch (this.Points) {
            case 1:
              document.getElementById("Point").innerHTML = "Point";
              break;

            default:
              document.getElementById("Point").innerHTML = "Points";
              break;
          }
        }
      }, {
        key: "ResultTxt_1_1_0",
        value: function ResultTxt_1_1_0() {
          document.getElementById("Mortality_1_1").innerHTML = "Low risk group: 0.6% 30-day mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider outpatient treatment.";
        }
      }, {
        key: "ResultTxt_1_1_1",
        value: function ResultTxt_1_1_1() {
          document.getElementById("Mortality_1_1").innerHTML = "Low risk group: 2.7% 30-day mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider outpatient treatment.";
        }
      }, {
        key: "ResultTxt_1_1_2",
        value: function ResultTxt_1_1_2() {
          document.getElementById("Mortality_1_1").innerHTML = "Moderate risk group: 6.8% 30-day mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment or outpatient with close followup.";
        }
      }, {
        key: "ResultTxt_1_1_3",
        value: function ResultTxt_1_1_3() {
          document.getElementById("Mortality_1_1").innerHTML = "Severe risk group: 14.0% 30-day mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
        }
      }, {
        key: "ResultTxt_1_1_4",
        value: function ResultTxt_1_1_4() {
          document.getElementById("Mortality_1_1").innerHTML = "Highest risk group: 27.8% 30-day mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
        }
      }, {
        key: "ResultTxt_1_2_0",
        value: function ResultTxt_1_2_0() {
          document.getElementById("Mortality_1_1").innerHTML = "Low risk group: < 5% mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider outpatient treatment.";
        }
      }, {
        key: "ResultTxt_1_2_1",
        value: function ResultTxt_1_2_1() {
          document.getElementById("Mortality_1_1").innerHTML = "Moderate risk group: < 10% mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment or outpatient with close followup.";
        }
      }, {
        key: "ResultTxt_1_2_2",
        value: function ResultTxt_1_2_2() {
          document.getElementById("Mortality_1_1").innerHTML = "Highest risk group: 15-30% mortality.";
          document.getElementById("Treatment_1_1").innerHTML = "Consider inpatient treatment with possible intensive care admission.";
        }
      }]);

      return CURB65Component;
    }();

    CURB65Component.ɵfac = function CURB65Component_Factory(t) {
      return new (t || CURB65Component)();
    };

    CURB65Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CURB65Component,
      selectors: [["app-curb65"]],
      decls: 136,
      vars: 1,
      consts: [["id", "CURB65"], [1, "switch-field"], ["type", "radio", "id", "pneumonia-yes", "name", "pneumonia", "checked", "", 3, "change"], ["for", "pneumonia-yes", 1, "switch-field"], ["type", "radio", "id", "pneumonia-no", "name", "pneumonia", 3, "change"], ["for", "pneumonia-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_1-no", "name", "criteria_1_1", "checked", "", 3, "change"], ["for", "criteria_1_1-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_1-yes", "name", "criteria_1_1", 3, "change"], ["for", "criteria_1_1-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_2-no", "name", "criteria_1_2", "checked", "", 3, "change"], ["for", "criteria_1_2-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_2-yes", "name", "criteria_1_2", 3, "change"], ["for", "criteria_1_2-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_3-no", "name", "criteria_1_3", "checked", "", 3, "change"], ["for", "criteria_1_3-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_3-yes", "name", "criteria_1_3", 3, "change"], ["for", "criteria_1_3-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_4-no", "name", "criteria_1_4", "checked", "", 3, "change"], ["for", "criteria_1_4-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_4-yes", "name", "criteria_1_4", 3, "change"], ["for", "criteria_1_4-yes", 1, "switch-field"], ["type", "radio", "id", "criteria_1_5-no", "name", "criteria_1_5", "checked", "", 3, "change"], ["for", "criteria_1_5-no", 1, "switch-field"], ["type", "radio", "id", "criteria_1_5-yes", "name", "criteria_1_5", 3, "change"], ["for", "criteria_1_5-yes", 1, "switch-field"], ["type", "button", "id", "button1", 3, "click"], ["type", "button", "id", "button2", 3, "click"], ["id", "ResultsBox"], ["id", "Theme5", 1, "card", "text-center", "bg-dark", 2, "display", "inline-block"], [1, "card-header"], [1, "card-body"], ["id", "Results"], ["id", "BoldResult"], ["id", "Point"], ["id", "Mortality_1_1"], ["id", "Treatment_1_1"], ["type", "button", "data-toggle", "collapse", "data-target", "#MedText", "aria-expanded", "false", "aria-controls", "MedText", 1, "btn", "btn-outline-info"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z", "clip-rule", "evenodd"], ["id", "MedText", 1, "collapse"], ["id", "Pneumonia"], ["href", "https://en.wikipedia.org/wiki/CURB-65", "target", "_blank"], [2, "list-style-type", "none"], ["id", "AnyInfection"]],
      template: function CURB65Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CURB-65 Calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Infection type:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_6_listener() {
            return ctx.CheckPneumonia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pneumonia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_9_listener() {
            return ctx.CheckPneumonia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Any infection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confusion:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_15_listener() {
            return ctx.Sub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_18_listener() {
            return ctx.Add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BUN > 19 mg/dL (> 7 mmol/L):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_24_listener() {
            return ctx.Sub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_27_listener() {
            return ctx.Add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Respiratory Rate \u2265 30:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_33_listener() {
            return ctx.Sub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_36_listener() {
            return ctx.Add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Systolic BP < 90 mmHg or Diastolic BP \u2264 60 mmHg:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_42_listener() {
            return ctx.Sub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_45_listener() {
            return ctx.Add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Age \u2265 65:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_51_listener() {
            return ctx.Sub();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CURB65Component_Template_input_change_54_listener() {
            return ctx.Add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CURB65Component_Template_button_click_58_listener() {
            return ctx.Reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CURB65Component_Template_button_click_60_listener() {
            return ctx.Print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Results: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " View More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Pneumonia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "The risk of death at 30 days increases as the score increases:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "Ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "0\u20140.6%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "1\u20142.7%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "2\u20146.8%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "3\u201414.0%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "4\u201427.8%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "5\u201427.8%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "CURB-65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " is used as a means of deciding the action that is needed to be taken for that patient.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "Ul", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "0-1: Treat as an outpatient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "2: Consider a short stay in hospital or watch very closely as an outpatient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "3-5: Requires hospitalization with consideration as to whether they need to be in the intensive care unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Any infection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Patients with any type of infection (half of the patients had pneumonia), the risk of death increases as the score increases:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "Ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "0 to 1 < 5% mortality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "2 to 3 < 10% mortality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "4 to 5 15-30% mortality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "The ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "CURB-65");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " is used as a means of deciding the action that is needed to be taken for that patient.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "Ul", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "0-1: Treat as an outpatient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "2-3: Consider a short stay in hospital or watch very closely as an outpatient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "4-5: Requires hospitalization with consideration as to whether they need to be in the intensive care unit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Points, " ");
        }
      },
      styles: ["#CURB65[_ngcontent-%COMP%] {  \n    text-align: center;\n}\n\np[_ngcontent-%COMP%] { \n    margin: 0.1%;\n}\n\na[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh1[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nh3[_ngcontent-%COMP%] { \n    color: rgb(33, 118, 175);\n}\n\nul[_ngcontent-%COMP%] { \n    display: inline;\n}\n\n#button1[_ngcontent-%COMP%] {\n    border-radius: 4px 0 0 4px;\n}\n\n#button2[_ngcontent-%COMP%] {\n    border-radius: 0 4px 4px 0;\n}\n\n.card-header[_ngcontent-%COMP%] { \n    font-weight: bold;\n    padding: 1%;\n}\n\n#BoldResult[_ngcontent-%COMP%] {  \n    font-weight: bold;\n}\n\n#Results[_ngcontent-%COMP%] { \n    margin: -1%;\n}\n\n#ResultsBox[_ngcontent-%COMP%] { \n    border: 1px solid rgba(128, 128, 128, 0.507);\n    display: inline-flex;\n    margin: 0.5%;\n    color: #e0e0e0;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    position: absolute !important;\n    clip: rect(0, 0, 0, 0);\n    height: 1px;\n    width: 1px;\n    border: 0;\n    overflow: hidden;\n}\n\n.switch-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #434f5c;\n    color: rgb(231, 231, 231);\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.329);\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.400), 0 1px rgba(255, 255, 255, 0.1);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    background-color: #434f5c;\n    color: #e0e0e0;\n    line-height: 1;\n    text-align: center;\n    padding: 8px 16px;\n    margin-right: -1px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: inset 1px 2px 4px rgba(0, 0, 0, 0.507), 0 1px rgba(255, 255, 255, 0);\n    transition: all 0.1s ease-in-out;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.switch-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n    background-color: #20adffce;\n    box-shadow: none;\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-of-type {\n    border-radius: 4px 0 0 4px;\n}\n\n.switch-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-of-type {\n    border-radius: 0 4px 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VyYjY1L2N1cmI2NS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3Qzs7QUFFeEMsV0FBVyw2Q0FBNkM7SUFDcEQsa0JBQWtCO0FBQ3RCOztBQUVBLElBQUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsSUFBSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBLEtBQUsseUJBQXlCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQSxLQUFLLHlCQUF5QjtJQUMxQix3QkFBd0I7QUFDNUI7O0FBRUEsS0FBSywyQkFBMkI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQSxlQUFlLDJCQUEyQjtJQUN0QyxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBLGNBQWMsZ0NBQWdDO0lBQzFDLGlCQUFpQjtBQUNyQjs7QUFFQSxXQUFXLHlCQUF5QjtJQUNoQyxXQUFXO0FBQ2Y7O0FBRUEsY0FBYyx3QkFBd0I7SUFDbEMsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGdGQUFnRjtJQUNoRixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZ0ZBQWdGO0lBQ2hGLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2N1cmI2NS9jdXJiNjUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBDU1MgZm91bmQgaW4gLi4vLi4vc3R5bGUuY3NzICovXG5cbiNDVVJCNjUgeyAgLyogQWxpZ25zIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2l0ZSAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7IC8qIENvbXBhY3RzIHRleHQgKi9cbiAgICBtYXJnaW46IDAuMSU7XG59XG5cbmEgeyAvKiBDaGFuZ2VzIGxpbmsgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgxIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbmgzIHsgLyogQ2hhbmdlcyBoZWFkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogcmdiKDMzLCAxMTgsIDE3NSk7XG59XG5cbnVsIHsgLyogTW92ZXMgRG90cyB0byB0aGUgbGlzdCAqL1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuI2J1dHRvbjEge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4jYnV0dG9uMiB7XG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG59XG5cbi5jYXJkLWhlYWRlciB7IC8qIENoYW5nZXMgUmVzdWx0cyBoZWFkZXIgKi9cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuI0JvbGRSZXN1bHQgeyAvKiBHaXZlcyBSZXN1bHRzIEJvbGQgcHJvcGVydHkgKi8gXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNSZXN1bHRzIHsgLyogQ2hhbmdlcyBSZXN1bHRzIGJvZHkgKi9cbiAgICBtYXJnaW46IC0xJTtcbn1cblxuI1Jlc3VsdHNCb3ggeyAvKiBDaGFuZ2VzIFJlc3VsdHMgYm94ICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUwNyk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luOiAwLjUlO1xuICAgIGNvbG9yOiAjZTBlMGUwO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zd2l0Y2gtZmllbGQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM0ZjVjO1xuICAgIGNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjQwMCksIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGY1YztcbiAgICBjb2xvcjogI2UwZTBlMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNTA3KSwgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3dpdGNoLWZpZWxkIGlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYWRmZmNlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLnN3aXRjaC1maWVsZCBsYWJlbDpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CURB65Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-curb65',
          templateUrl: './curb65.component.html',
          styleUrls: ['./curb65.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/bluexen0n/MemePage/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map