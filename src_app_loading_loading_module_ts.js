"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loading_loading_module_ts"],{

/***/ 1571:
/*!***************************************************!*\
  !*** ./src/app/loading/loading-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageRoutingModule": () => (/* binding */ LoadingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page */ 8532);




const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_0__.LoadingPage
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoadingPageRoutingModule);



/***/ }),

/***/ 3416:
/*!*******************************************!*\
  !*** ./src/app/loading/loading.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageModule": () => (/* binding */ LoadingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-routing.module */ 1571);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page */ 8532);







let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoadingPageRoutingModule
        ],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_1__.LoadingPage]
    })
], LoadingPageModule);



/***/ }),

/***/ 8532:
/*!*****************************************!*\
  !*** ./src/app/loading/loading.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPage": () => (/* binding */ LoadingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _loading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page.html?ngResource */ 293);
/* harmony import */ var _loading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page.scss?ngResource */ 304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage-service.service */ 8092);







let LoadingPage = class LoadingPage {
    constructor(_localstorage, navCtrl, _Router) {
        this._localstorage = _localstorage;
        this.navCtrl = navCtrl;
        this._Router = _Router;
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
    }
    ngOnInit() {
        this.Verify();
    }
    Verify() {
        //este setTimeout se ejecuta a los 10s 
        setTimeout(() => {
            if (this.DatosUser) {
                //si tengo data de usuario en el localstorage es decir que ya esta registrado y lo mando al home 
                this.navCtrl.navigateForward("/home");
            }
            else {
                //si no lo mando al login
                this.navCtrl.navigateForward("/login");
            }
        }, 10000);
    }
};
LoadingPage.ctorParameters = () => [
    { type: src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoadingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-loading',
        template: _loading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadingPage);



/***/ }),

/***/ 304:
/*!******************************************************!*\
  !*** ./src/app/loading/loading.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ":host ion-content.FondImg {\n  --background:url(\"/assets/img/fondBarber.gif\") 0 0/100% 100% no-repeat ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksdUVBQUE7QUFBUiIsImZpbGUiOiJsb2FkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudC5Gb25kSW1nIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWcvZm9uZEJhcmJlci5naWYnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 293:
/*!******************************************************!*\
  !*** ./src/app/loading/loading.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n";

/***/ })

}]);
//# sourceMappingURL=src_app_loading_loading_module_ts.js.map