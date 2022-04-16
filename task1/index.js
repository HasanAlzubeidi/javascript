// document.getElementById("count-el").innerText=5
//use textContent instead of innerText 

let saveEL=document.getElementById("save-el")
let countEL=document.getElementById("count-el")
let count = 0
//you have to invoke the function
function increment(){
    count+=1
    countEL.innerText=count
}


function save(){
let temp = count + " - "
saveEL.textContent +=temp
}

function reset(){
    count = 0
    countEL.innerText=count
}

