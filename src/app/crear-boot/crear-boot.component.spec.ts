import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBootComponent } from './crear-boot.component';

describe('CrearBootComponent', () => {
  let component: CrearBootComponent;
  let fixture: ComponentFixture<CrearBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
