'use strict'

let apiUrl
const apiUrls = {
  // links from https://git.generalassemb.ly/ga-wdi-boston/game-project-api
  production: 'https://tic-tac-toe-api-production.herokuapp.com',
  development: 'https://tic-tac-toe-api-development.herokuapp.com'
  // production: '<replace-with-heroku-url>',
  // development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
