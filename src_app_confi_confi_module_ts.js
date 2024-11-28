"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_confi_confi_module_ts"],{

/***/ 9228:
/*!***********************************************!*\
  !*** ./src/app/confi/confi-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiPageRoutingModule": () => (/* binding */ ConfiPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _confi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confi.page */ 860);




const routes = [
    {
        path: '',
        component: _confi_page__WEBPACK_IMPORTED_MODULE_0__.ConfiPage,
    }
];
let ConfiPageRoutingModule = class ConfiPageRoutingModule {
};
ConfiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfiPageRoutingModule);



/***/ }),

/***/ 530:
/*!***************************************!*\
  !*** ./src/app/confi/confi.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiPageModule": () => (/* binding */ ConfiPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _confi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confi-routing.module */ 9228);
/* harmony import */ var _confi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confi.page */ 860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.module */ 5564);










let ConfiPageModule = class ConfiPageModule {
};
ConfiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _confi_page__WEBPACK_IMPORTED_MODULE_1__.ConfiPage }]),
            _confi_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfiPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule
        ],
        declarations: [_confi_page__WEBPACK_IMPORTED_MODULE_1__.ConfiPage]
    })
], ConfiPageModule);



/***/ }),

/***/ 860:
/*!*************************************!*\
  !*** ./src/app/confi/confi.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfiPage": () => (/* binding */ ConfiPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _confi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confi.page.html?ngResource */ 9898);
/* harmony import */ var _confi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confi.page.scss?ngResource */ 2471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/local-storage-service.service */ 8092);
/* harmony import */ var _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/get-data-backend.service */ 1273);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ConfiPage = class ConfiPage {
    constructor(_localstorage, _GetData, navCtrl, alertController) {
        this._localstorage = _localstorage;
        this._GetData = _GetData;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.ButtonAtras = true;
        this.ShowModal = false;
        this.DatosConfi = {};
        this.ShowPreguntas = false;
        this.ShowDatosBarbero = false;
        this.ListBarberos = [];
        this.ShowPass = false;
    }
    ngOnInit() {
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosConfi = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
        this.NameUser = this.DatosConfi.Name;
        this.EmailUser = this.DatosConfi.Email;
        this.GetListBarber();
    }
    OptionPass() {
        //muestro u oculto la clave
        switch (this.ShowPass) {
            case true:
                this.ShowPass = false;
                break;
            case false:
                this.ShowPass = true;
                break;
        }
    }
    ViewModal() {
        //Veo el modal de los datos del usuario
        if (this.ShowModal) {
            this.ShowModal = false;
        }
        else if (!this.ShowModal) {
            this.ShowModal = true;
        }
    }
    ViewPreguntas() {
        //muetra u oculta el modal con las preguntas de seguridad
        if (this.ShowPreguntas) {
            this.ShowPreguntas = false;
        }
        else if (!this.ShowPreguntas) {
            this.ShowPreguntas = true;
        }
    }
    ViewDatos() {
        //muestra u oculta los datos adicionales del barbero 
        if (this.ShowDatosBarbero) {
            this.ShowDatosBarbero = false;
        }
        else if (!this.ShowDatosBarbero) {
            this.ShowDatosBarbero = true;
        }
    }
    GetListBarber() {
        //busco la lista de todos los barberos 
        try {
            this._GetData.GetTipoDeUsusarios('Barbero').then((Res) => {
                if (Res.length > 0) {
                    //si encontre data se la asigno a mi lista de barberos 
                    this.ListBarberos = Res;
                    if (this.DatosConfi.idBarbero) {
                        this.barberoActual = this.ListBarberos.find((Barber) => Barber.idUser === this.DatosConfi.idBarbero);
                        if (this.barberoActual) {
                            this.DatosConfi.Barbero = this.barberoActual.Name;
                        }
                    }
                }
            }).catch(error => console.error(error));
        }
        catch (error) {
            console.error(error);
        }
    }
    // se guarda la actualizacion de datos que hizo el cliente 
    GuardarDatos() {
        // elimino el _id que es un id unico de mongo
        delete this.DatosConfi._id;
        //eliminio el __V que es un id que nos indica cuantas veces ha sido modificado el archivo
        delete this.DatosConfi.__v;
        //si cambia de barbero aqui busco los datos del nuevo barbero 
        if (this.DatosConfi.TipoUser === 'Cliente') {
            const newbarbero = this.ListBarberos.find((Barberos) => Barberos.Name === this.DatosConfi.Barbero);
            this.barberoActual = newbarbero;
            if (newbarbero) {
                this.DatosConfi.idBarbero = this.barberoActual.idUser;
            }
        }
        //guardo los datos del update o actualizacion que hizo el cliente
        this._GetData.UpdateUser(this.DatosConfi).then((ResUpdate) => {
            if (ResUpdate.status === true) {
                this.ShowAlert(ResUpdate.status);
                this._localstorage.GuardarItem('DatosUser', JSON.stringify(this.DatosConfi));
                this.NameUser = this.DatosConfi.Name;
                this.EmailUser = this.DatosConfi.Email;
                if (this.DatosConfi.TipoUser === 'Cliente') {
                    this.DatosConfi.Barbero = this.barberoActual.Name;
                }
            }
            else {
                this.ShowAlert(ResUpdate.status);
            }
        }).catch(error => console.error(error));
    }
    //con este metodo cierro la seccion del usuario 
    CerrarSeccion() {
        this._localstorage.RemoverItems();
        this.navCtrl.navigateForward("/login");
    }
    ShowAlert(status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Sus datos se guardaron con éxito',
                    buttons: ['Aceptar']
                });
                const alertError = yield this.alertController.create({
                    header: '¡Hubo un error al guardar sus datos!',
                    buttons: ['Aceptar']
                });
                if (status) {
                    yield alert.present();
                }
                else {
                    yield alertError.present();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
ConfiPage.ctorParameters = () => [
    { type: _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__.GetDataBackendService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ConfiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-confi',
        template: _confi_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confi_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfiPage);



/***/ }),

