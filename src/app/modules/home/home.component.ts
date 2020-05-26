import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GameMoveService } from 'src/app/core/service/game-move.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  submitted = false;
  homeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private gameMoveService: GameMoveService
  ) { }

  ngOnInit() {
    this.homeForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      imputValue: ['', Validators.required]
    });
  }

  ngSubmit(form: any) {
    this.submitted = true;
    if (!form.valid) {
      return;
    }


  }

}
