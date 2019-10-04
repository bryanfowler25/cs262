import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public todos: Todo[] = [];

  constructor() { }

  load(){

  }

  save(){

  }

  getTodo(id){

  }

  addTodo(todo){

  }
}
