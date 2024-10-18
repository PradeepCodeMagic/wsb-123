// // let a=12

// // let b="hello"


// // console.log(a)
// // console.log(b)

// let x=[11,22,33,44,55,66,77,88,"ws","jodhpur"]

// for(let a in x){
//     console.log(a)
// }
// for(let a of x){
//     console.log(a)
// }

// x.map((v,i)=>{
//     console.log(v,i)
// })

// console.log("filter stat")
// x.filter((v,i)=>{
//     if(v%2==0){
//         console.log(v)
//     }
//     else{
//         console.log("no......")
//     }
// })

//////////////////////////////////////////////////////////////

// let userObj={
//     name:"ws",
//     age:25,
//     location:"jodhpur",
//     number:1234567890
// }

// let copyObject={...userObj}
// console.log(copyObject)

// copyObject.age=55
// console.log(copyObject)

//////////////////////////////////////////////////////////////

// let a=[11,22,33,44,55,66]
// let b=["ws","kk","pp","zz"]


// console.log(b.concat(a))
// console.log([].concat(a,b))

// console.log([...a,...b])

///////////////////////////////////////////////////////////////////////////////////


// import {data} from './ws.js'
// import {ws} from './ws.js'
// import jodhpur from "./ws.js"
// import {jaipur} from "./ws.js"

// console.log(data)
// console.log(ws)
// console.log(jodhpur)
// console.log(jaipur)

let myData=require('./ws.js')

console.log(myData)
