import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input()todos:any;
  constructor() { }

  ngOnInit(): void {
  }
  deleteTodo(id:number){
    this.todos.splice(id,1)
  }

}
