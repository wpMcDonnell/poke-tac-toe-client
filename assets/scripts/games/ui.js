const store = require('./../store')

$('#get-all-games').hide()
$('#exit-game-record').hide()
$('#animation-evee').hide()
$('#animation-chansey').hide()
$('#animation-growlith').hide()


const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#player-message').html('Payer One, make your move!')
  $('.poke-board').show()
  $('#user-message').html('')
  $('#new-game').data('clicked', 'yes')
}

const onNewGameError = function () {
  $('#player-message').html('Error. Board did not load..')
}

const onUpdateSuccess = function (response) {
  // console.log(response)
}

const onUpdateError = function () {
  $('#user-message').html('Game Over, please click New Game to continue..')
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
  $('#form').trigger('reset')
  $('#user-message').html('')
  $('#game-board-title').hide()
  $('#new-game').hide()
  $('#player-message').hide()
  $('.poke-board').hide()
  $('#exit-game-record').show()
  $('.games-display').show()
  $('#get-all-games').hide()
}

const onIndexError = function (err) {
  $('.games-display').html(err)
}

const onExitGameRecord = function () {
  $('#game-board-title').show()
  $('#new-game').show()
  $('#player-message').show()
  $('#exit-game-record').hide()
  $('.games-display').html('')
  $('#player-message').show()
  if ($('#new-game').data('clicked') === 'yes') {
    $('.poke-board').show()
  }
  $('#get-all-games').show()
}

const onExitAccountSettings = function () {
  $('#game-board-title').show()
  $('#new-game').show()
  $('#player-message').show()
  $('#exit-game-record').hide()
  $('.games-display').html('')
  $('#player-message').show()
  $('#change-password').hide()
  $('#get-all-games').show()
  $('#account-settings').show()
  $('#password-error-message').html('')
  $('#password-success-message').html('')
  if ($('#new-game').data('clicked') === 'yes') {
    $('.poke-board').show()
  }
  $('.games-display').hide()
  $('#animation-growlith').hide()
  $('#user-message').html('')
  $('#change-password').trigger('reset')
}

module.exports = {
  onNewGameSuccess,
  onNewGameError,
  onUpdateSuccess,
  onUpdateError,
  onIndexSuccess,
  onIndexError,
  onExitGameRecord,
  onExitAccountSettings

}
