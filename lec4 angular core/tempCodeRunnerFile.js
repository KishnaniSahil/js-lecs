document.querySelector("#xhr").addEventListener("click",()=>{
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend",()=>
    console.log("ended request with status ", xhr.status)
    );

    xhr.open("GET" , "https://api.coindesk.com/v1/bpi/currentprice.json");
    xhr.send();

    console.log("started with the request");
});
function fetchUser(result,callback1){
    result+=1;
    console.log(result)
    callback1(result)
}
function fetchSupervisor(result,callback2)
{
    result+=2;
    console.log(result)
    callback2(result)
}
function fetchprofile(result,callback3)
{
    result+=3;
    callback3(result)
}
function callOperation(){
    fetchUser(1,(result)=>{
        fetchSupervisor(result,(result)=>{
            fetchprofile(result,(result)=>{
                console.log(result)
            })
        })

    })
}
callOperation()