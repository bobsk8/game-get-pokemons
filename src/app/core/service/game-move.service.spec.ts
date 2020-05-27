import { TestBed } from '@angular/core/testing';

import { GameMoveService } from './game-move.service';

describe('GameMoveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('E should be 2', () => {
    const service: GameMoveService = TestBed.get(GameMoveService);
    expect(service.startGame('E')).toBe(2);
  });

  it('NESO should be 4', () => {
    const service: GameMoveService = TestBed.get(GameMoveService);
    expect(service.startGame('NESO')).toBe(4);
  });

  it('NSNSNSNSNS should be 2', () => {
    const service: GameMoveService = TestBed.get(GameMoveService);
    expect(service.startGame('NSNSNSNSNS')).toBe(2);
  });

  it('NE!O should be 3', () => {
    const service: GameMoveService = TestBed.get(GameMoveService);
    expect(service.startGame('NE!O')).toBe(3);
  });

  it('#$_!@N_O#-S should be 4', () => {
    const service: GameMoveService = TestBed.get(GameMoveService);
    expect(service.startGame('#$_!@N_O#-S')).toBe(4);
  });

});
