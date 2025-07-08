const name="Kushal"
const reCount=50

//console.log(name+reCount+"shaw");

console.log(`Hello my name is ${name} and my repo count is ${reCount}`)

const gameName=new String('kushal-shaw-ok') //object invoke


console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('t'))

const newString=gameName.substring(0,4); //with last being exclusive
console.log(newString)




const newName="     kushal      "
console.log(newName.trim());
console.log(newName);

const url="kushalshaw30@-20"
console.log(url.replace('kushal','dhrub'))

console.log(gameName.split("-")) //.split=>string to array with reference to a sperator present

const anotherString=gameName.slice(-16,8); //length+startIndex,endIndex
console.log(anotherString)
const gameName11 = new String('hiteshhc')
const anotherString1= gameName11.slice(-8, 4)
console.log(anotherString1);