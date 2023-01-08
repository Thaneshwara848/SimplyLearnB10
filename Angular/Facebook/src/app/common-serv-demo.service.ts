import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServDemoService {

  constructor() { }
  dbcommonlogic(){
    console.log("Hi 100 lines with Serice ")
  }
  emp=[
    {
      "id":100,
      "name":"Thanesh",
      "age":25,
      "salary":50000,
      "desig":"Developer"
    },
    {
      "id":200,
      "name":"Ganesh",
      "age":45,
      "salary":40000,
      "desig":"Clerk"
    },
    {
      "id":300,
      "name":"Ramesh",
      "age":25,
      "salary":50000,
      "desig":"Developer"
    },
    {
      "id":400,
      "name":"Suresh",
      "age":25,
      "salary":50000,
      "desig":"Developer"
    },
  ]
}
