const inputEl = document.getElementById("input-el")
const trackerEl = document.getElementById("tracker-el")
const enterBtn = document.getElementById("enter-btn")
const clearBtn = document.getElementById("clear-btn")

let adder = 0

enterBtn.addEventListener("click", function(){
   
    const input = parseFloat(inputEl.value)
    if(!isNaN(input)){
        adder += input
        inputEl.value = ""
        trackerEl.innerHTML = `Tracker <br/> ${adder} `
    } else {
        inputEl.value = ""
    }

})

clearBtn.addEventListener("dblclick", function(){
    trackerEl.innerHTML = `Tracker <br/> ... `
    inputEl.value = ""
})
