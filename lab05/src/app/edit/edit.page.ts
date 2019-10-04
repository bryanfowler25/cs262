import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private todo: Todo;

  constructor() { 

    this.todo = {
      id: 0,
      title: '',
      description: ''
    };

  }

  ngOnInit() {
    // grab id from route
  }

  saveTodo(){

  }
}
