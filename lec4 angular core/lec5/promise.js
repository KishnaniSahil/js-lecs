function func1()
{
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>{
            const error=true;
            if(!error)
            {
                console.log("yo bro resolved")
                resolve()
            }
            else{
                console.log("sorry bro not resolved")
                reject("sorry bro bad")
            }

        },2000)
    })
}
func1().then(function(){
    console.log("congrats on resolving")
})
.catch(function(error){
    console.log("hhaha try harder"+" " + error)
})