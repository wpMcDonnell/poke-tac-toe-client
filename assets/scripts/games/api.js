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

const updateGame = function (updates) {
  return $.ajax({
    url: config.apiUrl + '/games/' + `${store.game._id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: updates
  })
}

const index = function () {
  return $.ajax({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    url: config.apiUrl + '/games'
  })
}

module.exports = {
  newGame,
  updateGame,
  index

}
