// array

const myArr=[0,1,3,4,5,true,"kushal"] 
/*
1->in javascript we can have mix elements
of DIFFERENT datatypes
2-> In javascript when we copy an array 
we make its shallow copy i.e.they share the same rerference
Any change to the original or copy will change the original also
*/

const myHeroes=["krish","thor"]

const myArr2=new Array(1,2,3,4);  //onr more way to declare arr
//console.log(myArr[4]);

myArr.push(6);   //to add values
console.log(myArr)
console.log(myArr.pop()); //just like Stacks in Java,LAST IN FIRST OUT
  console.log(myArr)

  myArr.unshift(12) //adds in front shifting all elements behind
  console.log(myArr)
  console.log(myArr.shift()) //removes from front

  console.log(myArr.includes(3)) //gives true or false
  console.log(myArr.indexOf("kushal"))

  const newArr=myArr.join()//converts to string and joins
  
  console.log(myArr)
  console.log(newArr)
  console.log(typeof newArr)

  //slice,splice

  console.log("A",myArr)

  const myN=myArr.slice(1,3)  //startIndex,endIndex(exclusive)
console.log(myN)
  console.log("B",myArr)
  const myN2=myArr.splice(1,3)
  console.log("C",myArr)
  console.log(myN2)  
  /*
  The difference betweem SLICE(),&SPLICE() is that the endIndex is exclusive 
  slice but not in splice and also when we splice the 
  original array changes and all elements which we splice comes
  off.
  *./