/***/ 2471:
/*!**************************************************!*\
  !*** ./src/app/confi/confi.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".ConfiStyle {\n  padding: 5%;\n  margin-bottom: 5%;\n  box-shadow: rgba(0, 0, 0, 0.39) 0px 3px 20px 0px;\n}\n\n.Perfil ion-card {\n  width: 100%;\n  border-radius: 0;\n  background-color: #fff;\n}\n\n.Perfil ion-card ion-card-content {\n  background-color: var(--ion-color-warning);\n  color: white;\n  text-align: center;\n}\n\n.Perfil ion-card ion-card-content img {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: solid 4px #828589;\n  display: inline;\n  box-shadow: 0 0 28px white;\n}\n\n.Perfil ion-card ion-card-content h1 {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNSOztBQUNRO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDVjs7QUFDVTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUNaOztBQUVVO0VBQ0Usa0JBQUE7QUFBWiIsImZpbGUiOiJjb25maS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQ29uZmlTdHlsZSB7XG4gICAgcGFkZGluZzogNSU7IFxuICAgIG1hcmdpbi1ib3R0b206IDUlOyBcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzkpIDBweCAzcHggMjBweCAwcHhcbn1cbi5QZXJmaWwge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCA0cHggIzgyODU4OTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyOHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICB9XG4gICAgICB9XG59Il19 */";

/***/ }),

