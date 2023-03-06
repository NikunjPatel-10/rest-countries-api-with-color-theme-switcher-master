import { Component } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rest-countries-api-with-color-theme-switcher-master';
  public theme: any
  constructor(private themeService: ThemeService) {
    this.themeService.themeChange$.subscribe(res => {
      this.theme = res;
      // this.theme = !this.theme
    })
  }
}
