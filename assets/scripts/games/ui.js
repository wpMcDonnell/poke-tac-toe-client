const store = require('./../store')

$('#get-all-games').hide()
$('#exit-game-record').hide()



const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#player-message').html('Payer One, make your move!')
  $('.poke-board').show()
  $('#user-message').html('')
  $('#new-game').data('clicked', 'yes')
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
  $('#form').trigger('reset')
  $('#user-message').html('')
  $('#game-board-title').hide()
  $('#new-game').hide()
  $('#player-message').hide()
  $('.poke-board').hide()
  $('#exit-game-record').show()
}

const onIndexError = function (err) {
  $('#user-message').html(err)
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
