// function one()
// {
//     document.querySelector("#xhr").addEventListener("click",()=>{
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("loadend",()=>
//         console.log("ended request with status ", xhr.status)
//         );
    
//         xhr.open("GET" , "https://api.coindesk.com/v1/bpi/currentprice.json");
//         xhr.send();
    
//         console.log("started with the request");
//     });
// }
// function two()
// {
    
//         const xhr = new XMLHttpRequest();
        
    
//         xhr.open("GET" , "https://catfact.ninja/fact");
//         xhr.send();
    
        
    
// }
// function calloperation()
// {
//     one()
//     two()
    
// }
// calloperation()
// question how to priortize which call shd be called when 
const start=document.querySelector('#xhr')

function startrequest()
{
    const xhr=new XMLHttpRequest();
    xhr.addEventListener('loadend',()=>{
        console.log('ended with cat file')
       const  xhr2=new XMLHttpRequest();
       xhr2.addEventListener('loadend',()=>{
        console.log('end with 2nd api file')
       })
       xhr2.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json')
       xhr2.send()
       console.log('start with 2nd file')
    })
    xhr.open('GET','https://catfact.ninja/fact')
    xhr.send()
    console.log('started with cat file')
    

}
start.addEventListener('click',startrequest)
const promiseResponse=fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
console.log(promiseResponse)
// promiseResponse.then((response)=>{
//     console.log(promiseResponse)
//     console.log(response)
//    response.json().then((res)=>console.log(res))
// })
promiseResponse
.then((response)=>{
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    console.log('inside then')
    return response.json()
})

.then((result)=>console.log(result))
.catch((error)=>console.log("error",error));
// promise chaining 


function returnPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(5),4000)
    })
}
const obj=returnPromise();
console.log(obj);
obj.then((result)=>console.log(result))

