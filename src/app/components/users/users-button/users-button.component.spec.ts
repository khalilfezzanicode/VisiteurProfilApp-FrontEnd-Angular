import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersButtonComponent } from './users-button.component';

describe('UsersButtonComponent', () => {
  let component: UsersButtonComponent;
  let fixture: ComponentFixture<UsersButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
