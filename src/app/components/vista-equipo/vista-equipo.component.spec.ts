import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEquipoComponent } from './vista-equipo.component';

describe('VistaEquipoComponent', () => {
  let component: VistaEquipoComponent;
  let fixture: ComponentFixture<VistaEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
