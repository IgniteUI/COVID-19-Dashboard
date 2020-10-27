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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ "./src/app/splashscreen/splashscreen.component.ts");









var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], pathMatch: 'full' },
    { path: 'Loading', component: _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_6__["SplashscreenComponent"], data: { text: 'splash-screen' } },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], data: { text: 'main' } },
    { path: 'map-cases', component: _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_3__["MapCasesComponent"], data: { text: 'active-cases-map' } },
    { path: 'list-cases', component: _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_4__["ListCasesComponent"], data: { text: 'list-cases' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

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
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ "./src/app/splashscreen/splashscreen.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");








var _c0 = ["main"];
var _c1 = ["splash-screen"];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.darkTheme = this.getTheme();
        this.ssVisability = '';
    }
    AppComponent.prototype.toggleTheme = function () {
        this.darkTheme = !this.darkTheme;
        this.main.map.darkTheme = this.darkTheme;
        this.main.map.changeMap();
        this.main.map.changeMapSeriesBrushScale();
        window.localStorage.setItem('cvd19dshbrd-dark-theme', this.darkTheme.toString());
    };
    AppComponent.prototype.getTheme = function () {
        var theme = window.localStorage.getItem('cvd19dshbrd-dark-theme');
        return theme === 'false' ? false : true;
    };
    AppComponent.prototype.onUpdateTimeRetrieved = function (lastCommit) {
        this.footer.lastUpdate = new Date(lastCommit);
    };
    AppComponent.prototype.onDataReceived = function ($event) {
        this.ssVisability = $event;
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], true, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.main = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.splash = _t.first);
        } }, hostAttrs: [1, "app"], decls: 6, vars: 5, consts: [[3, "ngClass"], [3, "themeChanged"], [3, "updateTimeRetrieved", "messageEvent"], ["main", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-splashscreen", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("themeChanged", function AppComponent_Template_app_header_themeChanged_2_listener() { return ctx.toggleTheme(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-main", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updateTimeRetrieved", function AppComponent_Template_app_main_updateTimeRetrieved_3_listener($event) { return ctx.onUpdateTimeRetrieved($event); })("messageEvent", function AppComponent_Template_app_main_messageEvent_3_listener($event) { return ctx.onDataReceived($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.ssVisability);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("app-dark-theme", ctx.darkTheme)("app-light-theme", !ctx.darkTheme);
        } }, directives: [_splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_2__["SplashscreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app {\n  height: 100%;\n  overflow: hidden;\n}\n\n  .app-dark-theme,   .app-light-theme {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n\n@media (max-width: 1024px) {\n    .app-dark-theme,   .app-light-theme {\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n}\n\n  .app__logo {\n  height: 30px;\n  width: 100px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXENPVklELTE5LURhc2hib2FyZC9ub2RlX21vZHVsZXNcXGlnbml0ZXVpLWFuZ3VsYXJcXGxpYlxcY29yZVxcc3R5bGVzXFxiYXNlXFx1dGlsaXRpZXNcXF9xdWlya3Muc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0JBQUE7QUNESjs7QUNDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBREVKOztBQ0FFOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURFSjs7QUVtaUJJO0VEMWlCRjs7SUFPSSxnQkFBQTtJQUNBLGtCQUFBO0VES0o7QUFDRjs7QUNGRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRElKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBoYWNrIGZvciBiaW5kaW5nIHRvIFtoaWRkZW5dIHByb3BlcnR5XG4vLyBub3Qgd29ya2luZyBcbltoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4iLCJbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hcHAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46Om5nLWRlZXAgLmFwcC1kYXJrLXRoZW1lLFxuOjpuZy1kZWVwIC5hcHAtbGlnaHQtdGhlbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUsXG46Om5nLWRlZXAgLmFwcC1saWdodC10aGVtZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIH1cbn1cbjo6bmctZGVlcCAuYXBwX19sb2dvIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iLCJAaW1wb3J0IFwidGhlbWVzL3ZhcnNcIjtcclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmFwcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuYXBwLWRhcmstdGhlbWUsXHJcbiAgLmFwcC1saWdodC10aGVtZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIpIHtcclxuICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcF9fbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                host: { class: 'app' }
            }]
    }], null, { main: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['main', { static: true }]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"], { read: _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"] }]
        }], splash: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['splash-screen', { static: true }]
        }] }); })();


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
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! igniteui-angular-charts */ "./node_modules/igniteui-angular-charts/__ivy_ngcc__/esm5/igniteui-angular-charts.js");
/* harmony import */ var igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! igniteui-angular-maps */ "./node_modules/igniteui-angular-maps/__ivy_ngcc__/esm5/igniteui-angular-maps.js");
/* harmony import */ var _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map-cases/map-cases.component */ "./src/app/map-cases/map-cases.component.ts");
/* harmony import */ var _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-cases/list-cases.component */ "./src/app/list-cases/list-cases.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeline-chart/timeline-chart.component */ "./src/app/timeline-chart/timeline-chart.component.ts");
/* harmony import */ var _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./splashscreen/splashscreen.component */ "./src/app/splashscreen/splashscreen.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
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
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLegendModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxTimeXAxisModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxNumericXAxisModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryXAxisModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinancialChartModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxScatterLineSeriesModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLineSeriesModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTooltipModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxSwitchModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxProgressBarModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryToolTipLayerModule"],
                igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartInteractivityModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_9__["MapCasesComponent"],
        _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_10__["ListCasesComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_13__["TimelineChartComponent"],
        _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_14__["SplashscreenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
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
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLegendModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxTimeXAxisModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxNumericXAxisModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryXAxisModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinancialChartModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxScatterLineSeriesModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLineSeriesModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTooltipModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxSwitchModule"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxProgressBarModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryToolTipLayerModule"],
        igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartInteractivityModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                    _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_9__["MapCasesComponent"],
                    _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_10__["ListCasesComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_13__["TimelineChartComponent"],
                    _splashscreen_splashscreen_component__WEBPACK_IMPORTED_MODULE_14__["SplashscreenComponent"]
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
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLegendModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxTimeXAxisModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxNumericXAxisModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryXAxisModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxFinancialChartModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxScatterLineSeriesModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxLineSeriesModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTooltipModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxSwitchModule"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxProgressBarModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxCategoryToolTipLayerModule"],
                    igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_7__["IgxDataChartInteractivityModule"]
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


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 98, vars: 1, consts: [[1, "app__footer"], [1, "app__footer-item"], [1, "app__footer-item", "app__footer-item--info"], ["target", "_blank", "href", "https://www.who.int/"], ["target", "_blank", "href", "https://www.infragistics.com/products/ignite-ui-angular", 1, "footerLogo"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 498.1 76.3", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 498.1 76.3"], ["type", "text/css"], ["d", "M326.9,12.6h4.7v36.1h-4.7V12.6z", 1, "dark-st0"], ["d", "M339.1,53.6c2.3,1.5,5,2.5,7.8,2.5c4.7,0,7.8-2.8,7.8-7.4V47l-0.1-0.1c-1.7,1.2-4.1,1.9-6.7,1.9\n             c-6.7,0-12-5-12-12.3c0-6.9,4.7-12.8,12.7-12.8c2.5,0,4.6,0.6,6.2,1.4l4.3-0.8v24.4c0,7.2-4.8,11.6-12.3,11.6\n             c-3,0-5.8-0.8-7.8-1.8V53.6L339.1,53.6z M348.6,44.9c2.2,0,4.6-0.8,6.1-2V29.3c-1.5-1-3.9-1.7-6.2-1.7c-4.9,0-8.1,3.8-8.1,8.6\n             C340.4,41.2,343.8,44.9,348.6,44.9z", 1, "dark-st0"], ["d", "M363.6,24.2h4.5v3.1l0.1,0.1c2.1-2.1,5.1-3.7,8.6-3.7c2.7,0,5,1,6.5,2.7c1.3,1.5,2,3.5,2,7.2v15.1h-4.5\n             V34.4c0-2.5-0.4-4-1.2-5c-1-1.2-2.6-1.6-3.9-1.6c-2.8,0-5.9,1.7-7.7,4.1v16.8h-4.5L363.6,24.2L363.6,24.2z", 1, "dark-st0"], ["d", "M392.1,12.6c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2S390.4,12.6,392.1,12.6z\n              M389.9,24.2h4.5v24.5h-4.5V24.2L389.9,24.2z", 1, "dark-st0"], ["d", "M403.1,40.2v-12h-4.5v-4h4.5v-6.7l4.5-0.8v7.4h7.4v4h-7.4v11.1c0,3.1,0.5,5.9,3.7,5.9\n             c1.3,0,2.8-0.5,3.7-1.1v4.2c-1,0.5-2.8,0.9-4.4,0.9c-1.8,0-4-0.5-5.6-2.3C403.8,45.6,403.1,43.6,403.1,40.2z", 1, "dark-st0"], ["d", "M423.5,37.8c0.7,4.8,4.2,7.5,9.1,7.5c3.4,0,6.2-1.3,8.5-3.1V47c-2.2,1.4-5.6,2.3-8.8,2.3\n             c-7.6,0-13.3-5.1-13.3-12.8s5.7-12.8,12.2-12.8c6,0,11.2,4.2,11.2,11.9c0,0.8-0.1,1.6-0.2,2.2L423.5,37.8L423.5,37.8z\n              M423.6,34.2h14.5c-0.4-4.9-4-6.5-6.9-6.5C427.9,27.7,424.4,29.7,423.6,34.2z", 1, "dark-st0"], ["d", "M453.1,31.7V12.6h4.7v18.6c0,4.4,0.3,7.2,1.4,9.3c1.2,2.3,3.8,4.3,8.6,4.3c4.4,0,7.1-1.7,8.5-4.3\n             c1.2-2.1,1.3-5,1.3-9.1V12.6h4.6v18.6c0,5.2-0.3,9.3-2.4,12.5c-2.3,3.5-6.6,5.7-12.2,5.7c-5.7,0-9.9-2.2-12.1-5.7\n             C453.4,40.4,453.1,36.2,453.1,31.7z", 1, "dark-st0"], ["d", "M486.6,12.6h4.7v36.1h-4.7V12.6z", 1, "dark-st0"], ["cx", "289.5", "cy", "35.7", "r", "26.8", 1, "dark-st1"], ["d", "M290.4,6.2C290,6,289.6,5.9,289.2,6c-1.1,0.3-2.3,2.1-3.1,3c-1,1.1-1.8,2.3-2.5,3.6\n               c-3.6,6.4-3.5,14-1.9,21.1c1,4.5,2.5,8.9,4.2,13.2l7.1,0.1c0.3,0,1.4-3.7,1.6-4.1c0.5-1.3,0.9-2.7,1.3-4\n               c0.7-2.3,1.3-4.7,1.8-7.1c0.7-3.8,1-7.7,0.4-11.5c-0.5-3-1.5-5.8-3.1-8.4C294.3,10.5,292.4,7.1,290.4,6.2z M289.5,25.8\n               c-2.2,0-4-1.8-4-4.1s1.8-4,4.1-4c2.2,0,4,1.8,4,4.1S291.8,25.8,289.5,25.8z", 1, "dark-st0"], ["d", "M294.9,47.4L294.9,47.4c1.3-3.1,2.3-6.1,3.1-8.8c1.1,0.7,2.7,3.8,3.5,5.8c0.3,0.8,0.4,2.2,0.3,3.1\n               c-0.3,1.8-0.9,4.9-2.5,7.2c-0.2,0.2-0.5,0.1-0.5-0.2c0.1-0.7,0.1-1.5,0-2.1c-0.1-1.2-0.6-2.3-1.5-3.1\n               C296.5,48.4,295.5,47.7,294.9,47.4z", 1, "dark-st0"], ["d", "M280.2,52.2c-0.1,0.7-0.1,1.4,0,2.1c0,0.3-0.4,0.4-0.5,0.2c-1.6-2.2-2.2-5.4-2.4-7.2c-0.1-0.9,0-2.2,0.3-3\n               c0.8-1.9,2.3-5,3.5-5.7c0.7,2.8,1.7,5.7,3,8.8l0,0c-0.7,0.3-1.6,1-2.4,1.7C280.8,49.9,280.3,51,280.2,52.2z", 1, "dark-st2"], ["d", "M288.5,6.3c0,0-11,11.7,0.5,40.5h-3.1C285.9,46.9,271.7,19.7,288.5,6.3z", 1, "dark-st2"], ["d", "M283,61.4c-0.3-0.5-0.4-1-0.3-1.5c0.2-1,1-1.7,1.9-1.8c1.4-0.2,2.5,0.9,2.5,2.2c0,0.7-0.4,1.1-0.6,1.7\n               c-0.4,0.8-0.6,1.5-0.6,2.2c0,0.2,0,0.3,0,0.5c0,2.4,1.5,4.6,3.6,5.5c0.1,0.1,0.2-0.1,0.2-0.2c-0.2-0.4-0.2-0.8-0.2-1.2\n               c0-1.2,0.6-2.2,1.5-3c1-0.8,1.9-1.6,2.8-2.4c0.9-0.9,1.9-1.7,2.5-2.8c0.7-1.2,1.1-2.6,1.1-4.1c0-3.2-1.9-6.1-4.8-7.4\n               c-1.4-0.7-3-0.9-4.6-0.6c-3.3,0.5-6,3.1-6.7,6.3c-0.3,1.2-0.2,2.4,0.1,3.6c0.2,0.6,0.3,1.1,0.6,1.6\n               C282.4,60.5,282.8,60.9,283,61.4z", 1, "dark-st3"], ["id", "SVGID_1_", "d", "M283,61.4c-0.3-0.5-0.4-1-0.3-1.5c0.2-1,1-1.7,1.9-1.8c1.4-0.2,2.5,0.9,2.5,2.2\n                     c0,0.7-0.4,1.1-0.6,1.7c-0.4,0.8-0.6,1.5-0.6,2.2c0,0.2,0,0.3,0,0.5c0,2.4,1.5,4.6,3.6,5.5c0.1,0.1,0.2-0.1,0.2-0.2\n                     c-0.2-0.4-0.2-0.8-0.2-1.2c0-1.2,0.6-2.2,1.5-3c1-0.8,1.9-1.6,2.8-2.4c0.9-0.9,1.9-1.7,2.5-2.8c0.7-1.2,1.1-2.6,1.1-4.1\n                     c0-3.2-1.9-6.1-4.8-7.4c-1.4-0.7-3-0.9-4.6-0.6c-3.3,0.5-6,3.1-6.7,6.3c-0.3,1.2-0.2,2.4,0.1,3.6c0.2,0.6,0.3,1.1,0.6,1.6\n                     C282.4,60.5,282.8,60.9,283,61.4z"], ["id", "SVGID_2_"], [0, "xlink", "href", "#SVGID_1_", 2, "overflow", "visible"], ["d", "M287,61.3c0,0,7.9-5.8,3.1-12.8l9.7,0.6l-0.1,22.8l-13.5-0.1C286.1,71.8,283,63.4,287,61.3z", 1, "dark-st4"], [1, "dark-st5"], ["d", "M6.7,22.2h7.2c2.9,0,5.7,0.1,8.1,1.4s4,3.6,4,6.8c0,3.1-1.5,5.5-3.7,6.8c-2.4,1.4-5.6,1.6-9.1,1.6h-2.8v10.9\n         H6.7V22.2z M13.6,35.7c3.2,0,5.1-0.1,6.6-1c1.4-0.8,2.2-2.2,2.2-4.1c0-2.1-1-3.5-2.5-4.3c-1.7-0.8-3.7-0.9-6.3-0.9h-3.3v10.2H13.6\n         z", 1, "dark-st0"], ["d", "M42.8,21.8c8,0,14,6.2,14,14.2s-6,14.2-14,14.2s-14-6.2-14-14.2S34.8,21.8,42.8,21.8z M42.8,46.8\n         c6,0,10.4-4.8,10.4-10.8s-4.4-10.8-10.4-10.8c-6,0-10.4,4.8-10.4,10.8S36.8,46.8,42.8,46.8z", 1, "dark-st0"], ["d", "M57.9,22.2h3.8l4.6,14.9c0.7,2.3,1.5,4.8,2.2,7.2h0.1c0.7-2.4,1.4-4.8,2.2-7.2l4.7-14.9h2.7l4.7,14.9\n         c0.8,2.4,1.5,4.7,2.2,7.2H85c0.7-2.4,1.4-4.9,2.2-7.2l4.6-14.9h3.6l-8.5,27.5h-3.8l-4.4-14c-0.7-2.2-1.3-4.3-1.9-6.4h-0.1\n         c-0.6,2.1-1.3,4.3-1.9,6.4l-4.4,13.9h-3.9L57.9,22.2z", 1, "dark-st0"], ["d", "M99,22.2h15.9v3.3h-12.3v8.4h10.7V37h-10.7v9.5h12.6v3.3H99V22.2z", 1, "dark-st0"], ["d", "M119.9,22.2h7.4c2.8,0,5.4,0.1,7.7,1.4c2.3,1.3,3.8,3.4,3.8,6.4c0,3-1.4,5.2-3.5,6.5c-1,0.6-2,0.9-3.2,1.1\n         l8.8,12.1h-4.4L128.2,38h-4.7v11.8h-3.6V22.2z M128.2,35c2.4,0,4.1-0.3,5.4-1.3c1-0.8,1.6-1.9,1.6-3.4c0-1.7-0.8-3.1-2.2-3.9\n         c-1.5-0.8-3.2-0.9-5.9-0.9h-3.6V35H128.2z", 1, "dark-st0"], ["d", "M144.4,22.2h15.9v3.3h-12.3v8.4h10.7V37h-10.7v9.5h12.6v3.3h-16.2V22.2z", 1, "dark-st0"], ["d", "M165.4,22.2h7.6c3.6,0,7,0.6,9.7,2.2c3.9,2.4,6.2,6.6,6.2,11.4c0,4.6-2,8.6-5.5,11.1\n         c-2.9,2.1-6.6,2.8-11.3,2.8h-6.6V22.2z M172.6,46.5c3.3,0,6-0.4,8.2-1.8c2.6-1.7,4.4-4.8,4.4-8.7c0-4-1.9-7-4.4-8.6\n         c-2.4-1.6-5.3-1.9-8.3-1.9H169v21H172.6z", 1, "dark-st0"], ["d", "M202.5,22.2h7.4c3.3,0,5.5,0.3,7.3,1.4c2.1,1.3,3.2,3.2,3.2,5.6c0,3.2-1.9,5-4.2,5.8v0.1\n         c3.2,0.8,5.3,2.9,5.3,6.4c0,2.6-1.1,4.9-3.2,6.3c-1.9,1.4-4.6,1.8-8.6,1.8h-7.3V22.2z M211.5,34.2c2.8,0,5.3-1.3,5.3-4.3\n         c0-1.7-0.8-2.8-1.9-3.5c-1.3-0.8-2.8-0.9-5.5-0.9h-3.3v8.7H211.5z M210,46.5c3.1,0,4.9-0.3,6.1-1.2c0.9-0.6,1.8-1.7,1.8-3.6\n         c0-3-2.4-4.7-6.5-4.7h-5.3v9.5H210z", 1, "dark-st0"], ["d", "M232.7,37.3l-10.6-15.1h4.2L231,29c1.2,1.7,2.4,3.5,3.6,5.2h0.1c1.1-1.7,2.3-3.5,3.6-5.3l4.6-6.7h4l-10.5,15\n         v12.5h-3.6V37.3z", 1, "dark-st0"], ["d", "M326.9,12.6h4.7v36.1h-4.7V12.6z", 1, "light-st0"], ["d", "M339.1,53.6c2.3,1.5,5,2.5,7.8,2.5c4.7,0,7.8-2.8,7.8-7.4V47l-0.1-0.1c-1.7,1.2-4.1,1.9-6.7,1.9\n              c-6.7,0-12-5-12-12.3c0-6.9,4.7-12.8,12.7-12.8c2.5,0,4.6,0.6,6.2,1.4l4.3-0.8v24.4c0,7.2-4.8,11.6-12.3,11.6\n              c-3,0-5.8-0.8-7.8-1.8V53.6L339.1,53.6z M348.6,44.9c2.2,0,4.6-0.8,6.1-2V29.3c-1.5-1-3.9-1.7-6.2-1.7c-4.9,0-8.1,3.8-8.1,8.6\n              C340.4,41.2,343.8,44.9,348.6,44.9z", 1, "light-st0"], ["d", "M363.6,24.2h4.5v3.1l0.1,0.1c2.1-2.1,5.1-3.7,8.6-3.7c2.7,0,5,1,6.5,2.7c1.3,1.5,2,3.5,2,7.2v15.1h-4.5\n              V34.4c0-2.5-0.4-4-1.2-5c-1-1.2-2.6-1.6-3.9-1.6c-2.8,0-5.9,1.7-7.7,4.1v16.8h-4.5L363.6,24.2L363.6,24.2z", 1, "light-st0"], ["d", "M392.1,12.6c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2S390.4,12.6,392.1,12.6z\n              M389.9,24.2h4.5v24.5h-4.5V24.2L389.9,24.2z", 1, "light-st0"], ["d", "M403.1,40.2v-12h-4.5v-4h4.5v-6.7l4.5-0.8v7.4h7.4v4h-7.4v11.1c0,3.1,0.5,5.9,3.7,5.9\n              c1.3,0,2.8-0.5,3.7-1.1v4.2c-1,0.5-2.8,0.9-4.4,0.9c-1.8,0-4-0.5-5.6-2.3C403.8,45.6,403.1,43.6,403.1,40.2z", 1, "light-st0"], ["d", "M423.5,37.8c0.7,4.8,4.2,7.5,9.1,7.5c3.4,0,6.2-1.3,8.5-3.1V47c-2.2,1.4-5.6,2.3-8.8,2.3\n              c-7.6,0-13.3-5.1-13.3-12.8s5.7-12.8,12.2-12.8c6,0,11.2,4.2,11.2,11.9c0,0.8-0.1,1.6-0.2,2.2L423.5,37.8L423.5,37.8z\n              M423.6,34.2h14.5c-0.4-4.9-4-6.5-6.9-6.5C427.9,27.7,424.4,29.7,423.6,34.2z", 1, "light-st0"], ["d", "M453.1,31.7V12.6h4.7v18.6c0,4.4,0.3,7.2,1.4,9.3c1.2,2.3,3.8,4.3,8.6,4.3c4.4,0,7.1-1.7,8.5-4.3\n              c1.2-2.1,1.3-5,1.3-9.1V12.6h4.6v18.6c0,5.2-0.3,9.3-2.4,12.5c-2.3,3.5-6.6,5.7-12.2,5.7c-5.7,0-9.9-2.2-12.1-5.7\n              C453.4,40.4,453.1,36.2,453.1,31.7z", 1, "light-st0"], ["d", "M486.6,12.6h4.7v36.1h-4.7V12.6z", 1, "light-st0"], ["cx", "289.5", "cy", "35.7", "r", "26.8", 1, "light-st0"], ["d", "M290.4,6.2C290,6,289.6,5.9,289.2,6c-1.1,0.3-2.3,2.1-3.1,3c-1,1.1-1.8,2.3-2.5,3.6\n                c-3.6,6.4-3.5,14-1.9,21.1c1,4.5,2.5,8.9,4.2,13.2l7.1,0.1c0.3,0,1.4-3.7,1.6-4.1c0.5-1.3,0.9-2.7,1.3-4\n                c0.7-2.3,1.3-4.7,1.8-7.1c0.7-3.8,1-7.7,0.4-11.5c-0.5-3-1.5-5.8-3.1-8.4C294.3,10.5,292.4,7.1,290.4,6.2z M289.5,25.8\n                c-2.2,0-4-1.8-4-4.1s1.8-4,4.1-4c2.2,0,4,1.8,4,4.1S291.8,25.8,289.5,25.8z", 1, "light-st1"], ["d", "M294.9,47.4L294.9,47.4c1.3-3.1,2.3-6.1,3.1-8.8c1.1,0.7,2.7,3.8,3.5,5.8c0.3,0.8,0.4,2.2,0.3,3.1\n                c-0.3,1.8-0.9,4.9-2.5,7.2c-0.2,0.2-0.5,0.1-0.5-0.2c0.1-0.7,0.1-1.5,0-2.1c-0.1-1.2-0.6-2.3-1.5-3.1\n                C296.5,48.4,295.5,47.7,294.9,47.4z", 1, "light-st1"], ["d", "M280.2,52.2c-0.1,0.7-0.1,1.4,0,2.1c0,0.3-0.4,0.4-0.5,0.2c-1.6-2.2-2.2-5.4-2.4-7.2c-0.1-0.9,0-2.2,0.3-3\n                c0.8-1.9,2.3-5,3.5-5.7c0.7,2.8,1.7,5.7,3,8.8l0,0c-0.7,0.3-1.6,1-2.4,1.7C280.8,49.9,280.3,51,280.2,52.2z", 1, "light-st2"], ["d", "M288.5,6.3c0,0-11,11.7,0.5,40.5h-3.1C285.9,46.9,271.7,19.7,288.5,6.3z", 1, "light-st2"], ["d", "M283,61.4c-0.3-0.5-0.4-1-0.3-1.5c0.2-1,1-1.7,1.9-1.8c1.4-0.2,2.5,0.9,2.5,2.2c0,0.7-0.4,1.1-0.6,1.7\n                c-0.4,0.8-0.6,1.5-0.6,2.2c0,0.2,0,0.3,0,0.5c0,2.4,1.5,4.6,3.6,5.5c0.1,0.1,0.2-0.1,0.2-0.2c-0.2-0.4-0.2-0.8-0.2-1.2\n                c0-1.2,0.6-2.2,1.5-3c1-0.8,1.9-1.6,2.8-2.4c0.9-0.9,1.9-1.7,2.5-2.8c0.7-1.2,1.1-2.6,1.1-4.1c0-3.2-1.9-6.1-4.8-7.4\n                c-1.4-0.7-3-0.9-4.6-0.6c-3.3,0.5-6,3.1-6.7,6.3c-0.3,1.2-0.2,2.4,0.1,3.6c0.2,0.6,0.3,1.1,0.6,1.6\n                C282.4,60.5,282.8,60.9,283,61.4z", 1, "light-st3"], ["id", "SVGID_1_", "d", "M283,61.4c-0.3-0.5-0.4-1-0.3-1.5c0.2-1,1-1.7,1.9-1.8c1.4-0.2,2.5,0.9,2.5,2.2\n                      c0,0.7-0.4,1.1-0.6,1.7c-0.4,0.8-0.6,1.5-0.6,2.2c0,0.2,0,0.3,0,0.5c0,2.4,1.5,4.6,3.6,5.5c0.1,0.1,0.2-0.1,0.2-0.2\n                      c-0.2-0.4-0.2-0.8-0.2-1.2c0-1.2,0.6-2.2,1.5-3c1-0.8,1.9-1.6,2.8-2.4c0.9-0.9,1.9-1.7,2.5-2.8c0.7-1.2,1.1-2.6,1.1-4.1\n                      c0-3.2-1.9-6.1-4.8-7.4c-1.4-0.7-3-0.9-4.6-0.6c-3.3,0.5-6,3.1-6.7,6.3c-0.3,1.2-0.2,2.4,0.1,3.6c0.2,0.6,0.3,1.1,0.6,1.6\n                      C282.4,60.5,282.8,60.9,283,61.4z"], ["d", "M287,61.3c0,0,7.9-5.8,3.1-12.8l9.7,0.6l-0.1,22.8l-13.5-0.1C286.1,71.8,283,63.4,287,61.3z", 1, "light-st4"], [1, "light-st5"], ["d", "M6.7,22.2h7.2c2.9,0,5.7,0.1,8.1,1.4s4,3.6,4,6.8c0,3.1-1.5,5.5-3.7,6.8c-2.4,1.4-5.6,1.6-9.1,1.6h-2.8v10.9H6.7V22.2z\n          M13.6,35.7c3.2,0,5.1-0.1,6.6-1c1.4-0.8,2.2-2.2,2.2-4.1c0-2.1-1-3.5-2.5-4.3c-1.7-0.8-3.7-0.9-6.3-0.9h-3.3v10.2H13.6z"], ["d", "M42.8,21.8c8,0,14,6.2,14,14.2s-6,14.2-14,14.2s-14-6.2-14-14.2S34.8,21.8,42.8,21.8z M42.8,46.8c6,0,10.4-4.8,10.4-10.8\n          s-4.4-10.8-10.4-10.8c-6,0-10.4,4.8-10.4,10.8S36.8,46.8,42.8,46.8z"], ["d", "M57.9,22.2h3.8l4.6,14.9c0.7,2.3,1.5,4.8,2.2,7.2h0.1c0.7-2.4,1.4-4.8,2.2-7.2l4.7-14.9h2.7l4.7,14.9\n          c0.8,2.4,1.5,4.7,2.2,7.2H85c0.7-2.4,1.4-4.9,2.2-7.2l4.6-14.9h3.6l-8.5,27.5h-3.8l-4.4-14c-0.7-2.2-1.3-4.3-1.9-6.4h-0.1\n          c-0.6,2.1-1.3,4.3-1.9,6.4l-4.4,13.9h-3.9L57.9,22.2z"], ["d", "M99,22.2h15.9v3.3h-12.3v8.4h10.7V37h-10.7v9.5h12.6v3.3H99V22.2z"], ["d", "M119.9,22.2h7.4c2.8,0,5.4,0.1,7.7,1.4c2.3,1.3,3.8,3.4,3.8,6.4c0,3-1.4,5.2-3.5,6.5c-1,0.6-2,0.9-3.2,1.1l8.8,12.1h-4.4\n          L128.2,38h-4.7v11.8h-3.6V22.2z M128.2,35c2.4,0,4.1-0.3,5.4-1.3c1-0.8,1.6-1.9,1.6-3.4c0-1.7-0.8-3.1-2.2-3.9\n          c-1.5-0.8-3.2-0.9-5.9-0.9h-3.6V35H128.2z"], ["d", "M144.4,22.2h15.9v3.3h-12.3v8.4h10.7V37h-10.7v9.5h12.6v3.3h-16.2V22.2z"], ["d", "M165.4,22.2h7.6c3.6,0,7,0.6,9.7,2.2c3.9,2.4,6.2,6.6,6.2,11.4c0,4.6-2,8.6-5.5,11.1c-2.9,2.1-6.6,2.8-11.3,2.8h-6.6V22.2\n          z M172.6,46.5c3.3,0,6-0.4,8.2-1.8c2.6-1.7,4.4-4.8,4.4-8.7c0-4-1.9-7-4.4-8.6c-2.4-1.6-5.3-1.9-8.3-1.9H169v21H172.6z"], ["d", "M202.5,22.2h7.4c3.3,0,5.5,0.3,7.3,1.4c2.1,1.3,3.2,3.2,3.2,5.6c0,3.2-1.9,5-4.2,5.8v0.1c3.2,0.8,5.3,2.9,5.3,6.4\n          c0,2.6-1.1,4.9-3.2,6.3c-1.9,1.4-4.6,1.8-8.6,1.8h-7.3V22.2z M211.5,34.2c2.8,0,5.3-1.3,5.3-4.3c0-1.7-0.8-2.8-1.9-3.5\n          c-1.3-0.8-2.8-0.9-5.5-0.9h-3.3v8.7H211.5z M210,46.5c3.1,0,4.9-0.3,6.1-1.2c0.9-0.6,1.8-1.7,1.8-3.6c0-3-2.4-4.7-6.5-4.7h-5.3\n          v9.5H210z"], ["d", "M232.7,37.3l-10.6-15.1h4.2L231,29c1.2,1.7,2.4,3.5,3.6,5.2h0.1c1.1-1.7,2.3-3.5,3.6-5.3l4.6-6.7h4l-10.5,15v12.5h-3.6\n          V37.3z"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Last updated at:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data source: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "WHO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ", National Health Commission of the People\u2019s");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "style", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " .dark-st0 { fill: #FFFFFF; } .dark-st1 { opacity: 0.22; fill: #FFFFFF; enable-background: new; } .dark-st2 { fill: #0099FF; } .dark-st3 { fill: #F49021; } .dark-st4 { clip-path: url(#SVGID_2_); fill: #F05A2B; } .dark-st5 { opacity: 0.6; } .dark-st6 { clip-path: url(#SVGID_4_); fill: #F05A2B; } ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "defs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "clipPath", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "use", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "style", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " .light-st0 { fill: #27265F; } .light-st1 { fill: #FFFFFF; } .light-st2 { fill: #0099FF; } .light-st3 { fill: #F49021; } .light-st4 { clip-path: url(#SVGID_2_); fill: #F05A2B; } .light-st5 { opacity: 0.6; } .light-st6 { clip-path: url(#SVGID_4_); fill: #F05A2B; } .light-st7 { clip-path: url(#SVGID_6_); fill: #F05A2B; } ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "circle", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "defs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "clipPath", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "use", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "g", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastUpdate);
        } }, styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__footer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 16px;\n}\n\n@media (max-width: 768px) {\n    .app__footer {\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n}\n\n  .app__footer-item {\n  line-height: normal;\n  font-size: 12px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: left;\n}\n\n@media (max-width: 768px) {\n    .app__footer-item {\n    -ms-flex-align: center;\n        align-items: center;\n    text-align: center;\n  }\n}\n\n  .app__footer-item--info {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n    .app__footer-item--info {\n    margin-top: 0.5rem;\n    text-align: center;\n  }\n}\n\n  .app-light-theme .app__footer {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n  .app-light-theme .app__footer-item--info a {\n  color: #3E3972;\n}\n\n  .app-dark-theme .app__footer {\n  background: rgba(255, 255, 255, 0.04);\n}\n\n  .app-dark-theme .app__footer-item--info a {\n  color: #09f;\n}\n\n  .footerLogo svg {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpZ25pdGV1aS1hbmd1bGFyXFxsaWJcXGNvcmVcXHN0eWxlc1xcYmFzZVxcdXRpbGl0aWVzXFxfcXVpcmtzLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXHRoZW1lc1xcX3ZhcnMuc2NzcyIsInNyYy9hcHAvZm9vdGVyL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0JBQUE7QUNESjs7QUNDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxzQkFBQTtNQUFBLDhCQUFBO0VBQ0EsYUNKTTtBRk1WOztBR3dpQkk7RUY5aUJGO0lBT0ksMEJBQUE7UUFBQSxzQkFBQTtFREdKO0FBQ0Y7O0FDQUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FERUo7O0FHMmhCSTtFRm5pQkY7SUFRSSxzQkFBQTtRQUFBLG1CQUFBO0lBQ0Esa0JBQUE7RURJSjtBQUNGOztBQ0hJO0VBQ0UsaUJBQUE7QURLTjs7QUdraEJJO0VGeGhCQTtJQUdJLGtCQUFBO0lBQ0Esa0JBQUE7RURPTjtBQUNGOztBQ0ZJO0VBQ0UsK0JBQUE7QURJTjs7QUNBUTtFQUNFLGNBQUE7QURFVjs7QUNLSTtFQUNFLHFDQUFBO0FESE47O0FDT1E7RUFDRSxXQUFBO0FETFY7O0FDV0U7RUFDRSxZQUFBO0FEVEoiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBoYWNrIGZvciBiaW5kaW5nIHRvIFtoaWRkZW5dIHByb3BlcnR5XG4vLyBub3Qgd29ya2luZyBcbltoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4iLCJbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hcHBfX2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmFwcF9fZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG46Om5nLWRlZXAgLmFwcF9fZm9vdGVyLWl0ZW0ge1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19mb290ZXItaXRlbSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbjo6bmctZGVlcCAuYXBwX19mb290ZXItaXRlbS0taW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19mb290ZXItaXRlbS0taW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuOjpuZy1kZWVwIC5hcHAtbGlnaHQtdGhlbWUgLmFwcF9fZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbjo6bmctZGVlcCAuYXBwLWxpZ2h0LXRoZW1lIC5hcHBfX2Zvb3Rlci1pdGVtLS1pbmZvIGEge1xuICBjb2xvcjogIzNFMzk3Mjtcbn1cbjo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUgLmFwcF9fZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbn1cbjo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUgLmFwcF9fZm9vdGVyLWl0ZW0tLWluZm8gYSB7XG4gIGNvbG9yOiAjMDlmO1xufVxuOjpuZy1kZWVwIC5mb290ZXJMb2dvIHN2ZyB7XG4gIGhlaWdodDogNDBweDtcbn0iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL3ZhcnNcIjtcclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLmFwcF9fZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogJGFwcC1nYXA7XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXBwX19mb290ZXItaXRlbSB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLS1pbmZvIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IHJlbSg4cHgpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcC1saWdodC10aGVtZSB7XHJcbiAgICAuYXBwX19mb290ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRsaWdodC12YXJzLCBmb290ZXItYmFja2dyb3VuZCk7XHJcbiAgICB9XHJcbiAgICAuYXBwX19mb290ZXItaXRlbSB7XHJcbiAgICAgICYtLWluZm8ge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGxpZ2h0LXZhcnMsIGxpbmstY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcC1kYXJrLXRoZW1lIHtcclxuICAgIC5hcHBfX2Zvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGRhcmstdmFycywgZm9vdGVyLWJhY2tncm91bmQpO1xyXG4gICAgfVxyXG4gICAgLmFwcF9fZm9vdGVyLWl0ZW0ge1xyXG4gICAgICAmLS1pbmZvIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRkYXJrLXZhcnMsIGxpbmstY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvb3RlckxvZ28gc3ZnIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaWduaXRldWktYW5ndWxhci9saWIvY29yZS9zdHlsZXMvYmFzZS9pbmRleFwiO1xyXG5AaW1wb3J0IFwicGFsZXR0ZXNcIjtcclxuJGNhcmQtaGVhZGVyLWhlaWdodDogODBweDtcclxuJGFwcC1nYXA6IDE2cHg7XHJcblxyXG4kbGlnaHQtdmFyczooXHJcbiAgY29uZmlybWVkLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnc2Vjb25kYXJ5JyksXHJcbiAgY29uZmlybWVkLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzZWNvbmRhcnknKSwgLjAzKSxcclxuICBkZWF0aHMtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdlcnJvcicpLFxyXG4gIGRlYXRocy1iZzogcmdiYShpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnZXJyb3InKSwgLjAzKSxcclxuICByZWNvdmVyZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdWNjZXNzJyksXHJcbiAgcmVjb3ZlcmVkLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdWNjZXNzJyksIC4wMyksXHJcbiAgZm9vdGVyLWJhY2tncm91bmQ6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdncmF5cycsIDEwMCksXHJcbiAgbGluay1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3NlY29uZGFyeScpLFxyXG4gIHRvb2x0aXAtYmc6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdXJmYWNlJyksXHJcbiAgbG9nby1jb2xvcjogIzAwMFxyXG4pO1xyXG5cclxuJGRhcmstdmFyczooXHJcbiAgY29uZmlybWVkLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdpbmZvJyksXHJcbiAgY29uZmlybWVkLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3NlY29uZGFyeScpLCAuMDMpLFxyXG4gIGRlYXRocy1jb2xvcjogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnZXJyb3InKSxcclxuICBkZWF0aHMtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnZXJyb3InKSwgLjAzKSxcclxuICByZWNvdmVyZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3N1Y2Nlc3MnKSxcclxuICByZWNvdmVyZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc3VjY2VzcycpLCAuMDMpLFxyXG4gIGZvb3Rlci1iYWNrZ3JvdW5kOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdncmF5cycsIDEwMCksXHJcbiAgbGluay1jb2xvcjogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc2Vjb25kYXJ5JyksXHJcbiAgdG9vbHRpcC1iZzogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc3VyZmFjZScpLFxyXG4gIGxvZ28tY29sb3I6ICNmZmYsXHJcbiAgZGFyay1ncmFkaWVudDogKGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3ByaW1hcnknLCA2MDApLCBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzdXJmYWNlJykpXHJcbik7XHJcblxyXG5AaW1wb3J0IFwifmluY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG5cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();


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



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.icon = 'palette';
        this.themeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleTheme = function () {
        this.themeChanged.emit();
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { themeChanged: "themeChanged" }, decls: 32, vars: 3, consts: [[1, "app__header"], ["title", "Coronavirus COVID-19 Global Cases", 3, "isActionButtonVisible"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 150 20.9", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 150 20.9"], ["type", "text/css"], ["d", "M26.4,17.2V3.6h2.2v13.6H26.4z", 1, "st0"], ["d", "M31.8,17.2V3l8.6,8.3c0.2,0.2,0.5,0.5,0.7,0.8c0.2,0.3,0.5,0.6,0.8,0.9V3.6h2v14.1l-8.8-8.5\n\t\t\t   c-0.2-0.2-0.5-0.5-0.7-0.7c-0.2-0.3-0.4-0.5-0.6-0.8v9.5H31.8z", 1, "st0"], ["d", "M47.1,17.2V3.6h7.6v1.9h-5.4v3.4h5.4v1.9h-5.4v6.4H47.1z", 1, "st0"], ["d", "M59.2,11.1v6.1h-2.1V3.6h3.1c0.9,0,1.6,0.1,2.1,0.2c0.5,0.1,0.9,0.3,1.3,0.6c0.4,0.3,0.7,0.8,1,1.3\n\t\t\t   c0.2,0.5,0.3,1.1,0.3,1.7c0,1.1-0.3,1.9-0.8,2.6c-0.5,0.6-1.3,1-2.3,1.1l4.7,6.2H64l-4.5-6.1H59.2z M59.3,9.4h0.4\n\t\t\t   c1.2,0,1.9-0.1,2.3-0.4c0.4-0.3,0.6-0.8,0.6-1.5c0-0.7-0.2-1.3-0.6-1.6c-0.4-0.3-1.2-0.5-2.3-0.5h-0.4V9.4z", 1, "st0"], ["d", "M76.8,17.2l-1.5-3.5h-5.4l-1.6,3.5h-2.3L72.5,3l6.6,14.2H76.8z M70.7,11.9h3.8l-1.4-3.1\n\t\t\t   c-0.1-0.2-0.2-0.4-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.9c-0.1,0.3-0.2,0.6-0.2,0.8c-0.1,0.3-0.2,0.5-0.3,0.7L70.7,11.9z", 1, "st0"], ["d", "M87.6,10.2H93c0,0.1,0,0.2,0,0.4c0,0.4,0,0.7,0,0.9c0,1.9-0.5,3.4-1.6,4.5c-1.1,1.1-2.6,1.6-4.6,1.6\n\t\t\t   c-1.1,0-2.1-0.2-3-0.5c-0.9-0.3-1.6-0.8-2.3-1.5c-0.6-0.7-1.1-1.4-1.5-2.3c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-2,0.5-2.8\n\t\t\t   c0.4-0.9,0.9-1.6,1.6-2.3c0.7-0.7,1.4-1.1,2.3-1.5c0.9-0.3,1.8-0.5,2.9-0.5c1.1,0,2,0.2,2.9,0.6c0.8,0.4,1.6,1,2.3,1.8l-1.6,1.2\n\t\t\t   c-0.5-0.5-1-0.9-1.6-1.2c-0.6-0.3-1.2-0.4-1.9-0.4c-1.5,0-2.7,0.5-3.6,1.4c-0.9,0.9-1.4,2.2-1.4,3.7c0,1.5,0.5,2.8,1.4,3.7\n\t\t\t   c0.9,1,2.1,1.4,3.6,1.4c1.3,0,2.3-0.3,3-0.9c0.7-0.6,1.1-1.4,1.1-2.4v-0.2h-3.3V10.2z", 1, "st0"], ["d", "M95.4,17.2V3.6h2.2v13.6H95.4z", 1, "st0"], ["d", "M100,14.5l1.8-0.8c0.2,0.6,0.5,1.1,0.9,1.4c0.4,0.3,1,0.5,1.7,0.5c0.7,0,1.2-0.2,1.6-0.5\n\t\t\t   c0.4-0.4,0.6-0.9,0.6-1.5c0-0.8-0.7-1.5-2-2.1c-0.2-0.1-0.3-0.2-0.4-0.2c-1.5-0.7-2.5-1.4-3-2c-0.5-0.6-0.7-1.3-0.7-2.2\n\t\t\t   c0-1.1,0.4-2,1.1-2.7c0.8-0.7,1.7-1,3-1c1,0,1.8,0.2,2.5,0.6c0.7,0.4,1.1,0.9,1.4,1.7l-1.7,0.9c-0.3-0.4-0.6-0.7-0.9-0.9\n\t\t\t   c-0.3-0.2-0.7-0.3-1.1-0.3c-0.6,0-1.1,0.2-1.4,0.5c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.8,0.8,1.6,2.3,2.3c0.1,0.1,0.2,0.1,0.3,0.1\n\t\t\t   c1.3,0.6,2.3,1.2,2.8,1.8c0.5,0.6,0.8,1.3,0.8,2.2c0,1.3-0.4,2.3-1.2,3.1c-0.8,0.8-1.9,1.1-3.3,1.1c-1.2,0-2.1-0.3-2.9-0.8\n\t\t\t   C100.7,16.2,100.2,15.5,100,14.5z", 1, "st0"], ["d", "M115.6,5.5v11.7h-2.2V5.5h-3.6V3.6h9.4v1.9H115.6z", 1, "st0"], ["d", "M121,17.2V3.6h2.2v13.6H121z", 1, "st0"], ["d", "M137.3,6.9c-0.6-0.5-1.3-0.9-2-1.2c-0.7-0.3-1.4-0.4-2.2-0.4c-1.5,0-2.7,0.5-3.6,1.4c-0.9,1-1.4,2.2-1.4,3.7\n\t\t\t   c0,1.5,0.5,2.7,1.4,3.6c0.9,1,2.1,1.4,3.4,1.4c0.8,0,1.6-0.1,2.3-0.4c0.7-0.3,1.4-0.7,2.1-1.3v2.5c-0.6,0.4-1.2,0.7-1.9,1\n\t\t\t   c-0.7,0.2-1.5,0.3-2.3,0.3c-1,0-2-0.2-2.9-0.5c-0.9-0.3-1.7-0.8-2.3-1.5c-0.7-0.7-1.2-1.4-1.5-2.3c-0.4-0.9-0.5-1.8-0.5-2.8\n\t\t\t   c0-1,0.2-1.9,0.5-2.8c0.4-0.9,0.9-1.6,1.5-2.3c0.7-0.7,1.5-1.2,2.3-1.5c0.9-0.3,1.8-0.5,2.8-0.5c0.8,0,1.6,0.1,2.3,0.3\n\t\t\t   c0.7,0.2,1.4,0.6,2.1,1.1L137.3,6.9z", 1, "st0"], ["d", "M139.2,14.5l1.8-0.8c0.2,0.6,0.5,1.1,0.9,1.4c0.4,0.3,1,0.5,1.7,0.5c0.7,0,1.2-0.2,1.6-0.5\n\t\t\t   c0.4-0.4,0.6-0.9,0.6-1.5c0-0.8-0.7-1.5-2-2.1c-0.2-0.1-0.3-0.2-0.4-0.2c-1.5-0.7-2.5-1.4-3-2c-0.5-0.6-0.7-1.3-0.7-2.2\n\t\t\t   c0-1.1,0.4-2,1.1-2.7c0.8-0.7,1.7-1,3-1c1,0,1.8,0.2,2.5,0.6c0.7,0.4,1.1,0.9,1.4,1.7l-1.7,0.9c-0.3-0.4-0.6-0.7-0.9-0.9\n\t\t\t   c-0.3-0.2-0.7-0.3-1.1-0.3c-0.6,0-1.1,0.2-1.4,0.5C142.1,6,142,6.4,142,6.9c0,0.8,0.8,1.6,2.3,2.3c0.1,0.1,0.2,0.1,0.3,0.1\n\t\t\t   c1.3,0.6,2.3,1.2,2.8,1.8c0.5,0.6,0.8,1.3,0.8,2.2c0,1.3-0.4,2.3-1.2,3.1c-0.8,0.8-1.9,1.1-3.3,1.1c-1.2,0-2.1-0.3-2.9-0.8\n\t\t\t   C140,16.2,139.5,15.5,139.2,14.5z", 1, "st0"], ["d", "M149.8,4.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1\n\t\t\t   C149.3,3.3,149.8,3.8,149.8,4.3z M147.9,4.3c0,0.5,0.4,0.9,0.8,0.9c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.3-0.9-0.8-0.9\n\t\t\t   C148.2,3.5,147.9,3.9,147.9,4.3z M148.5,4.9h-0.2V3.8c0.1,0,0.2,0,0.4,0c0.2,0,0.3,0,0.4,0.1c0.1,0,0.1,0.1,0.1,0.2\n\t\t\t   c0,0.1-0.1,0.2-0.2,0.2v0c0.1,0,0.2,0.1,0.2,0.3c0,0.2,0.1,0.2,0.1,0.3H149c0,0-0.1-0.1-0.1-0.3c0-0.1-0.1-0.2-0.2-0.2h-0.1V4.9z\n\t\t\t\tM148.5,4.3h0.1c0.1,0,0.2,0,0.2-0.2c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.1,0-0.1,0V4.3z", 1, "st0"], ["x", "0", "y", "0", "width", "22.8", "height", "20.9", 1, "st1"], ["x", "3.5", "y", "3.6", "width", "3.7", "height", "3.6", 1, "st2"], ["d", "M17,3.6H8.5v7.2h3.4V7.1h3.7v3.6v2.8v0.3H8.5H7.6H7.1V8.5H3.5v6.6c0,1.3,1,2.3,2.3,2.3h7.8H17h2.3v-2.3v-3.2v-6\n\t   C19.2,4.6,18.2,3.6,17,3.6z", 1, "st2"], ["igxButton", "icon", 3, "igxTooltipTarget", "click"], ["target", "tooltipTarget"], [1, "app__theme-icon"], ["igxTooltip", ""], ["tooltipRef", "tooltip"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "igx-navbar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "igx-navbar-action");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "style", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " .st0 { fill: #A8A8AA; } .st1 { fill: #0099FF; } .st2 { fill: #FFFFFF; } ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_25_listener() { return ctx.toggleTheme(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "igx-icon", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Change theme\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isActionButtonVisible", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("igxTooltipTarget", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
        } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxNavbarComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxNavbarActionDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxButtonDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxTooltipTargetDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxIconComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxTooltipDirective"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n@media (max-width: 768px) {\n    .igx-navbar__title {\n    display: none;\n  }\n}\n\n@media (max-width: 600) {\n    .igx-navbar__title {\n    font-size: 14px !important;\n  }\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpZ25pdGV1aS1hbmd1bGFyXFxsaWJcXGNvcmVcXHN0eWxlc1xcYmFzZVxcdXRpbGl0aWVzXFxfcXVpcmtzLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL25vZGVfbW9kdWxlc1xcaW5jbHVkZS1tZWRpYVxcZGlzdFxcX2luY2x1ZGUtbWVkaWEuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0JBQUE7QUNESjs7QUMraUJJO0VDL2lCRjtJQUVJLGFBQUE7RUZHSjtBQUNGOztBQ3lpQkk7RUMvaUJGO0lBS0ksMEJBQUE7RUZLSjtBQUNGOztBRURBO0VBQ0UsWUFBQTtBRklGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaGFjayBmb3IgYmluZGluZyB0byBbaGlkZGVuXSBwcm9wZXJ0eVxuLy8gbm90IHdvcmtpbmcgXG5baGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmlneC1uYXZiYXJfX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwKSB7XG4gIDo6bmctZGVlcCAuaWd4LW5hdmJhcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMjRweDtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL3RoZW1lcy92YXJzXCI7XHJcbjo6bmctZGVlcCB7XHJcbiAgLmlneC1uYXZiYXJfX3RpdGxlIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PTYwMFwiKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuc3ZnIHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], null, { themeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListCasesComponent_igx_list_item_10_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r2.region, ", ", item_r2.country, "");
} }
function ListCasesComponent_igx_list_item_10_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.country);
} }
function ListCasesComponent_igx_list_item_10_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "igx-list-item", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListCasesComponent_igx_list_item_10_Template_igx_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var item_r2 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onListItemClicked(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListCasesComponent_igx_list_item_10_span_2_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListCasesComponent_igx_list_item_10_ng_template_3_Template, 2, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.region && item_r2.country !== item_r2.region)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, item_r2.value));
} }
function ListCasesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "igx-circular-bar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", true);
} }
var ListCasesComponent = /** @class */ (function () {
    function ListCasesComponent() {
        this.dataSets = ['Confirmed', 'Recovered', 'Deaths', 'Active'];
        this.regionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ListCasesComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this.key = "total" + value;
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListCasesComponent.prototype, "data", {
        set: function (value) {
            this.listSortedData = value.data.sort(function (a, b) {
                return b.value - a.value;
            });
            this.totalCases = value.totalCases;
        },
        enumerable: false,
        configurable: true
    });
    ListCasesComponent.prototype.onListItemClicked = function (item) {
        this.regionSelected.emit(item);
    };
    ListCasesComponent.ɵfac = function ListCasesComponent_Factory(t) { return new (t || ListCasesComponent)(); };
    ListCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListCasesComponent, selectors: [["app-list-cases"]], hostAttrs: [1, "app__list"], inputs: { type: "type", data: "data" }, outputs: { regionSelected: "regionSelected" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["DisplayDensityToken"], useValue: { displayDensity: 'comfortable' } }])], decls: 12, vars: 6, consts: [[1, "app__list-holder"], [1, "app__card-header", "app__card-header--info"], ["igxCardHeaderSubtitle", ""], ["igxCardHeaderTitle", ""], [1, "app__card-content"], [1, "app__list-inner", 3, "displayDensity"], [3, "click", 4, "ngFor", "ngForOf"], ["igxEmptyList", ""], [3, "click"], ["item", ""], ["igxListLineTitle", "", 4, "ngIf", "ngIfElse"], ["country", ""], ["igxListAction", ""], ["igxListLineTitle", ""], [1, "app__loader"], [3, "indeterminate"]], template: function ListCasesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "igx-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "igx-card-header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "igx-divider");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "igx-card-content", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "igx-list", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListCasesComponent_igx_list_item_10_Template, 8, 5, "igx-list-item", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListCasesComponent_ng_template_11_Template, 2, 1, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx.type, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.totalCases));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayDensity", "cosy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listSortedData);
        } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxCardComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxCardHeaderComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxCardHeaderSubtitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxCardHeaderTitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxDividerDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxCardContentDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxEmptyListTemplateDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxListActionDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxListLineTitleDirective"], igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxCircularProgressBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__list {\n  height: 100%;\n  padding: 16px;\n  width: 100%;\n}\n\n@media (max-width: 1024px) {\n    .app__list {\n    height: 600px;\n    padding-bottom: 0;\n  }\n}\n\n@media (max-width: 768px) {\n    .app__list {\n    height: 300px;\n  }\n}\n\n  .app__list .igx-list__item-actions {\n  font-weight: bold;\n}\n\n@media (max-width: 1024px) {\n    .app__list .igx-list__item-actions {\n    font-size: 14px;\n  }\n}\n\n  .app__list--deaths .igx-card-header__title {\n  font-weight: bold;\n}\n\n  .app__list--recovered .igx-card-header__title {\n  font-weight: bold;\n}\n\n  .app__list--confirmed {\n  max-width: 300px;\n}\n\n  .app__list--confirmed .igx-card-header__title {\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n    .app__list--confirmed {\n    max-width: 100%;\n  }\n}\n\n  .app__list + .app__list {\n  padding-left: 0;\n}\n\n@media (max-width: 450px) {\n    .app__list + .app__list {\n    padding-left: 16px;\n  }\n}\n\n  .app__list .app__list-holder {\n  height: 100%;\n}\n\n  .app__list .app__card-header {\n  min-height: 80px;\n}\n\n  .app__list .app__card-content {\n  height: calc(100% - 80px);\n  overflow: auto;\n  padding: 0;\n}\n\n  .app__list .igx-list__item-base {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n}\n\n  .app__list .app__list-inner {\n  overflow: auto;\n}\n\n  .app__list .app__loader {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n@media (max-width: 1024px) {\n    .igx-list__item-line-title,   .igx-list__item-lines {\n    font-size: 14px !important;\n  }\n}\n\n  .app-light-theme .app__list--deaths .app__card-header {\n  background: rgba(255, 19, 74, 0.03) !important;\n}\n\n  .app-light-theme .app__list--deaths .igx-card-header__subtitle {\n  color: #ff134a;\n}\n\n  .app-light-theme .app__list--recovered .app__card-header {\n  background: rgba(78, 184, 98, 0.03) !important;\n}\n\n  .app-light-theme .app__list--recovered .igx-card-header__subtitle {\n  color: #4eb862;\n}\n\n  .app-light-theme .app__list--confirmed .app__card-header {\n  background: rgba(62, 57, 114, 0.03) !important;\n}\n\n  .app-light-theme .app__list--confirmed .igx-card-header__subtitle {\n  color: #3E3972;\n}\n\n  .app-dark-theme .app__list--deaths .app__card-header {\n  background: rgba(255, 138, 144, 0.03) !important;\n}\n\n  .app-dark-theme .app__list--deaths .igx-card-header__subtitle {\n  color: #FF8A90;\n}\n\n  .app-dark-theme .app__list--recovered .app__card-header {\n  background: rgba(95, 191, 112, 0.03) !important;\n}\n\n  .app-dark-theme .app__list--recovered .igx-card-header__subtitle {\n  color: #5FBF70;\n}\n\n  .app-dark-theme .app__list--confirmed .app__card-header {\n  background: rgba(0, 153, 255, 0.03) !important;\n}\n\n  .app-dark-theme .app__list--confirmed .igx-card-header__subtitle {\n  color: #47B6FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1jYXNlcy9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL25vZGVfbW9kdWxlc1xcaWduaXRldWktYW5ndWxhclxcbGliXFxjb3JlXFxzdHlsZXNcXGJhc2VcXHV0aWxpdGllc1xcX3F1aXJrcy5zY3NzIiwic3JjL2FwcC9saXN0LWNhc2VzL2xpc3QtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QtY2FzZXMvQzpcXENPVklELTE5LURhc2hib2FyZC9zcmNcXGFwcFxcbGlzdC1jYXNlc1xcbGlzdC1jYXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC1jYXNlcy9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFx0aGVtZXNcXF92YXJzLnNjc3MiLCJzcmMvYXBwL2xpc3QtY2FzZXMvQzpcXENPVklELTE5LURhc2hib2FyZC9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBQTtBQ0RKOztBQ0FFO0VBQ0UsWUFBQTtFQUNBLGFDRE07RURFTixXQUFBO0FER0o7O0FHeWlCSTtFRi9pQkY7SUFNSSxhQUFBO0lBQ0EsaUJBQUE7RURJSjtBQUNGOztBR21pQkk7RUYvaUJGO0lBV0ksYUFBQTtFREtKO0FBQ0Y7O0FDSEk7RUFDRSxpQkFBQTtBREtOOztBRzJoQkk7RUZqaUJBO0lBR0ksZUFBQTtFRE9OO0FBQ0Y7O0FDSE07RUFDRSxpQkFBQTtBREtSOztBQ0FNO0VBQ0UsaUJBQUE7QURFUjs7QUNFSTtFQUlFLGdCQUFBO0FESE47O0FDQU07RUFDRSxpQkFBQTtBREVSOztBRzBnQkk7RUY5Z0JBO0lBT0ksZUFBQTtFRENOO0FBQ0Y7O0FDRUk7RUFDRSxlQUFBO0FEQU47O0FHa2dCSTtFRm5nQkE7SUFHSSxrQkM5Q0U7RUZnRFI7QUFDRjs7QUNDSTtFQUNFLFlBQUE7QURDTjs7QUNFSTtFQUNFLGdCQ3hEZTtBRndEckI7O0FDR0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FERE47O0FDSUk7RUFDRSxrQkFBQTtNQUFBLGNBQUE7QURGTjs7QUNLSTtFQUNFLGNBQUE7QURITjs7QUNNSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7QURKTjs7QUdxZUk7RUY3ZEY7O0lBR0ksMEJBQUE7RUROSjtBQUNGOztBQ1lRO0VBQ0UsOENBQUE7QURWVjs7QUNZUTtFQUNFLGNBQUE7QURWVjs7QUNjUTtFQUNFLDhDQUFBO0FEWlY7O0FDY1E7RUFDRSxjQUFBO0FEWlY7O0FDZ0JRO0VBQ0UsOENBQUE7QURkVjs7QUNnQlE7RUFDRSxjQUFBO0FEZFY7O0FDdUJRO0VBQ0UsZ0RBQUE7QURyQlY7O0FDdUJRO0VBQ0UsY0FBQTtBRHJCVjs7QUN5QlE7RUFDRSwrQ0FBQTtBRHZCVjs7QUN5QlE7RUFDRSxjQUFBO0FEdkJWOztBQzJCUTtFQUNFLDhDQUFBO0FEekJWOztBQzJCUTtFQUNFLGNBQUE7QUR6QlYiLCJmaWxlIjoic3JjL2FwcC9saXN0LWNhc2VzL2xpc3QtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGhhY2sgZm9yIGJpbmRpbmcgdG8gW2hpZGRlbl0gcHJvcGVydHlcbi8vIG5vdCB3b3JraW5nIFxuW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiIsIltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFwcF9fbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19saXN0IHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5hcHBfX2xpc3Qge1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuYXBwX19saXN0IC5pZ3gtbGlzdF9faXRlbS1hY3Rpb25zIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19saXN0IC5pZ3gtbGlzdF9faXRlbS1hY3Rpb25zIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuYXBwX19saXN0LS1kZWF0aHMgLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0LS1yZWNvdmVyZWQgLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0LS1jb25maXJtZWQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuOjpuZy1kZWVwIC5hcHBfX2xpc3QtLWNvbmZpcm1lZCAuaWd4LWNhcmQtaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19saXN0LS1jb25maXJtZWQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuOjpuZy1kZWVwIC5hcHBfX2xpc3QgKyAuYXBwX19saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19saXN0ICsgLmFwcF9fbGlzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG59XG46Om5nLWRlZXAgLmFwcF9fbGlzdCAuYXBwX19saXN0LWhvbGRlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0IC5hcHBfX2NhcmQtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogODBweDtcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0IC5hcHBfX2NhcmQtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5hcHBfX2xpc3QgLmlneC1saXN0X19pdGVtLWJhc2Uge1xuICBmbGV4OiAxIDAgYXV0bztcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0IC5hcHBfX2xpc3QtaW5uZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbjo6bmctZGVlcCAuYXBwX19saXN0IC5hcHBfX2xvYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICA6Om5nLWRlZXAgLmlneC1saXN0X19pdGVtLWxpbmUtdGl0bGUsXG46Om5nLWRlZXAgLmlneC1saXN0X19pdGVtLWxpbmVzIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hcHAtbGlnaHQtdGhlbWUgLmFwcF9fbGlzdC0tZGVhdGhzIC5hcHBfX2NhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5LCA3NCwgMC4wMykgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYXBwLWxpZ2h0LXRoZW1lIC5hcHBfX2xpc3QtLWRlYXRocyAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZmYxMzRhO1xufVxuOjpuZy1kZWVwIC5hcHAtbGlnaHQtdGhlbWUgLmFwcF9fbGlzdC0tcmVjb3ZlcmVkIC5hcHBfX2NhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3OCwgMTg0LCA5OCwgMC4wMykgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYXBwLWxpZ2h0LXRoZW1lIC5hcHBfX2xpc3QtLXJlY292ZXJlZCAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNGViODYyO1xufVxuOjpuZy1kZWVwIC5hcHAtbGlnaHQtdGhlbWUgLmFwcF9fbGlzdC0tY29uZmlybWVkIC5hcHBfX2NhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MiwgNTcsIDExNCwgMC4wMykgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYXBwLWxpZ2h0LXRoZW1lIC5hcHBfX2xpc3QtLWNvbmZpcm1lZCAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjM0UzOTcyO1xufVxuOjpuZy1kZWVwIC5hcHAtZGFyay10aGVtZSAuYXBwX19saXN0LS1kZWF0aHMgLmFwcF9fY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTM4LCAxNDQsIDAuMDMpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFwcC1kYXJrLXRoZW1lIC5hcHBfX2xpc3QtLWRlYXRocyAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjRkY4QTkwO1xufVxuOjpuZy1kZWVwIC5hcHAtZGFyay10aGVtZSAuYXBwX19saXN0LS1yZWNvdmVyZWQgLmFwcF9fY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk1LCAxOTEsIDExMiwgMC4wMykgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUgLmFwcF9fbGlzdC0tcmVjb3ZlcmVkIC5pZ3gtY2FyZC1oZWFkZXJfX3N1YnRpdGxlIHtcbiAgY29sb3I6ICM1RkJGNzA7XG59XG46Om5nLWRlZXAgLmFwcC1kYXJrLXRoZW1lIC5hcHBfX2xpc3QtLWNvbmZpcm1lZCAuYXBwX19jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTUzLCAyNTUsIDAuMDMpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFwcC1kYXJrLXRoZW1lIC5hcHBfX2xpc3QtLWNvbmZpcm1lZCAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNDdCNkZGO1xufSIsIkBpbXBvcnQgXCIuLi90aGVtZXMvdmFyc1wiO1xyXG46Om5nLWRlZXAge1xyXG4gIC5hcHBfX2xpc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogJGFwcC1nYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pZ3gtbGlzdF9faXRlbS1hY3Rpb25zIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1kZWF0aHMge1xyXG4gICAgICAuaWd4LWNhcmQtaGVhZGVyX190aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1yZWNvdmVyZWQge1xyXG4gICAgICAuaWd4LWNhcmQtaGVhZGVyX190aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLS1jb25maXJtZWQge1xyXG4gICAgICAuaWd4LWNhcmQtaGVhZGVyX190aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICsgLmFwcF9fbGlzdCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PTQ1MHB4XCIpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRhcHAtZ2FwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9fbGlzdC1ob2xkZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9fY2FyZC1oZWFkZXIge1xyXG4gICAgICBtaW4taGVpZ2h0OiAkY2FyZC1oZWFkZXItaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHBfX2NhcmQtY29udGVudCB7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skY2FyZC1oZWFkZXItaGVpZ2h0fSk7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pZ3gtbGlzdF9faXRlbS1iYXNlIHtcclxuICAgICAgZmxleDogMSAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9fbGlzdC1pbm5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHBfX2xvYWRlciB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWd4LWxpc3RfX2l0ZW0tbGluZS10aXRsZSxcclxuICAuaWd4LWxpc3RfX2l0ZW0tbGluZXMge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHAtbGlnaHQtdGhlbWV7XHJcbiAgICAuYXBwX19saXN0IHtcclxuICAgICAgJi0tZGVhdGhzIHtcclxuICAgICAgICAuYXBwX19jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRsaWdodC12YXJzLCBkZWF0aHMtYmcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pZ3gtY2FyZC1oZWFkZXJfX3N1YnRpdGxle1xyXG4gICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGxpZ2h0LXZhcnMsIGRlYXRocy1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtLXJlY292ZXJlZCB7XHJcbiAgICAgICAgLmFwcF9fY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkbGlnaHQtdmFycywgcmVjb3ZlcmVkLWJnKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZXtcclxuICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRsaWdodC12YXJzLCByZWNvdmVyZWQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLS1jb25maXJtZWQge1xyXG4gICAgICAgIC5hcHBfX2NhcmQtaGVhZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGxpZ2h0LXZhcnMsIGNvbmZpcm1lZC1iZykgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlneC1jYXJkLWhlYWRlcl9fc3VidGl0bGV7XHJcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkbGlnaHQtdmFycywgY29uZmlybWVkLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHAtZGFyay10aGVtZSB7XHJcbiAgICAuYXBwX19saXN0IHtcclxuICAgICAgJi0tZGVhdGhzIHtcclxuICAgICAgICAuYXBwX19jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRkYXJrLXZhcnMsIGRlYXRocy1iZykgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlneC1jYXJkLWhlYWRlcl9fc3VidGl0bGV7XHJcbiAgICAgICAgICBjb2xvcjogbWFwLWdldCgkZGFyay12YXJzLCBkZWF0aHMtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLS1yZWNvdmVyZWQge1xyXG4gICAgICAgIC5hcHBfX2NhcmQtaGVhZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGRhcmstdmFycywgcmVjb3ZlcmVkLWJnKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWd4LWNhcmQtaGVhZGVyX19zdWJ0aXRsZXtcclxuICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRkYXJrLXZhcnMsIHJlY292ZXJlZC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtLWNvbmZpcm1lZCB7XHJcbiAgICAgICAgLmFwcF9fY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkZGFyay12YXJzLCBjb25maXJtZWQtYmcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pZ3gtY2FyZC1oZWFkZXJfX3N1YnRpdGxle1xyXG4gICAgICAgICAgY29sb3I6IG1hcC1nZXQoJGRhcmstdmFycywgY29uZmlybWVkLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pZ25pdGV1aS1hbmd1bGFyL2xpYi9jb3JlL3N0eWxlcy9iYXNlL2luZGV4XCI7XHJcbkBpbXBvcnQgXCJwYWxldHRlc1wiO1xyXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA4MHB4O1xyXG4kYXBwLWdhcDogMTZweDtcclxuXHJcbiRsaWdodC12YXJzOihcclxuICBjb25maXJtZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzZWNvbmRhcnknKSxcclxuICBjb25maXJtZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3NlY29uZGFyeScpLCAuMDMpLFxyXG4gIGRlYXRocy1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2Vycm9yJyksXHJcbiAgZGVhdGhzLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdlcnJvcicpLCAuMDMpLFxyXG4gIHJlY292ZXJlZC1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3N1Y2Nlc3MnKSxcclxuICByZWNvdmVyZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3N1Y2Nlc3MnKSwgLjAzKSxcclxuICBmb290ZXItYmFja2dyb3VuZDogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2dyYXlzJywgMTAwKSxcclxuICBsaW5rLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnc2Vjb25kYXJ5JyksXHJcbiAgdG9vbHRpcC1iZzogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3N1cmZhY2UnKSxcclxuICBsb2dvLWNvbG9yOiAjMDAwXHJcbik7XHJcblxyXG4kZGFyay12YXJzOihcclxuICBjb25maXJtZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ2luZm8nKSxcclxuICBjb25maXJtZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc2Vjb25kYXJ5JyksIC4wMyksXHJcbiAgZGVhdGhzLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdlcnJvcicpLFxyXG4gIGRlYXRocy1iZzogcmdiYShpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdlcnJvcicpLCAuMDMpLFxyXG4gIHJlY292ZXJlZC1jb2xvcjogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc3VjY2VzcycpLFxyXG4gIHJlY292ZXJlZC1iZzogcmdiYShpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzdWNjZXNzJyksIC4wMyksXHJcbiAgZm9vdGVyLWJhY2tncm91bmQ6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ2dyYXlzJywgMTAwKSxcclxuICBsaW5rLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzZWNvbmRhcnknKSxcclxuICB0b29sdGlwLWJnOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzdXJmYWNlJyksXHJcbiAgbG9nby1jb2xvcjogI2ZmZixcclxuICBkYXJrLWdyYWRpZW50OiAoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAncHJpbWFyeScsIDYwMCksIGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3N1cmZhY2UnKSlcclxuKTtcclxuXHJcbkBpbXBvcnQgXCJ+aW5jbHVkZS1tZWRpYS9kaXN0L2luY2x1ZGUtbWVkaWFcIjtcclxuXHJcblxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return ListCasesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [{ provide: igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["DisplayDensityToken"], useValue: { displayDensity: 'comfortable' } }],
                selector: 'app-list-cases',
                templateUrl: './list-cases.component.html',
                styleUrls: ['./list-cases.component.scss'],
                host: { class: 'app__list' }
            }]
    }], null, { regionSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeline-chart/timeline-chart.component */ "./src/app/timeline-chart/timeline-chart.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list-cases/list-cases.component */ "./src/app/list-cases/list-cases.component.ts");
/* harmony import */ var _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map-cases/map-cases.component */ "./src/app/map-cases/map-cases.component.ts");









