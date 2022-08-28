const submitGuess =document.querySelector('.guessSubmit')
const guessField=document.querySelector('.guessField') 
const lastGuesses=document.querySelector('.guesses')
const displayMessage=document.querySelector('.lastResult')
const mess=document.querySelector('.lowOrHi')
// const random=document.getElementById("demo").innerHTML =
let randmNo
function randomNumber()
{
    return Math.floor((Math.random())*100)+1;
}
randmNo=randomNumber();
let guessCount=1;
console.log(randmNo)
// Math.floor(Math.random() * 100)+1;
// const ip=document.querySelector('#name')
// guessField.addEventListener('change',(e)=>
// {
//     const guesses=document.querySelector('.guesses')
//     guesses.innerHTML =e.target.value
// })

submitGuess.addEventListener('click',()=>{
// console.log(guessField.value)
const inputvalue=guessField.value;
if(guessCount===1){
    lastGuesses.textContent='Your last guesses:';
}
lastGuesses.textContent+=' '+inputvalue;
console.log(randmNo)
if(randmNo==inputvalue)
{
    displayMessage.textContent="congratulationss"
    displayMessage.style.backgroundColor ="green"
}
if(guessCount==10)
{
    guessField.disable=true;
    submitGuess.disable=true;
}
else if(inputvalue<randmNo)
{
    mess.textContent="toolow"
    // mess.style.backgroundColor ="red"
}
else if(inputvalue>randmNo)
{
    mess.textContent="toohigh"
    // mess.style.backgroundColor ="red"
}
guessField.value='';
guessField.focus();
guessCount+=1;
})