import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbaraComponent } from './barbara.component';

describe('BarbaraComponent', () => {
  let component: BarbaraComponent;
  let fixture: ComponentFixture<BarbaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarbaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
