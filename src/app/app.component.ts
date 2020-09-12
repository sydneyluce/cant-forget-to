import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public showTodoForm = false;

	public todoList = [
		"Walk dog",
		"Walk cat",
		"Walk snake"
	];

	public completedTodoList = [];

	public ngOnInit(): void {}

	public onTodoCompleted(index: number): void {
		const completedTodo = this.todoList[index];

		this.completedTodoList.push(completedTodo);

		this._removeTodo(index);
	}

	public onTodoFormSubmitted(description: string): void {
		this.todoList.push(description);

		this.toggleTodoForm();
	}

	public onTodoRemovalRequested(index: number): void {
		this._removeTodo(index);
	}

	public toggleTodoForm(): void {
		this.showTodoForm = !this.showTodoForm;
	}

	private _removeTodo(index: number): void {
		this.todoList.splice(index, 1);
	}
}