import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeTableListComponent } from './components/home-table-list/home-table-list.component';


@NgModule({
  declarations: [HomeComponent, HomeTableListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
