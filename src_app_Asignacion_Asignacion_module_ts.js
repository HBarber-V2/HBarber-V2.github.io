"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Asignacion_Asignacion_module_ts"],{

/***/ 5709:
/*!*********************************************************!*\
  !*** ./src/app/Asignacion/Asignacion-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionPageRoutingModule": () => (/* binding */ AsignacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Asignacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asignacion.page */ 3294);




const routes = [
    {
        path: '',
        component: _Asignacion_page__WEBPACK_IMPORTED_MODULE_0__.AsignacionPage,
    },
];
let AsignacionPageRoutingModule = class AsignacionPageRoutingModule {
};
AsignacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AsignacionPageRoutingModule);



/***/ }),

/***/ 9090:
/*!*************************************************!*\
  !*** ./src/app/Asignacion/Asignacion.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionPageModule": () => (/* binding */ AsignacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _Asignacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asignacion.page */ 3294);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Asignacion_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asignacion-routing.module */ 5709);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.module */ 5564);





//import { Tab4PageRoutingModule } from './tab4-routing.module';





let AsignacionPageModule = class AsignacionPageModule {
};
AsignacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _Asignacion_page__WEBPACK_IMPORTED_MODULE_0__.AsignacionPage }]),
            _Asignacion_routing_module__WEBPACK_IMPORTED_MODULE_1__.AsignacionPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule
        ],
        declarations: [_Asignacion_page__WEBPACK_IMPORTED_MODULE_0__.AsignacionPage]
    })
], AsignacionPageModule);



/***/ }),

/***/ 3294:
/*!***********************************************!*\
  !*** ./src/app/Asignacion/Asignacion.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsignacionPage": () => (/* binding */ AsignacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _Asignacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Asignacion.page.html?ngResource */ 5158);
