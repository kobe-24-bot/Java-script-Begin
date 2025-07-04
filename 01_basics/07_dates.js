let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myDting=new Date(2025,9,27) //(year,month,date)

console.log(myDting.toDateString())
let myCreated=new Date("09-27-2025") // MM-DD-YY
console.log(myCreated.toLocaleString())
let myTimeStamp=Date.now()

console.log(myTimeStamp)
console.log(myCreated.getTime())
console.log(Math.floor(Date.now()/1000))
console.log(Date.now().toLocaleString())


let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
  //with month starting from 0
  console.log(newDate.toLocaleString())
  console.log(newDate.toDateString())