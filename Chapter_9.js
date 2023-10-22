// // 52 Introduction to Callbacks 
// console.log("Synchronous hello")            // Synchronous Program
// console.log("Synchronous hii")
// console.log("Async Program start")            // Asynchronous Program
// setTimeout(function()
// {
//     console.log("Async line")
// },2000)
// console.log("Async Program end")

// Callbacks
// function loadscript(src,callback)
// {
//     var script=document.createElement("script")
//     script.src=src
//     script.onload=function()
//     {
//         console.log("src ==> ", src)
//         callback()
//     }
//     script.onerror=function()           // it works as try , catch , finally like if there is a link which does not exist then it will throw an error so this function will catch that error and will show that there is an error
//     {
//         console.log("Error with the script src ==> ", src)
//     }
//     document.body.appendChild(script)
// }
// loadscript("https://youtube.com",f1)
// loadscript("https://gmailiidgnb.com",f2)
// function f1()
// {
//     alert("youtube loaded")
// }
// function f2()
// {
//     alert("gmail loaded")
// }









// 53 Callback Hell & Pyramid of Doom









// // 54 Introduction to Promises
// let promise=new Promise(function(resolve,reject)
// {
//     alert("this is promise alert")
//     resolve(34)
// })
// console.log("hello")
// setTimeout(function()
// {
//     console.log("hello after 1000ms")
// }, 1000)
// console.log("I'm Charvit Zalavadiya")
// console.log(promise)









// // 55 Promise .then() and .catch()
// let p1=new Promise((resolve,reject)=>
// {
//     console.log("pending promise 1")
//     setTimeout(()=>
//     {
//         console.log("promise 1 fulfilled")
//         resolve(true)

//         // console.log("promise rejected")
//         // reject(new Error("this is an error"))
//     }, 3000)
// })
// let p2=new Promise((resolve,reject)=>
// {
//     console.log("pending promise 2")
//     setTimeout(()=>
//     {
//         // console.log("promise fulfilled")
//         // resolve(true)

//         console.log("promise 2 rejected")
//         reject(new Error("this is an error from promise 2"))
//     }, 3000)
// })
// p1.then((value)=>
// {
//     console.log("msg from .then()",value)
// })
// p2.then((value)=>
// {
//     console.log(value)
// })
// p2.catch((error)=>
// {
//     console.log("msg from .catch() error in promise 2")
// })









// // 56 Promise Chaining .then() calls
// let p1=new Promise((resolve, reject) => {
//     setTimeout(()=>
//     {
//         console.log("resolve after 1sec")
//         resolve("this is resolved sentence and printed using p1.then() function")
//     }, 1000)
// })
// p1.then((value)=>
// {
//     console.log(value)
//     let p2=new Promise((resolve, reject) => {
//         console.log("this is promise 2")
//     })
// }).then((value)=>
// {
//     console.log("p2 printed after the p1 promise completed")
// })









// // 57 Attaching Multiple Handlers to a Promise
// let p1=new Promise((resolve, reject) => {
//     console.log("unresolved promise")
//     setTimeout(() => {
//         resolve(5)
//     }, 2000)
// })
// p1.then((value)=>
// {
//     console.log("promise resolved after 2sec",value)            // both p1.then() run at same time but which one is written uppar will exicute first here it is this line statement
// })
// p1.then(()=>
// {
//     console.log("2nd line that shows that p1 is resolved")
// })









// // 58 The Promise API
// let p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 1")
//     },1000)
// })

// let p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 2")
//     },1500)
// })

// let p3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 3")
//     },1900)
// })

// let p4= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("value 4")
//         // reject(new Error("It's an error !!"))
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })

// let all_p=Promise.all([p1,p2,p3,p4])           // to show all the promises at same time after they all resolved
// all_p.then((value)=>{                       // this will creat an array which will store all the values of promises p1, p2, p3
//     console.log(value)                      // when there is no error in all promises then only it will work
// })

// let all_p_set=Promise.allSettled([p1,p2,p3,p4])         // solution of Promise.all problem
// all_p_set.then((value)=>{
//     console.log(value)
// })

// let all_p_race=Promise.race([p1,p2,p3,p4])         // the promise which resolve the first it will show it's value
// all_p_race.then((value)=>{                         // any one of them promise rejected then it will show error
//     console.log(value)
// })

// let all_p_any=Promise.any([p1,p2,p3,p4])         // solution of race
// all_p_any.then((value)=>{
//     console.log(value)
// })

// let all_p_resolve=Promise.resolve(14)         // it resolve all the promises
// all_p_resolve.then((value)=>{
//     console.log(value)
// })









// // 59 Async / Await
// async function abc(){                               // two or more async function and other functions and varoables exicutes parallely
//     let p1=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('1000')
//         },1000)
//     })
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('1500')
//         },1500)
//     })

//     // p1.then(console.log)
//     // p2.then(console.log)

//     let p11=await p1            // program will exicute from line 262 till p1 promise been fulfilled
//     let p22=await p2            // await stops the program exicution till the promise been fulfilled
//     return [p11,p22]
// }
// let a=abc()
// console.log(a)









// // 60 Error handling
// setTimeout(()=>{
//     console.log("sentence 1")
// },1000)

// try{
//     console.log(abc)            // it's an error
// }

// catch(error){
//     console.log("error found")
// }

// setTimeout(()=>{
//     console.log("sentence 2")
// },1500)

// setTimeout(()=>{
//     console.log("sentence 3")
// },2000)

// setTimeout(()=>{
//     console.log("sentence 4")
// },2500)

// setTimeout(()=>{
//     console.log("sentence 5")
// },3000)









// // 61 The Error Object & Custom Errors
// try{
//     // console.log(abc)            // it's an error
//     throw new Error(" HIi there !!")            // custom error
// }

// catch(error){
//     console.log(error)
//     console.log("Error name : ",error.name)
//     console.log("Error message : ",error.message)
//     console.log("Error stack : ",error.stack)
// }









// // 62 The Finally Clause
// try{
//     console.log(abc)            // it's an error
// }

// catch(error){
//     console.log("this is an error")
//     console.log(q)
// }

// finally{            // if there is an error in catch also then finally works as well as when there is error in try also then also finally will work
//     console.log("finally statement")            // finally will always work
//}