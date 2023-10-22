// 01 DOM

// document.documentElement gives the HTML code in console
// document.head gives the head element of the code like wise moore...
// typeof document.title is string but typeof document.documentElement is object







// // 02 Children

// // head and body are children of html and they both are siblings
// // like wise meta, title, link are siblings and children of head
// // like wise script, p, div, ...  are siblings and children of body
// // like wise span and p are siblings and children of div
// console.log(document.body.firstChild)           // this both are text node means free space in html code I've keep space after body tag open
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)           // all child nodes it looks like an array but not an array it's a collection of child nodes
// let ary=Array.from(document.body.childNodes)            // this converts childnodes into array at above line it was nodelist but after this variable ary means array of childnodes
// console.log(ary)









// // 03 DOM collections          // this part of code only works when there is 3 <div> tags available and body tag has no color

// // DOM collections are read only
// // head is the left sibling of body and body is the right sibling of the head and html is the parent of the head and body
// console.log(document.body.childNodes[1])            // beacause div is not the first child of body it's a 2nd child
// let a=document.body.childNodes[1]
// console.log(a.parentNode)           // it returns the parent node
// console.log(a.parentElement)            // if the parent is element then only it will return but if not then it will return null
// console.log(a.firstChild.nextSibling)









// // 04 Element only navigation

// let a=document.body
// console.log("First child of a is : ",a.firstChild)          // it gives any kind of node like text node, comment node, ....
// console.log("First element child of a is : ",a.firstElementChild)           // it gives the element child only
// console.log("Next element child of a is : ",a.nextElementChild)         // it gives the next element sibling
// console.log("Previous element child of a is : ",a.previousElementChild)         // it gives the next element sibling
// const changebgcolor=()=>         // either use this or use css file decorations
// {
//     document.body.firstElementChild.style.background="#FF00FF"
// }
// use $0.children to get child of html









// // 05 Table navigation

// let a=document.body.firstElementChild
// console.log(a)
// let b=document.body.firstElementChild.firstElementChild
// console.log(b)
// console.log(b.rows)
// // typeof document and typeof window both are object









// 06 Searching using DOM

// use the pdf at drive to understand and also can video 36









// // Matches, Closest, Contains

// let id1=document.getElementById("id1")
// console.log(id1)
// let id2=document.getElementById("id2")
// console.log(id2)
// console.log(id1.matches(".class"))          // gives false because id1 is a box selector as per html code and here we matches it with class selector
// console.log(id1.matches(".box"))          // gives true
// let sp1=document.getElementById("sp1")
// console.log(sp1.closest("#sp1"))            // closet checks the selector and if not find then it goes the parent if there also not find then it goes to there parent like that
// console.log(sp1.closest(".box"))            // means it finds the selector closest to the sp1           working principal is like we finding .box selector wrt sp1 so it checks the selctor of sp1 if it is not .box then it checks to the parent of sp1 if it have .box selector then it return to consol if that also don't then it goes to the parent of parent and check until it get .box selector
// console.log(id1.contains(sp1))          // it checks weather the sp1 is a child of id1 or not           ans-->true
// console.log(sp1.contains(sp1))          // also a true
// console.log(sp1.contains(id1))          // it's a false









// // Practice set Q1

// document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"









// // Q2

// ans==no







// // Q3

// document.getElementsByTagName("nav")[0].firstElementChild.style.color="blue"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color="red"






// // Q4

// document.getElementsByTagName("nav")[0].style.background="cyan"







// // Q5

// ans==(D) NOne of these