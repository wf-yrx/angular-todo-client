import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-un-exit',
  templateUrl: './un-exit.component.html',
  styleUrls: ['./un-exit.component.less']
})
export class UnExitComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    const timer = setInterval(()=>{
      this.s--;
      if(this.s === 0){
          this.router.navigate(['/home']);
           clearInterval(timer);
      }
    },1000);
  }

  s:number = 5;

}
