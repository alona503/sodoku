// hardcoded sudoku boards
let easy1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 7, 2, 0, 0, 0],
  [0, 6, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 2, 7, 5, 0, 9, 6, 1, 0],
  [0, 1, 0, 5, 0, 6, 0, 4, 2, 0],
  [0, 9, 0, 2, 0, 1, 5, 3, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 6, 1],
  [0, 4, 0, 6, 1, 0, 0, 8, 3, 0],
  [0, 7, 0, 0, 0, 8, 0, 1, 9, 0],
  [0, 0, 1, 8, 0, 9, 6, 0, 4, 5],
]

let easy2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 0, 0, 2, 1, 0],
  [0, 1, 9, 6, 2, 8, 4, 7, 5, 3],
  [0, 0, 3, 0, 1, 5, 0, 4, 0, 6],
  [0, 3, 0, 8, 0, 0, 5, 0, 0, 0],
  [0, 4, 0, 0, 0, 6, 3, 0, 0, 0],
  [0, 5, 0, 1, 9, 2, 0, 3, 7, 4],
  [0, 0, 0, 0, 0, 0, 2, 5, 0, 0],
  [0, 0, 5, 0, 0, 3, 0, 6, 0, 0],
  [0, 0, 1, 3, 0, 4, 0, 0, 0, 0],
]

let easy3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 7, 0, 0, 0, 0, 6, 8],
  [0, 0, 9, 0, 6, 8, 7, 3, 0, 2],
  [0, 8, 0, 0, 2, 5, 0, 1, 9, 0],
  [0, 3, 1, 0, 0, 0, 9, 6, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 7, 0, 4],
  [0, 0, 7, 4, 0, 0, 8, 2, 1, 9],
  [0, 0, 0, 0, 0, 9, 1, 4, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 8, 5, 1],
  [0, 7, 0, 0, 0, 4, 0, 0, 0, 6],
]

let medium1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 7, 2, 0, 0, 0],
  [0, 6, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 2, 0, 5, 0, 0, 6, 1, 0],
  [0, 1, 0, 5, 0, 6, 0, 0, 2, 0],
  [0, 9, 0, 2, 0, 1, 0, 3, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 6, 1],
  [0, 4, 0, 6, 1, 0, 0, 8, 3, 0],
  [0, 7, 0, 0, 0, 8, 0, 1, 9, 0],
  [0, 0, 1, 0, 0, 0, 6, 0, 0, 5],
]

let medium2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 4, 0, 1, 0, 0, 0],
  [0, 1, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 8, 0, 5, 6, 0],
  [0, 0, 0, 0, 6, 2, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 1, 3, 2, 5, 7],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 3],
  [0, 4, 9, 0, 1, 0, 5, 0, 0, 2],
  [0, 0, 1, 0, 3, 0, 0, 7, 0, 5],
  [0, 7, 0, 0, 2, 0, 0, 0, 0, 6],
]

let medium3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 2, 0, 0, 0, 7, 0],
  [0, 0, 1, 9, 4, 0, 7, 5, 3, 0],
  [0, 0, 0, 0, 0, 9, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 8, 6, 0, 0, 0],
  [0, 3, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 6, 0, 0, 8, 0, 4, 0],
  [0, 8, 5, 1, 9, 4, 0, 0, 0, 6],
  [0, 0, 0, 3, 0, 5, 0, 8, 9, 0],
]

let hard1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 7, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 5, 0, 6, 0, 0, 2, 0],
  [0, 9, 0, 0, 0, 1, 0, 3, 0, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 6, 1],
  [0, 4, 0, 0, 0, 0, 0, 8, 0, 0],
  [0, 7, 0, 0, 0, 8, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 6, 0, 0, 5],
]

let hard2 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 9, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 1, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 8, 0, 0, 6, 0],
  [0, 0, 0, 0, 6, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 7],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 3],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 2],
  [0, 0, 1, 0, 0, 0, 0, 7, 0, 5],
  [0, 7, 0, 0, 0, 0, 0, 0, 0, 6],
]

