const num=[1,2,3,4,5]

for(const n of num){
    console.log(n)
}
//for of loop in js let use krna if incremment krna h toh
function print(param1)//normal fn
{
    console.log(`hi ${param1}`);//template string
    return 3;
}
 let returnedVariable=print(5)//expressiom fm
 console.warn(returnedVariable)//aisa kr sakte h js m

 const square=function(n){//anonymous fn
    return n*n
 }
 console.log(square(2))
 //anonymous function to store reference expression inside a function
//  btn.addEventListener('click',function(){
//     return 3;
//  })
 //arrow fn vvi
 const rect= n=> n*n;
 console.log(rect(5));

 //btn.addEventListener('click',()=>3)

 const cric=(x,y)=> x+y;
 console.log(cric('sahil','Kishnani'));// arrow function

 const power=(n,m)=> n**m;
 console.log(power(2,3));
 let arr=[5,2,1,2,5,3,2,27]
 sum=0;
 for(i=0;i<=arr.length-1;i++)
 {
    sum=sum+arr[i];
 }
 console.log(sum);
// function summm(arr)
// {
//     for(i=0;i<=arr.length;i++)
//     {
//         sum=sum+arr[i];
//     }
//     return sum
// }
// let returnedVariable=summm(arr)
//     console.log(returnedVariable)
// let rr=['sahil','kishnani']
// let s=''
// rr.forEach(element => {s+=element});
// console.warn(s)
// //ary=[]
// function ti(n){
//     return n*n;
// }
// function add(n){
//     return n+n;
// }
// function cube(n,callback){
//     return n* callback(n)
// }
// console.log(cube(5,ti))
// console.log(cube(6,add))
// function hello()
// {
//     console.log('mixout')
// }
// // setInterval(()=>console.log('hello'),1000)
// setTimeout(hello,3*1000)
// //var is for function and let is for that particular block
// //diff between var & let
// function checkScopes(){
//     let i=3
//     if(true){
//         var j=5;
//     }
//     console.log(j)
// }
// function checkScop(){
//     let i=3
//     if(true){
//         let i=5;
//         console.log(i)
//     }
//     console.log(i)
// }
// checkScopes()
// checkScop()
//const has also block scope
const x = function (a, b) {return a * b};
console.log( x(4, 3));//anonymous function function ka kuch name nai hota h usko variable m store kiya h fir wo variable se call kr reh h
let rr=[1,2,3,4]
// let rr=['sahil','kishnani']
let s=0;
rr.forEach(element => {s+=element});
console.warn(s)





