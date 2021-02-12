const store = require('./../store')

$('#change-password').hide()
$('#sign-out').hide()
// $('.poke-board').hide()
// $('#game-board-title').hide()

const signUpSuccess = function (response) {
  $('#sign-up-success-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
  $('#sign-out-message').text('')
  $('#user-message').text('')

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
  $('.poke-board').show()
  $('#sign-in-title').hide()
  $('#game-board-title').show()
}

const signInFailure = function (response) {
  $('#sign-in-message').text('Sign in failed, try again')
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
}

const signOutFailure = function (response) {
  $('#sign-out-message').text('Sign out failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
