import { async, TestBed } from '@angular/core/testing';

import { GameMoveService } from 'src/app/core/service/game-move.service';

describe('HomeComponent', () => {
  let service: GameMoveService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [GameMoveService]
    })
      .compileComponents();
  }));

  it('should use GameMoveService', () => {
    service = TestBed.get(GameMoveService);
    expect(service.startGame('NESO')).toBe(4);
  });
});
