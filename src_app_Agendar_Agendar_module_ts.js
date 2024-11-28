"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_Agendar_Agendar_module_ts"],{

/***/ 4873:
/*!***************************************************!*\
  !*** ./src/app/Agendar/Agendar-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendarPageRoutingModule": () => (/* binding */ AgendarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Agendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agendar.page */ 7241);




const routes = [
    {
        path: '',
        component: _Agendar_page__WEBPACK_IMPORTED_MODULE_0__.AgendarPage,
    }
];
let AgendarPageRoutingModule = class AgendarPageRoutingModule {
};
AgendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AgendarPageRoutingModule);



/***/ }),

/***/ 3646:
/*!*******************************************!*\
  !*** ./src/app/Agendar/Agendar.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendarPageModule": () => (/* binding */ AgendarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _Agendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agendar.page */ 7241);
/* harmony import */ var _Agendar_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Agendar-routing.module */ 4873);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.module */ 5564);










let AgendarPageModule = class AgendarPageModule {
};
AgendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _Agendar_page__WEBPACK_IMPORTED_MODULE_0__.AgendarPage }]),
            _Agendar_routing_module__WEBPACK_IMPORTED_MODULE_1__.AgendarPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule
        ],
        declarations: [_Agendar_page__WEBPACK_IMPORTED_MODULE_0__.AgendarPage]
    })
], AgendarPageModule);



/***/ }),

/***/ 7241:
/*!*****************************************!*\
  !*** ./src/app/Agendar/Agendar.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendarPage": () => (/* binding */ AgendarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _Agendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Agendar.page.html?ngResource */ 2982);
