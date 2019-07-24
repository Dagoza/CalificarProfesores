import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerarComponent } from './moderar.component';

describe('ModerarComponent', () => {
  let component: ModerarComponent;
  let fixture: ComponentFixture<ModerarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
