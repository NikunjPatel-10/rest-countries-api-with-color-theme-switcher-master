import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list-presentation',
  templateUrl: './country-list-presentation.component.html',
  styleUrls: ['./country-list-presentation.component.scss']
})
export class CountryListPresentationComponent implements OnInit{
  
  /**
   * get data using get and set method from container
   */
@Input()  set countryList(res:any | null){
  if(res){
this.countryData = res
console.log(this.countryData);
  }

}
public get countryList():any{

  return this.countryData

}

public countryData:any

  constructor(){

  }
  
  ngOnInit(): void {
    
  }


}
