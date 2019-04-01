import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalRetiroComponent } from './sucursal-retiro.component';

describe('SucursalRetiroComponent', () => {
  let component: SucursalRetiroComponent;
  let fixture: ComponentFixture<SucursalRetiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalRetiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalRetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
