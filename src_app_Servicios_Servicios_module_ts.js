"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Servicios_Servicios_module_ts"],{

/***/ 4328:
/*!*******************************************************!*\
  !*** ./src/app/Servicios/Servicios-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPageRoutingModule": () => (/* binding */ ServiciosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Servicios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicios.page */ 5145);




const routes = [
    {
        path: '',
        component: _Servicios_page__WEBPACK_IMPORTED_MODULE_0__.ServiciosPage
    },
];
let ServiciosPageRoutingModule = class ServiciosPageRoutingModule {
};
ServiciosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServiciosPageRoutingModule);



/***/ }),

/***/ 8756:
/*!***********************************************!*\
  !*** ./src/app/Servicios/Servicios.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPageModule": () => (/* binding */ ServiciosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _Servicios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicios-routing.module */ 4328);
/* harmony import */ var _Servicios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicios.page */ 5145);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.module */ 5564);










let ServiciosPageModule = class ServiciosPageModule {
};
ServiciosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _Servicios_page__WEBPACK_IMPORTED_MODULE_1__.ServiciosPage }]),
            _Servicios_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServiciosPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule
        ],
        declarations: [_Servicios_page__WEBPACK_IMPORTED_MODULE_1__.ServiciosPage]
    })
], ServiciosPageModule);



/***/ }),

/***/ 5145:
/*!*********************************************!*\
  !*** ./src/app/Servicios/Servicios.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiciosPage": () => (/* binding */ ServiciosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _Servicios_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicios.page.html?ngResource */ 9540);
