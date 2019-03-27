import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class BackordersService {

    public url_canalVenta:string = '/canalVentas';
    public url_canalDespacho:string = '/canalDespacho';
    public url_modeloDespacho:string = '/modeloDespacho';
    public url_motivoBackorder:string = '/motivoBackorder';
    public url_backorder:string = '/backorder';

   public url_api : string ;
    constructor(private http : Http){
        console.log("api funcionando!!", this.url_api = environment.test_api);
        
         this.url_api = environment.test_api;

    }

    getCanalVentas(){
        const FULL_URL = `${this.url_api}${this.url_canalVenta}`;
        return this.http.get(FULL_URL).pipe(map(res=>res));
    }
    getCanalDespachos(){
        const FULL_URL = `${this.url_api}${this.url_canalDespacho}`;
        return this.http.get(FULL_URL).pipe(map(res=>res));
    }
    getModeloDespachos(){
        const FULL_URL = `${this.url_api}${this.url_modeloDespacho}`;
        return this.http.get(FULL_URL).pipe(map(res=>res));
    }
    getMotivosBackorder(){
        const FULL_URL = `${this.url_api}${this.url_motivoBackorder}`;
        return this.http.get(FULL_URL).pipe(map(res=>res));
    }


}