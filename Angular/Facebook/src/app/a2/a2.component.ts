import { Component } from '@angular/core';
import { CommonServDemoService } from '../common-serv-demo.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {
  constructor(private db2:CommonServDemoService){}
  a2comp(){
    this.db2.dbcommonlogic();
    //console.log("Hi 100 lines of A2 commp ")
  }
}
