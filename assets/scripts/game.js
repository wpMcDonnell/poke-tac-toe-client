

let turn = 1

const hitmonlee = '<img src="./images/hitmonlee.png">'
const hitmonchan = '<img src="./images/Hitmonchan.png">'
const pokeball = '<img class="img" src="./images/pokeball.gif">'

const move = function (event) {
  if ((turn === 1) && ($(event.target).html() === pokeball)) {
    $('#user-message').text('')
    $(event.target).html('')
    $(event.target).val('x')
    $(event.target).html(hitmonlee)
    turn = 2
    console.log($(event.target).data())
  } else if ((turn === 2) && ($(event.target).html() === pokeball)) {
    $(event.target).html('')
    $(event.target).val('o')
    $(event.target).html(hitmonchan)
    console.log($(event.target).data())
    turn = 1
  }
}

const gameArray = function (event) {
  if ($(event.taget).data(0).val() && $(event.taget).data(3).val() && $(event.taget).data(4).val() === 'x') {
    console.log('you did it')
  }
}

module.exports = {
  move,
  gameArray

}