/* harmony import */ var _Servicios_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicios.page.scss?ngResource */ 6010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage-service.service */ 8092);
/* harmony import */ var src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/get-data-backend.service */ 1273);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ServiciosPage = class ServiciosPage {
    constructor(_localstorage, _GetData, alertController) {
        this._localstorage = _localstorage;
        this._GetData = _GetData;
        this.alertController = alertController;
        this.data = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.ButtonAtras = true;
        this.ShowModal = false;
        this.ListServicios = [];
        this.DatosServi = {
            idService: "",
            idUser: "",
            Nombre: "",
            Descripcion: "",
            Monto: "",
            Img: "",
            TipoServicio: ""
        };
        this.ListaServicios = [
            {
                Nombre: "Corte de Cabello",
                UrlImg: "/assets/img/Servis_Cabello.jpg"
            },
            {
                Nombre: "Barba",
                UrlImg: "/assets/img/Servis_Barba.jpg"
            },
            {
                Nombre: "Mascarilla",
                UrlImg: "/assets/img/Servis_Facial.jpg"
            },
            {
                Nombre: "Tintes",
                UrlImg: "/assets/img/Servis_Tintes.jpg"
            },
            {
                Nombre: "Productos",
                UrlImg: "/assets/img/Servis_Producto.jpg"
            },
        ];
    }
    ngOnInit() {
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser')); //asigno los datos del usuario que tengo en el local storage 
        this.GetService();
    }
    ViewModal() {
        //muestra u oculto el modal de registrar servicio
        if (this.ShowModal) {
            this.ShowModal = false;
        }
        else if (!this.ShowModal) {
            this.ShowModal = true;
        }
    }
    GetService() {
        try {
            //obtengo todos los servicios
            this._GetData.GetServicios(this.DatosUser.idBarbero || this.DatosUser.idUser).then((ResServicios) => {
                this.ListServicios = ResServicios;
            }).catch(err => console.error(err));
        }
        catch (error) {
            console.error(error);
        }
    }
    GuardarServi() {
        try {
            //Guardo los datos de los servicios 
            const TipoServiceSelect = this.ListaServicios.find((LS) => LS.Nombre === this.DatosServi.TipoServicio);
            TipoServiceSelect ? this.DatosServi.Img = TipoServiceSelect.UrlImg : this.DatosServi.Img = this.DatosServi.Img;
            if (this.TipoProceso === 'Actualizar') {
                //Aqui guardo el update que le hizo el cliente al servicio
                this._GetData.UpdateServicios(this.DatosServi).then((ResUpdate) => {
                    if (ResUpdate.status === true) {
                        for (let index = 0; index < this.ListServicios.length; index++) {
                            if (this.ListServicios[index].idService === this.ServiceSelect.idService) {
                                this.ListServicios[index] = this.DatosServi;
                            }
                        }
                        this.ShowAlert('Edit');
                        this.CancelarProceso();
                    }
                    else {
                        this.ShowAlert('EditError');
                    }
                }).catch((err) => { console.error(err); this.ShowAlert('EditError'); });
            }
            else {
                //Aqui preparo la estructura para el nuevo servicio a guardar 
                this.DatosServi.idService = Math.random().toString(36).substring(2, 8 + 2);
                this.DatosServi.idUser = this.DatosUser.idUser;
                this.DatosServi.Img = this.DatosServi.Img;
                //guardo el nuevo servicio 
                this._GetData.InsertServicios(this.DatosServi).then((ResInsert) => {
                    if (ResInsert.status === true) {
                        this.ListServicios.push(ResInsert.mesage);
                        this.ShowAlert('New');
                        this.CancelarProceso();
                    }
                    else {
                        this.ShowAlert('NewError');
                    }
                }).catch((err) => { console.error(err); this.ShowAlert('NewError'); });
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    UpdateService(IdService) {
        //Busco la data del servicio seleccionado para actualizar 
        this.TipoProceso = 'Actualizar';
        this.ServiceSelect = this.ListServicios.find((S) => S.idService === IdService);
        this.DatosServi = this.ServiceSelect;
        this.ViewModal();
    }
    DeleteService(IdService) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //elimino el servicio seleccionado 
                const alert = yield this.alertController.create({
                    header: '¿Usted desea eliminar este servicio?',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                        },
                        {
                            text: 'Confirmar',
                            handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                this._GetData.DeleteServicios(IdService).then((ResD) => {
                                    if (ResD.status && ResD.mesage != null || undefined) {
                                        //filtro todos los Servicios sin incluir la que se elimino 
                                        this.ListServicios = this.ListServicios.filter((Serv) => Serv.idService != IdService);
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
    CancelarProceso() {
        //muestro la lista de los servicios y limpio el formulario 
        this.ViewModal();
        this.TipoProceso = '';
        this.DatosServi = {
            idService: "",
            idUser: "",
            Nombre: "",
            Descripcion: "",
            Monto: "",
            Img: "",
            TipoServicio: ""
        };
    }
    ShowAlert(TipoAlert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Servicio agregado con éxito',
                    buttons: ['Aceptar']
                });
                const alertError = yield this.alertController.create({
                    header: '¡Hubo un error al guardar el servicio!',
                    buttons: ['Aceptar']
                });
                const alertUpdate = yield this.alertController.create({
                    header: 'El servicio se actualizo con éxito',
                    buttons: ['Aceptar']
                });
                const alertErrorUpdate = yield this.alertController.create({
                    header: '¡Hubo un error al actualizar el servicio!',
                    buttons: ['Aceptar']
                });
                const alertDelete = yield this.alertController.create({
                    header: 'El servicio se elimino con éxito',
                    buttons: ['Aceptar']
                });
                const alertErrorDelete = yield this.alertController.create({
                    header: '¡Hubo un error al eliminar el servicio!',
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
ServiciosPage.ctorParameters = () => [
    { type: src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__.GetDataBackendService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ServiciosPage.propDecorators = {
    fileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['fileInp',] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
ServiciosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-Servicios',
        template: _Servicios_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_Servicios_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServiciosPage);



/***/ }),

/***/ 6010:
/*!**********************************************************!*\
  !*** ./src/app/Servicios/Servicios.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ":host ion-content.FondServis {\n  --background:url(\"/assets/img/FondoHome.png\") 0 0/100% 100% no-repeat ;\n}\n:host ion-item.ServisMedida {\n  --min-height: 38px ;\n}\n:host ion-label.ColotText {\n  color: var(--ion-item-color, var(--ion-text-color, rgba(0, 0, 0, 0.548)));\n}\n.ServiStyle {\n  padding: 5%;\n  margin-bottom: 5%;\n  box-shadow: rgba(0, 0, 0, 0.39) 0px 3px 20px 0px;\n}\n.SelectStyle {\n  padding-top: 2%;\n  padding-bottom: 1%;\n  padding-left: 0%;\n}\n.BotonServi {\n  /* background: white;  */\n  width: 80px;\n  height: 80px;\n  border-radius: 50px;\n  margin: auto;\n}\n.form-control {\n  border-color: var(--ion-color-step-500, gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2lvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzRUFBQTtBQUFSO0FBRUk7RUFDSSxtQkFBQTtBQUFSO0FBRUk7RUFDSSx5RUFBQTtBQUFSO0FBR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBQUFKO0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUE7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQTtFQUNJLDZDQUFBO0FBRUoiLCJmaWxlIjoiU2VydmljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudC5Gb25kU2VydmlzIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWcvRm9uZG9Ib21lLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0IDtcbiAgICB9XG4gICAgaW9uLWl0ZW0uU2VydmlzTWVkaWRhIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiAzOHB4XG4gICAgICAgfVxuICAgIGlvbi1sYWJlbC5Db2xvdFRleHQge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNTQ4KSkpXG4gICAgfVxufVxuLlNlcnZpU3R5bGUge1xuICAgIHBhZGRpbmc6IDUlOyBcbiAgICBtYXJnaW4tYm90dG9tOiA1JTsgXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM5KSAwcHggM3B4IDIwcHggMHB4XG59XG5cbi5TZWxlY3RTdHlsZSB7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTsgXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcbn1cbi5Cb3RvblNlcnZpIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiB3aGl0ZTsgICovXG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC01MDAsIGdyYXkpO1xufSJdfQ== */";

/***/ }),

/***/ 9540:
/*!**********************************************************!*\
  !*** ./src/app/Servicios/Servicios.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<app-header Title=\"Servicios\" [ButtonAtras]=ButtonAtras></app-header>\n\n\n<ion-content class=\"padding animated fadeIn fast\" [fullscreen]=\"true\" class=\"FondServis\">\n\n  <div *ngIf=\"ListServicios.length === 0 && !ShowModal\" class=\"alert alert-dark\" role=\"alert\"\n    style=\"margin: auto; max-width: 95%; margin-top: 5%; text-align: center;\">\n    ¡No se encuentran Servicios!\n  </div>\n\n  <div *ngIf=\"!ShowModal && ListServicios.length > 0\">\n    <ion-card *ngFor=\"let Service of ListServicios\">\n      <!-- Modal de los servicios-->\n      <ion-card-content>\n        <div style=\"display: flex; align-items: center;\">\n          <img *ngIf=\"Service.Img\" src=\"{{Service.Img}}\" alt=\"\" style=\"width: 40%;\">\n          <!-- imagen por defecto                  \\/ -->\n          <img *ngIf=\"!Service.Img\" src=\"/assets/img/Avatar.png\" alt=\"\" style=\"width: 40%;\">\n          <div class=\"card-body\" style=\"color: black;\">\n            <h2 class=\"card-title\"><strong>{{Service.Nombre}}</strong></h2>\n            <p class=\"card-text\">{{Service.Descripcion}}</p>\n            <p class=\"card-text\">{{Service.Monto}} $</p>\n\n            <ion-button shape=\"round\" size=\"full\" routerLink=\"/Agendar\" *ngIf=\"DatosUser.TipoUser === 'Cliente'\">\n              Agendar\n            </ion-button>\n            <!-- boton editar -->\n            <button *ngIf=\"DatosUser.TipoUser === 'Barbero'\" type=\"button\" class=\"btn btn-primary btn-sm\"\n              (click)=\"UpdateService(Service.idService)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </button>\n            <!-- boton elimitar -->\n            <button *ngIf=\"DatosUser.TipoUser === 'Barbero'\" type=\"button\" class=\"btn btn-danger btn-sm\"\n              (click)=\"DeleteService(Service.idService)\" style=\"margin-left:5px\">\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </button>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Modal para agregar el servicio-->\n\n  <ion-card class=\"ServiStyle\" *ngIf=\"ShowModal\">\n\n\n    <ion-card-content>\n\n      <ion-item fill=\"outline\" style=\"margin-bottom: 6%;\" class=\"ServisMedida\">\n        <ion-label style=\"margin-top: 1%; margin-bottom: 1%;\" class=\"ColotText\">Tipo Servicio:</ion-label>\n        <ion-select [(ngModel)]=\"DatosServi.TipoServicio\" style=\"margin-top: 1%; margin-bottom: 1%;\"\n          class=\"SelectStyle\">\n          <ion-select-option *ngFor=\"let Servicio of ListaServicios\">{{Servicio.Nombre}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <div class=\"mb-3\">\n        <input type=\"text\" [(ngModel)]=\"DatosServi.Nombre\" class=\"form-control\" placeholder=\"Nombre del Servicio:\">\n      </div>\n\n      <div class=\"mb-3\">\n        <textarea type=\"text\" rows=\"3\" [(ngModel)]=\"DatosServi.Descripcion\" class=\"form-control\"\n          placeholder=\"Descripción:\"></textarea>\n      </div>\n\n      <div class=\"input-group mb-3\">\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"DatosServi.Monto\" class=\"form-control\"\n          placeholder=\"Monto:\">\n        <span class=\"input-group-text\">$</span>\n      </div>\n\n      <ion-button shape=\"round\" size=\"full\" (click)=\"GuardarServi()\"\n        [disabled]=\"!DatosServi.Monto || !DatosServi.Descripcion || !DatosServi.Nombre || !DatosServi.TipoServicio\">\n        Guardar\n      </ion-button>\n\n      <ion-button shape=\"round\" size=\"full\" (click)=\"CancelarProceso()\">\n        Cancelar\n      </ion-button>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<!-- Boton para añadir un servicio -->\n<ion-footer>\n  <ion-toolbar class=\"BotonServi\" *ngIf=\"DatosUser.TipoUser === 'Barbero' && !ShowModal\">\n    <ion-row>\n      <ion-col>\n        <ion-fab-button (click)=\"ViewModal()\" style=\"margin: auto; margin-top: 8px;\"\n          *ngIf=\"DatosUser.TipoUser === 'Barbero'\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_Servicios_Servicios_module_ts.js.map