import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor() { }

    //提供车子数据
    getCar(){
        return [
            {
                id:'1',
                des:"这是宝马",
            },
            {
                id:'2',
                des:"这是奔驰",
            },
            {
                id:'3',
                des:"这是夸克",
            }
        ];
    }
}
