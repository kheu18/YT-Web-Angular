(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");




var routes = [
    { path: "", redirectTo: "search", pathMatch: "full" },
    { path: "videoplayer/:id", component: _components_player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <nav>\n      <a routerLink=\"/\" routerLinkActive=\"active\"\n        ><button mat-raised-button>Search</button></a\n      >\n    </nav>\n  </mat-toolbar-row>\n</mat-toolbar>\n<app-form></app-form>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'yt-video-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_gridwall_gridwall_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gridwall/gridwall.component */ "./src/app/components/gridwall/gridwall.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"],
                _components_form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
                _components_gridwall_gridwall_component__WEBPACK_IMPORTED_MODULE_10__["GridwallComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                ngx_embed_video__WEBPACK_IMPORTED_MODULE_12__["EmbedVideo"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/form/form.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/form/form.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width {\r\n  width: 50%;\r\n  order: 1;\r\n}\r\n.flex {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n.flexbutton {\r\n  order: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG9yZGVyOiAxO1xyXG59XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZsZXhidXR0b24ge1xyXG4gIG9yZGVyOiAyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/form/form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <form (ngSubmit)=\"onSubmit()\" #ytSearch=\"ngForm\" class=\"flex\">\n    <mat-form-field class=\"width\">\n      Search a video:\n      <input\n        matInput\n        type=\"text\"\n        class=\"form-control\"\n        id=\"searchParm\"\n        [(ngModel)]=\"searchParm\"\n        name=\"searchParm\"\n      />\n    </mat-form-field>\n\n    <button class=\"flexbutton\" mat-raised-button color=\"primary\" type=\"submit\">\n      Submit\n    </button>\n  </form>\n  <app-gridwall [res]=\"data\"></app-gridwall>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-service.service */ "./src/app/services/http-service.service.ts");



var FormComponent = /** @class */ (function () {
    function FormComponent(http) {
        this.http = http;
        this.searchParm = "";
        this.submit = false;
    }
    FormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submit = true;
        console.log(this.searchParm);
        this.http
            .getSearchResult(this.searchParm)
            .subscribe(function (data) { return (_this.data = data); });
    };
    /* onSubmit() {
      this.submit = true;
      this.http.getSearchResultLocal().subscribe(data => (this.data = data));
    } */
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form",
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/components/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/gridwall/gridwall.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/gridwall/gridwall.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmlkd2FsbC9ncmlkd2FsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmlkd2FsbC9ncmlkd2FsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/gridwall/gridwall.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/gridwall/gridwall.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"5\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let item of res.items\">\n    <a [routerLink]=\"['/videoplayer', item.id.videoId]\"\n      ><img src=\"{{ item.snippet.thumbnails.default.url }}\"\n    /></a>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/components/gridwall/gridwall.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/gridwall/gridwall.component.ts ***!
  \***********************************************************/
/*! exports provided: GridwallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridwallComponent", function() { return GridwallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridwallComponent = /** @class */ (function () {
    function GridwallComponent() {
    }
    GridwallComponent.prototype.ngOnInit = function () { };
    GridwallComponent.prototype.remove = function () {
        this.container.detach();
        this.container.clear();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GridwallComponent.prototype, "res", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("container", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], GridwallComponent.prototype, "container", void 0);
    GridwallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-gridwall",
            template: __webpack_require__(/*! ./gridwall.component.html */ "./src/app/components/gridwall/gridwall.component.html"),
            styles: [__webpack_require__(/*! ./gridwall.component.css */ "./src/app/components/gridwall/gridwall.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridwallComponent);
    return GridwallComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nav-bar works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/player/player.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/player/player.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ embedVideo }}\n"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_3__);




var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(video, route) {
        this.video = video;
        this.route = route;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) { return (_this.id = param.id); });
        this.embedVideo = this.video.embed_youtube(this.id);
        this.iframe_html = this.embedVideo;
    };
    PlayerComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.route.params.subscribe(function (param) { return (_this.id = param.id); });
        this.embedVideo = this.video.embed_youtube(this.id, {
            attr: { width: 640, height: 480 }
        });
        this.iframe_html = this.embedVideo;
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-player",
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/components/player/player.component.html"),
            template: "\n    <mat-card> <div class=\"flex\" [innerHtml]=\"iframe_html\"></div> </mat-card>\n  ",
            styles: [__webpack_require__(/*! ./player.component.css */ "./src/app/components/player/player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_embed_video__WEBPACK_IMPORTED_MODULE_3__["EmbedVideoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/services/http-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http-service.service.ts ***!
  \**************************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(httpClient) {
        this.httpClient = httpClient;
        this.api = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
        this.key = "&type=video&key=AIzaSyC67DB0G2XbWJNnImfYpHRCinojl4V-O_k";
        this.api2 = "http://localhost:3000/api";
    }
    HttpServiceService.prototype.getSearchResult = function (param) {
        return this.httpClient.get("" + this.api + param + this.key);
    };
    HttpServiceService.prototype.getSearchResultLocal = function () {
        return this.httpClient.get("" + this.api2);
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Kevin\Desktop\angular-project\yt-video-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map