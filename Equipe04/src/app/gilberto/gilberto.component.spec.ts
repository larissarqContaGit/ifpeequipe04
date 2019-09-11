import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GilbertoComponent } from './gilberto.component';

describe('GilbertoComponent', () => {
  let component: GilbertoComponent;
  let fixture: ComponentFixture<GilbertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GilbertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GilbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
