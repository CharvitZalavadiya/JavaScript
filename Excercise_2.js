let You=prompt("Enter the s or w or g")
let Computer1=Math.floor(Math.random() * 3)
let Computer=["s","w","g"][Computer1]

const match=(Computer,You)=>
{
    if (Computer===You)
    {
        return Nobody
    }
    else if(Computer==="s" && You==="w")
    {
        return "Computer"
    }
    else if(Computer==="s" && You==="g")
    {
        return "You"
    }
    else if(Computer==="w" && You==="s")
    {
        return "You"
    }
    else if(Computer==="w" && You==="g")
    {
        return "Computer"
    }
    else if(Computer==="g" && You==="s")
    {
        return "Computer"
    }
    else if(Computer==="g" && You==="w")
    {
        return "You"
    }
}
let result=match(Computer,You)
document.write(`Computer:${Computer} <br> You:${You} <br> Winner is : ${result}`)