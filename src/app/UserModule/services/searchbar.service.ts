import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import { EnvironmentUrlService } from './../../../../environment-url.service';
// import { environment } from './../../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchbarService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
  getAllFunctionHalls():Observable<any>
 // {
  //  return this.http.get('http://$(SERVER_URL):8057/api/functionhalls');
 // }

{
    return this.http.get('route, this.envUrl.urlAddress');
  }
  
  findFunctionhallByNameAndCity(city):Observable<any>
  {
    return this.http.get('http://$(SERVER_URL):8057/api/functionhallsBy/?city='+city);
  }
 
}

