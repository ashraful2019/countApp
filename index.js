let countEl = document.getElementById("count-el")
let count = 0
let countStr = 0 

function increment() {
    
    countEl.textContent = 0
    count += 1
    countEl.textContent = count
}

@@ -13,10 +14,13 @@ function save() {
    
    saveEl.textContent += countStr
    countEl.textContent = 0
    countStr = 0
    
}

function reset() {
    count = 0
    countStr = 0
    saveEl.textContent = ""
}