/* harmony import */ var _Asignacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Asignacion.page.scss?ngResource */ 7642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/local-storage-service.service */ 8092);
/* harmony import */ var src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/get-data-backend.service */ 1273);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let AsignacionPage = class AsignacionPage {
    constructor(_localstorage, _GetData, alertController, ref) {
        this._localstorage = _localstorage;
        this._GetData = _GetData;
        this.alertController = alertController;
        this.ref = ref;
        this.ButtonAtras = true;
        this.DatosAsign = {};
        this.ListAsignacion = [];
        this.ShowModal = false;
    }
    ngOnInit() {
        //asigno los datos del usuario que tengo en el local storage 
        this.DataUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
        this.ObtenerJornadas();
    }
    ngAfterContentChecked() {
        this.ref.detectChanges();
    }
    ObtenerJornadas() {
        //busco las jornadas
        try {
            this._GetData.GetJornada(this.DataUser.idUser).then((Data) => {
                if (Data.length > 0) {
                    this.ListAsignacion = Data;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    GuardarDatos() {
        //las horas seleccionadas las convierto en tipo fecha
        this.timeInicioValue = new Date(this.timeInicioValue);
        this.timeFinValue = new Date(this.timeFinValue);
        let HorasJornada = [];
        let pos = 0;
        //aqui le coloco los ceros que le falten a los minutos
        for (let index = this.timeInicioValue.getHours(); index < this.timeFinValue.getHours(); index++) {
            HorasJornada.push({
                id: pos,
                Hora: `${index}:${this.FormatMinutos(this.timeInicioValue.getMinutes())}`,
                status: true
            });
            pos = pos + 1;
        }
        if (this.TipoProceso === 'Actualizar') {
            //armo la estructura a editar
            this.DatosAsign = {
                idAsig: this.DataJornada.idAsig,
                idUser: this.DataJornada.idUser,
                Fecha: this.DataJornada.Fecha,
                Hora_In: `${this.timeInicioValue.getHours()}:${this.FormatMinutos(this.timeInicioValue.getMinutes())}`,
                Hora_Fin: `${this.timeFinValue.getHours()}:${this.FormatMinutos(this.timeFinValue.getMinutes())}`,
                HorasDisponible: HorasJornada
            };
            this._GetData.UpdateJornada(this.DatosAsign).then((ResUp) => {
                //guarda los cambios a la joranada
                if (ResUp.status === true) {
                    const PosAsign = this.ListAsignacion.indexOf((Asig) => Asig.idAsig === this.DatosAsign.idAsig);
                    this.ListAsignacion[PosAsign] = this.DatosAsign;
                    this.ShowAlert('Edit');
                    this.FinalizarProceso();
                }
                else {
                    this.ShowAlert('EditError');
                }
            }).catch((err) => { console.error(err); this.ShowAlert('EditError'); });
        }
        else {
            //aqui armo la estructura de una jornada nueva
            this.DatosAsign = {
                idAsig: Math.random().toString(36).substring(2, 8 + 2),
                idUser: this.DataUser.idUser,
                Fecha: new Date(this.dateValue),
                Hora_In: `${this.timeInicioValue.getHours()}:${this.FormatMinutos(this.timeInicioValue.getMinutes())}`,
                Hora_Fin: `${this.timeFinValue.getHours()}:${this.FormatMinutos(this.timeFinValue.getMinutes())}`,
                HorasDisponible: HorasJornada
            };
            this._GetData.InsertJornada(this.DatosAsign).then((Res) => {
                if (Res.status === true) {
                    this.ListAsignacion.push(Res.mesage);
                    this.ShowAlert('New');
                    this.FinalizarProceso();
                }
                else {
                    this.ShowAlert('NewError');
                }
            }).catch((err) => { console.error(err); this.ShowAlert('NewError'); });
        }
    }
    ActualizarJornada(IdJornada) {
        this.TipoProceso = 'Actualizar';
        //Busco la jornada que se quiere actualizar dentro del arreglo de jornada 
        this.DataJornada = this.ListAsignacion.find((Asig) => Asig.idAsig === IdJornada);
        //asignar los datos de la jornada seleccionada
        this.dateValue = this.DataJornada.Fecha;
        this.timeInicioValue = this.FormatHora(this.DataJornada.Hora_In);
        this.timeFinValue = this.FormatHora(this.DataJornada.Hora_Fin);
        this.ViewModal();
    }
    EliminarJornada(IdJornada) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: '¿Usted desea eliminar esta Asignación?',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                        },
                        {
                            text: 'Confirmar',
                            handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                this._GetData.DeleteJornada(IdJornada).then((ResD) => {
                                    if (ResD.status && ResD.mesage != null || undefined) {
                                        //filtro todas las jornadas sin incluir la que se elimino 
                                        this.ListAsignacion = this.ListAsignacion.filter((Asig) => Asig.idAsig != IdJornada);
                                        this.ShowAlert('Delete');
                                    }
                                    else {
                                        this.ShowAlert('DeleteError');
                                    }
                                }).catch((err) => { console.error(err); this.ShowAlert('DeleteError'); });
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
    FormatHora(Fecha) {
        //aqui se convierten los datos en tipo fecha
        let FechaA = new Date();
        let Hora, Minuto;
        const Pos = Fecha.indexOf(':');
        if (Pos > 0) {
            Hora = Fecha.substring(0, Pos);
            Minuto = Fecha.substring(Pos + 1, Fecha.length);
            FechaA.setHours(parseInt(Hora));
            FechaA.setMinutes(parseInt(Minuto));
            return FechaA;
        }
    }
    FormatMinutos(Minutos) {
        //aqui le agrego los ceros a los minutos
        Minutos = Minutos.toString();
        if (Minutos.length === 1) {
            return `0${Minutos}`;
        }
        else {
            return Minutos;
        }
    }
    ViewModal() {
        //mostrar u ocultar el modal del formulario
        if (this.ShowModal) {
            this.ShowModal = false;
        }
        else if (!this.ShowModal) {
            this.ShowModal = true;
        }
    }
    FinalizarProceso() {
        this.ViewModal();
        this.TipoProceso = '';
        this.dateValue = '';
        this.timeInicioValue = '';
        this.timeFinValue = '';
        this.DatosAsign = {};
    }
    ShowAlert(TipoAlert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Asignación agregada con éxito',
                    buttons: ['Aceptar']
                });
                const alertError = yield this.alertController.create({
                    header: '¡Hubo un error al guardar su asignación!',
                    buttons: ['Aceptar']
                });
                const alertUpdate = yield this.alertController.create({
                    header: 'Se actualizo la asignación con éxito',
                    buttons: ['Aceptar']
                });
                const alertErrorUpdate = yield this.alertController.create({
                    header: '¡Hubo un error al actualizar la asignación!',
                    buttons: ['Aceptar']
                });
                const alertDelete = yield this.alertController.create({
                    header: 'La asignación se elimino con éxito',
                    buttons: ['Aceptar']
                });
                const alertErrorDelete = yield this.alertController.create({
                    header: '¡Hubo un error al eliminar la asignación!',
                    buttons: ['Aceptar']
                });
                switch (TipoAlert) {
                    case 'New':
                        yield alert.present();
                        break;
                    case 'NewError':
                        yield alertError.present();
                        break;
                    case 'Edit':
                        yield alertUpdate.present();
                        break;
                    case 'EditError':
                        yield alertErrorUpdate.present();
                        break;
                    case 'Delete':
                        yield alertDelete.present();
                        break;
                    case 'DeleteError':
                        yield alertErrorDelete.present();
                        break;
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
AsignacionPage.ctorParameters = () => [
    { type: _service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__.GetDataBackendService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef }
];
AsignacionPage.propDecorators = {
    timeInicioValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['timeInicioValue',] }],
    timeFinValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['timeFinValue',] }]
};
AsignacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-Asignacion',
        template: _Asignacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_Asignacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsignacionPage);



/***/ }),