let hard3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 0, 0, 0, 7, 0],
  [0, 0, 0, 9, 0, 0, 7, 0, 3, 0],
  [0, 0, 0, 0, 0, 9, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 6, 0, 0, 0],
  [0, 3, 4, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 6, 0, 0, 8, 0, 4, 0],
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 6],
  [0, 0, 0, 3, 0, 0, 0, 8, 0, 0],
]
var errorIndex = [
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [null, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

$(document).on('click', '#finish', function () {
  let result = emptySlot()
  if (result == true) {
    $('#tableDiv').after(
      `<p class='error'>Please fill the red colored slot</p>`
    )
    debugger
    for (let i = 1; i <= 9; i++)
      for (let j = 1; j <= 9; j++) {
        if (`${i}${j}c` == errorIndex[i][j])
          $(`#${i}${j}c`).prop('classList').add('slotError')
        else if ($(`#${i}${j}c.slotError`).length)
          $(`#${i}${j}c`).prop('classList').remove('slotError')
      }
  } else {
    result = checkSolution()
    if (result == true) {
      //user win the game
      if (`.slotError`.length)
        //remove any before error slot
        $(`.slotError`).remove()
      if ($('.error').length) {
        //remobe any before error
        $('.error').remove()
      }
      $('#tableDiv').after(`<p class='win'>you win!!!</p>`)
    } else {
      //user have at least one slot wrong

      if ($('.win').length) {
        $('.win').remove()
      }
    }
  }
})

$(document).on('click', '#reset', function () {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if ($(`#${i}c${j}`).text() == '') {
        //if input type
        if ($(`#${i}${j}c`).val() != '') {
          //if slot is empty
          $(`#${i}${j}c`).val('')
        } else {
          errorIndex[i][j] = 0
        }
      }
    }
  }
  return false //no empty slots
})

function emptySlot() {
  //if there is ant empty slots

  if ($('.error').length) {
    $('.error').prop('classList').add('hide')
  }
  debugger
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if ($(`#${i}c${j}`).text() == '') {
        //if input type
        if ($(`#${i}${j}c`).val() == '') {
          //if slot is empty
          errorIndex[i][j] = `${i}${j}c`
          return true //if there is one empty slot return true
        } else {
          errorIndex[i][j] = 0
        }
      }
    }
  }
  return false //no empty slots
}

$('#enter').click(function () {
  let userName = $('#userName').val()
  let password = $('#password').val()
  let result = checkValidation(userName, password)
  switch (result) {
    case 'both':
      $(location).attr('href', 'level.html')
      break
    case 'password': //only password valid
      //hide error for password
      $('#passwordWrong').prop('classList').add('hide')
      $('#passwordWrong').prop('classList').remove('show')
      $('#secondBR').prop('classList').remove('hide')
      //show error for user name
      $('#userWrong').prop('classList').remove('hide')
      $('#userWrong').prop('classList').add('show')
      $('#firstBR').prop('classList').add('hide')
      break
    case 'userName': //only user name valid
      //hide error for user name
      $('#userWrong').prop('classList').add('hide')
      $('#userWrong').prop('classList').remove('show')
      $('#firstBR').prop('classList').remove('hide')
      //show error for password
      $('#passwordWrong').prop('classList').remove('hide')
      $('#passwordWrong').prop('classList').add('show')
      $('#secondBR').prop('classList').add('hide')

      break
    case 'none':
      //show both errors -password and user name
      $('#passwordWrong').prop('classList').remove('hide')
      $('#passwordWrong').prop('classList').add('show')
      $('#secondBR').prop('classList').add('hide')
      $('#userWrong').prop('classList').remove('hide')
      $('#userWrong').prop('classList').add('show')
      $('#firstBR').prop('classList').add('hide')

      break

    default:
      break
  }
})

$('#l1').click(function () {
  debugger
  window.location = 'board.html?create=1'
})
$('#l2').click(function () {
  window.location = 'board.html?create=2'
})
$('#l3').click(function () {
  window.location = 'board.html?create=3'
})

