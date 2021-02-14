const store = require('./../store')


const onNewGameSuccess = function (response) {
  console.log(response)
}

const onNewGameError = function () {
  console.log('it didnt work')

}

  module.exports = {
    onNewGameSuccess,
    onNewGameError

  }
