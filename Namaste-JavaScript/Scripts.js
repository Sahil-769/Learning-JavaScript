// console.log("Hello");
// setTimeout(() => {
//     setTimeout(() => {
//         console.log("Inner Timeout");
//     }, 0);
//     console.log("Outer Timeout");
// }, 4000);
// console.log("Sahil");
// setTimeout(() => {
//     console.log("Bhai mujhe to bhool hi gaye");
// }, 4000);

const arr=[5,1,3,2,6,89];
function double(x){
    return x*x;
}
function binary(x){
    return x.toString(2);
}
// console.log(arr.map(binary));
// console.log(arr.map((x)=>{
//     return x*x;
// }));
// console.log(arr.filter((x)=>{
//     return x%2==0;
// }))
// console.log(arr.reduce((acc,x)=>{
//     acc=acc+x;
//     return (acc);
// },0)); 
// const output = arr.reduce((acc,x)=>{
//     acc=acc>x?acc:x;
//     return acc; 
// },0);
// by sir
// const output = arr.reduce((max,x)=>{
//     if(x>max){
//         max=x;
//     }
//     return max; 
// },0);
// console.log(output);
const users=[
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"deepika",lastName:"padukone",age:26},
];

// list of full names;

// const output =  users.map((x)=>{
//     return (x.firstName);
// });
const output=users.filter((x)=> x.age < 30).map((x)=>x.firstName);
console.log(output);