/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"
*/

//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = (Math.round(Math.random() * 10))
let xAttempts = 1

console.log(randomNumber) //conferir o numero no console, uso para testes


//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleEnterClick )

//Função Callback
function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    verifyInput(inputNumber)

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector(".tries").innerText = `${xAttempts}`
    }
    
    inputNumber.value = ""
    xAttempts++
    
}

//Funções

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = (Math.round(Math.random() * 10))
    console.log(randomNumber) //conferir o numero no console, uso para testes
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleEnterClick () {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function verifyInput (inputNumber){
    if(inputNumber.value == "") {
        alert("Tentativa inválida")
        inputNumber.value = ""
        xAttempts--
    } else
    if(inputNumber.value < 0 || inputNumber.value > 10) {
        alert("Tentativa inválida")
        inputNumber.value = ""
        xAttempts--
    }
}
