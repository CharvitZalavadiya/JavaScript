// // 41 innerHTML and outerHTML           // it works swith elements node only not with text element
// console.dir(document.getElementsByTagName('span')[0])           // uses to get the attributes and functions of the span as a directory means it shows the object with it's  property
// console.log(document.body.firstChild.nodeName)           // gives the node of the first child of the body
// span1.innerHTML         // it gives the context of the span which id is the span1 there is italic tag also and it will return that as it is
// span1.innerHTML='re-written'            // it changes the content that is present in the span with this line
// span1.outerHTML         // it gives the whole line which containes the span1 id with tags also
// span1.outerHTML='<div>hello</div>'          // it over-write on the span1 id details as we didn't given any id to outerHTML span1 id will be removed and you console it then it will return null
// console.log(document.body.textContent)          // it gives the text of the body
// console.log(document.head.textContent)          // it gives the text of the head









// // 42 Attributes and their Methodes
// let a=console.log(idf.getAttribute("class"))            // idf id has cf class which is it's attribute
// console.log(idf.hasAttribute("class"))          // checks weather the idf has class attribute or not
// let b=console.log(idf.hasAttribute("class"))            // id is not a attribute of the class==cf
// // idf.setAttribute("hidden","true")           // idf attribute set to be hidden and "1st container" text will removed
// // idf.removeAttribute("class")           // class attribute will be removed from the idf
// console.log(idf.attributes)             // gives all the attributes attached with the idf
// console.log(idf.dataset)            // it shows the custom attribute given to the idf
// console.log(idf.dataset.customattribute)            // gives the name of the custom attribute









// // 43 HTML insetion method
// let a=document.getElementsByTagName("div")[1]
// console.log(a)
// let newdiv=document.createElement("newdiv")
// newdiv.innerHTML="it's a new div text<br>"
// a.appendChild(newdiv)
// a.append(newdiv)            // it add the content after the cf class content but inside the container
// a.prepend(newdiv)           // it add the content before the cf class content but inside the container
// a.before(newdiv)           // it add the content before the cf class content but outside the container
// a.after(newdiv)           // it add the content after the cf class content but outside the container
// a.replaceWith(newdiv)           // it replace the cf class content









// // 44 Insert Adjacent HTML , Insert Adjacent Text
// let a=document.getElementsByTagName('div')[2]
// console.log(a)
// a.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>')
// a.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>')
// a.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>')
// a.insertAdjacentHTML('afterend','<div class="test">afterend</div>')
// a.remove()          // it removes the second class









// // 45 classname , classlist
// let a=document.getElementsByTagName('div')[1]
// console.log(a)
// a.className="red"
// console.log(a.classList)









// // 46 setTimeout , setInterval
// alert("hiiiiiiiiiiii")
// let a=setTimeout(function(){
//     alert("after adding the setTimeout and the this alert came after the 500ms of program exicuted")
// },500)         // here 2000 means that this msg will alert after the 500ms==0.5sec of the program exicuted
// let b=setTimeout(function(){
//     alert("after 1000ms")
// },1000)         // here 2000 means that this msg will alert after the 1000ms==0.5sec of the program exicuted
// console.log(a)          // in consol it will show 1 which means variable a has the first timelimit
// console.log(b)          // in consol it will show 2 which means variable b has the second timelimit
// clearTimeout(a)         // timeout a will not show the alert means the exicution of the a will not









// 47 Browser Events
// if there is a function let say onclick is there in the HTML and JS both for same div class then JS event will be exicute and HTML event will be ignored









// // 48 Handling Browser Events
// let a=function(e)
// {
//     alert("this alert is due to js addEventListner -->1<--")
// }
// btn.addEventListener('click', a)
// let b=function(e)
// {
//     alert("this alert is due to js addEventListner -->2<--")
// }
// btn.addEventListener('click', b)

// let c=prompt("Enter the no. 1 or 2")
// if(c=="1")
// {
//     btn.removeEventListener('click',b)
// }
// else
// {
//     btn.removeEventListener('click',a)
// }

// console.log("hello world")







// 49
// Practice Set 1 Q1
