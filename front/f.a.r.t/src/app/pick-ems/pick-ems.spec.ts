import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickEms } from './pick-ems';

describe('PickEms', () => {
  let component: PickEms;
  let fixture: ComponentFixture<PickEms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickEms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickEms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
