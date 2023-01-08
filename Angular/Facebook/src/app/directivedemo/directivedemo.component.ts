import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {

op= true;
fruits= ["Apple","Banana","Cherry"];


addFruit(fname:any){
  this.fruits.push(fname);
}
}
