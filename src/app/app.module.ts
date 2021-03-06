import { BlockInfoComponent } from './modulos/ordenes/components/block-info/block-info.component';
import { EmailComponent } from './modulos/gestionMail/components/email/email.component';
import { ModalAlertComponent } from './modulos/shared/components/modalAlert/modalAlert.component';
import { BrowserModule,  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modulos/shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './modulos/ordenes/components/dashboard/dashboard.component';
//import { LoginComponent } from './modulos/shared/components/login/login.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartsModule } from 'ng2-charts';
import { MenuComponent } from './modulos/shared/components/menu/menu.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { OrderComponent } from './modulos/shared/components/order/order.component';
import { Globals } from './modulos/shared/utils/globals';
import { SearchComponent } from './modulos/ordenes/components/search/search.component';
import { AccordionModule } from 'ngx-accordion';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { ModalModule } from 'ngx-modal';
import { InconsistenciasOcComponent } from './modulos/ordenes/components/inconsistencias-oc/inconsistencias-oc.component';
import { DevolucionesAutomaticasComponent } from './modulos/devoluciones/components/automaticas/devoluciones.component';
import { DevolucionesManualesComponent } from './modulos/devoluciones/components/manuales/devoluciones.component';
import { NwbModule } from 'ng-wizi-bulma';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './modulos/shared/services/searchservice';
import { ReportService } from './modulos/reportes/services/reportservice';
import { InconsistenciasOcService } from './modulos/ordenes/services/inconsistencias-oc.service';
import { EmailService } from './modulos/shared/services/email.service';
import { HttpModule } from '@angular/http';
import { DashboardService } from './modulos/ordenes/services/dashboard.service';
import { ConversorPipe } from './pipe/conversor.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {OrderByPipe} from './pipe/orderby';
import {CapitalizePipe} from './pipe/capitalize.pipe';
import {WelcomePipe} from './pipe/welcome.pipe';
import { LoadingComponent } from './modulos/shared/components/loading/loading.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { MessageService } from './modulos/shared/services/message.service';
import { NumberDirectiveDirective } from './directives/number-directive.directive';
import { RutDirective } from './directives/RutDirective';
import { SkuDirective } from './directives/SkuDirective';
import { NumberOnlyDirective } from './directives/OnlyNumber.directive';
import { TrimPipe } from './pipe/trim.pipe';
import { DevolutionComponent } from './modulos/ordenes/components/devolution/devolution.component';
import { WelcomeComponent } from './modulos/ordenes/components/welcome/welcome.component';
import { FormatPipe } from './pipe/format.pipe';
import { ReportComponent } from './modulos/reportes/components/report/report.component';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import { ReportInfoOrderComponent } from './modulos/reportes/components/report-info-order/report-info-order.component';
import { ReportErrorUpateEomComponent } from './modulos/reportes/components/report-error-upate-eom/report-error-upate-eom.component';
import { EmailTemplateComponent } from './modulos/mantenedores/components/email-template/email-template.component';
import { EmailTemplateService } from './modulos/mantenedores/services/email.template.service';
import { MantenedorUserComponent } from './modulos/mantenedores/components/mantenedor-user/mantenedor-user.component';
import { MantenedorUserService } from './modulos/mantenedores/services/mantenedor.user.service';
import { LogService } from './modulos/shared/services/log.service';
import { MantenedorPointComponent } from './modulos/mantenedores/components/mantenedor-point/mantenedor-point.component';
import { BasepointService } from './modulos/mantenedores/services/basepoint.service';
import { LoyaltypayService } from './modulos/mantenedores/services/loyaltypay.service';
import { MaintainerProfileComponent } from './modulos/mantenedores/components/maintainer-profile/maintainer-profile.component';
import { MaintainerProfileService } from './modulos/mantenedores/services/maintainer-profile.service';
import { BitacoraService } from './modulos/reportes/services/bitacora.service';
import { BitacoraComponent } from './modulos/reportes/components/bitacora/bitacora.component';
import { EscapeHtmlPipe  } from './pipe/keep-html.pipe';
import { MantenedorParametrosComponent } from './modulos/mantenedores/components/mantenedor-parametros/mantenedor-parametros.component';
import { MaintainerParameterService } from './modulos/mantenedores/services/maintainer-parameter.service';
import { CommonService } from './modulos/shared/services/common.service';
import { OrderTypeService } from './modulos/shared/services/ordertypeservice';
import { EmisionUnitariaGdeService } from './modulos/gde/services/emisionUnitariaGde.service';
import localeCl from '@angular/common/locales/es-CL';
import localeClExtra from '@angular/common/locales/extra/es-CL';
import { HttpClientModule } from '@angular/common/http';
import { EmisionUnitariaGdeComponent } from './modulos/gde/components/emisionUnitariaGde/emisionUnitariaGde.component';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { DataTablesModule } from 'angular-datatables';
import { TableConfigEmisionGDE } from './modulos/gde/util/tableConfig.util';
import { TableConfigSgo } from './modulos/sgo/util/tableConfigSgo.util';
import { ModalConfigTransporteComponent } from './modulos/gde/services/configTransporteModal/configTransporte.component';
import { EmisionMasivaGdeComponent } from './modulos/gde/components/emisionMasivaGde/emisionMasivaGde.component';
import { ModalDetalleMasivoComponent } from './modulos/gde/components/emisionMasivaGde/emisionMasivaGdeModal/detalleEmisionMasivaGde.component';
import { ValidadorDatos } from './modulos/gde/util/validador.util';
import { ReimpresionGuiasGdeComponent } from './modulos/gde/components/reimpresionGuiasDespacho/reimpresionGuiasDespacho.component';
import { GuiasTransferenciaComponent } from './modulos/gde/components/guiasTransferencia/guiasTransferencia.component';
import { GuiaTransferenciaDetalleComponent } from './modulos/gde/components/guiasTransferencia/guiaTransferenciaDetalle/guiaTransferenciaDetalle.component';
import { CuadraturaBigTicketComponent } from './modulos/sgo/components/cuadratura-big-ticket/cuadratura-big-ticket.component';
import { GestionBackordersComponent } from './modulos/sgo/components/gestion-backorders/gestion-backorders.component';
import { LoginComponent } from './modulos/sgo/components/login/login.component';
import { AdministracionUsuariosComponent } from './modulos/sgo/components/administracion-usuarios/administracion-usuarios.component';
import { DespachoBatchNumberComponent } from './modulos/sgo/components/despacho-batch-number/despacho-batch-number.component';
import { CuadraturaService } from './modulos/sgo/services/cuadratura.services';
import { DespachoBatchNumberService } from './modulos/sgo/services/despachoBN.services';
import { BackordersService } from './modulos/sgo/services/backorders.service';
import { DespachoNumCartonService } from './modulos/sgo/services/despachoNumCarton.services';
import { DespachoNumeroCartonComponent } from './modulos/sgo/components/despacho-numero-carton/despacho-numero-carton.component';
import { LpnbatchNumberComponent } from './modulos/sgo/components/lpnbatch-number/lpnbatch-number.component';
import { LpnBatchNumberService } from './modulos/sgo/services/lpnBatchNumber.services.';
import { TransferenciaSucursalComponent } from './modulos/sgo/components/transferencia-sucursal/transferencia-sucursal.component';
import { TransferenciaSucursalService } from './modulos/sgo/services/transferenciaSucursal.services';
import { ModificarPersonaPedidoComponent } from './modulos/sgo/components/scgo/modificar-persona-pedido/modificar-persona-pedido.component';
import { ModificarPersonaPedidoService } from './modulos/sgo/services/modificarPersonaPedido.service';
import { IngresoReservasCorporativasComponent } from './modulos/sgo/components/ventaPosPeru/ingreso-reservas-corporativas/ingreso-reservas-corporativas.component';
import { InputsDirective } from './directives/inputs.directive';
import { DespachoVentasCorporativasComponent } from './modulos/sgo/components/ventaPosPeru/despacho-ventas-corporativas/despacho-ventas-corporativas.component';
import { HistorialDespachosComponent } from './modulos/sgo/components/consultaOC/historial-despachos/historial-despachos.component';
import { HistorialDespachoService } from './modulos/sgo/services/historialDespacho.services';
import { AnulacionReservasComponent } from './modulos/sgo/components/ventaPosPeru/anulacion-reservas/anulacion-reservas.component';
import { DespachosPorEstadoComponent } from './modulos/sgo/components/despachos-por-estado/despachos-por-estado.component';
import { DespachoPorEstadoService } from './modulos/sgo/services/despachoEstados.Services';
import { MantencionDespachoComponent } from './modulos/sgo/components/mantencion-despacho/mantencion-despacho.component';
import { MantencionDespachoService } from './modulos/sgo/services/mantencionDespacho.Services';
import { NcvencimientoRetComponent } from './modulos/sgo/components/ncvencimiento-ret/ncvencimiento-ret.component';
import { NcVencimientoRETService } from './modulos/sgo/services/ncVencimientoRET.Services';
import { ControlProcesoComponent } from './modulos/sgo/components/control-proceso/control-proceso.component';
import { ControlProcesoService } from './modulos/sgo/services/controlProceso.Services';
import { ProgramacionPlanificacionAutComponent } from './modulos/sgo/components/programacion-planificacion-aut/programacion-planificacion-aut.component';
import { ProgPlanificacionAutoService } from './modulos/sgo/services/progPlanificacionAuto.Services';
import { IngresoProgPlanAutoComponent } from './modulos/sgo/components/ingreso-prog-plan-auto/ingreso-prog-plan-auto.component';
import { IngresoProgPlanAutoService } from './modulos/sgo/services/ingresoProgPlanAuto.Services';
import { MantencionRutasPlanAutoComponent } from './modulos/sgo/components/mantencion-rutas-plan-auto/mantencion-rutas-plan-auto.component';
import { MantencionRutasPlanAutoService } from './modulos/sgo/services/mantencionRutasPlanAuto.Services';
import { MantencionProgSectoresComponent } from './modulos/sgo/components/mantencion-prog-sectores/mantencion-prog-sectores.component';
import {MantencionProgSectoresService} from './modulos/sgo/services/mantencionProgSectores.Services';
import { IngresoProgSectoresComponent } from './modulos/sgo/components/ingreso-prog-sectores/ingreso-prog-sectores.component';
import {IngresoProgSectoresService } from './modulos/sgo/services/ingresoProgSectores.Services';
import { PlanificacionRutasDespachoComponent } from './modulos/sgo/components/planificacion-rutas-despacho/planificacion-rutas-despacho.component';
import {PlanificacionRutasDespachoService} from './modulos/sgo/services/planificacionRutasDespacho.Services';
import { SistemaGestionOrdenesComponent } from './modulos/sgo/components/consultaOC/sistema-gestion-ordenes/sistema-gestion-ordenes.component';
import { FlujoDespachoComponent } from './modulos/sgo/components/consultaOC/flujo-despacho/flujo-despacho.component';
import { CambiarSucursalRetiroComponent } from './modulos/sgo/components/scgo/cambiar-sucursal-retiro/cambiar-sucursal-retiro.component';
import { BuscarPedidosComponent } from './modulos/sgo/components/gestionRetirosCambios/buscar-pedidos/buscar-pedidos.component';
import { ConfirmarTicketComponent } from './modulos/sgo/components/gestionRetirosCambios/confirmar-ticket/confirmar-ticket.component';
import { ActaRetiroComponent } from './modulos/sgo/components/gestionRetirosCambios/acta-retiro/acta-retiro.component';
import { CrudActaRetiroComponent } from './modulos/sgo/components/gestionRetirosCambios/crud-acta-retiro/crud-acta-retiro.component';
import { ReintentosDespachoComponent } from './modulos/sgo/components/reintentosDespacho/reintentos-despacho/reintentos-despacho.component';
import { EditarFlujoDespachoComponent } from './modulos/sgo/components/scgo/editar-flujo-despacho/editar-flujo-despacho.component';
import { EditarFlujoDespacho2Component } from './modulos/sgo/components/scgo/editar-flujo-despacho2/editar-flujo-despacho2.component';
import { EditarDireccionDespachoComponent } from './modulos/sgo/components/scgo/editar-direccion-despacho/editar-direccion-despacho.component';



//import { InfoTransportCompanyService } from './modulos/gde/services/cargaDatosTransporte.service';




registerLocaleData(localeCl, 'es-CL', localeClExtra);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    BlockInfoComponent,
    LoginComponent,
    MenuComponent,
    BackOfficeComponent,
    OrderComponent,
    SearchComponent,
    ReportComponent,
    InconsistenciasOcComponent,
    InconsistenciasOcComponent,
    DevolucionesAutomaticasComponent,
    DevolucionesManualesComponent,
    EmailComponent,
    ConversorPipe,
    OrderByPipe,
    ConversorPipe,
    ModalAlertComponent,
    LoadingComponent,
    NumberDirectiveDirective,
    RutDirective,
    SkuDirective,
    NumberOnlyDirective,
    CapitalizePipe,
    WelcomePipe,
    TrimPipe,
    DevolutionComponent,
    WelcomeComponent,
    FormatPipe,
    ReportComponent,
    ReportInfoOrderComponent,
    ReportErrorUpateEomComponent,
    EmailTemplateComponent,
    MantenedorUserComponent,
    MantenedorPointComponent,
    MaintainerProfileComponent,
    BitacoraComponent,
    EscapeHtmlPipe,
    MantenedorParametrosComponent,
    EmisionUnitariaGdeComponent,
    ModalConfigTransporteComponent,
    EmisionMasivaGdeComponent,
    ModalDetalleMasivoComponent,
    ReimpresionGuiasGdeComponent,
    GuiasTransferenciaComponent,
    GuiaTransferenciaDetalleComponent,
    AdministracionUsuariosComponent,
    CuadraturaBigTicketComponent,
    GestionBackordersComponent,
    DespachoBatchNumberComponent,
    DespachoNumeroCartonComponent,
    LpnbatchNumberComponent,
    TransferenciaSucursalComponent,
    ModificarPersonaPedidoComponent,
    IngresoReservasCorporativasComponent,
    InputsDirective,
    DespachoVentasCorporativasComponent,
    HistorialDespachosComponent,
    AnulacionReservasComponent,
    DespachosPorEstadoComponent,
    MantencionDespachoComponent,
    NcvencimientoRetComponent,
    ControlProcesoComponent,
    ProgramacionPlanificacionAutComponent,
    IngresoProgPlanAutoComponent,
    MantencionRutasPlanAutoComponent,
    MantencionProgSectoresComponent,
    IngresoProgSectoresComponent,
    PlanificacionRutasDespachoComponent,
    AnulacionReservasComponent,
    SistemaGestionOrdenesComponent,
    FlujoDespachoComponent,
    CambiarSucursalRetiroComponent,
    BuscarPedidosComponent,
    ConfirmarTicketComponent,
    ActaRetiroComponent,
    CrudActaRetiroComponent,
    ReintentosDespachoComponent,
    EditarFlujoDespachoComponent,
    EditarFlujoDespacho2Component,
    EditarDireccionDespachoComponent
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    AccordionModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    NwbModule,
    HttpModule,
    HttpClientModule,
    MyDatePickerModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule,
    DataTablesModule,
    BootstrapModalModule.forRoot({container : document.body})
  ],
  providers: [
    Globals,
    SearchService,
    ReportService,
    InconsistenciasOcService,
    DashboardService,
    DatePipe,
    ConversorPipe,
    EmisionUnitariaGdeService,
    MessageService,
    EmailService,
    EmailTemplateService,
    MantenedorUserService,
    BasepointService,
    LoyaltypayService,
    LogService,
    MaintainerProfileService,
    BitacoraService,
    CommonService,
    MaintainerParameterService,
    OrderTypeService,
    TableConfigEmisionGDE,
    TableConfigSgo,
    CuadraturaService,
    DespachoBatchNumberService,
    DespachoNumCartonService,
    LpnBatchNumberService,
    TransferenciaSucursalService,
    ValidadorDatos,
    BackordersService,
    ModificarPersonaPedidoService,
    HistorialDespachoService,
    DespachoPorEstadoService,
    MantencionDespachoService,
    NcVencimientoRETService,
    ControlProcesoService,
    ProgPlanificacionAutoService,
    IngresoProgPlanAutoService,
    MantencionRutasPlanAutoService,
    MantencionProgSectoresService,
    IngresoProgSectoresService,
    PlanificacionRutasDespachoService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  entryComponents: [
    ModalAlertComponent,
    LoadingComponent,
    ModalConfigTransporteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
