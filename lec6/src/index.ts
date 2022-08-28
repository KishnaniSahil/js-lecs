// let x;
// x="Sahil"
// let x:any[]=[1,2,3,4]
// x[0]='sahil'
//let x=5 here ts will recognize it as number datatype
//but when we do let x; here its of type any means any is datatype
// let x:{
//     name:string
//     rollno?:number
// } = {
//     name:"priya"
// }
// x.rollno=12
// //question mark isliye use krte h ki wo optional h number datatype dusra b ho skta h
// console.log(x)
// console.log(typeof x)
// function add(x:number,y:number):number{
//     return x+y;
// }
// console.log(add(5,10)) 
// function check(x?:String )
// {
//     if(x?.toLowerCase)
//     {
//         return "hi"
//     }
//     return "x"
// }
// function check(x?:String)
// {
//     if(x?.toLowerCase)
//     {
        

//     }
// }
// let arr=[1,2,3]
// const [elem1,elem2]=arr
// console.log(elem1,elem2)
// const rectangle={width:20,height:35,area:200}
// let{width,height,area}=rectangle
// console.log(rectangle)

// let arr1=[32,4,56]
// let arr2=[...arr1]
// arr2[2]=0
// console.log(arr1,arr2)
//Spread operator
// const rectangle={
//     width:200,
//     height:150,
//     area:100,
//     inobj:{
//         name:"Sahil"

//     }
// }
// const rectangle2={
//     ...rectangle
// }
// console.log(rectangle,rectangle2)
// rectangle2.height=280
// rectangle2.inobj.name="Sagar"
//REST operator
// const numarray=[1,2,3,4,5]
// let [num1,num2,...r]=numarray
// console.log(num1,num2,r)
// function hello(...args : String[]){
// console.log(args)
// }
// hello("1")
const dbvalue={
    name:"Sahil",
    Std:21,
    hushaar:"bht"
}
const laporte={
    name:"Almycier",
    profession:"Footballer",
    rated:"overrated j2"
}
const premierleague={
    ...laporte,
...dbvalue,

check:"extra"
}
console.log(premierleague)