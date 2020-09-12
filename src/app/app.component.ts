import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public completedTodos$: Observable<string[]>;
	public todos$: Observable<string[]>;

	public showTodoForm = false;

	constructor(
		private readonly _todoService: TodoService
	) {}

	public ngOnInit(): void {
		this.completedTodos$ = this._todoService.compeletedTodoList;
		this.todos$ = this._todoService.todoList;
	}

	public onTodoCompleted(index: number): void {
		this._todoService.completeTodo(index);
	}

	public onTodoFormSubmitted(description: string): void {
		this._todoService.addTodo(description);

		this.toggleTodoForm();
	}

	public onTodoRemovalRequested(index: number): void {
		this._todoService.removeTodo(index);
	}

	public toggleTodoForm(): void {
		this.showTodoForm = !this.showTodoForm;
	}
}