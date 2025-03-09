import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avater1Component } from './avater1.component';

describe('Avater1Component', () => {
  let component: Avater1Component;
  let fixture: ComponentFixture<Avater1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avater1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Avater1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
