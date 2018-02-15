import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBabyComponent } from './register-baby.component';

describe('RegisterBabyComponent', () => {
  let component: RegisterBabyComponent;
  let fixture: ComponentFixture<RegisterBabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
