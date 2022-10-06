import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import { EnvironmentUrlService } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
  getAllFunctionHalls():Observable<any>
  {
    return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
  
  findFunctionhallByNameAndCity(city):Observable<any>
  {
    return this.http.get('http://13.233.232.133:8057/api/functionhallsBy/?city='+city);
  }
 
}

