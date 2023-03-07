import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rest-countries-api-with-color-theme-switcher-master';
  public theme: any
  constructor(private themeService: ThemeService) {
   
  }
  ngOnInit(): void {
    this.themeService.themeChange$.subscribe(res => {
      console.log(res);
      this.theme = res;
    })

  }
}
