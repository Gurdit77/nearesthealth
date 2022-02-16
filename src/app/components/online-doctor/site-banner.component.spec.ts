import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDoctorComponent } from './site-banner.component';

describe('OnlineDoctorComponent', () => {
  let component: OnlineDoctorComponent;
  let fixture: ComponentFixture<OnlineDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
