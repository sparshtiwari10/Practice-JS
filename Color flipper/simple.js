let colors = ['green','red','blue','#abdbd9']
const clickMe=document.getElementById("click-me")
clickMe.addEventListener("click",function(){
    let random=Math.floor(Math.random()*4)
    document.body.style.backgroundColor=colors[random]  
})