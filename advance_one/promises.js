const promise1= new Promise(function(resolve,reject){
    //Do an Async task
    //DB calls,cryptography,network calls
    setTimeout(function(){
        console.log('Async task done')
       resolve() //resolve the promise
    },1000)
})

promise1.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 done');
        resolve();
    },1000)
})
.then(function(){ //first call resolve then call .then
    console.log('Promise 2 resolved');
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"kushal@okay.com"}) //the paramter from resolve is an argument of .then(function())
    },1000)
})

promise3.then(function(user){
  console.log(user.username)
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"kushal",password:"123"})
        }
        else{
            reject("ErrorSomething went wrong")
        }
    },1000)

})
promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((myuser)=>{
    console.log(myuser);
}).catch(function(err){
    console.log(err);
})

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }
        else{
            reject("Error:Chal chal went wrong")
        }
    },1000)
});
 async function consumePromise5(){
  const response=await promise5;
  console.log(response);
 }
 consumePromise5()

 /*async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json();
    console.log(data);
    }catch(error){
        console.log("error")
    }
}
 getAllUsers();*/

 fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json();
 }).then((data)=>{
    console.log(data)
 }).catch((error)=>console.log("Error fetching data"))
 