let score="33abc"

 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber=Number(score) //to convert the variable into a number type
 console.log(typeof valueInNumber); //this will give a number type
 console.log(valueInNumber); //this will give NaN i.e. Not a number
//following are the datatype conversions
 //"33"=>33
 //"33abc"=>NaN
 //true=>1;false=>0


 let isLoggedIn=1

 let booleanIsLoggedIn=Boolean(isLoggedIn);//to convert the variable into boolean type
 console.log(typeof booleanIsLoggedIn);
 
 console.log(booleanIsLoggedIn)
   /*Operations*/

   let value=3;
   let negValue=-value;
   console.log(negValue);

   console.log(2+2);
   console.log(2**2);//this is power 


   let str1="hello"
   let str2=" kushal"

   let str3=str1+str2;
   console.log(str3);


   //some confusions

   console.log("1"+2);
    console.log(1+2);
     console.log(1+"2");
      console.log("1"+2+2);//this will give 122
      console.log(1+2+"2");//this will give 32

      //if string is in first then the whole thing will be treated as a string
      //if normal number is there in first then first it will be treated as a number then string
       console.log(true);
       console.log(+true);
       console.log(+"");

       let num1,num2,num3
       num1=num2=num3=2+2;
       let gameCounter=100;
       gameCounter++;
       console.log(num1);
       console.log(gameCounter)