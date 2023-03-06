import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ThemeService {
public themeChange: Subject<any>;
public themeChange$: Observable<any>
  constructor() { 
    this.themeChange = new Subject();
    this.themeChange$ = this.themeChange.asObservable()
  }
}
