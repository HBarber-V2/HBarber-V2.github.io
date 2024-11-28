"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_lista_lista_module_ts"],{

/***/ 3997:
/*!***********************************************!*\
  !*** ./src/app/lista/lista-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listaPageRoutingModule": () => (/* binding */ listaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _lista_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista.page */ 9290);




const routes = [
    {
        path: '',
        component: _lista_page__WEBPACK_IMPORTED_MODULE_0__.listaPage,
    }
];
let listaPageRoutingModule = class listaPageRoutingModule {
};
listaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], listaPageRoutingModule);



/***/ }),

/***/ 7488:
/*!***************************************!*\
  !*** ./src/app/lista/lista.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listaPageModule": () => (/* binding */ listaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _lista_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista.page */ 9290);
/* harmony import */ var _lista_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-routing.module */ 3997);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.module */ 5564);









let listaPageModule = class listaPageModule {
};
listaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _lista_routing_module__WEBPACK_IMPORTED_MODULE_1__.listaPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule
        ],
        declarations: [_lista_page__WEBPACK_IMPORTED_MODULE_0__.listaPage]
    })
], listaPageModule);



/***/ }),

/***/ 9290:
/*!*************************************!*\
  !*** ./src/app/lista/lista.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listaPage": () => (/* binding */ listaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _lista_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista.page.html?ngResource */ 2165);
/* harmony import */ var _lista_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista.page.scss?ngResource */ 4455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage-service.service */ 8092);
/* harmony import */ var src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/get-data-backend.service */ 1273);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let listaPage = class listaPage {
    constructor(_localstorage, _GetDate, alertController) {
        this._localstorage = _localstorage;
        this._GetDate = _GetDate;
        this.alertController = alertController;
        this.ButtonAtras = true;
        this.BotonLista = false;
        this.DatosHistorial = [];
        this.ListUsuarios = [];
    }
    ngOnInit() {
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
        this.GetListUser();
    }
    GetListUser() {
        try {
            ///Obtengo la lista de los usuarios del barbero
            if (this.DatosUser.TipoUser === 'Barbero') {
                this._GetDate.GetClientesBarbero(this.DatosUser.idUser).then((ResUser) => {
                    if (ResUser.length > 0) {
                        this.ListUsuarios = ResUser;
                    }
                }).catch((error) => console.error(error));
            }
            this.GetDatosHistorial();
        }
        catch (error) {
            console.error(error);
        }
    }
    GetDatosHistorial() {
        try {
            let FechasUse = [];
            //busco las datos del historial 
            this._GetDate.GetHistorial(this.DatosUser.idUser, this.DatosUser.TipoUser).then((ResHistorial) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                //recorro la data buscada 
                for (let index = 0; index < ResHistorial.length; index++) {
                    // verifico si la fecha por la que voy o es la misma que ya procese 
                    if (FechasUse.indexOf(ResHistorial[index].Fecha) < 0) {
                        const DataFecha = ResHistorial.filter((H) => H.Fecha === ResHistorial[index].Fecha);
                        //Busco los nombres de los clientes de esa cita 
                        if (DataFecha && DataFecha.length > 0) {
                            for (let indexD = 0; indexD < DataFecha.length; indexD++) {
                                let user = this.ListUsuarios.find((U) => U.idUser === DataFecha[indexD].idUser);
                                if (user) {
                                    DataFecha[indexD].Name = user.Name;
                                }
                            }
                        }
                        //si la fecha por la que voy es distinta a la procesada le asingo los valores de 
                        // fecha y los datos que se encuentra en ese fecha, es decir los agendamientos que hicieron los 
                        //clientes en esa fecha 
                        yield this.DatosHistorial.push({
                            Fecha: ResHistorial[index].Fecha,
                            Datos: DataFecha
                        });
                        //asigno esos datos a mi arrego 
                        FechasUse.push(ResHistorial[index].Fecha);
                    }
                }
            })).catch(err => console.error(err));
        }
        catch (error) {
            console.error(error);
        }
    }
    //con este metodo muestro los datos de los agendamientos que tengo por fecha 
    Historial(Fecha) {
        if (this.FechaSelect === Fecha) {
            //si la fecha seleccionada es igual a la fecha que la persona ya selecciono, esqo quiere deir que ya
            //no quiere ver los datos de esa fecha 
            this.FechaSelect = '';
        }
        else {
            //si la fecha seleccionada es distinta a la que el esta eligiendo, quiere decir 
            //que va a ver los datos de una nueva fecha
            this.FechaSelect = Fecha;
        }
    }
    ChangeStatus(DataAgenda, NewStatus) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //Cambio el status de la cita
                const alert = yield this.alertController.create({
                    header: `¿Usted desea marcar como ${NewStatus === 'Atendido' ? 'Atendido' : 'Cancelado'} esta cita?`,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                        },
                        {
                            text: 'Confirmar',
                            handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                DataAgenda.Status = NewStatus;
                                this._GetDate.UpdateAgenda(DataAgenda).then((ResUpdate) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                    if (ResUpdate.status === true) {
                                        const alert = yield this.alertController.create({
                                            header: 'El status se actualizo con éxito',
                                            buttons: ['Aceptar']
                                        });
                                        yield alert.present();
                                    }
                                    else {
                                        const alert = yield this.alertController.create({
                                            header: 'No se logro actualizar el status',
                                            buttons: ['Aceptar']
                                        });
                                        yield alert.present();
                                    }
                                })).catch((error) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                    const alert = yield this.alertController.create({
                                        header: 'No se logro actualizar el status',
                                        buttons: ['Aceptar']
                                    });
                                    yield alert.present();
                                    console.error(error);
                                }));
                            })
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
listaPage.ctorParameters = () => [
    { type: src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__.GetDataBackendService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
listaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-lista',
        template: _lista_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_lista_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], listaPage);



