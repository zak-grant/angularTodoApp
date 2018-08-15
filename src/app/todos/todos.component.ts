import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  oldText;
  appState = 'default';
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this.todos = this._todoService.getTodos();
    this.checkForTodos();
  }

  addTodo() {
    let newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);

    this._todoService.addTodo(newTodo);
    this.appState = 'default';
  }

  deleteTodo(todoText) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == todoText) {
        this.todos.splice(i, 1);
      }
    }
    this._todoService.deleteTodo(todoText);
    this.checkForTodos();
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo() {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].text == this.oldText) {
        this.todos[i].text = this.text;
      }
    }

    this._todoService.updateTodo(this.oldText, this.text);
    this.appState = 'default';
    this.checkForTodos();
  }

  checkForTodos() {
    if (this.todos.length === 0) {
      this.appState = 'emptyList';
    }

    console.log(this.appState);
    console.log(this.todos.length);
  }
}
