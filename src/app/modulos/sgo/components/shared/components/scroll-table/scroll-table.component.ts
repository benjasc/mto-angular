import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { TableConfigSgo } from '../../../../util/tableConfigSgo.util';



@Injectable()
export class ScrollTableComponent implements  OnInit, OnDestroy, AfterViewInit {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  @ViewChild('myModalEmailInfo') myModalEmailInfo;
  dtOptions: any;
  dtTrigger:Subject<any> = new Subject();

  constructor(private configTable:TableConfigSgo) {
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



 
}




















