import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSitterComponent } from './register-sitter.component';

describe('RegisterSitterComponent', () => {
  let component: RegisterSitterComponent;
  let fixture: ComponentFixture<RegisterSitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
