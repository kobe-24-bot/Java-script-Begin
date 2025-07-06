const Marvel=["thor","ironman","hulk"];
const dc=["superman","wonderwoman","darkseid"];
 //Marvel.push(dc);  //array takes a whole array as element
 //console.log(Marvel)

 const arr=Marvel.concat(dc); //does not change the original array
 console.log(arr);

 const all=[...Marvel,...dc];
 console.log(all);

 const anotherArr=[1,2,3,[4,5,6],7,[6,7,[5,8]]]

 let real=anotherArr.flat(Infinity)
 console.log(real)
  