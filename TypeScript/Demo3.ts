class Demo3
{
    constructor(id :any, name : string ,age:number , pan ?:string,desig="GET")
    {
        console.log("ID :"+id);
        console.log("Name :"+name);
        console.log("Age : "+age);
        console.log("PAN : "+pan)
        console.log("Desig :"+desig)
    }
}
var d3= new Demo3(100,"Thanesh",35,"ABCD1234","Dev");
var d4= new Demo3("TCS100","Thanesh",35,"ABCD1234");
var d5= new Demo3("TCS200","Ramesh",25);