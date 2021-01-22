const inputText = document.getElementById("input-text")
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")
const display = document.getElementById("display")

let list = []

if(localStorage.list){
  list = JSON.parse(localStorage["list"])
  
  for(let i = 0; i < list.length; i++){
    const note = document.createElement("div")
    note.className = "note"
    note.textContent = list[i]
    console.log(list[i])
    display.append(note)
  }
}

addButton.onclick = function(){
  const text = inputText.value

  list.push(text)
  localStorage.list = JSON.stringify(list)

  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text

  display.append(card)

  inputText.value = ''
}

deleteButton.onclick = function(){
  list = []
  localStorage.list = JSON.stringify(list)
}