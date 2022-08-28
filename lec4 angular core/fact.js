// let arr=[1,2,3,4,5]
// function factorial(arr)

// {
//     let fact=1;
//     for(i=0;i<arr.length;i++)
//     {
        
//         fact=fact*i;
//     }
//     console.log(fact);
// }
const textbox1=document.querySelector('.one')
// console.log(input)
// let type=input.value;
//console.log(textbox1);

const submitGuess=document.querySelector('.submitGuess')
submitGuess.addEventListener('click',(e)=>{
    let fact=1;
    for(let i=textbox1.value;i>=1;i--)
    {
        fact=fact*i;
    }
    console.log(fact)
    const para=document.querySelector('.demo')
    para.textContent=fact
})
// const submitGuess=document.querySelector('.submitGuess')
// let fact=1;
// function myfact(type)
// {
//     for(i=0;i<type;i++)
//     {
//     if(type==0 || type==1)
//     {
//         return 1;
//     }
//     else{
//         fact=fact*i;
//     }
// }
// }


// submitGuess.addEventListener('click',()=> {
//     myfact()
//      console.log(fact)
// })
   
