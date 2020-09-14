import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent],
  imports: [
	CommonModule,
	MatButtonModule,
	MatIconModule
  ],
  exports: [
	  TodoComponent
  ]
})
export class TodoModule { }
