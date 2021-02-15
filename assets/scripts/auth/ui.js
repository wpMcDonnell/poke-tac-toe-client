const store = require('./../store')

$('#sign-up').hide()
$('#change-password').hide()
$('#sign-out').hide()
$('#new-game').hide()
$('.poke-board').hide()
$('#game-board-title').hide()
$('#intro-music').trigger('play')

const signUpSuccess = function (response) {
  $('#sign-up-success-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
  $('#sign-out-message').text('')
  $('#user-message').text('')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-up-prompt').show()
  $('#create-account').show()
}
const signUpFailure = function (response) {
  $('#sign-up-error-message').text('Sign up failed, try again')
  $('#sign-out-message').text('')
}

const signInSuccess = function (response) {
  store.user = response.user


  $('#user-message').text('Sign in successful')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-out-message').text('')
  $('#sign-in-title').hide()
  $('#game-board-title').show()
  $('#music').trigger('play')
  $('#new-game').show()
  $('#get-all-games').show()
  $('#intro-music').trigger('pause')

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
  $('#sign-out').hide()
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

}

const signOutFailure = function (response) {
  $('#sign-out-message').text('Sign out failed, try again')
}

const onCreateAccount = function () {
  $('#sign-in').hide()
  $('#sign-up').show()
  $('#sign-up-prompt').hide()
  $('#create-account').hide()
}

const onExitSignUp = function () {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-up-prompt').show()
  $('#create-account').show()
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
  onExitSignUp
}