/***/ }),

/***/ 4455:
/*!**************************************************!*\
  !*** ./src/app/lista/lista.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ":host ion-content.FondLista {\n  --background:url(\"/assets/img/FondoHome.png\") 0 0/100% 100% no-repeat ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNFQUFBO0FBQVIiLCJmaWxlIjoibGlzdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi1jb250ZW50LkZvbmRMaXN0YSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL0ZvbmRvSG9tZS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 2165:
/*!**************************************************!*\
  !*** ./src/app/lista/lista.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<app-header Title=\"Historial\" [ButtonAtras]=ButtonAtras></app-header>\n<ion-content [fullscreen]=\"true\" class=\"FondLista\">\n\n   <!-- Alerta -->\n  <div *ngIf=\"DatosHistorial.length === 0\" class=\"alert alert-dark\" role=\"alert\"\n    style=\"margin: auto; max-width: 95%; margin-top: 5%; text-align: center;\">\n    Historial Vacío\n  </div>\n\n  <div *ngIf=\"DatosHistorial.length > 0\">\n\n    <ion-card *ngFor=\"let history of DatosHistorial\" (click)=\"Historial(history.Fecha)\">\n\n      <ion-item>\n        <ion-label class=\"ion-text-center\"> <strong>{{history.Fecha | date:'dd/MM/yyyy'}}</strong> </ion-label>\n        <ion-button fill=\"clear\">\n          <ion-icon *ngIf=\"FechaSelect != history.Fecha\" name=\"chevron-down-outline\"></ion-icon>\n          <ion-icon *ngIf=\"FechaSelect === history.Fecha\" name=\"chevron-up-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <!-- Status -->\n      <ion-card-content *ngIf=\"FechaSelect === history.Fecha\">\n        <ion-item *ngFor=\"let userhistory of history.Datos\">\n          <ion-label class=\"ion-text-wrap\">\n            <ion-text style=\"text-align: center;\">\n              <div style=\"background: #bafd9e; border-radius: 5px;\" *ngIf=\"userhistory.Status === 'Atendido'\">\n                <h3 style=\"margin: revert;\"> <strong>{{userhistory.Status}}</strong></h3>\n              </div> <!-- Atendido -->\n\n              <div style=\"background: #ffc107; border-radius: 5px;\" *ngIf=\"userhistory.Status === 'Pendiente'\">\n                <h3 style=\"margin: revert;\"> <strong>{{userhistory.Status}}</strong></h3>\n              </div> <!-- Pendiente -->\n\n              <div style=\"background: #ed3c3c; border-radius: 5px;\" *ngIf=\"userhistory.Status === 'Cancelado'\">\n                <h3 style=\"margin: revert;\"> <strong>{{userhistory.Status}}</strong></h3>\n              </div> <!-- Cancelado -->\n\n            </ion-text>\n            <ion-text>\n              <p *ngIf=\"DatosUser.TipoUser === 'Barbero'\"> <strong>Nombre:</strong>\n                {{userhistory.Name}}</p>\n            </ion-text>\n            <ion-text>\n              <p> <strong>Hora:</strong> {{userhistory.Hora[0]}}</p>\n            </ion-text>\n            <ion-text>\n              <p> <strong>Servicios:</strong> {{userhistory.Servicios}}</p>\n            </ion-text>\n            <ion-text>\n              <p> <strong>Monto:</strong> {{userhistory.Monto}} $</p>\n            </ion-text>\n            \n            <div *ngIf=\"DatosUser.TipoUser === 'Barbero' && userhistory.Status === 'Pendiente'\"\n              style=\"display: flex; justify-content: space-around;\">\n              <ion-row>\n                <ion-col style=\"width: 0%;\">\n                  <ion-button color=\"primary\" size=\"small\" style=\"font-size: 11px;\"\n                    (click)=\"ChangeStatus(userhistory,'Atendido')\">\n                    Atendido\n                  </ion-button>\n                </ion-col>\n                <ion-col style=\"width: 0%;\">\n                  <ion-button color=\"primary\" size=\"small\" style=\"font-size: 11px;\"\n                    (click)=\"ChangeStatus(userhistory,'Cancelado')\">\n                    Cancelado\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </div>\n\n          </ion-label>\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_lista_lista_module_ts.js.map