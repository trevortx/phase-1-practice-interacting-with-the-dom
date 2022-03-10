document.addEventListener("DOMContentLoaded", secondCounter)

const myInterval = setInterval(secondCounter, 1000)

const minusButton = document.getElementById("minus")
minusButton.addEventListener("click", minusOne)

const plusButton = document.getElementById("plus")
plusButton.addEventListener("click", plusOne)

const heartButton = document.getElementById("heart")
heartButton.addEventListener("click", heartHandler)

function secondCounter() {
  let a = document.getElementById("counter")
  let b = parseInt(a.innerText)
  return a.innerText = b + 1
}

function minusOne() {
  let a = document.getElementById("counter")
  let b = parseInt(a.innerText)
  return a.innerText = b - 1
  }

function plusOne() {
  let a = document.getElementById("counter")
  let b = parseInt(a.innerText)
  return a.innerText = b + 1
}

function heartHandler() {

}