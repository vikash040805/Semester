let count=0
let cntText=document.getElementById("cnt")
let id;
id =setInterval(()=>{
    count++
    cntText.innerText=count
    if(count==3){
        clearInterval(id)
    }
},1000)
