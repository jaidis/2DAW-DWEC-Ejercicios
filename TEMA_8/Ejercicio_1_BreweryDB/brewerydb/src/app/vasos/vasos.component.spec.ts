import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VasosComponent } from './vasos.component';

describe('VasosComponent', () => {
  let component: VasosComponent;
  let fixture: ComponentFixture<VasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
