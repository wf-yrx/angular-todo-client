import { Component, OnInit } from '@angular/core';

//获取路由传参的服务
import { ActivatedRoute} from '@angular/router';

import { ChildService } from '../child/child.service';

interface Car{
  id:string,
  des:string
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class ChildComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ChildService) { }

    carType:string;
    // car:Car[] = [
    //     {
    //         id:'1',
    //         des:"这是宝马",
    //     },
    //     {
    //         id:'2',
    //         des:"这是奔驰",
    //     },
    //     {
    //         id:'3',
    //         des:"这是夸克",
    //     }
    // ];
    car:Car[];
  ngOnInit() {
    this.car = this.service.getCar();
    this.route.paramMap.subscribe(param=>{
        const id = param.get("id");
        for(let i = 0;i<this.car.length;i++){
          if(this.car[i].id === id){
            this.carType = this.car[i].des;
          }
        }
    });
  }

}
