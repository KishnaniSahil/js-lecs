// function calcy(event)
// {
//     if(event.key=='1')
//     {
//        const chu= document.getElementById("text").value+=event.key
//         console.log(chu)
//     }
// }
// function dis(val) {
//     const chib=document.getElementById("text").value += val
//     console.log(chib)
// }
const button1=Array.from(document.getElementsByClassName('buttons'))
const display=document.querySelector('input')
let string=" "
console.log(button1)
button1.map(buttons=>{
    buttons.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case'C':
                 string=""
                 display.value=string
                 break;
            case '=':
                string=eval(string)
                display.value=string
                break;
            default:
                string+=e.target.innerText
                display.value=string

        }
        
        // console.log("clicked")
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerText)
    })

})
