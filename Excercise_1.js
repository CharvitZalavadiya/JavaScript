const prompt=require('prompt-sync')()


// Excercise 1
let random=Math.floor(Math.random() * 100)
random=Number.parseInt(random)
let a
do
{
    a=prompt("Enter the number : ")
    if (a>random)
    {
        console.log("Plz enter the smaller number : ")
    }
    else if(a<random)
    {
        console.log("Plz enter the bigger number : ")
    }
    else
    {
        console.log("You have entered the correct number !!!")
    }
}while(a!=random)