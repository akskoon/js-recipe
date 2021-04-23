/* eslint-disable no-unused-vars */
const input = document.getElementById("input")
const container = document.getElementById("conttainer")
const addButton = document.getElementById("add-button")

let list = []

if (localStorage.list) {
  list.JSON.parse(localStorage.list)

  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)
  }
}

addButton.onclick = function() {
  const text = input.value
  list.push(text)
  localStorage.list = JSON.stringify(list)

  const card = document.createElement("div")
  card.classname = "card"
  card.textContent = text
  container.append(card)

  input.value = ""
}
