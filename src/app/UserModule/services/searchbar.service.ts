import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
// import { EnvironmentUrlService } from './../../../environments/EnvironmentUrlService';
// import { environment } from './../../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  // constructor(private http: HttpClient, private envUrl: ./../../../environments/environment) { }
    constructor(private http: HttpClient) { }
  getAllFunctionHalls():Observable<any>
  {
    return this.http.get('http://13.233.232.133:8057/api/functionhalls');
  }
  
  findFunctionhallByNameAndCity(city):Observable<any>
  {
    return this.http.get('http://13.233.232.133:8057/api/functionhallsBy/?city='+city);
  }
 
}

