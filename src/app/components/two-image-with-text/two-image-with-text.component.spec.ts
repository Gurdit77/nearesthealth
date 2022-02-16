import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoImageWithTextComponent } from './two-image-with-text.component';

describe('TwoImageWithTextComponent', () => {
  let component: TwoImageWithTextComponent;
  let fixture: ComponentFixture<TwoImageWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoImageWithTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoImageWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
