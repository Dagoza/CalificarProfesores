import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendienteComponent } from './pendiente.component';

describe('PendienteComponent', () => {
  let component: PendienteComponent;
  let fixture: ComponentFixture<PendienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
