(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/heatmap.worker.ts":
/*!********************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!./src/app/heatmap.worker.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0-es2015.worker.js"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-cases/map-cases.component */ "./src/app/map-cases/map-cases.component.ts");
/* harmony import */ var _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-cases/list-cases.component */ "./src/app/list-cases/list-cases.component.ts");







const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], data: { text: 'main' } },
    { path: 'map-cases', component: _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_3__["MapCasesComponent"], data: { text: 'active-cases-map' } },
    { path: 'list-cases', component: _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_4__["ListCasesComponent"], data: { text: 'list-cases' } }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostAttrs: [1, "app"], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".app {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLmFwcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiOjpuZy1kZWVwIC5hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                host: { class: 'app' }
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! igniteui-angular-charts */ "./node_modules/igniteui-angular-charts/__ivy_ngcc__/fesm2015/igniteui-angular-charts.js");
/* harmony import */ var igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! igniteui-angular-maps */ "./node_modules/igniteui-angular-maps/__ivy_ngcc__/fesm2015/igniteui-angular-maps.js");
/* harmony import */ var _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-cases/map-cases.component */ "./src/app/map-cases/map-cases.component.ts");
/* harmony import */ var _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-cases/list-cases.component */ "./src/app/list-cases/list-cases.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
            igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__["IgxGeographicMapCoreModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonGroupModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
            igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__["IgxGeographicMapModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxExpansionPanelModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxBottomNavModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxAvatarModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartCoreModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartCategoryModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartAnnotationModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCalloutLayerModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCrosshairLayerModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinalValueLayerModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartInteractivityModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLegendModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxTimeXAxisModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxNumericXAxisModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryXAxisModule"],
            igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinancialChartModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_9__["MapCasesComponent"],
        _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_10__["ListCasesComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__["IgxGeographicMapCoreModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonGroupModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
        igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__["IgxGeographicMapModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxExpansionPanelModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxBottomNavModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxAvatarModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartCoreModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartCategoryModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartAnnotationModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCalloutLayerModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCrosshairLayerModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinalValueLayerModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartInteractivityModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLegendModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxTimeXAxisModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxNumericXAxisModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryXAxisModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinancialChartModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_9__["MapCasesComponent"],
                    _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_10__["ListCasesComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__["IgxGeographicMapCoreModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonGroupModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
                    igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__["IgxGeographicMapModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxExpansionPanelModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxBottomNavModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxAvatarModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartCoreModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartCategoryModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartAnnotationModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCalloutLayerModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCrosshairLayerModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinalValueLayerModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartInteractivityModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLegendModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxTimeXAxisModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxNumericXAxisModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryXAxisModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinancialChartModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "app__footer"], [1, "app__footer-item"], [1, "app__footer-item", "app__footer-item--info"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Last updated at (M/D/YYYY)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "03/12/2020 12:53:03 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data source: WHO, National Health Commission of the People\u2019s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "built with Ignite UI for Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.app__footer[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.app__footer-item[_ngcontent-%COMP%] {\n  line-height: normal;\n  font-size: 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: left;\n}\n\n.app__footer-item--info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxEZXZcXENPVklELTE5LURhc2hib2FyZC9ub2RlX21vZHVsZXNcXGlnbml0ZXVpLWFuZ3VsYXJcXGxpYlxcY29yZVxcc3R5bGVzXFxiYXNlXFx1dGlsaXRpZXNcXF9xdWlya3Muc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL0Q6XFxEZXZcXENPVklELTE5LURhc2hib2FyZC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9EOlxcRGV2XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXF92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBQTtBQ0RKOztBQ0FBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHNCQUFBO01BQUEsOEJBQUE7RUFDQSxhQ0ZRO0VER1IsK0JDRWtCO0FGQ3BCOztBQ0FBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxnQkFBQTtBREdGOztBQ0ZFO0VBQ0UsaUJBQUE7QURJSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGhhY2sgZm9yIGJpbmRpbmcgdG8gW2hpZGRlbl0gcHJvcGVydHlcbi8vIG5vdCB3b3JraW5nIFxuW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiIsIltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXBwX19mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5hcHBfX2Zvb3Rlci1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hcHBfX2Zvb3Rlci1pdGVtLS1pbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59IiwiQGltcG9ydCBcIi4uL3ZhcnNcIjtcclxuXHJcbi5hcHBfX2Zvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAkYXBwLWdhcDtcclxuICBiYWNrZ3JvdW5kOiAkZm9vdGVyLWJhY2tncm91bmQ7XHJcbn1cclxuXHJcbi5hcHBfX2Zvb3Rlci1pdGVtIHtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICYtLWluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJ+aWduaXRldWktYW5ndWxhci9saWIvY29yZS9zdHlsZXMvYmFzZS9pbmRleFwiO1xyXG5AaW1wb3J0IFwicGFsZXR0ZXNcIjtcclxuXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDgwcHg7XHJcbiRhcHAtZ2FwOiAxNnB4O1xyXG5cclxuJGNvbmZpcm1lZC1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2luZm8nKTtcclxuJGRlYXRocy1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2Vycm9yJyk7XHJcbiRyZWNvdmVyZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdWNjZXNzJyk7XHJcbiRmb290ZXItYmFja2dyb3VuZDogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2dyYXlzJywgMzAwKTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");



class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [[1, "app__header"], ["title", "Coronavirus COVID-19 Global Cases"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "igx-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxNavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/list-cases/list-cases.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-cases/list-cases.component.ts ***!
  \****************************************************/
/*! exports provided: ListCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCasesComponent", function() { return ListCasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListCasesComponent_igx_list_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "igx-list-item", null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, item_r8.value));
} }
class ListCasesComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.dataSets = ['Confirmed', 'Recovered', 'Deaths'];
    }
    ngOnInit() {
        if (this.type === 'Confirmed') {
            this.loadDataSet(0);
        }
        if (this.type === 'Recovered') {
            this.loadDataSet(1);
        }
        if (this.type === 'Deaths') {
            this.loadDataSet(2);
        }
    }
    loadDataSet(index) {
        this.dataRequest$ = this.dataService.getDataSet(index);
        this.dataRequest$.subscribe(csvData => {
            this.transformData(csvData);
        });
    }
    transformData(data) {
        const csvLines = data.split('\n');
        const listData = [];
        let totalNumber = 0;
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(',');
            const country2 = columns[1];
            const value2 = parseInt(columns[columns.length - 1], 10);
            const listItem = { country: country2, value: value2 };
            totalNumber += value2;
            listData.push(listItem);
        }
        this.totalNumber = totalNumber;
        this.data = listData.sort((a, b) => {
            return b.value - a.value;
        });
    }
}
ListCasesComponent.ɵfac = function ListCasesComponent_Factory(t) { return new (t || ListCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["RemoteDataService"])); };
ListCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCasesComponent, selectors: [["app-list-cases"]], hostAttrs: [1, "app__list"], inputs: { type: "type" }, decls: 11, vars: 5, consts: [[1, "app__list-holder"], [1, "app__card-header", "app__card-header--info"], ["igxCardHeaderTitle", ""], ["igxCardHeaderSubtitle", ""], [1, "app__card-content"], [1, "app__list-inner"], [4, "ngFor", "ngForOf"], ["item", ""], ["igxListLineTitle", ""], ["igxListAction", ""]], template: function ListCasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "igx-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "igx-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "igx-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "igx-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "igx-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListCasesComponent_igx_list_item_10_Template, 7, 4, "igx-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.totalNumber));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardHeaderComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardHeaderTitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardHeaderSubtitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxDividerDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardContentDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListItemComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListLineTitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListActionDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__list {\n  height: 100%;\n  padding: 16px;\n}\n\n  .app__list--deaths .igx-card-header__title {\n  color: #ff134a;\n}\n\n  .app__list--recovered .igx-card-header__title {\n  color: #4eb862;\n}\n\n  .app__list--confirmed .igx-card-header__title {\n  color: #1377d5;\n}\n\n  .app__list + .app__list {\n  padding-left: 0;\n}\n\n  .app__list .app__list-holder {\n  height: 100%;\n}\n\n  .app__list .app__card-header {\n  min-height: 80px;\n}\n\n  .app__list .app__card-content {\n  height: calc(100% - 80px);\n  overflow: auto;\n  padding: 0;\n}\n\n  .app__list .app__list-inner {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1jYXNlcy9EOlxcRGV2XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpZ25pdGV1aS1hbmd1bGFyXFxsaWJcXGNvcmVcXHN0eWxlc1xcYmFzZVxcdXRpbGl0aWVzXFxfcXVpcmtzLnNjc3MiLCJzcmMvYXBwL2xpc3QtY2FzZXMvbGlzdC1jYXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC1jYXNlcy9EOlxcRGV2XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXGxpc3QtY2FzZXNcXGxpc3QtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QtY2FzZXMvRDpcXERldlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFxfdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0JBQUE7QUNESjs7QUNBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FER0o7O0FDQU07RUFDRSxjQ0RPO0FGR2Y7O0FDR007RUFDRSxjQ05VO0FGS2xCOztBQ01NO0VBQ0UsY0NkVTtBRlVsQjs7QUNRSTtFQUNFLGVBQUE7QUROTjs7QUNTSTtFQUNFLFlBQUE7QURQTjs7QUNVSTtFQUNFLGdCQzlCZTtBRnNCckI7O0FDV0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FEVE47O0FDWUk7RUFDRSxjQUFBO0FEVk4iLCJmaWxlIjoic3JjL2FwcC9saXN0LWNhc2VzL2xpc3QtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGhhY2sgZm9yIGJpbmRpbmcgdG8gW2hpZGRlbl0gcHJvcGVydHlcbi8vIG5vdCB3b3JraW5nIFxuW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiIsIltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFwcF9fbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0LS1kZWF0aHMgLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogI2ZmMTM0YTtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0LS1yZWNvdmVyZWQgLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogIzRlYjg2Mjtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0LS1jb25maXJtZWQgLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xuICBjb2xvcjogIzEzNzdkNTtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0ICsgLmFwcF9fbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0IC5hcHBfX2xpc3QtaG9sZGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOjpuZy1kZWVwIC5hcHBfX2xpc3QgLmFwcF9fY2FyZC1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuOjpuZy1kZWVwIC5hcHBfX2xpc3QgLmFwcF9fY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLmFwcF9fbGlzdCAuYXBwX19saXN0LWlubmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiQGltcG9ydCBcIi4uL3ZhcnNcIjtcclxuOjpuZy1kZWVwIHtcclxuICAuYXBwX19saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6ICRhcHAtZ2FwO1xyXG5cclxuICAgICYtLWRlYXRocyB7XHJcbiAgICAgIC5pZ3gtY2FyZC1oZWFkZXJfX3RpdGxle1xyXG4gICAgICAgIGNvbG9yOiAkZGVhdGhzLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi0tcmVjb3ZlcmVkIHtcclxuICAgICAgLmlneC1jYXJkLWhlYWRlcl9fdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICRyZWNvdmVyZWQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1jb25maXJtZWQge1xyXG4gICAgICAuaWd4LWNhcmQtaGVhZGVyX190aXRsZXtcclxuICAgICAgICBjb2xvcjogJGNvbmZpcm1lZC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICsgLmFwcF9fbGlzdCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuYXBwX19saXN0LWhvbGRlciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuYXBwX19jYXJkLWhlYWRlciB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6ICRjYXJkLWhlYWRlci1oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9fY2FyZC1jb250ZW50IHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRjYXJkLWhlYWRlci1oZWlnaHR9KTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9fbGlzdC1pbm5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwifmlnbml0ZXVpLWFuZ3VsYXIvbGliL2NvcmUvc3R5bGVzL2Jhc2UvaW5kZXhcIjtcclxuQGltcG9ydCBcInBhbGV0dGVzXCI7XHJcblxyXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA4MHB4O1xyXG4kYXBwLWdhcDogMTZweDtcclxuXHJcbiRjb25maXJtZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdpbmZvJyk7XHJcbiRkZWF0aHMtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdlcnJvcicpO1xyXG4kcmVjb3ZlcmVkLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnc3VjY2VzcycpO1xyXG4kZm9vdGVyLWJhY2tncm91bmQ6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdncmF5cycsIDMwMCk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-cases',
                templateUrl: './list-cases.component.html',
                styleUrls: ['./list-cases.component.scss'],
                host: { class: 'app__list' }
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["RemoteDataService"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-cases/list-cases.component */ "./src/app/list-cases/list-cases.component.ts");
/* harmony import */ var _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map-cases/map-cases.component */ "./src/app/map-cases/map-cases.component.ts");
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! igniteui-angular-charts */ "./node_modules/igniteui-angular-charts/__ivy_ngcc__/fesm2015/igniteui-angular-charts.js");









const _c0 = ["map"];
const _c1 = ["confirmedList"];
const _c2 = ["recoveredList"];
const _c3 = ["deathsList"];
const _c4 = ["chart"];
const _c5 = ["xAxis"];
const _c6 = ["yAxis"];
class MainComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.chartData = [];
        this.dailyData = [];
        this.dailyConfirmedCases = new Map();
        this.dailyRecoveredCases = new Map();
    }
    ngOnInit() {
        this.dataRequest$ = this.dataService.getDataSet(0);
        this.dataRequest$.subscribe(csvData => {
            const csvLines = csvData.split('\n');
            this.dailyConfirmedCases = this.fillData(csvLines);
            // Transfor the data for Active cases Chart
            for (const item of this.dailyConfirmedCases) {
                this.dailyData.push({ date: new Date(item[0]), activeCases: item[1] });
            }
        });
        this.dataRequest$ = this.dataService.getDataSet(1);
        this.dataRequest$.subscribe(csvData => {
            const csvLines = csvData.split('\n');
            this.dailyRecoveredCases = this.fillData(csvLines);
            // Transfor the data for Active cases Chart
            let i = 0;
            for (const item of this.dailyRecoveredCases) {
                this.dailyData[i].recoveredCases = item[1];
                i++;
            }
            // Push/Assign the data to Active cases Chart
            this.chartData = this.dailyData;
        });
    }
    fillData(csvData) {
        let columns = [];
        let day = null;
        const cases = new Map();
        // tslint:disable-next-line: prefer-for-of
        for (let rowIdx = 0; rowIdx < csvData.length; rowIdx++) {
            columns = csvData[rowIdx].replace(', ', ' ').split(',');
            for (let columnIdx = 4; columnIdx <= columns.length - 1; columnIdx++) {
                if (rowIdx === 0) {
                    day = new Date(columns[columnIdx]).toUTCString();
                    cases.set(day, 0);
                }
                else {
                    const compound = cases.get(new Date(csvData[0].split(',')[columnIdx]).toUTCString()) +
                        parseInt(columns[columnIdx], 10);
                    cases.set(new Date(csvData[0].split(',')[columnIdx]).toUTCString(), compound);
                }
            }
        }
        // Calculate daily difference.
        for (let index = 0; index < cases.size; index++) {
            let newCasesCount = 0;
            const currentElementKey = Array.from(cases.keys())[index];
            const currentElementValue = cases.get(currentElementKey);
            const nextElementKey = Array.from(cases.keys())[index + 1];
            const nextElementValue = cases.get(nextElementKey);
            if (currentElementValue < nextElementValue) {
                newCasesCount = nextElementValue - currentElementValue;
                cases.set(currentElementKey, newCasesCount);
            }
            else {
                cases.set(currentElementKey, 0);
            }
        }
        return cases;
    }
    ngOnDestroy() {
        if (this.dataRequest$) {
            this.dataRequest$.unsubscribe();
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["RemoteDataService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxExpansionPanelComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmedList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.recoveredList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.deathsList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.xAxis = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yAxis = _t.first);
    } }, hostAttrs: [1, "app__main"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_data_service__WEBPACK_IMPORTED_MODULE_2__["RemoteDataService"]])], decls: 29, vars: 6, consts: [[1, "app__main-inner"], ["type", "Confirmed", 1, "app__list--confirmed"], ["confirmedList", ""], [1, "app__col", "app__col--map"], ["map", ""], [1, "app__col", "app__col--stats"], [1, "app__row", "app__list-stack"], ["type", "Deaths", 1, "app__list--deaths"], ["deathsList", ""], ["type", "Recovered", 1, "app__list--recovered"], ["recoveredList", ""], [1, "app__charts"], ["tabsType", "fixed", 1, "app__charts-tabs"], ["label", "actual"], ["label", "logarithmic"], ["label", "daily"], [1, "app__chart-wrapper"], ["orientation", "Horizontal", 1, "app__charts-legend"], ["legend", ""], [1, "app__chart-component"], ["isHorizontalZoomEnabled", "true", 1, "app__charts-chart", 3, "legend", "dataSource"], ["chart", ""], ["title", "New and recovered cases"], ["yAxis", ""], ["label", "date", "title", "Date"], ["xAxis", ""], ["valueMemberPath", "activeCases", "labelMemberPath", "date", "title", "New Confirmed Cases", "showDefaultTooltip", "true", 3, "xAxis", "yAxis"], ["valueMemberPath", "recoveredCases", "labelMemberPath", "date", "title", "Recovered Cases", "showDefaultTooltip", "true", 3, "xAxis", "yAxis"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-list-cases", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-map-cases", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-list-cases", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-list-cases", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "igx-tabs", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "igx-tabs-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "igx-tabs-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "igx-tabs-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "igx-legend", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "igx-data-chart", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "igx-numeric-y-axis", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "igx-category-x-axis", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "igx-column-series", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "igx-column-series", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("legend", _r14)("dataSource", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xAxis", _r17)("yAxis", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("xAxis", _r17)("yAxis", _r16);
    } }, directives: [_list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_3__["ListCasesComponent"], _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_4__["MapCasesComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxTabsComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxTabsGroupComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__["IgxLegendComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__["IgxDataChartComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__["IgxNumericYAxisComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__["IgxCategoryXAxisComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_5__["IgxColumnSeriesComponent"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__main {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 0%;\n      flex: 1 0 0%;\n  height: 100%;\n  overflow: hidden;\n}\n\n  .app__main-inner {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n  .app__list-stack {\n  max-height: 50%;\n}\n\n  .app__row {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n  .app__charts-legend {\n  padding: 8px 0;\n}\n\n  .ig-chart-legend-items-list,   .ig-chart-legend-item {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-align: center !important;\n      align-items: center !important;\n}\n\n  .ig-chart-legend-item td {\n  margin-right: 4px !important;\n  padding: 0 !important;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n  .app__col {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n  .app__col--stats {\n  height: 100%;\n}\n\n  .app__col--map {\n  padding: 16px 0;\n  height: 100%;\n  -ms-flex: 1;\n      flex: 1;\n}\n\n  .app__charts {\n  padding: 0 16px 16px 16px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  max-height: 50%;\n}\n\n  .app__chart-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n  .app__charts-tabs {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n  .app__charts-tabs > div {\n  height: 100%;\n}\n\n  .app__charts-tabs .igx-tabs__content-fluid,   .app__charts-tabs .igx-tabs__content-fixed {\n  height: calc(100% - 48px);\n}\n\n  .app__charts-tabs .igx-tabs__group {\n  height: 100%;\n}\n\n  .app__chart-component {\n  width: 100%;\n  height: 100%;\n  -ms-flex: 1;\n      flex: 1;\n}\n\n  .app__charts-chart {\n  width: 100%;\n  max-height: calc(100% - 42px);\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcRGV2XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpZ25pdGV1aS1hbmd1bGFyXFxsaWJcXGNvcmVcXHN0eWxlc1xcYmFzZVxcdXRpbGl0aWVzXFxfcXVpcmtzLnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9EOlxcRGV2XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBQTtBQ0RKOztBQ0FFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7TUFBQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FER0o7O0FDQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FERUo7O0FDQ0U7RUFDRSxlQUFBO0FEQ0o7O0FDRUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QURBSjs7QUNHRTtFQUNFLGNBQUE7QURESjs7QUNJRTs7RUFFRSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsaUNBQUE7TUFBQSw4QkFBQTtBREZKOztBQ0tFO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBREhKOztBQ01FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtBREpKOztBQ01JO0VBQ0UsWUFBQTtBREpOOztBQ09JO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO01BQUEsT0FBQTtBRExOOztBQ1NFO0VBQ0UseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO01BQUEsT0FBQTtFQUNBLGVBQUE7QURQSjs7QUNVRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QURSSjs7QUNXRTtFQUNFLFdBQUE7TUFBQSxPQUFBO0FEVEo7O0FDVUk7RUFDRSxZQUFBO0FEUk47O0FDV0k7O0VBRUUseUJBQUE7QURUTjs7QUNZSTtFQUNFLFlBQUE7QURWTjs7QUNjRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtNQUFBLE9BQUE7QURaSjs7QUNlRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QURiSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaGFjayBmb3IgYmluZGluZyB0byBbaGlkZGVuXSBwcm9wZXJ0eVxuLy8gbm90IHdvcmtpbmcgXG5baGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYXBwX19tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46Om5nLWRlZXAgLmFwcF9fbWFpbi1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46Om5nLWRlZXAgLmFwcF9fbGlzdC1zdGFjayB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy1sZWdlbmQge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbjo6bmctZGVlcCAuaWctY2hhcnQtbGVnZW5kLWl0ZW1zLWxpc3QsXG46Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHRkIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOjpuZy1kZWVwIC5hcHBfX2NvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46Om5nLWRlZXAgLmFwcF9fY29sLS1zdGF0cyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19jb2wtLW1hcCB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAxO1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cyB7XG4gIHBhZGRpbmc6IDAgMTZweCAxNnB4IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19jaGFydC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjo6bmctZGVlcCAuYXBwX19jaGFydHMtdGFicyB7XG4gIGZsZXg6IDE7XG59XG46Om5nLWRlZXAgLmFwcF9fY2hhcnRzLXRhYnMgPiBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46Om5nLWRlZXAgLmFwcF9fY2hhcnRzLXRhYnMgLmlneC10YWJzX19jb250ZW50LWZsdWlkLFxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy10YWJzIC5pZ3gtdGFic19fY29udGVudC1maXhlZCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XG59XG46Om5nLWRlZXAgLmFwcF9fY2hhcnRzLXRhYnMgLmlneC10YWJzX19ncm91cCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19jaGFydC1jb21wb25lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAxO1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy1jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MnB4KTtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vdmFyc1wiO1xyXG46Om5nLWRlZXAge1xyXG4gIC5hcHBfX21haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuYXBwX19tYWluLWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuYXBwX19saXN0LXN0YWNrIHtcclxuICAgIG1heC1oZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5hcHBfX3JvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmFwcF9fY2hhcnRzLWxlZ2VuZCB7XHJcbiAgICBwYWRkaW5nOiAoJGFwcC1nYXAgLyAyKSAwXHJcbiAgfVxyXG5cclxuICAuaWctY2hhcnQtbGVnZW5kLWl0ZW1zLWxpc3QsXHJcbiAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVte1xyXG4gICAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaWctY2hhcnQtbGVnZW5kLWl0ZW0gdGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuYXBwX19jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJi0tc3RhdHMge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tbWFwIHtcclxuICAgICAgcGFkZGluZzogJGFwcC1nYXAgMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gICB9XHJcblxyXG4gIC5hcHBfX2NoYXJ0cyB7XHJcbiAgICBwYWRkaW5nOiAwICRhcHAtZ2FwICRhcHAtZ2FwICRhcHAtZ2FwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuYXBwX19jaGFydC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5hcHBfX2NoYXJ0cy10YWJzIHtcclxuICAgIGZsZXg6MTtcclxuICAgID4gZGl2IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICB9XHJcblxyXG4gICAgLmlneC10YWJzX19jb250ZW50LWZsdWlkLFxyXG4gICAgLmlneC10YWJzX19jb250ZW50LWZpeGVkIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAuaWd4LXRhYnNfX2dyb3VwIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcF9fY2hhcnQtY29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5hcHBfX2NoYXJ0cy1jaGFydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDQycHgpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["RemoteDataService"]],
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
                host: { class: 'app__main' }
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["RemoteDataService"] }]; }, { panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxExpansionPanelComponent"], { static: true }]
        }], map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map', { static: true }]
        }], confirmedList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmedList', { static: true }]
        }], recoveredList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['recoveredList', { static: true }]
        }], deathsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['deathsList', { static: true }]
        }], chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chart', { static: true }]
        }], xAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['xAxis', { static: true }]
        }], yAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['yAxis', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/map-cases/map-cases.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map-cases/map-cases.component.ts ***!
  \**************************************************/
/*! exports provided: MapCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCasesComponent", function() { return MapCasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular-maps */ "./node_modules/igniteui-angular-maps/__ivy_ngcc__/fesm2015/igniteui-angular-maps.js");
/* harmony import */ var igniteui_angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular-core */ "./node_modules/igniteui-angular-core/__ivy_ngcc__/fesm2015/igniteui-angular-core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["map"];
const _c1 = ["template"];
function MapCasesComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", button_r4.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r4.name, " ");
} }
function MapCasesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Country: ", item_r6.county, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Infected: ", item_r6.density, "");
} }
class MapCasesComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.confirmedSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxGeographicTileSeriesComponent"]();
        this.recoveredSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxGeographicTileSeriesComponent"]();
        this.deathSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxGeographicTileSeriesComponent"]();
        this.series = [this.confirmedSeries, this.recoveredSeries, this.deathSeries];
        this.dataSets = ['Confirmed', 'Recovered', 'Deaths'];
        this.scaleColors = [
            [
                'rgba(255, 0, 0, .1)',
                'rgba(255, 0, 0, .3)',
                'rgba(255, 0, 0, .5)',
                'rgba(255, 0, 0, .6)',
                'rgba(255, 0, 0, .7843)'
            ],
            [
                'rgba(50,205,50, 0.1)',
                'rgba(50,205,50, 0.3)',
                'rgba(50,205,50, 0.5)',
                'rgba(50,205,50, 0.7)',
                'rgba(50,205,50, 0.9)'
            ],
            [
                'rgba(255, 0, 0, .1)',
                'rgba(255, 0, 0, .3)',
                'rgba(255, 0, 0, .5)',
                'rgba(255, 0, 0, .6)',
                'rgba(255, 0, 0, .7843)'
            ]
        ];
        this.dataSetButtons = [
            {
                name: 'Total',
                selected: true
            },
            {
                name: 'Recovered',
                selected: false
            },
            {
                name: 'Deaths',
                selected: false
            }
        ];
    }
    ngOnInit() {
        this.loadDataSet(0);
    }
    loadDataSet(index) {
        this.dataRequest$ = this.dataService.getDataSet(index);
        this.dataRequest$.subscribe(csvData => {
            this.onDataLoaded(csvData, index);
        });
    }
    /**
     * fetching JSON data with geographic locations from public folder
     */
    onDataSetSelected(event) {
        this.loadDataSet(event.index);
    }
    /**
     * Fill the map series corresponding to the passd index with tile imagery and add to map.
     */
    onDataLoaded(csvData, index) {
        csvData = csvData.replace(/, /g, ' - ');
        csvData = csvData.replace(/"/g, '');
        const csvLines = csvData.split('\n');
        const lat = [];
        const lon = [];
        const val = [];
        this.tileImagery = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxTileGeneratorMapImagery"]();
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(',');
            lat.push(parseInt(columns[2], 10));
            lon.push(parseInt(columns[3], 10));
            const value = parseInt(columns[columns.length - 1], 10);
            val.push(value);
        }
        // generating heat map imagery tiles
        const gen = new igniteui_angular_core__WEBPACK_IMPORTED_MODULE_2__["IgxHeatTileGenerator"]();
        gen.xValues = lon;
        gen.yValues = lat;
        gen.values = val;
        gen.blurRadius = 6;
        gen.maxBlurRadius = 20;
        gen.useBlurRadiusAdjustedForZoom = true;
        gen.minimumColor = 'rgba(100, 255, 0, 0.5)';
        gen.maximumColor = 'rgba(255, 255, 0, 0.5)';
        gen.useGlobalMinMax = true;
        gen.useGlobalMinMaxAdjustedForZoom = true;
        gen.useLogarithmicScale = true;
        gen.useWebWorkers = true;
        // gen.webWorkerInstance = new Worker();
        gen.webWorkerInstance = new Worker(__webpack__worker__0, {  });
        gen.scaleColors = this.scaleColors[index];
        this.tileImagery.tileGenerator = gen;
        // generating heat map series
        this.series[index].name = 'heatMapSeries';
        this.series[index].tileImagery = this.tileImagery;
        this.map.clearTileCache();
        // add heat map series to the map
        this.map.series.clear();
        this.map.series.add(this.series[index]);
        const geoBounds = {
            height: 140,
            left: -80,
            top: 0,
            width: 260
        };
        this.map.zoomToGeographic(geoBounds);
        this.map.zoomToGeographic(geoBounds);
    }
}
MapCasesComponent.ɵfac = function MapCasesComponent_Factory(t) { return new (t || MapCasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["RemoteDataService"])); };
MapCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapCasesComponent, selectors: [["app-map-cases"]], viewQuery: function MapCasesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, hostAttrs: [1, "app__map-wrapper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_data_service__WEBPACK_IMPORTED_MODULE_3__["RemoteDataService"]])], decls: 7, vars: 2, consts: [[1, "app__map-inner"], [1, "app__map-button-group", 3, "multiSelection", "onSelect"], ["igxButton", "", 3, "selected", 4, "ngFor", "ngForOf"], ["zoomable", "true", 1, "app__map"], ["map", ""], ["template", ""], ["igxButton", "", 3, "selected"], [1, "ellipsis"]], template: function MapCasesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "igx-buttongroup", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function MapCasesComponent_Template_igx_buttongroup_onSelect_1_listener($event) { return ctx.onDataSetSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapCasesComponent_button_2_Template, 3, 2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "igx-geographic-map", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapCasesComponent_ng_template_5_Template, 5, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiSelection", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSetButtons);
    } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxButtonGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxGeographicMapComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxButtonDirective"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__map-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  -ms-flex: 1;\n      flex: 1;\n}\n\n  .app__map-button-group {\n  margin-bottom: 8px;\n}\n\n  .igx-button-group {\n  min-width: 0;\n}\n\n.app__map[_ngcontent-%COMP%] {\n  min-height: calc(100% - 44px);\n  min-width: 100%;\n  height: calc(100% - 44px);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.app__map-inner[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  padding: 0 5px;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.ellipsis[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWNhc2VzL0Q6XFxEZXZcXENPVklELTE5LURhc2hib2FyZC9ub2RlX21vZHVsZXNcXGlnbml0ZXVpLWFuZ3VsYXJcXGxpYlxcY29yZVxcc3R5bGVzXFxiYXNlXFx1dGlsaXRpZXNcXF9xdWlya3Muc2NzcyIsInNyYy9hcHAvbWFwLWNhc2VzL21hcC1jYXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwLWNhc2VzL0Q6XFxEZXZcXENPVklELTE5LURhc2hib2FyZC9zcmNcXGFwcFxcbWFwLWNhc2VzXFxtYXAtY2FzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBQTtBQ0RKOztBQ0FFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7TUFBQSxPQUFBO0FER0o7O0FDREU7RUFDRSxrQkFBQTtBREdKOztBQ0FFO0VBQ0UsWUFBQTtBREVKOztBQ0VBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRENGIiwiZmlsZSI6InNyYy9hcHAvbWFwLWNhc2VzL21hcC1jYXNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaGFjayBmb3IgYmluZGluZyB0byBbaGlkZGVuXSBwcm9wZXJ0eVxuLy8gbm90IHdvcmtpbmcgXG5baGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYXBwX19tYXAtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxleDogMTtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtYnV0dG9uLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuOjpuZy1kZWVwIC5pZ3gtYnV0dG9uLWdyb3VwIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uYXBwX19tYXAge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hcHBfX21hcC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lbGxpcHNpcyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSIsIkBpbXBvcnQgXCIuLi92YXJzXCI7XHJcbjo6bmctZGVlcCB7XHJcbiAgLmFwcF9fbWFwLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgLmFwcF9fbWFwLWJ1dHRvbi1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuaWd4LWJ1dHRvbi1ncm91cCB7XHJcbiAgICBtaW4td2lkdGg6IDBcclxuICB9XHJcbn1cclxuXHJcbi5hcHBfX21hcCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hcHBfX21hcC1pbm5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmVsbGlwc2lzIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["RemoteDataService"]],
                selector: 'app-map-cases',
                templateUrl: './map-cases.component.html',
                styleUrls: ['./map-cases.component.scss'],
                host: { class: 'app__map-wrapper' }
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["RemoteDataService"] }]; }, { map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map', { static: true }]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['template', { static: true }]
        }] }); })();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?{"name":"0"}!../heatmap.worker.ts */ "./node_modules/worker-plugin/dist/loader.js?{\"name\":\"0\"}!./src/app/heatmap.worker.ts")))

