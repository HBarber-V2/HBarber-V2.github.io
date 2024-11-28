"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);








let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/get-data-backend.service */ 1273);
/* harmony import */ var _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/local-storage-service.service */ 8092);








let RegistroPage = class RegistroPage {
    constructor(navCtrl, _GetDatos, _localstorage, formBuilder) {
        this.navCtrl = navCtrl;
        this._GetDatos = _GetDatos;
        this._localstorage = _localstorage;
        this.formBuilder = formBuilder;
        this.TipoClientes = ['Cliente', 'Barbero'];
        this.ListBarberos = [];
        this.ShowPreguntas = false;
        this.ShowPass = false;
        this.RegistroForm = this.formBuilder.group({
            idUser: Math.random().toString(36).substring(2, 8 + 2),
            TipoUser: ['Seleccione'],
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            Phone: [''],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            Barberia: [''],
            idBarbero: [''],
            Barbero: [''],
            PreguntaUno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]],
            RespuestaUno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
            PreguntaDos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8)]],
            RespuestaDos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
        });
    }
    ngOnInit() {
        this.GetListBarber();
    }
    get Datosregistro() { return this.RegistroForm.value; }
    OptionPass() {
        //Mostrar u ocultar clave
        switch (this.ShowPass) {
            case true:
                this.ShowPass = false;
                break;
            case false:
                this.ShowPass = true;
                break;
        }
    }
    GetListBarber() {
        //busco la lista de todos los barberos 
        try {
            this._GetDatos.GetTipoDeUsusarios('Barbero').then((Res) => {
                if (Res.length > 0) {
                    //si encontre data se la asigno mi lista de barberos 
                    this.ListBarberos = Res;
                }
            }).catch(error => console.error(error));
        }
        catch (error) {
            console.error(error);
        }
    }
    GuardarDatosRegistro() {
        if (this.Datosregistro.Barbero) {
            //verifico que el usurio haya seleccionado un barbero 
            //busco los datos del cliente seleccionado 
            const BarberoSelect = this.ListBarberos.find((B) => B.Name === this.Datosregistro.Barbero);
            //asigno el id del barbero seleccioando 
            this.Datosregistro.idBarbero = BarberoSelect.idUser;
        }
        // registro los datos del usuairo 
        this._GetDatos.InsertUser(this.Datosregistro).then((Res) => {
            if (Res.status === true) {
                this._localstorage.GuardarItem('DatosUser', JSON.stringify(this.Datosregistro));
                this.navCtrl.navigateForward("/home");
            }
        }).catch(error => console.error(error));
    }
};
RegistroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_2__.GetDataBackendService },
    { type: _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageServiceService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro',
        template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroPage);



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

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ":host .FondImg {\n  --background:url(\"/assets/img/FondLR.jpg\") 0 0/100% 100% no-repeat ;\n}\n:host ion-button.button {\n  --background: linear-gradient(35deg, #ffffffd7, #ffffff71, #00000048, #000000bd, #000000);\n  border-radius: 20px;\n  border: inset;\n}\n:host ion-item.RegisMedida {\n  --min-height: 38px ;\n}\n.RegisterStyle {\n  box-shadow: black 0px 3px 20px 0px, black 0px 3px 20px 0px;\n  padding: 5%;\n  background-color: transparent;\n  margin: auto;\n  display: block;\n  max-width: 78%;\n}\n.SelectStyle {\n  padding-top: 2%;\n  padding-bottom: 1%;\n  padding-left: 0%;\n}\n.Color {\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.39) 0px 3px 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1FQUFBO0FBQVI7QUFFTztFQUNJLHlGQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQVg7QUFFTztFQUNDLG1CQUFBO0FBQVI7QUFHQTtFQUNJLDBEQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDQTtFQUNJLFlBQUE7RUFDQSxnREFBQTtBQUVKIiwiZmlsZSI6InJlZ2lzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuRm9uZEltZyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL0ZvbmRMUi5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4gICAgfVxuICAgICAgIGlvbi1idXR0b24uYnV0dG9uIHtcbiAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzVkZWcsICNmZmZmZmZkNywgI2ZmZmZmZjcxLCAjMDAwMDAwNDgsICMwMDAwMDBiZCwgIzAwMDAwMCk7XG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxuICAgICAgICAgICBib3JkZXI6IGluc2V0O1xuICAgICAgIH1cbiAgICAgICBpb24taXRlbS5SZWdpc01lZGlkYSB7XG4gICAgICAgIC0tbWluLWhlaWdodDogMzhweFxuICAgICAgIH1cbn1cbi5SZWdpc3RlclN0eWxlIHtcbiAgICBib3gtc2hhZG93OiByZ2IoMCwgMCwgMCkgMHB4IDNweCAyMHB4IDBweCwgcmdiKDAsIDAsIDApIDBweCAzcHggMjBweCAwcHgsO1xuICAgIHBhZGRpbmc6IDUlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA3OCU7XG59XG4uU2VsZWN0U3R5bGUge1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7IFxuICAgIHBhZGRpbmctbGVmdDogMCU7XG59XG4uQ29sb3Ige1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzkpIDBweCAzcHggMjBweCAwcHg7XG59Il19 */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"FondImg\">\n\n  <img style=\"margin: auto; display: block; max-width: 70%\" src=\"/assets/img/Logo_Login.png\">\n\n   <!-- formulario de registro -->\n  <ion-card class=\"RegisterStyle\">\n\n    <form [formGroup]=\"RegistroForm\">\n\n      <ion-item fill=\"outline\" style=\"margin-bottom: 2%;width: 86%; margin: auto;\" class=\"RegisMedida\">\n        <ion-label style=\"color: white; margin-top: 1%; margin-bottom: 1%;\">Tipo usuario:</ion-label>\n        <ion-select type=\"name\" formControlName=\"TipoUser\" [(ngModel)]=\"Datosregistro.TipoUser\" class=\"SelectStyle\"\n          style=\"background-color: transparent; color: white;\">\n          <ion-select-option *ngFor=\"let item of TipoClientes\">{{item}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item lines=\"full\" style=\"margin-top: 2%;\">\n        <input type=\"name\" formControlName=\"Name\" class=\"form-control\" placeholder=\"Nombre y Apellido: *\"\n          style=\"background-color: transparent; color: white;\" required>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <input type=\"name\" formControlName=\"Phone\" class=\"form-control\" placeholder=\"Número telefónico:\"\n          style=\"background-color: transparent; color: white;\">\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <input type=\"Email\" formControlName=\"Email\" class=\"form-control\" placeholder=\"Correo eletrónico: *\"\n          style=\"background-color: transparent; color: white;\" required>\n      </ion-item>\n\n      <div lines=\"full\" style=\"display: flex; align-items: center;\">\n        <ion-item lines=\"full\">\n          <input type=\"{{!ShowPass ? 'password' : 'name'}}\" formControlName=\"Password\" class=\"form-control\"\n            placeholder=\"Contraseña: *\" style=\"background-color: transparent; color: white;\" required>\n        </ion-item>\n        <div (click)=\"OptionPass()\">\n          <ion-icon *ngIf=\"ShowPass\" name=\"eye-off-outline\" style=\"color: white;\"></ion-icon>\n          <ion-icon *ngIf=\"!ShowPass\" name=\"eye-outline\" style=\"color: white;\"></ion-icon>\n        </div>\n      </div>\n\n      <ion-item lines=\"full\" *ngIf=\"Datosregistro.TipoUser === 'Barbero'\">\n        <input type=\"name\" formControlName=\"Barberia\" class=\"form-control\" placeholder=\"Nombre Barberia:\"\n          style=\"background-color: transparent; color: white;\">\n      </ion-item>\n\n      <ion-item fill=\"outline\" style=\"margin-bottom: 2%;width: 86%; margin: auto;\" class=\"RegisMedida\"\n        *ngIf=\"Datosregistro.TipoUser === 'Cliente'\">\n        <ion-label style=\"color: white; margin-top: 1%; margin-bottom: 1%;\">Barbero:</ion-label>\n        <ion-select type=\"name\" formControlName=\"Barbero\" [(ngModel)]=\"Datosregistro.Barbero\" class=\"SelectStyle\"\n          style=\"background-color: transparent; color: white;\">\n          <ion-select-option *ngFor=\"let barber of ListBarberos\">{{barber.Name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"color: white;\">Preguntas De Seguridad</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" *ngIf=\"!ShowPreguntas\"\n            (click)=\"ShowPreguntas? ShowPreguntas = false : ShowPreguntas = true\">\n            <ion-icon name=\"chevron-down-outline\" style=\"color: silver;\"></ion-icon>\n          </ion-button>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" *ngIf=\"ShowPreguntas\"\n            (click)=\"ShowPreguntas? ShowPreguntas = false : ShowPreguntas = true\">\n            <ion-icon name=\"chevron-up-outline\" style=\"color: silver;\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"ShowPreguntas\">\n        <ion-item lines=\"full\">\n          <input type=\"name\" formControlName=\"PreguntaUno\" class=\"form-control\" placeholder=\"Pregunta N°1: *\"\n            style=\"background-color: transparent; color: white;\" required>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <input type=\"name\" formControlName=\"RespuestaUno\" class=\"form-control\" placeholder=\"Respuesta N°1: *\"\n            style=\"background-color: transparent; color: white;\" required>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <input type=\"name\" formControlName=\"PreguntaDos\" class=\"form-control\" placeholder=\"Pregunta N°2: *\"\n            style=\"background-color: transparent; color: white;\" required>\n        </ion-item>\n\n        <ion-item lines=\"full\">\n          <input type=\"name\" formControlName=\"RespuestaDos\" class=\"form-control\" placeholder=\"Respuesta N°2: *\"\n            style=\"background-color: transparent; color: white;\" required>\n        </ion-item>\n\n      </div>\n\n      <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"GuardarDatosRegistro()\"\n        [disabled]=\"!RegistroForm.valid\" style=\"margin-top: 10%;\">Registrarse</ion-button>\n\n      <div class=\"text-center margin-top\">\n        <span>\n          <text>\n            <a routerLink=\"/login\" style=\"color: white\"> <strong>Ya tengo una cuenta</strong> </a>\n          </text>\n        </span>\n      </div>\n\n    </form>\n\n  </ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map