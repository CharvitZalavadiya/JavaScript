const prompt=require('prompt-sync')()
// // Array            // arrayes are mutable
// let ary=[1,2,3,4,"Charvit"]
// console.log(ary)
// console.log(ary[1])
// console.log(ary[4])
// console.log(ary[5])         // It will give you undefined as answer
// console.log(ary.length)         // gives the length of array
// ary[5]=56           // adding a entity in array
// console.log(ary[5])         // now it will print 56 on index 5 in array ary
// ary[1]=99
// console.log(ary[1])         // changing the value of an array
// console.log(typeof ary)         // type of an array is object








// // Array Methods-1           in JS index numbers of an array doesn't have negative numbers as python have
// let ary=[9,8,7,6]

// let a=ary.toString()            // converting array into string
// console.log(a)

// let b=ary.join("-")         // joining the array elements with - sign and becomes a string
// let C=ary.join("!")         // joining the array elements with ! sign and becomes a string
// console.log(b)
// console.log(C)

// let d=ary.pop()         // removing an element from an array and returns the removed/popped element
// console.log(d)
// console.log(ary)            // updated array after removing an element

// let e=ary.push(123)         // adding an element 123 into array
// console.log(e)
// console.log(ary)            // updated array after pushing 123 element into array

// let f=ary.shift()           // popped an first element from array
// console.log(f)
// console.log(ary)            // updated array after removing first element from an array

// let g=ary.unshift(10)           // adds an element 10 at index 0
// console.log(g)
// console.log(ary)            // updated array after adding 10 at zeroth index

// delete ary[0]           // deleting 0 index element from array          delete is an operator its not an method         by using the delete operator the length of an array does not changes
// console.log(ary)            // after deleting one element updated array will show you like this ==> <1 empty item>










// Array Methods-2
// let ary1=[1,2,3]
// const ascend=(a,b)=>           // making a function that sort ary1 elements in ascending order
// {
//     return a-b
// }
// ary1.sort(ascend)          // ascending order of an array
// console.log(ary1)
// const descend=(a,b)=>           // making a function that sort ary1 elements in descending order
// {
//     return b-a
// }
// ary1.sort(descend)          // descending order of an array
// console.log(ary1)
// console.log(ary1.reverse())         // reversing an array

// let ary5=[1,2,3,4,5,6,7,8,9]
// ary5.splice(4,2,100,200,300,400,500)            // here 4 means start adding elements from index 4 , 2 means remove 2 elements including index 4 if I have written here 0 instead of 2 then it will not remove any element and simply add other elements to ary5 , after that all the numbers were written add them instead of that removed to element
// console.log(ary5)           // adding elements in array
// console.log(ary5.slice(5))          // for better understanding go to collage pyhton programs==>slicing of array
// console.log(ary5.slice(3,7)) ]

// let ary2=[4,5,6]
// let ary3=[7,8,9]
// let bigary=ary1.concat(ary2,ary3)           // combining ary1,ary2,ary3 in big ary          ary1,ary2,ary3 doen't change
// console.log(bigary)

// let ary4=[11,342,4552,251,85]
// ary4.sort()         // it sorts alphabetically and it modifies original array means ary4 will change after using this function
// console.log(ary4)           // slicing deosn't modifies array









// // Array loops
// let ary=[1,3,3452,552,78]
// for (let i=0;i<ary.length;i++)
// {
//     console.log(ary[i])
// }
// ary.forEach((entity)=>          // for each loop is used to do some operation in array
// {
//     console.log(entity+entity)
// })
// let name="Charvit"
// let ary1=Array.from(name)           // converting string into array             Array.from is used to creat an array from any other object
// console.log(ary1)
// for(let i of ary)           // for...of loop for an array
// {
//     console.log(i)          // it prints the value of array
// }
// for(let i in ary)           // for...in loop for an array           it gives keys of array (keys of array means index (0,1,2,3,..))
// {
//     console.log(i)          // if you write num[i] instead of i then it will print the elements of array
// }









// // Map, Filter, reduce in array
// let ary=[3,553,968,28]
// let a=ary.map((value,index,array)=>           // map() creats a new array after performing operations           map() doesn't modifies the array
// {
//     console.log(value,index,array)
//     return value+7          // adding 7 in each element of array and then returning it to 'a' which is new array
// })
// console.log(a)

// let b=ary.filter((b)=>          // filters an array with values that passes the test            filter deosn't modifies the array
// {
//     return b<600            // test (condition)
// })
// console.log(b)

// let c=ary.reduce((c1,c2)=>          // reduces an array into single value
// {
//     return c1+c2            // here it take 3+553=x then x+968=y then y+28=z and then z will be output
// })
// console.log(c)









// Practice set Q1
let ary=[1,2,3,4,5]
let a=prompt("Enter an a number :")
a=Number.parseInt(a)
ary.push(a)
console.log(ary)









// // Q2
// let ary=[1,2,3,4,5]
// let a
// do{
//     a=prompt("Enter an a number :")
//     a=Number.parseInt(a)
//     ary.push(a)
// }while(a!=0)
// console.log(ary)









// // Q3
// let ary=[10,15,20,25,30,35,40,45,50]
// let a=ary.filter((a)=>
// {
//     return a%10==0
// })
// console.log(a)









// // Q4
// let ary=[10,15,20,25,30,35,40,45,50]
// let a=ary.map((a)=>
// {
//     return a*a
// })
// console.log(a)









// // Q5
// let ary=[1,2,3,4,5,6]
// let a=ary.reduce((a1,a2)=>
// {
//     return a1*a2
// })
// console.log(a)