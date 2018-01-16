import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeServicioComponent } from './consume-servicio.component';

describe('ConsumeServicioComponent', () => {
  let component: ConsumeServicioComponent;
  let fixture: ComponentFixture<ConsumeServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
