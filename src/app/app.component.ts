import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { TodoService } from './services/todo/todo.service';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.interface';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public todos$: Observable<Todo[]>;

	public showTodoForm = false;

	constructor(
		private readonly _todoService: TodoService,
		@Inject(PLATFORM_ID) private _platoform
	) {}

	public ngOnInit(): void {
		if (isPlatformBrowser(this._platoform)) {
			this.todos$ = this._todoService.todos;
		} 
	}

	public onTodoCompleteClicked(index: number): void {
		this._todoService.completeTodo(index);
	}

	public onTodoFormSubmitted(description: string): void {
		this._todoService.addTodo(description);

		this.toggleTodoForm();
	}

	public onTodoDeleteClicked(index: number): void {
		this._todoService.removeTodo(index);
	}

	public toggleTodoForm(): void {
		this.showTodoForm = !this.showTodoForm;
	}
}