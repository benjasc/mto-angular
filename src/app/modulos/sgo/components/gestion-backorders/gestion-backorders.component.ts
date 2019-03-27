import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BackordersService } from '../../services/backorders.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { TableConfigSgo } from '../../../sgo/components/util/tableConfigSgo.util';
import { LogService } from '../../../shared/services/log.service';






@Component({
  selector: 'app-gestion-backorders',
  templateUrl: './gestion-backorders.component.html',
  styleUrls: ['./gestion-backorders.component.scss']
})
export class GestionBackordersComponent implements OnInit {
  canalVentas:any[] = [];
  canalDespachos:any[] = [];
  modeloDespachos:any[] = [];
  motivosBackorder:any[] = [];

  selectCanalVentas:String = '0';
  selectCanalVentaDespacho:String = '0';
  selectModeloDespachos:string = '0';
  selectMotivosBackorder:string = '0';


  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  @ViewChild('myModalEmailInfo') myModalEmailInfo;
  dtOptions: any;
  dtTrigger:Subject<any> = new Subject();

  constructor(private backOrdersService : BackordersService,private configTable:TableConfigSgo) {
             this.getCanalVentas();
             this.getCanalDespachos();
             this.getModeloDespachos();
             this.getMotivosBackorder(); 
             console.log(this.selectCanalVentaDespacho);
             
   }

  ngOnInit() {
    this.dtOptions = this.configTable.dtOptionsExport;
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  refrescarTable() {
    this.dtTrigger.next();
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  getCanalVentas(){
    this.backOrdersService.getCanalVentas().subscribe(res=>{
        this.canalVentas = res.json();

    },err=>{
          console.log(err);
    });
    
  }
  getCanalDespachos(){
    this.backOrdersService.getCanalDespachos().subscribe(res=>{
      console.log(res.json());
      
        this.canalDespachos = res.json();
        
    },err=>{
          console.log(err);
    });
    
  }
  getModeloDespachos(){
    this.backOrdersService.getModeloDespachos().subscribe(res=>{
        this.modeloDespachos = res.json();
        
    },err=>{
          console.log(err);
    });
    
  }
  getMotivosBackorder(){
    this.backOrdersService.getMotivosBackorder().subscribe(res=>{
        this.motivosBackorder = res.json();
        
    },err=>{
          console.log(err);
    });
    
  }

  activity() {
    console.log(this.selectCanalVentaDespacho);
  }
  x(x : NgForm){
    console.log(x.value);
    
  }
}






























  /* usuarios(){
    this.gestionBackOrdersService.getUsers().subscribe(
      
      res=>{
        this.arrayBackorders = res.json();
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
        this.arrayBackorders = res.json();
        

    },err=>{
    });
   
    this.dtTrigger.next();
  }



} */
