let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")

let resetEl= saveEl.innerText
let count = 0
let total = 0

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
    totalEl.textContent = total   
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    totalEl.textContent = 0
    saveEl.textContent = resetEl
    
}
