import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Todo } from '../../models/todo.interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	private _todos: BehaviorSubject<Todo[]>;

	constructor(
		@Inject(PLATFORM_ID) private _platform
	) {
		if (isPlatformBrowser(this._platform)) {
			this._todos = new BehaviorSubject<Todo[]>(this._retrieveTodosFromLocalStorage());
		}
	}

	public get todos(): Observable<Todo[]> {
		return this._todos.asObservable();
	}

	public addTodo(description: string): void {
		const updatedTodos: Todo[] = [...this._todos.value, {description, completed: false}];

		this._todos.next(updatedTodos);

		this._updateTodosInLocalStorage(updatedTodos);
	}

	public completeTodo(index: number): void {
		const updatedTodos = [...this._todos.value];

		updatedTodos[index] = {...updatedTodos[index], completed: true}

		this._todos.next(updatedTodos);

		this._updateTodosInLocalStorage(updatedTodos);
	}

	public removeTodo(index: number): void {
		const updatedTodos = [...this._todos.value];

		updatedTodos.splice(index, 1);

		this._todos.next(updatedTodos);
	
		this._updateTodosInLocalStorage(updatedTodos);
	}

	private _updateTodosInLocalStorage(updatedTodos: Todo[]): void {
		localStorage.setItem('todos', btoa(JSON.stringify(updatedTodos)));
	}

	private _retrieveTodosFromLocalStorage(): Todo[] {
		const serializedTodos: string = localStorage.getItem('todos');

		return serializedTodos ? JSON.parse(atob(serializedTodos)) : [];
	}
}
