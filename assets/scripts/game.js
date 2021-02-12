

let turn = 1

const hitmonlee = '<img src="./images/hitmonlee.png">'
const hitmonchan = '<img src="./images/Hitmonchan.png">'
const pokeball = '<img class="img" src="./images/pokeball.gif">'

const move = function (event) {
  console.log($(event.target).html())
  if ((turn === 1) && ($(event.target).html() === pokeball)) {
    $('#user-message').text('')
    $(event.target).html('')
    $(event.target).html('<img src="./images/hitmonlee.png">')
    turn = 2
  } else if ((turn === 2) && ($(event.target).html() === pokeball)) {
    $(event.target).html('')
    $(event.target).html('<img src="./images/Hitmonchan.png">')
    turn = 1
    console.log(event.target.children)
  }
}

module.exports = {
  move

}
