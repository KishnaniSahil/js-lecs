document.querySelector("#xhr").addEventListener("click",()=>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend",()=>
    console.log("ended request with status ", xhr.status)
    
    );

    xhr.open("GET" , "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();

    console.log("started with the request");
});
const xhr = new XMLHttpRequest();

// xhr.addEventListener("loadend",()=>
// console.log("ended request with status ", xhr.status)

// );

xhr.open("GET" , "https://catfact.ninja/fact");
xhr.send();
console.log("ended request with status ", xhr.status)
