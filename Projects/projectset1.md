#Project Related To DOM

##project1
```javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',function(e){
  console.log(e)
  console.log(e.target)
  if(e.target.id==='grey')
  {
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='white')
  {
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='yellow')
  {
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='blue')
  {
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='purple')
  {
    body.style.backgroundColor=e.target.id;
  }
  })
})


```

##Project2 solution
```javascript
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height===''||height<0||isNaN(height)){
  results.innerHTML=`Please give a valid height ${height}`
  }
  else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML=`<span>Results are ${bmi}</span>`
   if(bmi<18.6){
    function addLanguage(langname){
      const li= document.createElement('p');
      li.innerHTML=langname;
      document.querySelector('#results').appendChild(li);
   }
   addLanguage("underweight")
   }
   if(bmi>29.6){
    function addLanguage(langname){
      const li= document.createElement('p');
      li.innerHTML=langname;
      document.querySelector('#results').appendChild(li);
   }
     addLanguage("overweight")
   }
  }
  

})
                


```

##Project3
```JavaScript
const clock=document.querySelector('#clock')



setInterval(function(){
  let date=new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString()
  
},1000)
```

##Project4
```javascript
let randomNumber=(parseInt(Math.random()*100+1));
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const slots=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')

let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
  const guess= parseInt(userInput.value)
  validateGuess(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess<1){
    alert('please enter a valid number greater than 1')
  }
  else if(guess>100){
    alert('please enter a valid number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over.Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guessed it right`);
    endGame()

  }
  else if(guess<randomNumber){
    displayMessage(`Number is too low`)
  }
  else if(guess>randomNumber){
    displayMessage(`Number is too high`)
  }
}

function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function displayGuess(guess){
userInput.value="";
slots.innerHTML+=`${guess}, `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}

function newGame(){
   const newGameButton=document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(e){
     randomNumber=(parseInt(Math.random()*100+1));
     prevGuess=[]
     numGuess=1
     slots.innerHTML=""
     remaining.innerHTML=`${11-numGuess}`;
     userInput.removeAttribute('disabled')
     startOver.removeChild(p)
     playGame=true;
   })
}
function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<button id="newGame">Start New Game</button>';
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

```

##Project4 solution
```Javascript
console.log('Project 5');
const insert=document.getElementById('insert')
 window.addEventListener('keydown',(e)=>{
   insert.innerHTML=`
   <div class="color">
   <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.Keycode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>

   </div>
   `
 })

```

