import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GameMoveService } from 'src/app/core/service/game-move.service';
import { MoveConst } from 'src/app/core/const/move-const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted = false;
  homeForm: FormGroup;
  actionsList = [];
  constructor(
    private fb: FormBuilder,
    private gameMoveService: GameMoveService
  ) { }

  ngOnInit() {
    this.homeForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      inputValue: ['', [Validators.required, Validators.pattern(MoveConst.MOVIMENTS_PATTERN)]]
    });
  }

  ngSubmit(form: any) {
    this.submitted = true;
    if (!form.valid) {
      return;
    }
    const value = this.gameMoveService.startGame(form.value.inputValue);
    this.actionsList.push({ commands: form.value.inputValue, pokemons: value });
  }

}
