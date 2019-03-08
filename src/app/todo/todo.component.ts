import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo = new Todo ();
  todos: Todo [] = [];


  constructor() { }

  ngOnInit() {
  }

  // Methods

  save(todo: Todo){
    this.todos.push(todo);
    this.todo = new Todo();
    this.todos = Object.assign([], this.todos);
  }

  delete(todo: Todo){
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
