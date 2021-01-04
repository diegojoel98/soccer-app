import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoPartidoComponent } from './ultimo-partido.component';

describe('UltimoPartidoComponent', () => {
  let component: UltimoPartidoComponent;
  let fixture: ComponentFixture<UltimoPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