/* harmony import */ var _Agendar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Agendar.page.scss?ngResource */ 4068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage-service.service */ 8092);
/* harmony import */ var src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/service/get-data-backend.service */ 1273);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let AgendarPage = class AgendarPage {
    constructor(_localstorage, _GetData, alertController) {
        this._localstorage = _localstorage;
        this._GetData = _GetData;
        this.alertController = alertController;
        this.ButtonAtras = true;
        this.DatosAgen = {
            idAgenda: '',
            idUser: '',
            idBarbero: '',
            Cantidad: '',
            Servicios: '',
            Dia: '',
            Fecha: '',
            Hora: [],
            Monto: 0
        };
        this.CantidadDisp = [];
        this.HorasDisp = [];
        this.ListServicio = [];
        this.ListJornada = [];
        this.DatosAgendar = [];
    }
    ngOnInit() {
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
        // llamo los metodos que buscan los servicios y las jornadas 
        this.GetDatosServicios();
        this.GetDataJornadas();
    }
    GetDatosServicios() {
        try {
            //llamo mi Service pasando el id del barbero para obtener slos serivicos del barbero 
            this._GetData.GetServicios(this.DatosUser.idBarbero).then((ResServi) => {
                //asigno los servicios obtendios a mi variable 
                this.ListServicio = ResServi;
            }).catch(err => console.error(err));
        }
        catch (error) {
            console.error(error);
        }
    }
    GetDataJornadas() {
        //busco las jornadas de trabajo
        try {
            //busco las jornadas de trabajo del barbero con su id de barbero 
            this._GetData.GetJornada(this.DatosUser.idBarbero).then((ResJornada) => {
                //asigno los datos obtenidos a mi variable 
                this.ListJornada = ResJornada;
            }).catch(err => console.error(err));
        }
        catch (error) {
            console.error(error);
        }
    }
    CalculoMonto() {
        try {
            //establesco el monto en 0 
            this.DatosAgen.Monto = 0;
            //verifico que los servicios esten en arreglo
            if (typeof this.DatosAgen.Servicios === 'string') {
                this.DatosAgen.Servicios = [this.DatosAgen.Servicios];
            }
            //recorro todos los servicos seleccionados por el cliente 
            for (let index = 0; index < this.DatosAgen.Servicios.length; index++) {
                //busco entre todos los servicios el servicio que el selecciono 
                const ServiceFind = this.ListServicio.find(S => S.Nombre === this.DatosAgen.Servicios[index]);
                //sumo el total a pagar 
                this.DatosAgen.Monto = this.DatosAgen.Monto + ServiceFind.Monto;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    GetHorasDiponibles() {
        try {
            //verifico las horas disponibles y la cantidad de personas disponible
            if (this.DatosAgen.Fecha) {
                this.CantidadDisp = []; // aqui guardare la cantidad de personas disponible 
                this.HorasDisp = []; // aqui las horas disponibles 
                //busco entre todas las jornadas, busco la que selecciono el cliente 
                this.JornadaSelect = this.ListJornada.find((Jorn) => Jorn.Fecha === this.DatosAgen.Fecha);
                if (this.JornadaSelect) {
                    let Pos = 0; //Esta varible me va a yudar a saber cuantas horas tengo disponibles 
                    //en este ciclo for recorro las horas disponibles 
                    for (let index = 0; index < this.JornadaSelect.HorasDisponible.length; index++) {
                        //con este if verifico que solo tomare en cuenta las horas disponibles 
                        if (this.JornadaSelect.HorasDisponible[index].status === true) {
                            Pos = Pos + 1;
                            //inserto en el arreglo de cantidad disponible el numero de personas disponibles
                            this.CantidadDisp.push(Pos);
                            //Inserto en el arreglo de horas disponibles las horas que se puede seleccionar 
                            this.HorasDisp.push(this.JornadaSelect.HorasDisponible[index].Hora);
                        }
                    }
                    this.DatosAgen.Cantidad = 1;
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    GuardarDatos() {
        //buardo los datos en la base de datos
        try {
            //le asigno la fecha de la jornada seleccionada 
            const FechaA = new Date(this.DatosAgen.Fecha);
            this.DatosAgen.idAgenda = Math.random().toString(36).substring(2, 8 + 2); //genero un id de agenda 
            this.DatosAgen.idUser = this.DatosUser.idUser; // le asigno el id del usuairo 
            this.DatosAgen.idBarbero = this.DatosUser.idBarbero; // le asigno el id del barbro 
            //obtengo el dia - mes - año del la jornada seleccionada 
            this.DatosAgen.Dia = `${FechaA.getDate()}-${FechaA.getMonth() + 1}-${FechaA.getFullYear()}`;
            if (typeof this.DatosAgen.Hora === 'string') {
                // las horas disponibles tinene que estar en forma de arreglo, y si me llega en string las converito en arreglo
                this.DatosAgen.Hora = [this.DatosAgen.Hora];
            }
            //recorro la jornada selelcionada para cambiarle el status a la hora seleccioanda por el cliente 
            for (let index = 0; index < this.JornadaSelect.HorasDisponible.length; index++) {
                for (let indexElement = 0; indexElement < this.DatosAgen.Hora.length; indexElement++) {
                    //verifico si la hora por la que voy es igual a la que eligio el cliente 
                    if (this.JornadaSelect.HorasDisponible[index].Hora === this.DatosAgen.Hora[indexElement].replace(/ /g, "")) {
                        //le coloco false al status de la hora para decir que ya fue seleccionada 
                        this.JornadaSelect.HorasDisponible[index].status = false;
                    }
                }
            }
            //guardo los datos agendados por le cliente 
            this._GetData.InsertAgenda(this.DatosAgen).then((Res) => {
                if (Res.status === true) {
                    //si todo salio bien ahora edito las horas que selecciono el cliente para indicar que ya no esta disponibles
                    this._GetData.UpdateJornada(this.JornadaSelect).then((ResJ) => {
                    }).catch(err => console.error(err));
                    this.DatosAgen = {
                        idAgenda: '',
                        idUser: '',
                        idBarbero: '',
                        Cantidad: '',
                        Servicios: '',
                        Dia: '',
                        Fecha: '',
                        Hora: [],
                        Monto: 0
                    };
                    this.ShowAlert('New');
                }
                else {
                    this.ShowAlert('NewError');
                }
            }).catch((err) => { console.error(err); this.ShowAlert('NewError'); });
        }
        catch (error) {
            console.error(error);
        }
    }
    ShowAlert(TipoAlert) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Su cita ha sido agendada con éxito',
                    buttons: ['Aceptar']
                });
                const alertError = yield this.alertController.create({
                    header: '¡Hubo un error al agendar su cita!',
                    buttons: ['Aceptar']
                });
                switch (TipoAlert) {
                    case 'New':
                        yield alert.present();
                        break;
                    case 'NewError':
                        yield alertError.present();
                        break;
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
AgendarPage.ctorParameters = () => [
    { type: src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: src_service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__.GetDataBackendService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
AgendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-Agendar',
        template: _Agendar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_Agendar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgendarPage);



/***/ }),

/***/ 4068:
/*!******************************************************!*\
  !*** ./src/app/Agendar/Agendar.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ":host ion-item.AgenMedida {\n  --min-height: 35px ;\n}\n:host ion-content.FondAgen {\n  --background:url(\"/assets/img/FondoHome.png\") 0 0/100% 100% no-repeat ;\n}\n.AgenStyle {\n  padding: 8%;\n  box-shadow: rgba(0, 0, 0, 0.39) 0px 3px 20px 0px;\n}\n.SelectStyle {\n  padding-top: 2%;\n  padding-bottom: 1%;\n  padding-left: 0%;\n}\n.CardAgend ion-card-header {\n  text-align: center;\n  background-color: var(--ion-color-warning);\n  color: white;\n  padding: 0px;\n  border: solid;\n}\n.CardAgend ion-card-header img {\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  border: solid 2px #000000;\n  display: inline;\n  box-shadow: 0 0 4px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFnZW5kYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0EsbUJBQUE7QUFBSjtBQUVHO0VBQ0Msc0VBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLGdEQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFEVjtBQUdVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRFoiLCJmaWxlIjoiQWdlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBpb24taXRlbS5BZ2VuTWVkaWRhIHtcbiAgICAtLW1pbi1oZWlnaHQ6IDM1cHhcbiAgIH1cbiAgIGlvbi1jb250ZW50LkZvbmRBZ2VuIHtcbiAgICAtLWJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2ltZy9Gb25kb0hvbWUucG5nJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xufVxufVxuLkFnZW5TdHlsZSB7XG4gICAgcGFkZGluZzogOCU7IFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zOSkgMHB4IDNweCAyMHB4IDBweFxufVxuLlNlbGVjdFN0eWxlIHtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG4gICAgcGFkZGluZy1ib3R0b206IDElOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xufVxuXG4uQ2FyZEFnZW5kIHtcblxuICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG4gICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZDtcblxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMwMDAwMDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAiXX0= */";

/***/ }),

/***/ 2982:
/*!******************************************************!*\
  !*** ./src/app/Agendar/Agendar.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<app-header Title=\"Agendar\" [ButtonAtras]=\"ButtonAtras\"></app-header>\n\n<ion-content [fullscreen]=\"true\" class=\"FondAgen CardAgend\">\n\n  <div *ngIf=\"ListJornada.length === 0\" class=\"alert alert-dark\" role=\"alert\"\n    style=\"margin: auto; max-width: 95%; margin-top: 5%; text-align: center;\">\n    ¡Disculpe, no hay Citas disponibles!\n  </div>\n\n  <ion-card *ngIf=\"ListJornada.length > 0\">\n\n    <ion-card-header>\n      <img src=\"assets/img/ImgCalend.jpg\">\n    </ion-card-header>\n\n\n    <ion-card-content class=\"AgenStyle\">\n      <!-- Formulario -->\n      <div>\n        <ion-item style=\"margin-bottom: 10%; border: 1px solid black;\" class=\"AgenMedida\">\n          <ion-label style=\"margin-top: 1%; margin-bottom: 1%;\">Fecha</ion-label>\n          <ion-select type=\"text\" [(ngModel)]=\"DatosAgen.Fecha\" (ionChange)=\"GetHorasDiponibles()\" class=\"SelectStyle\"\n            style=\"color: black;\">\n            <ion-select-option *ngFor=\"let Jornada of ListJornada\" value=\"{{Jornada.Fecha}}\">\n              {{Jornada.Fecha | date:'dd/MM/yyyy'}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <div>\n        <ion-item style=\"margin-bottom: 10%; border: 1px solid black;\" class=\"AgenMedida\" *ngIf=\"DatosAgen.Cantidad\">\n          <ion-label style=\"margin-top: 1%; margin-bottom: 1%; margin-right: 1%;\">Servicios</ion-label>\n          <ion-select [(ngModel)]=\"DatosAgen.Servicios\" (ionChange)=\"CalculoMonto()\" multiple=\"true\"\n            class=\"SelectStyle\">\n            <ion-select-option *ngFor=\"let Servicio of ListServicio\">{{Servicio.Nombre}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <div *ngIf=\"HorasDisp.length\">\n\n        <ion-item style=\"margin-bottom: 10%; border: 1px solid black;\" class=\"AgenMedida\"\n          *ngIf=\"DatosAgen.Cantidad == 1\">\n          <ion-label style=\"margin-top: 1%; margin-bottom: 1%;\">Horas disponibles</ion-label>\n          <ion-select type=\"text\" [(ngModel)]=\"DatosAgen.Hora\" class=\"SelectStyle\" style=\"color: black;\">\n            <ion-select-option *ngFor=\"let horas of HorasDisp\">{{horas}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item style=\"margin-bottom: 10%; border: 1px solid black;\" class=\"AgenMedida\"\n          *ngIf=\"DatosAgen.Cantidad > 1\">\n          <ion-label style=\"margin-top: 1%; margin-bottom: 1%;\">Horas disponibles</ion-label>\n          <ion-select type=\"text\" [(ngModel)]=\"DatosAgen.Hora\" class=\"SelectStyle\" style=\"color: black;\">\n            <ion-select-option *ngFor=\"let horas of HorasDisp\">{{horas}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </div>\n\n      <div class=\"input-group mb-3\" *ngIf=\"DatosAgen.Servicios\">\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"DatosAgen.Monto\" disabled>\n        <span class=\"input-group-text\">$</span>\n      </div>\n\n      <ion-button shape=\"round\" size=\"full\" (click)=\"GuardarDatos()\"\n        [disabled]=\"!DatosAgen.Hora.length || !DatosAgen.Servicios || !DatosAgen.Fecha\">\n        Guardar\n      </ion-button>\n\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_Agendar_Agendar_module_ts.js.map