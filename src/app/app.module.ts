import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TodosModule } from './todos/todos.module';


//引入http客户端模块
import { HttpClientModule } from '@angular/common/http';


//引入路由模块
import { RouterModule,Routes } from '@angular/router';

//引入组件
import { TodoComponent } from './todos/todo/todo.component';
import { HomeComponent } from './todos/home/home.component';

//引入子组件
import { ChildComponent } from './todos/child/child.component'


//引入404页面
import { UnExitComponent }from './todos/un-exit/un-exit.component'

//定义路由
const routes:Routes  = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:TodoComponent,
        children:[
            {
                path:'child/:id',
                component:ChildComponent
            }
        ]
    },
    {
        path:'**',
        component:UnExitComponent,
    }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
