import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCompetenciasComponent } from './vista-competencias.component';

describe('VistaCompetenciasComponent', () => {
  let component: VistaCompetenciasComponent;
  let fixture: ComponentFixture<VistaCompetenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCompetenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
