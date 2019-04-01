import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDespachosComponent } from './historial-despachos.component';

describe('HistorialDespachosComponent', () => {
  let component: HistorialDespachosComponent;
  let fixture: ComponentFixture<HistorialDespachosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialDespachosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialDespachosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
