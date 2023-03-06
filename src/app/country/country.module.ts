import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';
import { CountryListPresentationComponent } from './country-list-container/country-list-presentation/country-list-presentation.component';
import { GetCountriesService } from './service/get-countries.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CountryComponent,
    CountryListContainerComponent,
    CountryListPresentationComponent, 
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    GetCountriesService]
})
export class CountryModule { }
