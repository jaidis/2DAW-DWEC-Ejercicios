import { TestBed, inject } from '@angular/core/testing';

import { ServidorSocketService } from './servidor-socket.service';

describe('ServidorSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServidorSocketService]
    });
  });

  it('should be created', inject([ServidorSocketService], (service: ServidorSocketService) => {
    expect(service).toBeTruthy();
  }));
});
