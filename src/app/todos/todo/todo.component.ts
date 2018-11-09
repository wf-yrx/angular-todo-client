import { Component, OnInit } from '@angular/core';

import { TodosService } from '../todos.service'

//引入http服务,应该在服务中引入，在服务中发送接口请求
// import { HttpClient } from '@angular/common/http';

interface Todo{
    id:number,
    hobby:string,
    isClick:boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
})


export class TodoComponent implements OnInit {
  // constructor(private todosService:TodosService,private http:HttpClient) { }
    constructor(private todosService:TodosService) { }

  todo:any;

  ngOnInit() {
      // this.todo = this.todosService.getTodos();
      // //应该在服务中发送请求，组件中用于接受数据,并渲染
      // this.http.get('../../assets/2.json').subscribe((res)=>{
      //     console.log(res);
      // })


      //组件用于接受服务http请求返回的数据
      this.todosService.getTodos().subscribe((res)=>{
          this.todo = res;
      })


      // this.todosService.getMongodb().subscribe(res=>{
      //     console.log(res);
      // })
  }



  //提供元数据data
  // todo:Todo[] = [
  //     {id: 1,hobby: "看书",isClick: false},
  //     {id: 2,hobby: "玩游戏",isClick: false},
  //     {id: 3,hobby: "听音乐",isClick: false}
  //     ];

  // //添加一条数据
  //   addTodo(e){
  //       this.todo.push({
  //          id:this.todo.length === 0 ?1:this.todo[this.todo.length - 1].id + 1,
  //          hobby:e,
  //          isClick:false,
  //       });
  //   }
    addTodo(e){
      // this.todosService.addTodo(e);


        //服务
        this.todosService.addTodo(e).subscribe((res)=>{
            // this.todo.push(res);
            this.todosService.getTodos().subscribe((res)=>{
                this.todo = res;
            })
        })
    }


    // //删除一条数据
    // delTodo(id){
    //     this.todo = this.todo.filter((e)=>{
    //         return e.id !== id;
    //     })
    // }
    delTodo(id){
      // this.todosService.delTodo(id);


        //服务
        this.todosService.delTodo(id).subscribe(res=>{
            const index:number = this.todo.findIndex(ele=>{
                return ele.id === id;
            })
            this.todo.splice(index,1);

        });

    }


    // //改变数据状态
    // changeTodoState(ele){
    //     this.todo.forEach((e)=>{
    //         if(ele.id === e.id){
    //             e.isClick = !e.isClick;
    //         }
    //     })
    // }

    changeTodoState(ele){
      this.todosService.changeTodoState(ele).subscribe((res:Todo)=>{
          ele.isClick = res.isClick;
      });
    }
}
