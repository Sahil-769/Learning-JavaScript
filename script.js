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
// const ProdA rr=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });

// console.log("The array is : ",arr);
// console.log("The array Sum is : ",SumArr);
// console.log("The array Multiplication is : ",ProdArr);

//Lecture - 06

// console.log("Hello forks!!!");
// let firstP=document.getElementById('p');
// setTimeout(() => {
//     firstP.innerHTML="Hello my name is Sahil";
// }, 2000);

// let h2=document.querySelector("h1");
// h2.innerText=h2.innerText+" from Apna College students "; //concatenate the two strings

// let dives=document.querySelectorAll(".box");
// console.dir(dives);
// for(let i=0;i<dives.length;i++){
//     dives[i].innerText="Box " +(i+1);
// }

//Lec - 07
// let div = document.querySelector("div");
// let id = div.getAttribute("class");
// console.log(div);
// console.log(id);
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));
// para.style.backgroundColor="gray";

// let newHeading = document.createElement("h1");
// newHeading.innerHTML="<i><b>Hi, I am new!</b></i>";

// document.querySelector("body").prepend(newHeading);

//H.W - read more about appendChild() and removeChild()
// Q1 create a new button element. 
// let newButton = document.createElement("button");
// newButton.innerHTML="click me"
// newButton.setAttribute("class","clickBtn");
// document.querySelector("body").prepend(newButton);
// Q2 
// let newpara=document.createElement("p");
// newpara.innerHTML="Hello this is a new paragraph";
// document.querySelector("body").prepend(newpara);
// newpara.classList.add("p2")
// newpara.classList.add("p1")

// Lecture - 08
// Events // script.js has higher priority the the inline javascript in html tags
// the change in the state of an object is known as an Event
let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// btn1.onclick=(e)=>{
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

let div = document.querySelector("div");
// div.onmouseover = ()=>{
//     console.log("you are inside div");
// }
// const handler3=()=>{
//     console.log("Button was CLicked - handler 3");
// }
// btn1.addEventListener("click",(e)=>{
//     console.log("Button was CLicked - handler1");
// })
// btn1.addEventListener("click",()=>{
//     console.log("Button was CLicked - handler 2");
// })
// btn1.addEventListener("click",handler3)
// btn1.addEventListener("click",()=>{
//     console.log("Button was CLicked - handler 4");
// })
// btn1.removeEventListener("click",handler3)
// let modes=document.getElementById("mode").value;
// console.log(modes);
// let modeName=document.querySelector(".mode-description");
// modeName.innerHTML=modes;
// let cnt=document.querySelector(".count");
// let CountVal = parseInt(cnt.textContent);
// const increaseCount=()=>{
//     CountVal+=1;
//     cnt.innerText=CountVal;
// }
// const decreaseCount=()=>{
//     CountVal-=1;
//     cnt.innerText=CountVal;
// }
// const reset=()=>{
//     CountVal=0;
//     cnt.innerHTML=CountVal;
// }

const modebtn = () => {
    let modes = document.querySelector(".modes");
    
    // Toggle between light-mode and dark-mode classes on the button
    modes.classList.toggle("dark-mode");
    modes.classList.toggle("light-mode");
    
    // Toggle button text and page background
    if (modes.innerText.includes("Dark")) {
        modes.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "black";
    } else {
        modes.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "white";
    }
}