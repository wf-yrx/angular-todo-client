import {Component, OnInit, Input, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   @Input()
   todo:any

    trackByTodo(index,todo){
        return todo.id;
    }

    @Output()
    del = new EventEmitter<string>();

    @Output()
    change = new EventEmitter<object>();


    delData(id){
      this.del.emit(id);
    }


    changeState(ele){
      this.change.emit(ele);
    }
}
