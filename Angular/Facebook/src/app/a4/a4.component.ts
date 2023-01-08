import { Component, OnInit } from '@angular/core';
import { CommonServDemoService } from '../common-serv-demo.service';

@Component({
  selector: 'app-a4',
  templateUrl: './a4.component.html',
  styleUrls: ['./a4.component.css']
})
export class A4Component implements OnInit{
  myemp:any=[];
  constructor(private serv:CommonServDemoService){}
  ngOnInit(): void {
   this.myemp =this.serv.emp;
  }

}
