const box = document.createElement("div")
document.body.appendChild(box)
box.classList.add("box")


const ButtonDec = document.createElement("button")
box.appendChild(ButtonDec)
ButtonDec.innerHTML = ""
ButtonDec.classList.add("ButtonDec")

const ButtonDec2 = document.createElement("button")
box.appendChild(ButtonDec2)
ButtonDec2.innerHTML = ""
ButtonDec2.classList.add("ButtonDec2")


const abs = document.createElement("div")
box.appendChild(abs)
abs.classList.add("abs")


let counter = 0

const result = document.createElement("h1")
result.classList.add("result")
result.innerText = counter
box.appendChild(result)


ButtonDec.addEventListener("click", () => {
     counter = counter + 1
     result.innerText = counter


     if (counter === 33) {
          window.navigator.vibrate(200, 100, 80, 60, 50)

     }
})






ButtonDec2.addEventListener("click", () => {
     counter = 0
     result.innerText = counter
})


// function vibrate (ms     ){
//      navigator.vibrate(ms)
// }

// function vibratePattern (){
//      navigator.vibrate([300, 100, 300, 100, 300])
// }