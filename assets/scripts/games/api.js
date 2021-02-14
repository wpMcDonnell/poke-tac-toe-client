const config = require('../config')

const store = require('../store.js')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    //  send form data when making our update request
    data: {
    }
  })
}

module.exports = {
  newGame

}
