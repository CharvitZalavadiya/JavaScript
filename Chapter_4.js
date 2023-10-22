const prompt=require('prompt-sync')()
// // Strings           // Strings are immutable
// let name="Charvit"
// let myname='Charvit85684'           // Strings can be created with ' and " both
// console.log(name.length)            // Gives the length of name variable string
// console.log(myname)
// console.log(myname[0])          // myname[0] means the string stored in myname (Charvit) is stored as array and o index will print means C will be printed
// console.log(myname[5])






// // Templet literals
// let a1=`Charvit`         // Strings can be created with ` also
// let a2=`Arshil`
// let sentence=`${a1} is a friend of ${a2}`
// console.log(a1)
// console.log(a2)
// console.log(sentence)






// // Escape sequence characters
// let surname='zalavadi\'ya'          // It uses when the string is made with ' and \ is a escape character 
// let surname1="zalavadi\"ya" 
// console.log(surname)            // \n->new line     \t->tab     \r->carrige return(if zalavadi\rya is written the ya will take first two latters space and will print yalavadi)
// console.log(surname1)






// // String Functions          // when you use any method to string then original string doesn't change but in answer it gives a new string
// let name="Charvit Zalavadiya"
// console.log(name.toUpperCase())         // converts into capital letters
// console.log(name.toLowerCase())         // converts into small letters
// console.log(name.slice(3,5))         // for slice function access the Collage Python Lab --> Slicing of list program 
// console.log(name.slice(1))
// console.log(name.replace("Zalavadiya","Patel"))         // 1st entity is there in string and it should be replaced with 2nd entity
// let a=12345
// console.log(name.concat(" ",a))         // joints a in name
// let b="         qwerty         123"
// console.log(b)
// console.log(b.trim())           // removes the starting and ending spaces






// // Quick Quiz
// let name=" Charvit "+' Zalavadiya '          // printing string with the help of for loop
// for (let i=0;i<name.length;i++)
// {
//     console.log(name[i])
// }







// Practice set Q1
// ans==4






// Q2

// // The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate
// const sentence = "The quick brown fox jumps over the lazy dog"
// const word = "fox"
// console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`)         // Expected output: "The word "fox" is in the sentence"



// // The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate
// const str1 = "Saturday night plans"
// console.log(str1.startsWith("Sat"))            // Expected output: true
// console.log(str1.startsWith("Sat", 3))         // Expected output: false



// // The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate
// const str1 = "Cats are the best!"
// console.log(str1.endsWith("best!"))         // Expected output: true
// console.log(str1.endsWith("best", 17))          // Expected output: true
// const str2 = "Is this a question?"
// console.log(str2.endsWith("question"))         // Expected output: false






// // Q3
// let name="CHARVIT"
// console.log(name.toLowerCase())






// // Q4
// let a="please give rs 1000"
// console.log(a.slice(15))






// // Q5
// let name="Charvit"
// console.log(name.replace(name[3],"Patel"))