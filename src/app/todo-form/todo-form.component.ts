import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
	public todoForm: FormGroup;

	@Output()
	public submitted: EventEmitter<string> = new EventEmitter<string>();

	@Output()
	public cancelled: EventEmitter<any> = new EventEmitter<any>();

	constructor() { }

	ngOnInit(): void {
		this.todoForm = new FormGroup({
			description: new FormControl(null, Validators.required)
		});
	}

	public submit(): void {
		this.submitted.emit(this.todoForm.value.description);
	}

	public cancel(): void {
		this.cancelled.emit();
	}
}
