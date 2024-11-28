"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_header_header_module_ts-src_app_tabs_tabs_module_ts-src_service_get-data-back-befa18"],{

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 6727);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    Title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ButtonAtras: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 677:
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





const routes = [
    {
        path: '',
        component: _header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
    }
];
let HeaderModule = class HeaderModule {
};
HeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], HeaderModule);



/***/ }),

/***/ 3957:
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsComponent": () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 4872);
/* harmony import */ var _tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.scss?ngResource */ 2798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage-service.service */ 8092);





let TabsComponent = class TabsComponent {
    constructor(_localstorage) {
        this._localstorage = _localstorage;
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
    }
    ngOnInit() { }
};
TabsComponent.ctorParameters = () => [
    { type: src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService }
];
TabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsComponent);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsModule": () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component */ 3957);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





const routes = [
    {
        path: '',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent,
    }
];
let TabsModule = class TabsModule {
};
TabsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_tabs_component__WEBPACK_IMPORTED_MODULE_0__.TabsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TabsModule);



/***/ }),

/***/ 1273:
/*!*************************************************!*\
  !*** ./src/service/get-data-backend.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDataBackendService": () => (/* binding */ GetDataBackendService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);



let GetDataBackendService = class GetDataBackendService {
    constructor(http) {
        this.http = http;
        this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'fCsG449Vd@F?$'
            })
        };
        this.UrlAPI = 'http://localhost:3000/';
    }
    GetUsers() {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}users`, this.httpHeader).subscribe((ResUser) => {
                    resolve(ResUser);
                }, (error) => {
                    reject(error);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetUserEmail(Correo) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}UserEmail/${Correo}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (error) => {
                    reject(error);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetTipoDeUsusarios(TypeUser) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}TipoUser/${TypeUser}`, this.httpHeader).subscribe((ResTypeUser) => {
                    resolve(ResTypeUser);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    InsertUser(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.post(`${this.UrlAPI}InsertUser`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    UpdateUser(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.put(`${this.UrlAPI}UpdateUser`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    UpdateAgenda(Data) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.put(`${this.UrlAPI}UpdateAgenda`, Data, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetClientesBarbero(idBarbero) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}ClientesB/${idBarbero}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (error) => {
                    reject(error);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetJornada(IdUser) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}AsignacionById/${IdUser}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (error) => {
                    reject(error);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    InsertJornada(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.post(`${this.UrlAPI}InsertAsignacion`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    UpdateJornada(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.put(`${this.UrlAPI}UpdateAsignacion`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    DeleteJornada(IdJornada) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.delete(`${this.UrlAPI}DeleteAsign/${IdJornada}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetServicios(IdBarbero) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}ServicesById/${IdBarbero}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetAgendaByDate(Id, Tipo, Dia) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}AgendaByDateAndId/${Id}/${Tipo}/${Dia}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    InsertServicios(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.post(`${this.UrlAPI}InsertService`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    UpdateServicios(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.put(`${this.UrlAPI}UpdateServicios`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    DeleteServicios(idService) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.delete(`${this.UrlAPI}DeleteServicios/${idService}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    InsertAgenda(Datos) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.post(`${this.UrlAPI}InsertAgenda`, Datos, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    GetHistorial(Id, Tipo) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.http.get(`${this.UrlAPI}AgendaById/${Id}/${Tipo}`, this.httpHeader).subscribe((Res) => {
                    resolve(Res);
                }, (err) => {
                    reject(err);
                });
            }
            catch (error) {
                reject(error);
            }
        }));
    }
};
GetDataBackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GetDataBackendService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: `root`
    })
], GetDataBackendService);



/***/ }),

/***/ 668:
/*!*********************************************************!*\
  !*** ./src/app/header/header.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".encabezado {\n  display: flex;\n}\n\n.fondo {\n  background: linear-gradient(170deg, #e9ecef, #212529, #f9fafb, #212529, #21252900);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGtGQUFBO0FBRUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuY2FiZXphZG97XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5mb25kbyB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE3MGRlZywgI2U5ZWNlZiwgIzIxMjUyOSwgI2Y5ZmFmYiwgIzIxMjUyOSwjMjEyNTI5MDApO1xufSJdfQ== */";

/***/ }),

/***/ 2798:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".Button {\n  display: grid;\n  grid-template-columns: repeat(2, 0fr);\n}\n\n.Buttongrid {\n  grid-column: 2/4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUoiLCJmaWxlIjoidGFicy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5CdXR0b24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMGZyKTtcbn1cbi5CdXR0b25ncmlkIHtcbiAgICBncmlkLWNvbHVtbjogMi80O1xufSJdfQ== */";

/***/ }),

/***/ 6727:
/*!*********************************************************!*\
  !*** ./src/app/header/header.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" style=\"background-color: white;\" class=\"fondo\">\n  <ion-toolbar>\n    <div class=\"encabezado\">\n      <ion-button  *ngIf=\"ButtonAtras === true\" fill=\"clear\" slot=\"end\" routerLink=\"/home\">\n        <ion-icon name=\"arrow-back-outline\" style=\"color: rgb(255, 255, 255);\"></ion-icon>\n      </ion-button>\n      <ion-title style=\"color: black;\">\n       {{Title}}    \n      </ion-title>\n\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n";

/***/ }),

/***/ 4872:
/*!*****************************************************!*\
  !*** ./src/app/tabs/tabs.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-footer>\n  <div class=\"Button\">\n    <ion-button *ngIf=\"DatosUser.TipoUser === 'Cliente'\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n    </ion-button>\n    <ion-button  routerLink=\"/Agendar\" *ngIf=\"DatosUser.TipoUser === 'Cliente'\" class=\"Buttongrid\">\n      <ion-label style=\"margin-left: auto;\">Agendar</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"DatosUser.TipoUser === 'Barbero'\">\n      <ion-icon name=\"clipboard-outline\"></ion-icon>\n    </ion-button>\n    <ion-button *ngIf=\"DatosUser.TipoUser === 'Barbero'\" routerLink=\"/Asignacion\" class=\"Buttongrid\">\n      <ion-label  style=\"margin-left: auto;\">Asignar</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n    <ion-button>\n      <ion-icon name=\"cut-outline\"></ion-icon>\n    </ion-button>\n    <ion-button routerLink=\"/Servicios\" class=\"Buttongrid\">\n      <ion-label  style=\"margin-left: auto;\">Servicios</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n    <ion-button>\n      <ion-icon name=\"List-outline\"></ion-icon>\n    </ion-button>\n    <ion-button routerLink=\"/lista\" class=\"Buttongrid\">\n      <ion-label  style=\"margin-left: auto;\">Historial</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n    <ion-button>\n      <ion-icon name=\"settings-outline\"></ion-icon>\n    </ion-button>\n    <ion-button routerLink=\"/confi\" class=\"Buttongrid\">\n      <ion-label  style=\"margin-left: auto;\">Ajustes</ion-label>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_header_header_module_ts-src_app_tabs_tabs_module_ts-src_service_get-data-back-befa18.js.map