/***/ 7642:
/*!************************************************************!*\
  !*** ./src/app/Asignacion/Asignacion.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content.FondImg {\n  --background:url(\"/assets/img/FondoHome.png\") 0 0/100% 100% no-repeat ;\n}\n\n.AsigStyle {\n  padding: 5%;\n  margin-bottom: 5%;\n  box-shadow: rgba(0, 0, 0, 0.39) 0px 3px 20px 0px;\n}\n\n.CardAsig ion-card-header {\n  text-align: center;\n  background-color: var(--ion-color-warning);\n  color: white;\n  padding: 0px;\n  border: solid;\n}\n\n.CardAsig ion-card-header img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  border: solid 2px #000000;\n  display: inline;\n  box-shadow: 0 0 4px white;\n}\n\n.btn-dark {\n  color: #fff;\n  background-color: #000000;\n  border-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFzaWduYWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0VBQUE7QUFBUjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0FBQUo7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRk47O0FBSU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFGUjs7QUFRRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBTEoiLCJmaWxlIjoiQXNpZ25hY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQuRm9uZEltZyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL0ZvbmRvSG9tZS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4gICAgfVxufVxuLkFzaWdTdHlsZSB7XG4gICAgcGFkZGluZzogNSU7IFxuICAgIG1hcmdpbi1ib3R0b206IDUlOyBcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzkpIDBweCAzcHggMjBweCAwcHhcbn1cblxuLkNhcmRBc2lnIHtcblxuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgYm9yZGVyOiBzb2xpZDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMDAwMDAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLmJ0bi1kYXJrIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcbn0iXX0= */";

/***/ }),

/***/ 5158:
/*!************************************************************!*\
  !*** ./src/app/Asignacion/Asignacion.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-header Title=\"Asignación\" [ButtonAtras]=ButtonAtras></app-header>\n\n<ion-content class=\"FondImg CardAsig\">\n\n  <ion-card *ngIf=\"!ShowModal\">\n\n    <ion-card-header>\n      <img src=\"assets/img/ImgAsing.jpg\">\n    </ion-card-header>\n\n    <ion-button shape=\"round\" size=\"full\" (click)=\"ViewModal()\" style=\"margin-bottom: 5%;\">\n      Agregar\n    </ion-button>\n\n    <ion-card-content *ngIf=\"ListAsignacion.length\">\n\n      <ion-list style=\"border-top: outset;\">\n\n        <ion-item *ngFor=\"let Asig of ListAsignacion\">\n\n          <ion-label>\n            <h2>{{ Asig.Fecha | date:'dd/MM/yyyy'}}</h2>\n            <h2>{{Asig.Hora_In }} - {{Asig.Hora_Fin }}</h2>\n          </ion-label>\n\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"ActualizarJornada(Asig.idAsig)\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n          </button>\n\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"EliminarJornada(Asig.idAsig)\"\n            style=\"margin-left:5px\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n\n  </ion-card>\n\n  <div *ngIf=\"ShowModal\" style=\"border-top: groove\">\n    <!-- Calendario -->\n    <ion-datetime presentation=\"date\" [(ngModel)]=\"dateValue\" size=\"full\"\n      style=\"border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;border-bottom: outset;\"></ion-datetime>\n  </div>\n\n  <ion-card-content *ngIf=\"ShowModal\">\n\n    <div id=\"open-timeInicio-input\" button=\"true\"\n      style=\"display: flex;margin-bottom: 5px; background: white; border-radius: 5px;\">\n      <button type=\"button\" class=\"btn btn-dark\">\n        <ion-icon icon=\"alarm-outline\" style=\"font-size: x-large;\"></ion-icon>\n      </button>\n      <ion-item>\n        <ion-label>Inicio jornada:</ion-label>\n        <ion-text slot=\"end\">{{ timeInicioValue | date:'H:mm'}}</ion-text>\n        <ion-popover trigger=\"open-timeInicio-input\" show-backdrop=\"false\">\n          <ng-template>\n            <ion-datetime #popoverDatetimeInicio presentation=\"time\" [(ngModel)]=\"timeInicioValue\"></ion-datetime>\n          </ng-template>\n        </ion-popover>\n      </ion-item>\n    </div>\n\n\n    <div id=\"open-timeFin-input\" style=\"display: flex;background: white; border-radius: 5px;\">\n      <button type=\"button\" class=\"btn btn-dark\">\n        <ion-icon icon=\"alarm-outline\" style=\"font-size: x-large;\"></ion-icon>\n      </button>\n      <ion-item>\n        <ion-label>fin de jornada:</ion-label>\n        <ion-text slot=\"end\">{{ timeFinValue | date:'H:mm'}}</ion-text>\n        <ion-popover trigger=\"open-timeFin-input\" show-backdrop=\"false\">\n          <ng-template>\n            <ion-datetime #popoverDatetimeFin presentation=\"time\" [(ngModel)]=\"timeFinValue\"></ion-datetime>\n          </ng-template>\n        </ion-popover>\n      </ion-item>\n    </div>\n\n\n    <ion-button shape=\"round\" size=\"full\" (click)=\"GuardarDatos()\" style=\"margin-top: 5%;\"\n      [disabled]=\"!timeFinValue || !timeInicioValue || !dateValue\">\n      Guardar\n    </ion-button>\n\n    <ion-button shape=\"round\" size=\"full\" (click)=\"FinalizarProceso()\">\n      Cancelar\n    </ion-button>\n  </ion-card-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Asignacion_Asignacion_module_ts.js.map