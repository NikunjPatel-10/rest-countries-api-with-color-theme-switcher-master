import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