function checkValidation(userName, password) {
  //check which one of the inputss is wrong
  if (userName == 'userName' && password == '12345') {
    return 'both' //both are valid unputs
  } else if (userName != 'userName' && password == '12345') {
    return 'password' //only password is valid
  } else if (userName == 'userName' && password != '12345') {
    return 'userName' //only userName is valid
  } else {
    return 'none'
  }
}

function createTable() {
  const queryString = window.location.search //get url
  const urlParams = new URLSearchParams(queryString)
  const level = urlParams.get('create') //get parameter create with number of level
  var content = "<table class='center'>"
  for (let i = 1; i <= 9; i++) {
    content += '<tr>'
    for (let j = 1; j <= 9; j++) {
      let ID = `${[i] + 'c' + [j]}` //looks like 1c0 1 for row 0 for column
      if (i == 1 || i == 4 || i == 7) {
        //first row in a cube
        if (j == 1 || j == 4 || j == 7)
          //corner slots (1,1) (1,4) (1,7)..
          content += `<td id=${ID} class='thickBorderTop thickBorderLeft'>0</td>`
        else if (j == 9)
          content += `<td id=${ID} class='thickBorderTop thickBorderRight'>0</td>`
        else content += `<td id=${ID} class='thickBorderTop'>0</td>`
      } else if (i == 2 || i == 3 || i == 5 || i == 6 || i == 8) {
        if (j == 1 || j == 4 || j == 7)
          content += `<td id=${ID} class='thickBorderLeft'>0</td>`
        else if (j == 9)
          content += `<td id=${ID} class='thickBorderRight'>0</td>`
        else content += `<td id=${ID}>0</td>`
      } else if (i == 9) {
        if (j == 1 || j == 4 || j == 7)
          //corner slots (1,1) (1,4) (1,7)..
          content += `<td id=${ID} class='thickBorderBottom thickBorderLeft'>0</td>`
        else if (j == 9)
          content += `<td id=${ID} class='thickBorderBottom thickBorderRight'>0</td>`
        else content += `<td id=${ID} class='thickBorderBottom'>0</td>`
      }
    }
    content += '</tr>'
  }
  content += '</table><br>'
  content +=
    "<div class='row'><div class='col-6 center'><button id='finish'>finish</button></div><div class='col-6 center'><button id='reset'>reset</button></div></div>"

  $('#tableDiv').append(content)
  if (level == '1') {
    tableByLevel(1)
  }
  if (level == '2') {
    tableByLevel(2)
  }
  if (level == '3') {
    tableByLevel(3)
  }
  //empty slots fill with input box
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if ($(`#${i}c${j}`).text() == 0) {
        $(`#${i}c${j}`).html(
          `<input class='focus' id=${i}${j}c oninput="maxLengthCheck(this)" type = "number" maxlength = "1" min = "1" max = "9"></input>`
        )
      }
    }
  }
}
function maxLengthCheck(input) {
  if (input.value.length > input.maxLength)
    input.value = input.value.slice(0, input.maxLength)
}

function tableByLevel(level) {
  let numberRandom = Math.floor(Math.random() * 3) + 1 //random num to choose play board
  if (level == 1) {
    if (numberRandom == 1) {
      insertNumbersInBoard(easy1)
    }
    if (numberRandom == 2) {
      insertNumbersInBoard(easy2)
    }
    if (numberRandom == 3) {
      insertNumbersInBoard(easy3)
    }
  }
  if (level == 2) {
    if (numberRandom == 1) {
      insertNumbersInBoard(medium1)
    }
    if (numberRandom == 2) {
      insertNumbersInBoard(medium2)
    }
    if (numberRandom == 3) {
      insertNumbersInBoard(medium3)
    }
  } //
  if (level == 3) {
    if (numberRandom == 1) {
      insertNumbersInBoard(hard1)
    }
    if (numberRandom == 2) {
      insertNumbersInBoard(hard2)
    }
    if (numberRandom == 3) {
      insertNumbersInBoard(hard3)
    }
  }
}
function insertNumbersInBoard(board) {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (board[i][j] > 0) {
        let slot = `${i}c${j}`
        $(`#${slot}`).text(board[i][j])
      }
    }
  }
}