var _c0 = ["map"];
var _c1 = ["confirmedList"];
var _c2 = ["recoveredList"];
var _c3 = ["deathsList"];
var MainComponent = /** @class */ (function () {
    function MainComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateTimeRetrieved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var lastCommitTime$ = this.dataService.getLatestCommits();
        lastCommitTime$.subscribe(function (data) {
            var lastCommit = new Date(data[0].commit.author.date).getTime();
            _this.updateTimeRetrieved.emit(lastCommit);
            _this.loadDataSets(lastCommit);
        });
    }
    /**
     * Fetches the corresponding Confirmed, Recovered and Deaths cases data.
     */
    MainComponent.prototype.loadDataSets = function (lastCommit) {
        var _this = this;
        this.dataRequestConfirmed$ = this.dataService.getDataSet(0, lastCommit);
        this.dataRequestRecovered$ = this.dataService.getDataSet(1, lastCommit);
        this.dataRequestDeaths$ = this.dataService.getDataSet(2, lastCommit);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([this.dataRequestConfirmed$, this.dataRequestRecovered$, this.dataRequestDeaths$]).subscribe(function (results) {
            _this.charts.transformChartConfirmedCases(results[0].toString());
            _this.charts.transformChartRecoveredCases(results[1].toString());
            var jsonDataConfirmed = _this.dataService.csvToJson(results[0].toString());
            var jsonDataRecovered = _this.dataService.csvToJson(results[1].toString());
            var jsonDataDeaths = _this.dataService.csvToJson(results[2].toString());
            var worldData = { totalConfirmed: jsonDataConfirmed, totalRecovered: jsonDataRecovered, totalDeaths: jsonDataDeaths };
            _this.confirmedList.data = jsonDataConfirmed;
            _this.recoveredList.data = jsonDataRecovered;
            _this.deathsList.data = jsonDataDeaths;
            _this.map.data = worldData;
            _this.map.onDataSetSelected({ index: 0 });
            // Hide splash screen after the data is loaded
            _this.messageEvent.emit('splash-screen--hidden');
        });
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.dataRequestConfirmed$) {
            this.dataRequestConfirmed$.unsubscribe();
        }
        if (this.dataRequestRecovered$) {
            this.dataRequestRecovered$.unsubscribe();
        }
        if (this.dataRequestDeaths$) {
            this.dataRequestDeaths$.unsubscribe();
        }
    };
    MainComponent.prototype.formatDateLabel = function (item) {
        return item.date.toLocaleDateString();
    };
    MainComponent.prototype.onRegionSelected = function (region) {
        this.map.zoomMapToLoc(region.lat, region.lon);
    };
    MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["RemoteDataService"])); };
    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_2__["TimelineChartComponent"], true, _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_2__["TimelineChartComponent"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.charts = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmedList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.recoveredList = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.deathsList = _t.first);
        } }, hostAttrs: [1, "app__main"], outputs: { messageEvent: "messageEvent", updateTimeRetrieved: "updateTimeRetrieved" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_data_service__WEBPACK_IMPORTED_MODULE_1__["RemoteDataService"]])], decls: 20, vars: 0, consts: [[1, "app__main-inner"], [1, "app__row", "app__row--left"], ["type", "Confirmed", 1, "app__list--confirmed", 3, "regionSelected"], ["confirmedList", ""], [1, "app__col", "app__col--map"], [1, "app__mobile-header"], ["map", ""], [1, "app__col", "app__col--stats"], [1, "app__row", "app__list-stack"], ["type", "Deaths", 1, "app__list--deaths", 3, "regionSelected"], ["deathsList", ""], ["type", "Recovered", 1, "app__list--recovered", 3, "regionSelected"], ["recoveredList", ""], [1, "app-timeline-chart"], ["charts", ""]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-list-cases", 2, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("regionSelected", function MainComponent_Template_app_list_cases_regionSelected_2_listener($event) { return ctx.onRegionSelected($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coronavirus ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "COVID-19");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Global Cases");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-map-cases", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-list-cases", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("regionSelected", function MainComponent_Template_app_list_cases_regionSelected_14_listener($event) { return ctx.onRegionSelected($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-list-cases", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("regionSelected", function MainComponent_Template_app_list_cases_regionSelected_16_listener($event) { return ctx.onRegionSelected($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-timeline-chart", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_list_cases_list_cases_component__WEBPACK_IMPORTED_MODULE_4__["ListCasesComponent"], _map_cases_map_cases_component__WEBPACK_IMPORTED_MODULE_5__["MapCasesComponent"], _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_2__["TimelineChartComponent"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__main {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 0%;\n      flex: 1 0 0%;\n  height: calc(100vh - 126px);\n  overflow: hidden;\n}\n\n@media (max-width: 1024px) {\n    .app__main {\n    height: auto;\n    overflow: auto;\n  }\n}\n\n  .igx-typography .app__mobile-header {\n  display: none;\n  font-size: 18px;\n  margin: 0 0 1rem 0;\n  text-align: center;\n  font-weight: 500;\n  letter-spacing: 1px;\n  line-height: normal;\n}\n\n@media (max-width: 768px) {\n    .igx-typography .app__mobile-header {\n    display: block;\n    height: auto;\n    overflow: auto;\n  }\n}\n\n  .app-timeline-chart {\n  min-height: 60%;\n}\n\n  .app__main-inner {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 1024px) {\n    .app__main-inner {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n}\n\n  .app__list-stack {\n  max-height: 40%;\n  height: 40%;\n}\n\n@media (max-width: 1024px) {\n    .app__list-stack {\n    height: auto;\n  }\n}\n\n@media (max-width: 450px) {\n    .app__list-stack {\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n}\n\n  .app__row {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n  .app__row--left {\n  width: 60%;\n  min-width: 40%;\n}\n\n@media (max-width: 1024px) {\n    .app__row--left {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n    .app__row--left {\n    -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n  }\n}\n\n  .app__charts-legend {\n  padding: 8px 0;\n}\n\n  .ig-chart-legend-items-list,   .ig-chart-legend-item {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-align: center !important;\n      align-items: center !important;\n}\n\n@media (max-width: 450px) {\n    .ig-chart-legend-items-list {\n    -ms-flex-direction: column !important;\n        flex-direction: column !important;\n    -ms-flex-align: start !important;\n        align-items: flex-start !important;\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n}\n\n@media (max-width: 450px) {\n    .ig-chart-legend-item {\n    -ms-flex-align: start !important;\n        align-items: flex-start !important;\n    margin: 0 0 0.5rem 0 !important;\n  }\n}\n\n  .ig-chart-legend-item td {\n  margin-right: 4px !important;\n  padding: 0 !important;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n  .ig-chart-legend-item td span {\n  font-size: 10px;\n}\n\n@media (max-width: 1160px) {\n    .ig-chart-legend-item td span {\n    font-size: 8px;\n  }\n}\n\n  .app__col {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n  .app__col--stats {\n  height: 100%;\n  width: 40vw;\n}\n\n@media (max-width: 1024px) {\n    .app__col--stats {\n    width: 100%;\n  }\n}\n\n  .app__col--map {\n  padding: 16px 0;\n  height: 100%;\n  -ms-flex: 1;\n      flex: 1;\n  min-width: 40vw;\n}\n\n@media (max-width: 1024px) {\n    .app__col--map {\n    height: 600px;\n    min-width: auto;\n    padding-right: 16px;\n    padding-bottom: 0;\n  }\n}\n\n@media (max-width: 768px) {\n    .app__col--map {\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL25vZGVfbW9kdWxlc1xcaWduaXRldWktYW5ndWxhclxcbGliXFxjb3JlXFxzdHlsZXNcXGJhc2VcXHV0aWxpdGllc1xcX3F1aXJrcy5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vQzpcXENPVklELTE5LURhc2hib2FyZC9zcmNcXGFwcFxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL25vZGVfbW9kdWxlc1xcaW5jbHVkZS1tZWRpYVxcZGlzdFxcX2luY2x1ZGUtbWVkaWEuc2NzcyIsInNyYy9hcHAvbWFpbi9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFx0aGVtZXNcXF92YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx3QkFBQTtBQ0RKOztBQ0FFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7TUFBQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBREdKOztBRXdpQkk7RUQvaUJGO0lBT0ksWUFBQTtJQUNBLGNBQUE7RURJSjtBQUNGOztBQ0RFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FER0o7O0FFeWhCSTtFRG5pQkY7SUFVSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RURJSjtBQUNGOztBQ0RFO0VBQ0UsZUFBQTtBREdKOztBQ0FFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURFSjs7QUUwZ0JJO0VEL2dCRjtJQU1JLG1CQUFBO1FBQUEsZUFBQTtFREdKO0FBQ0Y7O0FDQUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBREVKOztBRWlnQkk7RURyZ0JGO0lBSUksWUFBQTtFRElKO0FBQ0Y7O0FFNGZJO0VEcmdCRjtJQU9JLDBCQUFBO1FBQUEsc0JBQUE7RURNSjtBQUNGOztBQ0hFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FES0o7O0FDSEk7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBREtOOztBRWdmSTtFRHZmQTtJQUtJLFdBQUE7SUFDQSxlQUFBO0VETU47QUFDRjs7QUUwZUk7RUR2ZkE7SUFTSSxrQ0FBQTtRQUFBLDhCQUFBO0VEUU47QUFDRjs7QUNKRTtFQUNFLGNBQUE7QURNSjs7QUNERTs7RUFFRSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsaUNBQUE7TUFBQSw4QkFBQTtBREdKOztBRTZkSTtFRDdkRjtJQUVJLHFDQUFBO1FBQUEsaUNBQUE7SUFDQSxnQ0FBQTtRQUFBLGtDQUFBO0lBQ0EsMEJBQUE7SUFDQSwyQkFBQTtFREVKO0FBQ0Y7O0FFcWRJO0VEcGRGO0lBRUksZ0NBQUE7UUFBQSxrQ0FBQTtJQUNBLCtCQUFBO0VEQ0o7QUFDRjs7QUNFRTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QURBSjs7QUNDSTtFQUNFLGVBQUE7QURDTjs7QUV1Y0k7RUR6Y0E7SUFJSSxjQUFBO0VERU47QUFDRjs7QUNFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QURBSjs7QUNFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEQU47O0FFMGJJO0VENWJBO0lBSUksV0FBQTtFREVOO0FBQ0Y7O0FDQ0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7TUFBQSxPQUFBO0VBQ0EsZUFBQTtBRENOOztBRSthSTtFRHBiQTtJQU9JLGFBQUE7SUFDQSxlQUFBO0lBQ0EsbUJFbklFO0lGb0lGLGlCQUFBO0VERU47QUFDRjs7QUV1YUk7RURwYkE7SUFjSSxrQkV4SUU7RUgySVI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaGFjayBmb3IgYmluZGluZyB0byBbaGlkZGVuXSBwcm9wZXJ0eVxuLy8gbm90IHdvcmtpbmcgXG5baGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYXBwX19tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjZweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19tYWluIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbjo6bmctZGVlcCAuaWd4LXR5cG9ncmFwaHkgLmFwcF9fbW9iaWxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOjpuZy1kZWVwIC5pZ3gtdHlwb2dyYXBoeSAuYXBwX19tb2JpbGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbn1cbjo6bmctZGVlcCAuYXBwLXRpbWVsaW5lLWNoYXJ0IHtcbiAgbWluLWhlaWdodDogNjAlO1xufVxuOjpuZy1kZWVwIC5hcHBfX21haW4taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICA6Om5nLWRlZXAgLmFwcF9fbWFpbi1pbm5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG46Om5nLWRlZXAgLmFwcF9fbGlzdC1zdGFjayB7XG4gIG1heC1oZWlnaHQ6IDQwJTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19saXN0LXN0YWNrIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICA6Om5nLWRlZXAgLmFwcF9fbGlzdC1zdGFjayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuOjpuZy1kZWVwIC5hcHBfX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLmFwcF9fcm93LS1sZWZ0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWluLXdpZHRoOiA0MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19yb3ctLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19yb3ctLWxlZnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy1sZWdlbmQge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbjo6bmctZGVlcCAuaWctY2hhcnQtbGVnZW5kLWl0ZW1zLWxpc3QsXG46Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgOjpuZy1kZWVwIC5pZy1jaGFydC1sZWdlbmQtaXRlbXMtbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgOjpuZy1kZWVwIC5pZy1jaGFydC1sZWdlbmQtaXRlbSB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCAwLjVyZW0gMCAhaW1wb3J0YW50O1xuICB9XG59XG46Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHRkIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOjpuZy1kZWVwIC5pZy1jaGFydC1sZWdlbmQtaXRlbSB0ZCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCkge1xuICA6Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHRkIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmFwcF9fY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjo6bmctZGVlcCAuYXBwX19jb2wtLXN0YXRzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNDB2dztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgOjpuZy1kZWVwIC5hcHBfX2NvbC0tc3RhdHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG46Om5nLWRlZXAgLmFwcF9fY29sLS1tYXAge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA0MHZ3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICA6Om5nLWRlZXAgLmFwcF9fY29sLS1tYXAge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmFwcF9fY29sLS1tYXAge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi90aGVtZXMvdmFyc1wiO1xyXG46Om5nLWRlZXAge1xyXG4gIC5hcHBfX21haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEyNnB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlneC10eXBvZ3JhcGh5IC5hcHBfX21vYmlsZS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMCAwIHJlbSgxNnB4KSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHAtdGltZWxpbmUtY2hhcnR7XHJcbiAgICBtaW4taGVpZ2h0OiA2MCU7XHJcbiAgfVxyXG5cclxuICAuYXBwX19tYWluLWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHBfX2xpc3Qtc3RhY2sge1xyXG4gICAgbWF4LWhlaWdodDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD00NTBweFwiKSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXBwX19yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAmLS1sZWZ0IHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWluLXdpZHRoOiA0MCU7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXBwX19jaGFydHMtbGVnZW5kIHtcclxuICAgIHBhZGRpbmc6ICgkYXBwLWdhcCAvIDIpIDA7XHJcbiAgICA+IGRpdiB7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWctY2hhcnQtbGVnZW5kLWl0ZW1zLWxpc3QsXHJcbiAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVte1xyXG4gICAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaWctY2hhcnQtbGVnZW5kLWl0ZW1zLWxpc3Qge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PTQ1MHB4XCIpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD00NTBweFwiKSB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCAwIHJlbSg4cHgpIDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pZy1jaGFydC1sZWdlbmQtaXRlbSB0ZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9MTE2MHB4XCIpIHtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcF9fY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYtLXN0YXRzIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDo0MHZ3O1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtLW1hcCB7XHJcbiAgICAgIHBhZGRpbmc6ICRhcHAtZ2FwIDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWluLXdpZHRoOiA0MHZ3O1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRhcHAtZ2FwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICRhcHAtZ2FwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIH1cclxufVxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9pZ25pdGV1aS1hbmd1bGFyL2xpYi9jb3JlL3N0eWxlcy9iYXNlL2luZGV4XCI7XHJcbkBpbXBvcnQgXCJwYWxldHRlc1wiO1xyXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA4MHB4O1xyXG4kYXBwLWdhcDogMTZweDtcclxuXHJcbiRsaWdodC12YXJzOihcclxuICBjb25maXJtZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzZWNvbmRhcnknKSxcclxuICBjb25maXJtZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3NlY29uZGFyeScpLCAuMDMpLFxyXG4gIGRlYXRocy1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2Vycm9yJyksXHJcbiAgZGVhdGhzLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdlcnJvcicpLCAuMDMpLFxyXG4gIHJlY292ZXJlZC1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3N1Y2Nlc3MnKSxcclxuICByZWNvdmVyZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3N1Y2Nlc3MnKSwgLjAzKSxcclxuICBmb290ZXItYmFja2dyb3VuZDogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2dyYXlzJywgMTAwKSxcclxuICBsaW5rLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnc2Vjb25kYXJ5JyksXHJcbiAgdG9vbHRpcC1iZzogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3N1cmZhY2UnKSxcclxuICBsb2dvLWNvbG9yOiAjMDAwXHJcbik7XHJcblxyXG4kZGFyay12YXJzOihcclxuICBjb25maXJtZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ2luZm8nKSxcclxuICBjb25maXJtZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc2Vjb25kYXJ5JyksIC4wMyksXHJcbiAgZGVhdGhzLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdlcnJvcicpLFxyXG4gIGRlYXRocy1iZzogcmdiYShpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdlcnJvcicpLCAuMDMpLFxyXG4gIHJlY292ZXJlZC1jb2xvcjogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc3VjY2VzcycpLFxyXG4gIHJlY292ZXJlZC1iZzogcmdiYShpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzdWNjZXNzJyksIC4wMyksXHJcbiAgZm9vdGVyLWJhY2tncm91bmQ6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ2dyYXlzJywgMTAwKSxcclxuICBsaW5rLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzZWNvbmRhcnknKSxcclxuICB0b29sdGlwLWJnOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzdXJmYWNlJyksXHJcbiAgbG9nby1jb2xvcjogI2ZmZixcclxuICBkYXJrLWdyYWRpZW50OiAoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAncHJpbWFyeScsIDYwMCksIGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3N1cmZhY2UnKSlcclxuKTtcclxuXHJcbkBpbXBvcnQgXCJ+aW5jbHVkZS1tZWRpYS9kaXN0L2luY2x1ZGUtbWVkaWFcIjtcclxuXHJcblxyXG4iXX0= */"] });
    return MainComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["RemoteDataService"]],
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
                host: { class: 'app__main' }
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["RemoteDataService"] }]; }, { charts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_2__["TimelineChartComponent"], { read: _timeline_chart_timeline_chart_component__WEBPACK_IMPORTED_MODULE_2__["TimelineChartComponent"] }]
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
        }], messageEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateTimeRetrieved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/map-cases/EsriMapsUtility.ts":
/*!**********************************************!*\
  !*** ./src/app/map-cases/EsriMapsUtility.ts ***!
  \**********************************************/
/*! exports provided: EsriStyle, EsriUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriStyle", function() { return EsriStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriUtility", function() { return EsriUtility; });
/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
/**
 * Describes available links to imagery tile sources on public ArcGIS/Esri servers.
 * You can find up-to-date list on https://services.arcgisonline.com/arcgis/rest/services
 */
var EsriStyle;
(function (EsriStyle) {
    // these Esri maps show geographic tiles for the whole of world
    EsriStyle["WorldStreetMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";
    EsriStyle["WorldTopographicMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer";
    EsriStyle["WorldImageryMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer";
    EsriStyle["WorldOceansMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";
    EsriStyle["WorldNationalGeoMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer";
    EsriStyle["WorldTerrainMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer";
    EsriStyle["WorldDeLormesMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer";
    EsriStyle["WorldLightGrayMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer";
    EsriStyle["WorldShadedReliefMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer";
    EsriStyle["WorldPhysicalMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer";
    EsriStyle["WorldDarkGrayMap"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer";
    // these Esri maps show geographic tiles for the whole of world without contours of continents
    // therefore the Map should also load a shapefile of continents when using them
    EsriStyle["WorldAdminOverlay"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer";
    EsriStyle["WorldTransportationOverlay"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer";
    EsriStyle["WorldBoundariesDarkOverlay"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer";
    EsriStyle["WorldBoundariesLightOverlay"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer";
    EsriStyle["WorldLabelsLightGrayOverlay"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer";
    // these Esri maps show only geographic tiles for the USA
    // therefore the Map should be zoomed in to geographic bounds of USA when using them
    EsriStyle["UsaOwnerOccupiedHousing"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Owner_Occupied_Housing/MapServer";
    EsriStyle["UsaSoilSurvey"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/Soil_Survey_Map/MapServer";
    EsriStyle["UsaPopulationOlderThanAge64"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Percent_Over_64/MapServer";
    EsriStyle["UsaPopulationYoungerThan18"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Percent_Under_18/MapServer";
    EsriStyle["UsaPopulationGrowth2015"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Projected_Population_Change/MapServer";
    EsriStyle["UsaUnemploymentRate"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Unemployment_Rate/MapServer";
    EsriStyle["UsaSocialVulnerability"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Social_Vulnerability_Index/MapServer";
    EsriStyle["UsaRetailSpendingPotential"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Retail_Spending_Potential/MapServer";
    EsriStyle["UsaPopulationChange2010"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Recent_Population_Change/MapServer";
    EsriStyle["UsaPopulationChange2000"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_1990-2000_Population_Change/MapServer";
    EsriStyle["UsaPopulationDensity"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Population_Density/MapServer";
    EsriStyle["UsaPopulationByGender"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Population_by_Sex/MapServer";
    EsriStyle["UsaMedianHouseholdIncome"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Household_Income/MapServer";
    EsriStyle["UsaMedianNetWorth"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Net_Worth/MapServer";
    EsriStyle["UsaMedianHomeValue"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Home_Value/MapServer";
    EsriStyle["UsaMedianAge"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Median_Age/MapServer";
    EsriStyle["UsaLaborForceParticipation"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Labor_Force_Participation_Rate/MapServer";
    EsriStyle["UsaAverageHouseholdSize"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Average_Household_Size/MapServer";
    EsriStyle["UsaDiversityIndex"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Diversity_Index/MapServer";
    EsriStyle["UsaRailNetwork"] = "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer";
})(EsriStyle || (EsriStyle = {}));
var EsriUtility = /** @class */ (function () {
    function EsriUtility() {
    }
    EsriUtility.getUri = function (style) {
        var isHttpSecured = window.location.toString().startsWith('https:');
        // resolving Esri Server uri based on hosting website
        var uri = style;
        if (!isHttpSecured) {
            uri = uri.replace('https:', 'http:');
        }
        // console.log("uri " + uri);
        return uri;
    };
    return EsriUtility;
}());



/***/ }),

/***/ "./src/app/map-cases/map-cases.component.ts":
/*!**************************************************!*\
  !*** ./src/app/map-cases/map-cases.component.ts ***!
  \**************************************************/
/*! exports provided: MapCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCasesComponent", function() { return MapCasesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular-maps */ "./node_modules/igniteui-angular-maps/__ivy_ngcc__/esm5/igniteui-angular-maps.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular-charts */ "./node_modules/igniteui-angular-charts/__ivy_ngcc__/esm5/igniteui-angular-charts.js");
/* harmony import */ var _EsriMapsUtility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EsriMapsUtility */ "./src/app/map-cases/EsriMapsUtility.ts");
/* harmony import */ var igniteui_angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! igniteui-angular-core */ "./node_modules/igniteui-angular-core/__ivy_ngcc__/esm5/igniteui-angular-core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










var _c0 = ["map"];
var _c1 = ["template"];
function MapCasesComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", button_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", button_r6.name, " ");
} }
function MapCasesComponent_ng_template_5_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r8.region, ", ", item_r8.country, "");
} }
function MapCasesComponent_ng_template_5_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.country);
} }
function MapCasesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapCasesComponent_ng_template_5_h2_1_Template, 2, 2, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapCasesComponent_ng_template_5_h1_2_Template, 2, 1, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Infected: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recovered: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Deaths: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r8 = ctx.item;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showRegion(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.showRegion(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r3.getTotalInfectedForCountry(item_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r3.getTotalRecoveredForCountry(item_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx_r3.getTotalDeathsForCountry(item_r8)));
} }
function MapCasesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "image", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var MapCasesComponent = /** @class */ (function () {
    function MapCasesComponent() {
        this.darkTheme = true;
        this.series = this.createSeries();
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
        this.dataSets = ['totalConfirmed', 'totalRecovered', 'totalDeaths'];
        this.brushes = [
            // dark theme brushes
            [
                ['rgba(0,153,255, .3)'],
                ['rgba(95,191,112, .4)'],
                ['rgba(255, 138, 144, .4)']
            ],
            // light theme brushes
            [
                ['rgba(62,57,114, .3)'],
                ['rgba(78,184,98, .3)'],
                ['rgba(255, 17, 94, .3)']
            ]
        ];
        this.index = 0;
        this.currentSeries = this.dataSets[this.index];
    }
    MapCasesComponent.prototype.ngOnInit = function () {
        this.changeMap();
        this.setInitialMapZoom();
    };
    MapCasesComponent.prototype.setInitialMapZoom = function () {
        var geoBounds = {
            height: 0,
            left: -0,
            top: 40,
            width: 260
        };
        this.map.zoomToGeographic(geoBounds);
    };
    /**
     * Assign corresponding EsriMapStyle for Light/Dark app theme
     */
    MapCasesComponent.prototype.changeMap = function () {
        var tileSource = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["ArcGISOnlineMapImagery"]();
        tileSource.i = tileSource;
        if (this.darkTheme) {
            tileSource.mapServerUri = _EsriMapsUtility__WEBPACK_IMPORTED_MODULE_4__["EsriUtility"].getUri(_EsriMapsUtility__WEBPACK_IMPORTED_MODULE_4__["EsriStyle"].WorldDarkGrayMap);
        }
        else {
            tileSource.mapServerUri = _EsriMapsUtility__WEBPACK_IMPORTED_MODULE_4__["EsriUtility"].getUri(_EsriMapsUtility__WEBPACK_IMPORTED_MODULE_4__["EsriStyle"].WorldLightGrayMap);
        }
        this.map.backgroundContent = tileSource;
    };
    /**
     * Assign corresponding brushScale for the map based on Light/Dark theme and current map series
     */
    MapCasesComponent.prototype.changeMapSeriesBrushScale = function () {
        var brushScale = this.createBrushScale();
        var series = this.map.series.item(0);
        series.fillScale = brushScale;
        series.markerOutline = brushScale.brushes[0];
    };
    /**
     * Switch to the corresponding series data depending on selected button
     */
    MapCasesComponent.prototype.onDataSetSelected = function (event) {
        var rect = this.map.windowRect;
        this.index = event.index;
        this.currentSeries = this.dataSets[this.index];
        if (this.data) {
            this.addMapSeries(event.index);
            this.map.windowRect = rect;
        }
    };
    /**
     * Fill the map series corresponding to the passed index with tile imagery and add to map.
     */
    MapCasesComponent.prototype.addMapSeries = function (index) {
        var locations = this.data[this.currentSeries].data;
        // Geopraphic proportional symbol series
        var symbolSeries = this.series[index];
        var sizeScale = this.createSizeScale();
        var brushScale = this.createBrushScale();
        symbolSeries.dataSource = locations;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.markerOutline = brushScale.brushes[0];
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.clear();
        this.map.series.add(symbolSeries);
    };
    MapCasesComponent.prototype.showRegion = function (item) {
        return item.region.length !== 0 && item.region !== item.country;
    };
    /**
     * Create three symbol series that will be used to represnt each data set (Confirmed, Recivered, Deaths).
     */
    MapCasesComponent.prototype.createSeries = function () {
        var series = [];
        for (var i = 0; i < 3; i++) {
            var symbolSeries = new igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxGeographicProportionalSymbolSeriesComponent"]();
            symbolSeries.markerType = igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_3__["MarkerType"].Circle;
            symbolSeries.fillMemberPath = 'value';
            symbolSeries.radiusMemberPath = 'value';
            symbolSeries.latitudeMemberPath = 'lat';
            symbolSeries.longitudeMemberPath = 'lon';
            series.push(symbolSeries);
        }
        return series;
    };
    /**
     * Zoom the map to show the corresponding country.
     */
    MapCasesComponent.prototype.onSeriesClicked = function (event) {
        var lat = event.args.item.lat;
        var lon = event.args.item.lon;
        this.zoomMapToLoc(lat, lon);
    };
    MapCasesComponent.prototype.zoomMapToLoc = function (lat, lon) {
        var geoRect = new igniteui_angular_core__WEBPACK_IMPORTED_MODULE_5__["Rect"](0, lon - 5, lat - 8, 10, 15);
        this.map.zoomToGeographic(geoRect);
    };
    MapCasesComponent.prototype.createBrushScale = function () {
        var brushScale = new igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_3__["IgxValueBrushScaleComponent"]();
        var maxValue = this.data[this.currentSeries].peakValue;
        if (this.darkTheme) {
            brushScale.brushes = this.brushes[0][this.index];
        }
        else {
            brushScale.brushes = this.brushes[1][this.index];
        }
        brushScale.minimumValue = 1;
        brushScale.maximumValue = maxValue;
        return brushScale;
    };
    MapCasesComponent.prototype.createSizeScale = function () {
        var sizeScale = new igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_3__["IgxSizeScaleComponent"]();
        sizeScale.minimumValue = 1;
        sizeScale.maximumValue = 60;
        sizeScale.isLogarithmic = true;
        return sizeScale;
    };
    MapCasesComponent.prototype.getTotalInfectedForCountry = function (item) {
        if (this.index === 0) {
            return item.value;
        }
        var dataRec = this.data[this.dataSets[0]].data.find(function (rec) {
            return rec.region === item.region && rec.country === item.country;
        });
        return dataRec ? dataRec.value : 0;
    };
    MapCasesComponent.prototype.getTotalRecoveredForCountry = function (item) {
        if (this.index === 1) {
            return item.value;
        }
        var dataRec = this.data[this.dataSets[1]].data.find(function (rec) {
            return rec.region === item.region && rec.country === item.country;
        });
        return dataRec ? dataRec.value : 0;
    };
    MapCasesComponent.prototype.getTotalDeathsForCountry = function (item) {
        if (this.index === 2) {
            return item.value;
        }
        var dataRec = this.data[this.dataSets[2]].data.find(function (rec) {
            return rec.region === item.region && rec.country === item.country;
        });
        return dataRec ? dataRec.value : 0;
    };
    MapCasesComponent.ɵfac = function MapCasesComponent_Factory(t) { return new (t || MapCasesComponent)(); };
    MapCasesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapCasesComponent, selectors: [["app-map-cases"]], viewQuery: function MapCasesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
        } }, hostAttrs: [1, "app__map-wrapper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_data_service__WEBPACK_IMPORTED_MODULE_2__["RemoteDataService"]])], decls: 9, vars: 2, consts: [[1, "app__map-inner"], [1, "app__map-button-group", 3, "multiSelection", "onSelect"], ["igxButton", "", 3, "selected", 4, "ngFor", "ngForOf"], ["zoomable", "true", 1, "app__map", 3, "seriesMouseLeftButtonUp"], ["map", ""], ["template", ""], ["loader", ""], ["igxButton", "", 3, "selected"], [1, "ellipsis"], [1, "app__map-tooltip"], [4, "ngIf"], [1, "app__map-tooltip-list"], [1, "infected"], [1, "recovered"], [1, "deaths"], [1, "loader"], ["width", "65px", "height", "65px", "viewBox", "0 0 66 66", "xmlns", "http://www.w3.org/2000/svg", 1, "spinner"], [0, "xlink", "href", "../../assets/loading.svg", "height", "65", "width", "65"]], template: function MapCasesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "igx-buttongroup", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function MapCasesComponent_Template_igx_buttongroup_onSelect_1_listener($event) { return ctx.onDataSetSelected($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapCasesComponent_button_2_Template, 3, 2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "igx-geographic-map", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("seriesMouseLeftButtonUp", function MapCasesComponent_Template_igx_geographic_map_seriesMouseLeftButtonUp_3_listener($event) { return ctx.onSeriesClicked($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapCasesComponent_ng_template_5_Template, 19, 11, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MapCasesComponent_ng_template_7_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiSelection", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataSetButtons);
        } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], igniteui_angular_maps__WEBPACK_IMPORTED_MODULE_1__["IgxGeographicMapComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__map-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  height: 100%;\n  -ms-flex: 1;\n      flex: 1;\n}\n\n@media (max-width: 1024px) {\n    .app__map-wrapper {\n    height: auto;\n  }\n}\n\n  .app__map-button-group {\n  margin-bottom: 8px;\n}\n\n  .igx-button-group {\n  min-width: 0;\n}\n\n  .app__map-tooltip {\n  position: relative;\n}\n\n  .app__map-tooltip h1 {\n  font-size: 18px;\n}\n\n  .app__map-tooltip h2 {\n  font-size: 16px;\n}\n\n  .app__map-tooltip h1,   .app__map-tooltip h2 {\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: normal;\n  margin: 0;\n  position: relative;\n  z-index: 1;\n}\n\n  .app__map-tooltip:after {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  width: calc(100% + 20px);\n  height: calc(100% + 20px);\n  border-radius: 8px;\n  z-index: 0;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.26), 0 6px 10px 0 rgba(0, 0, 0, 0.12), 0 1px 18px 0 rgba(0, 0, 0, 0.08);\n}\n\n  .app__map-tooltip-list {\n  padding: 0;\n}\n\n  .app__map-tooltip-list li {\n  position: relative;\n  z-index: 1;\n  font-size: 14px;\n}\n\n  .infected span {\n  font-weight: bold;\n  color: #3E3972;\n}\n\n  .recovered span {\n  font-weight: bold;\n  color: #4eb862;\n}\n\n  .deaths span {\n  font-weight: bold;\n  color: #ff134a;\n}\n\n  .app-light-theme .app__map-tooltip:after {\n  background: #fff;\n}\n\n  .app-dark-theme .app__map-tooltip:after {\n  background: #151c2c;\n}\n\n  .app-dark-theme .app__map-tooltip h1,   .app-dark-theme .app__map-tooltip h2 {\n  color: #fff;\n}\n\n  .app-dark-theme .app__map-tooltip-list-date {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n  .app-dark-theme .infected span {\n  font-weight: bold;\n  color: #47B6FF;\n}\n\n  .app-dark-theme .recovered span {\n  font-weight: bold;\n  color: #5FBF70;\n}\n\n  .app-dark-theme .deaths span {\n  font-weight: bold;\n  color: #FF8A90;\n}\n\n.app__map[_ngcontent-%COMP%] {\n  min-height: calc(100% - 44px);\n  min-width: 100%;\n  height: calc(100% - 44px);\n  border-radius: 8px;\n}\n\n.app__map-inner[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  padding: 0 5px;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n@media (max-width: 1024px) {\n  .app__map-inner[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n.ellipsis[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWNhc2VzL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpZ25pdGV1aS1hbmd1bGFyXFxsaWJcXGNvcmVcXHN0eWxlc1xcYmFzZVxcdXRpbGl0aWVzXFxfcXVpcmtzLnNjc3MiLCJzcmMvYXBwL21hcC1jYXNlcy9tYXAtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hcC1jYXNlcy9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFxtYXAtY2FzZXNcXG1hcC1jYXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwLWNhc2VzL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0JBQUE7QUNESjs7QUNBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtNQUFBLE9BQUE7QURHSjs7QUV3aUJJO0VEL2lCRjtJQU1JLFlBQUE7RURLSjtBQUNGOztBQ0ZFO0VBQ0Usa0JBQUE7QURJSjs7QUNERTtFQUNFLFlBQUE7QURHSjs7QUNBRTtFQUNFLGtCQUFBO0FERUo7O0FDREk7RUFDRSxlQUFBO0FER047O0FDQUk7RUFDRSxlQUFBO0FERU47O0FDQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEQ047O0FDRUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrSEFBQTtBREFOOztBQ01FO0VBQ0UsVUFBQTtBREpKOztBQ01JO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBREpOOztBQ1NJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FEUE47O0FDWUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QURWTjs7QUNlSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRGJOOztBQ21CTTtFQUNFLGdCQUFBO0FEakJSOztBQ3dCTTtFQUNFLG1CQUFBO0FEdEJSOztBQ3dCTTtFQUNFLFdBQUE7QUR0QlI7O0FDMEJJO0VBQ0UsMEJBQUE7QUR4Qk47O0FDNEJNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FEMUJSOztBQzhCTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRDVCUjs7QUNnQ007RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUQ5QlI7O0FDb0NBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRGpDRjs7QUNvQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QURqQ0Y7O0FFdWNJO0VEMWFKO0lBT0ksVUFBQTtFRGhDRjtBQUNGOztBQ21DQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRGhDRiIsImZpbGUiOiJzcmMvYXBwL21hcC1jYXNlcy9tYXAtY2FzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmd1bGFyIGhhY2sgZm9yIGJpbmRpbmcgdG8gW2hpZGRlbl0gcHJvcGVydHlcbi8vIG5vdCB3b3JraW5nIFxuW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiIsIltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFwcF9fbWFwLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYXBwX19tYXAtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG46Om5nLWRlZXAgLmFwcF9fbWFwLWJ1dHRvbi1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbjo6bmctZGVlcCAuaWd4LWJ1dHRvbi1ncm91cCB7XG4gIG1pbi13aWR0aDogMDtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtdG9vbHRpcCBoMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtdG9vbHRpcCBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtdG9vbHRpcCBoMSwgOjpuZy1kZWVwIC5hcHBfX21hcC10b29sdGlwIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuOjpuZy1kZWVwIC5hcHBfX21hcC10b29sdGlwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDIwcHgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDA7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yNiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtdG9vbHRpcC1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuYXBwX19tYXAtdG9vbHRpcC1saXN0IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmluZmVjdGVkIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzRTM5NzI7XG59XG46Om5nLWRlZXAgLnJlY292ZXJlZCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNGViODYyO1xufVxuOjpuZy1kZWVwIC5kZWF0aHMgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmMTM0YTtcbn1cbjo6bmctZGVlcCAuYXBwLWxpZ2h0LXRoZW1lIC5hcHBfX21hcC10b29sdGlwOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUgLmFwcF9fbWFwLXRvb2x0aXA6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTUxYzJjO1xufVxuOjpuZy1kZWVwIC5hcHAtZGFyay10aGVtZSAuYXBwX19tYXAtdG9vbHRpcCBoMSwgOjpuZy1kZWVwIC5hcHAtZGFyay10aGVtZSAuYXBwX19tYXAtdG9vbHRpcCBoMiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIC5hcHAtZGFyay10aGVtZSAuYXBwX19tYXAtdG9vbHRpcC1saXN0LWRhdGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbjo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUgLmluZmVjdGVkIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0N0I2RkY7XG59XG46Om5nLWRlZXAgLmFwcC1kYXJrLXRoZW1lIC5yZWNvdmVyZWQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzVGQkY3MDtcbn1cbjo6bmctZGVlcCAuYXBwLWRhcmstdGhlbWUgLmRlYXRocyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkY4QTkwO1xufVxuXG4uYXBwX19tYXAge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5hcHBfX21hcC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5hcHBfX21hcC1pbm5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4uZWxsaXBzaXMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iLCJAaW1wb3J0IFwiLi4vdGhlbWVzL3ZhcnNcIjtcclxuOjpuZy1kZWVwIHtcclxuICAuYXBwX19tYXAtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHBfX21hcC1idXR0b24tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmlneC1idXR0b24tZ3JvdXAge1xyXG4gICAgbWluLXdpZHRoOiAwXHJcbiAgfVxyXG5cclxuICAuYXBwX19tYXAtdG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICBoMSxoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxXHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyMHB4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdncmF5cycsIDQwMCksXHJcbiAgICAgIDAgNnB4IDEwcHggMCBpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnZ3JheXMnLCAzMDApLFxyXG4gICAgICAwIDFweCAxOHB4IDAgaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2dyYXlzJywgMjAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHBfX21hcC10b29sdGlwLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmluZmVjdGVkIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IG1hcC1nZXQoJGxpZ2h0LXZhcnMsIGNvbmZpcm1lZC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVjb3ZlcmVkIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdWNjZXNzJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZWF0aHMge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2Vycm9yJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHAtbGlnaHQtdGhlbWUge1xyXG4gICAgLmFwcF9fbWFwLXRvb2x0aXAge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRsaWdodC12YXJzLCB0b29sdGlwLWJnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcC1kYXJrLXRoZW1lIHtcclxuICAgIC5hcHBfX21hcC10b29sdGlwIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbWFwLWdldCgkZGFyay12YXJzLCB0b29sdGlwLWJnKTtcclxuICAgICAgfVxyXG4gICAgICBoMSxoMiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXBwX19tYXAtdG9vbHRpcC1saXN0LWRhdGUge1xyXG4gICAgICBjb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ2dyYXlzJywgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mZWN0ZWQge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogbWFwLWdldCgkZGFyay12YXJzLCBjb25maXJtZWQtY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVjb3ZlcmVkIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IG1hcC1nZXQoJGRhcmstdmFycywgcmVjb3ZlcmVkLWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlYXRocyB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRkYXJrLXZhcnMsIGRlYXRocy1jb2xvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcHBfX21hcCB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYXBwX19tYXAtaW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uZWxsaXBzaXMge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
    return MapCasesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapCasesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["RemoteDataService"]],
                selector: 'app-map-cases',
                templateUrl: './map-cases.component.html',
                styleUrls: ['./map-cases.component.scss'],
                host: { class: 'app__map-wrapper' }
            }]
    }], function () { return []; }, { map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map', { static: true }]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['template', { static: true }]
        }] }); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// base URL for the data files
var BASE_URL = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data';
var TIME_SERIES = 'csse_covid_19_time_series';
var DAILY_SERIES = 'csse_covid_19_daily_reports';
var FILE_NAME = 'time_series_covid19_';
var DATA_SET;
(function (DATA_SET) {
    DATA_SET["CONFIRMED"] = "confirmed_global";
    DATA_SET["RECOVERED"] = "recovered_global";
    DATA_SET["DEATHS"] = "deaths_global";
})(DATA_SET || (DATA_SET = {}));
var RemoteDataService = /** @class */ (function () {
    function RemoteDataService() {
        this.dataSets = [DATA_SET.CONFIRMED, DATA_SET.RECOVERED, DATA_SET.DEATHS];
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.data$ = this.data.asObservable();
    }
    /**
     * Retrieves data from global timely report file, based on the index passed.
     * 0 goes for Confirmed report, 1 for Recovered, 2 for Deaths
     */
    RemoteDataService.prototype.getDataSet = function (index, lastCommit) {
        var _this = this;
        var loadDataFromCache = false;
        var lastUpdate = parseInt(window.localStorage.getItem('lastUpdate'), 10);
        if (lastUpdate && lastCommit && lastUpdate >= lastCommit) {
            loadDataFromCache = true;
        }
        var dataSet = this.dataSets[index];
        var data$;
        if (loadDataFromCache) {
            data$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                var data = window.localStorage.getItem("" + FILE_NAME + dataSet);
                observer.next(data);
                observer.complete();
            });
        }
        else {
            data$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                fetch(BASE_URL + "/" + TIME_SERIES + "/" + FILE_NAME + dataSet + ".csv")
                    .then(function (response) {
                    return response.text();
                })
                    .then(function (data) {
                    window.localStorage.setItem("" + FILE_NAME + dataSet, data);
                    var currentTime = new Date().getTime();
                    window.localStorage.setItem("lastUpdate", currentTime);
                    observer.next(data);
                    observer.complete();
                })
                    .catch(function (err) {
                    // observer.error('Using offline data; ' + err);
                    _this.loadOfflineData(index, observer);
                });
            });
        }
        return data$;
    };
    /**
     * Retrieves the daily report file for last available day.
     */
    RemoteDataService.prototype.getDataSetFromDailyReport = function (loadFromCache) {
        var today = new Date();
        var yesterday = new Date(today.setDate(today.getDate() - 1));
        var todayFileName = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: 'numeric' }).format(yesterday);
        todayFileName = todayFileName.split('/').join('-');
        var data$;
        if (loadFromCache) {
            data$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                var data = window.localStorage.getItem("" + todayFileName);
                observer.next(data);
                observer.complete();
            });
        }
        else {
            data$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                // tslint:disable-next-line: max-line-length
                fetch(BASE_URL + "/" + DAILY_SERIES + "/" + todayFileName + ".csv")
                    .then(function (response) {
                    return response.text();
                })
                    .then(function (data) {
                    window.localStorage.setItem("" + todayFileName, data);
                    observer.next(data);
                    observer.complete();
                })
                    .catch(function (err) {
                    observer.error('Using offline data; ' + err);
                });
            });
        }
        return data$;
    };
    /**
     * Retrieves the date when the data source files were last updated.
     */
    RemoteDataService.prototype.getLatestCommits = function () {
        var resultData$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            fetch("https://api.github.com/repos/CSSEGISandData/COVID-19/commits")
                .then(function (response) {
                return response.json();
            })
                .then(function (data) {
                observer.next(data);
                observer.complete();
            })
                .catch(function (err) {
                observer.error(err);
            });
        });
        return resultData$;
    };
    RemoteDataService.prototype.loadOfflineData = function (index, observer) {
        var baseDataPath = 'assets';
        var dataSet = this.dataSets[index];
        fetch(baseDataPath + "/" + TIME_SERIES + "/" + FILE_NAME + dataSet + ".csv")
            .then(function (response) {
            return response.text();
        })
            .then(function (data) {
            observer.next(data);
            observer.complete();
        });
    };
    /**
     * Converts csv file data to JSON, calculate highest value per region and total value for all regions.
     * Returns an IWorldData оObject.
     */
    RemoteDataService.prototype.csvToJson = function (csvData) {
        csvData = csvData.replace(/, /g, ' - ');
        csvData = csvData.replace(/"/g, '');
        var csvLines = csvData.split('\n');
        var headers = csvLines[0].split(',');
        var locations = [];
        var data = [];
        var totalCases = 0;
        var peakValue = 0;
        for (var i = 1; i < csvLines.length; i++) {
            var columns = csvLines[i].split(',');
            var dataItem = {};
            var value = parseInt(columns[columns.length - 1], 10);
            if (value > 0) {
                var region = columns[0];
                var country = columns[1];
                var lat = parseInt(columns[2], 10);
                var lon = parseInt(columns[3], 10);
                totalCases += value;
                dataItem = { region: region, country: country, lat: lat, lon: lon, value: value };
                locations.push(dataItem);
                if (value > peakValue) {
                    peakValue = value;
                }
            }
        }
        // aggregate list based on country
        // const result = locations.reduce((prev, item) => {
        //     const newItem = prev.find((i) => {
        //         return i.country === item.country;
        //     });
        //     if (newItem) {
        //         newItem.value += item.value;
        //     } else {
        //         prev.push(item);
        //     }
        //     return prev;
        // }, []);
        data = locations.sort(function (a, b) {
            return b.value - a.value;
        });
        return { data: data, peakValue: peakValue, totalCases: totalCases };
    };
    RemoteDataService.ɵfac = function RemoteDataService_Factory(t) { return new (t || RemoteDataService)(); };
    RemoteDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RemoteDataService, factory: RemoteDataService.ɵfac });
    return RemoteDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/splashscreen/splashscreen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.component.ts ***!
  \********************************************************/
/*! exports provided: SplashscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenComponent", function() { return SplashscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SplashscreenComponent = /** @class */ (function () {
    function SplashscreenComponent() {
    }
    SplashscreenComponent.ɵfac = function SplashscreenComponent_Factory(t) { return new (t || SplashscreenComponent)(); };
    SplashscreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplashscreenComponent, selectors: [["app-splashscreen"]], decls: 47, vars: 0, consts: [["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 241.1 97.7", 0, "xml", "space", "preserve", 1, "app__splash-screen-logo", 2, "enable-background", "new 0 0 241.1 97.7"], ["type", "text/css"], ["d", "M70.4,34.4h4.7v36.1h-4.7V34.4z", 1, "dark-st0"], ["d", "M82.6,75.4c2.3,1.5,5,2.5,7.8,2.5c4.7,0,7.8-2.8,7.8-7.4v-1.8l-0.1-0.1c-1.7,1.2-4.1,1.9-6.7,1.9\n\t\t\t\t\tc-6.7,0-12-5-12-12.3c0-6.9,4.7-12.8,12.7-12.8c2.5,0,4.6,0.6,6.2,1.4l4.3-0.8v24.4c0,7.2-4.8,11.6-12.3,11.6\n\t\t\t\t\tc-3,0-5.8-0.8-7.8-1.8L82.6,75.4L82.6,75.4z M92.1,66.7c2.2,0,4.6-0.8,6.1-2V51.1c-1.5-1-3.9-1.7-6.2-1.7\n\t\t\t\t\tc-4.9,0-8.1,3.8-8.1,8.6C84,62.9,87.3,66.7,92.1,66.7z", 1, "dark-st0"], ["d", "M107.2,46h4.5v3.1l0.1,0.1c2.1-2.1,5.1-3.7,8.6-3.7c2.7,0,5,1,6.5,2.7c1.3,1.5,2,3.5,2,7.2v15.1h-4.5V56.2\n\t\t\t\t\tc0-2.5-0.4-4-1.2-5c-1-1.2-2.6-1.6-3.9-1.6c-2.8,0-5.9,1.7-7.7,4.1v16.8h-4.5L107.2,46L107.2,46z", 1, "dark-st0"], ["d", "M135.7,34.4c1.7,0,3.2,1.4,3.2,3.2c0,1.8-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2S133.9,34.4,135.7,34.4z\n\t\t\t\t\t M133.4,46h4.5v24.5h-4.5L133.4,46L133.4,46z", 1, "dark-st0"], ["d", "M146.7,62V50h-4.5v-4h4.5v-6.7l4.5-0.8V46h7.4v4h-7.4v11.1c0,3.1,0.5,5.9,3.7,5.9c1.3,0,2.8-0.5,3.7-1.1\n\t\t\t\t\tv4.2c-1,0.5-2.8,0.9-4.4,0.9c-1.8,0-4-0.5-5.6-2.3C147.3,67.4,146.7,65.4,146.7,62z", 1, "dark-st0"], ["d", "M167,59.6c0.7,4.8,4.2,7.5,9.1,7.5c3.4,0,6.2-1.3,8.5-3.1v4.8c-2.2,1.4-5.6,2.3-8.8,2.3\n\t\t\t\t\tc-7.6,0-13.3-5.1-13.3-12.8s5.7-12.8,12.2-12.8c6,0,11.2,4.2,11.2,11.9c0,0.8-0.1,1.6-0.2,2.2L167,59.6L167,59.6z M167.1,56\n\t\t\t\t\th14.5c-0.4-4.9-4-6.5-6.9-6.5C171.4,49.5,167.9,51.5,167.1,56z", 1, "dark-st0"], ["d", "M196.7,53.5V34.4h4.7V53c0,4.4,0.3,7.2,1.4,9.3c1.2,2.3,3.8,4.3,8.6,4.3c4.4,0,7.1-1.7,8.5-4.3\n\t\t\t\t\tc1.2-2.1,1.3-5,1.3-9.1V34.4h4.6v18.6c0,5.2-0.3,9.3-2.4,12.5c-2.3,3.5-6.6,5.7-12.2,5.7c-5.7,0-9.9-2.2-12.1-5.7\n\t\t\t\t\tC197,62.2,196.7,58,196.7,53.5z", 1, "dark-st0"], ["d", "M230.2,34.4h4.7v36.1h-4.7V34.4z", 1, "dark-st0"], ["cx", "33", "cy", "57.5", "r", "26.8", 1, "dark-st1"], ["d", "M34,28c-0.4-0.2-0.8-0.3-1.2-0.2c-1.1,0.3-2.3,2.1-3.1,3c-1,1.1-1.8,2.3-2.5,3.6c-3.6,6.4-3.5,14-1.9,21.1\n\t\t\t\t\t\tc1,4.5,2.5,8.9,4.2,13.2l7.1,0.1c0.3,0,1.4-3.7,1.6-4.1c0.5-1.3,0.9-2.7,1.3-4c0.7-2.3,1.3-4.7,1.8-7.1c0.7-3.8,1-7.7,0.4-11.5\n\t\t\t\t\t\tc-0.5-3-1.5-5.8-3.1-8.4C37.8,32.3,35.9,28.9,34,28z M33.1,47.5c-2.2,0-4-1.8-4-4.1c0-2.2,1.8-4,4.1-4s4,1.8,4,4.1\n\t\t\t\t\t\tC37.1,45.8,35.3,47.5,33.1,47.5z", 1, "dark-st0"], ["d", "M38.4,69.2L38.4,69.2c1.3-3.1,2.3-6.1,3.1-8.8c1.1,0.7,2.7,3.8,3.5,5.8c0.3,0.8,0.4,2.2,0.3,3.1\n\t\t\t\t\t\tc-0.3,1.8-0.9,4.9-2.5,7.2c-0.2,0.2-0.5,0.1-0.5-0.2c0.1-0.7,0.1-1.5,0-2.1c-0.1-1.2-0.6-2.3-1.5-3.1\n\t\t\t\t\t\tC40,70.2,39,69.5,38.4,69.2z", 1, "dark-st0"], ["d", "M23.7,74c-0.1,0.7-0.1,1.4,0,2.1c0,0.3-0.4,0.4-0.5,0.2c-1.6-2.2-2.2-5.4-2.4-7.2c-0.1-0.9,0-2.2,0.3-3\n\t\t\t\t\t\tc0.8-1.9,2.3-5,3.5-5.7c0.7,2.8,1.7,5.7,3,8.8l0,0c-0.7,0.3-1.6,1-2.4,1.7C24.3,71.7,23.8,72.8,23.7,74z", 1, "dark-st2"], ["d", "M32,28.1c0,0-11,11.7,0.5,40.5h-3.1C29.4,68.6,15.2,41.5,32,28.1z", 1, "dark-st2"], ["d", "M26.5,83.2c-0.3-0.5-0.4-1-0.3-1.5c0.2-1,1-1.7,1.9-1.8c1.4-0.2,2.5,0.9,2.5,2.2c0,0.7-0.4,1.1-0.6,1.7\n\t\t\t\t\t\tc-0.4,0.8-0.6,1.5-0.6,2.2c0,0.2,0,0.3,0,0.5c0,2.4,1.5,4.6,3.6,5.5c0.1,0.1,0.2-0.1,0.2-0.2c-0.2-0.4-0.2-0.8-0.2-1.2\n\t\t\t\t\t\tc0-1.2,0.6-2.2,1.5-3c1-0.8,1.9-1.6,2.8-2.4c0.9-0.9,1.9-1.7,2.5-2.8c0.7-1.2,1.1-2.6,1.1-4.1c0-3.2-1.9-6.1-4.8-7.4\n\t\t\t\t\t\tc-1.4-0.7-3-0.9-4.6-0.6c-3.3,0.5-6,3.1-6.7,6.3c-0.3,1.2-0.2,2.4,0.1,3.6c0.2,0.6,0.3,1.1,0.6,1.6\n\t\t\t\t\t\tC25.9,82.3,26.3,82.7,26.5,83.2z", 1, "dark-st3"], ["id", "SVGID_3_", "d", "M26.5,83.2c-0.3-0.5-0.4-1-0.3-1.5c0.2-1,1-1.7,1.9-1.8c1.4-0.2,2.5,0.9,2.5,2.2\n\t\t\t\t\t\t\t\t\tc0,0.7-0.4,1.1-0.6,1.7c-0.4,0.8-0.6,1.5-0.6,2.2c0,0.2,0,0.3,0,0.5c0,2.4,1.5,4.6,3.6,5.5c0.1,0.1,0.2-0.1,0.2-0.2\n\t\t\t\t\t\t\t\t\tc-0.2-0.4-0.2-0.8-0.2-1.2c0-1.2,0.6-2.2,1.5-3c1-0.8,1.9-1.6,2.8-2.4c0.9-0.9,1.9-1.7,2.5-2.8c0.7-1.2,1.1-2.6,1.1-4.1\n\t\t\t\t\t\t\t\t\tc0-3.2-1.9-6.1-4.8-7.4c-1.4-0.7-3-0.9-4.6-0.6c-3.3,0.5-6,3.1-6.7,6.3c-0.3,1.2-0.2,2.4,0.1,3.6c0.2,0.6,0.3,1.1,0.6,1.6\n\t\t\t\t\t\t\t\t\tC25.9,82.3,26.3,82.7,26.5,83.2z"], ["id", "SVGID_2_"], [0, "xlink", "href", "#SVGID_3_", 2, "overflow", "visible"], ["d", "M30.5,83.1c0,0,7.9-5.8,3.1-12.8l9.7,0.6l-0.1,22.8l-13.5-0.1C29.6,93.6,26.5,85.2,30.5,83.1z", 1, "dark-st4"], [1, "dark-st5"], ["d", "M76.3,5.9h3.3c1.4,0,2.7,0.1,3.8,0.7s1.9,1.7,1.9,3.2c0,1.5-0.7,2.6-1.7,3.2c-1.1,0.7-2.6,0.7-4.3,0.7H78v5.1\n\t\t\th-1.7V5.9z M79.6,12.2c1.5,0,2.4-0.1,3.1-0.5c0.6-0.4,1-1,1-1.9c0-1-0.5-1.6-1.2-2c-0.8-0.4-1.7-0.4-2.9-0.4H78v4.8H79.6z", 1, "dark-st0"], ["d", "M93.2,5.7c3.7,0,6.5,2.9,6.5,6.6s-2.8,6.6-6.5,6.6c-3.7,0-6.5-2.9-6.5-6.6S89.4,5.7,93.2,5.7z M93.2,17.3\n\t\t\tc2.8,0,4.8-2.2,4.8-5s-2-5-4.8-5c-2.8,0-4.8,2.2-4.8,5S90.4,17.3,93.2,17.3z", 1, "dark-st0"], ["d", "M100.2,5.9h1.8l2.1,6.9c0.3,1.1,0.7,2.2,1,3.3h0c0.3-1.1,0.7-2.2,1-3.4l2.2-6.9h1.2l2.2,6.9\n\t\t\tc0.4,1.1,0.7,2.2,1,3.3h0c0.3-1.1,0.7-2.3,1-3.4l2.1-6.9h1.7l-4,12.8h-1.8l-2.1-6.5c-0.3-1-0.6-2-0.9-3h0c-0.3,1-0.6,2-0.9,3\n\t\t\tl-2,6.5h-1.8L100.2,5.9z", 1, "dark-st0"], ["d", "M119.4,5.9h7.4v1.5H121v3.9h5v1.5h-5v4.4h5.9v1.5h-7.6V5.9z", 1, "dark-st0"], ["d", "M129.1,5.9h3.5c1.3,0,2.5,0.1,3.6,0.6c1.1,0.6,1.8,1.6,1.8,3c0,1.4-0.7,2.4-1.6,3c-0.5,0.3-0.9,0.4-1.5,0.5\n\t\t\tl4.1,5.7h-2l-3.9-5.5h-2.2v5.5h-1.7V5.9z M133,11.8c1.1,0,1.9-0.1,2.5-0.6c0.5-0.4,0.8-0.9,0.8-1.6c0-0.8-0.4-1.5-1-1.8\n\t\t\tc-0.7-0.4-1.5-0.4-2.7-0.4h-1.7v4.4H133z", 1, "dark-st0"], ["d", "M140.6,5.9h7.4v1.5h-5.7v3.9h5v1.5h-5v4.4h5.9v1.5h-7.6V5.9z", 1, "dark-st0"], ["d", "M150.3,5.9h3.5c1.7,0,3.2,0.3,4.5,1c1.8,1.1,2.9,3.1,2.9,5.3c0,2.1-0.9,4-2.6,5.2c-1.4,1-3.1,1.3-5.3,1.3\n\t\t\th-3.1V5.9z M153.7,17.2c1.5,0,2.8-0.2,3.8-0.9c1.2-0.8,2.1-2.2,2.1-4c0-1.9-0.9-3.2-2.1-4c-1.1-0.7-2.5-0.9-3.9-0.9H152v9.8H153.7\n\t\t\tz", 1, "dark-st0"], ["d", "M167.6,5.9h3.4c1.6,0,2.6,0.1,3.4,0.7c1,0.6,1.5,1.5,1.5,2.6c0,1.5-0.9,2.3-1.9,2.7v0c1.5,0.4,2.5,1.3,2.5,3\n\t\t\tc0,1.2-0.5,2.3-1.5,2.9c-0.9,0.6-2.1,0.9-4,0.9h-3.4V5.9z M171.8,11.5c1.3,0,2.5-0.6,2.5-2c0-0.8-0.4-1.3-0.9-1.6\n\t\t\tc-0.6-0.4-1.3-0.4-2.6-0.4h-1.5v4.1H171.8z M171.1,17.2c1.5,0,2.3-0.1,2.9-0.5c0.4-0.3,0.8-0.8,0.8-1.7c0-1.4-1.1-2.2-3-2.2h-2.5\n\t\t\tv4.4H171.1z", 1, "dark-st0"], ["d", "M181.7,12.9l-4.9-7h1.9l2.2,3.1c0.5,0.8,1.1,1.6,1.7,2.4h0c0.5-0.8,1.1-1.6,1.7-2.5l2.2-3.1h1.9l-4.9,7v5.8\n\t\t\th-1.7V12.9z", 1, "dark-st0"], [1, "splash-screen__title"], [1, "splash-screen__title-color"], [1, "splash-screen__title-small"]], template: function SplashscreenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "style", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " .dark-st0 { fill: #FFFFFF; } .dark-dark- { opacity: 0.22; fill: #FFFFFF; enable-background: new; } .dark-st2 { fill: #0099FF; } .dark-st3 { fill: #F49021; } .dark-st4 { clip-path: url(#SVGID_2_); fill: #F05A2B; } .dark-st5 { opacity: 0.6; } ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "circle", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "defs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "clipPath", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "use", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Coronavirus COVID-19 Global Cases");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Loading, please wait...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background: linear-gradient(-45deg, #182643, #151c2c);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  opacity: 1;\n  z-index: 10;\n  transition: opacity 900ms ease-out;\n}\n\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  line-height: normal;\n  text-align: center;\n  font-weight: bold;\n}\n\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n[_nghost-%COMP%]   .splash-screen__title-color[_ngcontent-%COMP%] {\n  color: #F05A2B;\n}\n\n.splash-screen--hidden[_nghost-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n\n[_nghost-%COMP%]   .splash-screen__title-small[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: normal;\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .splash-screen__title-small[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n[_nghost-%COMP%]   .app__splash-screen-logo[_ngcontent-%COMP%] {\n  height: 200px;\n  letter-spacing: 1px;\n}\n\n@media (max-width: 768px) {\n  [_nghost-%COMP%]   .app__splash-screen-logo[_ngcontent-%COMP%] {\n    height: 100px;\n  }\n}\n\n@-webkit-keyframes loader {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) scale(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1.5);\n    opacity: 0;\n  }\n}\n\n@keyframes loader {\n  0% {\n    transform: translate3d(0, 0, 0) scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate3d(0, 0, 0) scale(1.5);\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes loader-1 {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0) scale(0);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes loader-1 {\n  0% {\n    transform: translate3d(0, 0, 0) scale(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate3d(0, 0, 0) scale(1);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoc2NyZWVuL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpZ25pdGV1aS1hbmd1bGFyXFxsaWJcXGNvcmVcXHN0eWxlc1xcYmFzZVxcdXRpbGl0aWVzXFxfcXVpcmtzLnNjc3MiLCJzcmMvYXBwL3NwbGFzaHNjcmVlbi9zcGxhc2hzY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NwbGFzaHNjcmVlbi9DOlxcQ09WSUQtMTktRGFzaGJvYXJkL3NyY1xcYXBwXFxzcGxhc2hzY3JlZW5cXHNwbGFzaHNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3BsYXNoc2NyZWVuL0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksd0JBQUE7QUNESjs7QUNEQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EscURBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QURJRjs7QUNIRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FES0o7O0FDSkk7RUFDRSxjQUFBO0FETU47O0FFb2hCSTtFRGppQkY7SUFVSSxlQUFBO0VET0o7QUFDRjs7QUNKRTtFQUNFLGNBQUE7QURNSjs7QUNIRTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtBREtKOztBQ0ZFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FESUo7O0FFb2dCSTtFRDFnQkY7SUFJSSxlQUFBO0VETUo7QUFDRjs7QUNIRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBREtKOztBRTJmSTtFRGxnQkY7SUFJSSxhQUFBO0VET0o7QUFDRjs7QUNGQTtFQUNFO0lBQU8sZ0RBQUE7SUFBa0QsVUFBQTtFRE96RDtFQ05BO0lBQU8sa0RBQUE7SUFBb0QsVUFBQTtFRFUzRDtBQUNGOztBQ1RBO0VBQ0U7SUFBTyx3Q0FBQTtJQUEwQyxVQUFBO0VEYWpEO0VDWkE7SUFBTywwQ0FBQTtJQUE0QyxVQUFBO0VEZ0JuRDtBQUNGOztBQ2RBO0VBQ0U7SUFBTyxnREFBQTtJQUFrRCxVQUFBO0VEa0J6RDtFQ2pCQTtJQUFPLGdEQUFBO0lBQWtELFVBQUE7RURxQnpEO0FBQ0Y7O0FDcEJBO0VBQ0U7SUFBTyx3Q0FBQTtJQUEwQyxVQUFBO0VEd0JqRDtFQ3ZCQTtJQUFPLHdDQUFBO0lBQTBDLFVBQUE7RUQyQmpEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5ndWxhciBoYWNrIGZvciBiaW5kaW5nIHRvIFtoaWRkZW5dIHByb3BlcnR5XG4vLyBub3Qgd29ya2luZyBcbltoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4iLCJbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMxODI2NDMsICMxNTFjMmMpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgOTAwbXMgZWFzZS1vdXQ7XG59XG46aG9zdCBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdCBoMSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QgaDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuOmhvc3QgLnNwbGFzaC1zY3JlZW5fX3RpdGxlLWNvbG9yIHtcbiAgY29sb3I6ICNGMDVBMkI7XG59XG46aG9zdC5zcGxhc2gtc2NyZWVuLS1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0IC5zcGxhc2gtc2NyZWVuX190aXRsZS1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuc3BsYXNoLXNjcmVlbl9fdGl0bGUtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuOmhvc3QgLmFwcF9fc3BsYXNoLXNjcmVlbi1sb2dvIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCAuYXBwX19zcGxhc2gtc2NyZWVuLWxvZ28ge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMS41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWRlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxLjUpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXItMSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkZXItMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59IiwiQGltcG9ydCBcIi4uL3RoZW1lcy92YXJzXCI7XHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIG1hcC1nZXQoJGRhcmstdmFycywgZGFyay1ncmFkaWVudCkpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA5MDBtcyBlYXNlLW91dDtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3BsYXNoLXNjcmVlbl9fdGl0bGUtY29sb3Ige1xyXG4gICAgY29sb3I6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3dhcm4nKTtcclxuICB9XHJcblxyXG4gICYuc3BsYXNoLXNjcmVlbi0taGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zcGxhc2gtc2NyZWVuX190aXRsZS1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hcHBfX3NwbGFzaC1zY3JlZW4tbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXIge1xyXG4gIDAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7IG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuNSk7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7IG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxLjUpOyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkZXItMSB7XHJcbiAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTsgb3BhY2l0eTogMTsgfVxyXG4gIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7IG9wYWNpdHk6IDA7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIGxvYWRlci0xIHtcclxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTsgb3BhY2l0eTogMTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpOyBvcGFjaXR5OiAwOyB9XHJcbn1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
    return SplashscreenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashscreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-splashscreen',
                templateUrl: './splashscreen.component.html',
                styleUrls: ['./splashscreen.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/timeline-chart/timeline-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/timeline-chart/timeline-chart.component.ts ***!
  \************************************************************/
/*! exports provided: TimelineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineChartComponent", function() { return TimelineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular-charts */ "./node_modules/igniteui-angular-charts/__ivy_ngcc__/esm5/igniteui-angular-charts.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







var _c0 = ["chart"];
var _c1 = ["chartActual"];
var _c2 = ["chartLogarithmic"];
var _c3 = ["chartDaily"];
var _c4 = ["xAxis"];
var _c5 = ["yAxis"];
var _c6 = ["tooltipActualChart"];
var _c7 = ["tooltipLogarithmicChart"];
var _c8 = ["tooltipDailyChart"];
function TimelineChartComponent_ng_template_43_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Total Daily Other Locations: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.formatDateLabel(item_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r19.totalDailyOtherLocations));
} }
function TimelineChartComponent_ng_template_43_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Total Daily China: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.formatDateLabel(item_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r19.totalDailyChina));
} }
function TimelineChartComponent_ng_template_43_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Total Daily Recovered Cases: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r22.formatDateLabel(item_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r19.totalDailyRecoveredCases));
} }
function TimelineChartComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TimelineChartComponent_ng_template_43_li_2_Template, 8, 4, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TimelineChartComponent_ng_template_43_li_3_Template, 8, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TimelineChartComponent_ng_template_43_li_4_Template, 8, 4, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var series_r18 = ctx.series;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r18.name == "seriesTotalDailyOtherLocations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r18.name == "seriesTotalDailyChina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r18.name == "seriesTotalDailyRecoveredCases");
} }
function TimelineChartComponent_ng_template_45_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Total Daily Other Locations: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.formatDateLabel(item_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r27.totalDailyOtherLocations), " ");
} }
function TimelineChartComponent_ng_template_45_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Total Daily China:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r29.formatDateLabel(item_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r27.totalDailyChina), " ");
} }
function TimelineChartComponent_ng_template_45_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Total Daily Recovered Cases: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r30.formatDateLabel(item_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r27.totalDailyRecoveredCases), " ");
} }
function TimelineChartComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TimelineChartComponent_ng_template_45_li_2_Template, 8, 4, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TimelineChartComponent_ng_template_45_li_3_Template, 8, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TimelineChartComponent_ng_template_45_li_4_Template, 8, 4, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var series_r26 = ctx.series;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r26.name == "seriesTotalDailyOtherLocations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r26.name == "seriesTotalDailyChina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r26.name == "seriesTotalDailyRecoveredCases");
} }
function TimelineChartComponent_ng_template_47_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "New Confirmed Cases:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r36.formatDateLabel(item_r35));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r35.activeCases), " ");
} }
function TimelineChartComponent_ng_template_47_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Recovered Cases:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r37.formatDateLabel(item_r35));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, item_r35.recoveredCases), " ");
} }
function TimelineChartComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TimelineChartComponent_ng_template_47_li_2_Template, 8, 4, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TimelineChartComponent_ng_template_47_li_3_Template, 8, 4, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var series_r34 = ctx.series;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r34.valueMemberPath == "activeCases");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", series_r34.valueMemberPath == "recoveredCases");
} }
var TimelineChartComponent = /** @class */ (function () {
    function TimelineChartComponent(cdr) {
        this.cdr = cdr;
        this.chartData = [];
        this.dailyDataOtherLocations = [];
        this.dailyDataChina = [];
        this.dailyRecoveredCases = new Map();
        this.dailyConfirmedCases = new Map();
        this.totalDailyOtherLocations = new Map();
        this.totalDailyChina = new Map();
        this.totalDailyRecoveredCases = new Map();
        this.categoryTooltipLayer = new igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxCategoryToolTipLayerComponent"]();
    }
    TimelineChartComponent.prototype.ngOnInit = function () { };
    TimelineChartComponent.prototype.ngAfterViewInit = function () {
        // Uncomment this like in order to enable custom tooltips
        this.setCustomTooltips();
    };
    // Used to fill the data for both Confirmed and Recovered data sources
    TimelineChartComponent.prototype.fillData = function (csvData) {
        var columns = [];
        var day = null;
        var cases = new Map();
        var transformedCases = new Map();
        var totalRecoveredCases = new Map();
        var casesOtherLocations = new Map();
        var casesChina = new Map();
        var firstRecordedDate = new Date('01/21/2020').toDateString();
        /*
          This is for the current cases count on 21st
          There are 332 total cases for 21st, which means that for 22nd we will have 555 - 332 = 223
    
          Total cases                 = 332
          Total cases China           = 326
          Total cases other locations = 6
        */
        cases.set(firstRecordedDate, 332);
        casesChina.set(firstRecordedDate, 326);
        casesOtherLocations.set(firstRecordedDate, 6);
        // tslint:disable-next-line: prefer-for-of
        for (var rowIdx = 0; rowIdx < csvData.length; rowIdx++) {
            columns = csvData[rowIdx].replace(', ', ' ').split(',');
            for (var columnIdx = 4; columnIdx <= columns.length - 1; columnIdx++) {
                if (rowIdx === 0) {
                    day = new Date(columns[columnIdx]).toDateString();
                    cases.set(day, 0);
                    casesChina.set(day, 0);
                    casesOtherLocations.set(day, 0);
                }
                else {
                    var mapKey = new Date(csvData[0].split(',')[columnIdx]).toDateString();
                    var compound = cases.get(mapKey) + parseInt(columns[columnIdx], 10);
                    cases.set(mapKey, compound);
                    if (columns[1] === 'China') {
                        var compoundChina = casesChina.get(mapKey) + parseInt(columns[columnIdx], 10);
                        casesChina.set(mapKey, compoundChina);
                    }
                    else {
                        var compoundOther = casesOtherLocations.get(mapKey) + parseInt(columns[columnIdx], 10);
                        casesOtherLocations.set(mapKey, compoundOther);
                    }
                }
            }
        }
        /*
          Persist the total recovered cases (on the second call of fillData) before transforming the 'cases' map
          This number will be different for both Confirmed and Recovered data sources
          This is why we are going to use it only from the second request
          Set initial value of the first recorder recovered cases
        */
        totalRecoveredCases = new Map(cases);
        totalRecoveredCases.set(firstRecordedDate, 25);
        transformedCases = new Map(cases);
        // Calculate daily difference and transform map
        for (var index = 0; index < cases.size; index++) {
            // Calculate only daily difference.
            var newCasesCount = 0;
            var currentElementKey = Array.from(cases.keys())[index];
            var currentElementValue = cases.get(currentElementKey);
            var nextElementKey = Array.from(cases.keys())[index + 1];
            var nextElementValue = cases.get(nextElementKey);
            // Set the actual date to be the date for which we calculate the daily change
            var actualDailyChangeDate = new Date(currentElementKey);
            actualDailyChangeDate.setDate(actualDailyChangeDate.getDate() + 1);
            currentElementKey = actualDailyChangeDate.toDateString();
            // For each of the next days, add the value as it was yesterday
            if (nextElementValue && nextElementValue > currentElementValue) {
                newCasesCount = nextElementValue - currentElementValue;
                transformedCases.set(currentElementKey, newCasesCount);
            }
            else {
                transformedCases.set(currentElementKey, nextElementValue);
            }
        }
        /*
          Fill the first day 21st of January and use it as a starting point
          The daily difference for 21st of January is 50
        */
        transformedCases.set(firstRecordedDate, 50);
        // [0] Daily difference, [1] Other locations, [2] China, [3] Total recovered cases
        return [transformedCases, casesOtherLocations, casesChina, totalRecoveredCases];
    };
    TimelineChartComponent.prototype.transformChartConfirmedCases = function (csvData) {
        var e_1, _a, e_2, _b, e_3, _c;
        var dailyData = [];
        var csvLines = csvData.split('\n');
        var allCases = this.fillData(csvLines);
        this.dailyConfirmedCases = allCases[0];
        this.totalDailyOtherLocations = allCases[1];
        this.totalDailyChina = allCases[2];
        try {
            // Transform the data for Active cases Chart
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dailyConfirmedCases), _e = _d.next(); !_e.done; _e = _d.next()) {
                var item = _e.value;
                dailyData.push({ date: new Date(item[0]), activeCases: item[1] });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // Transform the data for Total Daily Cases from all other locations except China
        var i = 0;
        try {
            for (var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.totalDailyOtherLocations), _g = _f.next(); !_g.done; _g = _f.next()) {
                var item = _g.value;
                dailyData[i].totalDailyOtherLocations = item[1];
                i++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // Transform the data for Total Daily Cases only for China
        i = 0;
        try {
            for (var _h = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.totalDailyChina), _j = _h.next(); !_j.done; _j = _h.next()) {
                var item = _j.value;
                dailyData[i].totalDailyChina = item[1];
                i++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
            }
            finally { if (e_3) throw e_3.error; }
        }
        // Push/Assign the data to Recovered cases Chart
        this.chartData = dailyData;
    };
    TimelineChartComponent.prototype.transformChartRecoveredCases = function (csvData) {
        var e_4, _a, e_5, _b, e_6, _c;
        var _this = this;
        var dailyData = [];
        var csvLines = csvData.split('\n');
        var allCases = this.fillData(csvLines);
        this.dailyRecoveredCases = allCases[0];
        this.totalDailyRecoveredCases = allCases[3];
        try {
            // Transform the data for Active cases Chart
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dailyRecoveredCases), _e = _d.next(); !_e.done; _e = _d.next()) {
                var item = _e.value;
                dailyData.push({ date: new Date(item[0]), recoveredCases: item[1] });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_4) throw e_4.error; }
        }
        // Transform the data for Recovered Cases Chart
        var i = 0;
        try {
            for (var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.dailyRecoveredCases), _g = _f.next(); !_g.done; _g = _f.next()) {
                var item = _g.value;
                dailyData[i].recoveredCases = item[1];
                i++;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_5) throw e_5.error; }
        }
        // Transform the data for Total Recovered Cases
        i = 0;
        try {
            for (var _h = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.totalDailyRecoveredCases), _j = _h.next(); !_j.done; _j = _h.next()) {
                var item = _j.value;
                dailyData[i].totalDailyRecoveredCases = item[1];
                i++;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
            }
            finally { if (e_6) throw e_6.error; }
        }
        // Push/Assign the data to Recovered cases Chart
        this.chartData = dailyData.map(function (item) {
            var isEqualToDate = function (element) {
                return element.date.toDateString() === item.date.toDateString();
            };
            item.activeCases = _this.chartData[_this.chartData.findIndex(isEqualToDate)].activeCases;
            item.totalDailyOtherLocations = _this.chartData[_this.chartData.findIndex(isEqualToDate)].totalDailyOtherLocations;
            item.totalDailyChina = _this.chartData[_this.chartData.findIndex(isEqualToDate)].totalDailyChina;
            return item;
        });
    };
    TimelineChartComponent.prototype.formatDateLabel = function (item) {
        return item.date.toLocaleDateString();
    };
    TimelineChartComponent.prototype.setCustomTooltips = function () {
        this.chartActual.actualSeries[0].tooltipTemplate = this.tooltipActualTemplate;
        this.chartActual.actualSeries[1].tooltipTemplate = this.tooltipActualTemplate;
        this.chartActual.actualSeries[2].tooltipTemplate = this.tooltipActualTemplate;
        this.chartLogarithmic.actualSeries[0].tooltipTemplate = this.tooltipLogarithmicTemplate;
        this.chartLogarithmic.actualSeries[1].tooltipTemplate = this.tooltipLogarithmicTemplate;
        this.chartLogarithmic.actualSeries[2].tooltipTemplate = this.tooltipLogarithmicTemplate;
        this.chartDaily.actualSeries[0].tooltipTemplate = this.tooltipDailyTemplate;
        this.chartDaily.actualSeries[1].tooltipTemplate = this.tooltipDailyTemplate;
    };
    TimelineChartComponent.ɵfac = function TimelineChartComponent_Factory(t) { return new (t || TimelineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    TimelineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimelineChartComponent, selectors: [["app-timeline-chart"]], viewQuery: function TimelineChartComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c3, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c4, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c5, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c6, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c7, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c8, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chartActual = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chartLogarithmic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chartDaily = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.xAxis = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.yAxis = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltipActualTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltipLogarithmicTemplate = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltipDailyTemplate = _t.first);
        } }, decls: 49, vars: 31, consts: [[1, "app__charts"], [1, "app__charts-tabs"], ["label", "Actual"], [1, "app__chart-wrapper"], ["orientation", "Horizontal", 1, "app__charts-legend"], ["legendActual", ""], [1, "app__chart-component"], ["crosshairVisibility", "visible", "isHorizontalZoomEnabled", "true", 1, "app__charts-chart", 3, "legend", "dataSource"], ["chartActual", ""], ["label", "date", "title", "Date", 3, "formatLabel"], ["xAxis2", ""], ["name", "yAxis2", "title", "Cases count", "abbreviateLargeNumbers", "true"], ["yAxis2", ""], ["name", "seriesTotalDailyOtherLocations", "title", "Total Daily Other Locations", "valueMemberPath", "totalDailyOtherLocations", "showDefaultTooltip", "true", 3, "xAxis", "yAxis", "markerType"], ["name", "seriesTotalDailyChina", "title", "Total Daily China", "valueMemberPath", "totalDailyChina", "showDefaultTooltip", "true", 3, "xAxis", "yAxis", "markerType"], ["name", "seriesTotalDailyRecoveredCases", "title", "Total Daily Recovered", "valueMemberPath", "totalDailyRecoveredCases", "showDefaultTooltip", "true", 3, "xAxis", "yAxis", "markerType"], ["label", "Logarithmic"], ["legendLogarithmic", ""], ["chartLogarithmic", ""], ["xAxis3", ""], ["name", "yAxis3", "title", "Cases count", "isLogarithmic", "true", "abbreviateLargeNumbers", "true"], ["yAxis3", ""], ["label", "Daily"], ["legend", ""], ["chartDaily", ""], ["title", "New and recovered cases", "abbreviateLargeNumbers", "true"], ["yAxis", ""], ["xAxis", ""], ["valueMemberPath", "activeCases", "labelMemberPath", "date", "title", "New Confirmed Cases", "showDefaultTooltip", "true", 3, "xAxis", "yAxis"], ["valueMemberPath", "recoveredCases", "labelMemberPath", "date", "title", "Recovered Cases", "showDefaultTooltip", "true", 3, "xAxis", "yAxis"], ["tooltipActualChart", ""], ["tooltipLogarithmicChart", ""], ["tooltipDailyChart", ""], [1, "app__map-tooltip"], [1, "app__map-tooltip-list"], ["class", "deaths", 4, "ngIf"], ["class", "infected", 4, "ngIf"], ["class", "recovered", 4, "ngIf"], [1, "deaths"], [1, "infected"], [1, "recovered"]], template: function TimelineChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "igx-bottom-nav", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "igx-tab-panel", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "igx-legend", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "igx-data-chart", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "igx-category-x-axis", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "igx-numeric-y-axis", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "igx-line-series", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "igx-line-series", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "igx-line-series", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "igx-tab-panel", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "igx-legend", 4, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "igx-data-chart", 7, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "igx-category-x-axis", 9, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "igx-numeric-y-axis", 20, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "igx-line-series", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "igx-line-series", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "igx-line-series", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "igx-tab-panel", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "igx-legend", 4, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "igx-data-chart", 7, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "igx-numeric-y-axis", 25, 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "igx-category-x-axis", 9, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "igx-column-series", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "igx-column-series", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TimelineChartComponent_ng_template_43_Template, 5, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TimelineChartComponent_ng_template_45_Template, 5, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TimelineChartComponent_ng_template_47_Template, 4, 2, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("legend", _r0)("dataSource", ctx.chartData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formatLabel", ctx.formatDateLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r2)("yAxis", _r3)("markerType", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r2)("yAxis", _r3)("markerType", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r2)("yAxis", _r3)("markerType", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("legend", _r4)("dataSource", ctx.chartData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formatLabel", ctx.formatDateLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r6)("yAxis", _r7)("markerType", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r6)("yAxis", _r7)("markerType", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r6)("yAxis", _r7)("markerType", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("legend", _r8)("dataSource", ctx.chartData);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formatLabel", ctx.formatDateLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r11)("yAxis", _r10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("xAxis", _r11)("yAxis", _r10);
        } }, directives: [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxBottomNavComponent"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxTabPanelComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxLegendComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxDataChartComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxCategoryXAxisComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxNumericYAxisComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxLineSeriesComponent"], igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__["IgxColumnSeriesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n  .app__charts {\n  padding: 0 16px 16px 16px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  max-height: 100%;\n  height: 100%;\n  position: relative;\n}\n\n@media (max-width: 768px) {\n    .app__charts {\n    padding-top: 16px;\n  }\n}\n\n  .app__charts .gx-bottom-nav__menu,   .app__charts .igx-bottom-nav__menu--bottom {\n  position: relative;\n  border-radius: 8px;\n}\n\n  .app__charts .igx-bottom-nav__menu-item--selected {\n  font-weight: bold;\n}\n\n  .app__chart-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n  .app__charts-tabs {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex: 1 0 0%;\n      flex: 1 0 0%;\n}\n\n  .app__charts-tabs > div {\n  -ms-flex: 1;\n      flex: 1;\n}\n\n  .app__charts-tabs .igx-tabs__group {\n  height: 100%;\n}\n\n  .app__chart-component {\n  width: 100%;\n  height: 100%;\n  -ms-flex: 1;\n      flex: 1;\n}\n\n  .app__charts-chart {\n  width: 100%;\n  height: calc(40vh - 42px);\n}\n\n  .app__charts-legend {\n  padding: 8px 0;\n}\n\n  .ig-chart-legend-items-list,   .ig-chart-legend-item {\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-align: center !important;\n      align-items: center !important;\n}\n\n  .ig-chart-legend-item td {\n  margin-right: 4px !important;\n  padding: 0 !important;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n  .app__charts-chart {\n  width: 100%;\n  height: calc(40vh - 42px);\n}\n\n  .app__chart-component {\n  width: 100%;\n  height: 100%;\n  -ms-flex: 1;\n      flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUtY2hhcnQvQzpcXENPVklELTE5LURhc2hib2FyZC9ub2RlX21vZHVsZXNcXGlnbml0ZXVpLWFuZ3VsYXJcXGxpYlxcY29yZVxcc3R5bGVzXFxiYXNlXFx1dGlsaXRpZXNcXF9xdWlya3Muc2NzcyIsInNyYy9hcHAvdGltZWxpbmUtY2hhcnQvdGltZWxpbmUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lLWNoYXJ0L0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXHRpbWVsaW5lLWNoYXJ0XFx0aW1lbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUtY2hhcnQvQzpcXENPVklELTE5LURhc2hib2FyZC9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lLWNoYXJ0L0M6XFxDT1ZJRC0xOS1EYXNoYm9hcmQvc3JjXFxhcHBcXHRoZW1lc1xcX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdCQUFBO0FDREo7O0FDQUk7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7TUFBQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURHUjs7QUVzaUJJO0VEL2lCQTtJQVNNLGlCRVJBO0VIWVI7QUFDRjs7QUNGUTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0FESVY7O0FDRlE7RUFDRSxpQkFBQTtBRElWOztBQ0FNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtBREVSOztBQ0NNO0VBQ0UsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7RUFDQSxnQkFBQTtNQUFBLFlBQUE7QURDUjs7QUNBUTtFQUNFLFdBQUE7TUFBQSxPQUFBO0FERVY7O0FDQ1E7RUFDRSxZQUFBO0FEQ1Y7O0FDR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7TUFBQSxPQUFBO0FERFI7O0FDSU07RUFDRSxXQUFBO0VBQ0EseUJBQUE7QURGUjs7QUNLSTtFQUNJLGNBQUE7QURIUjs7QUNNSTs7RUFFSSwrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsaUNBQUE7TUFBQSw4QkFBQTtBREpSOztBQ09JO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBRExSOztBQ1FJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FETlI7O0FDU0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7TUFBQSxPQUFBO0FEUFIiLCJmaWxlIjoic3JjL2FwcC90aW1lbGluZS1jaGFydC90aW1lbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaGFjayBmb3IgYmluZGluZyB0byBbaGlkZGVuXSBwcm9wZXJ0eVxuLy8gbm90IHdvcmtpbmcgXG5baGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYXBwX19jaGFydHMge1xuICBwYWRkaW5nOiAwIDE2cHggMTZweCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLmFwcF9fY2hhcnRzIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cyAuZ3gtYm90dG9tLW5hdl9fbWVudSxcbjo6bmctZGVlcCAuYXBwX19jaGFydHMgLmlneC1ib3R0b20tbmF2X19tZW51LS1ib3R0b20ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbjo6bmctZGVlcCAuYXBwX19jaGFydHMgLmlneC1ib3R0b20tbmF2X19tZW51LWl0ZW0tLXNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLmFwcF9fY2hhcnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46Om5nLWRlZXAgLmFwcF9fY2hhcnRzLXRhYnMge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMCAwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19jaGFydHMtdGFicyA+IGRpdiB7XG4gIGZsZXg6IDE7XG59XG46Om5nLWRlZXAgLmFwcF9fY2hhcnRzLXRhYnMgLmlneC10YWJzX19ncm91cCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYXBwX19jaGFydC1jb21wb25lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAxO1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy1jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoNDB2aCAtIDQycHgpO1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy1sZWdlbmQge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbjo6bmctZGVlcCAuaWctY2hhcnQtbGVnZW5kLWl0ZW1zLWxpc3QsXG46Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtIHRkIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0cy1jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoNDB2aCAtIDQycHgpO1xufVxuOjpuZy1kZWVwIC5hcHBfX2NoYXJ0LWNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDE7XG59IiwiQGltcG9ydCBcIi4uL3RoZW1lcy92YXJzXCI7XHJcbjo6bmctZGVlcCB7XHJcbiAgICAuYXBwX19jaGFydHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgJGFwcC1nYXAgJGFwcC1nYXAgJGFwcC1nYXA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogJGFwcC1nYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3gtYm90dG9tLW5hdl9fbWVudSxcclxuICAgICAgICAuaWd4LWJvdHRvbS1uYXZfX21lbnUtLWJvdHRvbSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pZ3gtYm90dG9tLW5hdl9fbWVudS1pdGVtLS1zZWxlY3RlZCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcHBfX2NoYXJ0LXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcHBfX2NoYXJ0cy10YWJzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4OjEgMCAwJTtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlneC10YWJzX19ncm91cCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXBwX19jaGFydC1jb21wb25lbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYXBwX19jaGFydHMtY2hhcnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYyg0MHZoIC0gNDJweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAuYXBwX19jaGFydHMtbGVnZW5kIHtcclxuICAgICAgICBwYWRkaW5nOiAoJGFwcC1nYXAgLyAyKSAwXHJcbiAgICB9XHJcblxyXG4gICAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVtcy1saXN0LFxyXG4gICAgLmlnLWNoYXJ0LWxlZ2VuZC1pdGVte1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaWctY2hhcnQtbGVnZW5kLWl0ZW0gdGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcF9fY2hhcnRzLWNoYXJ0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoNDB2aCAtIDQycHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHBfX2NoYXJ0LWNvbXBvbmVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbn1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaWduaXRldWktYW5ndWxhci9saWIvY29yZS9zdHlsZXMvYmFzZS9pbmRleFwiO1xyXG5AaW1wb3J0IFwicGFsZXR0ZXNcIjtcclxuJGNhcmQtaGVhZGVyLWhlaWdodDogODBweDtcclxuJGFwcC1nYXA6IDE2cHg7XHJcblxyXG4kbGlnaHQtdmFyczooXHJcbiAgY29uZmlybWVkLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnc2Vjb25kYXJ5JyksXHJcbiAgY29uZmlybWVkLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzZWNvbmRhcnknKSwgLjAzKSxcclxuICBkZWF0aHMtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdlcnJvcicpLFxyXG4gIGRlYXRocy1iZzogcmdiYShpZ3gtY29sb3IoJGFwcC1wYWxldHRlLCAnZXJyb3InKSwgLjAzKSxcclxuICByZWNvdmVyZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdWNjZXNzJyksXHJcbiAgcmVjb3ZlcmVkLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdWNjZXNzJyksIC4wMyksXHJcbiAgZm9vdGVyLWJhY2tncm91bmQ6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdncmF5cycsIDEwMCksXHJcbiAgbGluay1jb2xvcjogaWd4LWNvbG9yKCRhcHAtcGFsZXR0ZSwgJ3NlY29uZGFyeScpLFxyXG4gIHRvb2x0aXAtYmc6IGlneC1jb2xvcigkYXBwLXBhbGV0dGUsICdzdXJmYWNlJyksXHJcbiAgbG9nby1jb2xvcjogIzAwMFxyXG4pO1xyXG5cclxuJGRhcmstdmFyczooXHJcbiAgY29uZmlybWVkLWNvbG9yOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdpbmZvJyksXHJcbiAgY29uZmlybWVkLWJnOiByZ2JhKGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3NlY29uZGFyeScpLCAuMDMpLFxyXG4gIGRlYXRocy1jb2xvcjogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnZXJyb3InKSxcclxuICBkZWF0aHMtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnZXJyb3InKSwgLjAzKSxcclxuICByZWNvdmVyZWQtY29sb3I6IGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3N1Y2Nlc3MnKSxcclxuICByZWNvdmVyZWQtYmc6IHJnYmEoaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc3VjY2VzcycpLCAuMDMpLFxyXG4gIGZvb3Rlci1iYWNrZ3JvdW5kOiBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdncmF5cycsIDEwMCksXHJcbiAgbGluay1jb2xvcjogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc2Vjb25kYXJ5JyksXHJcbiAgdG9vbHRpcC1iZzogaWd4LWNvbG9yKCRhcHAtZGFyay1wYWxldHRlLCAnc3VyZmFjZScpLFxyXG4gIGxvZ28tY29sb3I6ICNmZmYsXHJcbiAgZGFyay1ncmFkaWVudDogKGlneC1jb2xvcigkYXBwLWRhcmstcGFsZXR0ZSwgJ3ByaW1hcnknLCA2MDApLCBpZ3gtY29sb3IoJGFwcC1kYXJrLXBhbGV0dGUsICdzdXJmYWNlJykpXHJcbik7XHJcblxyXG5AaW1wb3J0IFwifmluY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG5cclxuIl19 */"] });
    return TimelineChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimelineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-timeline-chart',
                templateUrl: './timeline-chart.component.html',
                styleUrls: ['./timeline-chart.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chart', { static: true }]
        }], chartActual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chartActual', { static: true }]
        }], chartLogarithmic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chartLogarithmic', { static: true }]
        }], chartDaily: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['chartDaily', { static: true }]
        }], xAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['xAxis', { static: true }]
        }], yAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['yAxis', { static: true }]
        }], tooltipActualTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tooltipActualChart', { static: true }]
        }], tooltipLogarithmicTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tooltipLogarithmicChart', { static: true }]
        }], tooltipDailyTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tooltipDailyChart', { static: true }]
        }] }); })();


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\COVID-19-Dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map