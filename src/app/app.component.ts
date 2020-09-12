import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public showNewTodoForm = false;
	public todoForm: FormGroup;

	public todoList = [
		"Walk dog",
		"Walk cat",
		"Walk snake"
	];

	public completedTodoList = [];

	public ngOnInit(): void {
		this.todoForm = new FormGroup({
			description: new FormControl(null, Validators.required)
		});
	}


	public addTodo(): void {
		this.todoList.push( this.todoForm.value.description);

		this.toggleTodoForm();
	}

	public onTodoCompleted(index: number): void {
		const completedTodo = this.todoList[index];

		this.completedTodoList.push(completedTodo);

		this.removeTodo(index);
	}

	public removeTodo(index: number): void {
		this.todoList.splice(index, 1);
	}

	public toggleTodoForm(): void {
		this.todoForm.reset();

		this.showNewTodoForm = !this.showNewTodoForm;
	}
}