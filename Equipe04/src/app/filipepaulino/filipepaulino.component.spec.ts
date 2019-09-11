import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilipepaulinoComponent } from './filipepaulino.component';

describe('FilipepaulinoComponent', () => {
  let component: FilipepaulinoComponent;
  let fixture: ComponentFixture<FilipepaulinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilipepaulinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilipepaulinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
