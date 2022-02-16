import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWidthImageComponent } from './text-width-image.component';

describe('TextWidthImageComponent', () => {
  let component: TextWidthImageComponent;
  let fixture: ComponentFixture<TextWidthImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWidthImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWidthImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
