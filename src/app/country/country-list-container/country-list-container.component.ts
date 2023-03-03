import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCountriesService } from '../../core/service/get-countries.service';

@Component({
  selector: 'app-country-list-container',
  templateUrl: './country-list-container.component.html',
  styleUrls: ['./country-list-container.component.scss']
})
export class CountryListContainerComponent implements OnInit {
  public countryList$: Observable<any>
  constructor(private _countryApiService: GetCountriesService) {
    this.countryList$ = new Observable()
  }

  ngOnInit(): void {
    /**
 * get the country list from the given api
 */
    this.countryList$ = this._countryApiService.getCountryList()
    console.log(this.countryList$);
  }




}
