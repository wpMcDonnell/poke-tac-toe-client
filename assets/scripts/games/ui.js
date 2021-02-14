const store = require('./../store')

const events = require('./events')


const onNewGameSuccess = function (response) {
  store.game = response.game

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
