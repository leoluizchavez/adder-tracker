const inputEl = document.getElementById("input-el")
const trackerEl = document.getElementById("tracker-el")
const enterBtn = document.getElementById("enter-btn")
const clearBtn = document.getElementById("clear-btn")
const saveList = document.getElementById("save-list")
let listItems = []
let adder = 0

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// let adderFromLocalStorage = JSON.parse(localStorage.getItem("tracker"))

if (leadsFromLocalStorage) {
    listItems = leadsFromLocalStorage
    // adder = adderFromLocalStorageFromLocalStorage
    // trackerEl.innerHTML = `Tracker <br/> ${adder} `
    saveListItems()    
}

enterBtn.addEventListener("click", function(){
   
    const input = parseFloat(inputEl.value)
    if(!isNaN(input)){
        adder += input
        inputEl.value = ""
        trackerEl.innerHTML = `Tracker <br/> ${adder} `
        listItems.push(input)
        console.log(listItems)
        saveListItems()
        storeData()
    } else {
        inputEl.value = ""
    }
    

})

clearBtn.addEventListener("dblclick", function(){
    trackerEl.innerHTML = `Tracker <br/> ... `
    inputEl.value = ""
    adder = 0
    clearList()
})

function saveListItems(){
    let renderItems = "" // temporary variable to render out "listItems" array
    for(let i = 0; i < listItems.length; i++){
        renderItems += `<li> List ${i + 1} : ${listItems[i]} </li>`
     }
     console.log(renderItems)
     saveList.innerHTML = renderItems
}

function clearList(){
    listItems = []
    renderItems = ""
    saveList.innerHTML = renderItems
    localStorage.clear()
}

function storeData(){
    localStorage.setItem("myLeads", JSON.stringify(listItems))
    // localStorage.setItem("tracker", JSON.stringify(adder))
    // console.log(localStorage.getItem("myLeads"))
}