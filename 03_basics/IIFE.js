//Immediately Invoked Function Variable(IIFE)
/*many times there are problem for global scope 
pollution,thereforee we use IIFE to counter that
*/

(function chai(){
    //named IIFE
    console.log(`DB connected`)
})();

//()=>defination,()=>execution
//(write the function)(execute)

((name)=>{
    //unnamed IIFE
    console.log(`Ok connection $(name)`)
})("kushal");

((num1)=>{
    console.log(`the value is ${num1}`)
})(20); //semicolon is necessary to terminate context



