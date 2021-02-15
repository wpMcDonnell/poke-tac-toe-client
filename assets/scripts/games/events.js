const api = require('./api')

const ui = require('./ui')

let turn = 1
const hitmonlee = '<img src="./images/hitmonlee.png">'
const hitmonchan = '<img src="./images/Hitmonchan.png">'
const pokeball = '<img class="img" src="./images/pokeball.gif">'

const onBoardArray = function () {
  if ($('*[data-cell-index="0"]').data('value') === 'X' && $('*[data-cell-index="3"]').data('value') === 'X' && $('*[data-cell-index="6"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="0"]').data('value') === 'X' && $('*[data-cell-index="1"]').data('value') === 'X' && $('*[data-cell-index="2"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="3"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="5"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="6"]').data('value') === 'X' && $('*[data-cell-index="7"]').data('value') === 'X' && $('*[data-cell-index="8"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="1"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="7"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="2"]').data('value') === 'X' && $('*[data-cell-index="5"]').data('value') === 'X' && $('*[data-cell-index="8"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="0"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="8"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="2"]').data('value') === 'X' && $('*[data-cell-index="4"]').data('value') === 'X' && $('*[data-cell-index="6"]').data('value') === 'X') {
    $('#player-message').html('Player One wins! Click new game to continue...!')
    turn = 3
  }
  else if ($('*[data-cell-index="0"]').data('value') === 'O' && $('*[data-cell-index="3"]').data('value') === '0' && $('*[data-cell-index="6"]').data('value') === '0') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="0"]').data('value') === 'O' && $('*[data-cell-index="1"]').data('value') === 'O' && $('*[data-cell-index="2"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="3"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="5"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="6"]').data('value') === 'O' && $('*[data-cell-index="7"]').data('value') === 'O' && $('*[data-cell-index="8"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="1"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="7"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="2"]').data('value') === 'O' && $('*[data-cell-index="5"]').data('value') === 'O' && $('*[data-cell-index="8"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="0"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="8"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  } else if ($('*[data-cell-index="2"]').data('value') === 'O' && $('*[data-cell-index="4"]').data('value') === 'O' && $('*[data-cell-index="6"]').data('value') === 'O') {
    $('#player-message').html('Player Two wins! Click new game to continue...!')
    turn = 3
  }
}

const onPlayerTurn = function (event) {
  if ((turn === 1) && ($(event.target).html() === pokeball)) {
    $('#user-message').text('')
    $('#player-message').html('Player Two, make your move!')
    $(event.target).html('')
    $(event.target).html(hitmonlee)
    $(event.target).data('value', 'X')
    console.log($(event.target).data())
    turn = 2
  } else if ((turn === 2) && ($(event.target).html() === pokeball)) {
    $('#player-message').html('Player One, your turn!')
    $(event.target).html('')
    $(event.target).html(hitmonchan)
    $(event.target).data('value', 'O')
    console.log($(event.target).data())
    turn = 1
  }

  const updates = {
    game: {
      cell: {
        index: $(event.target).data('cell-index'),
        value: $(event.target).data('value')
      },
      over: false
    }

  }

  console.log(updates)

  api.updateGame(updates)
    .then(ui.onUpdateSuccess)
    .catch(ui.OnUpdateError)
}


const onGetNewGame = function () {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameError)
  $('.box').html(pokeball)
  $('.box').data('value', '')
  turn = 1
}

const onIndexAllGames = function () {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexError)
}

module.exports = {
  onPlayerTurn,
  onBoardArray,
  onGetNewGame,
  onIndexAllGames

}
