const store = require('./../store')

// $('#player-message').hide()

const onNewGameSuccess = function (response) {
  store.game = response.game
  // $('#player-message').show()
  $('#player-message').html('Payer One, make your move!')
  $('.poke-board').show()
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

  module.exports = {
    onNewGameSuccess,
    onNewGameError,
    onUpdateSuccess,
    onUpdateError


  }
