import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';
import { CountryComponent } from './country.component';

const routes: Routes = [{ path: '', component: CountryComponent ,

children:[
  {
path:'',
pathMatch:'full',
redirectTo:'list'
  },
  {
    path:'list',
    component:CountryListContainerComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
