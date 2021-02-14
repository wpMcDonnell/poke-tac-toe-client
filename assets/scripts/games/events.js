const api = require('./api')

const ui = require('./ui')

let turn = 1
const hitmonlee = '<img src="./images/hitmonlee.png">'
const hitmonchan = '<img src="./images/Hitmonchan.png">'
const pokeball = '<img class="img" src="./images/pokeball.gif">'

const onPlayerTurn = function (event) {
  if ((turn === 1) && ($(event.target).html() === pokeball)) {
    $('#user-message').text('')
    $(event.target).html('')
    $(event.target).html(hitmonlee)
    $(event.target).data('value', 'X')
    console.log($(event.target).data())
    turn = 2
  } else if ((turn === 2) && ($(event.target).html() === pokeball)) {
    $(event.target).html('')
    $(event.target).html(hitmonchan)
    $(event.target).data('value', 'O')
    console.log($(event.target).data())
    turn = 1
  }
}

const onBoardArray = function () {
  if ($('*[data-cell-index="0"]').data('value') === 'X' && $('*[data-cell-index="3"]').data('value') === 'X' && $('*[data-cell-index="6"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="0"]').data('value') === 'X' && $('*[data-cell-index="1"]').data('value') === 'X' && $('*[data-cell-index="2"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="3"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="5"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="6"]').data('value') === 'X' && $('*[data-cell-index="7"]').data('value') === 'X' && $('*[data-cell-index="8"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="1"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="7"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="2"]').data('value') === 'X' && $('*[data-cell-index="5"]').data('value') === 'X' && $('*[data-cell-index="8"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="0"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="8"]').data('value') === 'X') {
    console.log('you did it')
  } else if ($('*[data-cell-index="2"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="6"]').data('value') === 'X') {
    console.log('you did it')
  }

  else if ($('*[data-cell-index="0"]').data('value') === 'O' && $('*[data-cell-index="1"]').data('value') === 'O' && $('*[data-cell-index="2"]').data('value') === 'O') {
    console.log('you lose')
  } else if ($('*[data-cell-index="3"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="5"]').data('value') === 'O') {
    console.log('you lose')
  } else if ($('*[data-cell-index="6"]').data('value') === 'O' && $('*[data-cell-index="7"]').data('value') === 'O' && $('*[data-cell-index="8"]').data('value') === 'O') {
    console.log('you lose')
  } else if ($('*[data-cell-index="1"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="7"]').data('value') === 'O') {
    console.log('you lose')
  } else if ($('*[data-cell-index="2"]').data('value') === 'O' && $('*[data-cell-index="5"]').data('value') === 'O' && $('*[data-cell-index="8"]').data('value') === 'O') {
    console.log('you lose')
  } else if ($('*[data-cell-index="0"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="8"]').data('value') === 'O') {
    console.log('you lose')
  } else if ($('*[data-cell-index="2"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="6"]').data('value') === 'O') {
    console.log('you lose')
  }
}

const onGetNewGame = function () {
  event.preventDefault()
  api.newGame()

    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}



module.exports = {
  onPlayerTurn,
  onBoardArray,
  onGetNewGame

}
