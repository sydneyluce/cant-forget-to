import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
	@Input()
	public todos: Todo[] = [];

	@Output()
	public todoCompleted: EventEmitter<number> = new EventEmitter();

	@Output()
	public todoRemovalRequested: EventEmitter<number> = new EventEmitter<number>();

	constructor() { }

	ngOnInit(): void {
	}

	public completeTodoClicked(index: number): void {
		this.todoCompleted.emit(index);
	}

	public removeTodoClicked(index: number): void {
		this.todoRemovalRequested.emit(index);
	}
}
