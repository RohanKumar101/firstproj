import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Galleria1Component } from './galleria1.component';

describe('Galleria1Component', () => {
  let component: Galleria1Component;
  let fixture: ComponentFixture<Galleria1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galleria1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Galleria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
