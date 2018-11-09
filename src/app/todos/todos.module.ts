import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';

//响应式表单的使用
import { FormsModule } from '@angular/forms';



//引入路由模块
import { RouterModule,Routes } from '@angular/router';
import { UnExitComponent } from './un-exit/un-exit.component';

const routes: Routes= [
    // {
    //     path:'about',
    //     component:TodoComponent,
    //     children:[
    //         {
    //             path:'child',
    //             component:ChildComponent
    //         }
    //     ]
    // }
];

@NgModule({
    declarations: [TodoComponent, TodoHeaderComponent, TodoListComponent, HomeComponent, ChildComponent, UnExitComponent],
    // declarations: [TodoHeaderComponent, TodoListComponent, HomeComponent],
    imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  // exports:[TodoComponent], //一个模块使用另外一个模块需要在另外一个模块中导出，如果是路由，那么就在路由上配对相应的组件即可，无需导出
})
export class TodosModule { }
