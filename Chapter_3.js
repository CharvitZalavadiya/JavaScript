const prompt=require('prompt-sync')()
// // For loop
// for(i=1;i<=5;i++)
// {
//     console.log(i)
// }






// // Finding factorial using for loop
// let c=1
// let a=prompt("Enter the value of a :")
// for(let i=1;i<=a;i++)
// {
//     c=c*i
// }
// console.log(c)






// For in loop (use to get only keys)
let marks=
{
    Charvit:90,
    Shiv:89,
    Dev:88,
    Tirth:87,
    Uttam:86
}
console.log(marks)

for (a in marks)
{
    console.log(a)         // here a gives keys in marks and marks[a] gives values for that particular key
    console.log(marks[a])
}






// // For of loop (use to get only values)
// for(a of "Charvit")
// {
//     console.log(a)          // Object must be itereble here it will print each character of Charvit saperatly
// }






// // Practice Set Q1
// let obj=
// {
//     harry:98,
//     rohan:70,
//     aakash:7
// }
// for(let i=0;i<Object.keys(obj).length;i++)          // here by using this syntax (Object.keys(obj).length) it goes into the obj block and all the enteries are stored in array and i is represents the index of array
// {
//     console.log(Object.keys(obj)[i])
//     console.log(Object.values(obj)[i])          // this line and next line both returns the same things (marks of each keys)
//     console.log(obj[Object.keys(obj)[i]])
//     console.log(i)          // Object.keys(obj) gives the array of the keys of obj
// }






// //Q2
// let obj=
// {
//     harry:98,
//     rohan:70,
//     aakash:7
// }
// for(i in obj)
// {
//     console.log(obj[i])
// }






// // Q3
// let cn=123
// let i
// let a=prompt("Enter the number... :")
// while(i!=123)
// {
//     i=prompt("Try again... :")
// }
// console.log("You have entered the correct number")






// //Q4
// const avg=(a,b,c,d,e)=>
// {
//     a=Number.parseInt(a)            // if you dont use Number.parseInt this function then it will take all the numbers in string and with ASCII value and then function will return the avg of ASCII value
//     b=Number.parseInt(b)
//     c=Number.parseInt(c)
//     d=Number.parseInt(d)
//     e=Number.parseInt(e)

//     return (a+b+c+d+e)/5
// }
// let a=prompt("Enter the value of a : ")
// let b=prompt("Enter the value of b : ")
// let c=prompt("Enter the value of c : ")
// let d=prompt("Enter the value of d : ")
// let e=prompt("Enter the value of e : ")

// console.log(avg(a,b,c,d,e))