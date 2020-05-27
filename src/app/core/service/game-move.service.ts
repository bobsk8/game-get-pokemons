import { Injectable } from '@angular/core';

import { MoveAction } from '../../models/move-action';
import { MoveConst } from '../const/move-const';

@Injectable({
  providedIn: 'root'
})
export class GameMoveService {

  private moveActions: MoveAction[] = [new MoveAction(0, 0)];
  private capturedPokemons = 1;
  private contX = 0;
  private contY = 0;
  constructor() { }

  // Start the game
  public startGame(directions: string): number {
    this.clearValues();
    const directionsList = directions.split('');
    directionsList.map(m => this.setMove(m));
    return this.capturedPokemons;
  }

  // control action
  private setMove(direction: string): void {
    switch (direction.toUpperCase()) {
      case MoveConst.UP:
        this.contY++;
        this.addMove(new MoveAction(this.contX, this.contY));
        break;
      case MoveConst.DOWN:
        this.contY--;
        this.addMove(new MoveAction(this.contX, this.contY));
        break;
      case MoveConst.RIGTH:
        this.contX++;
        this.addMove(new MoveAction(this.contX, this.contY));
        break;
      case MoveConst.LEFT:
        this.contX--;
        this.addMove(new MoveAction(this.contX, this.contY));
        break;
    }
  }

  // Add move action to list
  private addMove(mAction: MoveAction): void {
    if (!this.test(mAction)) {
      this.capturedPokemons++;
    }
      this.moveActions.push(new MoveAction(mAction.x, mAction.y));
  }

  // Search for equal value action 
  private test(value: MoveAction) {
    return this.moveActions.some(m => (m.x === value.x && m.y === value.y));
  }

  private clearValues() {
    this.moveActions = [new MoveAction(0, 0)];
    this.capturedPokemons = 1;
  }
}
