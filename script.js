// Lecture 02

// let num=prompt("Enter the Number: ");
// if(90<=num<=100){
//     alert("Your grade is A");
// }
// else if(70<=num<=89){
//     alert("Your grade is B");
// }
// else if(60<=num<=69){
//     alert("Your grade is C");
// } 
// else if(50<=num<=59){
//     alert("Your grade is D");
// }
// else if(0<=num<=49){
//     alert("Your grade is F");
// }

// Lecture 03

// let c=0;
// function sahil(){
//     for(let i=0;i<5;i++){
//         console.log("Hello Sahil alvi",i);   
//     }
// }
// let str = "SahilCollege";
// let size=0;
// for (const i of str) {
//     console.log(i);
// }

// let student = {
//     name:"Rahul Kumar",
//     age:20,
//     cgpa:7.5,
//     isPass:true
// };

// for (let i in  student) {
//     console.log(student[i]);
// }
// console.log("string size = ",size);
// // sahil();
// // console.log("Loop 2 ");
// // sahil();
// for(let i=1;i<=100;i++){
//     if(i%2==0)
//         console.log(i);
// }

// let gameNumber=3;
// while(true){
//     let num=prompt("Enter the number to guess : ");
//     if(num==gameNumber){
//         alert("You Guessed number is correct , You won the match ✅");
//         break;
//     }

// }

// let str="sAhIlAlVi769@GmaiL.cOm";
// console.log(str.toLowerCase())

// let name=prompt("Enter your name : ");
// let userName=`@${name}${name.length}`;
// alert(`Your username is ${userName}`);


// let nums1=[10,20,30,40,50];
// let nums2=["sahil","alvi",10,2,80,40,60];
// // for (let index = 0; index < nums2.length; index++) {
// //     console.log(nums2[index]);
// // }
// for(const key in nums2){
//     console.log(nums2[key]);
// }

// console.log(nums2[2+4]);
// console.log(s);
// console.log(nums1.length);
// console.log(nums2);

// Lecture 04
// let arr=[85,97,44,37,76,60];
// let sum=0;
// for (let index = 0; index < arr.length; index++) {
//     sum+=arr[index];
// }
// console.log(sum/arr.length);

// let price=[250,645,300,900,50];
// console.log("Original Price : ",price);

// for (let i = 0; i < price.length; i++) {
//     price[i] -= price[i]*0.1;
// }
// console.log("Price After 10% OFF : ",price);

// let foodItems=["potato","apple","litchi","tomato"];
// foodItems.unshift("COCONUT");//add this is in first place
// foodItems.push("chips","paneers");
// foodItems.pop();
// console.log(foodItems.shift());
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(foodItems.slice(1,2));// given a part of a array does not make changes in final array
// console.log(foodItems.splice(2,2,0)); // make changes in the original array (startIdx, delete, new element)
//console.log(arr.splice(4)) => means delete all the element after the index 4 


// let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log("Original Company : ",comp);
// comp.shift();
// console.log("After Removing the first Company : ",comp);
// comp.splice(1,1,"Ola");
// console.log("After replacing the Uber with Ola : ",comp);
// comp.push("Amazone");
// console.log("After Adding the Amazone at Last : ",comp);
//Lecture - 05
// function sahil(){
//     console.log("Sahil is called !!!");
// }
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// }
// const arrowMulti = (a,b)=>{
//     console.log(a*b);
// }
// arrowMulti(3,4);
// const printHello = ()=>{
//     console.log("Hello");
// }
// function CountVowel1(a){
//     let cntVowel=0;
//     for (let i=0;i<a.length;i++) {
//         if(a[i] == 'a' || a[i]=='e' || a[i]=='i'|| a[i]=='o'|| a[i]=='u'){
//             cntVowel++;
//         }
//     }
//     return cntVowel;
// }
// const CountVowel = (a)=>{
//     let cntVowel=0;
//     for (let i=0;i<a.length;i++) {
//         if(a[i] == 'a' || a[i]=='e' || a[i]=='i'|| a[i]=='o'|| a[i]=='u'){
//             cntVowel++;
//         }
//     }
//     return cntVowel;
// }
// console.log("By arrow function : ",CountVowel("sahil"));
// console.log("By function keyword : ",CountVowel1("sahil alvi"));

//For Each
//when we want to perform task for a all elements present in it 
// let arr = [1, 2, 3, 4, 5];
//it is a higher order function (are those which takes function as a parameter or return the function)
// arr.forEach((val) => {
//     console.log(val);
// });

// let arr=[1,2,3,4,5,6];
// arr.forEach((val)=>{ normally jabh kuch calculation kerni ho or kuch print karana ho
//     console.log(val*val);
// })

//map => create a new array with the results of some operation
// let nums=[67,52,39];
// let newArr=nums.map((val)=>{  // new array create kernawith help of existing array
//     return val%2==0;
// });
// console.log(newArr);

//filter = creates a new array of elements that give true for a constion 
//eg : all even elements

// let ans=nums.filter((val)=>{
//     return val%2==0;
// });
// console.log(ans);
//reduce = performs some operations & reduces the array to a single value. it returns that single value.
// let nums=[67,52,39];
// const output=nums.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(output);

// let marks=[100,58,96,74,51,99,45,33,98];
// let marksGret90=marks.filter((val)=>{
//     return val>90;
// });
// console.log(marksGret90);

// let n=prompt("Enter the number : ");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr.push(i);
// };
// const SumArr=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// const ProdArr=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });

// console.log("The array is : ",arr);
// console.log("The array Sum is : ",SumArr);
// console.log("The array Multiplication is : ",ProdArr);