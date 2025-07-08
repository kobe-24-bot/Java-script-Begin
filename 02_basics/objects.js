// singleton 
//Object.create


// object literals
const mySym=Symbol("key1")


const JsUser={
    name:"Kushal",  //things like name,email,age are originally as"name","age"
    age:18,
    [mySym]:"mykey1",
    "full name":"kushal shaw",
    location: "kolkata",
    email:"shawlushak",
    isLoggedIn:false,
    lastLogin:["Monday","Saturday"],
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])
JsUser["email"]="kushaljs"  //to change value
console.log(JsUser["email"])
 //Object.freeze(JsUser)  //no further changes will propagate
console.log(JsUser)

//functions
JsUser.greeting=function(){
    console.log(`hello kushal ${this.name}`)  //to get any variable from that object
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())