/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DATA_SET, RemoteDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SET", function() { return DATA_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteDataService", function() { return RemoteDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// base URL for the data files
const BASE_URL = 'https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series';
const TIME_SERIES = 'csse_covid_19_time_series';
const EMPTY_STRING = '';
var DATA_SET;
(function (DATA_SET) {
    DATA_SET["CONFIRMED"] = "Confirmed";
    DATA_SET["RECOVERED"] = "Recovered";
    DATA_SET["DEATHS"] = "Deaths";
})(DATA_SET || (DATA_SET = {}));
class RemoteDataService {
    constructor() {
        this.dataSets = ['Confirmed', 'Recovered', 'Deaths'];
    }
    /**
     * Retrieves data from specific file, based on the index passed.
     */
    getDataSet(index) {
        const baseDataPath = '../../assets/Data/time_series_19-covid-';
        const dataSet = this.dataSets[index];
        const data$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(observer => {
            fetch(`${baseDataPath}${dataSet}.csv`)
                .then(response => response.text()) // or text() or blob() etc.
                .then(data => {
                observer.next(data);
                observer.complete();
            })
                .catch(err => observer.error(err));
        });
        return data$;
    }
}
RemoteDataService.ɵfac = function RemoteDataService_Factory(t) { return new (t || RemoteDataService)(); };
RemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RemoteDataService, factory: RemoteDataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\COVID-19-Dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map