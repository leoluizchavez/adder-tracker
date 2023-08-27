const inputEl = document.getElementById("input-el")
const trackerEl = document.getElementById("tracker-el")
const enterBtn = document.getElementById("enter-btn")
const clearBtn = document.getElementById("clear-btn")
const saveList = document.getElementById("save-list")

let listItems = []
let adder = 0

enterBtn.addEventListener("click", function(){
   
    const input = parseFloat(inputEl.value)
    if(!isNaN(input)){
        adder += input
        inputEl.value = ""
        trackerEl.innerHTML = `Tracker <br/> ${adder} `
        listItems.push(input)
        console.log(listItems)
        saveListItems()
    } else {
        inputEl.value = ""
    }
    

})

clearBtn.addEventListener("dblclick", function(){
    trackerEl.innerHTML = `Tracker <br/> ... `
    inputEl.value = ""
})

function saveListItems(){
    let renderItems = ""
    for(let i = 0; i < listItems.length; i++){
        renderItems += `<li> ${listItems[i]} </li>`
     }
     console.log(renderItems)
     saveList.innerHTML = renderItems
}
