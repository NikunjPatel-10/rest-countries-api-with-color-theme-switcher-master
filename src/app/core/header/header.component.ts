import { Component } from '@angular/core';
import { ThemeService } from 'src/app/shared/service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
isDarkMode:boolean
  constructor(private themeService:ThemeService){
this.isDarkMode = false
  }
  
  changeTheme(){

this.themeService.themeChange.next(this.isDarkMode)
  }
}
