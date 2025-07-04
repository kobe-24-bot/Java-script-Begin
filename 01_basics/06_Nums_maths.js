const score=400

const balance= new Number(100)
console.log(balance)
console.log(score)

console.log(balance.toString().length)
console.log(balance.toFixed(2))  // values after decimal

const otherNum=23.8966;
console.log(otherNum.toPrecision(3))  //precise value upto the given number of digits

const hundreds=1000000;
console.log(hundreds.toLocaleString('en-IN')) //will show the value in indian standard or any other standard number system



//+++++++++++Maths++++++++//

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min)