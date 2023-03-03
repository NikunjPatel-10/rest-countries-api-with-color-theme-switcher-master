import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GetCountriesService {
public apiUrl:string
  constructor(private _http:HttpClient) { 
    this.apiUrl = 'https://restcountries.com/v2/'
  }

  public getCountryList():Observable<any>{
    const url = this.apiUrl + "all"
    return this._http.get<any>(url)
  }

  
}
