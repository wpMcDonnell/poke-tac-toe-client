const config = require('../config')

const store = require('../store.js')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/books/',
    //  send form data when making our update request
    data: {
      "game": {
    "cells": ["","","","","","","","",""],
    "over": false,
    "_id": "5e823ba98929cc4e95e2f5d9",
    "owner": "5e82311c8929cc4e95e2f5d8",
    "createdAt": "2020-03-30T18:34:17.772Z",
    "updatedAt": "2020-03-30T18:34:17.772Z",
    "__v": 0
  }
}

  })
}
module.exports = {
  newGame

}
