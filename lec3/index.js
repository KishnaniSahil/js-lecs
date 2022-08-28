console.log("hello")

const masti=document.getElementById('first-title')
console.log(masti)

Array.from(masti).forEach(element => {console.log(element)});
// ye array return nai krta h hum explicitly isko array banaa reh h
 
const elemId=document.querySelector('#third-title')
console.log(elemId)

const elemtId=document.querySelector('title')
console.log(elemtId)
// query selectorAll  that returns the node list
const all=document.querySelectorAll('.title')
console.log(all)
all.forEach(val=>console.log(val))
const ft=document.querySelector('#first-title')
setTimeout(()=>ft.className="red",4000)
//idr jo red h wo html m class nai denge udr h n id first-title wo khud he smjega
const elemstn=document.querySelectorAll('h1')
elemstn[3].setAttribute('id','fourth-title')
//dynamically id add ki 
elemstn[3].setAttribute('class','title')
//dynamically class add ki 
elemstn[3].classList.add('red')
//dynamically id add ki 
// elemstn[3] if mujhe last element chahiye toh
// setTimeout(()=>{
//     elemstn[3].textContent='hello'
// },4000)
// setTimeout(()=>{
//     elemstn[3].innerHTML='<i>hello</i>'
// },4000)
// setTimeout(()=>{
//     document.body.innerHTML =" "
// },5000)
const clickbtn=document.querySelector('.clickbtn')
clickbtn.addEventListener('click',(e)=>
{
    const elemstn=document.querySelectorAll('h1')
    // elemstn[3].innerHTML='<i>hello</i>'
    console.log(e)
    console.log(e.target)
    console.log(e.target.textContent)

}
);
// const clickbttn=document.querySelector('.click2')
// clickbtn.addEventListener('click',(e)=>
// {
//     const ip=document.querySelector('#name')
//     // elemstn[3].innerHTML='<i>hello</i>'
//    console.log(ip.value)

// }
// );
const ip=document.querySelector('#name')
ip.addEventListener('change',(e)=>
{
    const para=document.querySelector('#para')
    para.innerHTML =e.target.value
})
// const ip=document.querySelector('#name')
// ip.addEventListener('input',(e)=>
// {
//     const para=document.querySelector('#para')
//     para.innerHTML =e.target.value
// })

