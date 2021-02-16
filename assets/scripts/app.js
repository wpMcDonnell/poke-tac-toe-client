'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

const gameEvents = require('./games/events')

const authUi = require('./auth/ui')

const gameUi = require('./games/ui')


$(() => {
  // Selects for signup button forms to run event
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('.box').on('click', gameEvents.onPlayerTurn)

  $('.box').on('click', gameEvents.onBoardArray)

  $('#new-game').on('click', gameEvents.onGetNewGame)

  $('.box').on('click', gameEvents.onGameUpdate)

  $('#get-all-games').on('click', gameEvents.onIndexAllGames)

  $('#create-account').on('click', authUi.onCreateAccount)

  $('#exit-sign-up').on('click', authUi.onExitSignUp)

  $('#start-button').on('click', authUi.onStartButton)

  $('#exit-game-record').on('click', gameUi.onExitGameRecord)

  $('#account-settings').on('click', authUi.onAccountSettings)

  $('#exit-account-settings').on('click', authUi.onExitAccountSettings)

})
