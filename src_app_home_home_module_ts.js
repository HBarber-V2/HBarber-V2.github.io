"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageRoutingModule": () => (/* binding */ homePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.homePage
    }
];
let homePageRoutingModule = class homePageRoutingModule {
};
homePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], homePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageModule": () => (/* binding */ homePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 677);
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs/tabs.module */ 5564);









let homePageModule = class homePageModule {
};
homePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.homePageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_3__.TabsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage]
    })
], homePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/service/local-storage-service.service */ 8092);
/* harmony import */ var _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/get-data-backend.service */ 1273);







let homePage = class homePage {
    constructor(GetConsulta, _localstorage, alertController) {
        this.GetConsulta = GetConsulta;
        this._localstorage = _localstorage;
        this.alertController = alertController;
        this.DataAsignacion = [];
        this.AsignacionD = [];
        this.PosArray = 0;
        this.ListUsuarios = [];
    }
    ngOnInit() {
        this.DatosUser = {};
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
        this.GetListUser();
    }
    ionViewDidEnter() {
        this.DatosUser = {};
        //asigno los datos del usuario que tengo en el local storage 
        this.DatosUser = JSON.parse(this._localstorage.BuscarItem('DatosUser'));
        this.GetListUser();
    }
    //obtengo los usuarios del barbero
    GetListUser() {
        try {
            this.DataAsignacion = [];
            this.ListUsuarios = [];
            if (this.DatosUser.TipoUser === 'Barbero') {
                this.GetConsulta.GetClientesBarbero(this.DatosUser.idUser).then((ResUser) => {
                    if (ResUser.length > 0) {
                        this.ListUsuarios = ResUser;
                    }
                }).catch((error) => console.error(error));
            }
            this.GetAsignacion();
        }
        catch (error) {
            console.error(error);
        }
    }
    //obtengo las aignaiones del dia actual 
    GetAsignacion() {
        try {
            //obtengo el dia de hoy 
            const Fecha = new Date();
            switch (this.DatosUser.TipoUser) {
                case 'Barbero':
                    //busco los datos de las asignaciones del dia de hoy en la base de datos 
                    this.GetConsulta.GetAgendaByDate(this.DatosUser.idUser, this.DatosUser.TipoUser, `${Fecha.getDate()}-${Fecha.getMonth() + 1}-${Fecha.getFullYear()}`).then((ResData) => {
                        if (ResData.length > 0) {
                            if (this.ListUsuarios.length > 0) {
                                //busnco en todos los servicios del dia el nombre de cada cliebte
                                for (let index = 0; index < ResData.length; index++) {
                                    let user = this.ListUsuarios.find((U) => U.idUser === ResData[index].idUser);
                                    if (user) {
                                        //Guardo los datos de las citas del dia en un arreglo
                                        this.DataAsignacion.push({
                                            "NameClient": user.Name,
                                            "idAgenda": ResData[index].idAgenda,
                                            "idUser": ResData[index].idUser,
                                            "idBarbero": ResData[index].idBarbero,
                                            "Cantidad": ResData[index].Cantidad,
                                            "Servicios": ResData[index].Servicios.join().replace(",", ", "),
                                            "Dia": ResData[index].Dia,
                                            "Fecha": ResData[index].Fecha,
                                            "Hora": ResData[index].Hora,
                                            "Monto": ResData[index].Monto,
                                            "Status": ResData[index].Status,
                                            "FechaCreate": ResData[index].FechaCreate
                                        });
                                    }
                                }
                            }
                            else {
                                this.DataAsignacion = ResData;
                            }
                        }
                    }).catch(err => console.error(err));
                    break;
                case 'Cliente':
                    //busco los datos de las asignaciones del dia de hoy en la base de datos 
                    this.GetConsulta.GetHistorial(this.DatosUser.idUser, this.DatosUser.TipoUser).then((ResData) => {
                        if (ResData.length > 0) {
                            //Volteo el arreglo para mostrar primero lo ultimo que se agendo 
                            ResData = ResData.reverse();
                            for (let index = 0; index < ResData.length; index++) {
                                //Guardo los datos de las citas del dia en un arreglo
                                this.DataAsignacion.push({
                                    "NameClient": "",
                                    "idAgenda": ResData[index].idAgenda,
                                    "idUser": ResData[index].idUser,
                                    "idBarbero": ResData[index].idBarbero,
                                    "Cantidad": ResData[index].Cantidad,
                                    "Servicios": ResData[index].Servicios.join().replace(",", ", "),
                                    "Dia": ResData[index].Dia,
                                    "Fecha": ResData[index].Fecha,
                                    "Hora": ResData[index].Hora,
                                    "Monto": ResData[index].Monto,
                                    "Status": ResData[index].Status,
                                    "FechaCreate": ResData[index].FechaCreate
                                });
                            }
                        }
                    }).catch(err => console.error(err));
                    break;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    NextAgenda() {
        //muestro la siguiente cita 
        if (this.PosArray <= (this.DataAsignacion.length - 1)) {
            this.PosArray = this.PosArray + 1;
        }
    }
    PreviousAgenda() {
        //muestro la cita anterior 
        if (this.PosArray > 0) {
            this.PosArray = this.PosArray - 1;
        }
    }
    ChangeStatus(DataAgenda, NewStatus) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //Cambio el estatus de la cita
                if (NewStatus) {
                    const alert = yield this.alertController.create({
                        header: '¿Usted desea cancelar su cita?',
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
                                    this.SaveNewStatusAgenda(DataAgenda);
                                })
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    const alert = yield this.alertController.create({
                        header: 'Seleccione un Status',
                        inputs: [
                            {
                                label: 'Atendido',
                                type: 'radio',
                                value: 'Atendido'
                            },
                            {
                                label: 'Cancelado',
                                type: 'radio',
                                value: 'Cancelado'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Confirmar',
                                handler: (data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                                    DataAgenda.Status = data;
                                    this.SaveNewStatusAgenda(DataAgenda);
                                })
                            }
                        ]
                    });
                    yield alert.present();
                }
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    SaveNewStatusAgenda(Data) {
        try {
            //Guardo el nuevo status de la cita 
            this.GetConsulta.UpdateAgenda(Data).then((ResUpdate) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (ResUpdate.status === true) {
                    const alert = yield this.alertController.create({
                        header: 'El status se actualizo con éxito',
                        buttons: ['Aceptar']
                    });
                    yield alert.present();
                    this.DataAsignacion[this.PosArray] = Data;
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
        }
        catch (error) {
            console.error(error);
        }
    }
};
homePage.ctorParameters = () => [
    { type: _service_get_data_backend_service__WEBPACK_IMPORTED_MODULE_3__.GetDataBackendService },
    { type: src_service_local_storage_service_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
homePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], homePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":host ion-content.FondImg {\n  --background:url(\"/assets/img/FondoHome.png\") 0 0/100% 100% no-repeat ;\n}\n:host ion-card.Fondo {\n  --background:url(\"/assets/img/fondCard.jpg\") 0 0/100% 100% no-repeat ;\n}\n:host .ContenCard {\n  background-color: white;\n  text-align: -webkit-center;\n  border-style: double;\n}\n:host .Button {\n  display: flex;\n  flex-direction: column;\n  margin-top: 22%;\n}\n:host .LoginStyle {\n  box-shadow: black 0px 3px 20px 0px, black 0px 3px 20px 0px;\n  width: 86%;\n  margin-left: 7%;\n  background-color: transparent;\n  text-align: center;\n  margin-bottom: 10%;\n  border-radius: 10%;\n}\n:host .adorno {\n  width: 0px;\n  height: 30px;\n  border-left: 10px solid #000000;\n  border-right: 10px solid #000000;\n  border-bottom: 10px solid transparent;\n}\n.BotonDerecha {\n  width: 40px;\n  height: 38px;\n  margin: auto;\n  background: #000000;\n  border-bottom-left-radius: 11px;\n  margin-right: inherit;\n}\n.BotonIzquierdo {\n  width: 40px;\n  height: 38px;\n  margin: auto;\n  background: #000000;\n  font-size: xx-large;\n  color: white;\n  margin-left: inherit;\n  border-bottom-right-radius: 11px;\n}\n.flecha {\n  font-size: xx-large;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0VBQUE7QUFBUjtBQUVJO0VBQ0kscUVBQUE7QUFBUjtBQUVJO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFBUjtBQUVJO0VBQ0ksMERBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFSTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0FBQUo7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUlBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQuRm9uZEltZyB7XG4gICAgICAgIC0tYmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1nL0ZvbmRvSG9tZS5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdCA7XG4gICAgfVxuICAgIGlvbi1jYXJkLkZvbmRvIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnVybCgnL2Fzc2V0cy9pbWcvZm9uZENhcmQuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQgO1xuICAgIH1cbiAgICAuQ29udGVuQ2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gICAgfVxuICAgIC5CdXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMiU7XG4gICAgfVxuICAgIC5Mb2dpblN0eWxlIHtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiKDAsIDAsIDApIDBweCAzcHggMjBweCAwcHgsICByZ2IoMCwgMCwgMCkgMHB4IDNweCAyMHB4IDBweDtcbiAgICAgICAgd2lkdGg6IDg2JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICB9XG4gICAgLmFkb3JubyB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzAwMDAwMDtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgIzAwMDAwMDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuLkJvdG9uRGVyZWNoYSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBpbmhlcml0O1xufVxuXG4uQm90b25JenF1aWVyZG8ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogaW5oZXJpdDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTFweDtcbn1cblxuLmZsZWNoYSB7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4gIFxuICJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<app-header Title=\"Home\" style=\"text-align: center;\"></app-header>\n\n<ion-content class=\"FondImg ion-padding animated fadeIn fast\">\n\n  <ion-card class=\"Fondo LoginStyle\" shape=\"round\" size=\"full\">\n\n    <!-- Flechas derecha y izquierda -->\n    <div style=\"display: flex; flex-direction: row-reverse;\">\n\n      <div class=\"BotonDerecha\" *ngIf=\"DataAsignacion.length > 1 && (PosArray < DataAsignacion.length - 1)\"\n        (click)=\"NextAgenda()\">\n        <ion-icon name=\"chevron-forward-outline\" class=\"flecha\"></ion-icon>\n      </div>\n\n      <div class=\"BotonIzquierdo\" *ngIf=\"PosArray > 0\" (click)=\"PreviousAgenda()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </div>\n    </div>\n\n    <!--  Aqui se refleja los datos de la Cita del cliente -->\n    <div style=\"color:rgb(0, 0, 0);background: #ffffffed; border-radius: 5%; font-family: serif;\"\n      *ngIf=\"DataAsignacion.length > 0\">\n\n      <ion-text *ngIf=\"DatosUser.TipoUser=== 'Barbero' && DataAsignacion[PosArray].NameClient\">\n        <h4><strong>Nombre: {{DataAsignacion[PosArray].NameClient}}</strong></h4>\n      </ion-text>\n\n      <ion-text>\n        <h5>Fecha: {{DataAsignacion[PosArray].Fecha | date:'dd/MM/yyyy'}}</h5>\n      </ion-text>\n\n      <ion-text>\n        <h5>Hora: {{DataAsignacion[PosArray].Hora[0]}}</h5>\n      </ion-text>\n\n      <ion-text>\n        <h5>Servicios: {{DataAsignacion[PosArray].Servicios}}</h5>\n      </ion-text>\n\n      <ion-text>\n        <h5>Monto: {{DataAsignacion[PosArray].Monto}}$</h5>\n      </ion-text>\n\n      <ion-text *ngIf=\"DatosUser.TipoUser=== 'Barbero'\">\n        <h5>Status: ({{DataAsignacion[PosArray].Status}})</h5>\n      </ion-text>\n    </div>\n\n    <div style=\"display: flex; margin-top: 3%; padding: 5%;\"\n      *ngIf=\"DataAsignacion.length > 0 && DataAsignacion[PosArray].Status === 'Pendiente'\">\n\n      <div class=\"adorno\"></div><!-- banderitas -->\n\n      <ion-button size=\"full\" style=\"width: -webkit-fill-available;\"\n        *ngIf=\"DataAsignacion[PosArray].Status === 'Pendiente' && DatosUser.TipoUser=== 'Cliente'\"\n        (click)=\"ChangeStatus(DataAsignacion[PosArray], 'Cancelado')\">\n        Cancelar Cita\n      </ion-button>\n\n      <ion-button size=\"full\" style=\"width: -webkit-fill-available;\"\n        *ngIf=\"DataAsignacion[PosArray].Status != 'Atendido' && DatosUser.TipoUser=== 'Barbero'\"\n        (click)=\"ChangeStatus(DataAsignacion[PosArray])\">\n        Status\n      </ion-button>\n\n      <div class=\"adorno\"></div><!-- banderitas -->\n\n    </div>\n\n    <!-- Esto se muestra a modo de informacion en caso de no tener cita -->\n    <div style=\"color:rgb(0, 0, 0);background: #ffffffed;\n    border-radius: 5%; padding: 5%;\" *ngIf=\"DataAsignacion.length === 0 && DatosUser.TipoUser=== 'Barbero'\">\n      <ion-icon name=\"alert-circle-outline\" style=\"font-size: xxx-large;\"></ion-icon>\n      <ion-text>\n        <h3>EN ESTOS MOMENTOS NO TIENES NINGÚN CLIENTE POR ATENDER</h3>\n      </ion-text>\n    </div>\n\n    <div style=\"color:rgb(0, 0, 0);background: #ffffffed;\n    border-radius: 5%; padding: 5%;\" *ngIf=\"DataAsignacion.length === 0 && DatosUser.TipoUser=== 'Cliente'\">\n      <ion-icon name=\"alert-circle-outline\" style=\"font-size: xxx-large;\"></ion-icon>\n      <ion-text>\n        <h3>NO HAS AGENDADO NINGÚNA CITA</h3>\n      </ion-text>\n    </div>\n\n\n  </ion-card>\n\n  <app-tabs></app-tabs>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map