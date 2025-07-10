
/*let a=10;

const b=20;

var c=30;*/

if(true){
let a=10;

const b=20;

var c=30;
}
 //console.log(a) =>Gives error(cannot be accessed outside block)
 //console.log(b)=>Gives error(cannot be accessed)
 console.log(c) //can be accessed

 /*
 var=>Global scope,function scope (if declared inside a function)
 let=>block scope
 const=>block scope
 */

 //Nested scope

 function one(){
    const username="Kushal"

    function two(){
      const website="youtube"
      console.log(username)
    }
    //console.log(website) //cannot be accessed
    two()
 }
 one()

 if(true){
    const username="kushal"
    if(username==="kushal"){
        const website="shaw"
        console.log(username+website)
    }
    console.log(username)
    //console.log(website)=>cannot be accessed
 }

 //+++++++++++interesting++++++++++++//

 function addone(num){
   return num+1;
 }
 console.log(addone(5))

 const addTwo=function(num){ //expression
    return num+2;
 }
 console.log(addTwo(5))