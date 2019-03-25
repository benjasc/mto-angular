import { Component, OnInit,ViewChild } from '@angular/core';
import { GestionBackordersService } from '../../services/gestion-backorders.service';
import { GestionBackordersModel} from '../../model/gestion-backorders.model';
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
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  @ViewChild('myModalEmailInfo') myModalEmailInfo;
  dtOptions: any;
  dtTrigger:Subject<any> = new Subject();

  arrayBackorders: Array<GestionBackordersModel>;
  constructor(public gestionBackOrdersService : GestionBackordersService,public configTable:TableConfigSgo) {
              console.log(gestionBackOrdersService.getUsers());
              
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


  usuarios(){
    console.log("xdfsdf");
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



}
