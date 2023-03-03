import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListContainerComponent } from './country-list-container/country-list-container.component';
import { CountryListPresentationComponent } from './country-list-container/country-list-presentation/country-list-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListContainerComponent,
    CountryListPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
