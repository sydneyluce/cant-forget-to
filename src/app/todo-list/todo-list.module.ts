import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
	CommonModule,
	MatButtonModule,
	MatIconModule,
	MatListModule,
  ],
  exports: [
	  TodoListComponent
  ]
})
export class TodoListModule { }
