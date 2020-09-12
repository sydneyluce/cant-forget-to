import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TodoFormComponent } from './todo-form.component';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [
	CommonModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule
  ],
  exports: [
	  TodoFormComponent
  ]
})
export class TodoFormModule { }