/***/ 9898:
/*!**************************************************!*\
  !*** ./src/app/confi/confi.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<app-header Title=\"Ajustes\" [ButtonAtras]=\"ButtonAtras\"></app-header>\n\n<ion-content class=\"Perfil\">\n\n  <!--  Perfil del usuario -->\n  <ion-card class=\"ion-no-margin\">\n    <ion-card-content>\n      <img src=\"assets/img/Avatar.png\">\n      <h1>{{NameUser}}</h1>\n      <h2>{{EmailUser}}</h2>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- lista de formulario -->\n  <ion-list class=\"ion-padding animated fadeIn fast\" class=\"ConfiStyle\">\n\n    <ion-item (click)=\"ViewModal()\">\n      <ion-icon color=\"warning\" slot=\"start\" name=\"person-circle\"></ion-icon>\n      <label>Mi Perfil</label>\n    </ion-item>\n\n    <ion-card-content *ngIf=\"ShowModal\">\n      <!-- formulario con los datos del usuario -->\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Nombre y Apellido:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.Name\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\"> Número telefónico:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.Phone\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Correo eletrónico:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.Email\" class=\"form-control\">\n      </div>\n\n      <div style=\"display: flex; align-items: center;\">\n        <div class=\"mb-3\">\n          <label for=\"inputCity\" class=\"form-label\"> Contraseña:</label>\n          <input type=\"{{!ShowPass ? 'password' : 'text'}}\" [(ngModel)]=\"DatosConfi.Password\" class=\"form-control\">\n        </div>\n        <div (click)=\"OptionPass()\">\n          <ion-icon *ngIf=\"ShowPass\" name=\"eye-off-outline\" style=\"color: black;\"></ion-icon>\n          <ion-icon *ngIf=\"!ShowPass\" name=\"eye-outline\" style=\"color: black;\"></ion-icon>\n        </div>\n      </div>\n\n      <div class=\"mb-3\" *ngIf=\"DatosConfi.TipoUser === 'Barbero'\">\n        <label for=\"inputCity\" class=\"form-label\">Nombre Barberia:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.Barberia\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\" *ngIf=\"DatosConfi.TipoUser === 'Cliente'\">\n        <label for=\"inputState\" class=\"form-label\">Barbero:</label>\n        <select type=\"text\" [(ngModel)]=\"DatosConfi.Barbero\" class=\"form-select\"\n          style=\" background-color: transparent;\">\n          <option selected *ngFor=\"let barber of ListBarberos\">{{barber.Name}}</option>\n        </select>\n      </div>\n\n      <ion-button shape=\"round\" size=\"full\" style=\"margin-bottom: 2%;\" (click)=\"GuardarDatos()\">\n        Guardar\n      </ion-button>\n    </ion-card-content>\n\n    <ion-item (click)=\"ViewPreguntas()\">\n      <ion-icon color=\"warning\" slot=\"start\" name=\"document-lock\"></ion-icon>\n      <label>Pregunta de Seguridad</label>\n    </ion-item>\n\n\n    <ion-card-content *ngIf=\"ShowPreguntas\">\n      <!-- formulario con las preguntas de seguridad -->\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Pregunta N°1:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.PreguntaUno\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Respuesta N°1:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.RespuestaUno\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Pregunta N°2:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.PreguntaDos\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Respuesta N°2:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.RespuestaDos\" class=\"form-control\">\n      </div>\n\n      <ion-button shape=\"round\" size=\"full\" style=\"margin-bottom: 2%;\" (click)=\"GuardarDatos()\">\n        Guardar\n      </ion-button>\n    </ion-card-content>\n\n    <ion-item *ngIf=\"DatosConfi.TipoUser === 'Cliente'\" (click)=\"ViewDatos()\">\n      <ion-icon color=\"warning\" slot=\"start\" name=\"person-add\"></ion-icon>\n      <label>Contacto del Barbero</label>\n    </ion-item>\n\n    <ion-card-content *ngIf=\"ShowDatosBarbero && DatosConfi.TipoUser === 'Cliente'\">\n      <!-- Datos del barbero que ve el cliente -->\n      <ion-item *ngIf=\"barberoActual.Name\">\n        <ion-icon color=\"warning\" slot=\"start\" name=\"person-outline\"></ion-icon>\n        <label>Nombre: {{barberoActual.Name}}</label>\n      </ion-item>\n\n      <ion-item *ngIf=\"barberoActual.Phone\">\n        <ion-icon color=\"warning\" slot=\"start\" name=\"call-outline\"></ion-icon>\n        <label>Teléfono: {{barberoActual.Phone}}</label>\n      </ion-item>\n\n      <ion-item *ngIf=\"barberoActual.Facebook\">\n        <ion-icon color=\"warning\" slot=\"start\" name=\"logo-facebook\"></ion-icon>\n        <label>Facebook: {{barberoActual.Facebook}}</label>\n      </ion-item>\n\n      <ion-item *ngIf=\"barberoActual.Instagram\">\n        <ion-icon color=\"warning\" slot=\"start\" name=\"logo-instagram\"></ion-icon>\n        <label>Instagram: {{barberoActual.Instagram}}</label>\n      </ion-item>\n\n    </ion-card-content>\n\n    <ion-item *ngIf=\"DatosConfi.TipoUser === 'Barbero'\" (click)=\"ViewDatos()\">\n      <ion-icon color=\"warning\" slot=\"start\" name=\"person-add\"></ion-icon>\n      <label>Datos para el cliente</label>\n    </ion-item>\n\n    <ion-card-content *ngIf=\"ShowDatosBarbero && DatosConfi.TipoUser === 'Barbero'\">\n      <!-- formulario con los datos a mostrar al cliente-->\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Facebook:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.Facebook\" class=\"form-control\">\n      </div>\n\n      <div class=\"mb-3\">\n        <label for=\"inputCity\" class=\"form-label\">Instagram:</label>\n        <input type=\"text\" [(ngModel)]=\"DatosConfi.Instagram\" class=\"form-control\">\n      </div>\n\n      <ion-button shape=\"round\" size=\"full\" style=\"margin-bottom: 2%;\" (click)=\"GuardarDatos()\">\n        Guardar\n      </ion-button>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon color=\"warning\" slot=\"start\" name=\"exit\"></ion-icon>\n      <ion-label (click)=\"CerrarSeccion()\">Cerrar sesión</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_confi_confi_module_ts.js.map