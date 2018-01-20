import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCervezasComponent } from './lista-cervezas.component';

describe('ListaCervezasComponent', () => {
  let component: ListaCervezasComponent;
  let fixture: ComponentFixture<ListaCervezasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCervezasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCervezasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
