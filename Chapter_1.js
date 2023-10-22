const prompt=require('prompt-sync')()
let a = prompt("Enter your age :")
if(a<15)
{
    console.log("You are not able to drive")
}
else if(a>=15 && a<18)
{
    console.log("You are able to drive a moped")
}
else
{
    console.log("You are able to drive every vehicle")
}






// let a=prompt("Enter the number :")          // To convert string into Integer
// a=Number.parseInt(a)            // For converting string into float use Number.parseFloat instead of Number.parseInt