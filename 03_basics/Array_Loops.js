// for of

const arr=[1,2,3,4,5]
for(const num of arr){  //for of Loops through iterable objects like arrays,strings,etc.
    console.log(num);
}

//Maps

const myMap=new Map();
myMap.set("name","Kushal");
myMap.set("age",20);
myMap.set("isLoggedIn",true);
myMap.set("email","kushalshaw");

    console.log(myMap);
    for(const [key,value]of myMap){
        console.log(key,'=>',value)
        console.log(myMap.get("email"));
    }
    
    //objects are not iterable in this way
    //For In loops=>we get the keys of objects
    const user={
        js:"JavaScript",
        py:"Python",
        rb:"Ruby",
        c:"C++"
    }
    for(const key in user){
        console.log(`${key} is for ${user[key]}`)
    }
    const b=[1,2,3,4,5]
for(const num in b){ 
      console.log(num);//we get the keys(index) and not values
     console.log(b[num]); //here we get the values

}

//filter method
const myNums=[1,2,3,4,5,6,7,8,9,10];

/*let newNums=myNums.filter((nums)=>nums>5)//(here nums>5 is the condition)
console.log(newNums); //filter returns a new array with elements that pass the test implemented by the provided function
filter only return those which satisfy the conditions
*/
let newNums=[]; //to store the filtered values

//For each
myNums.forEach((num)=>{
   if(num>5){
    newNums.push(num);
   }
}); //forEach executes a provided function once for each array element, but does not return a new array
 console.log(newNums)

 //const newNums=myNums.map((nums)=>nums+10)
 //console.log(newNums); //map creates a new array with the results of calling a provided function on every element in the calling array



 //CHAINING


 /*const newNums=myNums
                  .map((num)=>num*10)
                 .map((num)=>num+5)
                 */
//REDUCE 
const ku=[1,2,3,4,5,6,7,8,9,10];
const myArr=ku.reduce((accumulator,currentValue)=>{
 console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
 return accumulator+currentValue},0 )//reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value

console.log(myArr); //0 is the initial value of accumulator
