
let win_x = document.getElementById("win_x")
let win_o = document.getElementById("win_o")
let draw = document.getElementById("draw")

let score_x = 0
let score_o = 0
let score_draw  = 0


let start_btn = document.querySelector(".start_btn")

let move = document.querySelector(".move")

let cell = document.querySelectorAll(".cell")

let game = document.querySelector(".game")

let win

let result = ["1","2","3","4","5","6","7","8","9"]

let start = 0


for (let i = 0; i < cell.length; i++) {



    cell[i].addEventListener("click", function (event) {


              if (document.querySelectorAll('.active').length === 9) {
                  EventTarget.removeEventListener()
              }
              else {

                  if (event.target.classList.contains("active")) {

                  }
                  else{
                      event.target.classList.add("active")
                      if (start % 2 === 0) {
                          cell[i].textContent = "X"
                          start++
                          result[i] = cell[i].textContent
                          move.textContent = "Ходит 0"
                      }

                      else{
                          cell[i].textContent = "O"
                          start--
                          result[i] = cell[i].textContent
                          move.textContent = "Ходит X"
                      }
                  }

              }










        if (result[0] === result[1] && result[0] === result[2] && result[1] === result[2]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }

        else if (result[3] === result[4] && result[3] === result[5] && result[4] === result[5]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }
        else if (result[6] === result[7] && result[6] === result[8] && result[7] === result[8]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }

        else if (result[0] === result[3] && result[0] === result[6] && result[3] === result[6]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }

        else if (result[1] === result[4] && result[1] === result[7] && result[4] === result[7]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }

        else if (result[2] === result[5] && result[2] === result[8] && result[5] === result[8]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }
        else if (result[0] === result[4] && result[0] === result[8] && result[4] === result[8]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }
        else if (result[2] === result[4] && result[2] === result[6] && result[4] === result[6]) {
            console.log("Победа")
            win = true
            setGameTXT()
        }
        else if ( document.querySelectorAll('.active').length == 9  ) {
            console.log("НИЧЬЯ")
            win = false
            setGameTXT()

        }

    })



}


function restartGame() {
    start++
        cell.forEach(function (z) {
        z.textContent = ""
        z.classList.remove("active")
    })
    result = ["1","2","3","4","5","6","7","8","9"]



    if (start % 2 === 0) {
        move.textContent = "Ходит X"
    }

    else{
        move.textContent = "Ходит 0"
    }

    win = null
}


start_btn.addEventListener("click", restartGame)


function setGameTXT() {

    if (win === false) {
        move.textContent = "НИЧЬЯ"
        score_draw++
        draw.textContent = score_draw.toString()

    }
    else{
        if (move.textContent.indexOf("0") > -1) {
            move.textContent = "Выиграл X"
            score_x++
            win_x.textContent = score_x.toString()


        }
        else {
            move.textContent = "Выиграл 0"
            score_o++
            win_o.textContent = score_o.toString()


        }
    }

    cell.forEach(function (z) {
        z.classList.add("active")
    })
    result = ["1","2","3","4","5","6","7","8","9"]

}




