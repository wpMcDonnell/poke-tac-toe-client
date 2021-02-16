const store = require('./../store')

$('#get-all-games').hide()
$('#exit-game-record').hide()

const onNewGameSuccess = function (response) {
  store.game = response.game
  // $('#player-message').show()
  $('#player-message').html('Payer One, make your move!')
  $('.poke-board').show()
  $('#user-message').html('')
  console.log(response.game)
}

const onNewGameError = function () {
  console.log('it didnt work')
}

const onUpdateSuccess = function (response) {
  console.log(response)
}

const onUpdateError = function () {
  console.log(' updateerror, it did not work ')
}

const onIndexSuccess = function (responseData) {
  const games = responseData.games
  let gamesHTML = ''

  games.forEach(game => {
    gamesHTML += `
  <h4>Board: ${game.cells}</h4>
      <p>date: ${game.createdAt}</p>
      <p>ID: ${game._id}</p>
  `
})
  $('.games-display').html(gamesHTML)
  console.log(games)
  $('#form').trigger('reset')
  $('#user-message').html('')
  $('#game-board-title').hide()
  $('#new-game').hide()
  $('#player-message').hide()
  $('.poke-board').hide()
  $('#exit-game-record').show()
}

const onIndexError = function (err) {
  console.log(err)
}

const onExitGameRecord = function () {
  console.log('suppose to exit?')
  $('#game-board-title').show()
  $('#new-game').show()
  $('#player-message').show()
  $('.poke-board').show()
  $('#exit-game-record').hide()
  $('.games-display').html('')
  $('#player-message').show()

}

module.exports = {
  onNewGameSuccess,
  onNewGameError,
  onUpdateSuccess,
  onUpdateError,
  onIndexSuccess,
  onIndexError,
  onExitGameRecord

}
