let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let countStr = 0 
function increment() {
    
    count += 1
    countEl.textContent = count
}

function save() {
    countStr = count + " - "
    
    saveEl.textContent += countStr
    countEl.textContent = 0
}

function reset() {
    count = 0
    countStr = 0
}

