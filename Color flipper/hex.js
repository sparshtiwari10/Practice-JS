const char = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const clickMe=document.getElementById("click-me")
let color='#'
function random()
{
    return char[Math.floor(Math.random()*16)]
}
clickMe.addEventListener("click",function(){
    for(let i=0;i<=5;i++)
    {
        color+=random()
    }
    console.log(color)
    document.body.style.backgroundColor=color
    color='#'
    
})
