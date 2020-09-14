import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
	@Input()
	public description: string;

	@Input()
	public completed = false;

	@Output()
	public completeClicked: EventEmitter<any> = new EventEmitter();

	@Output()
	public deleteClicked: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	public onCompleteClicked(): void {
		this.completeClicked.emit();
	}

	public onDeleteClicked(): void {
		this.deleteClicked.emit();
	}
}
