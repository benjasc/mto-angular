import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { Http } from '@angular/http';
import { environment } from './../../../../environments/environment';

@Injectable()
export class GestionBackordersService {

    public url_api_usuarios:string = '/usuarios';
   public url_api : string ;
    constructor(private http : Http){
         this.url_api = environment.test_api;

    }

    getUsers(){
        const FULL_URL = this.url_api+this.url_api_usuarios;
        return this.http.get(FULL_URL).pipe(map(res => res));
    }


}