import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() {
    this.todos = [{
      id: 0,
      title: 'hello title',
      description: 'hello description'
    }];
   }

  load(){

  }

  save(){

  }

  getTodo(id){

  }

  addTodo(todo){

  }
}
