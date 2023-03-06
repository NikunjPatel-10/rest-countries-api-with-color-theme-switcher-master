import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CountryListPresenterService {
  public countryRegion: Subject<any>;
  public countryRegion$: Observable<any>
  constructor() {
    this.countryRegion = new Subject();
    this.countryRegion$ = this.countryRegion.asObservable()
  }

  public getRegion(data: any) {
    const region = data.target.value;
    this.countryRegion.next(region)
  }

  public filterRegion(data: any, countries: any) {
  //  let filter = data.target.value
  //  console.log(filter);
    let filerList = countries.filter((res: any) => res.region === data )
    // console.log(filerList); 
    this.countryRegion.next(filerList)
  }
}
