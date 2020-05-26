import { Injectable } from '@angular/core';

import { Move } from '../../models/move';
import { MoveConts } from '../constants/move-conts';

@Injectable({
  providedIn: 'root'
})
export class GameMoveService {

  moves: Move[] = [new Move()];
  contX = 0;
  contY = 0;
  constructor() { }

  setMove(value: Move) {
    if (value === MoveConts.UP) {
      this.contY++;
      this.addMove(new Move(this.contX, this.contY));
    }
    if (value === MoveConts.DOWN) {
      this.contY--;
      this.addMove(new Move(this.contX, this.contY));
    }
    if (value === MoveConts.RIGTH) {
      this.contX++;
      this.addMove(new Move(this.contX, this.contY));
    }
    if (value === MoveConts.LEFT) {
      this.contX--;
      this.addMove(new Move(this.contX, this.contY));
    }
  }

  addMove(value: Move) {
    if (!this.test(value)) {
      this.moves.push(new Move(this.contX, this.contY));
    }
  }

  test(value: Move) {
    return this.moves.some(m => (m.x === value.x && m.y === value.y));
  }
}
