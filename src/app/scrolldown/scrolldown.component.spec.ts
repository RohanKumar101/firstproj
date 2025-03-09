import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolldownComponent } from './scrolldown.component';

describe('ScrolldownComponent', () => {
  let component: ScrolldownComponent;
  let fixture: ComponentFixture<ScrolldownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrolldownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrolldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
