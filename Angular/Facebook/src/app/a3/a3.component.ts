import { Component } from '@angular/core';
import { CommonServDemoService } from '../common-serv-demo.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {

  constructor(private db3:CommonServDemoService){}
  a3comp(){
    this.db3.dbcommonlogic();
   // console.log("Hi A3 comp with 100 lines of code ")
  }
}
