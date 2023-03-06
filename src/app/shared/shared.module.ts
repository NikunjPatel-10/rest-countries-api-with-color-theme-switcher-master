import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';
import { ThemeService } from './service/theme.service';



@NgModule({
  declarations: [
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  providers:[ThemeService],
  exports:[SearchPipe]
})
export class SharedModule { }
