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

const tinderUser=new Object() //singleton object
//const tinder={}  // non singleton object

tinderUser.id="1234r"
tinderUser.isLoggedIn=false;
tinderUser.name="kushalshaw"

 //console.log(tinderUser)

 const regularUser={
    email:"taniashaw",
    fullname:{
        userfullname:{
            firstname:"atul",
            lastname:"kumar"
        }
    }
 }
 console.log(regularUser.fullname?.userfullname.firstname)
 /*
 just access all nested objects using (.) operator
 */
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
 //const obj3=Object.assign({},obj1,obj2) //merging objects
 //console.log(obj3)

 const obj3={...obj1,...obj2};
 console.log(obj3)

 console.log(Object.keys(obj1))  //all keys get stored in way of array
 console.log(Object.values(tinderUser))

 console.log(Object.entries(tinderUser))  //[[key,value],[key2,value2]]