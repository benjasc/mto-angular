import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Http } from '@angular/http';
import { environment } from './../../../../environments/environment';



@Injectable()
export class DespachoNumCartonService {
   
  searchTest:string = '/cuadraturaBTService'
  public url_api: string;

  constructor(private http: Http) {
      this.url_api = environment.url_test;
  }




  searchTestMethod(fecha:string, sucursal:string){
    console.log('Search Method');
    const apiURL = this.url_api + this.searchTest;
     return this.http.get(apiURL).pipe(map(res => res));
  }

 

}