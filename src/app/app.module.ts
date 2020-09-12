import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TodoFormModule } from './todo-form/todo-form.module';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
	ReactiveFormsModule,
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatInputModule,
	MatFormFieldModule,
	MatToolbarModule,
	TodoFormModule,
	TodoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
