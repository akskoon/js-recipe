/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const person = document.getElementById("person")

let age = 26
let isWorking = true
let isInSpace = false
let isBeardShaved = false

const draw = function() {
  if (isWorking) {
    person.textContent = "👨‍💻"
  } else {
    person.textContent = "😉"
  }

  if (isInSpace) {
    person.textContent += "✨🪐✨"
  } else {
    person.textContent += "🈁➡︎🌏"
  }
}

draw()

const quitWorkingButton = document.getElementById("quit-working-button")
const launchButton = document.getElementById("launch-button")

quitWorkingButton.onclick = function() {
  isWorking = false
  draw()
}

launchButton.onclick = function() {
  isInSpace = true
  draw()
}