function checkNum(number, row, column) {
  //checks number if not appears in the same row and column
  for (let i = 1; i <= 9; i++) {
    //check if num exist in the same row as number
    let slot = $(`#${row}c${i}`).text()
    if (slot != number) {
      continue
    } else {
      return false
    }
  }
  for (let i = 1; i <= 9; i++) {
    //check if num exist in the same column as number
    let slot = $(`#${i}c${column}`).text()
    if (slot != number) {
      continue
    } else {
      return false
    }
  }
  return true
}
function checkCube(number, row, column) {
  let slot
  if (row >= 1 && row <= 3) {
    //cube 1/2/3
    if (column >= 1 && column <= 3) {
      //first cube
      for (let i = 1; i <= 3; i++)
        for (let j = 1; j <= 3; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }

      return true
    } else if (column >= 4 && column <= 6) {
      //second cube
      for (let i = 1; i <= 3; i++) {
        //loop for row
        for (let j = 4; j <= 6; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    } else {
      //third cube
      for (
        let i = 1;
        i <= 3;
        i++ //row
      ) {
        for (let j = 7; j <= 9; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    }
  } else if (row >= 4 && row <= 6) {
    //cube 4/5/6
    if (column >= 1 && column <= 3) {
      //fourth cube
      for (let i = 4; i <= 6; i++) {
        for (let j = 1; j <= 3; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    } else if (column >= 4 && column <= 6) {
      //fifth cube
      for (let i = 4; i <= 6; i++) {
        for (let j = 4; j <= 6; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    } else {
      //sixth cube
      for (let i = 4; i <= 6; i++) {
        for (let j = 7; j <= 9; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    }
  } else {
    //cube 7/8/9
    if (column >= 1 && column <= 3) {
      //seventh cube
      for (let i = 7; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    } else if (column >= 4 && column <= 6) {
      //eighth cube
      for (let i = 7; i <= 9; i++) {
        for (let j = 4; j <= 6; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    } else {
      //nineth cube
      for (let i = 7; i <= 9; i++) {
        for (let j = 7; j <= 9; j++) {
          slot = $(`#${i}c${j}`).text()
          if (slot == number) return false
        }
      }
      return true
    }
  }
}

function cubeNumber(i, j) {
  if (i >= 1 && i <= -3) {
    //1/2/3 number cube
    if (j >= 1 && j <= 3) return 1
    if (j >= 4 && j <= 6) return 2
    if (j >= 7 && j <= 9) return 3
  }
  if (i >= 4 && i <= 6) {
    //4/5/6 number cube
    if (j >= 1 && j <= 3) return 4
    if (j >= 4 && j <= 6) return 5
    if (j >= 7 && j <= 9) return 6
  }
  if (i >= 7 && i <= -9) {
    //7/8/9 number cube
    if (j >= 1 && j <= 3) return 7
    if (j >= 4 && j <= 6) return 8
    if (j >= 7 && j <= 9) return 9
  }
}

function checkSolution() {
  let boardValue
  let result
  let cubeNum
  debugger
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if ($(`#${i}${j}c.slotError`).length)
        $(`#${i}${j}c`).prop('classList').remove('slotError')
      if ($(`#${i}c${j}`).text() == '') {
        //input type
        boardValue = $(`#${i}${j}c`).val()
        result = checkNum(boardValue, i, j)
        if (result == false) {
          $('#tableDiv').after(
            `<p class='error'> the folowing number ${boardValue} appearce more then one time in a row/column</p>`
          )
          break
        } else {
          result = checkCube(boardValue, i, j)
          if (result == false) {
            cubeNum = cubeNumber(i, j)
            $('#tableDiv').after(
              `<p class='error'> the folowing number ${boardValue} appearce more then one time in a cube ${cubeNum}</p>`
            )
            break
          }
        }
      }
    }
    if (result == false) return false
  }
  return true
}
