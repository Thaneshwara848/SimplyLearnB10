import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonServDemoService } from '../common-serv-demo.service';

@Component({
  selector: 'app-a4',
  templateUrl: './a4.component.html',
  styleUrls: ['./a4.component.css']
})
export class A4Component implements OnInit,OnDestroy{
  myemp:any=[];
  constructor(private serv:CommonServDemoService){}
 
  // getEmp(){
  //   this.myemp =this.serv.emp;
  // }
  ngOnInit(): void {
   this.myemp =this.serv.emp;
  }

  ngOnDestroy(): void {
   // close the connection 
  }

}
