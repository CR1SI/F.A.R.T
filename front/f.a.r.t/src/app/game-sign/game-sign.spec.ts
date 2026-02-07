import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSign } from './game-sign';

describe('GameSign', () => {
  let component: GameSign;
  let fixture: ComponentFixture<GameSign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameSign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
