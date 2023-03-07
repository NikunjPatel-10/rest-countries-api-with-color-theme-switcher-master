import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GetCountriesService {
public apiUrl:string;
public regionName:string
  constructor(private _http:HttpClient) { 
    this.apiUrl = 'https://restcountries.com/',
    this.regionName = ''
  }

  public getCountryList(pageNumber:number , pageSize:number):Observable<any>{
    const url = this.apiUrl + 'v3.1/' + 'all'
    return this._http.get<any>(`${url}?_page=${pageNumber}&_limit=${pageSize}`)
  }

  
  public getCountryRegion():Observable<any>{
    const url = this.apiUrl 
    return this._http.get<any>(`${this.apiUrl}/v3.1/region`)
  }
  
}
