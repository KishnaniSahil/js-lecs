const promiseResponse=fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
console.log(promiseResponse)
promiseResponse.then((response)=>{
    console.log(promiseResponse)
    console.log(response)

})