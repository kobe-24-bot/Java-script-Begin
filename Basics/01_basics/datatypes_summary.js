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