import { Component, OnInit ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.less']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todoHobby:string = '';

  @Output()
  add = new EventEmitter();

  addTodo(){
      this.add.emit(this.todoHobby);
      this.todoHobby = '';
  }
}
