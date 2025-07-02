// Primitive

// 7 types: String,Number,Boolean,Null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false;
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id===anotherId)
//Symbol() gives uniqueness

const bigNumber=3637337772722727272n;//BigInt represent (n) in last
// Reference (non primitive)

//Arrays,Objects,Functions

const heroes=["shaktiman","krish","bichchu"]; //array
let myObj={
    name:"Kushal",
    age:20,
} //object


const myFunction=function(){
    console.log("Hello world")
}
console.log(typeof bigNumber)

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/





//++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive),Heap Memory(Non primitive)
//stack=>copy of the original variable
//heap=>we get the reference of original value,any modifications will change the original value also


let myYouTubename="kushalshawyt.com"

let anotherName=myYouTubename;
anotherName="shawkushal"
console.log(myYouTubename)
console.log(anotherName)

//value dont change because a copy is passed as they are primitive

let user1={
    email:"shaw",
    upi:"kushal"
}

let user2=user1;

user2.email="kushal24252";
 console.log(user1.email)
 console.log(user2.email)

 //both the value changes because both are objects and hence non-primitive