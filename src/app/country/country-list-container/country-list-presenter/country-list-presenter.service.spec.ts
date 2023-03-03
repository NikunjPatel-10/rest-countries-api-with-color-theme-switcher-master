import { TestBed } from '@angular/core/testing';

import { CountryListPresenterService } from './country-list-presenter.service';

describe('CountryListPresenterService', () => {
  let service: CountryListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
