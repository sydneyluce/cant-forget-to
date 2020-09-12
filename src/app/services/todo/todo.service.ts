import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	private readonly _completedTodoListKey: string = 'completedTodoList';
	private readonly _todoListKey: string = 'todoList';

	private _completedTodoList: BehaviorSubject<string[]>;
	private _todoList: BehaviorSubject<string[]>;

	constructor() {
		this._completedTodoList = new BehaviorSubject(this._retrieveTodoListFromLocalStorage(this._completedTodoListKey));
		this._todoList = new BehaviorSubject(this._retrieveTodoListFromLocalStorage(this._todoListKey));
	}

	public get compeletedTodoList(): Observable<string[]> {
		return this._completedTodoList.asObservable();
	}

	public get todoList(): Observable<string[]> {
		return this._todoList.asObservable();
	}

	public addTodo(description: string): void {
		const updatedTodoList = [...this._todoList.value, description];

		this._todoList.next(updatedTodoList);

		this._updateTodoListInLocalStorage(this._todoListKey, updatedTodoList);
	}

	public completeTodo(index: number): void {
		const updatedCompletedTodoList = [...this._completedTodoList.value, this._todoList.value[index]];

		this._completedTodoList.next(updatedCompletedTodoList);

		this._updateTodoListInLocalStorage(this._completedTodoListKey, updatedCompletedTodoList);

		this.removeTodo(index);
	}

	public removeTodo(index: number): void {
		const updatedTodoList = [...this._todoList.value];

		updatedTodoList.splice(index, 1);

		this._todoList.next(updatedTodoList);
	
		this._updateTodoListInLocalStorage(this._todoListKey, updatedTodoList);
	}

	private _updateTodoListInLocalStorage(key: string, updatedTodoList: string[]): void {
		localStorage.setItem(key, btoa(JSON.stringify(updatedTodoList)));
	}

	private _retrieveTodoListFromLocalStorage(key: string): string[] {
		const serializedTodoList: string = localStorage.getItem(key);

		return serializedTodoList ? JSON.parse(atob(serializedTodoList)) : [];
	}
}
