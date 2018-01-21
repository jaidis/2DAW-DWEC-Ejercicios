import { TestBed, inject } from '@angular/core/testing';

import { ServicioApiService } from './servicio-api.service';

describe('ServicioApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioApiService]
    });
  });

  it('should be created', inject([ServicioApiService], (service: ServicioApiService) => {
    expect(service).toBeTruthy();
  }));
});
