import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBackordersComponent } from './gestion-backorders.component';

describe('GestionBackordersComponent', () => {
  let component: GestionBackordersComponent;
  let fixture: ComponentFixture<GestionBackordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionBackordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBackordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
