"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/get-data-backend.service */ 1273);
/* harmony import */ var _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/local-storage-service.service */ 8092);








let LoginPage = class LoginPage {
    constructor(navCtrl, _localstorage, _ConsultasB, formBuilder) {
        this.navCtrl = navCtrl;
        this._localstorage = _localstorage;
        this._ConsultasB = _ConsultasB;
        this.formBuilder = formBuilder;
        this.SinCorreo = false;
        this.ErrorClave = false;
        this.ErrorRespuestas = false;
        this.PassSave = false;
        this.ErrorNewPass = false;
        this.ShowPass = false;
        this.ShowLogin = true;
        this.ModalEmail = false;
        this.ShowPreguntas = false;
        this.ModalPass = false;
        this.PregSeguridad = [];
        this.LoginForm = this.formBuilder.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
        });
        this.RecuperarPass = this.formBuilder.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]]
        });
        this.PreguntasForm = this.formBuilder.group({
            RespuestaUno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
            RespuestaDos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]]
        });
        this.PassForm = this.formBuilder.group({
            NewPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
        });
    }
    ngOnInit() {
    }
    get DatosLogin() { return this.LoginForm.value; }
    get EmailRecuperacion() { return this.RecuperarPass.value; }
    get Respuestas() { return this.PreguntasForm.value; }
    //busco los datos del usuario que esta iniciando seccion 
    GuardarDatosLogin() {
        this._ConsultasB.GetUserEmail(this.DatosLogin.Email).then((ResUser) => {
            if (ResUser.length > 0) {
                // si tengo datos eso quiere decir que ese correo si existe 
                if (ResUser[0].Password === this.DatosLogin.Password) {
                    // verifico si la clave ingresada es igual a la que esta en la base de datos y lo mando a home 
                    this._localstorage.GuardarItem('DatosUser', JSON.stringify(ResUser[0]));
                    this.ClearForm();
                    this.navCtrl.navigateForward("/home");
                }
                else {
                    //si las claves son diferentes la clave es incorrecta 
                    this.ErrorClave = true;
                }
            }
            else {
                // sino existe datos el correo es incorrecto 
                this.SinCorreo = true;
            }
            this.HideAlert();
        }).catch(error => console.error(error));
    }
    OptionPass() {
        //Mostrar u ocultar la clave
        switch (this.ShowPass) {
            case true:
                this.ShowPass = false;
                break;
            case false:
                this.ShowPass = true;
                break;
        }
    }
    HideAlert() {
        //escondo la alerta mostrada despues de 2 segundos
        setTimeout(() => {
            this.SinCorreo = false;
            this.ErrorClave = false;
            this.ErrorRespuestas = false;
            this.PassSave = false;
            this.ErrorClave = false;
        }, 2000);
    }
    GetData() {
        try {
            //Obtengo los datos para el cambio de clave 
            if (this.EmailRecuperacion) {
                this._ConsultasB.GetUserEmail(this.EmailRecuperacion.Email).then((Res) => {
                    if (Res.length > 0) {
                        this.DataUser = Res[0];
                        this.PregSeguridad = {
                            "PreguntaDos": Res[0].PreguntaDos,
                            "PreguntaUno": Res[0].PreguntaUno,
                            "RespuestaDos": Res[0].RespuestaDos,
                            "RespuestaUno": Res[0].RespuestaUno,
                        };
                        this.ModalEmail = false;
                        this.ShowPreguntas = true;
                    }
                    else {
                        this.SinCorreo = true;
                        this.HideAlert();
                    }
                });
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    VerifyPreguntas() {
        try {
            //Verifico las respuestas de seguridad que coloco el usuario 
            if (this.Respuestas.RespuestaUno === this.PregSeguridad.RespuestaUno && this.Respuestas.RespuestaDos === this.PregSeguridad.RespuestaDos) {
                this.ShowPreguntas = false;
                this.ModalPass = true;
            }
            else {
                this.ErrorRespuestas = true;
                this.HideAlert();
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    SavePassword() {
        try {
            //Guardo la nueva clave del usuario 
            const Pass = this.PassForm.value;
            if (this.DataUser.Password != Pass.NewPassword) {
                this.DataUser.Password = Pass.NewPassword;
                this._ConsultasB.UpdateUser(this.DataUser).then((ResUpdate) => {
                    if (ResUpdate.status) {
                        this.PassSave = true;
                        this.HideAlert();
                        setTimeout(() => {
                            this.ClearForm();
                            this.ModalPass = false;
                            this.ShowLogin = true;
                        }, 1000);
                    }
                    else {
                        this.MsgError = 'No se pudo guardar la contraseña';
                        this.ErrorClave = true;
                        this.HideAlert();
                    }
                }).catch(error => console.error(error));
            }
            else {
                this.MsgError = 'La Contraseña debe ser distinta a la anterior';
                this.ErrorClave = true;
                this.HideAlert();
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    ClearForm() {
        //Limpio los formularios 
        this.LoginForm.patchValue({
            Email: '',
            Password: ''
        });
        this.RecuperarPass.patchValue({
            Email: ''
        });
        this.PreguntasForm.patchValue({
            RespuestaUno: '',
            RespuestaDos: ''
        });
        this.PassForm.patchValue({
            NewPassword: ''
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageServiceService },
    { type: _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_2__.GetDataBackendService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



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

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ":host .FondImg {\n  --background:url(\"/assets/img/FondLR.jpg\") 0 0/100% 100% no-repeat ;\n}\n:host ion-button.button {\n  --background: linear-gradient(35deg, #ffffffd7, #ffffff71, #00000048, #000000bd, #000000);\n  border-radius: 20px;\n  border: inset;\n}\n.LoginStyle {\n  box-shadow: black 0px 3px 20px 0px, black 0px 3px 20px 0px;\n  padding: 5%;\n  background-color: transparent;\n  margin: auto;\n  display: block;\n  max-width: 76%;\n}\n.Color {\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.39) 0px 3px 20px 0px;\n}\n/* background: linear-gradient(0deg, #e9ecef, #212529, #f9fafb, #212529,#21252900);\n */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1FQUFBO0FBQVI7QUFFSTtFQUNJLHlGQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQVI7QUFHQTtFQUNJLDBEQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQUo7QUFFQTtFQUNJLFlBQUE7RUFDQSxnREFBQTtBQUNKO0FBRUE7RUFBQSIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLkZvbmRJbWcge1xuICAgICAgICAtLWJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltZy9Gb25kTFIuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xuICAgIH1cbiAgICBpb24tYnV0dG9uLmJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjZmZmZmZmZDcsICNmZmZmZmY3MSwgIzAwMDAwMDQ4LCAjMDAwMDAwYmQsICMwMDAwMDApOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDsgXG4gICAgICAgIGJvcmRlcjogaW5zZXQ7XG4gICAgfVxufVxuLkxvZ2luU3R5bGUge1xuICAgIGJveC1zaGFkb3c6IHJnYigwLCAwLCAwKSAwcHggM3B4IDIwcHggMHB4LCAgcmdiKDAsIDAsIDApIDBweCAzcHggMjBweCAwcHg7XG4gICAgcGFkZGluZzogNSU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDc2JTtcbn1cbi5Db2xvciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zOSkgMHB4IDNweCAyMHB4IDBweDtcbn1cblxuLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNlOWVjZWYsICMyMTI1MjksICNmOWZhZmIsICMyMTI1MjksIzIxMjUyOTAwKTtcbiAqL1xuXG4iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"FondImg\">\n\n  <img style=\"margin: auto; display: block; max-width: 70%\" src=\"/assets/img/Logo_Login.png\">\n\n    <!-- inicio de sesión -->\n  <ion-card class=\"LoginStyle\" *ngIf=\"ShowLogin\">\n\n    <form [formGroup]=\"LoginForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <ion-item lines=\"full\">\n        <input type=\"email\" formControlName=\"Email\" class=\"form-control\"\n          placeholder=\"Correo eletrónico:\" style=\"background-color: transparent; color: white;\" required>\n      </ion-item>\n\n      <div lines=\"full\" style=\"display: flex; align-items: center;\">\n        <ion-item lines=\"full\">\n          <input type=\"{{!ShowPass ? 'password' : 'name'}}\" formControlName=\"Password\"\n            class=\"form-control\" placeholder=\"Contraseña:\"\n            style=\"background-color: transparent; color: white;\" required>\n        </ion-item>\n        <div (click)=\"OptionPass()\">\n          <ion-icon *ngIf=\"ShowPass\" name=\"eye-off-outline\" style=\"color: white;\"></ion-icon>\n          <ion-icon *ngIf=\"!ShowPass\" name=\"eye-outline\" style=\"color: white;\"></ion-icon>\n        </div>\n      </div>\n\n      <a (click)=\"ShowLogin = false; ModalEmail = true\">Olvide mi contraseña</a>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"GuardarDatosLogin()\"\n            [disabled]=\"!LoginForm.valid\">Iniciar Sesión</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" routerLink=\"/Registro\">Registrarse</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"SinCorreo\" style=\"width: 100%; margin-top: 2%;\">\n      Correo eletrónico no encontrado\n    </div>\n\n    <div class=\"alert alert-warning\" role=\"alert\" *ngIf=\"ErrorClave\" style=\"width: 100%; ; margin-top: 2%;\">\n      Contraseña incorrecta\n    </div>\n\n  </ion-card>\n\n  <ion-card class=\"LoginStyle\" *ngIf=\"ModalEmail\">\n\n    <ion-card-header>\n      Olvido Su contraseña\n    </ion-card-header>\n\n    <p>Por favor ingrese el correo de la cuenta que desea recuperar contraseña</p>\n\n    <form [formGroup]=\"RecuperarPass\" novalidate>\n\n      <ion-item lines=\"full\">\n        <input type=\"Email\" formControlName=\"Email\" class=\"form-control\"\n          placeholder=\"Correo eletrónico:\" style=\"background-color: transparent; color: white;\" required>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"GetData()\" [disabled]=\"!RecuperarPass.valid\">\n            Siguiente</ion-button>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"ModalEmail = false; ShowLogin = true\">\n            Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"SinCorreo\" style=\"width: 100%; margin-top: 2%;\">\n        Correo eletrónico no encontrado\n      </div>\n\n    </form>\n\n  </ion-card>\n\n  <ion-card class=\"LoginStyle\" *ngIf=\"ShowPreguntas\">\n\n    <ion-card-header>\n      Preguntas de Seguridad\n    </ion-card-header>\n\n    <form [formGroup]=\"PreguntasForm\" novalidate>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\" style=\"color: white;\">{{PregSeguridad.PreguntaUno}}</ion-label>\n        <ion-input style=\"color: white;\" formControlName=\"RespuestaUno\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\" style=\"color: white;\">{{PregSeguridad.PreguntaDos}}</ion-label>\n        <ion-input style=\"color: white;\" formControlName=\"RespuestaDos\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"VerifyPreguntas()\"\n            [disabled]=\"!PreguntasForm.valid\">\n            Siguiente</ion-button>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"ShowPreguntas = false ; ModalEmail = true\">\n            Anterior</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"ErrorRespuestas\" style=\"width: 100%; margin-top: 2%;\">\n        Respuestas de seguridad incorrectas\n      </div>\n\n    </form>\n\n  </ion-card>\n\n  <ion-card class=\"LoginStyle\" *ngIf=\"ModalPass\">\n\n    <ion-card-header>\n      Ingrese su nueva contraseña\n    </ion-card-header>\n\n    <form [formGroup]=\"PassForm\" novalidate>\n\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\" style=\"color: white;\">Nueva contraseña</ion-label>\n        <ion-input *ngIf=\"!ShowPass\" style=\"color: white; display: flex; flex-direction: row-reverse;\"\n          formControlName=\"NewPassword\" type=\"password\" required>\n          <ion-button (click)=\"OptionPass()\">\n            <ion-icon name=\"eye-off-outline\" style=\"color: red;\"></ion-icon>\n          </ion-button>\n        </ion-input>\n        <ion-input *ngIf=\"ShowPass\" style=\"color: white; display: flex; flex-direction: row-reverse;\"\n          formControlName=\"NewPassword\" type=\"text\" required>\n          <ion-button (click)=\"OptionPass()\">\n            <ion-icon name=\"eye-off-outline\" style=\"color: red;\"></ion-icon>\n          </ion-button>\n        </ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\" (click)=\"SavePassword()\" [disabled]=\"!PassForm.valid\">\n            Guardar</ion-button>\n          <ion-button class=\"button\" shape=\"round\" size=\"full\"\n            (click)=\"ModalPass = false; ShowLogin = true; ClearForm()\">\n            Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"PassSave\" style=\"width: 100%; margin-top: 2%;\">\n        Contraseña guardada con éxito\n      </div>\n\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"ErrorClave\" style=\"width: 100%; margin-top: 2%;\">\n        {{MsgError}}\n      </div>\n\n    </form>\n  </ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map