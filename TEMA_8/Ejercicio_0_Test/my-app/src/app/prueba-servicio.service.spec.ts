import { TestBed, inject } from '@angular/core/testing';

import { PruebaServicioService } from './prueba-servicio.service';

describe('PruebaServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PruebaServicioService]
    });
  });

  it('should be created', inject([PruebaServicioService], (service: PruebaServicioService) => {
    expect(service).toBeTruthy();
  }));
});
