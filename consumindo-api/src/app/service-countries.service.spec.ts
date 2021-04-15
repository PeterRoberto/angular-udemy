import { TestBed } from '@angular/core/testing';

import { ServiceCountriesService } from './service-countries.service';

describe('ServiceCountriesService', () => {
  let service: ServiceCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
