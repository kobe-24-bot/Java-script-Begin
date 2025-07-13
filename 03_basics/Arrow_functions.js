const user={
    username:"kushal",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this) //it gives current context
    } //this=>refers to current context

}
user.welcomeMessage()
user.username="atul"
user.welcomeMessage()
console.log(this) //this will refer to empty context,since no global object is there
/*but in browser the global 
object is window object*/

function chai(){
    console.log(this)
}
chai()

//Arrow Function
const arrow= () =>{
  let username="kushal"
  console.log(username)

}
arrow()

//Implicit return
//const addTwo=(num1,num2)=>num1+num2 //no return keyword
const addTwo=(num1,num2)=>({username:"kushal"})  //returning argument
console.log(addTwo(5,6))