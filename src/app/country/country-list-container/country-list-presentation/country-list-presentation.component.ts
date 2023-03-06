import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryListPresenterService } from '../country-list-presenter/country-list-presenter.service';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './country-list-presentation.component.html',
  styleUrls: ['./country-list-presentation.component.scss'],
  viewProviders: [CountryListPresenterService]
})
export class CountryListPresentationComponent implements OnInit {

  @Output() countryRegion: EventEmitter<any>

  /**
   * get data using get and set method from container
   */
  @Input() set countryList(res: any | null) {
    if (res) {
      this._countryData = res
      this.countryListData = res
      console.log(this._countryData);
      console.log(this._countryData);
    }

  }
  public get countryList(): any {
    return this._countryData
  }

  private _countryData: any
  public countryListData: any
  public searchData!: string
  public filterData:any
  public region!: any[]

  /**
   * 
   * @param _countryListPresenterService 
   */
  constructor(private _countryListPresenterService: CountryListPresenterService) {
    this.countryRegion = new EventEmitter()
    this.region = ['Africa', 'Americas', 'Europe', 'Asia', 'Antarctic', 'Oceania', 'All']

  }

  ngOnInit(): void {
  
    /**
     * get data from the presenter service
     */
    this._countryListPresenterService.countryRegion$.subscribe((data) => {
      this.countryListData = data
      console.log(this.countryListData);  
    })
  }

/**
 * filter data according to region
 * @param data 
 */
  public getRegion(data:any) { 
     let filter = data.target.value 
    if (filter === 'All') {
      this.countryListData = this._countryData
      console.log(this.countryListData); 
    }
    else {
      this._countryListPresenterService.filterRegion(filter, this._countryData)
    }
  }

}
