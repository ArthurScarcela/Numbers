let toggleStatus = false
let drawIndex = 1
const numbers = [];

const drawCounter = document.getElementById("drawCounter")

const form = document.querySelector("form")
const drawResults = document.querySelector(".drawResults")

const toggleContainer = document.getElementById("toggle-container")
const circle = document.getElementById("toggle-circle")

const initialOnly = document.getElementsByClassName("initial")
const endlessEl = document.getElementsByClassName("endless")


form.addEventListener('submit', (event) => {
  event.preventDefault()
})

/* função principal, verifica se os campos estão preenchidos, cria um array, realiza o sorteio e 
 exibe os números em tela*/

function draw() {
  
  const inputCounter = document.getElementById("counter")
  const inputMax = document.getElementById("max")
  const inputMin = document.getElementById("min")
  
  let counter = parseInt(inputCounter.value)
  let minNum = parseInt(inputMin.value)
  let maxNum = parseInt(inputMax.value)
  
  if (isNaN(counter) || counter <= 0 || counter > 10) {
    alert("A quantidade de números sorteados deve estar entre 1 e 10");
    inputCounter.value = "";
    return;
  }
  
  
  
  const rangeSize = maxNum - minNum + 1;
  if (toggleStatus && counter > rangeSize) {
    alert("Não é possível sortear essa quantidade sem repetir os números.");
    return;
  }
  
  for (let i = 0; i < initialOnly.length; i++){
    initialOnly[i].style.display = "none";
  }

  drawCounter.textContent = `${drawIndex}º Sorteio`
  
  for(let i = 0; i < endlessEl.length; i++){
    endlessEl[i].style.display = "flex";
  }

  while (numbers.length < counter) {
    const drawNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    if (toggleStatus) {
      if (!numbers.includes(drawNumber)) {
        numbers.push(drawNumber);
        
      }
    } else {
      numbers.push(drawNumber)
    }
  }

  for(var i = 0; i < numbers.length; i++) {
    const result = document.createElement("span")
    const effectBox = document.createElement("span")
    result.className = "drawNumbers"
    effectBox.className = "effectBox"

    result.textContent = `${numbers[i]}`

    result.append(effectBox)
    drawResults.append(result)
  }

}

/*dando funcionalidade ao botão de não repetir numero */
toggleContainer.addEventListener("click", () => {
  toggleStatus = !toggleStatus

  if (toggleStatus) {
    circle.style.translate = "10px";
    toggleContainer.style.background = "linear-gradient(90deg, #d586e0 0%, #91a1fa 90%"
    return true
  } else {
    circle.style.translate = "0px";
    toggleContainer.style.background = "#d9d9d9"
  }

})

function drawAgain() {
  while(numbers.length > 0){
    numbers.pop()
  }

  drawResults.innerHTML = ""
  
    ++drawIndex
  
    for (let i = 0; i < initialOnly.length; i++){
      initialOnly[i].style.display = "flex";
    }
      initialOnly[0].style.display = "block";
  
    for(let i = 0; i < endlessEl.length; i++){
      endlessEl[i].style.display = "none";
    }
  
    const inputCounter = document.getElementById("counter")
    const inputMax = document.getElementById("max")
    const inputMin = document.getElementById("min")
  
  
    inputCounter.value = "";
    inputMax.value = "";
    inputMin.value = ""

}
