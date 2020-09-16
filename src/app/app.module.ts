import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { TodoFormModule } from './todo-form/todo-form.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
	BrowserAnimationsModule,
	MatButtonModule,
	MatCardModule,
	MatIconModule,
	MatToolbarModule,
	TodoFormModule,
	TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
