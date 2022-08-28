const prac=fetch('https://jsonplaceholder.typicode.com/posts')
console.log(prac)
prac.then((response)=>{
    console.log(prac)
    console.log(response)
   let sahil= response.json().then((res)=>{
    res.forEach((elem)=>{
        // console.log(elem)
        let van=elem.id
        let teach=elem.title
        let nobita=elem.userId
     console.log(van)

    //  const para=document.querySelector('.one')
     const para=document.createElement('p')
     para.textContent+=" "+van
     para.textContent+=" "+teach

     para.textContent+=" "+nobita
     document.body.append(para)
    })
    
   })
    // const para=document.querySelector('.one')
    // para.textContent=sahil
    

})