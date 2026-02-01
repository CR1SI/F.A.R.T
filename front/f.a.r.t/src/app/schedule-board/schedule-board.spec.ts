import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBoard } from './schedule-board';

describe('ScheduleBoard', () => {
  let component: ScheduleBoard;
  let fixture: ComponentFixture<ScheduleBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
