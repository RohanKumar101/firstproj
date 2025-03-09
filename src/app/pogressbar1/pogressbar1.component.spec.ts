import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pogressbar1Component } from './pogressbar1.component';

describe('Pogressbar1Component', () => {
  let component: Pogressbar1Component;
  let fixture: ComponentFixture<Pogressbar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pogressbar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pogressbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
