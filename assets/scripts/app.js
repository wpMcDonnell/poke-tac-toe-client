'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')

const gameEvents = require('./games/events')


$(() => {
  // Selects for signup button forms to run event
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('click', authEvents.onSignOut)

  $('.box').on('click', gameEvents.onPlayerTurn)

  $('.box').on('click', gameEvents.onBoardArray)

  $('#new-game').on('click', gameEvents.onGetNewGame)
})
