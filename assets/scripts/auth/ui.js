// import { newGameVar } from '../games/ui'

const store = require('./../store')

$('#sign-up').hide()
$('#change-password').hide()
$('#new-game').hide()
$('.poke-board').hide()
$('#game-board-title').hide()
$('#sign-in').hide()
$('#create-account').hide()
$('#sign-up-prompt').hide()
$('.options-row').hide()


const signUpSuccess = function (response) {
  $('#sign-up-success-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
  $('#sign-out-message').text('')
  $('#user-message').text('')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-up-prompt').show()
  $('#create-account').show()
  $('#sign-up-error-message').html('')

}
const signUpFailure = function (response) {
  $('#sign-up-error-message').text('Sign up failed, try again')
  $('#sign-out-message').text('')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user


  $('#user-message').text('Sign in successful')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out-message').text('')
  $('#sign-in-title').hide()
  $('#game-board-title').show()
  $('#music').prop('currentTime', 0)
  $('#music').trigger('play')
  $('#new-game').show()
  $('#get-all-games').show()
  $('#intro-music').trigger('pause')
  $('#sign-up-prompt').hide()
  $('#create-account').hide()
  $('.options-row').show()
  $('#account-settings').show()
}

const signInFailure = function (response) {
  $('#user-message').text('Sign in failed, try again')
  $('#sign-out-message').text('')
}

const changePasswordSuccess = function () {
  $('#password-success-message').text('Password changed successfully')
  $('#change-password').trigger('reset')
  $('#sign-in-message').text('')
  $('#user-message').text('')
}

const changePasswordFailure = function () {
  $('#password-error-message').text('Password was not changed. Try again')
}

const signOutSuccess = function (response) {
  store.user = null

  $('#user-message').text('sign out successful')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.poke-board').hide()
  $('#game-board-title').hide()
  $('#new-game').hide()
  $('#player-message').html('')
  $('.games-display').html('')
  $('#get-all-games').hide()
  $('#sign-in-title').show()
  $('#music').trigger('pause')
  $('#intro-music').prop('currentTime', 0)
  $('#intro-music').trigger('play')
  $('#sign-up').hide()
  $('#sign-up-prompt').show()
  $('#create-account').show()
  $('.options-row').hide()
  $('#exit-game-record').hide()
  $('#password-error-message').html('')
  $('#password-success-message').html('')
  $('#new-game').data('clicked', 'no')
}

const signOutFailure = function (response) {
  $('#sign-out-message').text('Sign out failed, try again')
}

const onCreateAccount = function () {
  $('#sign-in').hide()
  $('#sign-up').show()
  $('#sign-up-prompt').hide()
  $('#create-account').hide()
  $('#user-message').html('')
  $('#sign-in').trigger('reset')
  $('#sign-up-success-message').html('')
}

const onExitSignUp = function () {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-up-prompt').show()
  $('#create-account').show()
  $('#user-message').html('')
  $('#sign-in').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-up-error-message').html('')

}

const onStartButton = function () {
  $('#sign-in').show()
  $('#sign-up-prompt').show()
  $('#create-account').show()
  $('#start-button').hide()
  $('#start-screen-message').hide()
  $('#intro-music').trigger('play')
}

const onAccountSettings = function () {
  $('#user-message').html('')
  $('#game-board-title').hide()
  $('#new-game').hide()
  $('#player-message').hide()
  $('.poke-board').hide()
  $('#get-all-games').hide()
  $('#change-password').show()
  $('#account-settings').hide()
  $('.game-display').hide()
  $('#exit-game-record').hide()
  $('.games-display').hide()
}



module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onCreateAccount,
  onExitSignUp,
  onStartButton,
  onAccountSettings

}
