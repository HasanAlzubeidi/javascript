//Another way to  communicate with the user

let myLeads = []
const inputBTN=document.getElementById("input-btn")
const inputEL=document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const testEL=document.getElementById("test")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")


// const tabs=[
//     {url:"https://github.com/HasanAlzubeidi"}
// ]

// localStorage.setItem("134","kthh.se")
// console.log(localStorage.getItem("134"))
//localStorage.clear()


const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
myLeads=leadsFromLocalStorage
render(myLeads)
}


function render(leads){
    let listItems = ""
    for(let i =0; i<leads.length; i++){  
    // listItems += "<li><a target='_blank' href='"+myLeads[i]+"'>" + myLeads[i] +"</a></li>"
    listItems+= `
    <li >
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        <a/>
        <button id='${i}'>dt</button>
        </li>
    `
    }
    /*
    //there is another way to do write similar code as above
    //create element 
    //set text element 
    //append to  ul
    */
    // const li = document.createElement("li")
    // li.textContent=myLeads[i]
    // ulEL.append(li)
    
    ulEL.innerHTML=listItems
    }
    

//console.log(leadsFromLocalStorage)

inputBTN.addEventListener("click", function(){
let inputValue=inputEL.value;
myLeads.push(inputValue)
inputEL.value=""
localStorage.setItem("myLeads", JSON.stringify(myLeads));
render(myLeads)
//show()
//testEL.textContent=myLeads

})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[];
    render(myLeads)
    
    })

 
 
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
        myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads)


     })

})
/*

//sex values which are falsy 

*flase
*0
*null
*""
*undefined
*NaN

/*
let x = Boolean("hello")
console.log(x)
/*

*/

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));