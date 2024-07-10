let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 10
    countEl.textContent = count
}

function save() {
    let countStr = count + "kg - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
