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
console.log(loginUser())
console.log(loginUser("Kushal"))
