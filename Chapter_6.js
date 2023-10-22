// const prompt=require('prompt-sync')()


// // JS in Browser            // Advantage of using separate script file using src attribute of script tag 
// console.log("Hello everyone !")
// let a=prompt("Enter the number a : ")
// console.log("your number a is : ",a)
// let b=prompt("Enter the number b : ")
// console.log("your number b is : ",b)
// a=Number.parseInt(a)
// b=Number.parseInt(b)
// console.log("Total of a and b is ",a+b)









// // JS console Object
// console.log(console)            // it gives different console attributes one of them is .log and etc

// console.error("It's an error")

// console.assert(10>20)           // it will throw an error because assertion is wrong 10!>20
// console.assert(20>10)           // it will not throw an error because assertion is right 20>10

// console.clear()         // it will clearthe console and will print Console was cleared

// let obj=
// {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// }
// console.table(obj)          // it will create a table using the keys annd values of obj

// console.warn("You should not do that !!")           // it will create a warning

// console.info("Here is your information")            // .log and .info both are same but the different is that by using .info the sentance will be catagorise in info part

// console.time("time taken by while loop to be exicuted")
// let i=0
// while(i<10)
// {
//     console.log(i)
//     i++
// }
// console.timeEnd("time taken by while loop to be exicuted")         // it show the time taken to do the proccess between .time and .timeEnd sentence









// // Alert, Prompt, Confirm
// alert("How are you??")          // gives pop-up alert

// let a=prompt("Enter the value of a : ")         // to get the input from user           it always take input as string if you want to take input as number then you have to change the type of it with the help of Number.parseInt() function
// let b=prompt("Enter the value of b : ","Enter number here...")          // here "Enter number here..." is works as a placeholder means when pop-up for b will come it will already printed
// document.write(a,"\t")           // it write in the page not in console
// document.write(b)

// let c=prompt("Enter your age : ",'18')
// let d=confirm("Are you agree to write your age in webpage??")           // to confirm the step that user has taken
// if(d)
// {
//     document.write(c)
// }
// else
// {
//     document.write("You have not given the permission to write your age in webpage")
// }









// BOM, DOM
console.log(window)         // gives the list of all windows functions
console.log(document)         // it's a JS representation of HTML code which is shown in Element Part of Browser
document.body.style.background="black"









// // Practice set Q1, Q2 and Q3
// let c=prompt("Enter your age : ",'18')
// let d=confirm("let's check you can drive or not??")           // to confirm the step that user has taken
// if(d)
// {
//     if(c>18)
//     {
//         document.write("Your age is ",c," so you can drive")
//     }
//     else if(c<0)
//     {
//         console.error("Invalid Age")
//     }
//     else
//     {
//         document.write("Your age is ",c," so you can not drive")
//     }
// }
// else
// {
//     document.write("You have not given the permission to write your age in webpage")
// }









// // Q4
// let a=prompt("Enter the greater number than 4 to redirect to google : ")
// if(a>4)
// {
//     location.href="https://www.google.com"
// }
// else
// {
//     console.log("You have not entered the number greater than 4")
// }









// Q5
// let a=prompt("Enter the color you want to be your background : ")
// document.body.style.background=a