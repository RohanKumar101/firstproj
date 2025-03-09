import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge1Component } from './badge1.component';

describe('Badge1Component', () => {
  let component: Badge1Component;
  let fixture: ComponentFixture<Badge1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Badge1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Badge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
