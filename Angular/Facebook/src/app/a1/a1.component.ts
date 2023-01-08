import { Component } from '@angular/core';
import { CommonServDemoService } from '../common-serv-demo.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {

  constructor(private db1:CommonServDemoService){}
  a1comp(){
    this.db1.dbcommonlogic();
   // console.log("100 lines of code in comp")
  }
}
