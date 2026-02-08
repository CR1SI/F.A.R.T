import { TestBed } from '@angular/core/testing';

import { GameList } from './game-list';

describe('GameList', () => {
  let service: GameList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
