import { Injectable } from '@angular/core';

//引入http服务
import { HttpClient } from '@angular/common/http';

interface Car{
    id:string,
    des:string
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  tod:any;
  url:string = 'http://localhost:53000/todo';

  //初始化数据
  getTodos(){
      // const todos = [
      //     {id: 1,hobby: "看书",isClick: false},
      //     {id: 2,hobby: "玩游戏",isClick: false},
      //     {id: 3,hobby: "听音乐",isClick: false}
      // ];
    // this.tod = [
    //     {id: 1,hobby: "看书",isClick: false},
    //     {id: 2,hobby: "玩游戏",isClick: false},
    //     {id: 3,hobby: "听音乐",isClick: false}
    // ];
    //   this.tod = todos;
    // return todos;

      // return this.http.get(this.url);
      return this.http.get('/mongodb/find')
  }

  //添加一条数据
    addTodo(e){
        // this.tod.push({
        //     id:this.tod.length === 0 ?1:this.tod[this.tod.length - 1].id + 1,
        //     hobby:e,
        //     isClick:false,
        // });

        //通过服务添加一条数据
        return this.http.post(`${this.url}`,{'hobby':`${e}`,'isClick':true});

    }


    //删除一条数据
    delTodo(id){
      //此方法不可用，tod和todos指向的不是同一个内存地址,因为它返回了一个新的数组
        // this.tod = this.tod.filter((e)=>{
        //     return e.id !== id;
        // })

        //采用不该变内存地址的方法
        // for(var i = 0;i<this.tod.length;i++){
        //     if(this.tod[i].id === id){
        //         this.tod.splice(i,1);
        //         break;
        //     }
        // }

        //通过服务删除一条数据
                return this.http.delete(`${this.url}/${id}`);
    }


    //改变数据状态
    changeTodoState(ele){
        // this.tod.forEach((e)=>{
        //     if(ele.id === e.id){
        //         e.isClick = !e.isClick;
        //     }
        // })

        //通过服务改变数据
        return this.http.patch(`${this.url}/${ele.id}`,{"isClick":!ele.isClick});
    }




    // getMongodb(){
    //   return this.http.get('/mongodb/find');
    // }
}
