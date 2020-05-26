import { TestBed } from '@angular/core/testing';

import { GameMoveService } from './game-move.service';

describe('GameMoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameMoveService = TestBed.get(GameMoveService);
    expect(service).toBeTruthy();
  });
});
