const store = require('./../store')

const signUpSuccess = function (response) {
  $('#sign-up-success-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function (response) {
  $('#sign-up-error-message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  $('#sign-in-success-message').text('Sign in successful')
  $('#sign-ip').trigger('reset')
}

const signInFailure = function (response) {
  $('#sign-ip-error-message').text('Sign in failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure

}
