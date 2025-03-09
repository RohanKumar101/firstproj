import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progressspinner1Component } from './progressspinner1.component';

describe('Progressspinner1Component', () => {
  let component: Progressspinner1Component;
  let fixture: ComponentFixture<Progressspinner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progressspinner1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progressspinner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
