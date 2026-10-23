// const employee={
//     catch(){
//         console.log("employee catches");
//     }
// }
// const employee2={
//     match(){
//         console.log("Now emplyee is Matched");
//     }
// }
// employee2.__proto__=employee;

// class ToyoytaCar{
//     start(){
//         console("Car is Started");
//     }
//     stop(){
//         console.log("Car is Stopped!!!");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }

// const fortuner = new ToyoytaCar;
// const lexus = new ToyoytaCar;

//Practice - 01

// class User{
//     constructor(name ,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("My Name ",this.name);
//         console.log("My Email ",this.email);
//     }
// }
// const obj1=new User("Sahil","sahilalvi769@gmail.com");
// const obj2=new User("Rihan","rihanalvi2553@gmail.com");

// obj1.viewData();
// obj2.viewData();

// Practice - 02
// Qs creates a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("My Name ",this.name);
//         console.log("My Email ",this.email);
//     }
// }
// class Admin extends User{
//     editData(name,email){
//         this.name=name;
//         this.email=email;
//     }
// }

// const obj1=new User("Sahil","sahilalvi769@gmail.com");
// const adm1=new Admin();
// adm1.editData("Rihan","rihanalvi2553@gmail.com",obj1);
// obj1.viewData();
//try and catch
// let a=10;
// try{
//     let b=parseInt(prompt("Enter the value of b : "));
//     if(b===0){
//         throw "b is invalid";
//     }
//     else{
//         console.log(a/b);
//     }
// }
// catch(err){
//     console.log(err);
// }

