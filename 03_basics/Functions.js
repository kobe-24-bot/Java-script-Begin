//Functions=>Package of code

//syntax=>function function_name(){} 
function sayMyName(){
    console.log("K")
    console.log("u")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("l")
}//here sayMyName is the reference and sayMyName() is execution

sayMyName() //to execute the function 

/*function addTwoNumbers(number1,number2){ 
    console.log(number1+number2)
}*///NO RETURN 
addTwoNumbers(6,4)
//addTwoNumbers(6,"k")


function addTwoNumbers(number1,number2){
     let result=number1+number2;
     return result;  //terminating line
}
const result=addTwoNumbers(10,20);
console.log(result)

function loginUser(username){
    if(!username){ //if we don't send any arguments then it shows undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser()) //undefined argument passed
console.log(loginUser("Kushal"))

//if we don't have how many parameters will be there
function calculateCarPrice(...num1){ //...=>rest operator
   return num1;
}
console.log(calculateCarPrice(200,400,500))

const user={
    username:"kushal",
    price:200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user) //passings object as argument
handleObject({
    username:"kush",
    price:5000
}) //passing object as argument directly

//Arrays in functions
const Array=[200,800,100]

function ArrayFun(getArr){
    return getArr[1]
}
console.log(ArrayFun(Array))
console.log(ArrayFun([200,300,400]))