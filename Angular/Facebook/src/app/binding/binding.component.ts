import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
   name="Thanesh"
  myfun(){
    alert("HI You click the button")
  }
  xyz(user:any){
    alert("HI Just to check Mr "+user)
  }
  total=0;
  emi=0;
  intrest=0;
  cal(p:any,t:any,r:any){
   this.total=(p*t*r)/100;
   this.emi= this.total/t;
  }
  roi(event:any){
    console.log(event.target.value);
    if(event.target.value=='car'){
      this.intrest=10;
    }
    if(event.target.value=='home'){
      this.intrest=7;
    }
    if(event.target.value=='edu'){
      this.intrest=11;
    }
    if(event.target.value=='personal'){
      this.intrest=13;
    }  
  }
  op=false;
  myimg="../../assets/Nat1.jpg"
}
